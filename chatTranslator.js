// Placeholder translation function — replace with real API later
function mockTranslate(text, targetLang = 'en') {
  return `[${targetLang.toUpperCase()}] ${text}`;
}

// Translate individual chat message node
function translateChatMessage(node, lang) {
  const messageSpan = node.querySelector('.text-fragment');
  if (messageSpan && !node.classList.contains('translated')) {
    const originalText = messageSpan.textContent;
    const translated = mockTranslate(originalText, lang);

    const translatedSpan = document.createElement('div');
    translatedSpan.style.fontSize = '11px';
    translatedSpan.style.color = '#aaa';
    translatedSpan.innerText = translated;

    node.appendChild(translatedSpan);
    node.classList.add('translated');
  }
}

// Observe new chat messages and translate them
function startChatTranslator(lang = 'en') {
  const chatObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.querySelector('.text-fragment')) {
          translateChatMessage(node, lang);
        }
      });
    });
  });

  const waitForChat = setInterval(() => {
    const chatList = document.querySelector('[data-a-target="chat-scrollable-area__message-container"]');
    if (chatList) {
      chatObserver.observe(chatList, { childList: true, subtree: true });
      clearInterval(waitForChat);
      console.log('Chat Translator running...');
    }
  }, 1000);
}

// Get preferred language from storage and start translator
chrome.storage.sync.get(['chatLang'], (res) => {
  const lang = res.chatLang || 'en';
  startChatTranslator(lang);
});

/*  
  This script observes Twitch chat messages and appends a translated version below each message.
  Currently uses a placeholder translation function — replace with real translation API integration for full functionality.
*/
