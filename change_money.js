// Chương trình quy đổi tiền
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
 * - Hiển thị kết quả
 */

btnMoney = document.getElementById("btnMoney");
btnMoney.onclick = function () {
  let money = parseFloat(document.getElementById("money").value);

  let MoneyChange = 0;
  MoneyChange = money * 23500;
  let formattedMoney = new Intl.NumberFormat("vn-VN").format(MoneyChange);

  let result = "Giá trị quy đổi là: " + formattedMoney + "Vnd";
  console.log(result);
  document.getElementById("pMoney").innerHTML = result;
};

// Style cho các giá trị
let numberIds = ["money"];
numberIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("num_style");
  }
});

let resultIds = ["btnMoney"];
resultIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("result_style");
  }
});
