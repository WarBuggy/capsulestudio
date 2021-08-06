window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let paramApp = Common.getURLParameter('app');
    if (paramApp == '' || window.res.work.item[paramApp] == null) {
        let imagePreloadCategoryList = ['common', 'home_work_common', 'work', ];
        Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
            document.body.removeChild(loadingInitial.div);
            new ContentWork();
        });
        return;
    }
    let imagePreloadCategoryList = ['common', 'work', 'work_' + paramApp];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        new ContentWorkIndividual(paramApp);
    });
};

class ContentWork {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let imageLink = window.version.image.work['work_banner'];
        let titleBanner = window.res.work.title;
        let siteMapBanner = window.res.work.siteMapItemList;
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivOne(divParent) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('work-one-grid');
        divParent.appendChild(divGrid);

        let keyList = Object.keys(window.res.work.item);
        for (let i = 0; i < keyList.length; i++) {
            let item = window.res.work.item[keyList[i]];

            let div = document.createElement('div');
            div.classList.add('work-one-item-grid');
            divGrid.appendChild(div);

            let divIconOuter = document.createElement('div');
            divIconOuter.classList.add('work-one-item-icon-outer');
            div.appendChild(divIconOuter);

            let divIcon = document.createElement('div');
            divIcon.classList.add('work-one-item-icon');
            divIcon.style.backgroundImage = `url(${item.icon})`;
            divIconOuter.appendChild(divIcon);

            let divTitle = document.createElement('div');
            divTitle.classList.add('work-one-item-title');
            divTitle.innerText = item.name;
            div.appendChild(divTitle);

            let divText = document.createElement('div');
            divText.classList.add('work-one-item-text');
            divText.innerText = item.text[window.langCur];
            div.appendChild(divText);

            let divButton = document.createElement('div');
            divButton.classList.add('general-button');
            divButton.classList.add('center');
            divButton.innerText = window.res.work.textButton[window.langCur];
            div.appendChild(divButton);

            let link = 'work.html?app=' + keyList[i];
            divButton.onclick = function() {
                window.location = link;
            };
            divIcon.onclick = function() {
                window.location = link;
            };
        }
    };
};

class ContentWorkIndividual {
    constructor(param) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let data = window.res.work.item[param];
        let imageLink = window.version.image.work['work_banner'];
        let titleBanner = data.name;
        let siteMapBanner = window.res.work.siteMapItemList;
        siteMapBanner = siteMapBanner.concat([
            ['work', 'item', param, 'name', ]
        ]);
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        let divContentOuter = document.createElement('div');
        divContentOuter.classList.add('work-individual-content-outer');
        divGrid.appendChild(divContentOuter);

        let divContentGrid = document.createElement('div');
        divContentGrid.classList.add('work-individual-content-grid');
        divContentOuter.appendChild(divContentGrid);

        this.createDivOne(data, divContentGrid);
        this.createDivTwo(data, divContentGrid);
        this.createDivThree(data, divContentGrid);
        this.createDivFour(data, divContentGrid);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivOne(data, divParent) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('work-individual-item-outer');
        divParent.appendChild(divOuter);

        let divIcon = document.createElement('div');
        divIcon.classList.add('work-individual-item-icon');
        divIcon.style.backgroundImage = `url(${data.icon})`;
        divOuter.appendChild(divIcon);

        let divTitle = document.createElement('div');
        divTitle.classList.add('work-individual-item-title');
        divTitle.style['grid-column'] = `auto / span ${1 + (4 - data.availability.length)}`;
        divTitle.innerText = data.name;
        divOuter.appendChild(divTitle);

        for (let i = 0; i < data.availability.length; i++) {
            let item = data.availability[i];

            let divOS = document.createElement('div');
            divOS.classList.add('work-individual-os-outer');
            divOS.innerHTML = window.imagePreload[`work_${item.os}`];
            divOuter.appendChild(divOS);
            if (item.link == null) {
                continue;
            }

            divOS.style.cursor = 'pointer';
            divOS.onclick = function() {
                window.location = item.link;
            };
        }

        let divTech = document.createElement('div');
        divTech.classList.add('work-individual-item-tech');
        divTech.innerText = data.tech;
        divOuter.appendChild(divTech);
    };

    createDivTwo(data, divParent) {
        let svgContent = window.imagePreload['work_ind_desc'];
        divParent.innerHTML = divParent.innerHTML.concat(svgContent);

        let divTextOuter = document.createElement('div');
        divParent.appendChild(divTextOuter);

        let divTitle = document.createElement('div');
        divTitle.classList.add('work-individual-title');
        divTitle.innerText = window.res.work.workIndDescription[window.langCur];
        divTextOuter.appendChild(divTitle);

        for (let i = 0; i < data.desc[window.langCur].length; i++) {
            let text = data.desc[window.langCur][i];
            let divText = document.createElement('div');
            divText.classList.add('work-individual-text');
            divText.innerText = text;
            divTextOuter.appendChild(divText);
        }
    };

    createDivThree(data, divParent) {
        let svgContent = window.imagePreload['work_ind_screenshot'];
        divParent.innerHTML = divParent.innerHTML.concat(svgContent);

        let divOuter = document.createElement('div');
        divParent.appendChild(divOuter);

        let divTitle = document.createElement('div');
        divTitle.classList.add('work-individual-title');
        divTitle.innerText = window.res.work.workIndScreenshot[window.langCur];
        divOuter.appendChild(divTitle);

        let divGrid = document.createElement('div');
        divGrid.classList.add('work-individual-screenshot-grid');
        divOuter.appendChild(divGrid);

        for (let i = 0; i < data.image.length; i++) {
            let dataImage = data.image[i];
            let colSpan = dataImage.colSpan;

            let divImageOuter = document.createElement('div');
            divImageOuter.classList.add('work-individual-screenshot-image-outer');
            divImageOuter.style['grid-column'] = `auto / span ${colSpan}`;
            divGrid.appendChild(divImageOuter);

            let img = document.createElement('img');
            img.classList.add('work-individual-screenshot-img');
            img.src = window.imagePreload[dataImage.name].src;
            divImageOuter.appendChild(img);
        }
    };

    createDivFour(data, divParent) {
        let svgContent = window.imagePreload['work_ind_version'];
        divParent.innerHTML = divParent.innerHTML.concat(svgContent);

        let divOuter = document.createElement('div');
        divParent.appendChild(divOuter);

        let divTitle = document.createElement('div');
        divTitle.classList.add('work-individual-title');
        divTitle.innerText = window.res.work.workIndVersion[window.langCur];
        divOuter.appendChild(divTitle);

        for (let i = 0; i < data.version.length; i++) {
            let version = data.version[i];

            let divVersion = document.createElement('div');
            divVersion.classList.add('work-individual-version-number')
            divVersion.innerText = version.version;
            divOuter.appendChild(divVersion);

            let divDescGrid = document.createElement('div');
            divDescGrid.classList.add('work-individual-version-desc-grid');
            divOuter.appendChild(divDescGrid);

            for (let j = 0; j < version.desc.length; j++) {
                let desc = version.desc[i];

                let divBullet = document.createElement('div');
                divBullet.classList.add('work-individual-version-desc-grid-bullet');
                divBullet.innerText = '>';
                divDescGrid.appendChild(divBullet);

                let divText = document.createElement('div');
                divText.classList.add('work-individual-version-desc-grid-text');
                divText.innerText = desc[window.langCur];
                divDescGrid.appendChild(divText);
            }
        }
    };
};