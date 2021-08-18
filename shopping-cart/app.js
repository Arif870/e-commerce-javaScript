function productNumberCount(product, price, isIncrease) {
  let productInput = document.getElementById(product + "-input");
  let productInputValue = productInput.value;
  let productNumber = parseFloat(productInputValue);
  if (isIncrease) {
    productNumber++;
    productInput.value = productNumber;
  } else if (productNumber > 0) {
    productNumber--;
    productInput.value = productNumber;
  }

  let productPrice = document.getElementById(product + "-amount");

  productPrice.innerText = productNumber * price;

  // sub total count
  calculateTotal();
}

function getInputValue(product) {
  let getInput = document.getElementById(product + "-input");
  let productNumber = parseFloat(getInput.value);
  return productNumber;
}
function calculateTotal() {
  let totalPhonePrice = getInputValue("phone") * 1230;
  let totalCasePrice = getInputValue("case") * 59;

  let totalSubTotal = totalCasePrice + totalPhonePrice;
  document.getElementById("sub-total").innerText = totalSubTotal;

  let tax = totalSubTotal / 10;
  let totalAmount = totalSubTotal + tax;

  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("totalAmount").innerText = totalAmount;
}
// case product details
document.getElementById("case-plus").addEventListener("click", () => {
  productNumberCount("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", () => {
  productNumberCount("case", 59, false);
});

// phone product details
document.getElementById("phone-plus").addEventListener("click", () => {
  productNumberCount("phone", 1230, true);
});
document.getElementById("phone-minus").addEventListener("click", () => {
  productNumberCount("phone", 1230, false);
});
