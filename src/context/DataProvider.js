import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [src, setSrc] = useState('');
  const [saveSrc, setSaveSrc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        login,
        setLogin,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        src,
        setSrc,
        saveSrc,
        setSaveSrc,
        loading,
        setLoading,
        projectTitle,
        setProjectTitle
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;