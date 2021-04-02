var userInput = $("input#inputForm")
console.log(userInput) 
   

function getApi(event) {
  var userRepo = userInput[0].value; 
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
        console.log(data)
        
      });
      console.log(requestUrl)
  }

  $("#search-form").on("submit", getApi);
  