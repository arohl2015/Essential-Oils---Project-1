$("#clickButton").on("click", function(event) {
    event.preventDefault();

    // Here we grab the text from the input box
    var news = $("#clickButton").val();

    //construct our URL
    var queryURL = 'http://newsapi.org/v2/everything?q="hand+sanitizer"&apiKey=d41b710dbebf47e0939ee69238607a46';
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        for (let index = 0; index < response.articles.length; index++) {
            console.log(response.articles[index].title);
            console.log(response.articles[index].description);
            console.log(response.articles[index].url);

            var newsDiv = $("<div>");
            var title = $("<p>").text("Title: " + response.articles[index].title);
            var description = $("<p>").text("Description: " + response.articles[index].description);
            var url = $("<p>").text("URL: " + response.articles[index].url);
            newsDiv.append(title);
            newsDiv.append(description);
            newsDiv.append(url);
            $("#displayNews").append(newsDiv);
    }
    //   $("#displayNews").html(JSON.stringify(response));
    });
  });

  $("#searchButton").on("click", function(event) {
    event.preventDefault();

    var search = $("#searchButton").val();

  var url= "https://www.googleapis.com/youtube/v3/search?part=snippet&q=essential+oils&type=video&key=AIzaSyA1PWaZZvpCOAzU4ftUcfsZlAOIU6pYCFQ";
  $.ajax({
    url: url,
    method: "GET"
  }).then(function (response) {
      for (let index = 0; index < response.items.length; index++) {
        console.log(response.articles[index].title);
        console.log(response.articles[index].description);
        console.log(response.articles[index].url);
          
          
      }
  
  
  
//   $("#displayVideos").html(JSON.stringify(response));
});
});






