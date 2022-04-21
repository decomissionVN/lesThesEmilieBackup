function display_footer(translation) {
    document.getElementById('footer').innerHTML = `
    <img src="https://lesthesdemilie.net/assets/IMAGES/HOME/Footer_top.png" id="Footer_bottom" class="w-100">
    <div class="row footer_color pt-5 Parisienne">
            <div class="col-10 offset-1 text-center">
                <div class="row text-center">
                    <div class="col-md-5 mb-5">
                        <h2>Les Thés d'Emilie</h2>
                        <p class="text-justify pt-4">${translation.About_footer}</p>
                        <a class="link__grey" href="About.html" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1500">${translation.More}</a>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <div class="row pt-3 justify-content-around">
                            <h2 class="pt-5 w-100">${translation.Social_media}</h2>
                            
                                <div class="col-3 col-lg-3 Icons__social-media" aria-label="Facebook">
                                    <a href="" alt="Facebook"><img src="https://lesthesdemilie.net/assets/IMAGES/HOME/Facebook.png" alt="Facebook"></a>
                                </div>
                                <div class="col-3 col-lg-3 Icons__social-media"  aria-label="Instagram">
                                    <a href="" alt="Instagram"><img src="https://lesthesdemilie.net/assets/IMAGES/HOME/Instagram.png" alt="Instagram"></a>
                                </div>

                            <a href="../dashboard/Contact_us.html" class="button_reverse mt-5 mb-5">${translation.Contact}</a>
                            <p class="mt-5 w-100 text-center">76 Boulevard Haussmann, 75008 Paris</p>
                            <p class="w-100 text-center">01 43 87 39 84</p>
                            </div>
                        </div>
                    </div>
                </div>

                    
                <div class="w-100 pb-5 text-center white">Copyright 2020 - VN  /  <a href="../CGU/CGU.html">CGU</a></div>
            </div>
        </div>
    `
    ;
}