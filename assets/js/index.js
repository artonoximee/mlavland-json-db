document.getElementById('btn').onclick = function() {
  let currentLanguage = document.getElementById('btn').value;
  console.log(currentLanguage);
};

fetch('../../db/fr.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
  console.log(data);
  document.getElementById('title').innerText = data.title;
  document.getElementById('description').innerText = data.description;
}