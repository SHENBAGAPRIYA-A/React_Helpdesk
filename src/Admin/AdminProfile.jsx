import './admin.css';
import adminImage from '../assets/admin-image.png';

const Header = () => (
    <div className="header">
      <div className="profile">
        <img src={adminImage} alt="profile" />
        <span>Admin</span>
      </div>
    </div>
  );
export default Header;