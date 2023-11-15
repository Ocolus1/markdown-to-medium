import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css'; 

function App() {
  const [markdown, setMarkdown] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.querySelector('.preview').innerText)
      .then(() => setCopySuccess('Copied!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="app-container">
      <div className="up_div1">
        <h2>Markdown to medium</h2>
      </div>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
      <div className="up_div">
        {copySuccess && <span>{copySuccess}</span>}
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
    </div>
  );
}

export default App;
