document.getElementById("loan-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let loanAmount = parseFloat(document.getElementById("loan-amount").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    let tenure = parseFloat(document.getElementById("loan-tenure").value) * 12;
    
    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
    let totalPayment = emi * tenure;
    let totalInterest = totalPayment - loanAmount;

    document.getElementById("emi-result").textContent = emi.toFixed(2);
    document.getElementById("interest-result").textContent = totalInterest.toFixed(2);
    document.getElementById("total-result").textContent = totalPayment.toFixed(2);
});

const ctx = document.getElementById("loan-chart").getContext("2d");


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const principalData = [5000, 4800, 4500, 4200, 3900, 3500]; 
const interestData = [200, 180, 160, 140, 120, 100]; 

const loanChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: months,
        datasets: [
            {
                label: "Principal Paid",
                data: principalData,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
                label: "Interest Paid",
                data: interestData,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: "top" }
        }
    }
});

