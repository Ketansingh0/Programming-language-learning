public class Binary_search {
    // iterative binary search
    // public static int search(int arr[], int x){
    //     int low = 0;
    //     int high = arr.length - 1;

    //     while(low <= high){
    //         int mid = low + (high - low) / 2;
    //         if(arr[mid] == x){
    //             return mid;
    //         }
    //         if (arr[mid]<x){
    //             low = mid + 1;
    //         }else {
    //             high = mid - 1;
    //         }
    //     }
    //     return -1;
    // }
    // Recursive binary search
    public static int search(int arr[], int low, int high, int x){
        while(low <= high){
            int mid = low + (high - low) / 2;
            if(arr[mid] == x){
                return mid;
            }
            if(arr[mid] > x){
                return search(arr, low, mid-1, x);
            }else {
                return search(arr, mid + 1, high, x);
            }
        }
        return -1;
    }

    public static void main(String[] args){
        int array1[] = {2, 3, 4, 10, 40};
        int x = 10;
        int result = search(array1, 0, array1.length-1, x);
        if (result == -1) {
            System.out.println("Element is not present in array");
        }else {
            System.out.println("Element is present at index " +result);
        }
    }
}
