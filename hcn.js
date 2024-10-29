// Chương trình tính chu vi, diện tích hình chữ nhật
btnHcn = document.getElementById("btnHcn");
btnHcn.onclick = function () {
  let chieu_dai = parseInt(document.getElementById("chieu_dai").value);
  let chieu_rong = parseInt(document.getElementById("chieu_rong").value);

  chuvi = (chieu_dai + chieu_rong) * 2;
  dientich = chieu_dai * chieu_rong;

  let result1 = "Chu vi hình chữ nhật là: " + chuvi;
  let result2 = "Diện tích hình chữ nhật là: " + dientich;
  console.log(result1);
  console.log(result2);
  let pResult1 = document.getElementById("pChuvi");
  let pResult2 = document.getElementById("pDientich");
  pResult1.innerHTML = result1;
  pResult2.innerHTML = result2;
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
