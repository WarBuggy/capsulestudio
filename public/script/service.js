window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let paramApp = Common.getURLParameter('service');
    if (paramApp == '' || window.res.service.item[paramApp] == null) {
        let imagePreloadCategoryList = ['common', 'home_service_common', 'service', ];
        Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
            document.body.removeChild(loadingInitial.div);
            new ContentService();
        });
        return;
    }
    // let imagePreloadCategoryList = ['common', 'work', 'work_' + paramApp];
    // Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
    //     document.body.removeChild(loadingInitial.div);
    //     new ContentWorkIndividual(paramApp);
    // });
};


class ContentServiceIndividual {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let imageLink = window.version.image.service['service_banner'];
        let titleBanner = window.res.service.title;
        let siteMapBanner = window.res.service.siteMapItemList;
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
        divGrid.classList.add('service-one-grid');
        divParent.appendChild(divGrid);

        let keyList = Object.keys(window.res.service.item);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let item = window.res.service.item[key];

            let div = document.createElement('div');
            div.classList.add('service-one-item-grid');
            divGrid.appendChild(div);

            div.innerHTML = window.imagePreload[item.icon];
            console.log(div.children);
            let svg = div.children[0];
            svg.setAttribute('class', '');
            svg.classList.add('service-one-item-icon');


            let divTitle = document.createElement('div');
            divTitle.classList.add('service-one-item-title');
            divTitle.innerText = item.title[window.langCur];
            div.appendChild(divTitle);

            let divText = document.createElement('div');
            divText.classList.add('service-one-item-text');
            divText.innerText = item.text[window.langCur];
            div.appendChild(divText);

            div.onclick = function() {
                window.location = `service.html?service=${key}`;
            }
        }
    };
};