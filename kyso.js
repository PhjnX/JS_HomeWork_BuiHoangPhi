// Chương trình tính tổng 2 ký số
/**
 * Đầu vào
 * - Khai báo biến btnMoney và liên kết với phần tử id btnMoney bên file html
 * - Khai báo biến money và liên kết với phần tử id money bên file html
 * - parseFloat là chuyển đổi giá trị đầu vào chuỗi -> float
 * Xử lý
 * - Khai báo biến MoneyChange = 0
 * - Tính MoneyChange = money * 23500
 * - Khai báo biến formattedMoney để số tiền hiển thị đẹp hơn
 * Đầu ra
 * - Khai báo biến result
 * - Log biến result
 * - Khai báo biến pResult và liên kết với phần từ id pMoney và in ra kết quả
 * - Hiển thị kết quả
 */
let btnTong = document.getElementById("btnTong");
btnTong.onclick = function () {
  let plus = parseInt(document.getElementById("plus").value);

  if (plus >= 10 && plus < 100) {
    let so_hang_dv = plus % 10;

    let so_hang_chuc = Math.floor(plus / 10);

    let result = so_hang_dv + so_hang_chuc;

    // Hiển thị kết quả
    document.getElementById("pTong").innerText = "Tổng hai ký số là: " + result;
  } else {
    // Thông báo nếu số không hợp lệ
    document.getElementById("pTong").innerText =
      "Vui lòng nhập một số có 2 chữ số!";
  }
};

// Style cho các giá trị
let numberIds = ["plus"];
numberIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("num_style");
  }
});

let resultIds = ["btnTong"];
resultIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("result_style");
  }
});
