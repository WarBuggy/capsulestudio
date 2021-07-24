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

    static preloadImage(imageLinkList, minWaitTime, callback) {
        if (minWaitTime == null || minWaitTime < 0) {
            minWaitTime = 0;
        }
        window.images = [];
        let loaded = 0;
        let startTime = (new Date()).getTime();
        let onResponse = function() {
            loaded = loaded + 1;
            if (loaded < imageLinkList.length) {
                return;
            }
            if (callback == null) {
                return;
            }
            let endTime = (new Date()).getTime();
            let loadingTime = endTime - startTime;
            console.log('Time for preloading ' + imageLinkList.length + ' image(s): ' + loadingTime + 'ms.');
            let timeLeft = Math.max(minWaitTime - loadingTime, 0);
            window.setTimeout(function() {
                callback();
            }, timeLeft);
        };
        for (let i = 0; i < imageLinkList.length; i++) {
            window.images[i] = new Image();
            window.images[i].onload = onResponse;
            window.images[i].onerror = onResponse;
            window.images[i].src = imageLinkList[i];
        }
    };

    static preloadImageFromVersion(categoryList, minWaitTime, callback) {
        let imageList = [];
        for (let i = 0; i < categoryList.length; i++) {
            let aCategory = categoryList[i];
            let values = Object.values(window.version.image[aCategory]);
            imageList = imageList.concat(values);
        }
        Common.preloadImage(imageList, minWaitTime, callback);
    };
};