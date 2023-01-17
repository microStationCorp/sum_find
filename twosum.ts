let in_arr = [9, 2, 4, 8, 1, 3, 1, 2, 22, 34, 21, 4, 53, 12];
let stack: number[] = [];
let tg = 13;
let get_flag = false;

function recursion(d: number, arr: number[]) {
  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (d == arr[i]) {
        get_flag = true;
        stack.push(arr[i]);
        break;
      } else if (d > arr[i]) {
        let d1 = d - arr[i];
        stack.push(arr[i]);
        recursion(d1, arr.slice(i + 1));
        if (get_flag) {
          break;
        } else {
          stack.pop();
        }
      }
    }
  }
}

recursion(tg, in_arr);
if (get_flag) {
  console.log("result:", stack);
} else {
  console.log("result:nothing found");
}
