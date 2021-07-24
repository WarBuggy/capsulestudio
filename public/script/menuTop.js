class MenuTop {
    constructor() {
        this.toggleTime = 400;

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
        divName.innerText = 'Capsule Studio';
        divLogoOuter.appendChild(divName);
        divName.onclick = function() {
            window.location = window.webURL + 'index.html';
        };

        let svgButton = this.createSVGMobileButtonClose();
        divLogoOuter.appendChild(svgButton);
    };

    createSVGMobileButtonClose() {
        let clickableAttr = 'clickable';
        let closeAttr = 'close';
        let animationTime = this.toggleTime;
        let colorStroke = window.rootStyle.getPropertyValue('--color-grey-blue');

        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('menu-top-mobile-button-close');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        svg.setAttribute('width', '40px');
        svg.setAttribute('height', '40px');
        svg.setAttribute('viewBox', '0 0 40 40');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid');
        svg.setAttribute(clickableAttr, 'true');
        svg.setAttribute(closeAttr, 'true');
        svg.innerHTML = `
            <line id="menuTopMobileButtonClose1" x1="5" y1="10" x2="35" y2="10" style="stroke:${colorStroke};stroke-width:2" />
            <line id="menuTopMobileButtonClose2" x1="5" y1="20" x2="30" y2="20" style="stroke:${colorStroke};stroke-width:2" />
            <line id="menuTopMobileButtonClose3" x1="5" y1="30" x2="25" y2="30" style="stroke:${colorStroke};stroke-width:2" />
            <g id='animMenuTopMobileButtonShow'>
                <animate href="#menuTopMobileButtonClose1"
                    attributeName="y1" from="10" to="5" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose1" 
                    attributeName="y2" from="10" to="35" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose2"
                    attributeName="opacity" from="1" to="0" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="y1" from="30" to="35" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="y2" from="30" to="5" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="x2" from="25" to="35" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
            </g>
            <g id='animMenuTopMobileButtonHide'>
                <animate href="#menuTopMobileButtonClose1"
                    attributeName="y1" from="5" to="10" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose1" 
                    attributeName="y2" from="35" to="10" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose2"
                    attributeName="opacity" from="0" to="1" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="y1" from="35" to="30" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="y2" from="5" to="30" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
                <animate href="#menuTopMobileButtonClose3"
                    attributeName="x2" from="35" to="25" dur="${animationTime}ms" fill="freeze" begin="indefinite" />
            </g>
        `;
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
                group.children[i].beginElement();
            }
            this.setAttribute(closeAttr, endClose);
            window.setTimeout(function() {
                svg.setAttribute(clickableAttr, 'true');
            }, animationTime);
        };
        return svg;
    };

    createItem() {
        this.createAnItem('HOME', ['menu-top-item-static'], window.webURL + 'index.html');
        this.createAnItem('OUR WORK', ['menu-top-item-static'], window.webURL + 'index.html');
        this.createAnItem('SERIVCES', ['menu-top-item-static'], window.webURL + 'index.html');
        this.createAnItem('BLOG', ['menu-top-item-static'], window.webURL + 'index.html');
        this.createAnItem('ABOUT US', ['menu-top-item-static'], window.webURL + 'index.html');
        this.createAnItem('CONTACT', ['menu-top-item-static', 'contact'], window.webURL + 'index.html');
    };

    createAnItem(name, classNameList, link) {
        let div = document.createElement('div');
        for (let i = 0; i < classNameList.length; i++) {
            div.classList.add(classNameList[i]);
        }
        div.innerText = name;
        this.div.appendChild(div);
        div.onclick = function() {
            window.location = link;
        };
    };
}