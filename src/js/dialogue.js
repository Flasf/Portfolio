const colorEffect= [
    {
        colors: "#00bfa3,#B2ABF2, #ff4545, #ff0095, #FFD700 , #00bfa3"
    },
    {
        colors: "#ff4545, #00ff99, #006aff, #ff0095, #ff4545"
    },
    {
        colors: "transparent 20%, #006aff"
    },
];
const dialog = document.querySelector("dialog");
const dialogContainer = document.querySelector("#dialog-container");
const button = document.querySelector(".button");

function getRandomColorEffect() {
    return colorEffect[Math.floor(Math.random() * colorEffect.length)];
}

function applyRandomColorEffect() {
    // dialogContainer.style.setProperty("--background-image", getRandomColorEffect().backgroundImage); 
    dialogContainer.style.setProperty("--colors", getRandomColorEffect().colors);
}

function openDialog() { 
    dialog.showModal()
    
    // Show the dialog container
    dialogContainer.style.display = "block";

    console.log("dialog opened");

    // After 2 seconds, close the dialog and hide the container
    setTimeout(() => {
        dialog.close()
        dialogContainer.style.display = "none";
   }, 2000);
}

// Execute both of this functions when the button is clicked
button.addEventListener("click", (e) => { 
    e.preventDefault(); // Prevent the form from submitting
    applyRandomColorEffect();
    openDialog(); 
    }
);

button.addEventListener("click", openDialog());