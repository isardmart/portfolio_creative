
/* Set the width of the side navigation to 250px */
function openNav() {
    if (screen.width>700){
    document.getElementById("mySidenav").style.width = "250px";
    } else{
        document.getElementById("mySidenav").style.width="45vw";
    }

  }
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function stopanimation(){
    document.getElementById("isard").style.animationPlayState="paused";
}
function retryanimation(){
    document.getElementById('isard').style.animationPlayState="initial";
}

function opencode(){
    location.replace('./pages/code.html')
}
function opengithub(){
    location.replace('https://github.com/isardmart/portfolio')
}
const jsisard =document.getElementsByClassName('isard');


/*
function sendata (name, surname, email, company, proposal) {
    return (name, surname,email, company, proposal);
}
*/