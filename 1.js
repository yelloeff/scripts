
// +1 Text block & add class "cta-contact-phone" or "cta-contact-mail"
// + html content : <a id="phone-01" href="tel:">Telephone</a>
// + html content : <a id="email-01" href="mailto:">Email</a>




/*----- #CUSTOM #JS -----*/

//(function ($) {
//$(window).on('load', function () {

// SHOW & HIDE PHONE NUMBER
const phoneText = "Phone";
$('.cta-contact-phone a').on('click', function (me) {
    var theContact = $(this).attr('id');
    //console.log({ theContact });
    $(this).animate({ opacity: '0.45', }).animate({ opacity: '1', });
    switch (theContact) {
        case 'phone-01':
            var phoneNumber = "01 01 01 01 01";
            var phoneHref = "+33101010101";
            break;
        case 'phone-02':
            var phoneNumber = "02 02 02 02 02";
            var phoneHref = "+33202020202";
            break;
        case 'phone-03':
            var phoneNumber = "03 03 03 03 03";
            var phoneHref = "+33303030303";
    }
    const show = ($(this).hasClass('showed'));
    if (window.matchMedia("(min-width: 768px)").matches) {
        me.preventDefault();
    }
    show ? $(this).html(phoneText).toggleClass('showed') : $(this).html(phoneNumber).toggleClass('showed').attr('href', `tel:${phoneHref}`);
    //console.log({ show }, $(this).attr('class'));
});
//

// SHOW & HIDE EMAIL
// const emailUser = "username";
const emailDomain = "mydomain.com";
const emailText = "Email";
$('.cta-contact-email a').on('click', function (me) {
    var theMail = $(this).attr('id');
    //console.log({ theMail });
    $(this).animate({ opacity: '0.45', }).animate({ opacity: '1', });
    switch (theMail) {
        case 'email-01':
            var emailUser = "user.01";
            break;
        case 'email-02':
            var emailUser = "user.02";
            break;
        case 'email-03':
            var emailUser = "user.03";
    }
    const show = ($(this).hasClass('showed'));
    if (window.matchMedia("(min-width: 768px)").matches) {
        me.preventDefault();
    }
    //console.log({show});
    show ? $(this).html(emailText).toggleClass('showed') : $(this).html(`${emailUser}@${emailDomain}`).toggleClass('showed').attr('href', `mailto:${emailUser}@${emailDomain}`);
});
//

//});
//})(jQuery);


