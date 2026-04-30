const XRAY_SELECTORS = [
  '.xrayQuickView',
  '.xrayPopUpView',
  '.popUpContainer',
  '.atvwebplayersdk-overlays-container',
  '[class*="xray"]'
];

function applyXrayState(disabled) {
  const nodes = document.querySelectorAll(XRAY_SELECTORS.join(','));
  nodes.forEach(node => {
    if (disabled) {
      node.dataset.xrayDisabled = '1';
      node.style.setProperty('display', 'none', 'important');
      node.style.setProperty('visibility', 'hidden', 'important');
    } else if (node.dataset.xrayDisabled) {
      node.style.removeProperty('display');
      node.style.removeProperty('visibility');
      delete node.dataset.xrayDisabled;
    }
  });
}

let currentDisabled = false;

function readState(callback) {
  chrome.storage.sync.get(['xrayDisabled'], result => {
    currentDisabled = result.xrayDisabled === true;
    if (callback) callback();
  });
}

const observer = new MutationObserver(() => {
  if (currentDisabled) applyXrayState(true);
});

function startObserving() {
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    requestAnimationFrame(startObserving);
  }
}

readState(() => {
  applyXrayState(currentDisabled);
  startObserving();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (typeof request.xrayDisabled === 'boolean') {
    currentDisabled = request.xrayDisabled;
    applyXrayState(currentDisabled);
    sendResponse({ ok: true });
  }
  return true;
});
