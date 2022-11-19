// 問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
let num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        num.push(numbers[i]);
    }
}
function isEven() {
    console.log(num + 'は偶数です');
}
isEven();

// 問２
class Car {

    constructor(gas, number) {
        this.gas = gas;
        this.number = number;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です`)
    }
}

let gasNum = new Car('○○', '△△');
gasNum.getNumGas();