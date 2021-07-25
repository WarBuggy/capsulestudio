window.onload = async function() {
    window.rootStyle = getComputedStyle(document.body);
    // let loadingInitial = new LoadingInitial();
    // document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['home', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, 0, function() {
        //document.body.removeChild(loadingInitial.div);
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
        let div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '2000px';
        div.style.backgroundColor = '#FF0000AB';
        document.body.appendChild(div);
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