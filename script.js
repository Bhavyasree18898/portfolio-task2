const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        themeBtn.textContent="☀️ Light Mode";
    }else{
        themeBtn.textContent="🌙 Dark Mode";
    }
});