import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState({ data: null, error: false, loading: false });
  const [cookies, setCookie, removeCookie] = useCookies(['email', 'name', 'provider']);

  return (
    <StatusContext.Provider value={{ status, setStatus, cookies, setCookie, removeCookie }}>
      {children}
    </StatusContext.Provider>
  );
};
