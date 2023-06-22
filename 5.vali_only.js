const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var getFilename = function (str) {
    return str.split('\\').pop().split('/').pop();
}
let file_name = getFilename(__filename).split(".")
file_name.pop()
console.log(file_name.join("."))

/*
Cho 𝑛 vật, vật 𝑖 nặng 𝐴𝑖 và có giá trị 𝐵𝑖. 
Hãy chọn ra một số vật để cho vào balô sao cho tổng khối lượng không vượt quá 𝑊 và tổng giá trị là lớn nhất. 
Chú ý rằng mỗi vật có thể được chọn một lần.
*/
const guild_msg = 'Nhap vao thong tin do vat: W1,V1,W2,V2?\n'
const main_func = (input) => {
    guild_msg_2 = 'Nhap vao thong tin khoi luong balo: W?\n'
    const main_func_2 = (input2) => {
        const raw_items = input.split(",").map(Number)
        const max_weight = Number(input2)
        const items = []
        for (let i = 0; i < raw_items.length; i += 2) {
            items[i / 2] = {
                weight: raw_items[i],
                value: raw_items[i + 1],
            }
        }
        console.log(`Day vua nhap:`);
        items.forEach(el => console.log(el))
        console.log(`Khoi luong toi da vali la:`, max_weight);
        items.unshift({ weight: 0, value: 0 })
        const L = []
        for (let i = 0; i < items.length; i++) {
            L[i] = []
            for (let j = 0; j <= max_weight; j++) {
                if (i === 0 || j === 0) {
                    L[i][j] = 0
                } else {
                    L[i][j] = L[i - 1][j]
                    if (j >= items[i].weight) {
                        L[i][j] = Math.max(L[i][j], L[i-1][j - items[i].weight] + items[i].value)
                    }
                }

            }
        }
        console.table(L)

    }
    readline.question(guild_msg_2, main_func_2);
}
readline.question(guild_msg, main_func);
