const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var getFilename = function (str) {
    return str.split('\\').pop().split('/').pop();
}
console.log(getFilename(__filename).split(".")[0])
/*
Cho dãy 𝐴1,𝐴2,…,𝐴𝑛
. Hãy tìm một dãy con tăng có nhiều phần tử nhất của dãy.
*/

const guild_msg = 'Nhap vao day A1,A2,...,An?\n'
const main_func = (input) => {
    let array = input.split(",").map(Number)
    console.log(`Day vua nhap ${array}`);
    let l = []
    let sub_arr = []
    for (let i = 0; i < array.length; i++) {
        sub_arr[i] = []
        l[i] = 1
        for (let j = 0; j < i; j++) {
            if ((array[j] <= array[i]) && (l[i] < l[j] + 1)) {
                l[i] = l[j] + 1;
                sub_arr[i].push(array[j])
            }
        }
        sub_arr[i].push(array[i])
    }
    console.log(">> Day con dai nhat co do dai bang:", Math.max(...l))
    console.log(">> Cac day con do la:")
    for (let i = 0; i < l.length; i++) {
        if (l[i] === Math.max(...l)) {
            console.log(">>>>", ...sub_arr[i])
        }
    }
    readline.close();
}

readline.question(guild_msg, main_func);

