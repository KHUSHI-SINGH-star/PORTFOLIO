const last_button=document.querySelector(".up-button");
const submit_button=document.querySelector(".submit_button");
const Name=document.querySelector("name_section");
const email=document.querySelector(".email_section");
const phoneNo=document.querySelector(".phoneNO_section");
const massage=document.querySelector(".massage_section");
 const ig=document.querySelector("#ig")
// const ln=document.querySelector("#li")
 const github=document.querySelector("#github")
// const gmail=document.querySelector("#gmail");
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
     document.location="https://www.instagram.com/"
 })

// gmail.addEventListener("click",()=>{
//     // document.location=""
// })

//  ln.addEventListener("click",()=>{
//     // document.location=""
// })

github.addEventListener("click",()=>{
      document.location="https://github.com/KHUSHI-SINGH-star";
})

tap_button.addEventListener("click",()=>{
    window.scrollTo({top:1,behavior:"smooth"})
})

more_about_me.addEventListener("click",()=>{
    window.scrollTo({bottom:200,behavior:"smooth"})
})