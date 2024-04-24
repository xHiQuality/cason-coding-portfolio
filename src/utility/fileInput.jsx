import React, {useEffect, useState} from "react";

export default function FileContent({filepath}) {
    const [fileContent, setFileContent] = useState('');

   useEffect(() => {
    fetch("/cason-coding-portfolio/readfiles/"+filepath)
    .then(response => response.text())
    .then(text => setFileContent(text))
    .catch(err => console.error('Failed to fetch file', err));
   }, [filepath]);

    return (
            <pre><code>{fileContent}</code></pre>
    )
}