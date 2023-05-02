import React, { useState }  from "react";
import CodeEditorContainer from "./CodeEditorContainer";
import Header from "./Header";
import DataProvider from '../context/DataProvider';
import Result from "./Result";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const modeChanged = () => {
      setDarkMode((prevMode) => !prevMode);
  }
  const viewMode = {
    backgroundColor: darkMode ? '#060606' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#060606',
    editorBackground: darkMode ? '#282828' : '#d2d3db'
  }

  return (
    <DataProvider>
      <Header onModeChanged={modeChanged} viewMode={viewMode} darkMode={darkMode}/>
      <CodeEditorContainer viewMode={viewMode} />
      <Result viewMode={viewMode} />
    </DataProvider>
  );
}

export default App;
