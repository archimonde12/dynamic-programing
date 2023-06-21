const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var getFilename = function (str) {
    return str.split('\\').pop().split('/').pop();
}
console.log(getFilename(__filename).split(".")[0])

/*
Trung tâm tính toán hiệu năng cao nhận được đơn đặt hàng của 𝑛 khách hàng. 
Khách hàng 𝑖 muốn sử dụng máy trong khoảng thời gian từ 𝑎𝑖 đến 𝑏𝑖 và trả tiền thuê là 𝑐𝑖. 
Hãy bố trí lịch thuê máy để tổng số tiền thu được là lớn nhất mà thời gian sử dụng máy của 2 khách hàng bất kì được phục vụ đều không giao nhau (cả trung tâm chỉ có một máy cho thuê).
*/