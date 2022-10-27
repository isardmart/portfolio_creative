
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
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

const jsisard =document.getElementsByClassName('isard');


/*
function sendata (name, surname, email, company, proposal) {
    return (name, surname,email, company, proposal);
}
*/