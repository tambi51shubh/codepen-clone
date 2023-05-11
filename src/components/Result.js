import React, { useContext, useEffect, useState, useRef } from 'react';
import { DataContext } from '../context/DataProvider';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Result = (c) => {
    const [loading, setLoading] = useState(false);
    const { html, css, js, src, setSrc } = useContext(DataContext);
    const srcCode = `
    <html>
        <body>${html}</body>
        <script>${js}</script>
        <style>${css}</style>
    </html>
    `;
    const prevSrc = useRef('');
    const debouncingNature = () => {
        document.getElementById('editor-container').addEventListener("keyup", () => {
            setLoading(true);
            if (prevSrc.current === srcCode) {
                setTimeout(() => {
                    setLoading(false);
                    setSrc(prevSrc.current);
                }, 1500)
            }
        })
    }
    useEffect(() => {
        prevSrc.current = srcCode;
        debouncingNature();
        return () => clearTimeout(debouncingNature);
    }, [srcCode])

  return ( 
    <div className='results-wrapper' >
        {
            loading ?
            <Box sx={{ width: '100%' }}>
                <LinearProgress sx={{ height: '8px' }}/>
            </Box> :
            <iframe 
                srcDoc={src}
                sandbox='allow-scripts'
                frameBorder={0}
                width='100%'
                height='100%'
                title='Output'
            />
        }
    </div>
  )
}

export default Result;