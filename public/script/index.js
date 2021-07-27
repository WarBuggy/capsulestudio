window.onload = async function() {
    window.rootStyle = getComputedStyle(document.body);
    let loadingInitial = new LoadingInitial();
    document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['home', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, 0, function() {
        document.body.removeChild(loadingInitial.div);
        createDivHomeBanner();
        new ContentHome();
        new MenuTop();
    });
};


function createDivHomeBanner() {
    let div = document.createElement('div');
    div.classList.add('home-banner');
    div.style.backgroundImage = `url(${window.version.image.home['home_banner']})`;

    let divOverlay = document.createElement('div');
    divOverlay.classList.add('home-banner-color-overlay');
    div.appendChild(divOverlay);

    div.innerHTML = div.innerHTML.concat(window.imagePreload['home_banner_image_overlay']);

    document.body.appendChild(div);
};

class ContentHome {
    constructor() {
        let divOuter = document.createElement('div');
        divOuter.classList.add('general-content-outer');
        document.body.appendChild(divOuter);

        let divGrid = document.createElement('div');
        divGrid.classList.add('general-content-grid');
        divOuter.appendChild(divGrid);

        this.createDivOne(divGrid);
    };

    createDivOne(divParent) {
        let divGridOuter = document.createElement('div');
        divGridOuter.classList.add('one-grid-outer');
        divParent.appendChild(divGridOuter);

        let divGridInner = document.createElement('div');
        divGridInner.classList.add('one-grid-inner');
        divGridOuter.appendChild(divGridInner);

        let divOneTitle = document.createElement('div');
        divOneTitle.classList.add('one-title');
        divOneTitle.innerText = window.res.home.oneTitle[window.langCur];
        divGridInner.appendChild(divOneTitle);

        let divOneGridIcon = document.createElement('div');
        divOneGridIcon.classList.add('one-grid-icon');
        divGridInner.appendChild(divOneGridIcon);
        this.populateDivOneGridIcon(divOneGridIcon);

        let divOneText = document.createElement('div');
        divOneText.classList.add('one-text');
        divOneText.innerText = window.res.home.oneText[window.langCur];
        divGridInner.appendChild(divOneText);

        let divOneButton = document.createElement('div');
        divOneButton.classList.add('general-button');
        divOneButton.classList.add('inverted');
        divOneButton.classList.add('home-one-button');
        divOneButton.innerText = window.res.home.oneButton[window.langCur];
        divGridInner.appendChild(divOneButton);
    };

    populateDivOneGridIcon(divParent) {
        let keyList = Object.keys(window.res.work);
        for (let i = 0; i < keyList.length; i++) {
            let key = keyList[i];
            let data = window.res.work[key];
            let div = document.createElement('div');
            div.classList.add('one-icon');
            div.style.backgroundImage = `url(${data.icon})`;
            divParent.appendChild(div);
        }
    };
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

async function removeColor() {
    let imgPath = 'res/img/50.png';
    let img = document.createElement('img');
    img.src = imgPath;
    await Common.sleep(1000);

    let width = 256;
    let height = 256;
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    let imageData = ctx.getImageData(0, 0, width, height);

    for (let i = 0; i < imageData.data.length;) {
        let indexR = i++;
        let indexG = i++;
        let indexB = i++;
        let indexA = i++;
        let r = imageData.data[indexR];
        let g = imageData.data[indexG];
        let b = imageData.data[indexB];
        if (r > 10 && g > 10 && b > 10) {
            imageData.data[indexA] = 0;
            continue;
        }
        // imageData.data[indexR] = 255;
        // imageData.data[indexG] = 255;
        // imageData.data[indexB] = 255;
        // imageData.data[indexA] = 0;
    }

    ctx.putImageData(imageData, 0, 0);
    // ctx.font = "60px Quicksand";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillStyle = '#121212';
    // ctx.fillText(text, (width / 2), (height / 2));
};

function testMove() {
    let div = document.getElementById('divMove');
    let easeInOutQuad = function(t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t };
    let delta = 1000;
    let initX = -50;
    let totalTime = 400;
    let startTime = (new Date()).getTime();

    let work = function() {
        let currentTime = (new Date()).getTime();
        let timeDiff = currentTime - startTime;
        let time = timeDiff / totalTime;
        console.log(time);
        let variant = easeInOutQuad(time);
        if (time < 1) {
            let x = delta * variant + initX;
            div.style.left = x + 'px';
            window.requestAnimationFrame(work);
        }
    };
    window.requestAnimationFrame(work);
};