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
    }
};