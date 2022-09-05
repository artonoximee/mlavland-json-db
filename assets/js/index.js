// Listen to chosen language

let languageButton = document.getElementById('btn');

languageButton.onclick = function () {
  if (languageButton.value == 'fr') {
    changeLanguage('en');
    languageButton.setAttribute('value', 'en');
    languageButton.innerText = 'français';
  } else if (languageButton.value == 'en') {
    changeLanguage('fr');
    languageButton.setAttribute('value', 'fr');
    languageButton.innerText = 'english';
  }
};

// Fetch json data from the chosen language

function changeLanguage(language) {
  fetch('db/' + language + '.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data, language);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}

// Insert data from json to html

function appendData(data, language) {
  console.log(data);
  document.title = data.title;
  document.getElementById('logo').innerHTML = data.logo;
  switchTitles(language);
  appendDescription(data.description);
  appendAllies(data.allies);
  appendContact(data.contact);
  appendProjects(data.projects);
  appendTeachings(data.teachings);
  appendExhibitions(data.exhibitions);
}

// Switch language from titles

function switchTitles(language) {
  let descriptionTitle = document.getElementById('descriptionTitle');
  let alliesTitle = document.getElementById('alliesTitle');
  let contactTitle = document.getElementById('contactTitle');
  let projectsTitle = document.getElementById('projectsTitle');
  let teachingsTitle = document.getElementById('teachingsTitle');
  let exhibitionsTitle = document.getElementById('exhibitionsTitle');
  if (language == 'fr') {
    descriptionTitle.innerHTML = '&nbsp;';
    alliesTitle.innerHTML = 'Allié·es';
    contactTitle.innerHTML = 'Contact';
    projectsTitle.innerHTML = 'Projets';
    teachingsTitle.innerHTML = 'Enseignement';
    exhibitionsTitle.innerHTML = 'Expositions';
  } else {
    descriptionTitle.innerHTML = '&nbsp;';
    alliesTitle.innerHTML = 'Allies';
    contactTitle.innerHTML = 'Contact';
    projectsTitle.innerHTML = 'Projects';
    teachingsTitle.innerHTML = 'Teaching';
    exhibitionsTitle.innerHTML = 'Exhibitions';
  }
}

// Append description

function appendDescription(description) {
  const descriptionContainer = document.getElementById('description');
  descriptionContainer.innerHTML = '';
  let descriptionContent = document.createElement('p');
  descriptionContent.innerHTML = description;
  descriptionContainer.appendChild(descriptionContent);
}

// Append allies

function appendAllies(allies) {
  const alliesContainer = document.getElementById('allies');
  alliesContainer.innerHTML = '';
  let alliesContent = document.createElement('p');
  alliesContent.innerHTML = allies;
  alliesContainer.appendChild(alliesContent);
}

// Append contact

function appendContact(contact) {
  const contactContainer = document.getElementById('contact');
  contactContainer.innerHTML = '';
  let contactContent = document.createElement('p');
  contactContent.innerHTML = contact;
  contactContainer.appendChild(contactContent);
}

// Append projects data

function appendProjects(projects) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    let project = document.createElement('p');
    project.innerHTML = `<a href="${projects[i].url}" target="_blank">${projects[i].title}</a><br>${projects[i].date}, ${projects[i].type}`;
    projectsContainer.appendChild(project);
  }
}

// Append teachings data

function appendTeachings(teachings) {
  const teachingsContainer = document.getElementById('teachings');
  teachingsContainer.innerHTML = '';
  for (let i = 0; i < teachings.length; i++) {
    let teaching = document.createElement('p');
    teaching.innerHTML = `${teachings[i].title} [${teachings[i].department}]<br><i>${teachings[i].project}</i><br>${teachings[i].school} (${teachings[i].date})`;
    teachingsContainer.appendChild(teaching);
  }
}

// Append exhibitions data

function appendExhibitions(exhibitions) {
  const exhibitionsContainer = document.getElementById('exhibitions');
  exhibitionsContainer.innerHTML = '';
  for (let i = 0; i < exhibitions.length; i++) {
    let exhibition = document.createElement('p');
    exhibition.innerHTML = `${exhibitions[i].venue}, ${exhibitions[i].city} <br> ${exhibitions[i].project}, ${exhibitions[i].type} (${exhibitions[i].date})`;
    exhibitionsContainer.appendChild(exhibition);
  }
}

// Default language on first load

function onLoad() {
  changeLanguage('fr');
  languageButton.setAttribute('value', 'fr');
  languageButton.innerText = 'english';
}

onLoad();