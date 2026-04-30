document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const statusText = document.getElementById('statusText');
  const statusDot = document.getElementById('statusDot');
  const versionLabel = document.getElementById('versionLabel');

  if (versionLabel && chrome.runtime && chrome.runtime.getManifest) {
    versionLabel.textContent = 'v' + chrome.runtime.getManifest().version;
  }

  function render(disabled) {
    if (statusText) {
      statusText.textContent = disabled ? 'X-Ray is OFF' : 'X-Ray is ON';
    }
    if (statusDot) {
      statusDot.classList.toggle('off', disabled);
      statusDot.classList.toggle('on', !disabled);
    }
    toggleButton.textContent = disabled ? 'Enable X-Ray' : 'Disable X-Ray';
    toggleButton.classList.toggle('is-disabled-state', disabled);
  }

  function applyToTab(tabId, newDisabled) {
    chrome.tabs.sendMessage(tabId, { xrayDisabled: newDisabled }, function () {
      if (chrome.runtime.lastError) {
        chrome.scripting.executeScript(
          { target: { tabId }, files: ['content.js'] },
          function () {
            if (chrome.runtime.lastError) {
              console.warn('X-Ray injection failed:', chrome.runtime.lastError.message);
              return;
            }
            chrome.tabs.sendMessage(tabId, { xrayDisabled: newDisabled }, function () {
              void chrome.runtime.lastError;
            });
          }
        );
      }
    });
  }

  chrome.storage.sync.get(['xrayDisabled'], function (result) {
    render(result.xrayDisabled === true);
  });

  toggleButton.addEventListener('click', function () {
    chrome.storage.sync.get(['xrayDisabled'], function (result) {
      const newDisabled = !(result.xrayDisabled === true);
      chrome.storage.sync.set({ xrayDisabled: newDisabled }, function () {
        render(newDisabled);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          if (tabs[0] && tabs[0].id != null) {
            applyToTab(tabs[0].id, newDisabled);
          }
        });
      });
    });
  });
});
