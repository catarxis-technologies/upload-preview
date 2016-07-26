# upload-preview #

This library uses the File API to read an image and show its preview.

## Options ##

- **inputSelector:** The selector for the `input` element.
- **previewSelector:** The selector for the preview container.
- **imgClass:** The CSS class for the preview images.

## Usage ##

For example:

**HTML**

```html
<form>
    <div class="form-group">
        <label class="control-label" for="file">Photo</label>
        <input id="file" name="file" type="file">
        <span class="help-block hidden"></span>
    </div>
    <div id="preview" class="form-group"></div>
</form>
```

**JavaScript**

```javascript
var preview = new UploadPreview({
    inputSelector: '#file',
    previewSelector: '#preview',
    imgClass: 'preview'
});
```
