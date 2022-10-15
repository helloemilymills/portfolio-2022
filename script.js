
//brand section
const ajureButton = document.getElementById("ajure-button");
const ajureExpanded = document.getElementById("ajure-brand");
const socialSleeveButton = document.getElementById("social-sleeve-button");
const socialSleeveExpanded = document.getElementById("social-sleeve-brand");
const playFairButton = document.getElementById("play-fair-button");
const playFairExpanded = document.getElementById("play-fair-brand");

//animation section
//buttons
const prodSchedBtn = document.getElementById("prodSchedBtn")
const digWorkOrdBtn = document.getElementById("digWorkOrdBtn")
const oeeMetBtn = document.getElementById("oeeMetBtn")
const papQualBtn = document.getElementById("papQualBtn")
const knowlManBtn = document.getElementById("knowlManBtn")
//containers
const prodSchedContainer = document.getElementById("prodSchedContainer")
const digWorkOrdContainer = document.getElementById("digWorkOrdContainer")
const oeeMetContainer = document.getElementById("oeeMetContainer")
const papQualContainer = document.getElementById("papQualContainer")
const knowlManContainer = document.getElementById("knowlManContainer")

//webpage section
const careersButton = document.getElementById("careers-button");
const careersPage = document.getElementById("careers-page");
const partnershipsButton = document.getElementById("partnerships-button");
const partnershipsPage = document.getElementById("partnerships-page");

//contact form
const contactForm = document.getElementById("contact-form");

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

//animation-section
function toggleProdSched() {
    if (prodSchedContainer.style.display == "none" || prodSchedContainer.style.display == "") {
        prodSchedContainer.style.display = "block";
        digWorkOrdContainer.style.display = "none";
        oeeMetContainer.style.display = "none";
        papQualContainer.style.display = "none";
        knowlManContainer.style.display = "none";
    }
}

function toggleDigWorkOrd() {
    if (digWorkOrdContainer.style.display == "none" || digWorkOrdContainer.style.display == "") {
        digWorkOrdContainer.style.display = "block";
        prodSchedContainer.style.display = "none";
        oeeMetContainer.style.display = "none";
        papQualContainer.style.display = "none";
        knowlManContainer.style.display = "none";
    }
}

function toggleOeeMet() {
    if (oeeMetContainer.style.display == "none" || oeeMetContainer.style.display == "") {
        oeeMetContainer.style.display = "block";
        prodSchedContainer.style.display = "none";
        digWorkOrdContainer.style.display = "none";
        papQualContainer.style.display = "none";
        knowlManContainer.style.display = "none";
    }
}

function togglePapQual() {
    if (papQualContainer.style.display == "none" || papQualContainer.style.display == "") {
        papQualContainer.style.display = "block";
        prodSchedContainer.style.display = "none";
        digWorkOrdContainer.style.display = "none";
        oeeMetContainer.style.display = "none";
        knowlManContainer.style.display = "none";
    }
}

function toggleKnowlMan() {
    if (knowlManContainer.style.display == "none" || knowlManContainer.style.display == "") {
        knowlManContainer.style.display = "block";
        prodSchedContainer.style.display = "none";
        digWorkOrdContainer.style.display = "none";
        oeeMetContainer.style.display = "none";
        papQualContainer.style.display = "none";
    }
}

prodSchedBtn.addEventListener('click', toggleProdSched);
digWorkOrdBtn.addEventListener('click', toggleDigWorkOrd);
oeeMetBtn.addEventListener('click', toggleOeeMet);
papQualBtn.addEventListener('click', togglePapQual);
knowlManBtn.addEventListener('click', toggleKnowlMan);

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
    if (partnershipsPage.style.display == "none" || partnershipsPage.style.display == "") {
        partnershipsPage.style.display = "flex";
        careersPage.style.display = "none";
    }
    else {
        partnershipsPage.style.display = "none";
    }
}

careersButton.addEventListener('click', toggleCareersSection);
partnershipsButton.addEventListener('click', togglePartnershipsSection);

//contact form
function clearForm() {
    contactForm.reset();
}

contactForm.addEventListener('submit', clearForm());

