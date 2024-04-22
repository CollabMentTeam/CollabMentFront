import { FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
import Footer3 from "../components/Footer3";
import Navigation1 from "../components/Navigation1";
import { Link } from "react-router-dom";
import styles from "./Team.module.css";
import axios from "axios";

interface selectedTeam {
    creator_last_login_date: any;
    id: number;
    name: string;
    description: string;
}

const Team: FunctionComponent = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState<selectedTeam | null>(null);
    const modalRef = useRef(null);


    useEffect(() => {
        // Функция для получения списка команд из API
        const fetchTeams = async () => {
            try {
                const response = await axios.get('https://collabmentteam.pythonanywhere.com/api/teams/list/');
                setTeams(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Ошибка при получении списка команд:', error);
            }
        };

        fetchTeams();
    }, []);

    const getTeamsId = (team:any) => {
        const members = team.members.join(','); // Преобразуем список участников в строку для передачи в параметр строк запроса
        window.location.href = `/video?members=${members}`;   
    };

    const openModal = (team: any) => {
        setSelectedTeam(team);
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    };

    const closeModal = () => {
        setSelectedTeam(null);
        localStorage.removeItem('selectedTeam');
    };

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current) {
            const modalElement = modalRef.current as HTMLElement;
            if (!modalElement.contains(event.target as Node)) {
                closeModal();
            }
        }
    };
    
    return (
        <>
            <Navigation1 />
            <div className={styles.containerForCreate}>
            <button className={styles.createBtn} onClick={() => window.location.href = "/createTeam"}> Create Team </button>
            </div>
            <div className={styles.containerForTeamFull}>
            <div className={styles.teamContainer}>
                {teams.map((team: any) => (
                    <div className={styles.teamCard} key={team.id}>
                        <img src={team.image} alt={team.name} className={styles.teamImage} />
                        <h3>{team.name}</h3>
                        <p>Инвестиции: {team.investment_amount_needed}</p>
                        <p>Участники: {team.members.length}</p>
                        <button className={styles.detailsButton} onClick={() => openModal(team)}>Подробнее</button>
                    </div>
                ))}
            </div>
            </div>
            
            <Footer3 />
            {selectedTeam && (
                <div className={styles.modalOverlay} onClick={handleModalClick}>
                    <div className={styles.modal} ref={modalRef}>
                        <button className={styles.closeButton} onClick={closeModal}>Закрыть</button>
                        <h2>{selectedTeam?.name}</h2>
                        <p>{selectedTeam?.description}</p>
                        {selectedTeam?.creator_last_login_date ? (
                            <button className={styles.contactButton} onClick={() => getTeamsId(selectedTeam)}>Связаться</button>
                        ) : (
                            <p>Создатель команды сегодня не в сети</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Team;