let languageButton = document.getElementById('btn');

languageButton.onclick = function() {
  if (languageButton.value == 'fr') {
    changeLanguage('en');
    languageButton.setAttribute("value", "en");
    languageButton.innerText = 'french version';
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
  document.getElementById('title').innerText = data.title;
  document.getElementById('description').innerText = data.description;
}