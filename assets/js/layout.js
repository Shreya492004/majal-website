const HEADER_HTML = `
    <header>
        <div class="tg-header__top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="tg-header__top-info">
                            <ul class="list-wrap">
                                <li><i class="flaticon-placeholder"></i>ص.ب: 246990، الرياض: 11312</li>
                                <li><i class="flaticon-envelope"></i><a
                                        href="mailto:info@majalnet.com">info@majalnet.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="tg-header__top-right">
                            <ul class="list-wrap">
                                <li><i class="flaticon-telephone"></i><a href="tel:+966540025337">+966 540 025 337</a>
                                </li>
                                <li>
                                    <div class="tg-header__top-social">
                                        <ul class="list-wrap">
                                            <li><a href="https://www.facebook.com/profile.php?id=61591435534541" target="_blank"><img
                                                        src="assets/img/icons/facebook.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://www.linkedin.com/in/mohamed-ibrahim-56bab598/?skipRedirect=true" target="_blank"><img
                                                        src="assets/img/icons/linkedin.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://www.instagram.com/majalitnetworks/" target="_blank"><img
                                                        src="assets/img/icons/instagram.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://www.tiktok.com/@majalitnetwork" target="_blank"><img
                                                        src="assets/img/icons/tiktok.svg" alt="" class="injectable"></a>
                                            </li>
                                            <li><a href="https://www.youtube.com/@majalweb" target="_blank"><img
                                                        src="assets/img/icons/youtube.svg" alt="" class="injectable"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-fixed-height"></div>
        <div id="sticky-header" class="tg-header__area tg-header__area-six">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/majal/logo.png" alt="Logo"></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul class="navigation p-relative">
                                        <li class="tg-mega-menu-has-children"><a href="index.html"
                                                data-tr="nav.home">بيت</a></li>
                                        <li><a href="majal-company.html" data-tr="nav.about">من نحن.</a></li>
                                        <li class="menu-item-has-children"><a href="#"
                                                data-tr="nav.solutions">حلول</a>
                                            <ul class="sub-menu solutions-sub-menu">
                                                <li><a href="cctv-companies-near-me.html" data-tr="sol.cctv"><i
                                                            class="fas fa-video"></i> حلول المراقبة التلفزيونية المغلقة</a></li>
                                                <li><a href="anpr-solutions-in-saudi-arabia.html" data-tr="sol.anpr"><i
                                                            class="fas fa-camera"></i> حلول التعرف التلقائي على لوحات المركبات</a></li>
                                                <li><a href="data-center-and-data-networks.html" data-tr="sol.data"><i
                                                            class="fas fa-server"></i> شبكات البيانات ومراكز البيانات</a></li>
                                                <li><a href="central-telephone-system.html" data-tr="sol.tel"><i
                                                            class="fas fa-phone-alt"></i>
                                                         أنظمة الاتصالات الهاتفية</a></li>
                                                <li><a href="voice-evacuation-system.html" data-tr="sol.pa"><i
                                                            class="fas fa-volume-up"></i>
                                                         أنظمة مخاطبة الجمهور والإخلاء الصوتي</a></li>
                                                <li><a href="sound-system.html" data-tr="sol.av"><i
                                                            class="fas fa-tv"></i>التحكم في الأنظمة السمعية والبصرية والوسائط المتعددة</a></li>
                                                <li><a href="access-control-system.html" data-tr="sol.access"><i
                                                            class="fas fa-fingerprint"></i>
                                                        التحكم في الدخول وتسجيل الحضور والانصراف</a></li>
                                                <li><a href="parking-barrier.html" data-tr="sol.gate"><i
                                                            class="fas fa-door-closed"></i>
                                                       حواجز البوابات، وبوابات الدوران، وحواجز الطرق</a></li>
                                                <li><a href="intruder-alarm-system.html" data-tr="sol.intruder"><i
                                                            class="fas fa-bell"></i> أنظمة إنذار ضد الاقتحام</a></li>
                                                <li><a href="fire-alarm-home-automation-system.html" data-tr="sol.fire"><i
                                                            class="fas fa-fire-extinguisher"></i> أنظمة إنذار الحريق</a>
                                                </li>
                                                <li><a href="structure-cabling.html" data-tr="sol.cabling"><i
                                                            class="fas fa-network-wired"></i>
                                                       أنظمة الكابلات المهيكلة وشبكات الألياف الضوئية</a></li>
                                                <li><a href="network-switches.html" data-tr="sol.xray"><i
                                                            class="fas fa-shield-alt"></i>
                                                       أنظمة الأشعة السينية والكشف عن المعادن</a></li>
                                                <li><a href="biometric-attendance-system.html" data-tr="sol.wifi"><i
                                                            class="fas fa-wifi"></i>حلول شبكات الواي فاي للفنادق</a></li>
                                                <li><a href="best-cctv-camera-installation-near-me.html" data-tr="sol.matv"><i
                                                            class="fas fa-broadcast-tower"></i> أنظمة MATV</a></li>
                                                <li><a href="cctv-camera-price-in-riyadh.html" data-tr="sol.trans"><i
                                                            class="fas fa-satellite-dish"></i>
                                                        أنظمة النقل</a></li>
                                                <li><a href="security-camera-installation-contractors.html" data-tr="sol.ups"><i
                                                            class="fas fa-battery-full"></i>
                                                       حلول الطاقة الاحتياطية (UPS)</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#"
                                                data-tr="nav.services">الخدمات</a>
                                            <ul class="sub-menu">
                                                <li><a href="electrical-installation-maintanance-services.html" data-tr="ser.elec">تركيب وصيانة الأنظمة الكهربائية</a></li>
                                                <li><a href="annual-maintenance-services.html" data-tr="ser.fire">عقود الصيانة السنوية</a></li>
                                            </ul>
                                        </li>
                                        <li class=""><a href="majal-it-network-awards.html" data-tr="nav.awards">الجوائز</a></li>
                                        <li class=""><a href="majal-clients.html" data-tr="nav.blogs">قاعدة العملاء</a></li>
                                       
                                        <li><a href="contact-details.html" data-tr="nav.contact"> اتصل بنا</a></li>
                                        <li class="d-block d-lg-none"><a href="https://majalnet.freshdesk.com/support/login" target="_blank" rel="noopener noreferrer" data-tr="nav.ticket">Submit Ticket</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action tgmenu__action-six">
                                    <ul class="list-wrap">
                                        <li class="header-btn lang-btn-item">
                                            <a href="#" class="tg-btn tg-btn-four tg-btn-five lang-btn">English</a>
                                        </li>
                                        <li class="header-btn ticket-btn-item">
                                            <a href="https://majalnet.freshdesk.com/support/login" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-four tg-btn-five"
                                                data-tr="nav.ticket">إرسال تذكرة.<img src="assets/img/icons/right_arrow02.svg" alt=""
                                                     class="injectable"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-nav-toggler"><i class="tg-flaticon-menu"></i></div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Menu  -->
        <div class="tgmobile__menu">
            <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="tg-flaticon-close-1"></i></div>
                <div class="nav-logo">
                    <a href="index.html"><img src="assets/majal/logo.png" alt="Logo"></a>
                </div>
                
                <div class="tgmobile__menu-outer">
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <div class="social-links">
                    <ul class="list-wrap">
                        <li><a href="https://www.facebook.com/profile.php?id=61591435534541" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.tiktok.com/@majalitnetwork" target="_blank"><i class="fab fa-tiktok"></i></a></li>
                        <li><a href="https://www.instagram.com/majalitnetworks/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/mohamed-ibrahim-56bab598/?skipRedirect=true" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://www.youtube.com/@majalweb" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="tgmobile__menu-backdrop"></div>
        <!-- End Mobile Menu -->

        <!-- header-search -->
        <div class="search__popup">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="search__wrapper">
                            <div class="search__close">
                                <button type="button" class="search-close-btn">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="search__form">
                                <form action="#">
                                    <div class="search__input">
                                        <input class="search-input-field" type="text" placeholder="Type keywords here">
                                        <span class="search-focus-border"></span>
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-popup-overlay"></div>
        <!-- header-search-end -->

        <!-- offCanvas-menu -->
        <div class="offCanvas__info">
            <div class="offCanvas__close-icon menu-close">
                <button><img src="assets/img/icons/times.svg" alt="" class="injectable"></button>
            </div>
            <div class="offCanvas__logo mb-30">
                <a href="index.html"><img src="assets/img/logo/logo.svg" alt="Logo"></a>
            </div>
            <div class="offCanvas__content">
                <p>Businorem ipsum dolor sit amet cons interdum quam duis variuy time honored tradition etting .</p>
            </div>
            <div class="offCanvas__img">
                <ul class="list-wrap">
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta01.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta02.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta03.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta04.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta05.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta06.jpg" alt="img"></a></li>
                </ul>
            </div>
            <div class="offCanvas__side-info">
                <div class="contact-list">
                    <i class="flaticon-telephone"></i>
                    <a href="tel:+966540025337">+966 540 025 337</a>
                </div>
                <div class="contact-list">
                    <i class="flaticon-telephone"></i>
                    <a href="tel:+966114733002">+(966) 114733002</a>
                </div>
                <div class="contact-list">
                    <i class="fas fa-globe"></i>
                    <a href="https://www.majalnet.com" target="_blank">www.majalnet.com</a>
                </div>
                <div class="contact-list">
                    <i class="flaticon-placeholder"></i>
                    <p>P.O.Box, 246990 Riyadh, 11312</p>
                </div>
                <div class="contact-list">
                    <i class="flaticon-envelope"></i>
                    <a href="mailto:info@majalnet.com">info@majalnet.com</a>
                </div>
                <div class="contact-list">
                    <i class="fas fa-fax"></i>
                    <p>+966 11474 4736</p>
                </div>
            </div>
            <div class="offCanvas__social">
                <h6 class="title">Follow us</h6>
                <ul class="list-wrap">
                    <li><a href="https://www.facebook.com/profile.php?id=61591435534541" target="_blank"><img src="assets/img/icons/facebook.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://www.instagram.com/majalitnetworks/" target="_blank"><img src="assets/img/icons/instagram.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://www.linkedin.com/in/mohamed-ibrahim-56bab598/?skipRedirect=true" target="_blank"><img src="assets/img/icons/linkedin.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://www.tiktok.com/@majalitnetwork" target="_blank"><img src="assets/img/icons/tiktok.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://www.youtube.com/@majalweb" target="_blank"><img src="assets/img/icons/youtube.svg"
                                alt="" class="injectable"></a></li>
                </ul>
            </div>
        </div>
        <div class="offCanvas__overly"></div>
        <!-- offCanvas-menu-end -->
    </header>
`;

const FOOTER_HTML = `
    <footer class="footer__area-four fix footer-backgroundd" style="">
        <div class="footer__top-three footer-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer__widget">
                            <div class="footer__logo">
                                <a href="index.html"><img src="assets/majal/footer-logo.png" alt="logo"></a>
                            </div>
                            <div class="footer__content footer__content-three">
                                <p>تقدم شركة مجال الشبكات الأمنية و تقنية المعلومات حلولاً مبتكرة في مجالي تكنولوجيا المعلومات والأمن منذ عام 2007، مما يعزز الكفاءة التشغيلية ويدفع عجلة النمو للعملاء في مختلف القطاعات بالمملكة العربية السعودية.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">روابط مفيدة</h4>
                            <ul class="footer__widget-link footer__widget-link-two list-wrap">
                                <li><a href="majal-it-network-awards.html">الجوائز</a></li>
                                <li><a href="majal-work-videos.html">مقاطع فيديو</a></li>
                                <li><a href="cctv-blogs.html">المدونات</a></li>
                                <li><a href="#0">محل</a></li>
                                <li><a href="job-openings-in-riyadh.html">وظائف</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">حلول</h4>
                            <ul class="footer__widget-link footer__widget-link-two list-wrap">
                                <li><a href="cctv-companies-near-me.html">حلول المراقبة التلفزيونية المغلقة</a></li>
                                <li><a href="data-center-and-data-networks.html">شبكات البيانات ومراكز البيانات</a></li>
                                <li><a href="access-control-system.html">شبكات البيانات ومراكز البيانات</a></li>
                                <li><a href="voice-evacuation-system.html">شبكات البيانات ومراكز البيانات</a></li>
                                <li><a href="biometric-attendance-system.html">حلول شبكات الواي فاي للفنادق</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">اتصال</h4>
                            <div class="footer__contact">
                                <ul class="list-wrap">
                                    <li><i class="flaticon-placeholder"></i><span>صندوق بريد 246990، الرياض 11312</span></li>
                                    <li><i class="flaticon-telephone"></i><a href="tel:+966540025337" class="phone-number">+966 540 025 337</a></li>
                                    <li><i class="flaticon-envelope"></i><a href="mailto:info@majalnet.com">info@majalnet.com</a></li>
                                </ul>
                            </div>
                            <div class="footer__social footer__social-four">
                                <ul class="list-wrap">
                                    <li><a href="https://www.facebook.com/profile.php?id=61591435534541" target="_blank"><img
                                                src="assets/img/icons/facebook.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.instagram.com/majalitnetworks/" target="_blank"><img
                                                src="assets/img/icons/instagram.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.linkedin.com/in/mohamed-ibrahim-56bab598/?skipRedirect=true" target="_blank"><img
                                                src="assets/img/icons/linkedin.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.tiktok.com/@majalitnetwork" target="_blank"><img
                                                src="assets/img/icons/tiktok.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.youtube.com/@majalweb" target="_blank"><img
                                                src="assets/img/icons/youtube.svg" alt="" class="injectable"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom-five">
            <div class="container">
                <div class="copyright__content-four footerr-menuu">
                   <p><a href="terms-conditions.html">الشروط والأحكام</a></p>
                   <p><a href="privacy-policy.html">سياسة الخصوصية</a></p>
                </div>
                <div class="copyright__content-four">
                   <p>
  <span dir="ltr">© 2008 - 2026</span>
  شركة مجال الشبكات الأمنية وتقنية المعلومات. جميع الحقوق محفوظة |
  تصميم <a href="https://impinfo.in" target="_blank" style="color: #fff;">Imperial Info Systems</a>
</p>
                </div>
            </div>
        </div>
        <div class="footer__shape-wrap-four">
            <img src="assets/img/images/h5_footer_shape01.svg" alt="shape" data-aos="fade-right" data-aos-delay="300">
            <img src="assets/img/images/h5_footer_shape02.svg" alt="shape">
            <img src="assets/img/images/h5_footer_shape03.svg" alt="shape" class="rotateme">
        </div>
    </footer>
    <!-- Floating Call Button -->
    <a href="tel:+966502997129" class="floating-call-btn" title="Call Us Now">
        <i class="fas fa-phone"></i>
    </a>
`;

function injectHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.outerHTML = HEADER_HTML;
        initHeaderActiveLink();
    }
}

function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = FOOTER_HTML;
    }

    // Inject the Gallabox WhatsApp widget script dynamically
    if (!window.gbwawc) {
        (function (w, d, s, u) {
            w.gbwawc = {
                url: u,
                options: {
                    waId: "+966 502997129",
                    siteName: "Majal IT Network",
                    siteTag: "Online",
                    siteLogo: "https://majalnet.com/assets/img/favicon.png",
                    widgetPosition: "RIGHT",
                    welcomeMessage: "Welcome to Majal IT Network",
                    triggerMessage: "",
                    brandColor: "#25D366",
                    messageText: "Which Service you are looking for ",
                    replyOptions: ["CCTV Survillence Solutions", "Data Network & Data Center", "APNR solurtions", "Intruder Alarm Systems", "Time & Attendance Management System", "Visitor Management Systems", "Public Address & Voice Evacuation", "Fire Alarm Systems", "MATV (Master Antenna Television) Systems", "Professional Audio Visual Solutions", "Access Control Systems", "Gate Barriers & Turnstiles", "Biometric Attendance Solutions", "Intercom Solutions"],
                    version: "v1",
                    widgetPositionMarginX: "12",
                    widgetPositionMarginY: "12",
                },
            };
            var h = d.getElementsByTagName(s)[0],
                j = d.createElement(s);
            j.async = true;
            j.src = u + "/whatsapp-widget.min.js?_=" + "2026-07-01 17";
            h.parentNode.insertBefore(j, h);
        })(window, document, "script", "https://waw.gallabox.com");
    }
}

function initHeaderActiveLink() {
    let page = window.location.pathname.split("/").pop();
    if (!page || page === "") {
        page = "index.html";
    }

    const nav = document.querySelector('.navigation');
    if (!nav) return;

    // Remove active class from all li in navigation
    nav.querySelectorAll('li').forEach(li => {
        li.classList.remove('active');
    });

    // Find the link that matches the current page
    let matchedLink = null;
    nav.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === page) {
            matchedLink = a;
        }
    });

    if (matchedLink) {
        let parentLi = matchedLink.closest('li');
        if (parentLi) {
            parentLi.classList.add('active');

            // If it's inside a submenu, also add active to the parent menu-item-has-children li
            let grandParentLi = parentLi.parentElement.closest('.menu-item-has-children');
            if (grandParentLi) {
                grandParentLi.classList.add('active');
            }
        }
    } else if (page === "index.html") {
        const homeLi = nav.querySelector('li.tg-mega-menu-has-children');
        if (homeLi) homeLi.classList.add('active');
    }
}
