// Options Page - Save and load user preferences

// Default settings
const defaultSettings = {
  enableExtension: true,
  showNotifications: false,
  theme: 'light',
  refreshInterval: 30
};

// Load settings when page opens
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  
  // Set up event listeners
  document.getElementById('saveBtn').addEventListener('click', saveSettings);
  document.getElementById('resetBtn').addEventListener('click', resetSettings);
});

// Load settings from chrome.storage
function loadSettings() {
  chrome.storage.sync.get(Object.keys(defaultSettings), (settings) => {
    // Apply default values for any missing settings
    Object.keys(defaultSettings).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        if (element.type === 'checkbox') {
          element.checked = settings[key] !== undefined ? settings[key] : defaultSettings[key];
        } else {
          element.value = settings[key] !== undefined ? settings[key] : defaultSettings[key];
        }
      }
    });
    
    showStatus('Settings loaded', 'success');
  });
}

// Save settings to chrome.storage
function saveSettings() {
  const settings = {
    enableExtension: document.getElementById('enableExtension').checked,
    showNotifications: document.getElementById('showNotifications').checked,
    theme: document.getElementById('theme').value,
    refreshInterval: parseInt(document.getElementById('refreshInterval').value, 10)
  };
  
  // Validate
  if (settings.refreshInterval < 5 || settings.refreshInterval > 300) {
    showStatus('Refresh interval must be between 5 and 300 seconds', 'error');
    return;
  }
  
  chrome.storage.sync.set(settings, () => {
    showStatus('Settings saved successfully!', 'success');
  });
}

// Reset settings to defaults
function resetSettings() {
  chrome.storage.sync.clear(() => {
    // Reload with defaults
    Object.keys(defaultSettings).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        if (element.type === 'checkbox') {
          element.checked = defaultSettings[key];
        } else {
          element.value = defaultSettings[key];
        }
      }
    });
    
    showStatus('Settings reset to defaults', 'success');
  });
}

// Show status message
function showStatus(message, type) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = type;
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    status.className = '';
  }, 3000);
}
