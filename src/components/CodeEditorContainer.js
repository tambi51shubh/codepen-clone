import React, { useContext } from 'react';
import CodeEditor from './CodeEditor';
import CreateIcon from '@material-ui/icons/Create';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { DataContext } from '../context/DataProvider';


const CodeEditorContainer = ({ viewMode }) => {
  
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <div className='editor-container' style={{ backgroundColor: viewMode.backgroundColor }}>
      <CodeEditor 
      displayName="HTML" 
      viewMode={viewMode} 
      renderIcon={<CreateIcon className="render-icon" style={{ backgroundColor: "red" }} />}
      language='xml'
      value={html}
      onChanged={setHtml}
      />
      <CodeEditor 
      displayName="CSS" 
      viewMode={viewMode} 
      renderIcon={<AcUnitIcon className="render-icon" style={{ backgroundColor: "blue" }} />}
      language='css'
      value={css}
      onChanged={setCss}
      />
      <CodeEditor 
      displayName="JS" 
      viewMode={viewMode} 
      renderIcon={<CreateIcon className="render-icon" style={{ backgroundColor: "yellow" }} />}
      language='javascript'
      value={js}
      onChanged={setJs}
      />
    </div>
  )
}

export default CodeEditorContainer;