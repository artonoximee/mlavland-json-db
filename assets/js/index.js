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
  appendContent(data.description, 'description');
  appendContent(data.allies, 'allies');
  appendContent(data.contact, 'contact');
  appendProjects(data.projects);
  appendTeachings(data.teachings);
  appendExhibitions(data.exhibitions);
  appendPublications(data.publications);
  appendDistinctions(data.distinctions);
}

// Switch language from titles

function switchTitles(language) {
  let descriptionTitle = document.getElementById('descriptionTitle');
  let alliesTitle = document.getElementById('alliesTitle');
  let contactTitle = document.getElementById('contactTitle');
  let projectsTitle = document.getElementById('projectsTitle');
  let teachingsTitle = document.getElementById('teachingsTitle');
  let exhibitionsTitle = document.getElementById('exhibitionsTitle');
  let publicationsTitle = document.getElementById('publicationsTitle');
  let distinctionsTitle = document.getElementById('distinctionsTitle');
  if (language == 'fr') {
    descriptionTitle.innerHTML = '&nbsp;';
    alliesTitle.innerHTML = 'Allié·es';
    contactTitle.innerHTML = 'Contact';
    projectsTitle.innerHTML = 'Projets';
    teachingsTitle.innerHTML = 'Enseignement';
    exhibitionsTitle.innerHTML = 'Expositions';
    publicationsTitle.innerHTML = 'Publications';
    distinctionsTitle.innerHTML = 'Distinctions';
  } else {
    descriptionTitle.innerHTML = '&nbsp;';
    alliesTitle.innerHTML = 'Allies';
    contactTitle.innerHTML = 'Contact';
    projectsTitle.innerHTML = 'Projects';
    teachingsTitle.innerHTML = 'Teaching';
    exhibitionsTitle.innerHTML = 'Exhibitions';
    publicationsTitle.innerHTML = 'Publications';
    distinctionsTitle.innerHTML = 'Distinctions';
  }
}

// Append function

function appendContent(content, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  let newContent = document.createElement('p');
  newContent.innerHTML = content;
  container.appendChild(newContent);
}

// Append projects data

function appendProjects(projects) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    let project = document.createElement('p');
    project.innerHTML = `<a href="${projects[i].url}" onmouseover="changeText('${projects[i].hovertext}')" onmouseout="defaultText()" target="_blank">${projects[i].title}</a><br>${projects[i].date}, ${projects[i].type}`;
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

// Append publications data

function appendPublications(publications) {
  const publicationsContainer = document.getElementById('publications');
  publicationsContainer.innerHTML = '';
  for (let i = 0; i < publications.length; i++) {
    let publication = document.createElement('p');
    publication.innerHTML = `<a href='${publications[i].url}' onmouseover="changeText('${publications[i].hovertext}')" onmouseout="defaultText()" target='_blank'>${publications[i].title}</a><br>${publications[i].description}`;
    publicationsContainer.appendChild(publication);
  }
}

// Append distinctions data

function appendDistinctions(distinctions) {
  const distinctionsContainer = document.getElementById('distinctions');
  distinctionsContainer.innerHTML = '';
  for (let i = 0; i < distinctions.length; i++) {
    let distinction = document.createElement('p');
    distinction.innerHTML = `${distinctions[i].title}<br>${distinctions[i].date}`;
    distinctionsContainer.appendChild(distinction);
  }
}

// Display 'subtitle' text when hovering links

function changeText(text) {
  let display = document.getElementById('text-display');
  display.innerHTML = "";
  display.innerHTML = text;
}

function defaultText() {
  let display = document.getElementById('text-display');
  display.innerHTML = "";
  display.innerHTML = "<span class='orig'></span>";
}

// Default language on first load

function onLoad() {
  changeLanguage('fr');
  languageButton.setAttribute('value', 'fr');
  languageButton.innerText = 'english';
}

onLoad();