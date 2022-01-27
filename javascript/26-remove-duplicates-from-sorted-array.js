/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let arr_len = nums.length;
    if (arr_len == 0) {
        return 0;
    }
    if (arr_len == 1) {
        return 1;
    }
    let ptr1 = 0;
    let ptr2 = 0;
    while (ptr2 < arr_len) {
        if (nums[ptr1] != nums[ptr2]) {
            ptr1++;
            nums[ptr1] = nums[ptr2];
        }
        ptr2++;
    }
    return ptr1 + 1;
};
