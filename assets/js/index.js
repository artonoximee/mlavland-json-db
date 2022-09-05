/*
async function fetchDatabase() {
  fetch('../../db/general.json')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function(database) {
      return database
    });
}
*/

fetch('../../db/general.json')
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
  /*  
  var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        mainContainer.appendChild(div);
    }*/
}