const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    /**
     * @return {boolean}
     */
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

mobileDetect();

function mobileDetect() {
    // if (window.sessionStorage.getItem('has_mobile_detected')) {
    //     return;
    // }
    // window.sessionStorage.setItem('has_mobile_detected', 'done');

    if(isMobile.Android()) {
        isIos = false;
        console.log('is Android');
    }
    else if(isMobile.iOS()) {
        isIos = true;
        console.log('is iOS');
    }
    else
    {
        window.location.href='desktop.html';
    }
}
