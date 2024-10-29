// Chuơng trình tính giá trị trung bình của 5 số
let btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function () {
  let num_1 = parseFloat(document.getElementById("num_1").value);
  let num_2 = parseFloat(document.getElementById("num_2").value);
  let num_3 = parseFloat(document.getElementById("num_3").value);
  let num_4 = parseFloat(document.getElementById("num_4").value);
  let num_5 = parseFloat(document.getElementById("num_5").value);

  average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

  let result = "Trung bình cộng của 5 số là: " + average;
  console.log(result);
  let pResult = document.getElementById("pAverage");
  pResult.innerHTML = result;
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
