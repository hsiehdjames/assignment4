var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var NUM_1_KEY = 49;
var NUM_2_KEY = 50;
var NUM_3_KEY = 51;
var NUM_4_KEY = 52;
var NUM_5_KEY = 53;
var NUM_6_KEY = 54;
var NUM_7_KEY = 55;
var NUM_8_KEY = 56;
var NUM_9_KEY = 57;
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    var keyThumbnails = getThumbnailsArray();
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        //console.log(keyThumbnails.length);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        } else if (event.keyCode == NUM_1_KEY && keyThumbnails.length >= 1) {
            setDetailsFromThumb(keyThumbnails[0]);
            showDetails();
        } else if (event.keyCode == NUM_2_KEY&& keyThumbnails.length >= 2) {
            setDetailsFromThumb(keyThumbnails[1]);
            showDetails();
        } else if (event.keyCode == NUM_3_KEY&& keyThumbnails.length >= 3) {
            setDetailsFromThumb(keyThumbnails[2]);
            showDetails();
        } else if (event.keyCode == NUM_4_KEY&& keyThumbnails.length >= 4) {
            setDetailsFromThumb(keyThumbnails[3]);
            showDetails();
        } else if (event.keyCode == NUM_5_KEY&& keyThumbnails.length >= 5) {
            setDetailsFromThumb(keyThumbnails[4]);
            showDetails();
        }else if (event.keyCode == NUM_6_KEY&& keyThumbnails.length >= 6) {
            setDetailsFromThumb(keyThumbnails[5]);
            showDetails();
        }else if (event.keyCode == NUM_7_KEY&& keyThumbnails.length >= 7) {
            setDetailsFromThumb(keyThumbnails[6]);
            showDetails();
        }else if (event.keyCode == NUM_8_KEY&& keyThumbnails.length >= 8) {
            setDetailsFromThumb(keyThumbnails[7]);
            showDetails();
        }else if (event.keyCode == NUM_9_KEY&& keyThumbnails.length >= 9) {
            setDetailsFromThumb(keyThumbnails[8]);
            showDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();
