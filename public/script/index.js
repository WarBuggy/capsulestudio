window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['common', 'home', 'home_service_common', 'home_work_common', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        new ContentHome();
        new MenuTop();
    });
};

class ContentHome {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        this.createBanner(divOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divGrid.style.position = 'relative';
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
        this.createDivTwo(divGrid);
        this.createDivThree(divOuter);
        this.createDivFour(divOuter);
        this.createDivFive(divOuter);
        // this.createDivSix(divOuter);
        new Footer(divOuter);

        let divParallax = document.getElementsByClassName('home-five')[0];
        Common.createDivParallax(divParallax, this.objectParallax);
    };

    createBanner(divParent) {
        let div = document.createElement('div');
        div.classList.add('home-banner');
        div.style.backgroundImage = `url(${window.version.image.home['home_banner']})`;
        divParent.appendChild(div);

        let divOverlay = document.createElement('div');
        divOverlay.classList.add('home-banner-color-overlay');
        div.appendChild(divOverlay);

        div.innerHTML = div.innerHTML.concat(window.imagePreload['home_banner_image_overlay']);
        let svg = div.children[div.children.length - 1];
        svg.classList.add('home-banner-image-overlay');
    };

    createDivOne(divParent) {
        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('one-grid-outer');
        divParent.appendChild(divGridOuter);

        let divGridInner = document.createElement('div');
        divGridInner.classList.add('one-grid-inner');
        divGridOuter.appendChild(divGridInner);

        let divOneTitle = document.createElement('div');
        divOneTitle.classList.add('one-title');
        divOneTitle.innerText = window.res.home.oneTitle[window.langCur];
        divGridInner.appendChild(divOneTitle);

        let divOneGridIcon = document.createElement('div');
        divOneGridIcon.classList.add('one-grid-icon');
        divGridInner.appendChild(divOneGridIcon);
        this.populateDivOneGridIcon(divOneGridIcon);

        let divOneText = document.createElement('div');
        divOneText.classList.add('one-text');
        divOneText.innerText = window.res.home.oneText[window.langCur];
        divGridInner.appendChild(divOneText);
    };

    populateDivOneGridIcon(divParent) {
        let keyList = Object.keys(window.res.work.item);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let data = window.res.work.item[key];
            let div = document.createElement('div');
            div.classList.add('one-icon');
            div.style.backgroundImage = `url(${data.icon})`;
            divParent.appendChild(div);

            div.onclick = function() {
                window.location = `work.html?app=${key}`;
            };
        }
    };

    createDivTwo(divParent) {
        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('two-grid-outer');
        divParent.appendChild(divGridOuter);

        let divTextGridOuter = document.createElement('div');
        divTextGridOuter.classList.add('two-text-grid-outer');
        divGridOuter.appendChild(divTextGridOuter);

        this.createDivTwoText(divTextGridOuter);

        let divButton = document.createElement('div');
        divButton.classList.add('general-button');
        divButton.classList.add('align-diff');
        divButton.innerText = window.res.common.menuItem.service[window.langCur];
        divTextGridOuter.appendChild(divButton);

        this.createDivTwoColumn(divGridOuter, 'first');
        this.createDivTwoColumn(divGridOuter, 'second');
    };

    createDivTwoText(divParent) {
        let divTitle = document.createElement('div');
        divTitle.classList.add('home-two-title');
        divTitle.innerText = window.res.home.twoTitle[window.langCur];
        divParent.appendChild(divTitle);

        let divText = document.createElement('div');
        divText.classList.add('home-two-text');
        divText.innerText = window.res.home.twoText[window.langCur];
        divParent.appendChild(divText);
    };

    createDivTwoColumn(divParent, columnName) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('home-two-column');
        divParent.appendChild(divOuter);

        let dataList = window.res.home.twoColumn[columnName];
        for (let i = 0; i < dataList.length; i++) {
            let data = dataList[i];
            let divItemOuter = document.createElement('div');
            divItemOuter.classList.add('home-two-item');
            if (data.extraCss != null) {
                for (let j = 0; j < data.extraCss.length; j++) {
                    divItemOuter.classList.add(data.extraCss[j]);
                }
            }
            divOuter.appendChild(divItemOuter);
            this.populateDivTwoColumnItem(divItemOuter, data);
        }
    };

    populateDivTwoColumnItem(divParent, data) {
        let iconSVGName = window.res.service[data.serviceName].icon;
        divParent.innerHTML = window.imagePreload[iconSVGName];

        let divTitle = document.createElement('div');
        divTitle.classList.add('home-two-item-title');
        divTitle.innerText = data.title[window.langCur];
        divParent.appendChild(divTitle);

        let divText = document.createElement('div');
        divText.classList.add('home-two-item-text');
        divText.innerText = data.text[window.langCur];
        divParent.appendChild(divText);
    };

    createDivThree(divParent) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('home-three');
        divParent.appendChild(divOuter);

        divOuter.innerHTML = window.imagePreload['home_banner_image_overlay'];
        let svg = divOuter.children[0];
        svg.classList.add('home-three-background-overlay');

        let divGridContent = document.createElement('div');
        divGridContent.classList.add('general-content-grid');
        divGridContent.classList.add('home-three');
        divOuter.appendChild(divGridContent);

        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('home-three-grid-outer');
        divGridContent.appendChild(divGridOuter);

        let img = document.createElement('img');
        img.classList.add('home-three-image')
        img.src = window.version.image.home['home_three_image'];
        divGridOuter.appendChild(img);

        for (let i = 0; i < window.res.home.threeItem.length; i++) {
            let item = window.res.home.threeItem[i];
            this.createThreeItem(divGridOuter, item);
        }
    };

    createThreeItem(divParent, item) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('home-three-grid-item');
        if (item.extraCss != null) {
            for (let i = 0; i < item.extraCss.length; i++) {
                divGrid.classList.add(item.extraCss[i]);
            }
        }
        divParent.appendChild(divGrid);

        let divLetter = document.createElement('div');
        divLetter.classList.add('home-three-item-letter');
        divLetter.innerText = item.letter;
        divGrid.appendChild(divLetter);

        let divTitle = document.createElement('div');
        divTitle.classList.add('home-three-item-title');
        divTitle.innerText = item.title;
        divGrid.appendChild(divTitle);

        divGrid.innerHTML =
            divGrid.innerHTML.concat(window.imagePreload['home_three_item_listing']);

        let divText = document.createElement('div');
        divText.classList.add('home-three-item-text');
        divText.innerText = item.text[window.langCur];
        divGrid.appendChild(divText);
    };

    createDivFour(divParent) {
        let divGridContent = document.createElement('div');
        divGridContent.classList.add('general-content-grid');
        divParent.appendChild(divGridContent);

        let divGrid = document.createElement('div');
        divGrid.classList.add('home-four');
        divGridContent.appendChild(divGrid);

        let divTitle = document.createElement('div');
        divTitle.classList.add('home-four-title');
        divTitle.innerText = window.res.home.fourTitle[window.langCur];
        divGrid.appendChild(divTitle);

        let divText = document.createElement('div');
        divText.classList.add('home-four-text');
        divText.innerText = window.res.home.fourText[window.langCur];
        divGrid.appendChild(divText);

        for (let i = 0; i < window.res.home.fourItem.length; i++) {
            let item = window.res.home.fourItem[i];
            this.createFourItem(divGrid, item);
        }
    };

    createFourItem(divParent, item) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('home-four-grid-item');
        divParent.appendChild(divGrid);

        let divImg = document.createElement('div');
        divImg.classList.add('home-four-grid-item-image');
        divImg.style.backgroundImage = `url(${window.version.image.home[item.image]})`;
        divGrid.appendChild(divImg);

        let divIntro = document.createElement('div');
        divIntro.classList.add('home-four-grid-item-intro');
        divGrid.appendChild(divIntro);

        let divName = document.createElement('div');
        divName.classList.add('home-four-grid-item-name');
        divName.innerText = item.name[window.langCur];
        divIntro.appendChild(divName);

        let divTitle = document.createElement('div');
        divTitle.classList.add('home-four-grid-item-title');
        divTitle.innerText = item.title[window.langCur];
        divIntro.appendChild(divTitle);

        let divText = document.createElement('div');
        divText.classList.add('home-four-grid-item-text');
        divText.innerText = item.text[window.langCur];
        divGrid.appendChild(divText);
    };

    createDivFive(divParent) {
        let hasIntersectionObserver = (typeof(IntersectionObserver) === 'function');

        let divOuter = document.createElement('div');
        divOuter.classList.add('home-five');
        divOuter.style.backgroundImage = `url(${window.version.image.home['home_five']})`;
        divParent.appendChild(divOuter);

        let divOuterOverlay = document.createElement('div');
        divOuterOverlay.classList.add('home-five-overlay');
        divOuter.appendChild(divOuterOverlay);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divGrid.classList.add('home-five-grid');
        divOuterOverlay.appendChild(divGrid);

        for (let i = 0; i < window.res.home.fiveItem.length; i++) {
            this.createFiveItem(divGrid, window.res.home.fiveItem[i], i, hasIntersectionObserver);
        }

        if (!hasIntersectionObserver) {
            return;
        }

        let parent = this;
        let targetRatio = 0.6
        let observerValue = new IntersectionObserver(function(entries) {
            let intersectionRatio = parseFloat(entries[0]['intersectionRatio']);
            if (intersectionRatio >= targetRatio) {
                parent.animateDivFiveValueAll();
                this.disconnect();
            }
        }, {
            threshold: [targetRatio],
        });
        observerValue.observe(divGrid);
    };

    createFiveItem(divParent, item, index, hasIntersectionObserver) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('home-five-grid-item');
        if (item.extraCss != null) {
            for (let i = 0; i < item.extraCss.length; i++) {
                divGrid.classList.add(item.extraCss[i]);
            }
        }
        divParent.appendChild(divGrid);

        this.createFiveItemFiller(divGrid, true);
        this.createFiveItemFiller(divGrid, false);

        let divInfo = document.createElement('div');
        divInfo.classList.add('home-five-grid-item-info');
        divGrid.appendChild(divInfo);

        let divValue = document.createElement('div');
        divValue.classList.add('home-five-grid-item-value');
        divValue.setAttribute('index', index);
        divValue.innerHTML = '&nbsp;';
        if (!hasIntersectionObserver) {
            divValue.innerHTML = `${item.valueEnd}${item.suffix || ''}`;
        }
        divInfo.appendChild(divValue);

        let divName = document.createElement('div');
        divName.classList.add('home-five-grid-item-name');
        divName.innerText = item.name[window.langCur];
        divInfo.appendChild(divName);

        this.createFiveItemFiller(divGrid, true);
        this.createFiveItemFiller(divGrid, false);
    };

    createFiveItemFiller(divParent, hasBorder) {
        let div = document.createElement('div');
        div.classList.add('home-five-grid-item-filler');
        if (hasBorder) {
            div.classList.add('has-border');
        }
        divParent.appendChild(div);
    };

    animateDivFiveValueAll() {
        let parent = this;
        let divValueList = document.getElementsByClassName('home-five-grid-item-value');
        let timeStart = (new Date()).getTime();
        let timeAnimate = 1000;
        for (let i = 0; i < divValueList.length; i++) {
            let divValue = divValueList[i];
            let index = parseInt(divValue.getAttribute('index'));
            let data = window.res.home.fiveItem[index];
            let valueBegin = data.valueBegin;
            let valueEnd = data.valueEnd;
            let valueDiff = valueEnd - valueBegin;
            let easing = window.res.common.easing[data.easing];
            let object = {
                timeStart,
                timeAnimate,
                valueBegin,
                valueEnd,
                valueDiff,
                divValue,
                easing,
                decimal: data.decimal,
                suffix: data.suffix,
            }
            window.requestAnimationFrame(function() {
                parent.animateDivFiveValue(object);
            });
        }
    };

    animateDivFiveValue(object) {
        let timeCurrent = (new Date()).getTime();
        let timeDiff = timeCurrent - object.timeStart;
        if (timeDiff >= object.timeAnimate) {
            object.divValue.innerHTML = `${object.valueEnd}${object.suffix || ''}`;
            return;
        }
        let valueDiff = object.easing(timeDiff / object.timeAnimate) * object.valueDiff;
        let valueNew = object.valueBegin + valueDiff;
        if (object.decimal != 0) {
            valueNew = Number(valueNew).toFixed(object.decimal);
        } else {
            valueNew = Math.floor(valueNew);
        }
        object.divValue.innerHTML = `${valueNew}${object.suffix || ''}`;
        let parent = this;
        window.requestAnimationFrame(function() {
            parent.animateDivFiveValue(object);
        });
    };

    createDivSix(divParent) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('home-six');
        divParent.appendChild(divOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divGrid.style.height = '200px';
        divOuter.appendChild(divGrid);
    };
};

/* Functions that help creating images */
function createText() {
    let text = 'The spinner "Ball" is provided by loading.io.';
    let width = 1500;
    let height = 250;
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.font = "60px Quicksand";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#121212';
    ctx.fillText(text, (width / 2), (height / 2));
};

async function removeColor() {
    let imgPath = 'res/img/avatar.png';
    let img = document.createElement('img');
    img.src = imgPath;
    await Common.sleep(1000);

    let width = 865;
    let height = 865;
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    let imageData = ctx.getImageData(0, 0, width, height);

    for (let i = 0; i < imageData.data.length;) {
        let indexR = i++;
        let indexG = i++;
        let indexB = i++;
        let indexA = i++;
        let r = imageData.data[indexR];
        let g = imageData.data[indexG];
        let b = imageData.data[indexB];
        if (r > 245 && g > 245 && b > 245) {
            imageData.data[indexA] = 0;
            continue;
        }
    }

    ctx.putImageData(imageData, 0, 0);
};
/* End of functions that help creating images */