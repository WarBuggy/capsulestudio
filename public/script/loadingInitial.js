class LoadingInitial {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('loading-initial');

        let divImageLandscape = document.createElement('div');
        divImageLandscape.classList.add('loading-initial-image');
        divImageLandscape.classList.add('landscape');
        Common.loadSVGAsXML(divImageLandscape, 'res/img/loading_initial_landscape.svg');
        this.div.appendChild(divImageLandscape);

        let divImagePortrait = document.createElement('div');
        divImagePortrait.classList.add('loading-initial-image');
        divImagePortrait.classList.add('portrait');
        Common.loadSVGAsXML(divImagePortrait, 'res/img/loading_initial_portrait.svg');
        this.div.appendChild(divImagePortrait);

        let divDisclaimer = document.createElement('div');
        divDisclaimer.classList.add('loading-initial-disclaimer');
        divDisclaimer.onclick = function() {
            window.open('https://loading.io', '_newtab');
        };
        this.div.appendChild(divDisclaimer);
    };
};