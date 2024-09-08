var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var phoneElement = document.getElementById('phone');
var linkedlnElement = document.getElementById('linkelin');
var submitbtn = document.getElementById("submitbtn");
var dataDiv = document.getElementById('showData');
var form = document.getElementById('form');
var degreeElement = document.getElementById("degree");
var intermediateElement = document.getElementById("intermediate");
var matriculationElement = document.getElementById("matriculation");
var skillTitleElement = document.getElementById("skill-Title");
var languageElement = document.getElementById("languages");
var skilldescElement = document.getElementById("skill-desc");
submitbtn.addEventListener("click", function () {
    // Clear previous data if any
    dataDiv.innerHTML = '';
    // PERSONAL INFORMATION
    var personalInfo = document.createElement("h1");
    personalInfo.textContent = "PERSONAL INFORMATION";
    personalInfo.classList.add('personal-Info');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(personalInfo);
    var NameElem = document.createElement("p");
    NameElem.classList.add("Res-Name");
    NameElem.textContent = nameElement.value;
    NameElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(NameElem);
    var emailElem = document.createElement("p");
    emailElem.classList.add("Res-Email");
    emailElem.textContent = emailElement.value;
    emailElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(emailElem);
    var phoneElem = document.createElement("p");
    phoneElem.classList.add("Res-Phone");
    phoneElem.textContent = phoneElement.value;
    phoneElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(phoneElem);
    var linkedlnElem = document.createElement("p");
    linkedlnElem.classList.add('Res-Linkedin');
    linkedlnElem.textContent = linkedlnElement.value;
    linkedlnElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(linkedlnElem);
    // EDUCATION SECTION
    var Education = document.createElement("h1");
    Education.textContent = "EDUCATION";
    Education.classList.add('Education');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(Education);
    var degreeElem = document.createElement("p");
    degreeElem.classList.add("Res-Degree");
    degreeElem.textContent = degreeElement.value;
    degreeElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(degreeElem);
    var intermediateElem = document.createElement("p");
    intermediateElem.classList.add('Res-intermediate');
    intermediateElem.textContent = intermediateElement.value;
    intermediateElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(intermediateElem);
    var matriculationElem = document.createElement("p");
    matriculationElem.classList.add('Res-matriculation');
    matriculationElem.textContent = matriculationElement.value;
    matriculationElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(matriculationElem);
    // SKILLS SECTION
    var Skills = document.createElement("h1");
    Skills.textContent = "SKILLS";
    Skills.classList.add('skills');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(Skills);
    var skillTitleElem = document.createElement("p");
    skillTitleElem.classList.add('Res-skillTitle');
    skillTitleElem.textContent = skillTitleElement.value;
    skillTitleElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(skillTitleElem);
    var skillDescElem = document.createElement("p");
    skillDescElem.classList.add('Res-skillDesc');
    skillDescElem.textContent = skilldescElement.value;
    skillDescElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(skillDescElem);
    var languageElem = document.createElement("p");
    languageElem.classList.add('Res-languages');
    languageElem.textContent = languageElement.value;
    languageElem.setAttribute('contenteditable', 'true');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(languageElem);
    // Hide the form after resume generation
    form.style.display = 'none';
    // Create an "Update" button
    var updateBtn = document.createElement("button");
    updateBtn.textContent = "Update Form";
    updateBtn.classList.add('update-btn');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(updateBtn);
    form.style.display = 'none';
    // Event listener for updating the form fields with edited content
    updateBtn.addEventListener('click', function () {
        // Update form fields with edited resume content
        nameElement.value = NameElem.textContent || '';
        emailElement.value = emailElem.textContent || '';
        phoneElement.value = phoneElem.textContent || '';
        linkedlnElement.value = linkedlnElem.textContent || '';
        degreeElement.value = degreeElem.textContent || '';
        intermediateElement.value = intermediateElem.textContent || '';
        matriculationElement.value = matriculationElem.textContent || '';
        skillTitleElement.value = skillTitleElem.textContent || '';
        skilldescElement.value = skillDescElem.textContent || '';
        languageElement.value = languageElem.textContent || '';
        form.style.display = 'block';
        dataDiv.innerHTML = '';
    });
    // CV BTN 
    var cv_Btn = document.createElement("button");
    cv_Btn.textContent = "Download CV";
    cv_Btn.classList.add('download-cv-btn');
    dataDiv === null || dataDiv === void 0 ? void 0 : dataDiv.appendChild(cv_Btn);
    cv_Btn.addEventListener('click', function () {
        window.print();
    });
});
