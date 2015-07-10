/// <reference path="./lory.js.d.ts" />
(function () {
    var elm = document.querySelector('.js-foo');
    var elm2 = document.querySelector('.js-bar');
    var elm3 = document.querySelector('.js-baz');
    var elm4 = document.querySelector('.js-foobar');
    //////////////////////////////////////////////////
    //  Init
    //////////////////////////////////////////////////
    lory(elm);
    // with options
    lory(elm2, {
        slidesToScroll: 1,
        slideSpeed: 300,
        rewindSpeed: 600,
        snapBackSpeed: 200,
        ease: 'ease',
        rewind: true,
        infinite: false
    });
    // with callbacks
    lory(elm3, {
        beforeInit: function () {
        },
        afterInit: function () {
        },
        beforePrev: function () {
            return 1;
        },
        beforeNext: function () {
            return false;
        },
        beforeTouch: function () {
            return '';
        },
        beforeResize: function () {
        }
    });
    // with options & callbacks
    lory(elm4, {
        slidesToScroll: 1,
        slideSpeed: 300,
        rewindSpeed: 600,
        snapBackSpeed: 200,
        ease: 'ease',
        rewind: true,
        infinite: 4,
        beforeInit: function () {
            return function () {
                console.log('foo');
            };
        },
        afterInit: function () {
            return [0, 1];
        },
        beforePrev: function () {
        },
        beforeNext: function () {
        },
        beforeTouch: function () {
        },
        beforeResize: function () {
            return {};
        }
    });
    //////////////////////////////////////////////////
    //  Public API
    //////////////////////////////////////////////////
    lory.setup();
    lory.prev();
    lory.next();
    lory.reset();
    lory.slideTo(1);
}());
