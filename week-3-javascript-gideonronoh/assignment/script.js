//ASSIGNMENT
// Function to get the values from the input fields
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

// Function to display the result
function displayResult(result) {
    document.getElementById('result').textContent = result;
}

// Event listeners for the buttons
document.getElementById('addBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(add(num1, num2));
    updateChart(num1, num2, 'add');
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(subtract(num1, num2));
    updateChart(num1, num2, 'subtract');
});

document.getElementById('divideBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(divide(num1, num2));
    updateChart(num1, num2, 'divide');
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(multiply(num1, num2));
    updateChart(num1, num2, 'multiply');
});

// Toggle message visibility
document.getElementById('toggleBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
});

// Functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Error: Division by zero");
        return "Error: Division by zero";
    }
}

function multiply(a, b) {
    return a * b;
}

// Initialize the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Number 1', 'Number 2', 'Result'],
        datasets: [{
            label: 'Values',
            data: [0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the chart
function updateChart(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
    }
    myChart.data.datasets[0].data = [num1, num2, result];
    myChart.update();
}

