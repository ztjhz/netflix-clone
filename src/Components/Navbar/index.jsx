import React, { useEffect, useState } from 'react';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { HiSearch } from 'react-icons/hi';
import Profile from './Profile';
import ProfileIcon from './ProfileIcon';
import './index.css';

const NavBar = () => {
  const [trans, setTrans] = useState(true);
  const [profile, setProfile] = useState();

  const showProfile = () => {
    const dropdownArrow = document.querySelector('.dropdown_arrow');
    dropdownArrow.style.transform = 'rotate(180deg)';
    document.querySelector('.profile_icon').appendChild(profile);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 68) {
        setTrans(false);
      } else {
        setTrans(true);
      }
    });
    const p = Profile();
    p.addEventListener('mouseleave', () => {
      document.querySelector('.profile_icon').removeChild(p);
      document.querySelector('.dropdown_arrow').style.transform =
        'rotate(0deg)';
    });
    setProfile(p);
  }, []);

  return (
    <>
      <nav
        className="nav_container"
        style={{ backgroundColor: trans ? 'transparent' : '#141414' }}
      >
        <div className="logo_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="logo"
          />
        </div>
        <ul className="links_container">
          <li className="links active">Home</li>
          <li className="links">Series</li>
          <li className="links">Films</li>
          <li className="links">New & Popular</li>
          <li className="links">My List</li>
        </ul>
        <div className="right_container">
          <div className="search_container">
            <HiSearch size={20} />
          </div>
          <div className="children">
            <p>Children</p>
          </div>
          <div className="notification_icon">
            <IoMdNotifications size={20} />
          </div>
          <div className="profile_icon" onMouseEnter={showProfile}>
            <div className="icons_wrapper">
              <ProfileIcon />
              <IoMdArrowDropdown size={20} className="dropdown_arrow" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
