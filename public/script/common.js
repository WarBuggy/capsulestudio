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
                if (loadXML.readyState == 4) {
                    if (loadXML.status == 200) {
                        divParent.innerHTML = divParent.innerHTML + loadXML.responseText;
                    } else {
                        console.log('Could not load "' + path + '" (' + loadXML.status + ')');
                    }
                    if (callback) {
                        callback();
                    }
                }
            };
            loadXML.send();
        }
    };

    static preloadImage(imageObject, minWaitTime, callback) {
        if (minWaitTime == null || minWaitTime < 0) {
            minWaitTime = 0;
        }
        window.imagePreload = {};
        let loaded = 0;
        let startTime = (new Date()).getTime();
        let keyList = Object.keys(imageObject);
        let onResponse = function() {
            loaded = loaded + 1;
            if (loaded < keyList.length) {
                return;
            }
            if (callback == null) {
                return;
            }
            let endTime = (new Date()).getTime();
            let loadingTime = endTime - startTime;
            console.log('Time for preloading ' + keyList.length + ' image(s): ' + loadingTime + 'ms.');
            let timeLeft = Math.max(minWaitTime - loadingTime, 0);
            window.setTimeout(function() {
                callback();
            }, timeLeft);
        };
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let link = imageObject[key];
            if (link.includes('.svg')) {
                let loadXML = new XMLHttpRequest;
                if (loadXML != null) {
                    loadXML.open("GET", link, true);
                    loadXML.onreadystatechange = function() {
                        if (loadXML.readyState == 4 && loadXML.status == 200) {
                            window.imagePreload[key] = loadXML.responseText;
                            onResponse();
                        }
                    };
                    loadXML.send();
                }
            } else {
                window.imagePreload[key] = new Image();
                window.imagePreload[key].onload = onResponse;
                window.imagePreload[key].onerror = onResponse;
                window.imagePreload[key].src = link;
            }
        }
    };

    static preloadImageFromVersion(categoryList, minWaitTime, callback) {
        let imageObject = {};
        for (let i = 0; i < categoryList.length; i++) {
            let category = categoryList[i];
            let keyList = Object.keys(window.version.image[category]);
            for (let j = 0; j < keyList.length; j++) {
                let key = keyList[j];
                imageObject[key] = window.version.image[category][key];
            }
        }
        Common.preloadImage(imageObject, minWaitTime, callback);
    };
};