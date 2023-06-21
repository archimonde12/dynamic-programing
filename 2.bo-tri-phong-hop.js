const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var getFilename = function (str) {
    return str.split('\\').pop().split('/').pop();
}
console.log(getFilename(__filename).split(".")[0])

/*
Có 𝑛 cuộc họp, cuộc họp thứ 𝑖 bắt đầu vào thời điểm 𝐴𝑖 và kết thúc ở thời điểm 𝐵𝑖. 
Do chỉ có một phòng hội thảo nên 2 cuộc họp bất kì sẽ được cùng bố trí phục vụ nếu khoảng thời gian làm việc của chúng chỉ giao nhau tại đầu mút. 
Hãy bố trí phòng họp để phục vụ được nhiều cuộc họp nhất.
*/


const guild_msg = 'Nhap vao thong tin thue phong start1,end1,start2,end2,...?\n'
const main_func = (input) => {
    //Bien doi input
    let raw_array = input.split(",").map(Number)
    if (raw_array.length % 2 !== 0) throw new Error("invalid input")
    let array = []
    for (let i = 0; i < raw_array.length; i += 2) {
        array[i / 2] = {
            start: raw_array[i],
            end: raw_array[i + 1]
        }
    }
    console.log
    console.log(`Day vua nhap:`);
    array.forEach(el => console.log(el))
    //Sorting ascending ending time 
    array.sort((a, b) => a.end - b.end)
    console.log(`Day vua nhap theo thoi gian ket thuc tang dan:`);
    array.forEach(el => console.log(el))
    let l = []
    let sub_arr = []
    for (let i = 0; i < array.length; i++) {
        sub_arr[i] = []
        l[i] = 1
        for (let j = 0; j < i; j++) {
            if ((array[j].end <= array[i].start) && (l[i] < l[j] + 1)) {
                l[i] = l[j] + 1;
                sub_arr[i] = [...sub_arr[j]]
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
