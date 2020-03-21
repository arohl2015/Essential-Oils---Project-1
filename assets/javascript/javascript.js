function displaysanitizer () {
    var sanitizer = $(this).attr("data-name");
    //adding in the queryURL to call my topic
    var queryURL = "https://api_basics.fda.gov/drug/event.json?api_key=Vh8vc8LbC81SVdaxi4vGMGNaN2p8TnrN5YxKswA4&search=hand_sanitizer&limit10";
    $.ajax({
        url: queryURL,
        method: "GET"
        //Per research: always prefer .then() so code is compatible with the open promise standard
    }).then(function (response) {
        //logging my responses and queryURL
        console.log(queryURL);
        console.log(response);
        //class review - this stores the data from our AJAX
        var result = response.data;