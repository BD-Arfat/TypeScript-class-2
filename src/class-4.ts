

function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(8, 9)



function add2(num1: number, num2: number): number {
    return num1 + num2
};

add2(88, 99);


var add3 = (num1: number, num2: number): number => {
    return (num1 + num2)
};

add3(99, 100);


var numbars = [7, 8, 5, 4, 9];

var newArray = numbars.map((ele: number) => ele * ele);


var ropKotharGolpo: {
    names: string,
    balance: number,
    addBalance(money: number): number
} = {
    names: 'arfat',
    balance: 15,
    addBalance(money: number) {
        return this.balance + money;
    }
}