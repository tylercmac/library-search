var userInput = $("#searchedItem")
    
    

function getApi() {
    
    // fetch request gets a list of all the repos for the node.js organization
    
    
    var requestUrl = 'https://loc.gov/search/?q=' + userRepo + '&fo=json';
  console.log(requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      for (let i = 0; i < array.length; i++) {
        console.log(data.results[i].url)
        
      }
      });
  }

  $(".submit").on("click", function() {
    var userRepo = userInput.val()
      preventDefault();
      getApi();
      console.log('https://loc.gov/search/?q=' + userRepo + '&fo=json')
  })
  