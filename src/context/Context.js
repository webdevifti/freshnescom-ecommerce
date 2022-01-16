import React,{createContext} from 'react';
import App from '../App';

export const UserContext = createContext();

const Context = () => {
  return (
    <UserContext.Provider value="Hay">
      <App />
    </UserContext.Provider>
  );
};

export default Context;
