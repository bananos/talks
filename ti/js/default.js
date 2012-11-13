impress.steps = {
    "titanium-mobile": {
        x: -300, y: -600, scale: 5 },
    "native-apps-in-javascript": {
        x: 3200, y: -1500, scale: 3 },
    "native-apps-in-javascript-p1": {
        x: 2600, y: -1100, scale: 1 },
    "native-apps-in-javascript-p2": {
        x: 3700, y: -1100, scale: 1  },
    "native-apps-in-javascript-p3": {
        x: 3200, y: -600, scale: 2 },
    "how-it-works": {
        x: 2600, y: -100, scale: 1  },
    "how-it-works-p1": {
        x: 2600, y: 400, scale: 1  },
    "how-it-works-p2": {
        x: 3700, y: 0, scale: 1  },
    "toolchain": {
        x: 3700, y: 500, scale: 1  },
    "toolchain-p1": {
        x: 5900, y: -1470, scale: 4 },
    "toolchain-p2": {
        x: 4900, y: -1100, scale: 1  },
    "toolchain-p3": {
        x: 5900, y: -1000, scale: 1  },
    "sample-code": {
        x: 6900, y: -1000, scale: 1  },
    "sample-code-p1": {
        x: 6900, y: -350, scale: 1  },
    "sample-code-p2": {
        x: 4900, y: -400, scale: 1  },

    // "it-can-be-done-better-than-that": {
    //     x: 5900, y: -300, scale: 1  },

    "debugging": {
        x: 100, y: 900, scale: 5 },
    "debugging-p1": {
        x: 100, y: 1270, scale: 4 },
    "debugging-p2": {
        x: -800, y: 2000, scale: 1.5 },
   
    "here-be-dragons": {
        x: 2800, y: 1000, scale: 4 },
    "here-be-dragons-p1": {
        x: 2200, y: 1650, scale: 1.5 },
    "here-be-dragons-p2": {
        x: 3500, y: 1550, scale: 1.5 },
    

    "mobile-web": {
        x: 4900, y: 3800, scale: 1.5 },
    "mobile-web-p1": {
        x: 6200, y: 3800, scale: 1.5 },
    "demo": {
        x: 7500, y: 3700, scale: 1.5 },
    
    // "credits": {
    //       x: 8000, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },
  
    "thank-you": {
        x: 6400, y: 1600, scale: 5 }
};

// if (location.pathname.match(/\/3d\/(?:index\.html)?$/)) {
//     document.getElementById('fm1').className = 'fallback-message';
//     document.getElementById('fm2').className = 'fallback-message hidden';
//     impress.init();
// }

// init unconditionally, because we run in latest Chrome only
impress.init();

hljs.initHighlightingOnLoad();


(function () {
    if (!document.querySelector || !Array.prototype.forEach) {
        return;
    }
    var forEach = Array.prototype.forEach
      , keys = Object.keys
      , steps = document.querySelectorAll("div.step")

    forEach.call(steps, function (dom, index) {
        if (dom.id !== 'overview') {
            var wrap = document.createElement("div");
            wrap.className = 'wrap';
            while (dom.firstChild) {
                wrap.appendChild(dom.firstChild);
            }
            dom.appendChild(wrap);
            var counter = wrap.appendChild(document.createElement('div'));
            counter.className = "counter";
            counter.innerHTML = (index + 1) + " / " + steps.length;
        }
    });

    var start = Date.now();
    var timerDom = document.getElementById('timer')
      , log = window.TIMELOG = [];

    var durationToStr = function () {
        var now = Date.now()
          , min = String(Math.floor((now - start)/(1000*60)))
          , sec = String(Math.floor((now - start)/(1000))%60);
        return ((min.length > 1) ? min : ('0' + min)) + ':' +
            ((sec.length > 1) ? sec : ('0' + sec));
    };
   
    setInterval(function () {
           timerDom.innerHTML = durationToStr();
    }, 1000);
   

    window.addEventListener("hashchange", function () {
        console.log("HASH CHANGE", location.hash);
        log.push([location.hash, durationToStr()]);
    }, false);

}());
