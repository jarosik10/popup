const displayPopup = (el) => {
    el.style.display = 'block';
}

const hidePopup = (el) => {
    el.style.display = 'none';
}

const defaultExportFunction = () => {
    const popUp = document.getElementById('js-popup');

    if (!popUp) { return; }

    const popUpCloseButton = document.querySelector('.popup-close');
    popUpCloseButton.addEventListener('click', () => hidePopup(popUp));

    const { cookie, hideOn, showAfter, showMax } = popUp.dataset;

    const alreadyShown = sessionStorage.getItem('popupShown');
    const cookieCounter =  Number(window.localStorage.getItem(cookie));
    const locationPath = window.location.pathname;
    const hideOnArray = hideOn.split(',');

    if (cookieCounter < Number(showMax) && !hideOnArray.includes(locationPath) && !alreadyShown) {
        sessionStorage.setItem('popupShown', true);
        window.localStorage.setItem(cookie, cookieCounter + 1);
        setTimeout(() => displayPopup(popUp), showAfter);
    } else {
        alert(`cookieCounter is ${cookieCounter} >= ${showMax} or ${locationPath} is one of: ${hideOn} or alreadyShown is true`);
    }
}


defaultExportFunction();
