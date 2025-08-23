'use client';

import { useEffect, useRef } from 'react';

export default function TableOfContent() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;

    // Append '#' to titles, and build table of content
    let tableOfContent = document.getElementById('table-of-content');
    if (!tableOfContent) return;
    const titles = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    const titleStack = [];
    for (const title of titles) {
      // Build table of content
      const titleLevel = parseInt(title.tagName.slice(1));
      if (!titleStack.length) titleStack.push(titleLevel);

      let currentLevel;
      while (titleLevel < (currentLevel = titleStack[titleStack.length - 1])) {
        if (!titleStack.length) {
          alert('Cannot build table of content. Bad title chaining.');
          return;
        }
        titleStack.pop();
        tableOfContent = tableOfContent.parentNode.parentNode;
      }

      if (titleLevel > currentLevel) {
        titleStack.push(titleLevel);
        const newTable = document.createElement('ul');
        tableOfContent.lastChild.appendChild(newTable);
        tableOfContent = newTable;
      }

      const item = document.createElement('li');
      item.innerHTML = `<a href="#${title.id}">${title.textContent}</a>`;
      tableOfContent.appendChild(item);

      // Append '#' to the title
      title.innerHTML += ` <a class="title-anchor" href="#${title.id}">#</a>`;
    }

    done.current = true;
  }, []);

  return (
    <ul id="table-of-content">
    </ul>
  );
}
