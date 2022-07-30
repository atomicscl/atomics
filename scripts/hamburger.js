const navicon = document.querySelector('.navicon');
const navigation = document.querySelector('.navigation');
const navElement = document.querySelectorAll('.hamb_nav');    // selects all the elements with the classname .hambnav


const drawCloseIcon = () =>{
    if(navicon.classList.contains('open')){
        navicon.classList.replace('open','close')
        navigation.classList.replace('open','close')
    }
    else{
        navicon.classList.replace('close','open')
        navigation.classList.replace('close','open')
    
    }
}
const resetClassOpen = () =>{
    navicon.classList.replace('close','open');
    navigation.classList.replace('close','open');
}

window.onresize= resetClassOpen;
navicon.onclick = drawCloseIcon;
navElement.forEach(element => {   // for each element apply the function drawCloseIcon onclick
    element.onclick = drawCloseIcon;
});