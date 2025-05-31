chrome.storage.sync.get(['customCSS'], (result) => {
  if (result.customCSS) {
    const style = document.createElement('style');
    style.innerText = result.customCSS;
    document.head.appendChild(style);
  }
});

/* Loads the user-defined custom CSS and applies it to the Twitch page. */
