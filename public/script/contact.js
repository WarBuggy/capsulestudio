window.onload = function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['common', 'contact', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, window.imagePreloadTimeWaitMin, function() {
        document.body.removeChild(loadingInitial.div);
        new ContentContact();
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

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
        this.createDivTwo(divGrid);

        new Footer(divOuter);

        new MenuTop(50);

        Common.createDivParallax(banner.div, this.objectParallaxBanner, 50, 0);
    };

    createDivOne(divParent) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('contact-one-grid');
        divParent.appendChild(divGrid);

        for (let i = 0; i < window.res.contact.item.length; i++) {
            let divItemGrid = document.createElement('div');
            divItemGrid.classList.add('contact-one-item-grid');
            divGrid.appendChild(divItemGrid);


            let item = window.res.contact.item[i];
            divItemGrid.innerHTML = window.imagePreload[item.image];

            let divText = document.createElement('div');
            divText.classList.add('contact-item-text');
            divText.innerHTML = window.res.common.footer.fourText[item.text].text;
            divItemGrid.appendChild(divText);
        }
    };

    createDivTwo(divParent) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('contact-two-grid');
        divParent.appendChild(divGrid);

        this.createDivText(divGrid);
        this.createDivInput(divGrid);

        let divButton = document.createElement('div');
        divButton.classList.add('general-button');
        divButton.innerText = window.res.contact.buttonText[window.langCur];
        divGrid.appendChild(divButton);

        let parent = this;
        divButton.onclick = async function() {
            let name = parent.inputName.input.value.trim();
            let contact = parent.inputContact.input.value.trim();
            let message = parent.inputMessage.input.value.trim();
            if (name == '' && contact == '' && message == '') {
                parent.inputName.input.focus();
                return;
            }
            let data = {
                name,
                contact,
                message,
            }
            let divWaiting = Common.createAndShowDivWaiting();
            let objectResult = await Common.sendToBackend('cs_contact', data);
            Common.removeDivWaiting(divWaiting);
            let messagePopup = window.res.contact.popup.success[window.langCur];
            if (objectResult.success == false) {
                messagePopup =
                    window.res.contact.popup.fail[window.langCur].replace('|<|code|>|', objectResult.code);
            }
            Common.showMessage(messagePopup);
        };
    };

    createDivText(divParent) {
        let div = document.createElement('div');
        div.classList.add('contact-grid-text-outer');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('contact-grid-title');
        divTitle.innerText = window.res.contact.titleGrid[window.langCur];
        div.appendChild(divTitle);

        let divText = document.createElement('div');
        divText.classList.add('contact-grid-text');
        divText.innerText = window.res.contact.textGrid[window.langCur];
        div.appendChild(divText);
    };

    createDivInput(divParent) {
        this.inputName = new TextBox(window.res.contact.inputName[window.langCur]);
        divParent.appendChild(this.inputName.div);

        this.inputContact = new TextBox(window.res.contact.inputContact[window.langCur]);
        divParent.appendChild(this.inputContact.div);

        this.inputMessage = new TextArea(window.res.contact.inputMessage[window.langCur]);
        this.inputMessage.div.classList.add('text-area');
        divParent.appendChild(this.inputMessage.div);
    };
};