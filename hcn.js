// Chương trình tính chu vi, diện tích hình chữ nhật
/**
 * Đầu vào
 * - Khai báo biến btnHcn và liên kết với phần tử id btnHcn bên file html
 * - Khai báo biến chieu_dai và liên kết với phần tử id chieu_dai bên file html
 * - Khai báo biến chieu_rong và liên kết với phần tử id chieu_rong bên file html
 * - parseFloat là chuyển đổi giá trị đầu vào chuỗi -> float
 * Xử lý
 * - Khai báo biến chuvi = 0
 * - Khai báo biến dientich = 0
 * - Tính chuvi = (chieu_dai + chieu_rong) * 2;
 * - dientich = chieu_dai * chieu_rong;
 * Đầu ra
 * - Khai báo biến result1
 * - Khai báo biến result2
 * - Log biến result1
 * - Log biến result2
 * - Hiển thị kết quả
 */
btnHcn = document.getElementById("btnHcn");
btnHcn.onclick = function () {
  let chieu_dai = parseInt(document.getElementById("chieu_dai").value);
  let chieu_rong = parseInt(document.getElementById("chieu_rong").value);

  let chuvi = 0;
  let dientich = 0;
  chuvi = (chieu_dai + chieu_rong) * 2;
  dientich = chieu_dai * chieu_rong;

  let result1 = "Chu vi hình chữ nhật là: " + chuvi;
  let result2 = "Diện tích hình chữ nhật là: " + dientich;

  console.log(result1);
  console.log(result2);

  // Hiển thị kết quả
  document.getElementById("pChuvi").innerText = result1;
  document.getElementById("pDientich").innerText = result2;
};

// Style cho các giá trị
let numberIds = ["chieu_dai", "chieu_rong"];
numberIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("num_style");
  }
});

let resultIds = ["btnHcn"];
resultIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("result_style");
  }
});
