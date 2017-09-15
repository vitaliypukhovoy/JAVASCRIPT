// Native selectors.
(function(window, document) {
    'use strict';

    var noop = function() {
    };

    // DOCUMENT LOAD EVENTS
    // not needed at the bottom of the page
    document.addEventListener('DOMContentLoaded', noop);
    window.onload = noop;

    // SELECTORS
    document.getElementById('id');
    document.getElementsByClassName('some-class-name');
    document.getElementsByTagName('a');
    document.querySelectorAll('.class-name');
    // only returns the first match of querySelectorAll
    document.querySelector('.class-name');

    // EACH (NODE LIST)

    var nodes = document.querySelectorAll('.class-name'),
        elements = Array.prototype.slice.call(nodes);

    // 1.
    elements.forEach(noop);

    // 2. (clean, but creates a new array)
    [].forEach.call(nodes, noop);

    // 3.
    Array.prototype.forEach.call(nodes, noop);

    // 4. - jquery style!
    function $$(selector) {
        var nodes = document.querySelectorAll(selector);
        return Array.prototype.slice.call(nodes);
    }

    $$('selector'); // similar to jQuery

    // FIRST
    var nodeList = document.querySelectorAll('.some-class'),
        first = nodeList[0];

    // LAST
    var last = nodeList[nodeList.length - 1];

    // InnerHTML na InnerText
    var node = document.getElementById('my-id');
    node.innerHTML = 'New Html!';
    node.innerText = 'New text';

    // IS A (matches - needs a polyfill in older browsers)
    var node = document.getElementById('header-link'),
        isAnchor = node.matches('a');

    // FILTER
    var nodeList = document.getElementsByClassName('my-class'),
        filtered = Array.prototype.filter.call(nodeList, function(header) {
            // filter condition

            return header.innerText.indexOf('Item') !== -1;
        });

    // FIND
    var parent = document.querySelector('.parent'),
        children = parent.querySelectorAll('.child');

    // NEXT/PREV
    var node = document.getElementById('my-id');
    node.nextElementSibling;
    node.nextElementSibling;

    // CLOSEST
    var node = document.getElementById('my-id'),
        isFound = false;

    while (node instanceof Element) {
        if (node.matches('.target-class')) {
            isFound = true;
            break;
        }
        node = node.parentNode;
    }

    // isFound and node will be populated

    // prototype closest!
    if (Element && !Element.prototype.closest) {
        Element.prototype.closest = function(selector) {
            var el = this;
            while (el instanceof Element) {
                if (el.matches(selector)) {
                    return el;
                }
                el = el.parentNode;
            }
        }
    }

    // NEW ELEMENTS
    var heading = document.createElement('h1'),
        target = document.getElementById('global-nav');

    heading.innerText = 'HELLO WORLD!!!!';
    document.querySelector('.my-class')
        .insertBefore(heading, target);

    // NODE PROPERTIES
    var node = document.getElementById('my-el');
    // style
    node.style.backgroundColor = 'blue';
    // attributes
    node.getAttribute('href');
    // properties
    node.href;
    node.checked;
    node.disabled;
    node.selected;

    // MOCK EVENTS
    var anchor = document.getElementById('my-anchor'),
        event = new Event('click');
    anchor.dispatchEvent(event);

    // Listeners
    var node = document.getElementById('my-node'),

        // this = element
        onClick = function(event) {
            // can filter by target
            if (!event.target.matches('.tab-header')) {
                return;
            }

            // stop the default browser behaviour
            event.preventDefault();

            // stop the event from bubbling up the dom
            event.stopPropagation();

            // other listeners on this node will not fire
            event.stopImmediatePropagation();
        };

    node.addEventListener('click', onClick);
    node.removeEventListener('click', onClick);
    // can also add to all by using loop
    // can add to higher element and use 'matches' to see if specific
    // 	child was clicked (similar to .on)

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/url', true);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log('success!');
        } else {
            console.log('failed', this.status);
        }
    };

    xhr.send();

    var xhrPost = new XMLHttpRequest();
    xhrPost.open('POST', '/url/post', true);
    xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrPost.onload = noop;
    xhrPost.send();

})(window, window.document);