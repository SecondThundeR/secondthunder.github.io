// Favicons path
const faviconsPath = {
    light: {
        appleTouchIcon: 'favicons/main/light/apple-touch-icon.png',
        favicon32x32: 'favicons/main/light/favicon-32x32.png',
        favicon16x16: 'favicons/main/light/favicon-16x16.png',
        siteWebmanifest: 'favicons/main/light/site.webmanifest',
        safariPinnedTab: 'favicons/main/light/safari-pinned-tab.svg',
        websiteColor: '#b91d47',
        shorcutIcon: 'favicons/main/light/favicon.ico',
        browserConfig: 'favicons/main/light/browserconfig.xml',
    },
    dark: {
        appleTouchIcon: 'favicons/main/dark/apple-touch-icon.png',
        favicon32x32: 'favicons/main/dark/favicon-32x32.png',
        favicon16x16: 'favicons/main/dark/favicon-16x16.png',
        siteWebmanifest: 'favicons/main/dark/site.webmanifest',
        safariPinnedTab: 'favicons/main/dark/safari-pinned-tab.svg',
        websiteColor: '#e6739f',
        shorcutIcon: 'favicons/main/dark/favicon.ico',
        browserConfig: 'favicons/main/dark/browserconfig.xml',
    }
}

// Change favicons depending on current theme
function changeFavicons() {
    const currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const favicons = faviconsPath[currentTheme];

    document.querySelector('link[rel="apple-touch-icon"]').setAttribute('href', favicons.appleTouchIcon);
    document.querySelector('link[sizes="32x32"]').setAttribute('href', favicons.favicon32x32);
    document.querySelector('link[sizes="16x16"]').setAttribute('href', favicons.favicon16x16);
    document.querySelector('link[rel="manifest"]').setAttribute('href', favicons.siteWebmanifest);
    document.querySelector('link[rel="mask-icon"]').setAttribute('href', favicons.safariPinnedTab);
    document.querySelector('link[rel="mask-icon"]').setAttribute('color', favicons.websiteColor);
    document.querySelector('link[rel="shortcut icon"]').setAttribute('href', favicons.shorcutIcon);
    document.querySelector('meta[name="msapplication-TileColor"]').setAttribute('content', favicons.websiteColor);
    document.querySelector('meta[name="msapplication-config"]').setAttribute('content', favicons.browserConfig);
}

// Set opacity 1 for mainCont and scrollTip for beautiful transition animation
function changeOpacity() {
    document.getElementById('mainCont-elements').style.opacity = '1';
    document.getElementById('scrollTip').style.opacity = '1';
}

// Event listener for scrolling. Control hiding "Scroll down" container
window.addEventListener('scroll', () => {
    const scrollCheckpoint = 600;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= scrollCheckpoint) opacity = 1 - currentScroll / scrollCheckpoint;
    else opacity = 0;
    document.getElementById('scrollTip').style.opacity = opacity;
})

// Event listener for theme switch. Controls favicons change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    changeFavicons();
    console.log(`Favicons have been successfully replaced with a ${!event.matches ? 'light' : 'dark'} version`);
})

// Onload function.
// Execute reload counter, favicons change, check for dismiss status
// and set opacity of elements of main container to 1
window.onload = () => {
    changeFavicons();
    changeOpacity();
}
