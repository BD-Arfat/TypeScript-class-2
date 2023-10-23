var string1:string[]=['arfat', 'rifat','shifat', 'lofat'];
var string2:string[]=['maruf','karup','tarup','carup'];


var [str1, str2, str3]=string1;
console.log(str1, str2, str3)

string1.push(...string2);
// console.log(string1);

var herScore = (score:number):number=>{
    return score;
};

// console.log(herScore(1))

var sumNumbers = (...sumNumber:number[]):number=>{
    let sum:number = 0;
    sumNumber.map(n=>{
        sum = sum+n;
    })
    return sum;
}
// console.log(sumNumbers(1,8,5,4,9,5,8));

var heroStrings = (...heroString:string[]):void =>{

    // heroString.map(stn => console.log(stn))
   
};

heroStrings('arfat', 'lisa', 'tisha', 'sana', 'rifat', 'saoud')