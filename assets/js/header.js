header ='<style>\
.navbar {\
    padding-bottom: 0;\
}\
\
.navbar-brand {\
    padding-bottom: 0;\
    width: 15rem;\
}\
\
/* nav */\
.navbar-collapse {\
    display: flex;\
    justify-content: flex-end;\
    font-size: 1rem;\
}\
\
.navbar-toggler {\
    border: none;\
}\
\
.dropdown-menu {\
    border: 1px solid lightgray;\
    padding: 0;\
    line-height: 2.5rem;\
}\
\
.dropdown-item:hover {\
    background-color: #ECF5FF;\
}\
\
.dropdown-item:active {\
    color: #004385;\
}\
\
.nav-right-top a {\
    color: #004385;\
    font-size: 1.25rem;\
    margin: 0 .5rem;\
}\
\
.nav-right-top a:hover {\
    color: #0059b3;\
}\
/* multi-setting start */\
.dropdown-submenu {\
    position: relative;\
}\
\
.dropdown-submenu .dropdown-menu {\
    top: 0;\
    left: 100%;\
    margin-top: -1px;\
    background-color: #fff;\
}\
\
.navbar-nav-multi li:hover>ul.dropdown-menu {\
    display: block;\
}\
\
.dropdown-submenu li {\
    padding-left: 0rem;\
}\
\
#navbarNavDropdown {\
    transition: none;\
\
}\
\
@media (min-width: 992px) {\
    .nav-right-top {\
        display: flex;\
        justify-content: flex-end;\
        align-items: center;\
    }\
\
    .nav-right-bottom {\
        display: flex;\
        justify-content: flex-end;\
        align-items: center;\
    }\
\
}\
\
@media (max-width: 992px) {\
    .navbar-collapse {\
        display: flex;\
        justify-content: flex-start;\
    }\
\
    .nav-link {\
        margin: .75rem .75rem;\
    }\
\
    .container-fluid {\
        width: 95%;\
    }\
\
    .navbar-toggler {\
        padding: 0;\
    }\
\
    .dropdown-item {\
        background-color: #f8f9fa;\
        padding-left: 3rem;\
    }\
\
    .dropdown-menu {\
        border: 0;\
    }\
\
    .nav-right-top a {\
        margin: 0 1rem;\
    }\
\
    .nav-item {\
        border-top: 1px dashed lightgray;\
    }\
\
    .nav-item:first-child {\
        border-top: 0;\
    }\
\
}\
\
@media (max-width: 576px) {\
    .navbar-brand {\
        width: 12rem;\
    }\
\
    .dropdown-submenu .dropdown-menu {\
        top: 0;\
        left: 100%;\
        margin-top: -1px;\
        background-color: #f8f9fa;\
    }\
\
    .dropdown-submenu li {\
        padding-left: 2rem;\
    }\
}\
\
\
\
\
/* multi-setting end */\
</style>\
\
<nav class="navbar navbar-expand-lg navbar-light bg-light ">\
<div class="container-fluid" style="width:90%;">\
    <a class="navbar-brand" href="index.html">\
        <img src="assets/img/logo.svg" alt="">\
    </a>\
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
\
\
    <div class="collapse navbar-collapse row" id="navbarNavDropdown">\
        <div class="d-flex justify-content-end align-items-center nav-right-top">\
            <a href="https://www.youtube.com/c/???????????????cpa"><i class="fa-brands fa-youtube"></i></a>\
            <a href="https://www.facebook.com/meanscpa/"><i class="fa-brands fa-facebook-square"></i></a>\
            <a href="#"><i class="fa-brands fa-line"></i></a>\
        </div>\
\
        <div class="nav-right-bottom">\
            <ul class="navbar-nav">\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="announce" role="button" data-bs-toggle="dropdown" aria-expanded="false">????????????</a>\
                    <ul class="dropdown-menu navbar-nav-multi" aria-labelledby="announce">\
                        <li><a class="dropdown-item" href="announcement_list.html">????????????</a></li>\
                        <li><a class="dropdown-item" href="announcement_list.html">????????????</a></li>\
                        <li><a class="dropdown-item" href="announcement_list.html">????????????</a></li>\
                        <li><a class="dropdown-item" href="announcement_list.html">????????????</a></li>\
                    </ul>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="course" role="button" data-bs-toggle="dropdown" aria-expanded="false">????????????</a>\
                    <ul class="dropdown-menu navbar-nav-multi" aria-labelledby="course">\
                        <li><a class="dropdown-item" href="course_career_list.html">????????????</a></li>\
                        <li class="dropdown-submenu"><a href="#" data-bs-toggle="dropdown" class="dropdown-item dropdown-toggle">?????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="course_test.html" class="dropdown-item">????????????</a>\
                                </li>\
                                <li>\
                                    <a href="course_intro.html" class="dropdown-item">????????????</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li class="dropdown-submenu"><a href="#" data-bs-toggle="dropdown" class="dropdown-item dropdown-toggle">?????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="course_test.html" class="dropdown-item">????????????</a>\
                                </li>\
                                <li>\
                                    <a href="course_intro.html" class="dropdown-item">????????????</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li class="dropdown-submenu"><a href="#" data-bs-toggle="dropdown" class="dropdown-item dropdown-toggle">?????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="course_test.html" class="dropdown-item">????????????</a>\
                                </li>\
                                <li>\
                                    <a href="course_intro.html" class="dropdown-item">????????????</a>\
                                </li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="teacher.html">????????????</a>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle " href="#" id="honor" role="button" data-bs-toggle="dropdown" aria-expanded="false">????????????</a>\
                    <ul class="dropdown-menu navbar-nav-multi" aria-labelledby="honor">\
                        <li class="dropdown-submenu"><a href="#" data-bs-toggle="dropdown" class="dropdown-item dropdown-toggle">????????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">110??????</a>\
                                </li>\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">109??????</a>\
                                </li>\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">108??????</a>\
                                </li>\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">107??????</a>\
                                </li>\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">106??????</a>\
                                </li>\
                                <li>\
                                    <a href="honorroll_yyy.html" class="dropdown-item">105??????</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">????????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="testimonials_list.html" class="dropdown-item">?????????????????????</a>\
                                </li>\
                                <li>\
                                    <a href="testimonials_list.html" class="dropdown-item">?????????????????????</a>\
                                </li>\
                                <li>\
                                    <a href="testimonials_list.html" class="dropdown-item">?????????????????????</a>\
                                </li>\
                            </ul>\
                        </li>\
\
                    </ul>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="onlinecourse.html">????????????</a>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="correspondence.html">????????????</a>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="download" role="button" data-bs-toggle="dropdown" aria-expanded="false">????????????</a>\
                    <ul class="dropdown-menu navbar-nav-multi dropdown-menu-end" aria-labelledby="download">\
                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">??????????????????</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="download.html" class="dropdown-item">?????????</a>\
                                </li>\
                                <li>\
                                    <a href="download.html" class="dropdown-item">?????????</a>\
                                </li>\
                                <li>\
                                    <a href="download.html" class="dropdown-item">?????????</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li><a class="dropdown-item" href="download.html">????????????</a></li>\
                        <li><a class="dropdown-item" href="download.html">??????</a></li>\
                    </ul>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">????????????</a>\
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="about">\
                        <li><a class="dropdown-item" href="about_intro.html">????????????</a></li>\
                        <li><a class="dropdown-item" href="about_contact.html">????????????</a></li>\
                    </ul>\
                </li>\
\
            </ul>\
        </div>\
    </div>\
</div>\
</nav>';
document.write(header);