// Initialize values
let waterIntake = 0; // Water in ounces
let caloriesBurned = 0; // Calories burned from walking

const waterDisplay = document.getElementById("water-display");
const caloriesDisplay = document.getElementById("calories-display");
const statusDisplay = document.getElementById("status-display");

const drinkWaterButton = document.getElementById("drink-water");
const walkStepsButton = document.getElementById("walk-steps");

// Function to update display
function updateDisplay() {
    waterDisplay.textContent = `${waterIntake} oz`;
    caloriesDisplay.textContent = `${caloriesBurned.toFixed(2)} kcal`;

    let hydrationRatio = (waterIntake / (caloriesBurned + 1)).toFixed(2); // Prevent division by zero

    // Update status message
    if (hydrationRatio >= 0.5) {
        statusDisplay.textContent = "💧 Well Hydrated!";
        statusDisplay.style.color = "#2ecc71";
    } else if (hydrationRatio >= 0.3) {
        statusDisplay.textContent = "⚠️ Drink More Water!";
        statusDisplay.style.color = "#f1c40f";
    } else {
        statusDisplay.textContent = "❌ Dehydrated!";
        statusDisplay.style.color = "#e74c3c";
    }
}

// Event Listeners
drinkWaterButton.addEventListener("click", function () {
    waterIntake += 8; // Add 8 oz of water
    updateDisplay();
});

walkStepsButton.addEventListener("click", function () {
    caloriesBurned += 100 * 0.04; // 100 steps = 4 calories
    updateDisplay();
});

// Initial display update
updateDisplay();
