
const functions = {
  add: (num1, num2) => num1 + num2,
  
  // Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
  
  // var words = ['hello', 'world', 'this', 'is', 'great'];
  // smash(words); // returns "hello world this is great"
  
  // Smash Words
  smash: (words) => {
    return words.join().replace(/,/g,' ');        
  }


};

module.exports = functions;
