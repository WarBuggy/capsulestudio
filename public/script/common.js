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

    static capitalizeFirstLetterOnly(string) {
        let lowerCase = string.toLowerCase();
        let wordList = lowerCase.split(' ');
        for (let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            if (word.length < 1) {
                continue;
            }
            wordList[i] = `${word[0].toUpperCase()}${word.slice(1)}`;
        }
        return wordList.join(' ');
    };

    static createDivParallax(divTarget, objectTarget, bgPercentStart, bgPercentEnd) {
        objectTarget = Common.createObjectParallax(divTarget, bgPercentStart, bgPercentEnd);
        if (objectTarget == null) {
            return;
        }
        objectTarget.divParent.addEventListener('scroll', function() {
            Common.handleParallax(objectTarget);
        });
        window.addEventListener('resize', function() {
            objectTarget = Common.createObjectParallax(divTarget, bgPercentStart, bgPercentEnd);
        });
    };

    static createObjectParallax(divTarget, bgPercentStart, bgPercentEnd, divParent) {
        if (divParent == null) {
            divParent = document.getElementsByClassName('general-content-outer')[0];
        }
        let totalPageHeight = divParent.scrollHeight;
        if (totalPageHeight <= window.innerHeight) {
            return;
        }
        let scrollTop = divParent.scrollTop;

        if (bgPercentStart == null) {
            bgPercentStart = 100;
        }
        if (bgPercentEnd == null) {
            bgPercentEnd = 0;
        }
        let bgDiff = bgPercentStart - bgPercentEnd;

        let rect = divTarget.getBoundingClientRect();
        let rectTop = rect.top + scrollTop;
        let rectBottom = rectTop + rect.height;
        let spaceTop = Math.min(window.innerHeight, rectTop);
        let parallaxStart = rectTop - spaceTop;
        let spaceBottom = Math.min(window.innerHeight, totalPageHeight - rectBottom);
        let parallaxEnd = rectBottom + spaceBottom - window.innerHeight;
        let parallaxDistance = parallaxEnd - parallaxStart;

        return {
            divParent,
            div: divTarget,
            start: parallaxStart,
            end: parallaxEnd,
            distance: parallaxDistance,
            bgPercentStart,
            bgPercentEnd,
            bgDiff,
        };
    };

    static handleParallax(objectParallax) {
        let divParent = objectParallax.divParent;
        let div = objectParallax.div;
        let scrollTop = divParent.scrollTop;
        if (scrollTop <= objectParallax.start) {
            div.style.backgroundPosition = `50% ${objectParallax.bgPercentStart}%`;
            return;
        }
        if (scrollTop > objectParallax.end) {
            div.style.backgroundPosition = `50% ${objectParallax.bgPercentEnd}%`;
            return;
        }
        let scrollDistance = scrollTop - objectParallax.start;
        let scrollPercentage =
            Math.floor(scrollDistance / objectParallax.distance * 100);
        let bgPercentage = objectParallax.bgDiff * scrollPercentage / 100;
        div.style.backgroundPosition = `50% ${objectParallax.bgPercentStart - bgPercentage}%`;
    };

    static createAndShowDivWaiting() {
        let div = document.createElement('div');
        div.classList.add('general-overlay');

        let divLandscape = document.createElement('div');
        divLandscape.classList.add('general-overlay-image');
        divLandscape.classList.add('landscape');
        divLandscape.innerHTML = window.imagePreload['loading_initial_landscape'];
        div.appendChild(divLandscape);

        let divPortrait = document.createElement('div');
        divPortrait.classList.add('general-overlay-image');
        divPortrait.classList.add('portrait');
        divPortrait.innerHTML = window.imagePreload['loading_initial_portrait'];
        div.appendChild(divPortrait);

        document.body.appendChild(div);
        return div;
    };

    static removeDivWaiting(div) {
        document.body.removeChild(div);
    };

    static sendToBackend(webPart, dataJson) {
        let url = window.backendURL + webPart;
        return new Promise(function(resolve, reject) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        Common.parseJSON(this['response'])
                            .then(function(parseResult) {
                                let result = parseResult.result;
                                if (result != 0) {
                                    resolve({
                                        success: false,
                                        code: 1,
                                    });
                                } else {
                                    resolve({
                                        success: true,
                                        result: parseResult,
                                    });
                                }
                            })
                            .catch(function() {
                                resolve({
                                    success: false,
                                    code: 2,
                                });
                            });
                    } else {
                        resolve({
                            success: false,
                            code: this.status,
                        });
                    }
                }
            }
            xmlhttp.onerror = function(xmlhttpErr) {
                reject(xmlhttpErr);
            }
            let params = '';
            for (let key in dataJson) {
                if (dataJson.hasOwnProperty(key)) {
                    params = params + key + '=' + dataJson[key] + '&';
                }
            }
            params = params.slice(0, -1);
            xmlhttp.open('POST', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.setRequestHeader('cache', 'no-cahce');
            xmlhttp.send(params);
        });
    };

    static showMessage(message) {
        let div = document.createElement('div');
        div.classList.add('general-overlay');

        let divMessage = document.createElement('div');
        divMessage.classList.add('general-overlay-message');
        divMessage.innerHTML = message;
        div.appendChild(divMessage);

        document.body.appendChild(div);

        div.onclick = function() {
            document.body.removeChild(div);
        };
    };

    static showImage(path, caption, orientation) {
        let div = document.createElement('div');
        div.classList.add('general-overlay');
        div.classList.add('image-outer');
        if (orientation != null) {
            div.classList.add(orientation);
        }

        let img = document.createElement('img');
        img.classList.add('general-overlay-image-inner');
        img.src = path;
        div.appendChild(img);

        let divCaption = document.createElement('div');
        divCaption.classList.add('general-overlay-image-caption');
        div.appendChild(divCaption);

        let divCaptionInner = document.createElement('div');
        divCaption.appendChild(divCaptionInner);
        let span = document.createElement('span');
        span.innerHTML = caption;
        divCaptionInner.appendChild(span);

        document.body.appendChild(div);
        div.onclick = function() {
            document.body.removeChild(div);
        };
    };

    static parseJSON(input) {
        return new Promise(function(resolve, reject) {
            let jsonRes = JSON.parse(input);
            if (jsonRes.success) {
                resolve(jsonRes);
            } else {
                reject(jsonRes);
            }
        });
    };

    static getURLParameter(sParam, locationSearch) {
        if (locationSearch == null) {
            locationSearch = document.location.search;
        }
        let sPageURL = locationSearch.substring(1);
        let sURLVariables = sPageURL.split('&');
        for (let i = 0; i < sURLVariables.length; i++) {
            let sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0].trim() == sParam) {
                return sParameterName[1].trim();
            }
        }
    };

    static formatCode(string, type) {
        let result = string.replace(/</g, '&lt');
        result = result.replace(/>/g, '&gt');
        result = result.replace(/=/g, '&equal');
        result = result.replace(/\//g, '&forward-slash');
        result = result.replace(/\\/g, '&back-slash');

        if (type == 'xml') {
            result = Common.formatCodeXML(result);
        } else if (type == 'javascript') {
            result = Common.formatCodeJS(result);
        } else if (type == 'css') {
            result = Common.formatCodeCSS(result);
        }

        result = result.replace(/[{};()!.]/gm, function(match) {
            match = `<span class="code-flow">${match}</span>`;
            return match;
        });

        result = result.replace(/&newline/gm, '<br>');
        result = result.replace(/&indent/gm, '<span class="code-indent"></span>');
        result = result.replace(/&lt/g, '<span class="code-flow">&lt</span>');
        result = result.replace(/&gt/g, '<span class="code-flow">&gt</span>');
        result = result.replace(/&equal/g, '<span class="code-flow">=</span>');
        result = result.replace(/&forward-slash/g, '<span class="code-flow">/</span>');
        result = result.replace(/&back-slash/g, '<span class="code-flow">\</span>');

        return result;
    };

    static formatCodeJS(string) {
        let result = string.replace(/['"].+?['"]/gm, function(match) {
            match = '<span class="code-string">' + match + '</span>';
            return match;
        });

        result = result.replace(/[^a-zA-Z0-9](function|async|let|static|true|false|null|this|new)[^a-zA-Z0-9]/gm, function(match) {
            let firstChar = match[0];
            let lastChar = match.slice(-1);
            match = match.slice(0, -1);
            match = match.slice(1);
            match = firstChar + '<span class="ccode-code-control-1">' + match + '</span>' + lastChar;
            return match;
        });

        result = result.replace(/(function|async|let|static|true|false|null|this|new)[^a-zA-Z0-9]/gm, function(match) {
            let lastChar = match.slice(-1);
            match = match.slice(0, -1);
            match = '<span class="code-code-control-1">' + match + '</span>' + lastChar;
            return match;
        });

        result = result.replace(/\s[A-Z][a-zA-Z0-9_]*/gm, function(match) {
            let firstChar = match[0];
            match = match.slice(1);
            match = firstChar + '<span class="code-code-class">' + match + '</span>';
            return match;
        });

        result = result.replace(/[ |.][^A-Z0-9][a-zA-z0-9]+\(/gm, function(match) {
            let firstChar = match[0];
            match = match.slice(1);
            match = firstChar + '<span class="code-method">' + match + '</span>';
            return match;
        });

        result = result.replace(/((&indent)|(&newline))?(for|if|await|while|return|continue)[^a-zA-Z0-9]/gm, function(match) {
            let prefix = '';
            if (match.indexOf('&indent') >= 0) {
                prefix = '&indent';
            } else if (match.indexOf('&newline') >= 0) {
                prefix = '&newline';
            }
            let lastChar = match.slice(-1);
            match = match.slice(0, -1);
            match = prefix + '<span class="code-code-control">' + match + '</span>' + lastChar;
            return match;
        });

        result = result.replace(/[^a-zA-Z'"]\d+[^a-zA-Z'"]/gm, function(match) {
            let firstChar = match[0];
            let lastChar = match.slice(-1);
            match = match.slice(0, -1);
            match = match.slice(1);
            match = firstChar + '<span class="code-number">' + match + '</span>' + lastChar;
            return match;
        });

        return result;
    };

    static formatCodeXML(string) {
        let result = string.replace(/&lt\S* /gm, function(match) {
            match = match.replace(/&lt/, '');
            match = match.replace(/ /, '');
            match = '&lt<span class="code-tag">' + match + '</span> ';
            return match;
        });
        result = result.replace(/&lt\S*&forward-slash&gt/gm, function(match) {
            match = match.replace(/&lt/, '');
            match = match.replace(/&forward-slash&gt/, '');
            match = '&lt<span class="code-tag">' + match + '</span>';
            return match;
        });
        result = result.replace(/&lt&forward-slash\S*&gt/gm, function(match) {
            match = match.replace(/&lt&forward-slash/, '');
            match = match.replace(/&gt/, '');
            match = '&lt&forward-slash<span class="code-tag">' + match + '</span>&gt';
            return match;
        });

        result = result.replace(/\S*&equal/gm, function(match) {
            match = match.replace(/&equal/, '');
            match = '<span class="code-css-key">' + match + '</span>&equal';
            return match;
        });

        result = result.replace(/&equal['"].+?['"]/gm, function(match) {
            match = match.replace(/&equal/, '');
            match = '&equal<span class="code-string">' + match + '</span>';
            return match;
        });

        return result;
    };

    static formatCodeCSS(string) {
        let result = string.replace(/\S* {/gm, function(match) {
            match = match.replace(/ {/, '');
            match = `<span class="code-css-class">${match}</span> {`;
            return match;
        });

        result = result.replace(/\S*: /gm, function(match) {
            match = match.replace(/: /, '');
            match = `<span class="code-css-key">${match}</span>: `;
            return match;
        });

        result = result.replace(/: \S*;/gm, function(match) {
            match = match.replace(/: /, '');
            match = match.replace(/;/, '');
            match = `: <span class="code-string">${match}</span>;`;
            return match;
        });

        return result;
    };
};

class LoadingInitial {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('loading-initial');

        let divImageLandscape = document.createElement('div');
        divImageLandscape.classList.add('loading-initial-image');
        divImageLandscape.classList.add('landscape');
        Common.loadSVGAsXML(divImageLandscape,
            window.version.image.common['loading_initial_landscape']);
        this.div.appendChild(divImageLandscape);

        let divImagePortrait = document.createElement('div');
        divImagePortrait.classList.add('loading-initial-image');
        divImagePortrait.classList.add('portrait');
        Common.loadSVGAsXML(divImagePortrait,
            window.version.image.common['loading_initial_portrait']);
        this.div.appendChild(divImagePortrait);

        let divDisclaimerLight = document.createElement('div');
        divDisclaimerLight.classList.add('loading-initial-disclaimer');
        divDisclaimerLight.classList.add('light');
        divDisclaimerLight.style.backgroundImage =
            `url(${window.version.image.common['loading_initial_disclaimer_light']})`;
        divDisclaimerLight.onclick = function() {
            window.open('https://loading.io', '_newtab');
        };
        this.div.appendChild(divDisclaimerLight);

        let divDisclaimerDark = document.createElement('div');
        divDisclaimerDark.classList.add('loading-initial-disclaimer');
        divDisclaimerDark.classList.add('dark');
        divDisclaimerDark.style.backgroundImage =
            `url(${window.version.image.common['loading_initial_disclaimer_dark']})`;
        divDisclaimerDark.onclick = function() {
            window.open('https://loading.io', '_newtab');
        };
        this.div.appendChild(divDisclaimerDark);
    };
};

class MenuTop {
    constructor(scrollTarget) {
        if (scrollTarget == null) {
            scrollTarget = 100;
        }
        this.toggleTime =
            window.rootStyle.getPropertyValue('--menu-top-animation-toggle-time');

        let divParent = document.getElementsByClassName('general-content-outer')[0];

        this.div = document.createElement('div');
        this.div.classList.add('menu-top-outer');
        divParent.appendChild(this.div);

        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('menu-top-grid-outer');
        this.div.appendChild(divGridOuter);


        this.createGroupLogo(divGridOuter);
        this.createItem(divGridOuter);

        let parent = this;
        divParent.addEventListener('scroll', function(e) {
            let divButtonContact = document.getElementById(window.res.common.menuItem['contact'].id);
            let elementList = [parent.div, divButtonContact];
            if (divParent.scrollTop > scrollTarget) {
                for (let i = 0; i < elementList.length; i++) {
                    let element = elementList[i];
                    if (!element.classList.contains('desktop-scroll')) {
                        element.classList.add('desktop-scroll');
                    }
                }
            } else {
                for (let i = 0; i < elementList.length; i++) {
                    let element = elementList[i];
                    if (element.classList.contains('desktop-scroll')) {
                        element.classList.remove('desktop-scroll');
                    }
                }
            }
        });
    };

    createGroupLogo(divParent) {
        let className = 'menu-top-click-home-page';

        let divGrid = document.createElement('div');
        divGrid.classList.add('menu-top-grid');
        divParent.appendChild(divGrid);

        let divItemFillerBefore = document.createElement('div');
        divItemFillerBefore.classList.add('menu-top-item-filler');
        divItemFillerBefore.classList.add('first-row');
        divGrid.appendChild(divItemFillerBefore);

        let divLogoOuter = document.createElement('div');
        divLogoOuter.classList.add('menu-top-logo-outer');
        divGrid.appendChild(divLogoOuter);

        let divLogo = document.createElement('div');
        divLogo.classList.add('menu-top-logo-logo');
        divLogo.classList.add(className);
        divLogoOuter.appendChild(divLogo);

        let divName = document.createElement('div');
        divName.classList.add('menu-top-logo-name');
        divName.classList.add(className);
        divName.innerText = window.res.common.companyName[window.langCur];
        divLogoOuter.appendChild(divName);

        this.createSVGMobileButtonToggle(divLogoOuter);

        let divItemFillerAfter = document.createElement('div');
        divItemFillerAfter.classList.add('menu-top-item-filler');
        divItemFillerAfter.classList.add('first-row');
        divGrid.appendChild(divItemFillerAfter);

        let divClickForHome = document.getElementsByClassName(className);
        for (let i = 0; i < divClickForHome.length; i++) {
            divClickForHome[i].onclick = function() {
                window.location = window.res.common.menuItem['home'].link;
            };
        }
    };

    createSVGMobileButtonToggle(divParent) {
        let parent = this;
        let clickableAttr = 'clickable';
        let closeAttr = 'close';
        divParent.innerHTML =
            divParent.innerHTML.concat(window.imagePreload['common_logo_button_toggle']);

        let svg = document.getElementById('menuTopButtonToggle');
        svg.setAttribute(clickableAttr, 'true');
        svg.setAttribute(closeAttr, 'true');
        svg.onclick = function() {
            let clickable = this.getAttribute(clickableAttr);
            let close = this.getAttribute(closeAttr);
            if (clickable == 'false') {
                return;
            }
            this.setAttribute(clickableAttr, 'false');
            let groupName = 'animMenuTopMobileButtonShow';
            let endClose = 'false';
            if (close == 'false') {
                groupName = 'animMenuTopMobileButtonHide';
                endClose = 'true';
                parent.div.classList.remove('show');
                parent.div.classList.add('hide');
                window.setTimeout(function() {
                    parent.div.classList.remove('hide');
                }, parseInt(parent.toggleTime));
            } else {
                parent.div.classList.add('show');
            }
            let group = document.getElementById(groupName);
            for (let i = 0; i < group.children.length; i++) {
                group.children[i].setAttribute('dur', parent.toggleTime);
                group.children[i].beginElement();
            }
            this.setAttribute(closeAttr, endClose);
            window.setTimeout(function() {
                svg.setAttribute(clickableAttr, 'true');
            }, parseInt(parent.toggleTime));
        };
    };

    createItem(divParent) {
        let keyList = Object.keys(window.res.common.menuItem);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let objectData = window.res.common.menuItem[key];
            this.createAnItem(objectData, divParent);
        }
    };

    createAnItem(objectData, divParent) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('menu-top-grid');
        divParent.appendChild(divGrid);

        let divItemFillerBefore = document.createElement('div');
        divItemFillerBefore.classList.add('menu-top-item-filler');
        divGrid.appendChild(divItemFillerBefore);

        let div = document.createElement('div');
        div.classList.add('menu-top-item');
        if (objectData.extraCss != null) {
            for (let i = 0; i < objectData.extraCss.length; i++) {
                div.classList.add(objectData.extraCss[i]);
            }
        }
        if (objectData.id != null) {
            div.id = objectData.id;
        }
        div.innerText = objectData[window.langCur];
        divGrid.appendChild(div);

        let divItemFillerAfter = document.createElement('div');
        divItemFillerAfter.classList.add('menu-top-item-filler');
        divGrid.appendChild(divItemFillerAfter);

        if (!window.location.toString().includes(objectData.link)) {
            div.onclick = function() {
                window.location = objectData.link;
            };
        } else {
            div.classList.add('inactive');
        }
    };

    toggleMenuTop(data) {
        let timeCurrent = (new Date()).getTime();
        let timeDiff = timeCurrent - data.timeStart;
        if (timeDiff >= data.timeTotal) {
            data.div.style.height = (data.heightDelta + data.heightInitial) + 'px';
            return;
        }
        let progress = window.res.common.easing[data.easing](timeDiff / data.timeTotal);
        let height = (data.heightDelta * progress) + data.heightInitial;
        data.div.style.height = height + 'px';
        let parent = this;
        window.requestAnimationFrame(function() {
            parent.toggleMenuTop(data);
        });
    };
}

class Footer {
    constructor(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-parent');
        divParent.appendChild(div);

        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('general-content-grid');
        div.appendChild(divGridOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('footer-grid');
        divGridOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
        this.createDivTwo(divGrid);
        this.createDivThree(divGrid);
        this.createDivFour(divGrid);
        this.createDivFive(divGrid);
    };

    createDivOne(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-one-grid');
        divParent.appendChild(div);

        let divLogo = document.createElement('div');
        divLogo.classList.add('footer-one-logo');
        div.appendChild(divLogo);

        let divName = document.createElement('div');
        divName.classList.add('footer-one-name');
        divName.innerText = window.res.common.companyName[window.langCur];
        div.appendChild(divName);

        let divText = document.createElement('div');
        divText.classList.add('footer-one-text');
        divText.innerText = window.res.common.footer.oneText[window.langCur];
        div.appendChild(divText);
    };

    createDivTwo(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-two-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.twoTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.common.menuItem);
        for (let i = 1; i < keyList.length; i++) {
            let item = window.res.common.menuItem[keyList[i]];

            let divBullet = document.createElement('div');
            divBullet.classList.add('footer-item-bullet');
            divBullet.innerText = '>';
            div.appendChild(divBullet);

            let divLink = document.createElement('div');
            divLink.classList.add('footer-item-link');
            divLink.innerText = Common.capitalizeFirstLetterOnly(item[window.langCur]);
            div.appendChild(divLink);

            divLink.onclick = function() {
                window.location = item.link;
            };
        }
    };

    createDivThree(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-three-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.threeTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.work.item);
        for (let i = 0; i < keyList.length; i++) {
            let item = window.res.work.item[keyList[i]];
            if (item.showInFooter != true) {
                continue;
            }

            let divBullet = document.createElement('div');
            divBullet.classList.add('footer-item-bullet');
            divBullet.innerText = '>';
            div.appendChild(divBullet);

            let divLink = document.createElement('div');
            divLink.classList.add('footer-item-link');
            divLink.innerText = item.name;
            div.appendChild(divLink);

            if (item.link != null) {
                divLink.onclick = function() {
                    window.location = item.link;
                };
            }
        }
    };

    createDivFour(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-four-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.fourTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.common.footer.fourText);
        for (let i = 0; i < keyList.length; i++) {
            let item = window.res.common.footer.fourText[keyList[i]];

            let divName = document.createElement('div');
            divName.classList.add('footer-four-item');
            divName.innerText = item[window.langCur];
            div.appendChild(divName);

            let divText = document.createElement('div');
            divText.classList.add('footer-four-item');
            divText.classList.add('text');
            if (item.extraCssText != null) {
                for (let j = 0; j < item.extraCssText.length; j++) {
                    divText.classList.add(item.extraCssText[j]);
                }
            }
            divText.innerHTML = item.text;
            div.appendChild(divText);
        }
    };

    createDivFive(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-five');
        div.innerText = '© 2021 Capsule Studio. All Rights Reserved.';
        divParent.appendChild(div);

    };
};

class Banner {
    constructor(divParent, imageLink, title, siteMapItemList) {
        this.div = document.createElement('div');
        this.div.classList.add('general-banner-top');
        this.div.style.backgroundImage = `url(${imageLink})`;
        divParent.appendChild(this.div);

        let divOverlay = document.createElement('div');
        divOverlay.classList.add('general-banner-overlay');
        this.div.appendChild(divOverlay);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-banner-grid');
        divOverlay.appendChild(divGrid);

        let divTitle = document.createElement('div');
        divTitle.classList.add('general-banner-title');
        let titleText = title[window.langCur];
        if (titleText == null) {
            titleText = title;
        } else {
            titleText = Common.capitalizeFirstLetterOnly(title[window.langCur]);
        }
        divTitle.innerText = titleText;
        divGrid.appendChild(divTitle);

        let divSiteMap = document.createElement('div');
        divSiteMap.style.textAlign = 'center';
        divGrid.appendChild(divSiteMap);
        for (let i = 0; i < siteMapItemList.length; i++) {
            let item = siteMapItemList[i];
            let data = window.res;
            for (let j = 0; j < item.length; j++) {
                data = data[item[j]];
            }
            let divItem = document.createElement('div');
            divItem.classList.add('general-banner-item-sitemap');
            let text = data[window.langCur];
            if (text == null) {
                text = data;
            } else {
                text = Common.capitalizeFirstLetterOnly(text);
            }
            divItem.innerText = text;
            divSiteMap.appendChild(divItem);

            if (i >= siteMapItemList.length - 1) {
                continue;
            }
            if (data.link == null) {
                continue;
            }

            divItem.classList.add('clickable');

            let divArrow = document.createElement('div');
            divArrow.classList.add('general-banner-item-sitemap');
            divArrow.classList.add('arrow');
            divArrow.innerText = '>';
            divSiteMap.appendChild(divArrow);

            divItem.onclick = function() {
                window.location = data.link;
            };
        }
    };
};

class TextBox {
    constructor(placeholder, id) {
        this.div = document.createElement('div');
        this.div.classList.add('general-text-box-outer');

        this.input = document.createElement('input');
        this.input.classList.add('general-input-text');
        this.input.placeholder = placeholder;
        if (id != null) {
            this.input.id = id;
        }
        this.div.appendChild(this.input);
    };
};

class TextArea {
    constructor(placeholder, id) {
        this.div = document.createElement('div');
        this.div.classList.add('general-text-box-outer');

        this.input = document.createElement('textarea');
        this.input.classList.add('general-input-text');
        this.input.classList.add('text-area');
        this.input.placeholder = placeholder;
        if (id != null) {
            this.input.id = id;
        }
        this.div.appendChild(this.input);
    };
}