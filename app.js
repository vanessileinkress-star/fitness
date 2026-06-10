// 1. SCHLAF-CHART (Morgen-Sektion)
const ctxSleep = document.getElementById('sleepChart').getContext('2d');
const sleepChart = new Chart(ctxSleep, {
    type: 'bar',
    data: {
        labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
        datasets: [{
            label: 'Schlafzeit (Stunden)',
            data: [6.5, 7.2, 5.8, 8.0, 6.2, 8.5, 7.8], // Dummy-Daten
            backgroundColor: '#00ecbc',
            borderRadius: 5
        }, {
            label: 'WHO Empfehlung',
            data: [7, 7, 7, 7, 7, 7, 7], // Benchmark
            type: 'line',
            borderColor: '#ff5252',
            borderDash: [5, 5],
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: '#fff' } }
        },
        scales: {
            y: { ticks: { color: '#fff' }, grid: { color: '#2a2a2a' } },
            x: { ticks: { color: '#fff' }, grid: { color: '#2a2a2a' } }
        }
    }
});

// 2. SCHRITTE-CHART (Mittags-Sektion)
const ctxSteps = document.getElementById('stepsChart').getContext('2d');
const stepsChart = new Chart(ctxSteps, {
    type: 'line',
    data: {
        labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
        datasets: [{
            label: 'Schritte',
            data: [8400, 10200, 6100, 11000, 7500, 13000, 9000], // Dummy-Daten
            borderColor: '#00b4d8',
            backgroundColor: 'rgba(0, 180, 216, 0.1)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: '#fff' } }
        },
        scales: {
            y: { ticks: { color: '#fff' }, grid: { color: '#2a2a2a' } },
            x: { ticks: { color: '#fff' }, grid: { color: '#2a2a2a' } }
        }
    }
});
