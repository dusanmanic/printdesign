let oNamaDiv = document.querySelector('.divOnamaPage')

function pageScroll() {
    oNamaDiv.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,45);
}
pageScroll()