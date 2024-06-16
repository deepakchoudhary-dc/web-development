list = JSON.parse(localStorage.getItem("list"));
let options = document.getElementById("options");
let sum = [];
let tableEl = document.getElementById("table-el");

for (let i = 0; i < list.length - 2; i = i + 3) {
  tableEl.innerHTML += `<tr><th>${i / 3 + 1}</th><th>${list[i + 1]}</th><th>${
    list[i]
  }</th><th>${list[i + 2]}</th><th>${list[i + 2] * list[i]}</th></tr>`;
  sum.push(list[i + 2] * list[i]);
}

let total = 0;
for (let j = 0; j < sum.length; j++) {
  total += sum[j];
}
document.getElementById("total-el").textContent = "Total : Rs." + total;
function order() {
  options.innerHTML = `<form id="paymentForm" onsubmit="handleOrder(event)">
        <label>Type here your full name:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Type your full name here" required>
        <br>
        <label>Type here your phone number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="e.g., 9693356423" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" required>
        <br>
        <label>Type here your location:</label>
        <input type="text" id="location" name="location" placeholder="e.g., 123 Main St" required>
        <br>
        <label>Type here your pincode:</label>
        <input type="text" id="pincode" name="pincode" placeholder="e.g., 400001" pattern="[0-9]{6}" title="Please enter a 6-digit pincode" required>
        <br>
         <label>Type here your card number:</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="e.g., 1234 5678 9012" pattern="[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}" title="Please enter a valid card number" required>
        <br>
        <label>Expiry Date:</label>
        <input type="month" id="expiryDate" name="expiryDate" required>
        <br>
        <label>Type here your CVV:</label>
        <input type="text" id="cvv" name="cvv" placeholder="e.g., 723" pattern="[0-9]{3}" title="Please enter a 3-digit CVV" required>
        <br>
        <button type="submit" id="pay">Pay Now</button>
    </form>`;
}

function handleOrder(event) {
  event.preventDefault();

  // Validate phone number
  const phoneNumberInput = document.getElementById("phoneNumber");
  if (!/^[0-9]{10}$/.test(phoneNumberInput.value)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  // Validate card number
  const cardNumberInput = document.getElementById("cardNumber");
  if (
    !/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/.test(cardNumberInput.value)
  ) {
    alert("Please enter a valid card number");
    return;
  }

  // Validate CVV
  const cvvInput = document.getElementById("cvv");
  if (!/^[0-9]{3}$/.test(cvvInput.value)) {
    alert("Please enter a valid 3-digit CVV");
    return;
  }

  // If all validations pass, proceed with order placement
  alert("Order placed successfully!");
  document.getElementById("paymentForm").reset();
  window.location.href = "index.html";
}
