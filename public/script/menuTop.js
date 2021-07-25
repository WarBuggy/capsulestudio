class MenuTop {
    constructor() {
        this.toggleTime =
            window.rootStyle.getPropertyValue('--menu-top-animation-toggle-time');

        this.div = document.createElement('div');
        this.div.classList.add('menu-top-outer');
        document.body.appendChild(this.div);

        this.createGroupLogo();
        this.createItem();
    };

    createGroupLogo() {
        let divLogoOuter = document.createElement('div');
        divLogoOuter.classList.add('menu-top-logo-outer');
        this.div.appendChild(divLogoOuter);

        let divLogo = document.createElement('div');
        divLogo.classList.add('menu-top-logo-logo');
        divLogoOuter.appendChild(divLogo);
        divLogo.onclick = function() {
            window.location = window.webURL + 'index.html';
        };

        let divName = document.createElement('div');
        divName.classList.add('menu-top-logo-name');
        divName.innerText = window.res.common.companyName[window.langCur];
        divLogoOuter.appendChild(divName);
        divName.onclick = function() {
            window.location = window.webURL + 'index.html';
        };

        this.createSVGMobileButtonToggle(divLogoOuter);

    };

    createSVGMobileButtonToggle(divParent) {
        let clickableAttr = 'clickable';
        let closeAttr = 'close';
        let animationTime = this.toggleTime;
        divParent.innerHTML =
            divParent.innerHTML.concat(window.imagePreload['home_logo_button_toggle']);

        let svg = document.getElementById('menuTopButtonToggle');
        svg.setAttribute(clickableAttr, 'true');
        svg.setAttribute(closeAttr, 'true');
        svg.onclick = function() {
            let clickable = this.getAttribute(clickableAttr);
            let close = this.getAttribute(closeAttr);
            if (clickable == 'false') {
                return;
            }
            this.setAttribute(clickableAttr, 'false');
            let groupName = 'animMenuTopMobileButtonShow';
            let endClose = 'false';
            if (close == 'false') {
                groupName = 'animMenuTopMobileButtonHide';
                endClose = 'true';
            }
            let group = document.getElementById(groupName);
            for (let i = 0; i < group.children.length; i++) {
                group.children[i].setAttribute('dur', animationTime);
                group.children[i].beginElement();
            }
            this.setAttribute(closeAttr, endClose);
            window.setTimeout(function() {
                svg.setAttribute(clickableAttr, 'true');
            }, parseInt(animationTime));
        };
        return svg;
    };

    createItem() {
        let keyList = Object.keys(window.res.common.menuItem);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let objectData = window.res.common.menuItem[key];
            this.createAnItem(objectData);
        }
    };

    createAnItem(objectData) {
        let div = document.createElement('div');
        div.classList.add('menu-top-item');
        if (objectData.extraCss != null) {
            for (let i = 0; i < objectData.extraCss.length; i++) {
                div.classList.add(objectData.extraCss[i]);
            }
        }
        div.innerText = objectData[window.langCur];
        this.div.appendChild(div);
        div.onclick = function() {
            window.location = objectData.link;
        };
    };
}