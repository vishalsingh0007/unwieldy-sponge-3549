var flag = 0;
print(flag);
function print(flag) {
  var arr = [
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_230222.jpeg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/220223-fresho-days-fnv-460-Bangalore-22ndFEB.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_sbf_m_snackingstore_1600x460-250122.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_bev_m_beveragestore_1600x460-250122.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_GoodDiet_1600x460-250122.jpg'></img>",
  ];

  let headline = document.getElementById("show1"); //ye wo div hai jaha image append krni hai
  headline.innerHTML = arr[0];

  setInterval(function () {
    if (flag == arr.length) {
      flag = 0;
    }
    headline.innerHTML = arr[flag];
    flag++;
  }, 4000);
}

function show2() { }

//////////////login sighnup/////////////////
// let signUp = document.getElementById("sign-up");
let signIn = document.getElementById("sign-in");
// function signup() {
//   signUp.style.display = "flex";
//   signIn.style.display = "none";
// }

function signin() {
  // signUp.style.display = "none";
  signIn.style.display = "flex";
}

function closeOption() {
  // signUp.style.display = "none";
  signIn.style.display = "none";
}
closeOption();
function user_data() {
  var mobile = document.getElementById("mobile-email").value;
  var name = document.getElementById("name").value;
  var obj = {
    mobile: mobile,
    name: name,
  };
  var arr;
  arr = localStorage.getItem("user_cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = localStorage.getItem("user_cart");
    arr = JSON.parse(arr);
  }
  arr.push(obj);
  localStorage.setItem("user_cart", JSON.stringify(arr));
  // signIn.style.display = "none";
  // location.reload();
  var showname = document.getElementById("showname");
  arr = localStorage.getItem("user_cart");
  arr = JSON.parse(arr);
  showname.innerHTML = "hello " + arr[arr.length - 1].name;
  closeOption();
}
