window.onload = async function() {
    window.rootStyle = getComputedStyle(document.body);
    await showLoadindInitial();
    this.createDivHomeBanner();
    // new MenuTop();
};

async function showLoadindInitial(waitTime) {
    let minWaitTime = 2000;
    let defaultWaitTime = 3000;
    if (waitTime == null || !Common.isNumeric(waitTime) ||
        waitTime < minWaitTime) {
        waitTime = defaultWaitTime;
    }
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    await Common.sleep(waitTime);
    document.body.removeChild(loadingInitial.div);
};

function createDivHomeBanner() {
    let div = document.createElement('div');
    div.classList.add('home-banner');

    let divOverlay = document.createElement('div');
    divOverlay.classList.add('home-banner-color-overlay');
    div.appendChild(divOverlay);

    Common.loadSVGAsXML(div, 'res/img/home_banner_image_overlay.svg', function() {
        document.body.appendChild(div);
    });
};

function createText() {
    let text = 'The spinner "Ball" is provided by loading.io.';
    let width = 1500;
    let height = 250;
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.font = "60px Quicksand";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#121212';
    ctx.fillText(text, (width / 2), (height / 2));
};