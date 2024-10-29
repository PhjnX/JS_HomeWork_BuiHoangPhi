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
