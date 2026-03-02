# Options Page Chrome Extension

A Chrome extension demonstrating options/settings page with chrome.storage.

## What It Does

This extension demonstrates how to create an options/settings page:
- Checkbox settings for enable/disable features
- Dropdown for theme selection
- Number input with validation
- Save/Reset functionality
- Settings persisted with chrome.storage.sync

## How to Install

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `src` folder

## How to Use

1. Right-click extension icon → "Options"
2. Modify settings
3. Click "Save Settings"
4. Settings sync across your Chrome instances

## Project Structure

```
webext-example-options-page/
├── src/
│   ├── manifest.json
│   ├── options.html
│   ├── options.js
│   └── icons/
├── README.md
├── LEARN.md
└── package.json
```

## Key Concepts

### Options Page

```json
{
  "options_page": "options.html"
}
```

### Storage API

```javascript
// Save
chrome.storage.sync.set({ key: 'value' });

// Load
chrome.storage.sync.get(['key'], (result) => {});
```

## Learning Path

1. [Hello World](../webext-example-hello-world)
2. [Popup Basic](../webext-example-popup-basic)
3. [Content Script](../webext-example-content-script-basic)
4. [Background Basic](../webext-example-background-basic)
5. **Options Page** (you are here)

## License

MIT
