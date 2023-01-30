const umbrellaImg = document.querySelector(".umbrellaImg");
const filePreview = document.querySelector("#file-ip-1-preview");
const loader = document.querySelector(".loader");
const loaderTwo = document.querySelector("#loader2");
const logo = document.querySelector(".logo");
const theme = document.getElementById("button-id");
const selectedDiv = document.getElementById("base");
const uploadIcon = document.querySelector(".upload");
const cancelIcon = document.getElementById("cancel");
const displayFileName = document.getElementById("file_name");
var fileName = "";

//this is fucntion reads the color from the colors button and dsplay the same color of umbrella. This tracks the click on color buttons
document.getElementById("color_").addEventListener("click", (e) => {
  filePreview.style.visibility = "hidden"; //filePreview is hidden
  loader.classList.remove("hidden"); //loader is is visible
  umbrellaImg.style.visibility = "hidden"; //previous umbrella image if any is made hidden
  umbrellaImg.classList.remove("visible");
  logo.style.visibility = "hidden";
  logo.classList.remove("visible");
  umbrellaImg.src = "";

  if (e.target.id === "blue") {
    theme.style.backgroundColor = "CornflowerBlue";
    selectedDiv.style.backgroundColor = "LightBlue";
    umbrellaImg.src = "blue_umbrella.png";
    loader.style.fill = "CornflowerBlue";
  }
  if (e.target.id === "yellow") {
    theme.style.backgroundColor = "Gold";
    selectedDiv.style.backgroundColor = "LemonChiffon";
    umbrellaImg.src = "yellow_umbrella.png";
    loader.style.fill = "Gold";
  }
  if (e.target.id === "pink") {
    theme.style.backgroundColor = "Plum";
    selectedDiv.style.backgroundColor = "LightPink";
    umbrellaImg.src = "pink_umbrella.png";
    loader.style.fill = "Plum";
  }
  if (document.querySelector("input").value !== "") {
    document.querySelector(".upload").className += " hidden"; //upload logo is hidden when  logo is uploaded
    document.querySelector("#loader2").classList.remove("hidden"); //loader2 is visible when logo is uploaded
  }
});

//Thsi funtion is called when image is uploaded by the user
function showPreview(event) {
  if (event.target.files.length > 0) {
    filePreview.style.visibility = "visible";
    uploadIcon.className += " hidden"; //upload icon is hidden when  logo is in progress to upload
    loaderTwo.classList.remove("hidden"); //loaderTwo is visible when logo is in progress to upload
    loaderTwo.style.visibility = "visible";
    cancelIcon.style.visibility = "visible"; //cancelIcon is made visible
    var src = URL.createObjectURL(event.target.files[0]); //get the sourc address of logo uploaded
    filePreview.src = src; //load the logo image
    filePreview.style.display = "block";
    var input = event.srcElement;
    fileName = input.files[0].name; // get the fileName of the image
    displayFileName.textContent = fileName; //display the file name on button
  }
}

//this function is excuted on page load
window.addEventListener("load", function () {
  loader.className += " hidden"; //loader icon is hidden
  umbrellaImg.style.visibility = "visible"; //umbrella image is visible
});

//this function track complete loading of umbrella image
umbrellaImg.addEventListener("load", function () {
  loader.className += " hidden"; //hide animation applied(fadeOut) for loader
  umbrellaImg.style.visibility = "visible"; //Makes the umbrella image visible
  umbrellaImg.className += " visible"; //adds fadeIn animation for umbrella image

  if (fileName !== "") {
    filePreview.style.visibility = "visible";
    logo.style.visibility = "visible";
    logo.className += " visible";
    loaderTwo.className += " hidden"; //loaderTwo icon is hidden when preveiw of logo is successfully uploaded
    uploadIcon.classList.remove("hidden"); //upload_Icon visible when prveiw of logo is successfully uploaded
  }
});

//This tracks changes when the logo preview is completely loaded on umbrella
logo.addEventListener("load", function () {
  loaderTwo.className += " hidden"; //loaderTwo is hidden when preveiw of logo is successfully uploaded
  uploadIcon.classList.remove("hidden"); //uploadIcon is visible when prveiw of logo is uploaded
});

//This tracks changes to the click of cancel button
cancelIcon.addEventListener("click", function () {
  displayFileName.textContent = "UPLOAD A LOGO"; //display "UPLOAD A LOGO"
  filePreview.src = ""; //reset the the iamge address of logo
  logo.style.visibility = "hidden"; //hide the logo preveiw on umbrella
  cancelIcon.style.visibility = "hidden"; //hide the cancel button
  document.querySelector("input").value = ""; // clear input feild
  fileName = ""; //clear file name variable
});
