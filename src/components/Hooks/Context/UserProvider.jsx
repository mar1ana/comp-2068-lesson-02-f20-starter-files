import React, { useState, createContext } from 'react';

// Context is good for push notifications 
// import { UserContext } from 'UserProvider'
export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  return  (
    <UserContext.Provider value={user, setUser}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
