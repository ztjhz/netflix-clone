const Profile = () => {
  const container = document.createElement('div');
  container.className = 'profile_dropdown';

  const user = document.createElement('div');
  user.innerHTML = 'User: <u>ztjhz</u>';

  const manage = document.createElement('div');
  manage.innerHTML = 'Manage Profiles';
  manage.classList.add('link');

  const exit = document.createElement('div');
  exit.innerHTML = 'Exit Profile';
  exit.classList.add('link');
  exit.style.borderBottom = '2px solid white';
  exit.style.paddingBottom = '1rem';

  const account = document.createElement('div');
  account.innerHTML = 'Account';
  account.classList.add('link');

  const help = document.createElement('div');
  help.innerHTML = 'Help Center';
  help.classList.add('link');

  const signout = document.createElement('div');
  signout.innerHTML = 'Sign out of Netflix';
  signout.classList.add('link');

  container.appendChild(user);
  container.appendChild(manage);
  container.appendChild(exit);
  container.appendChild(account);
  container.appendChild(help);
  container.appendChild(signout);
  return container;
};

export default Profile;
