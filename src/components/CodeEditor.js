import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import {Controlled as CodeMirror} from 'react-codemirror2';

const CodeEditor = ({
    viewMode, 
    displayName, 
    renderIcon, 
    language,
    value,
    onChanged
}) => {
    const [fullscreen, setFullscreen] = useState(false);
    const [dropDown, setDropDown] = useState(true);

    const changeViewSetting = () => {
        if (window.innerWidth <= 600) {
            setDropDown((prevDropDown) => !prevDropDown);
            return;
        }
        setFullscreen((prevScreen) => !prevScreen);
    }
    const handleChanged = (editor, data, value) => {
        onChanged(value);
    }
 
  return (
    <div className='box-container' style={{ backgroundColor: viewMode.backgroundColor, color: viewMode.color, borderTop: `1px solid ${viewMode.editorBackground}`, width: fullscreen && '90vw' }}>
        <div className='box-title'>
            <div className='box-title-name' style={{ backgroundColor: viewMode.editorBackground, color: viewMode.color }}>
                {renderIcon}
                {displayName}
            </div>
            <Button onClick={changeViewSetting}>
                {
                    fullscreen ?
                    <ChevronLeftIcon style={{ backgroundColor: viewMode.backgroundColor, color: viewMode.color }}/>
                    :
                    <ChevronRightIcon style={{ backgroundColor: viewMode.backgroundColor, color: viewMode.color }}/>
                }
            </Button>
        </div>
        <div className='code-mirror-textarea' style={{ backgroundColor: viewMode.editorBackground, color: viewMode.color  }}>
            <CodeMirror 
                value={value}
                onBeforeChange={handleChanged}
                options={{
                    mode: language,
                    lineNumbers: true,
                    lint: true,
                    lineWrapping: true
                }}
            />    
        </div>
    </div>
  )
}

export default CodeEditor;