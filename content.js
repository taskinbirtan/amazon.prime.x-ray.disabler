// content.js
function toggleXRayOverlay(enable) {
  const xrayOverlays = document.querySelectorAll('.atvwebplayersdk-overlays-container');
  xrayOverlays.forEach(overlay => {
    overlay.style.display = enable ? 'none' : 'block';
  });
}

// Sayfa yüklendiğinde X-Ray Overlay elementini gizle veya göster
window.addEventListener('load', () => {
  chrome.storage.sync.get(['xrayEnabled'], function(result) {
    if (result.xrayEnabled !== undefined) {
      toggleXRayOverlay(result.xrayEnabled);
    }
  });
});

// Mesajları dinleyerek durumu güncelle
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.xrayEnabled !== undefined) {
    toggleXRayOverlay(request.xrayEnabled);
  }
});
