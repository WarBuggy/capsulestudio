window.onload = async function() {
    window.rootStyle = getComputedStyle(document.body);
    // let loadingInitial = new LoadingInitial();
    // document.body.appendChild(loadingInitial.div);
    let imagePreloadCategoryList = ['home', ];
    Common.preloadImageFromVersion(imagePreloadCategoryList, 0, function() {
        //document.body.removeChild(loadingInitial.div);
        createDivHomeBanner();
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