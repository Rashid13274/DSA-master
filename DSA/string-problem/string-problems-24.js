// import java.util.HashSet;
// import java.util.Set;

// public class HappyNumber {

//     // Function to compute the sum of the squares of the digits of a number
//     public static int sumOfSquares(int n) {
//         int sum = 0;
//         while (n > 0) {
//             int digit = n % 10;
//             sum += digit * digit;
//             n /= 10;
//         }
//         return sum;
//     }

//     // Function to determine if a number is a happy number
//     public static boolean isHappyNumber(int n) {
//         Set<Integer> seenNumbers = new HashSet<>();
//         while (n != 1 && !seenNumbers.contains(n)) {
//             seenNumbers.add(n);
//             n = sumOfSquares(n);
//         }
//         return n == 1;
//     }

//     public static void main(String[] args) {
//         int number = 44;
//         if (isHappyNumber(number)) {
//             System.out.println(number + " is a happy number.");
//         } else {
//             System.out.println(number + " is not a happy number.");
//         }
//     }
// }
