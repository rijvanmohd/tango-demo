import React, { useEffect, useState } from "react";

export const StreamContext = React.createContext();

export const StreamProvider = ({ children }) => {
  const [url, setUrl] = useState(null);


  const changeUrl = (new_url) => {
    console.log('new url------',new_url)
    setUrl(new_url)
  }

  return (
    <StreamContext.Provider
      value={{
        url,
        changeUrl
      }}
    >
      {children}
    </StreamContext.Provider>
  );
};