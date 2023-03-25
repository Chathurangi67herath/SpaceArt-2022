
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBWjfvY52T3zrqyI_pkxebR_MGQuOjfBvo",
      authDomain: "learnfb-bc663.firebaseapp.com",
      databaseURL: "https://learnfb-bc663-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "learnfb-bc663",
      storageBucket: "learnfb-bc663.appspot.com",
      messagingSenderId: "489257961280",
      appId: "1:489257961280:web:d1b22dfb8fb90b05a2dca5"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // firbase real time database
    import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
    const db = getDatabase();



    // for firbase storage
    import  {getStorage, ref as sRef,uploadBytesResumable,getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

    

    /*-------References-data----------*/
    let submit = document.getElementById("submit");
    let modal = document.getElementById("basicModal");

    // for redirect
    let close = document.getElementById("close");
    let pro1 = document.getElementById("pro1");

    /*-------References-data----------*/
    let email = document.getElementById("email");
    let fname = document.getElementById("fname");
    let cname = document.getElementById("cname");
    let country = document.getElementById("country");
    let division = document.getElementById("division");
    let school = document.getElementById("school");
    let theme1 = document.getElementById("theme1");
    let topic1 = document.getElementById("topic1");
    let desc1 = document.getElementById("desc1");

    /*Error references*/
    let emailError = document.getElementById("emailError");
    let fnameError = document.getElementById("fnameError");
    let countryError = document.getElementById("countryError");
    let divisionError = document.getElementById("divisionError");


    let theme1Error = document.getElementById("theme1Error");
    let topic1Error = document.getElementById("topic1Error");
    let img1Error = document.getElementById("img1Error");
    
    let topic2 = document.getElementById("topic-2");
    let topic3 = document.getElementById("topic-3");


     /*-------References-image----------*/
     let files = [];
     let reader = new FileReader();

    // art work-1
     let imgName = document.getElementById("img-name");
     let extlab = document.getElementById("ext");
     let myimg = document.getElementById("myimg");
     let proglab = document.getElementById("progress");
     let selBtn = document.getElementById("choose");

    //  for redirect function
    let proglab2 = document.getElementById("progress-2");
    let proglab3 = document.getElementById("progress-3");
      
     //input file  function
     let input = document.createElement('input');
     input.type = "file";
     input.onchange = (e) => {

       files = e.target.files;

       let extention = GetFileExt(files[0]);
       let name = GetFileName(files[0]);
       imgName.value = name;
       extlab.innerHTML = extention;

       reader.readAsDataURL(files[0]);
     }

     
      //loading image to preview  
      reader.onload = function(){
       myimg.src = reader.result;
     }
     
    

    /*-------Selecting Image----------*/ 
     selBtn.onclick = function(){
       input.click();
     }
   


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


    // art-work-1 validation
    function artwork1Validation(){
      if(theme1.value === ""){
        theme1Error.style.display = "block";
        theme1Error.innerText = "Please Enter your theme";
        theme1.focus();
        return false;
      }else{
        theme1Error.style.display = "none";
      }

      if(topic1.value === ""){
        topic1Error.style.display = "block";
        topic1Error.innerText = "Please Enter your topic";
        topic1.focus();
        return false;
      }else{
        topic1Error.style.display = "none";
      }

      if(myimg.src === ""){
        img1Error.style.display = "block";
        img1Error.innerText = "Please insert";
        myimg.focus();
        return false;
      }else{
        img1Error.style.display = "none";
      }

      uploadProcess();
    }
    
    /*-------uploading image----------*/
    async function uploadProcess(){
      modal.style.display = "block";
      elem.style.display = "block";

      let ImgToUpload = files[0];
      let ImgName = imgName.value + extlab.innerHTML;

      const storage = getStorage();
      const storageRef = sRef(storage, "Images/"+ ImgName);

      const uploadTask = uploadBytesResumable(storageRef, ImgToUpload);

      // progress
      uploadTask.on('state-changed',(snapshot)=>{
        let progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
        proglab.innerHTML = "Upload " + progress + "%";
      },(error) => {
        alert("error")
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL)=>{
            InsertData(downloadURL);
            console.log(downloadURL);
            
            // pro1.innerHTML = "File one uploaded"
            move();    
        })
      })
    } 

      
     /*-------form-1-Insert data----------*/
     function InsertData(URL){
      let fileID1 = "id" + Math.random().toString(16).slice(2);

       set(ref(db, division.value + "/" + fileID1),{
        // id:fileID1,
        Email:email.value,
        firstName : fname.value,
        conceptName : cname.value,
        country : country.value,
        division : division.value,
        school :  school.value,
        theme : theme1.value,
        topic : topic1.value,
        desc : desc1.value,
        imgURL: URL
       })
       .then(()=>{
        //  check();
       })
       .catch((error)=>{
         alert(error);
       })
     }

     function check(){
      if((proglab.innerHTML == "Upload 100%") && (proglab2.innerHTML == "") && (proglab3.innerHTML == "")){
        console.log("1i damme eka giya");
        window.location.href = "successful.html";
      }  
    }

    /*--------Progress bar on Modal--------- */
    var elem = document.getElementById("myBar1");
    var val = document.getElementById("val1");
    var up = document.getElementById("up1");

    var i = 0;
    function move() {
      up.style.display = "none";

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
            elem.style.width = width + "%";
            val.innerHTML = width + "%";
          }
        }
      }
    }
     
    /*-------
    ---------validation------ 
    -----------------------------*/
    function validate(){

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

      // if all true
      artwork1Validation();
    }
    
    // Submit button
    // submit.addEventListener('click', InsertData(imgURL));
    submit.addEventListener('click', validate);
    close.addEventListener('click', check);
  

