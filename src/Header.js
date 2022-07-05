import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt="Linkedin Logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="Me" onClick={logoutHandler} avatar={true} />
      </div>
    </div>
  );
};

export default Header;