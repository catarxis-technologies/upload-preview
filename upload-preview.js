(function (window) {
    'use strict;'

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }

        return a;
    }

    function define() {
        function UploadPreview(options) {
            options = options || {};
            this.input = null;
            this.preview = null;
            this.defaultOptions = {
                inputSelector: '',
                previewSelector: '',
                imgClass: ''
            };
            this.options = extend(this.defaultOptions, options);
            this.init = function () {
                if (window.File && window.FileList && window.FileReader) {
                    if (this.options.inputSelector && this.options.previewSelector) {
                        this.input = document.querySelector(this.options.inputSelector);
                        this.preview = document.querySelector(this.options.previewSelector);
                        var that = this;

                        this.input.addEventListener('change', function () {
                            if (that.input.files.length) {
                                var file = that.input.files[0];
                                var img = document.createElement('img');
                                var reader = new FileReader();
                                reader.addEventListener('load', function (event) {
                                    img.src = event.target.result;

                                    while (that.preview.hasChildNodes()) {
                                        that.preview.removeChild(that.preview.lastChild);
                                    }

                                    if (that.options.imgClass) {
                                        img.classList.add(that.options.imgClass);
                                    }

                                    that.preview.appendChild(img);
                                });

                                reader.readAsDataURL(file);
                            }
                        });
                    }
                } else {
                    console.log('You need a browser with file reader support, to use this form properly.');
                }
            };

            this.init();
        }

        return UploadPreview;
    }

    if (typeof UploadPreview === 'undefined') {
        window.UploadPreview = define();
    }
})(window);
