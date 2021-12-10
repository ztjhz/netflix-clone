import React, { useEffect, useState } from 'react';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { HiSearch } from 'react-icons/hi';
import ProfileIcon from './ProfileIcon';
import './index.css';

const handleScroll = (setTrans) => {
  if (window.scrollY >= 68) {
    setTrans(false);
  } else {
    setTrans(true);
  }
};

const NavBar = () => {
  const [trans, setTrans] = useState(true);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [dropdownWrapper, setDropdownWrapper] = useState(null);
  const [profileIcon, setProfileIcon] = useState(null);

  const showProfile = () => {
    const dropdownArrow = document.querySelector('.dropdown_arrow');
    dropdownArrow.style.transform = 'rotate(180deg)';

    const profileDropdown = document.querySelector('.profile_dropdown');
    setDropdownHeight(profileDropdown.offsetHeight);
  };

  const handleMouseMove = (e) => {
    if (
      !dropdownWrapper.contains(e.target) &&
      !profileIcon.contains(e.target)
    ) {
      const dropdownArrow = document.querySelector('.dropdown_arrow');
      dropdownArrow.style.transform = 'rotate(0)';
      setDropdownHeight(0);
    }
  };

  useEffect(() => {
    const dropdownContainer = document.querySelector('.profile_wrapper');
    window.addEventListener('scroll', () => handleScroll(setTrans));
    if (dropdownContainer) {
      window.addEventListener('mousemove', (event) =>
        handleMouseMove(event, setDropdownHeight, dropdownContainer)
      );
    }
  }, []);

  useEffect(() => {
    if (!dropdownWrapper) {
      setDropdownWrapper(document.querySelector('.profile_dropdown_wrapper'));
    }
    if (!profileIcon) {
      setProfileIcon(document.querySelector('.profile_icon'));
    }

    if (dropdownHeight > 0) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dropdownHeight]);

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
            {/*  -------------------- drop down menu -------------------------- */}
            <div
              className="profile_dropdown_wrapper"
              style={{ maxHeight: `${dropdownHeight}px` }}
            >
              <div className="profile_dropdown">
                <div>
                  User: <u>ztjhz</u>
                </div>
                <div className="link">Manage Profiles</div>
                <div className="link divide_bottom">Exit Profile</div>
                <div className="link">Account</div>
                <div className="link">Help Center</div>
                <div className="link">Sign out of Netflix</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
