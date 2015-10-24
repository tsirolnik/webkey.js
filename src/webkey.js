var webkey = (function(){
    return {
        press   :   function(bindings) {
            // Store tha handlers as key-value - e.g : {13 : [fn, elment, fn2]}
            var pressHandlers = {};
            bindings.forEach(function(binding) {
                // Build up the handlers in the pressHandlers object
                if (!pressHandlers.hasOwnProperty(binding[0]))  pressHandlers[binding[0]] = [];
                pressHandlers[binding[0]].push(binding[1]);
            });

            window.addEventListener('keypress', function(e) {
                var key = 'which' in e ? e.which : e.keyCode;
                if (pressHandlers.hasOwnProperty(key)) {
                    // Iterate over the existing handlers
                    pressHandlers[key].forEach(function(handler) {
                        if(typeof handler === 'function') {
                            return handler(e);
                        }
                        if(handler instanceof HTMLFormElement) {
                            return handler.submit();
                        }
                        if(handler instanceof HTMLElement) {
                            return handler.click();
                        }
                    });
                }
            });

        },
        keyCodes    :   {
            'ENTER' : 13,
            'LEFT' : 37,
            'UP' : 38,
            'RIGHT' : 39,
            'DOWN' : 40,
            'SPACE' : 32,
            'BACK_SPACE' : 8,
            '0' : 48,
            '1' : 49,
            '2' : 50,
            '3' : 51,
            '4' : 52,
            '5' : 53,
            '6' : 54,
            '7' : 55,
            '8' : 56,
            '9' : 57,
            'A' : 65,
            'B' : 66,
            'C' : 67,
            'D' : 68,
            'E' : 69,
            'F' : 70,
            'G' : 71,
            'H' : 72,
            'I' : 73,
            'J' : 74,
            'K' : 75,
            'L' : 76,
            'M' : 77,
            'N' : 78,
            'O' : 79,
            'P' : 80,
            'Q' : 81,
            'R' : 82,
            'S' : 83,
            'T' : 84,
            'U' : 85,
            'V' : 86,
            'W' : 87,
            'X' : 88,
            'Y' : 89,
            'Z' : 90,
            'RED' : 403,
            'GREEN' : 404,
            'YELLOW' : 405,
            'BLUE' : 406,
            'HELP' : 156,
            'SEARCH' : 112,
            'AUDIODESCRIPTION' : 113,
            'HD' : 114,
            'PLAY' : 415,
            'PAUSE' : 19,
            'PLAY_PAUSE' : 402,
            'STOP' : 413,
            'PREV' : 424,
            'NEXT' : 425,
            'FAST_FWD' : 417,
            'REWIND' : 412,
            'INFO' : 457,
            'SUBTITLE' : 460,
            'BACK' : 461,
            'VOLUME_UP' : 447,
            'VOLUME_DOWN' : 448,
            'MUTE' : 449,
        }
    };
})()

webkey.press([
    [webkey.keyCodes.ENTER,function() {alert(1)}]
]);
