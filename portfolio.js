const last_button=document.querySelector(".up-button");
const submit_button=document.querySelector(".submit_button");
const Name=document.querySelector("name_section");
const email=document.querySelector(".email_section");
const phoneNo=document.querySelector(".phoneNO_section");
const massage=document.querySelector(".massage_section");
 const ig=document.querySelector("#ig")
 const ln=document.querySelector("#li")
 const github=document.querySelector("#github")
 const gmail=document.querySelector("#gmail");
const tap_button=document.querySelector(".last");
const more_about_me=document.querySelector("#more_about_me");


// const name1= Name.value;
// const email1=email.value;
// const phoneNo1=phoneNo.value;
// const massage1=massage.value;


// console.log(massage1);

last_button.addEventListener("click",()=>{
window.scrollTo({top:1,behaviour:"instat"})
})

 ig.addEventListener("click",()=>{
     document.location="https://www.instagram.com/_.512khushiii._/?igsh=MTduYzRpMjVjcjE1eg%3D%3D#"
 })

ln.addEventListener("click",()=>{
    document.location="https://www.linkedin.com/in/khushi-singh-4448572a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
})

github.addEventListener("click",()=>{
      document.location="https://github.com/KHUSHI-SINGH-star";
})

tap_button.addEventListener("click",()=>{
    window.scrollTo({top:1,behavior:"smooth"})
})

more_about_me.addEventListener("click",()=>{
    window.scrollTo({top:800,behavior:"smooth"})
})