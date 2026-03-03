

// POPUP 1 OPENING AND CLOSING (Quote Form)
function openQuote() {
  document.getElementById("quoteOverlay").style.display = "block";
  document.getElementById("quotePopup").style.display = "block";
}
//CLOSING THE QUOTE FORM
function closeQuote() {
  document.getElementById("quoteOverlay").style.display ="none";
  document.getElementById("quotePopup").style.display="none";
}


// POPUP 2 (pRICE Planner)
function openQuotePlanner() {
  document.getElementById("quoteOverlay1").style.display ="block";
  document.getElementById("quotePopup1").style.display ="block";
}

//CLOSING THE QUOTE FORM
function closeQuotePlanner() {
  document.getElementById("quoteOverlay1").style.display = "none";
  document.getElementById("quotePopup1").style.display = "none";
}

//CODE FOR CALCULATING PRICE FOR THE QUOTES
document.getElementById("calculate").addEventListener("click", function () {

  //DEFINING VAR FOR CALCULATING THE PRICE
    let guests = parseInt(document.getElementById("guests").value);
    let foodCostPerPerson = parseFloat(document.getElementById("foodPackage").value);
    let total = guests * foodCostPerPerson;
    let addons = document.querySelectorAll(".addon:checked");
    addons.forEach(addon => {total += parseFloat(addon.value);});
    document.getElementById("totalPrice").textContent = total.toFixed(2);
});

//SLIDESHOW IMAGE MOVING ACROSS FRONT PAGE
let current = 0;
  const slides = document.getElementById('slides');
  const total = slides.children.length;

  function move(direction) {
    current = (current + direction + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
  }
  //AUTOMATIC SLIDE MOVEMENT EVERY 3 SECONDS
setInterval(() => move(1), 3000);