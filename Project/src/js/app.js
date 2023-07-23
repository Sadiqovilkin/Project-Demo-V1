const btn_watchlist = document.getElementById("btn_watchlist")
const btn_element = document.querySelector(".btn_elements")
if (btn_watchlist) {        
    btn_watchlist.addEventListener("click",()=>{
        btn_element.classList.toggle("el_active")
    })  
}
