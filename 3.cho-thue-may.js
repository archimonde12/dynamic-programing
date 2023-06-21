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
Trung tâm tính toán hiệu năng cao nhận được đơn đặt hàng của 𝑛 khách hàng. 
Khách hàng 𝑖 muốn sử dụng máy trong khoảng thời gian từ 𝑎𝑖 đến 𝑏𝑖 và trả tiền thuê là 𝑐𝑖. 
Hãy bố trí lịch thuê máy để tổng số tiền thu được là lớn nhất mà thời gian sử dụng máy của 2 khách hàng bất kì được phục vụ đều không giao nhau (cả trung tâm chỉ có một máy cho thuê).
*/

const guild_msg = 'Nhap vao thong tin thue may start1,end1,pay1,start2,end2,pay2,...?\n'
const main_func = (input) => {
    //Bien doi input
    let raw_array = input.split(",").map(Number)
    if (raw_array.length % 3 !== 0) throw new Error("invalid input")
    let array = []
    for (let i = 0; i < raw_array.length; i += 3) {
        array[i / 3] = {
            start: raw_array[i],
            end: raw_array[i + 1],
            pay: raw_array[i + 2]
        }
    }
    console.log(`Day vua nhap:`);
    array.forEach(el => console.log(el))
    //Sorting ascending ending time 
    array.sort((a, b) => a.end - b.end)
    console.log(`Day vua nhap theo thoi gian ket thuc tang dan:`);
    array.forEach(el => console.log(el))
    let l = []
    let sub_arr = []
    for (let i = 0; i < array.length; i++) {
        l[i] = array[i].pay
        sub_arr[i] = []
        for (let j = 0; j < i; j++) {
            if ((array[j].end <= array[i].start) && (l[i] < l[j] + array[i].pay)) {
                l[i] = l[j] + array[i].pay;
                sub_arr[i] = [...sub_arr[j]]
            }
        }
        sub_arr[i].push(array[i])
    }
    console.log(l)
    console.log(sub_arr)
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
