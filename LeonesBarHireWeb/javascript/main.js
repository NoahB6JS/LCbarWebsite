

//CODE FOR OPENING AND CLOSING QUOTE TAB

// POPUP 1 (Email Form)
function openQuote() {
  document.getElementById("quoteOverlay").style.display = "block";
  document.getElementById("quotePopup").style.display = "block";
}

function closeQuote() {
  document.getElementById("quoteOverlay").style.display = "none";
  document.getElementById("quotePopup").style.display = "none";
}


// POPUP 2 (Instant Planner)
function openQuotePlanner() {
  document.getElementById("quoteOverlay1").style.display = "block";
  document.getElementById("quotePopup1").style.display = "block";
}

function closeQuotePlanner() {
  document.getElementById("quoteOverlay1").style.display = "none";
  document.getElementById("quotePopup1").style.display = "none";
}


//CODE FOR CALCULATING PRICE FOR THE QUOTES

document.getElementById("calculate").addEventListener("click", function () {

    let guests = parseInt(document.getElementById("guests").value);
    let foodCostPerPerson = parseFloat(document.getElementById("foodPackage").value);

    // Base food cost
    let total = guests * foodCostPerPerson;

    // Add-ons
    let addons = document.querySelectorAll(".addon:checked");
    addons.forEach(addon => {
        total += parseFloat(addon.value);
    });

    // Update price in the DOM
    document.getElementById("totalPrice").textContent = total.toFixed(2);
});