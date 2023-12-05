'use strict'

$(document).ready(function() {
    function openExternalLink(web) {
    var website = 'https://' + web;
    window.open(website, '_blank');
}
$('.header-presentation-button').on('click', function () {
    openExternalLink('github.com/InesLozanoLopez')
});

})