// the div containing the p and image
const selectFeature = document.getElementById('feature');
// the p class
const selectText = document.getElementById('selectText');
// the list classes
const options = document.getElementsByClassName('firstFeat');
// the ul ID
const list = document.getElementById('firstList');
// the images ID
const arrow = document.getElementById('downArrow');

// THE SECOND PART
// the div containing the p and image
const theCompany = document.getElementById('company');
// the p class
const pText = document.getElementsByClassName('textCompany');
// the list class
const thelist = document.getElementsByClassName('slist');
// the ul's ID 
const ulList = document.getElementById('secondList');
// the images ID name
const upArrow = document.getElementById('upArrow');


for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        // note that the rotate class was defined in css
        arrow.classList.toggle("rotate");
    }
}
// to show the first option -- selectfeature is the div 
// containing the p and image
selectFeature.onclick = function(){
    // to show the ul and rotate the arrow hide is the ul's class
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}
for(thelis of thelist){
    thelis.onclick = function(){
        pText.innerHTML = this.textContent;
        // upArrow.classList.toggle("rotate");
    }
}
// to show the second option
theCompany.onclick = function(){
    ulList.classList.toggle("show");
    upArrow.classList.toggle("rotate");
}

// for the menu bar now
// div containing the hamburger
var botn = document.getElementsByClassName('toggle');
console.log(botn); 

// botn.addEventListener('click', majorList){

// }

const  theNavbar = document.querySelector('.theNavbar');
const navToggle = document.querySelector('.navToggle');
navToggle.addEventListener('click', () => {
    const visibility = theNavbar.getAttribute('data-visible')
    if (visibility === "false"){
        theNavbar.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true"){
        theNavbar.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})








