
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
    let close = document.getElementById("close");
    let pro2 = document.getElementById("pro2");


    let email = document.getElementById("email");
    let fname = document.getElementById("fname");
    let cname = document.getElementById("cname");
    let country = document.getElementById("country");
    let division = document.getElementById("division");
    let school = document.getElementById("school");

    let theme2 = document.getElementById("theme-2");
    let topic2 = document.getElementById("topic-2");
    let desc2 = document.getElementById("desc-2");

 
     /*-------References-image----------*/
     let files = [];
     let reader = new FileReader();

    // art work-2
     let imgName2 = document.getElementById("img-name-2");
     let extlab2 = document.getElementById("ext-2");
     let myimg2 = document.getElementById("myimg-2");
     let proglab2 = document.getElementById("progress-2");
     let selBtn2 = document.getElementById("choose-2");

     let proglab = document.getElementById("progress");
     let proglab3 = document.getElementById("progress-3");

     //input file  function
     let input = document.createElement('input');
     input.type = "file";
     input.onchange = (e) => {

       files = e.target.files;

       let extention = GetFileExt(files[0]);
       let name = GetFileName(files[0]);
       imgName2.value = name;
       extlab2.innerHTML = extention;

       reader.readAsDataURL(files[0]);
     }

     
      //loading image to preview  
     reader.onload = function(){
       myimg2.src = reader.result;
     }
     
    

    /*-------Selecting Image----------*/ 
     selBtn2.onclick = function(){
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


    
    /*-------uploading image----------*/
    async function uploadProcess(){
      if(theme2.value == ""){
        console.log("not filled");
      }else{
        elem.style.display = "block";

        let ImgToUpload = files[0];
        let ImgName2 = imgName2.value + extlab2.innerHTML;

        const storage = getStorage();
        const storageRef = sRef(storage, "Images/"+ ImgName2);

        const uploadTask = uploadBytesResumable(storageRef, ImgToUpload);

        // progress
        uploadTask.on('state-changed',(snapshot)=>{
          let progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
          proglab2.innerHTML = "Upload " + progress + "%";
        },(error) => {
          alert("error")
        },()=>{
          getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL)=>{
              InsertData(downloadURL);
              console.log(downloadURL);
              
              //pro2.innerHTML = "File two uploaded"
              move();
          })
        })
      }
    } 



     /*-------form-1-Insert data----------*/
     function InsertData(URL){
      let fileID2 = "id" + Math.random().toString(16).slice(2);

       set(ref(db, division.value + "/" + fileID2),{
        // id:fileID2,
        Email:email.value,
        firstName : fname.value,
        conceptName : cname.value,
        country : country.value,
        division : division.value,
        school :  school.value,
        theme : theme2.value,
        topic : topic2.value,
        desc : desc2.value,
        imgURL: URL
       })
       .then(()=>{
          // check();
        })
       .catch((error)=>{
         alert(error);
       })
     }

     function check(){
      if((proglab.innerHTML == "Upload 100%") && (proglab2.innerHTML == "Upload 100%") && (proglab3.innerHTML == "")){
        console.log("dekk damma dekama giya");
        window.location.href = "successful.html";
      }
     }

      /*--------Progress bar on Modal--------- */
     var elem = document.getElementById("myBar2");
     var val = document.getElementById("val2");
     var up = document.getElementById("up2");

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

      
    // Submit button
    // submit.addEventListener('click', InsertData);
    submit.addEventListener('click', uploadProcess);
    close.addEventListener('click', check);
   
  
