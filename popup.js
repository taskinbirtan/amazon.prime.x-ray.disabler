document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');

  chrome.storage.sync.get(['xrayEnabled'], function(result) {
    toggleButton.textContent = result.xrayEnabled ? 'Close' : 'Open';
  });

  toggleButton.addEventListener('click', function() {
    chrome.storage.sync.get(['xrayEnabled'], function(result) {
      const newStatus = !result.xrayEnabled;
      chrome.storage.sync.set({ xrayEnabled: newStatus }, function() {
        toggleButton.textContent = newStatus ? 'Close' : 'Open';
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { xrayEnabled: newStatus });
        });
      });
    });
  });
});
