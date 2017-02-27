var links = document.querySelectorAll('a');
var linksArray = [].slice.call(links);

function ClickHandler(links) {
    'use strict';
    links.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksArray.forEach(ClickHandler);
