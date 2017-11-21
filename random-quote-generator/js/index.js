$(document).ready(function() {
      var whatTheySaid = ["My log does not judge.", "That gum you like is going to come back in style.", "I only have time for coffee.", "Agent Cooper loves coffee.", "I plan on writing an epic poem about this gorgeous pie!", "It's like I'm having the most beautiful dream and the most terrible nightmare at once.", "Hiding from your fear doesn't make your fear go away.", "Every day, once a day, give yourself a present.", "I'm only quiet on the outside.", "The owls are not what they seem.", "I won't hurt you...", "There was a fish in the percolator!", "The problems of our entire society are of a sexual nature.", "I feel like I know her, but sometimes my arms bend back.", "Ed! You wiating for those drapes to hang themselves?"];

    var whoSaidIt = ["Log Lady", "The Man from Another Place", "Dale Cooper", "Audrey Horn", "FBI Deputy Director Gordon Cole", "Donna Hayward", "Annie Blackburn","Dale Cooper", "James Hurley", "The Giant", "Bob", "Pete Martell", "Dr. Jacoby", "Laura Palmer", "Nadine Hurley"]

  function getQuote () {
    var randomNum = Math.floor((Math.random()*whatTheySaid.length));
    var randQuote = whatTheySaid[randomNum];
    var randPerson = whoSaidIt[randomNum];
    $("#quote").text(randQuote);
    $("#person").text("--" + randPerson);
      }
    var url = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
$("#getMessage").click( function(){
  getQuote();
    });
  
    $("#twitter-share-anchor").on("click", function(event) {
      window.open("https://twitter.com/intent/tweet?text=" + $("#quote").html() + "    " + $("#person").html());
    });
});