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

      $("#displayNews").html(JSON.stringify(response));
    });
  });

  





