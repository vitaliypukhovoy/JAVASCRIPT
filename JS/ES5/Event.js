(function(){
    function addWindowEvent (event, fn) {
        var old = window[event];
        if (typeof old !== 'function') {
            window[event] = fn;
            return;
        }

        window[event] = function () {
            old.apply(window, arguments);
            fn.apply(window, arguments);
        }
    }

    window.addOnLoad = function (fn) {
        addWindowEvent('onload', fn)
    }

    window.addOnError = function (fn) {
        addWindowEvent('onerror', fn)
    }

})();