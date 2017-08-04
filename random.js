function getQuote() {
  $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(r) {
            console.log(r);
            if (typeof r === 'string') {
                r = JSON.parse(r); 
            }
            currentQuote = r.quote;
            currentAuthor = r.author + " - " + r.category;
            $("#quoteBox").html(currentQuote);
            $("#authorBox").html(currentAuthor);
            
        }
    }
  );
}
$( document ).ready(function() {
    getQuote();
});