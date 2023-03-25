// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiPTiZ1yvthduMhOivimvx2r85t4XJMHU",
  authDomain: "learnfb-a4e2f.firebaseapp.com",
  projectId: "learnfb-a4e2f",
  storageBucket: "learnfb-a4e2f.appspot.com",
  messagingSenderId: "350012343679",
  appId: "1:350012343679:web:59fbadf02f4885d31f464a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*======== Realtime DB References ========== */
import{getDatabase, ref, set, push} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const db = getDatabase();


/*======== firebase Storage References ========== */
import{getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";





/*======== Data field References ========== */
let email = document.getElementById("email");
let fname = document.getElementById("fname");
let cname = document.getElementById("cname");
let country = document.getElementById("country");
let division = document.getElementById("division");
let school = document.getElementById("school");
let agreement = document.getElementById("agreement");

let time = document.getElementById("time");



// ===== common to all file inputs ========//
function GetFileExt(file){
  let temp = file.name.split('.');
  let ext = temp.slice((temp.length-1), (temp.length));
  return '.'+ ext[0];
  ;
}

function GetFileName(file){
let temp = file.name.split('.');
let fname = temp.slice(0,-1).join('.');
return fname;
}

/* =========================================================================== */
/*======== art work 1 - file References ========== */

 /*======== art work 1  ========== */
 let theme1 = document.getElementById("theme1");
 let topic1 = document.getElementById("topic1");
 let desc1 = document.getElementById("desc1");


 let imgName = document.getElementById("img-name");
 let extlab = document.getElementById("ext");
 let myimg = document.getElementById("myimg");
 let proglab = document.getElementById("progress");
 let selBtn = document.getElementById("choose");

var files1 = [];
var reader1 = new FileReader();
var input1 = document.createElement('input');
input1.type = "file";
input1.accept = "image/*";

input1.onchange = (e) => {
  files1 = e.target.files;

  // file size check
  if(files1.length>0){
    if(files1[0].size > 10 * 1024 *1024){
      file1Error.style.visibility = "visible";
      file1Error.innerHTML = "File size should be less than 10MB";
      return false;
    }else{
      file1Error.style.visibility = "hidden";
    }
  }

  var extention = GetFileExt(files1[0]);
  var name = GetFileName(files1[0]);
  imgName.value = name;
  extlab.innerHTML = extention;

  reader1.readAsDataURL(files1[0]);
}

//loading image to preview  
reader1.onload = function(){
  myimg.src = reader1.result;
}

/*-------Selecting Image-1----------*/ 
selBtn.onclick = function(){
  input1.click();
}

/*======== upload art work1 ========== */
async function UploadProcess1(){
return new Promise((resolve, reject) => {
  modal.style.display = "block";
  //elem1.style.display = "block";
  var process = false; 

  var ImgToUpload1 = files1[0];
  let ImgName1 = imgName.value + extlab.innerHTML;

  const storage1 = getStorage();
  const storageRef1 = sRef(storage1, "Images/"+ ImgName1);

  const uploadTask1 = uploadBytesResumable(storageRef1, ImgToUpload1);
  // progress
  uploadTask1.on('state-changed',(snapshot)=>{
    let progress1 = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
    proglab.innerHTML = "Upload " + progress1 + "%";
  },(error) => {
    alert("error")
  },async ()=>{
    await getDownloadURL(uploadTask1.snapshot.ref)
    .then((downloadURL)=>{
        InsertData1(downloadURL);
          resolve("success");
        console.log(downloadURL);
        console.log("file-1-uploaded");
        move1();
    })
  })
})
}

/*======== function insert data art work -1 ========== */
function InsertData1(URL){
//let fileID1 = "id" + Math.random().toString(16).slice(2);
push(ref(db, division.value),{
      Email:email.value,
      firstName : fname.value,
      conceptName : cname.value,
      country : country.value,
      division : division.value,
      school :  school.value,
      theme : theme1.value,
      topic : topic1.value,
      desc : desc1.value,
      time : time.innerHTML,
      imgURL: URL
})
.catch((error)=>{
  alert("unsuccessful" + error);
})
}
/* =========================================================================== */



/* =========================================================================== */
/*======== art work 2- file References ========== */

/*======== art work 2  ========== */
let theme2 = document.getElementById("theme-2");
let topic2 = document.getElementById("topic-2");
let desc2 = document.getElementById("desc-2");


let imgName2 = document.getElementById("img-name-2");
let extlab2 = document.getElementById("ext-2");
let myimg2 = document.getElementById("myimg-2");
let proglab2 = document.getElementById("progress-2");
let selBtn2 = document.getElementById("choose-2");

var files2 = [];
var reader2 = new FileReader();
var input2 = document.createElement('input');
input2.type = "file";
input2.accept = "image/*";

input2.onchange = (e) => {
  files2 = e.target.files;

  // file size check
  if(files2.length>0){
    if(files2[0].size > 10 * 1024 *1024){
      file2Error.style.visibility = "visible";
      file2Error.innerHTML = "File size should be less than 10MB";
      return false;
    }else{
      file2Error.style.visibility = "hidden";
    }
  }

  var extention = GetFileExt(files2[0]);
  var name = GetFileName(files2[0]);
  imgName2.value = name;
  extlab2.innerHTML = extention;

  reader2.readAsDataURL(files2[0]);
}

//loading image to preview  
reader2.onload = function(){
  myimg2.src = reader2.result;
}

/*-------Selecting Image-2----------*/ 
selBtn2.onclick = function(){
  input2.click();
}

/*======== upload art work-2 ========== */
async function UploadProcess2(){

return new Promise((resolve, reject)=>{
modal.style.display = "block";
//elem2.style.display = "block";

var ImgToUpload2 = files2[0];
let ImgName2 = imgName2.value + extlab2.innerHTML;

const storage2 = getStorage();
const storageRef2 = sRef(storage2, "Images/"+ ImgName2);

const uploadTask2 = uploadBytesResumable(storageRef2, ImgToUpload2);
// progress
uploadTask2.on('state-changed',(snapshot)=>{
  let progress2 = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
  proglab2.innerHTML = "Upload " + progress2 + "%";
},(error) => {
  alert("error")
},async ()=>{
  await getDownloadURL(uploadTask2.snapshot.ref)
  .then((downloadURL)=>{
      InsertData2(downloadURL);
        resolve("success");
      console.log(downloadURL);
      console.log("file - 2- uploaded");
      // pro2 = "1";   
      // console.log(pro2);
      move2();
  })
})
})

}

/*======== function insert data art work -2 ========== */
function InsertData2(URL){
//let fileID1 = "id" + Math.random().toString(16).slice(2);
push(ref(db, division.value),{
      Email:email.value,
      firstName : fname.value,
      conceptName : cname.value,
      country : country.value,
      division : division.value,
      school :  school.value,
      theme : theme2.value,
      topic : topic2.value,
      desc : desc2.value,
      time : time.innerHTML,
      imgURL: URL
})
.catch((error)=>{
  alert("unsuccessful" + error);
})
}

/* ========================================================================== */


/* =========================================================================== */
/*======== art work 3- file References ========== */

/*======== art work 3  ========== */
let theme3 = document.getElementById("theme-3");
let topic3 = document.getElementById("topic-3");
let desc3 = document.getElementById("desc-3");


let imgName3 = document.getElementById("img-name-3");
let extlab3 = document.getElementById("ext-3");
let myimg3 = document.getElementById("myimg-3");
let proglab3 = document.getElementById("progress-3");
let selBtn3 = document.getElementById("choose-3");

var files3 = [];
var reader3 = new FileReader();
var input3 = document.createElement('input');
input3.type = "file";
input3.accept = "image/*";

input3.onchange = (e) => {
  files3 = e.target.files;

  // file size check
  if(files3.length>0){
    if(files3[0].size > 10 * 1024 *1024){
      file3Error.style.visibility = "visible";
      file3Error.innerHTML = "File size should be less than 10MB";
      return false;
    }else{
      file3Error.style.visibility = "hidden";
    }
  }

  var extention = GetFileExt(files3[0]);
  var name = GetFileName(files3[0]);
  imgName3.value = name;
  extlab3.innerHTML = extention;

  reader3.readAsDataURL(files3[0]);
}

//loading image to preview  
reader3.onload = function(){
myimg3.src = reader3.result;
}

/*-------Selecting Image-3----------*/ 
selBtn3.onclick = function(){
input3.click();
}

/*======== upload art work-2 ========== */
async function UploadProcess3(){
return new Promise((resolve, reject)=>{
  modal.style.display = "block";
  //elem3.style.display = "block";

  var ImgToUpload3 = files3[0];
  let ImgName3 = imgName3.value + extlab3.innerHTML;

  const storage3 = getStorage();
  const storageRef3 = sRef(storage3, "Images/"+ ImgName3);

  const uploadTask3 = uploadBytesResumable(storageRef3, ImgToUpload3);
  // progress
  uploadTask3.on('state-changed',(snapshot)=>{
    let progress3 = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
    proglab3.innerHTML = "Upload " + progress3 + "%";
  },(error) => {
    alert("error")
  },async ()=>{
    await getDownloadURL(uploadTask3.snapshot.ref)
    .then((downloadURL)=>{
        InsertData3(downloadURL);
          resolve("success")
        console.log(downloadURL);
        console.log("file-3-uploaded"); 
        // 
        move3();
    })
  })
})
}

/*======== function insert data art work -3 ========== */
function InsertData3(URL){
//let fileID1 = "id" + Math.random().toString(16).slice(2);
push(ref(db, division.value),{
      Email:email.value,
      firstName : fname.value,
      conceptName : cname.value,
      country : country.value,
      division : division.value,
      school :  school.value,
      theme : theme3.value,
      topic : topic3.value,
      desc : desc3.value,
      time : time.innerHTML,
      imgURL: URL
})
.catch((error)=>{
  alert("unsuccessful" + error);
})
}
/* ======================================================================= */
/* ======================================================================= */


/*======== Buttons ========== */
let submit = document.getElementById("submit");
let modal = document.getElementById("basicModal");
let finish = document.getElementById("close");



/*======== Event Listners ========== */
submit.addEventListener('click', (e)=>{
e.preventDefault();
validate();
})

finish.addEventListener('click', (e) => {
window.location.href = "successful.html";
})


/*==============================Main function================================= */

function validate(){
  //if only one image submitting
  if((myimg.src !== "") && (myimg2.src === "") && (myimg3.src === "")){
      /*---displaying progess bars */
     elem1.style.display = "block";
     //verification process
     let verify1 = detailValidate();
     if(verify1){
       let verifyArt1 = artwork1Valid();
       if((verify1) && (verifyArt1)){
         console.log("can submit image 1");
          //and upload process
          UploadProcess1().then(response => {
            if(response === "success") {
              finish.style.visibility = "visible";
            }
          });
       }
     }
  }

  //if only 2 image submitting
  if((myimg.src !== "") && (myimg2.src !== "") && (myimg3.src === "")){
    /*---displaying progess bars */
    elem1.style.display = "block";
    elem2.style.display = "block";
    //verification process
    let verify2 = detailValidate(); 
    if(verify2){
      let verifyArt1 = artwork1Valid();
      let verifyArt2 = artwork2Valid();
      if((verify2) && (verifyArt1) && (verifyArt2)){
        console.log("can submit 2 photos");
        //and upload process
        UploadProcess1().then(response =>{
          if(response === "success"){
            UploadProcess2().then(response => {
                if(response === "success") {
                  finish.style.visibility = "visible";
                }
              });
          }
        })
      }
    }
  }

  //if all 3 image submitting
  if((myimg.src !== "") && (myimg2.src !== "") && (myimg3.src !== "")){
    /*---displaying progess bars */
    elem1.style.display = "block";
    elem2.style.display = "block";
    elem3.style.display = "block";
    // verification process
    let verify3 = detailValidate();
    if(verify3){
      let verifyArt1 = artwork1Valid();
      let verifyArt2 = artwork2Valid();
      let verifyArt3 = artwork3Valid();
      if((verify3) && (verifyArt1) && (verifyArt2) && (verifyArt3)){
        console.log("can submit 3 photos");
        //and upload process
        UploadProcess1().then(response =>{
          if(response === "success"){
            UploadProcess2().then(response => {
                if(response === "success") {
                  UploadProcess3().then(response => {
                    if(response === "success"){
                      finish.style.visibility = "visible";
                    }
                  })
                }
              });
          }
        })
      }
    } 
  }
}



/* =========================== Error - Validation ============================= */


let emailError = document.getElementById("emailError");
let fnameError = document.getElementById("fnameError");
let countryError = document.getElementById("countryError");
let divisionError = document.getElementById("divisionError");
let agreementError = document.getElementById("agreementError");

let theme1Error = document.getElementById("theme1Error");
let topic1Error = document.getElementById("topic1Error");

let theme2Error = document.getElementById("theme2Error");
let topic2Error = document.getElementById("topic2Error");

let theme3Error = document.getElementById("theme3Error");
let topic3Error = document.getElementById("topic3Error");

var file1Error = document.getElementById("file1Error");
var file2Error = document.getElementById("file2Error");
var file3Error = document.getElementById("file3Error");


/*==============main details validation==================== */

function detailValidate(){
  if(email.value === ""){
    emailError.style.display = "block";
    emailError.innerText = "Please Enter your email";
    email.focus();
    return false;
  }else{
    emailError.style.display = "none";
  }

  if(fname.value === ""){
    fnameError.style.display = "block";
    fnameError.innerText = "Please Enter your Full Name";
    fname.focus();
    return false;
  }else{
    fnameError.style.display = "none";
  }

  if(country.value === ""){
    countryError.style.display = "block";
    countryError.innerText = "Please Enter your country";
    country.focus();
    return false;
  }else{
    countryError.style.display = "none";
  }

  if(division.value === ""){
    divisionError.style.display = "block";
    divisionError.innerText = "Please Enter your Division";
    division.focus();
    return false;
  }else{
    divisionError.style.display = "none";
  }

  if(agreement.checked === false){
    agreementError.style.display = "block";
    agreementError.innerText = "Please Read the agreement";
    agreement.focus();
    return false;
  }else{
    agreementError.style.display = "none";
  }


  return true;
}



/*==============Art work validations==================== */

function artwork1Valid(){
if(theme1.value == ""){
  theme1Error.style.display = "block";
  theme1Error.innerText = "Please Enter your Division";
  theme1.focus();
  return false;
}else{
  theme1Error.style.display = "none";
}

if(topic1.value == ""){
  topic1Error.style.display = "block";
  topic1Error.innerText = "Please Enter your Division";
  topic1.focus();
  return false;
}else{
  topic1Error.style.display = "none";
}

return true;
}



function artwork2Valid(){
if(theme2.value == ""){
  theme2Error.style.display = "block";
  theme2Error.innerText = "Please Enter your Division";
  theme2.focus();
  return false;
}else{
  theme2Error.style.display = "none";
}

if(topic2.value == ""){
  topic2Error.style.display = "block";
  topic2Error.innerText = "Please Enter your Division";
  topic2.focus();
  return false;
}else{
  topic2Error.style.display = "none";
}

return true;
}



function artwork3Valid(){
if(theme3.value == ""){
  theme3Error.style.display = "block";
  theme3Error.innerText = "Please Enter your Division";
  theme3.focus();
  return false;
}else{
  theme3Error.style.display = "none";
}

if(topic3.value == ""){
  topic3Error.style.display = "block";
  topic3Error.innerText = "Please Enter your Division";
  topic3.focus();
  return false;
}else{
  topic3Error.style.display = "none";
}

return true;
}

/* ======================================================================= */




/*===============================Progress bars on modals===================== */

/*--------Progress bar on Modal--------- */
var elem1 = document.getElementById("myBar1");
var val1 = document.getElementById("val1");
var up1 = document.getElementById("up1");

var i = 0;
function move1() {
 up1.style.display = "none";

 if (i == 0) {
   i = 1;       
   var width = 1;
   var id = setInterval(frame, 10);
   function frame() {
     if (width >= 100) {
       clearInterval(id);
       i = 0;
     } else {
       width++;
       elem1.style.width = width + "%";
       val1.innerHTML = width + "%";
     }
   }
 }
}

/*--------Progress bar on Modal--------- */
var elem2 = document.getElementById("myBar2");
var val2 = document.getElementById("val2");
var up2 = document.getElementById("up2");

var j = 0;
function move2() {
 up2.style.display = "none";

 if (j == 0) {
   j = 1;       
   var width = 1;
   var id = setInterval(frame, 10);
   function frame() {
     if (width >= 100) {
       clearInterval(id);
       j = 0;
     } else {
       width++;
       elem2.style.width = width + "%";
       val2.innerHTML = width + "%";
     }
   }
 }
}

/*--------Progress bar on Modal--------- */
var elem3 = document.getElementById("myBar3");
var val3 = document.getElementById("val3");
var up3 = document.getElementById("up3");

var k = 0;
function move3() {
  up3.style.display = "none";

  if (k == 0) {
    k = 1;       
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        k = 0;
      } else {
        width++;
        elem3.style.width = width + "%";
        val3.innerHTML = width + "%";
      }
    }
  }
}