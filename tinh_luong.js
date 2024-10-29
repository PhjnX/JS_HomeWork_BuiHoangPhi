// Chương trình tính lương nhân viên
let btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function () {
  let salary = parseFloat(document.getElementById("salary").value);
  let day_work = parseFloat(document.getElementById("day_work").value);

  luong = salary * day_work;
  let formattedMoney = new Intl.NumberFormat("vn-VN").format(luong);

  let result = "Lương của bạn là: " + formattedMoney;
  console.log(result);
  let pResult = document.getElementById("pInform");
  pResult.innerHTML = result;
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
