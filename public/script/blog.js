window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['common', 'blog', ];
    let param = Common.getURLParameter('blog');
    if (param == '' || window.res.blog.item[param] == null) {
        let itemList = ContentBlog.processBlogItem();
        Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
            document.body.removeChild(loadingInitial.div);
            new ContentBlog(itemList);
        });
        return;
    }
    ContentBlogIndividual.addImagePreload(param);
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        new ContentBlogIndividual(param);
    });
};


class ContentBlog {
    constructor(itemList) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let imageLink = window.version.image.blog['blog_banner'];
        let titleBanner = window.res.blog.title;
        let siteMapBanner = window.res.blog.siteMapItemList;
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid, itemList);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivOne(divParent, itemList) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('blog-one-grid');
        divParent.appendChild(divGrid);

        let divItemOuter = document.createElement('div');
        divItemOuter.classList.add('blog-one-item-grid-outer');
        divGrid.appendChild(divItemOuter);
        this.createDivOneItem(divItemOuter, itemList);

        let divSideOuter = document.createElement('div');
        divSideOuter.classList.add('blog-one-side-grid-outer');
        divGrid.appendChild(divSideOuter);
        ContentBlog.createDivOneSide(divSideOuter);
    };

    createDivOneItem(divParent, itemList) {
        let firstItemProcessed = false;
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            if (item.hidden === true) {
                continue;
            }

            let div = document.createElement('div');
            div.classList.add('blog-one-item-grid');
            divParent.appendChild(div);

            let divImage = document.createElement('div');
            divImage.classList.add('blog-one-item-image');
            divImage.style.backgroundImage = `url(${window.version.image.blog[item.name]})`;
            div.appendChild(divImage);

            if (firstItemProcessed == false) {
                div.classList.add('item-1');
                divImage.classList.add('item-1');
                firstItemProcessed = true;
            }

            ContentBlog.createDivDate(divImage, item);

            let divTitle = document.createElement('div');
            divTitle.classList.add('blog-one-item-title');
            divTitle.innerText = item.title[window.langCur];
            div.appendChild(divTitle);

            let divDesc = document.createElement('div');
            divDesc.classList.add('blog-one-item-desc');
            divDesc.innerText = item.desc[window.langCur];
            div.appendChild(divDesc);

            let divButton = document.createElement('div');
            divButton.classList.add('general-button');
            divButton.classList.add('blog-detail');
            divButton.innerText = window.res.blog.button[window.langCur];
            div.appendChild(divButton);

            let link = `blog.html?blog=${item.name}`;
            divButton.onclick = function() {
                window.location = link;
            };
            div.onclick = function() {
                window.location = link;
            };
        }
    };

    static createDivDate(divParent, item) {
        let divDate = document.createElement('div');
        divDate.classList.add('blog-one-item-date');
        divParent.appendChild(divDate);

        let datePart = item.date.split('-');
        let year = datePart[0];
        let month = datePart[1];
        let day = datePart[2];
        let dateString = window.res.blog.dateFormat[window.langCur];
        dateString = dateString.replace('year', year);
        dateString = dateString.replace('month', month);
        dateString = dateString.replace('day', day);
        let divDateInner = document.createElement('div');
        divDateInner.classList.add('blog-one-item-date-inner');
        divDateInner.innerHTML = dateString;
        divDate.appendChild(divDateInner);
    };

    static createDivOneSide(divParent) {
        let divOuter = document.createElement('div');
        divOuter.classList.add('blog-one-contact-outer');
        divParent.appendChild(divOuter);

        let divText = document.createElement('div');
        divText.classList.add('blog-one-contact-text');
        divText.innerText = window.res.blog.contact[window.langCur];
        divOuter.appendChild(divText);

        let divButton = document.createElement('div');
        divButton.classList.add('general-button');
        divButton.classList.add('inverted');
        divButton.classList.add('blog-contact');
        divButton.innerText = window.res.blog.contactButton[window.langCur];
        divOuter.appendChild(divButton);
        divButton.onclick = function() {
            window.location = 'contact.html';
        };
    };

    static processBlogItem() {
        let keyList = Object.keys(window.res.blog.item);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            window.res.blog.item[key].name = key;
        }
        let itemList = Object.values(window.res.blog.item);
        itemList.sort(ContentBlog.sortBlogItem);
        let itemNum = Math.min(itemList.length, 9);
        for (let i = 0; i < itemNum; i++) {
            let item = itemList[i];
            window.version.image.blog[item.name] = item.thumbnail;
        }
        return itemList;
    };

    static sortBlogItem(blog1, blog2) {
        if (blog1.date < blog2.date) {
            return 1;
        }
        if (blog1.date > blog2.date) {
            return -1;
        }
        return 0;
    };
};

class ContentBlogIndividual {
    constructor(param) {
        let item = window.res.blog.item[param];

        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let imageLink = window.version.image.blog['blog_banner'];
        let titleBanner = window.res.blog.title;
        let siteMapBanner = window.res.blog.siteMapItemList;
        siteMapBanner = siteMapBanner.concat([
            ['blog', 'item', param, 'title', ]
        ]);
        let banner = new Banner(divOuter, imageLink, titleBanner, siteMapBanner);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        let divOneGrid = document.createElement('div');
        divOneGrid.classList.add('blog-one-grid');
        divGrid.appendChild(divOneGrid);

        let divBanner = document.createElement('div');
        divBanner.classList.add('blog-individual-banner');
        divBanner.style.backgroundImage = `url(${item.thumbnail})`;
        divOneGrid.appendChild(divBanner);
        ContentBlog.createDivDate(divBanner, item);

        this.createDivTableContent(divOneGrid, item);

        let divItemOuter = document.createElement('div');
        divItemOuter.classList.add('blog-individual-grid-content');
        divOneGrid.appendChild(divItemOuter);
        this.createDivOneItem(divItemOuter, item);

        let divSideOuter = document.createElement('div');
        divSideOuter.classList.add('blog-one-side-grid-outer');
        divOneGrid.appendChild(divSideOuter);
        ContentBlog.createDivOneSide(divSideOuter);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivOneItem(divParent, item) {
        let anchorTitle = 0;
        for (let i = 0; i < item.content.length; i++) {
            let part = item.content[i];
            let type = part.type;
            let div = document.createElement('div');
            div.classList.add(`blog-individual-${type}`);
            let html = part.content[window.langCur];
            if (part.type == 'code') {
                html = part.content;
                html = Common.formatCode(html, part.language);
                html = '<div class="code-outer">' + html + '</div>'
            } else if (part.type == 'title') {
                let divAnchor = document.createElement('div');
                divAnchor.classList.add('blog-individual-title-anchor');
                divAnchor.id = `divAnchor${anchorTitle}`;
                anchorTitle = anchorTitle + 1;
                div.appendChild(divAnchor);
            } else if (type == 'image') {
                this.createContentImage(div, item, part);
                html = '';
            }
            div.innerHTML = div.innerHTML.concat(html);
            if (part.type == 'title') {
                let divBack = document.createElement('div');
                divBack.classList.add('blog-individual-title-back-to-top');
                divBack.innerText = window.res.blog.backToTop[window.langCur];
                div.appendChild(divBack);
                divBack.onclick = function() {
                    document.getElementById('divAnchorToC').scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                };
            }
            divParent.appendChild(div);
        }
        this.addClickEventToImage();
    };

    createContentImage(divParent, item, part) {
        let path = item.imageList[part.image];
        let caption = part.content[window.langCur];

        let img = document.createElement('img');
        img.classList.add('blog-individual-image-inner');
        img.src = path;
        divParent.appendChild(img);
        img.setAttribute('alt', caption);
        if (part.landscape == true) {
            img.setAttribute('orientation', 'landscape');
        }

        let divCaption = document.createElement('div');
        divCaption.classList.add('blog-individual-image-caption');
        divCaption.innerHTML = caption;
        divParent.appendChild(divCaption);
    };

    addClickEventToImage() {
        let imgList = document.getElementsByClassName('blog-individual-image-inner');
        for (let i = 0; i < imgList.length; i++) {
            let img = imgList[i];
            let path = img.src;
            let caption = img.getAttribute('alt');
            let orientation = img.getAttribute('orientation');

            img.onclick = function() {
                Common.showImage(path, caption, orientation);
            }
        }
    };

    createDivTableContent(divParent, item) {
        let anchorTitle = 0;

        let divOuter = document.createElement('div');
        divOuter.classList.add('blog-one-table-content-grid');
        divParent.appendChild(divOuter);

        let divAnchor = document.createElement('div');
        divAnchor.classList.add('blog-individual-title-anchor');
        divAnchor.id = `divAnchorToC`;
        divOuter.appendChild(divAnchor);

        for (let i = 0; i < item.content.length; i++) {
            let part = item.content[i];
            if (part.type != 'title') {
                continue;
            }

            let divBullet = document.createElement('div');
            divBullet.classList.add('blog-one-table-content-bullet');
            divBullet.innerText = '>';
            divOuter.appendChild(divBullet);

            let divTitle = document.createElement('div');
            divTitle.classList.add('blog-one-table-content-title');
            divTitle.innerText = part.content[window.langCur];
            divTitle.setAttribute('title', anchorTitle);
            divOuter.appendChild(divTitle);

            divTitle.onclick = function() {
                let titleId = this.getAttribute('title');
                let divTarget = document.getElementById(`divAnchor${titleId}`);
                divTarget.scrollIntoView({ behavior: 'smooth', block: 'start', });
            };

            anchorTitle = anchorTitle + 1;
        }
    };

    static addImagePreload(param) {
        let keyList = Object.keys(window.res.blog.item[param].imageList);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let value = window.res.blog.item[param].imageList[key];
            window.version.image.blog[key] = value;
        }
    };
};