import React, { useEffect, useState } from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const LoginContextProvider = ({ child }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {child}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
