// Favicons path
const faviconsPath = {
    light: {
        appleTouchIcon: 'favicons/404/light/apple-touch-icon.png',
        favicon32x32: 'favicons/404/light/favicon-32x32.png',
        favicon16x16: 'favicons/404/light/favicon-16x16.png',
        siteWebmanifest: 'favicons/404/light/site.webmanifest',
        safariPinnedTab: 'favicons/404/light/safari-pinned-tab.svg',
        websiteColor: '#b91d47',
        shorcutIcon: 'favicons/404/light/favicon.ico',
        browserConfig: 'favicons/404/light/browserconfig.xml',
    },
    dark: {
        appleTouchIcon: 'favicons/404/dark/apple-touch-icon.png',
        favicon32x32: 'favicons/404/dark/favicon-32x32.png',
        favicon16x16: 'favicons/404/dark/favicon-16x16.png',
        siteWebmanifest: 'favicons/404/dark/site.webmanifest',
        safariPinnedTab: 'favicons/404/dark/safari-pinned-tab.svg',
        websiteColor: '#e6739f',
        shorcutIcon: 'favicons/404/dark/favicon.ico',
        browserConfig: 'favicons/404/dark/browserconfig.xml',
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

// Event listener for theme switch. Controls favicons change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    changeFavicons();
    console.log(`Favicons have been successfully replaced with a ${!event.matches ? 'light' : 'dark'} version`);
})

// Onload function. Execute favicons change, set hostCont styles and set opacity of elements of main container to 1
window.onload = () => {
    changeFavicons();
    document.getElementById('mainCont-elements').style.opacity = '1';
}
