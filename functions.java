public class Main {
  public static void main(String[] args) {

  }

  // find the largest prime factor
  public static int getLargestPrime(int number){
     if(number <= 1){
         return -1;
     }
     int largestPrime = 0;
     int prime = 0;

     for(int i = 2; i <= number; i++){
        if(number % i == 0){
            // check if i is prime
            for(int a = 2; a <= i; a++){
                if(i % a == 0){
                    prime = a;
                    break;
                }
            }
        }
        // check if the prime factor of i is the greatest prime
        if(prime > largestPrime){
            largestPrime = prime;
        }
     }
     return largestPrime;
    }

  // find the greatest common divisor for two numbers
  public static int getGreatestCommonDivisor(int first, int second){
      if(first < 10 || second < 10){
          return -1;
      }
      int greatestCommonDiv = 0;
      for(int i = first < second ? first : second; i >= 1; i--){
          if(first % i == 0 && second % i == 0){
              greatestCommonDiv = i;
              break;
          }
      }
      return greatestCommonDiv;
  }

  public static int getEvenDigitSum(int number){
        if(number < 0){
            return -1;
        }
        int sum = 0;
        while(number > 0){
            int digit = number % 10;
            if(digit % 2 == 0){
                sum += digit;
            }
            number /= 10;
        }
        return sum;
    }

    // check if a number is palindrome
    public static boolean isPalindrome(int number){
        int reversed = 0, numberToReverse = number;

        while(numberToReverse != 0){
            reversed = reversed * 10 + numberToReverse % 10;
            numberToReverse /= 10;
        }
        if(number == reversed){
            return true;
        }
        return false;
    }

    // sum the digits of an integer
    public static int sumDigits(int number){
        if(number >= 10){
            int sum = 0;
            while (number > 0) {
                System.out.println("remainder " + number % 10);
                sum += number %10;
                // drop the least-significant digit
                number /= 10;
            }
            return sum;
        }
        return -1;
    }

    // check if a positive integer is equal to the sum of its proper positive divisors
    public static boolean isPerfectNumber(int number){
        if(number< 1){
            return false;
        }
        // track the current factor to test and the total of integer factors
        int totalFactors = 0;
        int factor = 1;
        // add up all of the factors less than the number
        while(factor < number){
            if(number % factor == 0){
                totalFactors += factor;
            }
            factor++;
        }
        // compare the total factors to the number. If they equal return true. Else return false.
        if(totalFactors == number){
            return true;
        }
        return false;
    }

    // reverse an array
    public static void reverseArray(int[] array){

        int maxIndex = array.length - 1;
        int halfLength = array.length / 2;
        for(int i = 0; i< halfLength; i++){
            int temp = array[i];
            array[i] = array[maxIndex- i];
            array[maxIndex - i ] = temp;
        }
    }
}