var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//----------------------------------------------------1
function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        throw new Error("Массив должен содержать ровно 10 элементов");
    }
    var firstPart = numbers.slice(0, 3).join('');
    var secondPart = numbers.slice(3, 6).join('');
    var thirdPart = numbers.slice(6, 10).join('');
    return "\"(".concat(firstPart, ") ").concat(secondPart, "-").concat(thirdPart, "\"");
}
var resultNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(resultNumber);
function example(string) {
    var answer = string.split('');
    return answer;
}
var str1 = "12345";
console.log(example(str1));
//----------------------------------------------------2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
//console.log(Challenge.solution(10))
var soo = prompt("Введите число");
if (soo !== null) {
    var number = parseInt(soo, 10);
    console.log(Challenge.solution(number));
}
//---------------------------------------------------3
function rotate(numbers, k) {
    var n = numbers.length;
    k = k % n;
    var part1 = numbers.slice(n - k);
    var part2 = numbers.slice(0, n - k);
    numbers.splice.apply(numbers, __spreadArray(__spreadArray([0, n], part1, false), part2, false));
}
var numbers = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(numbers, k);
console.log(numbers);
//--------------------------------------------------4
function findMediana(nums1, nums2) {
    var nums3 = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var l = nums3.length;
    if (l % 2 === 0) {
        var mediana = (nums3[l / 2 - 1] + nums3[l / 2]) / 2;
        return mediana;
    }
    else {
        return nums3[Math.floor(l / 2)];
    }
}
var nums1 = [2, 3, 5];
var nums2 = [1, 4];
console.log(findMediana(nums1, nums2));
