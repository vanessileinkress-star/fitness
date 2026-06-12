Chart.defaults.color = '#555555';
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, sans-serif";

// Datenstruktur April 2026 (Woche 1-4)
const aprilData = {
    1: {
        dates: ['01.', '02.', '03.', '04.', '05.', '06.', '07.'],
        sleep: [7.4, 7.6, 7.3, 7.8, 8.0, 7.8, 8.1],
        stress: [15.3, 20.5, 11.5, 11.4, 23.0, 22.0, 4.7],
        steps: [8400, 7800, 9500, 11200, 8900, 10100, 12300],
        activities: [40, 30, 10, 20],
        summary: { sleep: "Ø 7 h 42 min", sleepStat: "Optimal", stress: "15 / 100", stressStat: "Niedrig", steps: "68.200 / Woche", stepsStat: "Ziel erreicht", focus: "Krafttraining & Gehen" },
        barbell: { text: "Status: Optimal geladen", width: "30px", style: "barbell-optimal" }
    },
    2: {
        dates: ['08.', '09.', '10.', '11.', '12.', '13.', '14.'],
        sleep: [6.0, 6.9, 5.3, 7.0, 7.4, 6.4, 5.9],
        stress: [23.8, 20.7, 22.6, 30.9, 23.7, 18.7, 18.4],
        steps: [7100, 6200, 8500, 13000, 14200, 11000, 8400],
        activities: [50, 10, 20, 20],
        summary: { sleep: "Ø 6 h 08 min", sleepStat: "Erhöhtes Defizit", stress: "23 / 100", stressStat: "Moderat", steps: "68.400 / Woche", stepsStat: "Ziel erreicht", focus: "Krafttraining & HIIT" },
        barbell: { text: "Status: Regenerations-Defizit", width: "10px", style: "barbell-warning" }
    },
    3: {
        dates: ['15.', '16.', '17.', '18.', '19.', '20.', '21.'],
        sleep: [8.3, 8.3, 7.0, 6.7, 7.0, 6.7, 6.0],
        stress: [18.4, 22.0, 22.2, 31.7, 16.9, 27.7, 31.7],
        steps: [11200, 9500, 14500, 12300, 8900, 7600, 9100],
        activities: [30, 45, 15, 10],
        summary: { sleep: "Ø 6 h 58 min", sleepStat: "Diskontinuierlich", stress: "24 / 100", stressStat: "Moderat", steps: "73.100 / Woche", stepsStat: "Ziel übertroffen", focus: "Gravel-Cycling & Kraft" },
        barbell: { text: "Status: Belastung Hoch / Schlaf Instabil", width: "15px", style: "barbell-warning" }
    },
    4: {
        dates: ['22.', '23.', '24.', '25.', '26.', '27.', '28.'],
        sleep: [6.7, 6.1, 7.7, 8.6, 9.0, 8.3, 8.7],
        stress: [17.7, 26.5, 19.0, 12.1, 23.3, 19.3, 21.9],
        steps: [9200, 8400, 10500, 11800, 13100, 9500, 10200],
        activities: [35, 25, 25, 15],
        summary: { sleep: "Ø 7 h 53 min", sleepStat: "Optimal", stress: "20 / 100", stressStat: "Niedrig", steps: "72.700 / Woche", stepsStat: "Ziel erreicht", focus: "Krafttraining & HIIT" },
        barbell: { text: "Status: Volle Performance", width: "45px", style: "barbell-optimal" }
    }
};

let chartSleep, chartStress, chartSteps, chartActivity;

function updateBarbell(week) {
    const config = aprilData[week].barbell;
    const container = document.querySelector('.barbell-container');
    const label = document.getElementById('barbellStatus');
    const left = document.getElementById('weightLeft');
    const right = document.getElementById('weightRight');

    container.className = "barbell-container " + config.style;
    label.innerText = config.text;
    left.style.width = config.width;
    right.style.width = config.width;
}

function initCharts(week) {
    const data = aprilData[week];

    chartSleep = new Chart(document.getElementById('sleepChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: data.dates,
            datasets: [{ label: 'Schlafdauer (h)', data: data.sleep, backgroundColor: '#7ab7ff', borderRadius: 2 },
                       { label: 'WHO Limit', data: Array(7).fill(7), type: 'line', borderColor: '#ff4444', borderWidth: 1.5, borderDash: [4, 4], pointRadius: 0, fill: false }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 12, grid: { color: '#111' } }, x: { grid: { display: false } } } }
    });

    chartStress = new Chart(document.getElementById('stressChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: data.dates,
            datasets: [{ label: 'Stressscore', data: data.stress, borderColor: '#7adbff', backgroundColor: 'rgba(122, 219, 255, 0.02)', fill: true, tension: 0.2, borderWidth: 2, pointRadius: 2 }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 55, grid: { color: '#111' } }, x: { grid: { display: false } } } }
    });

    chartSteps = new Chart(document.getElementById('stepsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: data.dates,
            datasets: [{ label: 'Schritte', data: data.steps, backgroundColor: '#7ab7ff', borderRadius: 2 },
                       { label: 'WHO Limit', data: Array(7).fill(10000), type: 'line', borderColor: '#ff4444', borderWidth: 1.5, borderDash: [4, 4], pointRadius: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { grid: { color: '#111' } }, x: { grid: { display: false } } } }
    });

    // 4. AKTIVITÄTEN CHART (Doughnut mit korrigierten Pastellfarben und schwarzer Trennlinie)
    chartActivity = new Chart(document.getElementById('activityChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Krafttraining 🏋️‍♀️', 'Gravel 🚴‍♀️', 'HIIT/Hyrox 🏃‍♀️', 'Gehen 👟'],
            datasets: [{ 
                data: data.activities, 
                backgroundColor: [
                    '#b3d4ff', // Pastell-Blau hell
                    '#7ab7ff', // Hellblau Standard
                    '#d1b3ff', // Pastell-Lila hell
                    '#9b7aff'  // Pastell-Lila intensiv
                ], 
                borderColor: '#000000', // Verschmilzt mit dem schwarzen Hintergrund
                borderWidth: 2 
            }]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            cutout: '80%', 
            plugins: { 
                legend: { 
                    position: 'right', 
                    labels: { color: '#888', font: { size: 11 } } 
                } 
            } 
        }
    });

    updateBarbell(week);
}

function updateDashboard(week) {
    const data = aprilData[week];
    
    chartSleep.destroy();
    chartStress.destroy();
    chartSteps.destroy();
    chartActivity.destroy();
    initCharts(week);

    document.getElementById('val-sleep-duration').innerText = data.summary.sleep;
    document.getElementById('val-sleep-status').innerText = data.summary.sleepStat;
    document.getElementById('val-stress-level').innerText = data.summary.stress;
    document.getElementById('val-stress-status').innerText = data.summary.stressStat;
    document.getElementById('val-steps-count').innerText = data.summary.steps;
    document.getElementById('val-steps-status').innerText = data.summary.stepsStat;
    document.getElementById('val-activity-focus').innerText = data.summary.focus;
}

const slider = document.getElementById('weekSlider');
const weekLabel = document.getElementById('weekLabel');

slider.addEventListener('input', function() {
    const week = this.value;
    const weekTexts = { 1: "Woche 1 (01.04. - 07.04.)", 2: "Woche 2 (08.04. - 14.04.)", 3: "Woche 3 (15.04. - 21.04.)", 4: "Woche 4 (22.04. - 28.04.)" };
    weekLabel.innerText = "Anzeige: " + weekTexts[week];
    updateDashboard(week);
});

initCharts(1);
