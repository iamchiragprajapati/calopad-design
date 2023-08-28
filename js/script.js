const ctx = document.getElementById('myChart');

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
        label: '',
        data: [180, 220, 300, 60, 160, 263, 500],
        backgroundColor: ['#FF6B00'],
        borderColor: ['#FF6B00'],
        borderWidth: 3
    }]
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200
                }

            }
        },
        plugins: {
            legend: {
                display: false
            }
        },

        tension: 0.5
    }
};
ctx.width = '100vw';

// Create the chart
const myChart = new Chart(ctx, config);