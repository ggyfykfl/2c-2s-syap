//----------------------------------------------------1
function createPhoneNumber (numbers: number[]): string{
    if (numbers.length !==10){
        throw new Error("Массив должен содержать ровно 10 элементов")
    }
    const firstPart=numbers.slice(0,3).join('');
    const secondPart=numbers.slice(3,6).join('');
    const thirdPart=numbers.slice(6,10).join('');

    return `"(${firstPart}) ${secondPart}-${thirdPart}"`
}

const resultNumber=createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
console.log(resultNumber)


function example(string: string):string[]{
const answer:string[]=string.split('');
return answer
}
const str1="12345";
console.log(example(str1))
//----------------------------------------------------2

class Challenge{
    static solution(number: number): number{
        if (number<0){
            return 0;
        }
        let sum=0;
        for(let i=0; i<number;i++){
            if(i % 3 ===0 || i % 5 ===0){
                sum+=i;
            }
        }
        return sum;
    }
}
//console.log(Challenge.solution(10))
const soo=prompt("Введите число");
if(soo!==null){
    const number=parseInt(soo,10)
    console.log(Challenge.solution(number))
}

//---------------------------------------------------3

function rotate(numbers: number[], k: number){
    let n=numbers.length
    k=k%n
    let part1=numbers.slice(n-k)
    let part2=numbers.slice(0,n-k)
    numbers.splice(0,n,...part1,...part2)
}
let numbers:number[]=[1,2,3,4,5,6,7]
let k:number=3
rotate(numbers,k)
console.log(numbers)

//--------------------------------------------------4

function findMediana(nums1: number[], nums2:number[]): number{
    let nums3=nums1.concat(nums2).sort((a,b)=>a-b)
    let l=nums3.length
    if(l%2===0){
        let mediana=(nums3[l/2-1]+nums3[l/2])/2
        return mediana
    }
    else{
        return nums3[Math.floor(l/2)]
    }
}
let nums1:number[]=[2,3,5]
let nums2:number[]=[1,4]
console.log(findMediana(nums1,nums2))