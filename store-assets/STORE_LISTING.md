# Chrome Web Store — Store Listing Copy

> Use these strings on
> https://chrome.google.com/webstore/devconsole → Amazon Prime X-Ray Disabler → Store listing.

---

## Item details

### Name
```
Amazon Prime X-Ray Disabler
```

### Summary (132 char max)
```
Hide the X-Ray panel and pop-ups on Amazon Prime Video. Stop cast spoilers, trivia and song titles from ruining your watch.
```

### Category
```
Entertainment
```

---

## Description (English — paste into the "Description" field)

```
Watch without spoilers.

Amazon Prime Video's X-Ray feature spoils more than it reveals. Cast names, character roles, IMDb trivia and "playing now" song titles appear on top of the player and on the side panel — often before you've even met a character. X-Ray Disabler hides them all, so you can just watch.

WHAT IT DOES
• Hides the X-Ray side panel (cast & crew cards, "scenes" lists, trivia)
• Suppresses the in-player X-Ray pop-ups
• Works with the redesigned Prime Video NextGen player
• Toggle on or off any time from the toolbar popup
• Your preference is remembered across sessions and synced with your Chrome profile

ONE-CLICK CONTROL
A clean popup gives you a single switch. No settings page, no clutter — flip it and the X-Ray panel disappears instantly. No page reload needed.

PRIVACY-FIRST
• No tracking
• No analytics
• No external requests
• No data leaves your browser
• Open source — audit the code on GitHub

WORKS ON
• primevideo.com
• amazon.com / amazon.co.uk / amazon.de Prime Video sections

Open source on GitHub:
https://github.com/taskinbirtan/amazon.prime.x-ray.disabler

Not affiliated with Amazon, Prime Video or IMDb. "Amazon Prime", "Prime Video" and "X-Ray" are trademarks of their respective owners.
```

---

## Description (Turkish — optional, switch language to Türkçe)

```
Spoiler olmadan izle.

Amazon Prime Video'nun X-Ray özelliği bazen filmin tadını kaçırır: oyuncu isimleri, karakter rolleri, IMDb trivia bilgileri ve sahnede çalan şarkı başlıkları, daha siz karakterle tanışmadan ekrana düşer. X-Ray Disabler bunların hepsini gizler — siz sadece izleyin.

NE YAPIYOR
• X-Ray yan panelini (oyuncu kartları, sahne listeleri, trivia) gizler
• Oynatıcı içindeki X-Ray pop-up'larını engeller
• Yenilenen Prime Video NextGen oynatıcısı ile uyumludur
• Araç çubuğundaki popup'tan dilediğin zaman aç/kapat
• Tercihin oturumlar arasında hatırlanır ve Chrome profilinle senkronize olur

TEK TIKLA KONTROL
Temiz bir popup ile tek anahtar. Ayar sayfası yok, gereksiz menü yok — bas, X-Ray paneli anında kaybolur. Sayfa yenilemeye gerek yok.

GİZLİLİK ÖNCE
• Takip yok
• Analitik yok
• Dış sunucu isteği yok
• Veri tarayıcından çıkmaz
• Açık kaynak — kodu GitHub'da inceleyebilirsin

ÇALIŞTIĞI YERLER
• primevideo.com
• amazon.com / amazon.co.uk / amazon.de Prime Video sayfaları

GitHub:
https://github.com/taskinbirtan/amazon.prime.x-ray.disabler

Amazon, Prime Video veya IMDb ile bağımlı değildir. "Amazon Prime", "Prime Video" ve "X-Ray" ilgili sahiplerinin tescilli markalarıdır.
```

---

## Privacy practices (zorunlu cevaplar)

> Bu kısım dashboard'daki "Privacy practices" tab'ında dolduruluyor.

**Single purpose description:**
```
Hides Amazon Prime Video's X-Ray panel and pop-ups so they don't spoil what the user is watching.
```

**Permission justifications:**

- **storage:** "Used to remember whether the user has enabled or disabled X-Ray, so the choice persists across browser restarts."
- **scripting:** "Used to inject the content script into already-open Prime Video tabs after the extension is installed or updated, so the user does not need to refresh."
- **tabs:** "Used to message the active tab from the popup when the user toggles the switch."
- **activeTab:** "Used so the popup can target the currently active Prime Video tab when the user clicks the toolbar icon."
- **host_permissions (primevideo.com, amazon.com, amazon.co.uk, amazon.de):** "X-Ray runs on these domains; the extension must be able to read and modify the player DOM to hide the X-Ray panel."

**Remote code:** No, I am not using remote code.

**Data usage:**
- Not collected: Personally identifiable information, health, financial, authentication, personal communications, location, web history, user activity, website content.
- Single checkbox to certify: ✅ I do not sell or transfer user data to third parties; I do not use it for purposes unrelated to the item's single purpose; I do not use it to determine creditworthiness or for lending.

---

## Asset checklist

| File | Where to upload |
|---|---|
| `icon-128.png` | (Already in extension as `images/icon128.png`. The 128 you upload via dashboard is just the listing icon.) |
| `promo-tile-440.png` | Store listing → Promotional images → Small promo tile (440×280) |
| `screenshot-1.png` | Store listing → Screenshots #1 |
| `screenshot-2.png` | Store listing → Screenshots #2 |
| `screenshot-3.png` | Store listing → Screenshots #3 |

ZIP for the package upload (Manifest V3): `xray-disabler-v1.3.zip` (already built at repo root).
