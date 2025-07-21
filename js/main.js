
function randomQuotes() {

    var quotes = [
        "Success does not lie in results but in efforts, being the best is not so important, doing the best is all that matters.",
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "Inspiration does exist, but it must find you working.",
        "I'd rather regret the things I've done than regret the things I haven't done.",
    ];

    var writers = [
        "--Albert Einstein",
        "--Winston Churchill",
        "--Pablo Picasso",
        "--Lucille Ball",
    ];

    var randomQuote = Math.floor(Math.random() * quotes.length)
    // var randomWriter = Math.floor(Math.random() * writers.length)

    document.getElementById("qContent").innerHTML = quotes[randomQuote];
    document.getElementById("writer").innerHTML = writers[randomQuote];

}
















