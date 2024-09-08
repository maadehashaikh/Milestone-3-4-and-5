var nameElement = document.getElementById("name") as HTMLInputElement;
var emailElement = document.getElementById("email") as HTMLInputElement;
var phoneElement = document.getElementById('phone') as HTMLInputElement;
var linkedlnElement = document.getElementById('linkelin') as HTMLInputElement;
var submitbtn = document.getElementById("submitbtn");
var dataDiv = document.getElementById('showData');
var form = document.getElementById('form') as HTMLFormElement;
var degreeElement = document.getElementById("degree") as HTMLInputElement;
var intermediateElement = document.getElementById("intermediate") as HTMLInputElement;
var matriculationElement = document.getElementById("matriculation") as HTMLInputElement;
var skillTitleElement = document.getElementById("skill-Title") as HTMLInputElement;
var languageElement = document.getElementById("languages") as HTMLInputElement;
var skilldescElement = document.getElementById("skill-desc") as HTMLTextAreaElement;

submitbtn.addEventListener("click", () => {
  // Clear previous data if any
  dataDiv!.innerHTML = '';

  // PERSONAL INFORMATION
  const personalInfo = document.createElement("h1");
  personalInfo.textContent = "PERSONAL INFORMATION";
  personalInfo.classList.add('personal-Info');
  dataDiv?.appendChild(personalInfo);

  const NameElem = document.createElement("p");
  NameElem.classList.add("Res-Name");
  NameElem.textContent = nameElement.value;
  NameElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(NameElem);

  const emailElem = document.createElement("p");
  emailElem.classList.add("Res-Email");
  emailElem.textContent = emailElement.value;
  emailElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(emailElem);

  const phoneElem = document.createElement("p");
  phoneElem.classList.add("Res-Phone");
  phoneElem.textContent = phoneElement.value;
  phoneElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(phoneElem);

  const linkedlnElem = document.createElement("p");
  linkedlnElem.classList.add('Res-Linkedin');
  linkedlnElem.textContent = linkedlnElement.value;
  linkedlnElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(linkedlnElem);

  // EDUCATION SECTION
  const Education = document.createElement("h1");
  Education.textContent = "EDUCATION";
  Education.classList.add('Education');
  dataDiv?.appendChild(Education);

  const degreeElem = document.createElement("p");
  degreeElem.classList.add("Res-Degree");
  degreeElem.textContent = degreeElement.value;
  degreeElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(degreeElem);

  const intermediateElem = document.createElement("p");
  intermediateElem.classList.add('Res-intermediate');
  intermediateElem.textContent = intermediateElement.value;
  intermediateElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(intermediateElem);

  const matriculationElem = document.createElement("p");
  matriculationElem.classList.add('Res-matriculation');
  matriculationElem.textContent = matriculationElement.value;
  matriculationElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(matriculationElem);

  // SKILLS SECTION
  const Skills = document.createElement("h1");
  Skills.textContent = "SKILLS";
  Skills.classList.add('skills');
  dataDiv?.appendChild(Skills);

  const skillTitleElem = document.createElement("p");
  skillTitleElem.classList.add('Res-skillTitle');
  skillTitleElem.textContent = skillTitleElement.value;
  skillTitleElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(skillTitleElem);

  const skillDescElem = document.createElement("p");
  skillDescElem.classList.add('Res-skillDesc');
  skillDescElem.textContent = skilldescElement.value;
  skillDescElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(skillDescElem);

  const languageElem = document.createElement("p");
  languageElem.classList.add('Res-languages');
  languageElem.textContent = languageElement.value;
  languageElem.setAttribute('contenteditable', 'true');
  dataDiv?.appendChild(languageElem);

   // Hide the form after resume generation
  form.style.display = 'none';

  // Create an "Update" button
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update Form";
  updateBtn.classList.add('update-btn');
  dataDiv?.appendChild(updateBtn);

  form.style.display = 'none';

   // Event listener for updating the form fields with edited content
   updateBtn.addEventListener('click', () => {
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
    dataDiv!.innerHTML = ''; 
  });
 
  // CV BTN 
  const cv_Btn= document.createElement("button");
  cv_Btn.textContent = "Download CV";
  cv_Btn.classList.add('download-cv-btn');
  dataDiv?.appendChild(cv_Btn);
   cv_Btn.addEventListener('click',()=>{
    window.print();
   })
  });
