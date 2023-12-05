'use strict'

function openExternalLink(web) {
    console.log('here');
    var website = 'https://' + web
    window.open(website, '_blank');
}
document.querySelector('.header-presentation-button').addEventListener('click', function(){
    console.log('here');
    openExternalLink('github.com/InesLozanoLopez')
});