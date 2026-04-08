const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

const dropdown = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector("#fromSelect");
const toCurr = document.querySelector("#toSelect");
const convertBtn = document.querySelector("#convertBtn");
const amountInput = document.querySelector("#amountInput");
const result = document.querySelector("#result");
const exchangeInfo = document.querySelector("#exchangeInfo");
const mainForm = document.querySelector("#mainForm");
const skeletonLoader = document.querySelector("#skeletonLoader");
const swapBtn = document.querySelector("#swapBtn");

// Hide skeleton after form loads
window.addEventListener("load", () => {
  setTimeout(() => {
    skeletonLoader.classList.add("hidden");
    mainForm.classList.remove("hidden");
  }, 1000);
});

// Populate currency dropdowns
for (let select of dropdown) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);

    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
}

// Update flag when currency changes
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  
  if (element.name === "from") {
    document.querySelector("#fromFlag").src = newSrc;
  } else if (element.name === "to") {
    document.querySelector("#toFlag").src = newSrc;
  }
};

// Swap currencies
swapBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;
  
  updateFlag(fromCurr);
  updateFlag(toCurr);
  
  // Re-trigger conversion
  convertCurrency();
});

// Convert on button click
convertBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  convertCurrency();
});

// Auto-convert on input change
amountInput.addEventListener("change", convertCurrency);
amountInput.addEventListener("keyup", convertCurrency);

// Main conversion function
async function convertCurrency() {
  let amtVal = amountInput.value.trim();
  
  if (amtVal === "" || amtVal < 0 || isNaN(amtVal)) {
    amtVal = 1;
    amountInput.value = "1";
  }

  try {
    convertBtn.disabled = true;
    exchangeInfo.textContent = "Loading...";
    
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    let data = await response.json();
    let rate = data.rates[toCurr.value];
    let finalAmount = (amtVal * rate).toFixed(2);

    // Format the result with currency symbols
    result.textContent = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    exchangeInfo.textContent = `1 ${fromCurr.value} = ${rate.toFixed(4)} ${toCurr.value}`;
    
    convertBtn.disabled = false;
  } catch (error) {
    result.textContent = "❌ Error fetching rate";
    exchangeInfo.textContent = "Please try again";
    convertBtn.disabled = false;
    console.error("Error:", error);
  }
}

// Auto-convert when page loads with default currencies
window.addEventListener("load", () => {
  setTimeout(() => {
    convertCurrency();
  }, 1200);
});



