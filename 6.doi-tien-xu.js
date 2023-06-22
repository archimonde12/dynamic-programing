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
Ở đất nước Omega người ta chỉ tiêu tiền xu. Có 𝑁 loại tiền xu, loại thứ 𝑖 có mệnh giá là 𝐴𝑖 đồng. 
Một người khách du lịch đến Omega du lịch với số tiền 𝑀 đồng. 
Ông ta muốn đổi số tiền đó ra tiền xu Omega để tiện tiêu dùng. 
Ông ta cũng muốn số đồng tiền đổi được là ít nhất (cho túi tiền đỡ nặng khi đi đây đi đó). 
Bạn hãy giúp ông ta tìm cách đổi tiền.
*/

const guide_msg = 'Nhap vao thong tin cac dong xu: V1,V2?\n'
const main_func = (input) => {
    const guide_msg_2 = 'Nhap vao so tien muon doi: W?\n'
    const main_func_2 = (input2) => {
        const raw_items = input.split(",").map(Number)
        const max_weight = Number(input2)
        const items = []
        for (let i = 0; i < raw_items.length; i += 1) {
            items[i / 1] = {
                weight: raw_items[i],
                value: 1,
            }
        }
        console.log(`Day vua nhap:`);
        items.forEach(el => console.log(el))
        console.log(`Khoi luong toi da vali la:`, max_weight);
        items.unshift({ weight: 0, value: 0 })
        const L = []
        const B = []
        for (let i = 0; i < items.length; i++) {
            L[i] = []
            B[i] = []
            for (let j = 0; j <= max_weight; j++) {
                if (i === 0 && j > 0) {
                    L[i][j] = Infinity
                    B[i][j] = []
                } else if (j === 0) {
                    L[i][j] = 0
                    B[i][j] = []
                } else {
                    L[i][j] = L[i - 1][j]
                    B[i][j] = B[i - 1][j]
                    if (j >= items[i].weight) {
                        if (L[i][j] >= (L[i][j - items[i].weight] + items[i].value)) { 
                            L[i][j] = Math.min(L[i - 1][j], L[i][j - items[i].weight] + items[i].value)
                            B[i][j] = [...B[i][j - items[i].weight], i]
                        }
                    }
                }

            }
        }
        console.table(L[items.length-1][max_weight])
        console.log(B[items.length-1][max_weight])

    }
    readline.question(guide_msg_2, main_func_2);
}
readline.question(guide_msg, main_func);
