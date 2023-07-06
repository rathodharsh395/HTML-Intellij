var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

var set1 = new Set(fullWordList);
var set2 = new Set(wordsToRemove);

var commonElements = [];

set1.forEach(function(element) {
  if (set2.has(element)) {
    commonElements.push(element);
  }
});

console.log(commonElements); // ['1','2','3']
document.write(commonElements)

