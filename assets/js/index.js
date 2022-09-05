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

function changeLanguage(language) {
  fetch('../../db/' + language + '.json')
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

function appendData(data) {
  console.log(data);
  document.title = data.title;
  document.getElementById('logo').innerText = data.logo;
  document.getElementById('description').innerText = data.description;
}

function onLoad() {
  changeLanguage('fr');
  languageButton.setAttribute("value", "fr");
  languageButton.innerText = 'english version';
}

onLoad();