const container=document.querySelector(".container")
const submitbtn=document.getElementById("Submit-btn")
const thankyou=document.getElementById("thankyou")
const ratingBtns=document.querySelectorAll(".rating")
let selected=document.querySelector(".dynamic-number")
let defaultScore=null;
submitbtn.addEventListener("click",submitScore);
ratingBtns.forEach((btn)=>{
    btn.addEventListener("click",ratingBtnsClicked)
});

function submitScore(e){
    e.preventDefault();
    if(defaultScore===null){
        alert("please select a rating before submitting!")
        return;
    }
    container.style.display="none";
    thankyou.style.display="block";
    // selected.textContent= ""+defaultScore+out5;
    selected.textContent=`${defaultScore}out of 5`
}
function ratingBtnsClicked(e){
    e.preventDefault();
    ratingBtns.forEach((btn)=>btn.classList.remove("avtive"))
    e.target.classList.add("active")
    defaultScore=e.target.textContent;}