// Chương trình tính lương nhân viên
/**
 * Đầu vào
 * - Khai báo biến btnLuong và liên kết với phần tử id btnLuong bên file html
 * - Khai báo biến salary và liên kết với phần tử id salary bên file html
 * - Khai báo biến day_work và liên kết với phần tử id day_work bên file html
 * - parseFloat là chuyển đổi giá trị đầu vào chuỗi -> float
 * Xử lý
 * - Khai báo biến luong = 0
 * - Tính luong = salary * day_work;
 * - Khai báo biến formattedMoney để số tiền hiển thị đẹp hơn
 * Đầu ra
 * - Khai báo biến result
 * - Log biến result
 * - Hiển thị kết quả
 */
let btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function () {
  let salary = parseFloat(document.getElementById("salary").value);
  let day_work = parseFloat(document.getElementById("day_work").value);

  let luong = 0;
  luong = salary * day_work;
  let formattedMoney = new Intl.NumberFormat("vn-VN").format(luong);

  let result = "Lương của bạn là: " + formattedMoney;
  console.log(result);
  document.getElementById("pInform").innerHTML = result;
};

// Style cho các giá trị
let numberIds = ["salary", "day_work"];
numberIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("num_style");
  }
});

let resultIds = ["btnLuong"];
resultIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("result_style");
  }
});
