import GroupComponent from "../components/GroupComponent1-1";
import RecommendationItem from "../components/RecommendationItem";
import ManagerProfile from "../components/ManagerProfile";
import styles from "./NetworkV2.module.css";
import FooterV2 from "../components/FooterV2";
import Navigation1 from "../components/Navigation1";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Network = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const viewerUsername = localStorage.getItem('username');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://collabmentteam.pythonanywhere.com/api/all_users/');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchFriends = async () => {
      try {
        const response = await axios.get(`https://collabmentteam.pythonanywhere.com/api/friend/list/${viewerUsername}/`);
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchUsers();
    fetchFriends();
  }, [viewerUsername]);

  const addFriend = async (friendUsername) => {
    try {
      await axios.post('https://collabmentteam.pythonanywhere.com/api/friend/add/', {
        friend_username: friendUsername,
        username: viewerUsername
      });
      sendNotifications([friendUsername]);
      alert('User added to friends!');
      window.location.reload();
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const removeFriend = async (friendUsername) => {
    try {
      await axios.post('https://collabmentteam.pythonanywhere.com/api/friend/remove/', {
        friend_username: friendUsername,
        username: viewerUsername
      });
      alert('User removed from friends!');
      setFriends(friends.filter(friend => friend.username !== friendUsername));
    } catch (error) {
      console.error('Error removing friend:', error);
    }
  };

  const sendNotifications = async (members) => {
    try {
        const response = await fetch('https://collabmentteam.pythonanywhere.com/api/create-notification/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usernames: members,
                message: 'New Subscription from' + viewerUsername,
                link : '/network',
            }),
        });
        if (!response.ok) {
            throw new Error('Ошибка при отправке уведомления');
        }
        console.log('Уведомления отправлены успешно');
    } catch (error) {
        console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      <Navigation1 />
      <div className={styles.network}>
        <GroupComponent />
        <section className={styles.recommendations}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <RecommendationItem users={users} addFriend={addFriend} />
          )}
          <div className={styles.memberProfile}>
            <ManagerProfile friends={friends} removeFriend={removeFriend} />
          </div>
        </section>
      </div>
      <FooterV2 />
    </div>
  );
};

export default Network;
