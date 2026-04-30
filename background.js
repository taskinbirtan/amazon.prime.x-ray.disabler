const TARGET_HOSTS = [
  '*://*.primevideo.com/*',
  '*://*.amazon.com/*',
  '*://*.amazon.co.uk/*',
  '*://*.amazon.de/*'
];

async function injectIntoExistingTabs() {
  try {
    const tabs = await chrome.tabs.query({ url: TARGET_HOSTS });
    await Promise.all(tabs.map(async (tab) => {
      if (tab.id == null) return;
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id, allFrames: false },
          files: ['content.js']
        });
      } catch (_) {
        // tab may not be scriptable (chrome:// etc.) — ignore
      }
    }));
  } catch (e) {
    console.warn('X-Ray Disabler: tab injection failed', e);
  }
}

chrome.runtime.onInstalled.addListener(injectIntoExistingTabs);
chrome.runtime.onStartup.addListener(injectIntoExistingTabs);
