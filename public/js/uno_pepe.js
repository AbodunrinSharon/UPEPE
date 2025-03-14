EQuery(function () {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    const edge = /Edge\/(\d+)/.exec(userAgent);
    const presto = /Opera\//.test(userAgent);

    const ios = !edge && /AppleWebKit/.test(userAgent) && /isMobile\/\w+/.test(userAgent);
    const android = /Android/.test(userAgent);

    const mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
    const mac = ios || /Mac/.test(platform);
    // let windows = /win/i.test(platform);
    if (/Mac/.test(platform)) { alert('macOS version unavailable');return; }

    let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) {
        presto_version = Number(presto_version[1]);
    }
    if (presto_version && presto_version >= 15) {
        presto = false;
        webkit = true;
    }

    const socialLinks = ['https://x.com', 'https://x2.com', 'https://x3.com', 'https://x4.com'];

    function updateDisplay(display) {

    }

    function addEventListeners(display) {
        display.view.on('scroll', function () {console.log(this.scrollTop)
            if (display.view[0].scrollTop > 0) {
              display.topShadow.addClass('has-shadow');
            } else {
              display.topShadow.removeClass('has-shadow');
            }
        });

        display.miniMenuOpen.click(function () {
            display.miniMenu.css('display: flex !important');
            display.miniMenu.addClass('open-anim');
            display.main.css('filter: blur(2px)');
            setTimeout(function () {display.miniMenu.removeClass('open-anim')}, 200);
        });

        display.miniMenuClose.click(function () {
            display.miniMenu.addClass('close-anim');
            display.main.css('filter: blur(0px)');
            setTimeout(function () {display.miniMenu.removeClass('close-anim').css('display: none !important')}, 200);
        });

        display.addrCopyBtn.click(function () {
            let addr = display.addrBox.text();
            navigator.clipboard.writeText(addr)
        });

        display.socialLinks.each(function (i, elt) {
            EQuery(elt).click(function () {
                window.open(socialLinks[i]);
            });
        })
    }

    class Display {
        constructor() {
            this.main = EQuery('main');
            this.miniMenu = EQuery('.app-nav-list');
            this.miniMenuOpen = EQuery('.app-nav-open');
            this.miniMenuClose = EQuery('.app-list-close');
            this.view = EQuery('.app-container')
            this.topShadow = EQuery('.app-nav-shadow');
            this.addrBox = EQuery('.app-addr-container span');
            this.addrCopyBtn = EQuery('.app-addr-container a');
            this.socialLinks = EQuery('.app-socials div');
        }
    }

    EQuery(document).ready(function () {
        let display = window.display = new Display();
        display.addrBox.text('0x64c5cbA9A1BfBD2A5faf601D91Beff2dCac2c974');
        updateDisplay(display);
        addEventListeners(display);alert('f')
    });
});