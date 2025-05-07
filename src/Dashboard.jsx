import Sidebar from "./Sidebar";
import Board from "./Board";
import "./App.css";
import UserProfileDrawer from "./Userprofiledrawer";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <UserProfileDrawer />
      <Board />
    </div>
  );
}
