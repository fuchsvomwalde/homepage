// Hand over global langauge key and translation-text json
(function( window ) {
    "use strict";
    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo
    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    } else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // Bootstrap
    window.addEventListener('load', function(e) {
        init();
        addListeners();
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);
    }, false);

    // Declaration & Initializing
    var width, 
        height, 
        largeHeader, 
        canvas, 
        ctx, 
        circles, 
        backgroundSlides, 
        backgroundSlideIndex = 0,
        animateHeader = true,
        bgrInterval,
        aContactItems, 
        // language, 
        hideLangageList,
        isBgrAnimating = false,
        iCurrentBgr = 0;
        // aTextElements;

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        // aTextElements = document.querySelectorAll('[data-txt]');
        // translate();

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';

        // language = document.getElementById('language-setting');

        canvas = document.getElementById('header-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        var numberCircles = 100; //width * 0.5;
        for (var x = 0; x < numberCircles; x++) {
            var c = new Circle();
            circles.push(c);
        }
        limitLoop(animateHeaderCanvas, 30);

        backgroundSlides = document.querySelectorAll('ul.image-wrap li');
        setInterval(animateBackgroundTransition, 5000);

        aContactItems = document.querySelectorAll('.btn-wrapper');

        var i = 0;
        var timeoutAnimation = function() {
            setTimeout(function() {
                aContactItems[i].className = aContactItems[i].className + ' fxFlipInX';
                i++;
                if (i < aContactItems.length) timeoutAnimation();
            }, 100);
        }

        disable_scroll();
        timeoutAnimation();
    }

    // function translate() {
    //     var text_key;
    //     var oTextElement;
    //     for (var i = 0; i < aTextElements.length; i++) {
    //         oTextElement = aTextElements[i];
    //         text_key = oTextElement.getAttribute("data-txt");
    //         if (text_key) {
    //             oTextElement.textContent = _[text_key][l];
    //         }
    //     };
    // }

    // Event handling
    function addListeners() {
        window.addEventListener('resize', resize);
        // for (var i = 0; i < language.children.length; i++) {
        //     language.children[i].addEventListener('click', function(e) {
        //         if (e.currentTarget.nodeName === 'A') {
        //             languageDialog();
        //         } else {
        //             selectLanguage(e);
        //         }
        //     });
        // }
    }

    // function languageDialog() {
    //     if (language.className === '') {
    //         language.className = 'language-select';
    //         clearTimeout(hideLangageList);
    //         hideLangageList = setTimeout(languageDialog, 4000);
    //     } else {
    //         language.className = '';
    //     }
    // }

    // function selectLanguage(e) {
    //     if (e.currentTarget.classList.contains('language-selected')) {
    //         e.preventDefault();
    //     } else {
    //         e.currentTarget.parentNode.querySelector('.language-selected').className = '';
    //         e.currentTarget.className = 'language-selected';

    //         // Update global language and translate
    //         l = e.currentTarget.getAttribute('data-language');
    //         translate();
    //     };
    //     clearTimeout(hideLangageList);
    //     hideLangageList = setTimeout(languageDialog, 4000);
    // }

    function disable_scroll() {
        var preventDefault = function(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        };
        document.body.ontouchmove = function(e) {
            preventDefault(e);
        };
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animateBackgroundTransition() {
        classie.remove( backgroundSlides[backgroundSlideIndex], 'current' );
        backgroundSlideIndex = ( backgroundSlideIndex + 1 ) % ( backgroundSlides.length );
        classie.add( backgroundSlides[backgroundSlideIndex], 'current' );
    }

    var animateHeaderCanvas = function() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in circles) {
                circles[i].draw();
            }
        }
    }

    var limitLoop = function(fn, fps) {

        // Use var then = Date.now(); if you
        // don't care about targetting < IE9
        var then = new Date().getTime();

        // custom fps, otherwise fallback to 60
        fps = fps || 60;
        var interval = 1000 / fps;

        return (function loop(time) {
            requestAnimationFrame(loop);

            // again, Date.now() if it's available
            var now = new Date().getTime();
            var delta = now - then;

            if (delta > interval) {
                // Update time
                // now - (delta % interval) is an improvement over just 
                // using then = now, which can end up lowering overall fps
                then = now - (delta % interval);

                // call the fn
                fn();
            }
        }(0));
    };

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random() * width;
            _this.pos.y = height + Math.random() * 100;
            _this.alpha = 0.1 + Math.random() * 0.3;
            _this.scale = 0.1 + Math.random() * 0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if (_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
            ctx.fill();
        };
    }
})(window);
