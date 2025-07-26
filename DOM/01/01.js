function changeTitle()
{
    let baslik = document.getElementById("mainTitle");
    baslik.innerText = "Dom a hoş geldin Burak!";
}
let btn =document.getElementById("changeBtn");
btn.addEventListener("click",changeTitle);