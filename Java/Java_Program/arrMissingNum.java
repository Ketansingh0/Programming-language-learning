
class arrMissingNum {
  public static void main(String[] args) {
    int[] arr = {2,3,1,4,6,7,8};
    int res = missingNum(arr);
    System.out.println(res);
  }
  static int missingNum(int[] arr){
    int n = arr.length+1;
    long expectedSum = n * (n+1) / 2;
    long currSum = 0;
    for(int i = 0; i<arr.length; i++){
      currSum += arr[i];
    }
    return (int)(expectedSum - currSum);
  }
}