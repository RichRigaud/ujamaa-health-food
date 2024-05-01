console.log('Ras Tayo test');

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += "responsive";
    } else {
      x.className = "nav";
    }
  } 