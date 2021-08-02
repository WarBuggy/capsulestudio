window.onload = function () {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['common', 'contact',];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function () {
        document.body.removeChild(loadingInitial.div);
        new ContentContact();
        new MenuTop();
    });
};

class ContentContact {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let imageLink = window.version.image.contact['contact_banner'];
        let titleBanner = window.res.contact.title;
        let siteMapBanner = window.res.contact.siteMapItemList;
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };
};