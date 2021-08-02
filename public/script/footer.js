class Footer {
    constructor(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-parent');
        divParent.appendChild(div);

        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('general-content-grid');
        div.appendChild(divGridOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('footer-grid');
        divGridOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
        this.createDivTwo(divGrid);
        this.createDivThree(divGrid);
        this.createDivFour(divGrid);
        this.createDivFive(divGrid);
    };

    createDivOne(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-one-grid');
        divParent.appendChild(div);

        let divLogo = document.createElement('div');
        divLogo.classList.add('footer-one-logo');
        div.appendChild(divLogo);

        let divName = document.createElement('div');
        divName.classList.add('footer-one-name');
        divName.innerText = window.res.common.companyName[window.langCur];
        div.appendChild(divName);

        let divText = document.createElement('div');
        divText.classList.add('footer-one-text');
        divText.innerText = window.res.common.footer.oneText[window.langCur];
        div.appendChild(divText);
    };

    createDivTwo(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-two-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.twoTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.common.menuItem);
        for (let i = 1; i < keyList.length; i++) {
            let item = window.res.common.menuItem[keyList[i]];

            let divBullet = document.createElement('div');
            divBullet.classList.add('footer-item-bullet');
            divBullet.innerText = '>';
            div.appendChild(divBullet);

            let divLink = document.createElement('div');
            divLink.classList.add('footer-item-link');
            divLink.innerText = this.capitalizeFirstLetterOnly(item[window.langCur]);
            div.appendChild(divLink);

            divLink.onclick = function () {
                window.location = item.link;
            };
        }
    };

    createDivThree(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-three-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.threeTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.work);
        for (let i = 0; i < keyList.length; i++) {
            let item = window.res.work[keyList[i]];
            if (item.name == null) {
                continue;
            }

            let divBullet = document.createElement('div');
            divBullet.classList.add('footer-item-bullet');
            divBullet.innerText = '>';
            div.appendChild(divBullet);

            let divLink = document.createElement('div');
            divLink.classList.add('footer-item-link');
            divLink.innerText = item.name;
            div.appendChild(divLink);

            if (item.link != null) {
                divLink.onclick = function () {
                    window.location = item.link;
                };
            }
        }
    };

    createDivFour(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-four-grid');
        divParent.appendChild(div);

        let divTitle = document.createElement('div');
        divTitle.classList.add('footer-item-title');
        divTitle.innerText = window.res.common.footer.fourTitle[window.langCur];
        div.appendChild(divTitle);

        let keyList = Object.keys(window.res.common.footer.fourText);
        for (let i = 0; i < keyList.length; i++) {
            let item = window.res.common.footer.fourText[keyList[i]];

            let divName = document.createElement('div');
            divName.classList.add('footer-four-item');
            divName.innerText = item[window.langCur];
            div.appendChild(divName);

            let divText = document.createElement('div');
            divText.classList.add('footer-four-item');
            divText.classList.add('text');
            if (item.extraCssText != null) {
                for (let j = 0; j < item.extraCssText.length; j++) {
                    divText.classList.add(item.extraCssText[j]);
                }
            }
            divText.innerHTML = item.text;
            div.appendChild(divText);
        }
    };

    createDivFive(divParent) {
        let div = document.createElement('div');
        div.classList.add('footer-five');
        div.innerText = '© 2021 Capsule Studio. All Rights Reserved.';
        divParent.appendChild(div);

    };

    capitalizeFirstLetterOnly(string) {
        let lowerCase = string.toLowerCase();
        let wordList = lowerCase.split(' ');
        for (let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            if (word.length < 1) {
                continue;
            }
            wordList[i] = `${word[0].toUpperCase()}${word.slice(1)}`;
        }
        return wordList.join(' ');
    };

};