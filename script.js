// ---------------- Tip Calculator ----------------
function calculateTip() {
    const bill = parseFloat(document.getElementById('billAmount')?.value);
    const tipPercent = parseFloat(document.getElementById('tipPercent')?.value);
    const people = parseInt(document.getElementById('peopleCount')?.value);

    if (bill == null || tipPercent == null || people == null || isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people < 1) {
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;

    document.getElementById('tipResult').innerHTML =
        `Tip: $${tipAmount.toFixed(2)}<br>
         Total: $${totalAmount.toFixed(2)}<br>
         ${people > 1 ? `Per Person: $${perPerson.toFixed(2)}` : ''}`;
    document.getElementById('tipResult').style.display = 'block';
}

// ---------------- Unit Converter ----------------
function convertUnits() {
    const value = parseFloat(document.getElementById('convertValue')?.value);
    const from = document.getElementById('convertFrom')?.value;
    const to = document.getElementById('convertTo')?.value;

    if (value == null || isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    let result;
    if (from === 'miles' && to === 'km') result = value * 1.60934;
    else if (from === 'km' && to === 'miles') result = value / 1.60934;
    else if (from === 'lbs' && to === 'kg') result = value * 0.453592;
    else if (from === 'kg' && to === 'lbs') result = value / 0.453592;
    else if (from === 'celsius' && to === 'fahrenheit') result = (value * 9 / 5) + 32;
    else if (from === 'fahrenheit' && to === 'celsius') result = (value - 32) * 5 / 9;
    else result = value;

    document.getElementById('convertResult').innerHTML =
        `${value} ${from} = ${result.toFixed(2)} ${to}`;
    document.getElementById('convertResult').style.display = 'block';
}

// ---------------- Password Generator ----------------
function generatePassword() {
    const length = parseInt(document.getElementById('passLength')?.value);
    const includeUppercase = document.getElementById('uppercase')?.checked;
    const includeNumbers = document.getElementById('numbers')?.checked;
    const includeSymbols = document.getElementById('symbols')?.checked;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*";

    if (!charset) {
        alert("Please select at least one character type");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('passwordResult').innerHTML =
        `Generated Password: <strong>${password}</strong>`;
    document.getElementById('passwordResult').style.display = 'block';
}

// ---------------- Age Calculator ----------------
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate');
    if (!birthDateInput) return;

    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        alert("Please select a valid date");
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        age--;
        months += 12;
    }

    document.getElementById('ageResult').innerHTML =
        `You are <strong>${age}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old`;
    document.getElementById('ageResult').style.display = 'block';
}

// ---------------- BMI Calculator ----------------
function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    if (!heightInput || !weightInput) return;

    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    const bmi = weight / (height * height);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById('bmiResult').innerHTML =
        `Your BMI: <strong>${bmi.toFixed(1)}</strong><br>
         Category: <strong>${category}</strong>`;
    document.getElementById('bmiResult').style.display = 'block';
}

// ---------------- Currency Converter ----------------
function convertCurrency() {
    const amountInput = document.getElementById('currencyAmount');
    const fromInput = document.getElementById('currencyFrom');
    const toInput = document.getElementById('currencyTo');

    if (!amountInput || !fromInput || !toInput) return;

    const amount = parseFloat(amountInput.value);
    const from = fromInput.value;
    const to = toInput.value;

    if (isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    const rates = {
        USD: { EUR: 0.85, GBP: 0.73, JPY: 110.25 },
        EUR: { USD: 1.18, GBP: 0.86, JPY: 129.75 },
        GBP: { USD: 1.37, EUR: 1.16, JPY: 151.20 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066 }
    };

    let result = from === to ? amount : amount * rates[from][to];

    document.getElementById('currencyResult').innerHTML =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    document.getElementById('currencyResult').style.display = 'block';
}
