var draw = function(){
  var body = $(".tweet_box");
  body.html("")
  for(var i = window.streams.home.length - 1; i >= 0; i-- ){
    tweet = window.streams.home[i]
    // console.log(tweet);
    body.append(stringConstructor());

  }
}
var refresh = setInterval(draw, 1000);


var stringConstructor = function() {
      return ("<div class='tweet'><a href='#'>" +tweet.user + "</a>: " + "<span>"+tweet.message +"</span>"+ 
      "<br>" + tweet.created_at.toString().split(" G")[0] + "</div>");
}

var writeUserTweets = function(person){
  var body = $(".tweet_box");
  body.html("")
  for(var i = window.streams.users[person].length - 1; i >= 0; i-- ){
    tweet = window.streams.users[person][i]
    // console.log(tweet);
    body.append(stringConstructor());

  }
}

var userClicked = function(person) {
  console.log("User clicked");
  clearInterval(refresh);  //stops refresh of all tweets
  refresh = setInterval(function(){
    writeUserTweets(person);
  }, 1000);
  //replace contents of tweetbox with tweets from "user"
  //start refresh of tweets from "user"
}
 
var mainClicked = function() {
  clearInterval(refresh);
  refresh = setInterval(draw, 1000);
}

$(document).ready(function() {
  $(".title").click(mainClicked);
  $(".tweet_box").on('click', 'a', function(e) {
      e.preventDefault();
      //debugger
      userClicked(e.target.innerText);
  });
  // Handler for .ready() called.
});