var userInput = $("input#inputForm")
console.log(userInput) 
   

function getApi(event) {
  var userRepo = userInput.val(); 
  console.log(userRepo)
  event.preventDefault();
    
    // fetch request gets a list of all the repos for the node.js organization
    console.log(userRepo) 
    
    var requestUrl = 'https://loc.gov/search/?q=' + userRepo + '&fo=json';
  console.log(requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      for (let i = 0; i < data.results.length; i++) {       
        console.log(data.results[i].url)
        console.log(data.results[i].title)
      }});
      console.log(requestUrl)
  }

  $("#search-form").on("submit", getApi);
  