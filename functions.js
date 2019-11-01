const functions = {
  // Return the sum of Triangular Numbers up to and including the nth triangular number
  // if 4 is given: 1 + 3 + 6 + 10 = 20
  sumTriangularNumbers: (n) => {
    //check if the parameter is valid
    if (n < 0) {
      return 0;
    }
    // keep track of the sum
    let sum = 0;
    // j is the current number. i + 1 is the interval
    for (let i = 0, j = 1; i < n; i++ , j += i + 1) {
      // add the triangle number to sum
      sum += j;
    }
    return sum;
  },


  add: (num1, num2) => num1 + num2,

  // Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  // var words = ['hello', 'world', 'this', 'is', 'great'];
  // smash(words); // returns "hello world this is great"

  // Smash Words
  smash: words => {
    return words.join().replace(/,/g, " ");
  },

  // Write a function called repeatString which repeats the given String src exactly count times.
  // repeatStr(6, "I") // "IIIIII"
  // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

  repeatStr: (n, s) => s.repeat(n),

  // given a number, find its opposite
  // 1: -1
  opposite: number => {
    return number * -1;
  },

  // create a function to check if a number is prime

  isPrime: num => {
    // check if the number is less than one
    if (num < 2) {
      return false;
    } else {
      // check if the number is divisable by anything other than itself
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  },

  // Given an array, find the int that appears an odd number of times.
  findOdd: A => {
    let count = {};
    let oddNumber;
    A.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    for (let item in count) {
      if (count[item] % 2 !== 0) {
        oddNumber = item;
      }
    }
    return parseInt(oddNumber);
  },

  // find how many unlucky Friday the 13th's there are in any given year
  unluckyDays: (year) => {
    //set up a count of Fridays to return out of the function
    let count = 0;
    //check each months 13th day
    for (let month = 0; month < 12; month++) {
      let d = new Date(year, month, 13);
      //if that day is a Friday increment the count by 1
      if (d.getDay() == 5) {
        count++;
      }
    }
    return count;
  },

  // given a sentence, find the longest word length
  findLongestWordLength: (str) => {
    let splitStr = str.split(' ')
    let maxWord = 0;
    splitStr.map((obj) => {
      if (obj.length > maxWord) {
        maxWord = obj.length;
      }
    })
    return maxWord;
  }


};

module.exports = functions;
