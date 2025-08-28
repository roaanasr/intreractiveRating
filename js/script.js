const container=document.querySelector(".container")
const submitbtn=document.getElementById("Submit-btn")
const thankyou=document.getElementById("thankyou")
const ratingBtns=document.querySelectorAll(".rating")
let selected=document.querySelector(".dynamic-number")
let defaultScore=0;
submitbtn.addEventListener("click",submitScore);
ratingBtns.forEach((btn)=>{
    btn.addEventListener("click",ratingBtnsClicked)
})

function submitScore(e){
    e.preventDefault();
    container.style.display="none";
    thankyou.style.display="block";
    selected.textContent=defaultScore;
}
function ratingBtnsClicked(e){
    if(e.target.classList.contains("rating")){
        e.target.classList.toggle("active");
    }
    defaultScore=e.target.textContent;
}
