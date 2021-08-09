window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let param = Common.getURLParameter('service');
    if (param == '' || window.res.service.item[param] == null) {
        let imagePreloadCategoryList = ['common', 'home_service_common', 'service', ];
        Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
            document.body.removeChild(loadingInitial.div);
            new ContentService();
        });
        return;
    }
    let imagePreloadCategoryList = ['common', 'service_ind'];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        new ContentServiceIndividual(param);
    });
};


class ContentService {
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

class ContentServiceIndividual {
    constructor(param) {
        this.textAnchor = 'divImageThree';

        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let data = window.res.service.item[param];
        let imageLink = window.version.image.service_ind['service_ind_banner'];
        let titleBanner = data.title[window.langCur];
        let siteMapBanner = window.res.service.siteMapItemList;
        siteMapBanner = siteMapBanner.concat([
            ['service', 'item', param, 'title', ]
        ]);
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        let divContent = document.createElement('div');
        divContent.classList.add('service-individual-content-grid');
        divGrid.appendChild(divContent);

        this.createDivOne(divContent, data);
        this.createDivTwo(divContent, param);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);

        if (window.location.toString().includes(this.textAnchor)) {
            document.getElementById(this.textAnchor).scrollIntoView({ behavior: 'smooth' });
        }
    };

    createDivOne(divParent, data) {
        let numImage = 3;
        for (let i = 0; i < numImage; i++) {
            let divImage = document.createElement('div');
            divImage.classList.add('service-individual-one-image');
            divImage.classList.add(`image-${i + 1}`);
            let pathImage = window.version.image.service_ind[`service_ind_${i + 1}`];
            divImage.style.backgroundImage = `url(${pathImage})`;
            divParent.appendChild(divImage);
            if (i == numImage - 1) {
                divImage.id = this.textAnchor;
            }
        }

        let divTextOuter = document.createElement('div');
        divTextOuter.classList.add('service-individual-one-text-outer');
        divParent.appendChild(divTextOuter);

        for (let i = 0; i < data.text_ind.length; i++) {
            let item = data.text_ind[i];
            let div = document.createElement('div');
            div.classList.add('service-individual-one-text');
            div.innerHTML = item.content;
            divTextOuter.appendChild(div);
        }
    };

    createDivTwo(divParent, param) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('service-individual-two-outer');
        divParent.appendChild(divOuter);

        let divMenuOuter = document.createElement('div');
        divMenuOuter.classList.add('service-individual-two-menu-outer');
        divOuter.appendChild(divMenuOuter);

        let keyList = Object.keys(window.res.service.item);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let item = window.res.service.item[key];
            let extraCss = 'dummy';
            if (key == param) {
                extraCss = 'current';
            }

            let divBullet = document.createElement('div');
            divBullet.classList.add('service-individual-two-menu-bullet');
            divBullet.classList.add(extraCss);
            divBullet.innerText = '>';
            divMenuOuter.appendChild(divBullet);

            let divText = document.createElement('div');
            divText.classList.add('service-individual-two-menu-item');
            divText.classList.add(extraCss);
            divText.innerText = item.title[window.langCur];
            divMenuOuter.appendChild(divText);

            let parent = this;
            divText.onclick = function() {
                window.location = `service.html?service=${key}#${parent.textAnchor}`;
            };
        }

        this.createDivTwoContact(divOuter);
    };

    createDivTwoContact(divParent) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('service-individual-two-contact-outer');
        divParent.appendChild(divOuter);

        let divText = document.createElement('div');
        divText.classList.add('service-individual-two-contact-text');
        divText.innerText = window.res.service.contact[window.langCur];
        divOuter.appendChild(divText);

        let divButton = document.createElement('div');
        divButton.classList.add('general-button');
        divButton.classList.add('inverted');
        divButton.classList.add('service-contact');
        divButton.innerText = window.res.service.contactButton[window.langCur];
        divOuter.appendChild(divButton);
        divButton.onclick = function() {
            window.location = 'contact.html';
        };

    };
};