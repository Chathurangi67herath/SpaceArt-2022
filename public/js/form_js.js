function myFunctionOne() {
  var x = document.getElementById("art-work-2");
  if (x.style.display === "none"|| x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunctionTwo() {
  var x = document.getElementById("art-work-3");
  if (x.style.display === "none"|| x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//getting time
let time = document.getElementById("time");
const date = new Date();
time.innerHTML = date;