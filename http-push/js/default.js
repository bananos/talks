impress.steps = {
    "start": {
        x: -300, y: 100, scale: 5 },
    "intro": {
        x: 3200, y: -1500, scale: 3 },
    "alternate-names": {
        x: 2600, y: -1100, scale: 1 },
    "what-for": {
        x: 3700, y: -1100, scale: 1  },
    "cross-domain-intro": {
        x: 3200, y: -600, scale: 2 },
    "cross-domain-what-for": {
        x: 2600, y: -100, scale: 1  },
    "cross-domain-problems": {
        x: 2600, y: 400, scale: 1  },
    "same-origin-policy": {
        x: 3700, y: 0, scale: 1  },
    "xdp-jsonp-example": {
        x: 3700, y: 500, scale: 1  },
    "xdp-document-domain-example": {
        x: 5900, y: -1470, scale: 4 },
    "xdp-cors": {
        x: 4900, y: -1100, scale: 1  },
    "xdp-web-messaging": {
        x: 5900, y: -1000, scale: 1  },
    
	"comet-implementations": {
        x: 6900, y: -1000, scale: 1  },
    "comet-forever-iframe": {
        x: 6900, y: -350, scale: 1  },
    "comet-x-mixed-replace": {
        x: 4900, y: -400, scale: 1  },
    "comet-ajax-longpolling": {
        x: 100, y: 900, scale: 5 },
    "comet-eventsource": {
        x: 100, y: 1270, scale: 4 },
    "comet-websockets": {
        x: -800, y: 2000, scale: 1.5 },
    "comet-flash-sockets": {
        x: 2800, y: 1000, scale: 4 },
		
    "note-on-ssl": {
        x: 2200, y: 1650, scale: 1.5 },
    "comet-facepalm": {
        x: 3500, y: 1550, scale: 1.5 },
    "comet-crossdomain-results": {
        x: 4900, y: 3800, scale: 1.5 },
		
    "nginx-push-stream": {
        x: 6200, y: 3800, scale: 1.5 },
    "nps-advantages": {
        x: 7500, y: 3700, scale: 1.5 }, 
	"nps-pubsub-example": {
	    x: 6200, y: 3800, scale: 1.5 },
    "nps-pushstream-js-example": {
		    x: 6400, y: 3800, scale: 5 },
    "nps-disadvantages": {
		    x: 6700, y: 3900, scale: 1.5 },
	
    "nps-benchmark": {
		    x: 7000, y: 4000, scale: 5 },
			/*
	"conclusion-p2": {
		    x: 7300, y: 4100, scale: 1.5 },

	"deploy-queue": {
		    x: 7600, y: 4200, scale: 5 },

	"deploy-problems": {
		    x: 7900, y: 4300, scale: 1.5 },

    "complexity-abstraction": {
		    x: 8200, y: 4400, scale: 5 },
	
    "waltzing-with-bearz": {
		    x: 8500, y: 4500, scale: 1.5 },
			*/
    "thank-you": {
        x: 7300, y: 1600, scale: 5 }
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
