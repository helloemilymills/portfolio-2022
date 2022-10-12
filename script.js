
//brand section
const ajureButton = document.getElementById("ajure-button");
const ajureExpanded = document.getElementById("ajure-brand");
const socialSleeveButton = document.getElementById("social-sleeve-button");
const socialSleeveExpanded = document.getElementById("social-sleeve-brand");
const playFairButton = document.getElementById("play-fair-button");
const playFairExpanded = document.getElementById("play-fair-brand");

//webpage section
const careersButton = document.getElementById("careers-button");
const careersPage = document.getElementById("careers-page");
const partnershipsButton = document.getElementById("partnerships-button");
const partnershipsPage = document.getElementById("partnerships-page");

//brand section
function toggleAjureSection() {
    if (ajureExpanded.style.display == "none" || ajureExpanded.style.display == "") {
        ajureExpanded.style.display = "flex";
        socialSleeveExpanded.style.display = "none";
        playFairExpanded.style.display = "none";
    }
    else {
        ajureExpanded.style.display = "none";
    }
}

function toggleSocialSleeveSection() {
    if (socialSleeveExpanded.style.display == "none" || socialSleeveExpanded.style.display == "") {
        socialSleeveExpanded.style.display = "flex";
        ajureExpanded.style.display = "none";
        playFairExpanded.style.display = "none";
    }
    else {
        socialSleeveExpanded.style.display = "none";
    }
}

function togglePlayFairSection() {
    if (playFairExpanded.style.display == "none" || playFairExpanded.style.display == "") {
        playFairExpanded.style.display = "flex";
        ajureExpanded.style.display = "none";
        socialSleeveExpanded.style.display = "none";
    }
    else {
        playFairExpanded.style.display = "none";
    }
}

ajureButton.addEventListener('click', toggleAjureSection);
socialSleeveButton.addEventListener('click', toggleSocialSleeveSection);
playFairButton.addEventListener('click', togglePlayFairSection);

//webpage section
function toggleCareersSection() {
    if (careersPage.style.display == "none" || careersPage.style.display == "") {
        careersPage.style.display = "flex";
        partnershipsPage.style.display = "none";
    }
    else {
        careersPage.style.display = "none";
    }
}

function togglePartnershipsSection() {
    if (partnershipsPage.style.display == "none" ||partnershipsPage.style.display == "") {
        partnershipsPage.style.display = "flex";
        careersPage.style.display = "none";
    }
    else {
        partnershipsPage.style.display = "none";
    }
}

careersButton.addEventListener('click', toggleCareersSection);
partnershipsButton.addEventListener('click', togglePartnershipsSection);
  
