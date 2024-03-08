const arr = [10, 13, 18, 19, 20, 24];
const key = 20;

let left = 0,
  right = arr.length - 1;
let mid = left + Math.round((right - left) / 2);
while (left <= right) {
  if (arr[mid] == key) {
    console.log(mid);
    return;
  }
  if (arr[mid] > key) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  mid = left + Math.round((right - left) / 2);
}

