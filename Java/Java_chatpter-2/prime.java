import java.util.*;

public class prime {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    // for(int i=2;i  <=n; i++){
    // if(n%i==0){
    // System.out.println("Not prime");
    // return;
    // }
    // }
    // System.out.println("prime");
    int c = 2;
    boolean isPrime = true;
    while (c * c <= n) {
      if (n % c == 0) {
        isPrime = false;
        break;
      }
      c++;
    }
    if (n < 2) {
      System.out.println("Not a prime number");
    } else if (isPrime) {
      System.out.println("Prime number");
    } else {
      System.out.println("Not a prime number");
    }
    sc.close();
  }
}