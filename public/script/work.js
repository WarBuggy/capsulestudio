window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['common', 'home_work_common', 'work', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        let paramApp = Common.getURLParameter('app');
        if (paramApp == '' || window.res.work.item[paramApp] == null) {
            new ContentWork();
            return;
        }
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
        document.write('Hello World!');
    }
}