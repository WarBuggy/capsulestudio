window.onload = async function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['home', 'home_service_common', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        createDivHomeBanner();
        new ContentHome();
        new MenuTop();
    });
};


function createDivHomeBanner() {
    let div = document.createElement('div');
    div.classList.add('home-banner');
    div.style.backgroundImage = `url(${window.version.image.home['home_banner']})`;

    let divOverlay = document.createElement('div');
    divOverlay.classList.add('home-banner-color-overlay');
    div.appendChild(divOverlay);

    div.innerHTML = div.innerHTML.concat(window.imagePreload['home_banner_image_overlay']);
    let svg = div.children[div.children.length - 1];
    svg.classList.add('home-banner-image-overlay')
    document.body.appendChild(div);
};

class ContentHome {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
        this.createDivTwo(divGrid);
        this.createDivThree(divOuter);
        this.createDivFour(divOuter);
        this.createDivFive(divOuter);
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
        let keyList = Object.keys(window.res.work);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let data = window.res.work[key];
            let div = document.createElement('div');
            div.classList.add('one-icon');
            div.style.backgroundImage = `url(${data.icon})`;
            divParent.appendChild(div);
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
            this.createFiveItem(divGrid, window.res.home.fiveItem[i], i);
        }

        let targetRatio = 0.6

        this.animateDivFiveValueDone = false;
        let parent = this;
        let observerValue = new IntersectionObserver(function(entries) {
            if (parent.animateDivFiveValueDone) {
                return;
            }
            let intersectionRatio = parseFloat(entries[0]['intersectionRatio']);
            if (intersectionRatio >= targetRatio) {
                parent.animateDivFiveValue();
                parent.animateDivFiveValueDone = true;
            }
        }, {
            threshold: [targetRatio],
        });
        observerValue.observe(divGrid);

        // let heightOuter = divOuter.getBoundingClientRect().height;
        // let heightDiff = Math.max(0, window.innerHeight - heightOuter);
        // this.intersectionRatioLast = 0;
        // // let rootMarginTop = 


        // let observer = new IntersectionObserver(function(entries) {
        //     let intersectionRatio = parseFloat(entries[0]['intersectionRatio']);
        //     let visibleHeight = Math.floor(heightOuter * intersectionRatio);

        //     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //     //console.log([intersectionRatio, scrollTop]);
        //     console.log(intersectionRatio);
        //     // divOuter.style.backgroundPositionY = (100 - ratio) + '%';
        // }, {
        //     threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5,
        //         0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1
        //     ],
        // });
        // observer.observe(divOuter);
    };

    createFiveItem(divParent, item, index) {
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

    animateDivFiveValue() {
        let parent = this;
        let divValueList = document.getElementsByClassName('home-five-grid-item-value');
        let timeStart = (new Date()).getTime();
        let timeAnimate = 600;
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
                parent.animateValue(object);
            });
        }
    };

    animateValue(object) {
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
            parent.animateValue(object);
        });
    };
};




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
    let imgPath = 'res/img/team_ben.png';
    let img = document.createElement('img');
    img.src = imgPath;
    await Common.sleep(1000);

    let width = 256;
    let height = 256;
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
        if (r > 240 && g > 240 && b > 240) {
            imageData.data[indexA] = 0;
            continue;
        }
        // imageData.data[indexR] = 255;
        // imageData.data[indexG] = 255;
        // imageData.data[indexB] = 255;
        // imageData.data[indexA] = 0;
    }

    ctx.putImageData(imageData, 0, 0);
};

function testMove() {
    let div = document.getElementById('divMove');
    let easeInOutQuad = function(t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t };
    let delta = 1000;
    let initX = -50;
    let totalTime = 400;
    let startTime = (new Date()).getTime();

    let work = function() {
        let currentTime = (new Date()).getTime();
        let timeDiff = currentTime - startTime;
        let time = timeDiff / totalTime;
        let rateChage = easeInOutQuad(time);
        if (time < 1) {
            let x = delta * rateChage + initX;
            div.style.left = x + 'px';
            window.requestAnimationFrame(work);
        }
    };
    window.requestAnimationFrame(work);
};