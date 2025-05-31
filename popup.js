const fileInput = document.getElementById('bgFile');
const preview = document.getElementById('preview');
const saveBtn = document.getElementById('saveBtn');

let imgDataUrl = '';

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgDataUrl = e.target.result;
      preview.src = imgDataUrl;
    };
    reader.readAsDataURL(file);
  }
});

saveBtn.addEventListener('click', () => {
  if (imgDataUrl) {
    chrome.storage.sync.set({ bgImage: imgDataUrl }, () => {
      alert('Background saved! Please reload Twitch.');
    });
  } else {
    alert('Please select an image first.');
  }
});

/* This script handles image file selection, previews it, and saves it to browser storage. */
