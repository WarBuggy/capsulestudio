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

        this.createDivInfo(data, divContentGrid);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivInfo(data, divParent) {
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
};