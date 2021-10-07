var container = document.querySelector(".container");
var seats = container.querySelectorAll(".seat");
var selectcount = 0;
var count = document.getElementById("count");
var total = document.getElementById("total");
var movie = document.getElementById("movie");
var totalamount = 0;
seats.forEach((seat) => {
  seat.addEventListener("click", function () {
    if (!seat.className.includes("occupied")) {
      if (seat.className.includes("selected")) {
        seat.className = "seat";
        selectcount -= 1;
        count.innerText = selectcount;
        totalamount = selectcount * movie.value;
        total.innerText = totalamount;
      } else {
        seat.className = "seat selected";
        selectcount += 1;
        count.innerText = selectcount;
        totalamount = selectcount * movie.value;
        total.innerText = totalamount;
      }
    }
  });
});
movie.addEventListener("click", function () {
  console.log(movie.value);
  console.log("satyam");
  totalamount = selectcount * movie.value;
  total.innerText = totalamount;
});
