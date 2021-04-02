const headerElement = document.querySelector('.header-element');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > headerElement.offsetHeight +100) {
        headerElement.classList.add('active');
    } else {
        headerElement.classList.remove('active');
    }
}


const isMobile = {
    Android:function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS:function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let navArrows = document.querySelectorAll('.nav-arrow');
    
    if (navArrows.length > 0) {
        for (let index = 0; index < navArrows.length; index++) {
            const navArrow = navArrows[index];
            navArrow.addEventListener("click", function(e) {
                navArrow.parentElement.classList.toggle('active-arrow');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const menuIcon = document.querySelector('.menu-icon');
const navNavlist = document.querySelector('.nav-nav-list');
if(menuIcon) {
    const navNavlist = document.querySelector('.nav-nav-list');
    menuIcon.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('active-arrow');
        navNavlist.classList.toggle('active-arrow');
    })
}
if (menuIcon.classList.contains('active-arrow')) {
    document.body.classList.remove('_lock');
    menuIcon.classList.remove('active-arrow');
    navNavlist.classList.remove('active-arrow');
}




