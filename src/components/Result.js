import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataProvider';


const Result = ({ viewMode }) => {
    const [src, setSrc] = useState('');
    const {html, css, js} = useContext(DataContext);
    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
    const srcCode = `
    <html>
        <body>${html}</body>
        <script>${js}</script>
        <style>${css}</style>
    </html>
    `
    useEffect(() => {
        setTimeout(() => {
            setSrc(srcCode);
        }, 1000)
    }, [html, css, js, srcCode])

  return ( 
    <div className='results-wrapper' >
        <iframe 
            srcDoc={src}
            sandbox='allow-scripts'
            frameBorder={0}
            width='100%'
            height='100%'
            title='Output'
        />
    </div>
  )
}

export default Result;