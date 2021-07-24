class Common {
    static sleep(ms) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, ms);
        });
    };

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    static loadSVGAsXML(divParent, path, callback) {
        let loadXML = new XMLHttpRequest;
        if (loadXML != null) {
            loadXML.open("GET", path, true);
            loadXML.onreadystatechange = function() {
                if (loadXML.readyState == 4 && loadXML.status == 200) {
                    divParent.innerHTML = divParent.innerHTML + loadXML.responseText;
                    if (callback) {
                        callback();
                    }
                }
            };
            loadXML.send();
        }
    };

    static preloadImages(imageLinkList, minWaitTime, callback) {
        if (minWaitTime == null || minWaitTime < 0) {
            minWaitTime = 0;
        }
        let images = [];
        let loaded = 0;
        let startTime = (new Date()).getTime();
        let onLoaded = function() {
            loaded = loaded + 1;
            if (loaded < imageLinkList.length) {
                return;
            }
            if (callback == null) {
                return;
            }
            let endTime = (new Date()).getTime();
            console.log(endTime);
            let loadingTime = endTime - startTime;
            let timeLeft = Math.max(minWaitTime - loadingTime, 0);
            window.setTimeout(function() {
                callback();
            }, timeLeft);
        };
        for (let i = 0; i < imageLinkList.length; i++) {
            images[i] = new Image();
            images[i].onload = function() {
                onLoaded();
            };
            images[i].onerror = function() {
                onLoaded();
            };
            images[i].src = imageLinkList[i];
        }
    }
};