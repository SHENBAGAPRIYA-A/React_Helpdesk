import Sidebar from "./Sidebar";
import '../App.css';
import Header from "./Userprofiledrawer";
import Board from "./Board";


export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
      <Header/>
      <Board/>
      </div>
    </div>
  );
}



