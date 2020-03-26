$("#clickButton").on("click", function (event) {
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
            var url = $("<a>").attr("href",  response.articles[index].url);
            url.text("click here");
            newsDiv.append(title);
            newsDiv.append(description);
            newsDiv.append(url);
            $("#displayNews").append(newsDiv);
        }
        //   $("#displayNews").html(JSON.stringify(response));
    });
});

$("#searchButton").on("click", function (event) {
    event.preventDefault();

    var search = $("#searchButton").val();

    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=essential+oils&type=video&key=AIzaSyA1PWaZZvpCOAzU4ftUcfsZlAOIU6pYCFQ";
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        for (let index = 0; index < response.items.length; index++) {
            console.log(response.items[index]);
            // console.log(response.items[index].title);
            // console.log(response.items[index].description);
            // console.log(response.items[index].url);

            var searchDiv = $("<div>");
            var title = $("<p>").text("Title: " + response.items[index].snippet.title);
            var description = $("<p>").text("Description: " + response.items[index].snippet.description);
            var videoURL = $("<a>").attr("href", response.items[index].snippet.thumbnails.default.url);
            videoURL.text("click here");
            searchDiv.append(title);
            searchDiv.append(description);
            searchDiv.append(videoURL);
            $("#displayVideos").append(searchDiv);
        }
    });
});