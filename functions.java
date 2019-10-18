public class Main {
  public static void main(String[] args) {

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

}