class LoadingInitial {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('loading-initial');

        let divImageLandscape = document.createElement('div');
        divImageLandscape.classList.add('loading-initial-image');
        divImageLandscape.classList.add('landscape');
        Common.loadSVGAsXML(divImageLandscape,
            window.version.image.common['loading_initial_landscape']);
        this.div.appendChild(divImageLandscape);

        let divImagePortrait = document.createElement('div');
        divImagePortrait.classList.add('loading-initial-image');
        divImagePortrait.classList.add('portrait');
        Common.loadSVGAsXML(divImagePortrait,
            window.version.image.common['loading_initial_portrait']);
        this.div.appendChild(divImagePortrait);

        let divDisclaimerLight = document.createElement('div');
        divDisclaimerLight.classList.add('loading-initial-disclaimer');
        divDisclaimerLight.classList.add('light');
        divDisclaimerLight.style.backgroundImage =
            `url(${window.version.image.common['loading_initial_disclaimer_light']})`;
        divDisclaimerLight.onclick = function() {
            window.open('https://loading.io', '_newtab');
        };
        this.div.appendChild(divDisclaimerLight);

        let divDisclaimerDark = document.createElement('div');
        divDisclaimerDark.classList.add('loading-initial-disclaimer');
        divDisclaimerDark.classList.add('dark');
        divDisclaimerDark.style.backgroundImage =
            `url(${window.version.image.common['loading_initial_disclaimer_dark']})`;
        divDisclaimerDark.onclick = function() {
            window.open('https://loading.io', '_newtab');
        };
        this.div.appendChild(divDisclaimerDark);
    };
};