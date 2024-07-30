import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase-config';
import { MenuNormal, MenuEditable } from '../Components/Menues'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Menu = ({ username }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  if (isLoggedIn && currentUser && currentUser.displayName === username) {
    // Logged in user matches the username
    return <MenuEditable username={username} />;
  } else {
    // User is not logged in or logged in user does not match the username
    return <MenuNormal username={username} />;
  }
};

export default Menu;
