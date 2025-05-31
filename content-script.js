chrome.storage.sync.get(['bgImage'], (result) => {
  if (result.bgImage) {
    const containerSelectors = [
      '.video-player__container',
      '.channel-root__player-container',
      '#root'
    ];

    let bgContainer = null;
    for (const selector of containerSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        bgContainer = el;
        break;
      }
    }

    if (bgContainer) {
      bgContainer.style.backgroundImage = `url(${result.bgImage})`;
      bgContainer.style.backgroundSize = 'cover';
      bgContainer.style.backgroundRepeat = 'no-repeat';
    } else {
      console.warn('No suitable container found for background.');
    }
  }
});  
/* This script runs on Twitch pages and sets the saved background image on specific containers. */
