# Learning: Options Pages

## What is an Options Page?

An options page is a dedicated HTML page where users can configure your extension's settings. It's accessible via:
- Right-click extension icon → "Options"
- Extension details page → "Options" link

## Manifest Configuration

```json
{
  "options_page": "options.html"
}
```

## Storage API

### chrome.storage.sync
- Syncs across all user's Chrome instances
- Limited to ~100KB
- Best for user preferences

### chrome.storage.local
- Stored locally only
- Larger limit (~10MB)
- Best for cache-like data

## Best Practices

1. **Provide defaults**: Always have sensible defaults
2. **Validate input**: Check values before saving
3. **Show feedback**: Let users know when settings are saved
4. **Support reset**: Allow users to restore defaults

## Resources

- [Options Page Docs](https://developer.chrome.com/docs/extensions/mv3/options/)
- [Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)
