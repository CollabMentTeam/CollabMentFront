import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import Network from "./pages/Network";
import NetworkV2 from "./pages/NetworkV2";
import Notices from "./pages/Notices";
import Feed from "./pages/Feed";
import ProfilePageAbout from "./pages/ProfilePageAbout";
import FeedShort from "./pages/FeedShort";
import DashboardSettingsAccount from "./pages/DashboardSettingsAccount";
import DashboardSettingsAccount1 from "./pages/DashboardSettingsAccount1";
import DashboardSettingsLoginDe from "./pages/DashboardSettingsLoginDe";
import LoginRegister from "./pages/LoginRegister";
import LoginRegister1 from "./pages/LoginRegister1";
import LoginRegister2 from "./pages/LoginRegister2";
import LoginRegister21 from "./pages/LoginRegister21";
import LoginRegister3 from "./pages/LoginRegister3";
import LoginRegister4 from "./pages/LoginRegister4";
import Chat from "./pages/Chat";
import Team from "./pages/Team";
import AppVideo from "./AppVideo";
import Jobs from "./pages/Jobs";
import V from "./pages/V";
import CreateJobForm from "./pages/createVacancy";
import ProfilePageContainer from "./pages/ProfileAboutContainer";
import DataHub from "./pages/DataHub";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1-2-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/3-network":
        title = "";
        metaDescription = "";
        break;
      case "/6-notices":
        title = "";
        metaDescription = "";
        break;
      case "/2-feed":
        title = "";
        metaDescription = "";
        break;
      case "/1-profile-page-about":
        title = "";
        metaDescription = "";
        break;
      case "/feedshort":
        title = "";
        metaDescription = "";
        break;
      case "/2dashboard-settings-account-settings":
        title = "";
        metaDescription = "";
        break;
      case "/dash-personal":
        title = "";
        metaDescription = "";
        break;
      case "/2-dashboard-settings-login-details":
        title = "";
        metaDescription = "";
        break;
      case "/login-register":
        title = "";
        metaDescription = "";
        break;
      case "/login-register1":
        title = "";
        metaDescription = "";
        break;
      case "/login-register2":
        title = "";
        metaDescription = "";
        break;
      case "/login-register3":
        title = "";
        metaDescription = "";
        break;
      case "/login-register4":
        title = "";
        metaDescription = "";
        break;
      case "/login-register5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="/network" element={<NetworkV2 />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profileAbout/:username" element={<ProfilePageContainer />} />
      <Route path="/feedshort" element={<FeedShort />} />
      <Route
        path="/MyProfile"
        element={<DashboardSettingsAccount />}
      />
      <Route path="/dash-personal" element={<DashboardSettingsAccount1 />} />
      <Route
        path="/login-details"
        element={<DashboardSettingsLoginDe />}
      />
      <Route path="/login-register" element={<LoginRegister />} />
      <Route path="/signup" element={<LoginRegister1 />} />
      <Route path="/login-register2" element={<LoginRegister2 />} />
      <Route path="/createTeam" element={<LoginRegister21 />} />
      <Route path="/login-register4" element={<LoginRegister3 />} />
      <Route path="/login-register5" element={<LoginRegister4 />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/teams" element={<Team />} />
      <Route path="/video" element={<AppVideo />} />
      <Route path="/jobs" element={<Jobs />} />
      {/* <Route path="/example-form" element={<ExampleForm />} /> */}

      <Route path="/vacancy" element={<V />} />
      <Route path="/data-hub" element={<DataHub />} />

      {/* <Route path="/teamNew" element={<TeamNew />} /> */}

      {/* <Route path="/teamNew" element={<TeamNew />} /> */}

      <Route path="/create-vacancy" element={<CreateJobForm />} />
      {/* <Route path="/networkV2" element={<NetworkV2 />} /> */}

    </Routes>
  );
}
export default App;
