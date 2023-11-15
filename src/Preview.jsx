import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Choose a style theme

// Configure marked
marked.setOptions({
    highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
    },
    breaks: true,
});

function Preview({ markdown }) {
    const getMarkdownText = () => {
        const rawMarkup = marked(markdown, { sanitize: true });
        return { __html: rawMarkup };
    };

    return <div className="preview" dangerouslySetInnerHTML={getMarkdownText()} />;
}

export default Preview;
