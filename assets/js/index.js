// Listen to chosen language

let languageButton = document.getElementById('btn');

languageButton.onclick = function() {
  if (languageButton.value == 'fr') {
    changeLanguage('en');
    languageButton.setAttribute("value", "en");
    languageButton.innerText = 'version française';
  } else if (languageButton.value == 'en') {
    changeLanguage('fr');
    languageButton.setAttribute("value", "fr");
    languageButton.innerText = 'english version';
  }
};

// Fetch json data from the chosen language

function changeLanguage(language) {
  fetch('db/' + language + '.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}

// Insert data from json to html

function appendData(data) {
  console.log(data);
  document.title = data.title;
  document.getElementById('logo').innerHTML = data.logo;
  appendProjects(data.projects);
}

function appendProjects(projects) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    let project = document.createElement('p');
    project.innerHTML = `<b>${projects[i].title}</b> <br> ${projects[i].date}, ${projects[i].type}`;
    projectsContainer.appendChild(project);
  }
  console.log(projects);
}

// Default language on first load

function onLoad() {
  changeLanguage('fr');
  languageButton.setAttribute("value", "fr");
  languageButton.innerText = 'english version';
}

onLoad();