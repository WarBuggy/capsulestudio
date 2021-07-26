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
        let className = 'menu-top-click-home-page';

        let divGrid = document.createElement('div');
        divGrid.classList.add('menu-top-grid');
        this.div.appendChild(divGrid);

        let divItemFillerBefore = document.createElement('div');
        divItemFillerBefore.classList.add('menu-top-item-filler');
        divItemFillerBefore.classList.add('first-row');
        divGrid.appendChild(divItemFillerBefore);

        let divLogoOuter = document.createElement('div');
        divLogoOuter.classList.add('menu-top-logo-outer');
        divGrid.appendChild(divLogoOuter);

        let divLogo = document.createElement('div');
        divLogo.classList.add('menu-top-logo-logo');
        divLogo.classList.add(className);
        divLogoOuter.appendChild(divLogo);

        let divName = document.createElement('div');
        divName.classList.add('menu-top-logo-name');
        divName.classList.add(className);
        divName.innerText = window.res.common.companyName[window.langCur];
        divLogoOuter.appendChild(divName);

        this.createSVGMobileButtonToggle(divLogoOuter);

        let divItemFillerAfter = document.createElement('div');
        divItemFillerAfter.classList.add('menu-top-item-filler');
        divItemFillerAfter.classList.add('first-row');
        divGrid.appendChild(divItemFillerAfter);

        let divClickForHome = document.getElementsByClassName(className);
        for (let i = 0; i < divClickForHome.length; i++) {
            divClickForHome[i].onclick = function() {
                window.location = window.res.common.menuItem['home'].link;
            };
        }
    };

    createSVGMobileButtonToggle(divParent) {
        let parent = this;
        let clickableAttr = 'clickable';
        let closeAttr = 'close';
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
                parent.div.classList.remove('show');
                parent.div.classList.add('hide');
                window.setTimeout(function() {
                    parent.div.classList.remove('hide');
                }, parseInt(parent.toggleTime));
            } else {
                parent.div.classList.add('show');
            }
            let group = document.getElementById(groupName);
            for (let i = 0; i < group.children.length; i++) {
                group.children[i].setAttribute('dur', parent.toggleTime);
                group.children[i].beginElement();
            }
            this.setAttribute(closeAttr, endClose);
            window.setTimeout(function() {
                svg.setAttribute(clickableAttr, 'true');
            }, parseInt(parent.toggleTime));
        };
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
        let divGrid = document.createElement('div');
        divGrid.classList.add('menu-top-grid');
        this.div.appendChild(divGrid);

        let divItemFillerBefore = document.createElement('div');
        divItemFillerBefore.classList.add('menu-top-item-filler');
        divGrid.appendChild(divItemFillerBefore);

        let div = document.createElement('div');
        div.classList.add('menu-top-item');
        if (objectData.extraCss != null) {
            for (let i = 0; i < objectData.extraCss.length; i++) {
                div.classList.add(objectData.extraCss[i]);
            }
        }
        div.innerText = objectData[window.langCur];
        divGrid.appendChild(div);

        let divItemFillerAfter = document.createElement('div');
        divItemFillerAfter.classList.add('menu-top-item-filler');
        divGrid.appendChild(divItemFillerAfter);

        div.onclick = function() {
            window.location = objectData.link;
        };
    };

    toggleMenuTop(data) {
        let timeCurrent = (new Date()).getTime();
        let timeDiff = timeCurrent - data.timeStart;
        if (timeDiff >= data.timeTotal) {
            data.div.style.height = (data.heightDelta + data.heightInitial) + 'px';
            return;
        }
        let progress = window.res.common.easing[data.easing](timeDiff / data.timeTotal);
        let height = (data.heightDelta * progress) + data.heightInitial;
        data.div.style.height = height + 'px';
        let parent = this;
        window.requestAnimationFrame(function() {
            parent.toggleMenuTop(data);
        });
    };
}