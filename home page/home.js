var flag = 0;
print(flag);
function print(flag) {
  var arr = [
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_220812.jpg'></img>"
  ];

  let headline = document.getElementById("show1");
  headline.innerHTML = arr[0];

  setInterval(function () {
    if (flag == arr.length) {
      flag = 0;
    }
    headline.innerHTML = arr[flag];
    flag++;
  }, 4000);
}