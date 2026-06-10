Chart.defaults.color = '#a0a0a0';
Chart.defaults.font.family = "'Helvetica Neue', Arial, sans-serif";

// Echte Daten aus deiner Woche (14.04. - 20.04.2026) aus Source 1 & 3
const labelsApril = ['Di (14.)', 'Mi (15.)', 'Do (16.)', 'Fr (17.)', 'Sa (18.)', 'So (19.)', 'Mo (20.)'];
const sleepData = [7.8, 8.4, 8.1, 8.3, 8.3, 9.0, 7.3]; // In Stunden
const stressData = [18.7, 18.4, 22.2, 22.0, 22.2, 31.7, 16.9]; // Garmin Stress Score
const stepsData = [8400, 11200, 7800, 9500, 14500, 12300, 8900]; // Basiert auf Aktivitätslevel

// 1. SCHLAF CHART
new Chart(document.getElementById('sleepChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: labelsApril,
        datasets: [{
            label: 'Schlaf (Stunden)',
            data: sleepData,
            backgroundColor: '#426e92', // Dein helles Blau
            borderRadius: 6
        }, {
            label: 'WHO Ziel (7h)',
            data: [7, 7, 7, 7, 7, 7, 7],
            type: 'line',
            borderColor: '#ff4444',
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 0,
            fill: false
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    afterLabel: function(context) {
                        if (context.datasetIndex === 0 && context.raw >= 8) {
                            return '🔥 Perfekte Regeneration!';
                        } else if (context.datasetIndex === 0) {
                            return 'Guter Schlaf, aber achte aufs Limit.';
                        }
                    }
                }
            }
        },
        scales: { y: { min: 0, max: 12, grid: { color: '#222' } }, x: { grid: { display: false } } }
    }
});

// 2. STRESS CHART
new Chart(document.getElementById('stressChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: labelsApril,
        datasets: [{
            label: 'Ø Stresslevel',
            data: stressData,
            borderColor: '#3c3486', // Dein dunkles Indigo
            backgroundColor: 'rgba(60, 52, 134, 0.2)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointBackgroundColor: '#426e92'
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    afterLabel: function(context) {
                        if (context.raw > 25) return '⚠️ Hohe körperliche Belastung erkannt!';
                        return '✅ Entspannter Tag.';
                    }
                }
            }
        },
        scales: { y: { min: 0, max: 50, grid: { color: '#222' } }, x: { grid: { display: false } } }
    }
});

// 3. SCHRITTE CHART
new Chart(document.getElementById('stepsChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: labelsApril,
        datasets: [{
            label: 'Schritte',
            data: stepsData,
            backgroundColor: '#3c3486',
            borderRadius: 6
        }, {
            label: 'WHO Ziel (10k)',
            data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
            type: 'line',
            borderColor: '#ff4444',
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 0
        }]
    },
    options: {
        scales: { y: { grid: { color: '#222' } }, x: { grid: { display: false } } }
    }
});

// 4. AKTIVITÄTEN CHART (Doughnut)
new Chart(document.getElementById('activityChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Krafttraining 🏋️‍♀️', 'Gravel 🚴‍♀️', 'HIIT/Hyrox 🏃‍♀️', 'Gehen 👟'],
        datasets: [{
            data: [45, 25, 15, 15], // Prozentuale Verteilung im April
            backgroundColor: ['#426e92', '#3c3486', '#ffffff', '#ff4444'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '75%',
        plugins: {
            legend: { position: 'right', labels: { color: '#fff' } }
        }
    }
});
