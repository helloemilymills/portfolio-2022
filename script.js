const careersButton = document.getElementById("careers-button");
const careersPage = document.getElementById("careers-page");
const partnershipsButton = document.getElementById("partnerships-button");
const partnershipsPage = document.getElementById("partnerships-page");

function toggleCareersSection() {
    if (careersPage.style.display == "none") {
        careersPage.style.display = "flex";
        partnershipsPage.style.display = "none";
    }
    else {
        careersPage.style.display = "none";
       
    }
}

function togglePartnershipsSection() {
    if (partnershipsPage.style.display == "none") {
        partnershipsPage.style.display = "flex";
        careersPage.style.display = "none";
    }
    else {
        partnershipsPage.style.display = "none";
    }
}

careersButton.addEventListener('click', toggleCareersSection);
partnershipsButton.addEventListener('click', togglePartnershipsSection);
  
