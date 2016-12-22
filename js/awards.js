// format
var awards = {
  '1411133718':
     { permalinks:
        [ '',
          '',
          '' ],
       '+1': 1,
       smiley: 1,
       ok_hand: 1 }
};

var mostReactions = 0;
var mostReactionPermalink = [];
var mostDifferentReactions = 0;
var mostDifferentReactionLink = [];
$.each(awards, function(key, value){
  var permalinks = value["permalinks"]
  delete(value.permalinks);
  var totalCount = 0;
  $.each(value, function(emoji_key, count){
    totalCount += count;
  });

  if(totalCount >= mostReactions){
    mostReactions = totalCount;
    console.log(permalinks);
    // mostReactionPermalink.push(permalinks);
  }
  if(Object.keys(value).length >= mostDifferentReactions) {
    // mostDifferentReactionLink.push(permalinks);
    console.log(mostDifferentReactionLink);
    mostDifferentReactions = Object.keys(value).length;
  }
});
