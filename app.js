Chart.defaults.color = '#a0a0a0';
Chart.defaults.font.family = "'Helvetica Neue', Arial, sans-serif";

const labels = ['Di (14.)', 'Mi (15.)', 'Do (16.)', 'Fr (17.)', 'Sa (18.)', 'So (19.)', 'Mo (20.)'];

const sleepData = [7.8, 8.4, 8.1, 8.3, 8.3, 9.0, 7.3];
const stressData = [18.7, 18.4, 22.2, 22.0, 22.2, 31.7, 16.9];
const stepsData = [8400, 11200, 7800, 9500, 14500, 12300, 8900];


// SLEEP CHART
new Chart(document.getElementById('sleepChart'), {
    type: 'bar',
    data: {
        labels,
        datasets: [
            {
                label: 'Schlafdauer (h)',
                data: sleepData,
                backgroundColor: '#426e92',
                borderRadius: 6
            },
            {
                label: 'Zielwert (7h)',
                data: Array(7).fill(7),
                type: 'line',
                borderColor: '#ff4444',
                borderDash: [5, 5],
                pointRadius: 0
            }
        ]
    },
    options: {
        scales: {
            y: { min: 0, max: 12 },
            x: { grid: { display: false } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    afterLabel: function(ctx) {
                        return ctx.raw >= 8
                            ? 'Regeneration im optimalen Bereich.'
                            : 'Im empfohlenen Bereich.';
                    }
                }
            }
        }
    }
});


// STRESS CHART
new Chart(document.getElementById('stressChart'), {
    type: 'line',
    data: {
        labels,
        datasets: [{
            label: 'Belastungsindex',
            data: stressData,
            borderColor: '#426e92',
            backgroundColor: 'rgba(66,110,146,0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: { min: 0, max: 50 },
            x: { grid: { display: false } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    afterLabel: function(ctx) {
                        return ctx.raw > 25
                            ? 'Erhöhte Belastung registriert.'
                            : 'Stabiles Belastungsniveau.';
                    }
                }
            }
        }
    }
});


// STEPS CHART
new Chart(document.getElementById('stepsChart'), {
    type: 'bar',
    data: {
        labels,
        datasets: [
            {
                label: 'Schritte',
                data: stepsData,
                backgroundColor: '#3c3486',
                borderRadius: 6
            },
            {
                label: 'Richtwert (10.000)',
                data: Array(7).fill(10000),
                type: 'line',
                borderColor: '#ff4444',
                borderDash: [5, 5],
                pointRadius: 0
            }
        ]
    },
    options: {
        scales: {
            y: { grid: { color: '#1a1a1a' } },
            x: { grid: { display: false } }
        }
    }
});


// ACTIVITY CHART
new Chart(document.getElementById('activityChart'), {
    type: 'doughnut',
    data: {
        labels: ['Krafttraining', 'Radsport', 'Intervalltraining', 'Gehen'],
        datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: ['#426e92', '#3c3486', '#222222', '#ff4444']
        }]
    },
    options: {
        cutout: '75%',
        plugins: {
            legend: { position: 'right' }
        }
    }
});
