
function activateReturnDate(input) {
  input.type = "date";
  input.value = "";
  input.readOnly = false;
  input.focus();
}

function weatherChangeImages(){
    const hotImages = document.getElementById("image-set-hot-weather");
    const coldImages = document.getElementById("image-set-cold-weather");
    const weatherToggle = document.getElementById("weather-toggle")
    weatherToggle.addEventListener("change", weatherChangeImages)

    if (weatherToggle.checked) {
        coldImages.style.display = "none";
        hotImages.style.display = "block";
    }else{
        coldImages.style.display = "block";
        hotImages.style.display = "none";
    }

}
