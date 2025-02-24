// Function to generate random energy data
function generateEnergyData() {
    const solar = (Math.random() * 500).toFixed(2); // Solar energy in kW (0-500)
    const wind = (Math.random() * 300).toFixed(2);  // Wind energy in kW (0-300)
    const tidal = (Math.random() * 200).toFixed(2); // Tidal energy in kW (0-200)
    return { solar, wind, tidal };
}


// Function to update the dashboard
function updateDashboard() {
    const data = generateEnergyData();

    // Energy Generation
    document.getElementById('solar').textContent = data.solar;
    document.getElementById('wind').textContent = data.wind;
    document.getElementById('tidal').textContent = data.tidal;

    // Energy Consumption
    const consumption = (Math.random() * 800).toFixed(2); // Port energy usage in kW (0-800)
    const renewableSupply = (parseFloat(data.solar) + parseFloat(data.wind) + parseFloat(data.tidal)).toFixed(2);
    document.getElementById('consumption').textContent = consumption;
    document.getElementById('renewable-supply').textContent = renewableSupply;

    // Battery Storage
    const battery = (Math.random() * 1000).toFixed(2); // Battery storage in kWh (0-1000)
    document.getElementById('battery').textContent = battery;

    // Carbon Savings
    const co2Savings = (renewableSupply * 0.5).toFixed(2); // CO₂ savings in kg (0.5 kg per kW)
    document.getElementById('co2-savings').textContent = co2Savings;
}


// Update the dashboard every 2 seconds
setInterval(updateDashboard, 2000);


// Initialize the dashboard
updateDashboard();
