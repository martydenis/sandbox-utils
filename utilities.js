export function initControls () {
    const $controlsTogglers = document.getElementsByClassName('js-controls-toggler')
    for (let i = 0; i < $controlsTogglers.length; i++) {
        const $el = $controlsTogglers[i];

        $el.addEventListener('click', function (e) {
            document.body.classList.toggle('js-is-controls-open')
        });
    }
}

export function initStopPropagation () {
    const $stopPropagationElements = document.getElementsByClassName('js-stop-propagation')
    for (let i = 0; i < $stopPropagationElements.length; i++) {
        const $el = $stopPropagationElements[i];

        $el.addEventListener('touchend', function (e) {
            e.stopPropagation();
        });

        $el.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        $el.addEventListener('mousedown', function (e) {
            e.stopPropagation();
        });
    }
}

export function getAngleBetweenPoints (p1, p2) {
    const dX = p2.x - p1.x;
    const dY = p2.y - p1.y;
    return Math.atan2(dY, dX);
}

export function toDegrees (rad) {
    return rad * 180 / Math.PI;
}

export function easeOut (t) {
    return 1 - Math.pow(1 - t, 2);
}

export function easeOutQuart (t) {
    return 1 - Math.pow(1 - t, 4);
}

export function roundToTwo (num) {
    return +(Math.round(num + "e+2") + "e-2");
}

export function getDistance (p1, p2) {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

export function dpi (value) {
    return value * window.devicePixelRatio;
}

export function randomIntFromRange (min, max, round = true) {
    if (round) {
        return Math.floor(min + Math.random() * (max - min + 1));
    } else {
        return min + Math.random() * (max - min + 1);
    }
}

export function randomValueFromArray (array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function hexToRGB (hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// Throttle function from Lodash
export function throttle (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
