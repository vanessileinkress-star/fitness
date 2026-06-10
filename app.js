Chart.defaults.color = '#6e6e73';
Chart.defaults.font.family =
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial";

const labels = ['14', '15', '16', '17', '18', '19', '20'];

const sleepData = [7.8, 8.4, 8.1, 8.3, 8.3, 9.0, 7.3];
const stressData = [18.7, 18.4, 22.2, 22.0, 22.2, 31.7, 16.9];
const stepsData = [8400, 11200, 7800, 9500, 14500, 12300, 8900];

function baseOptions() {
    return {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#eeeeee' } }
        }
    };
}

// SLEEP
new Chart(document.getElementById('sleepChart'), {
    type: 'line',
    data: {
        labels,
        datasets: [{
            data: sleepData,
            borderColor: '#007aff',
            backgroundColor: 'rgba(0,122,255,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: baseOptions()
});

// STRESS
new Chart(document.getElementById('stressChart'), {
    type: 'line',
    data: {
        labels,
        datasets: [{
            data: stressData,
            borderColor: '#ff3b30',
            backgroundColor: 'rgba(255,59,48,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: baseOptions()
});

// STEPS
new Chart(document.getElementById('stepsChart'), {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            data: stepsData,
            backgroundColor: '#007aff',
            borderRadius: 6
        }]
    },
    options: baseOptions()
});

// ACTIVITY
new Chart(document.getElementById('activityChart'), {
    type: 'doughnut',
    data: {
        labels: ['Strength', 'Cycling', 'HIIT', 'Walking'],
        datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: [
                '#007aff',
                '#5856d6',
                '#ff3b30',
                '#34c759'
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#6e6e73'
                }
            }
        },
        cutout: '70%'
    }
});
