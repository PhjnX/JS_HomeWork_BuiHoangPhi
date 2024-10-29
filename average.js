// Chuơng trình tính giá trị trung bình của 5 số
/**
 * Đầu vào
 * - Khai báo biến btnAverage và liên kết với phần tử id btnAverage bên file html
 * - Khai báo biến (num_1, num_2, num_3, num_4, num_5) và liên kết với phần tử id (num_1, num_2, num_3, num_4, num_5) bên file html
 * - parseFloat là chuyển đổi giá trị đầu vào chuỗi -> float
 * Xử lý
 * - Khai báo biến average = 0
 * - Tính average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5
 * Đầu ra
 * - Khai báo biến result
 * - Log biến result
 * - Khai báo biến pResult và liên kết với phần từ id pAverage và in ra kết quả
 * - Hiển thị kết quả
 */

let btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function () {
  let num_1 = parseFloat(document.getElementById("num_1").value);
  let num_2 = parseFloat(document.getElementById("num_2").value);
  let num_3 = parseFloat(document.getElementById("num_3").value);
  let num_4 = parseFloat(document.getElementById("num_4").value);
  let num_5 = parseFloat(document.getElementById("num_5").value);

  let average = 0;
  average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

  let result = "Trung bình cộng của 5 số là: " + average;
  console.log(result);
  document.getElementById("pAverage").innerHTML = result;
};

// Style cho các giá trị
let numberIds = ["num_1", "num_2", "num_3", "num_4", "num_5"];
numberIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("num_style");
  }
});

let resultIds = ["btnAverage"];
resultIds.forEach((id) => {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add("result_style");
  }
});
