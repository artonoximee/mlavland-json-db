// Listen to chosen language

let languageButton = document.getElementById('btn');

languageButton.onclick = function() {
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
  appendProjects(data.projects);
  appendExhibitions(data.exhibitions);
}

// Switch language from titles

function switchTitles(language) {
  let descriptionTitle = document.getElementById('descriptionTitle');
  let projectsTitle = document.getElementById('projectsTitle');
  let exhibitionsTitle = document.getElementById('exhibitionsTitle');
  if (language =='fr') {
    descriptionTitle.innerHTML = '&nbsp;';
    projectsTitle.innerHTML = 'Projets';
    exhibitionsTitle.innerHTML = 'Expositions';
  } else {
    descriptionTitle.innerHTML = '&nbsp;';
    projectsTitle.innerHTML = 'Projects';
    exhibitionsTitle.innerHTML = 'Exhibitions';
  }
}

function appendProjects(projects) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    let project = document.createElement('p');
    project.innerHTML = `<b>${projects[i].title}</b> <br> ${projects[i].date}, ${projects[i].type}`;
    projectsContainer.appendChild(project);
  }
}

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