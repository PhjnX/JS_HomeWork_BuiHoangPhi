// Chương trình quy đổi tiền
btnMoney = document.getElementById("btnMoney");
btnMoney.onclick = function () {
let money = parseFloat(document.getElementById("money").value);

  MoneyChange = money * 23500;
  let formattedMoney = new Intl.NumberFormat("vn-VN").format(MoneyChange);

  let result = "Giá trị quy đổi là: " + formattedMoney + "Vnd";
  console.log(result);
  let pResult = document.getElementById("pMoney");
  pResult.innerHTML = result;
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