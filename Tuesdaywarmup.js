function typoglycemia(string) {
  var wordArray = string.split(' ');
  // console.log(wordArray)
  var innerCharArray = [];

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    //if statement for all words that are greater than 4
    if (word.length < 3) {
      innerCharArray.push(word);
    } else {
      //take the inner characters and shuffle them
      var wordLength = wordArray[i].length;
      var middle = wordArray[i].slice(1, (wordLength - 1));
      innerCharArray.push(middle);
      // console.log(middle);
    }
  }
  console.log(innerCharArray);

}

//https://www.reddit.com/r/dailyprogrammer/comments/3s4nyq/20151109_challenge_240_easy_typoglycemia/
//
// function typoglycemia(string) {
//   //determine how many words are in teh string
//   var wordArray = string.split(' ');
//   //split by the spaces
//   //for loop to go through each word
//   for (var i = 0; i < wordArray.length; i++) {
//
//     // var firstLetter = wordArray[i].charAt(0);
//     var wordLength = wordArray[i].length;
//     // var lastLetter = wordArray[i].charAt(wordLength - 1);
//
//     var middle = wordArray[i].slice(1, (wordLength - 1));
//     var newArray = middle.split();
//     var n = newArray.length;
//
//     var nextArray = [];
//     for (var i = 0; i < n; i++) {
//       nextArray.push(newArray[0].charAt(i));
//     }
//     console.log(nextArray);
//
//     // for (var i = n - 1; i > 0; i--) {
//     //   var j = Math.floor(Math.random() * (i + 1));
//     //   var temp = newArray[0].charAt(i);
//     //   newArray[i] = newArray[j];
//     //   newArray[j] = temp;
//     // }
//     // return newArray.join('');
//   }
//   // return wordArray.join(' ')
//   // console.log(jumbled);
// }


console.log(typoglycemia('According to a research team at Cambridge University'));

//NOTES
//local module
// var math = require('./nodeNotes.js')
// console.log(math);
