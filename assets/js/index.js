fetch('../../db/general.json')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function(db) {
    console.log(db);
  });