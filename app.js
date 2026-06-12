// Chart.js global defaults
Chart.defaults.color = '#5a5a80';
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
Chart.defaults.font.size = 11;

// ── DATA ──────────────────────────────────────────────
const aprilData = {
    1: {
        dates: ['01.', '02.', '03.', '04.', '05.', '06.', '07.'],
        sleep:  [7.4, 7.6, 7.3, 7.8, 8.0, 7.8, 8.1],
        stress: [15.3, 20.5, 11.5, 11.4, 23.0, 22.0, 4.7],
        steps:  [8400, 7800, 9500, 11200, 8900, 10100, 12300],
        activities: [40, 30, 10, 20],
        summary: {
            sleep: "7 h 42 min", sleepStat: "Optimal",
            stress: "15 / 100", stressStat: "Niedrig",
            steps: "68.200", stepsStat: "Ziel erreicht",
            focus: "Krafttraining & Gehen"
        },
        bubble: "Woche 1: Top geladen! 💪",
        statusClass: "optimal",
        statusText: "Status: Optimal geladen ✓",
        sleepCopy: "Diese Woche lief's rund: 7 h 42 min Ø – Körper und Geist konnten sich vollständig erholen.",
        stressCopy: "Niedriger Stressscore: dein vegetatives Nervensystem ist im Balance-Modus – perfekt für intensive Einheiten.",
        stepsCopy: "68.200 Schritte diese Woche – WHO-Ziel täglich erreicht. Bewegung als fester Lebensbestandteil.",
        activityCopy: "Krafttraining dominiert den Plan – eine starke Basis für alle anderen Sportarten."
    },
    2: {
        dates: ['08.', '09.', '10.', '11.', '12.', '13.', '14.'],
        sleep:  [6.0, 6.9, 5.3, 7.0, 7.4, 6.4, 5.9],
        stress: [23.8, 20.7, 22.6, 30.9, 23.7, 18.7, 18.4],
        steps:  [7100, 6200, 8500, 13000, 14200, 11000, 8400],
        activities: [50, 10, 20, 20],
        summary: {
            sleep: "6 h 08 min", sleepStat: "Erhöhtes Defizit",
            stress: "23 / 100", stressStat: "Moderat",
            steps: "68.400", stepsStat: "Ziel erreicht",
            focus: "Krafttraining & HIIT"
        },
        bubble: "Woche 2: Schlaf nachholen! 😴",
        statusClass: "warning",
        statusText: "Status: Regenerations-Defizit ⚠",
        sleepCopy: "Kritische Woche: Nur 6 h 08 min Ø. Dein Körper signalisiert Erholungsbedarf – Tiefschlaf war verkürzt.",
        stressCopy: "Moderater Stress-Anstieg, besonders Mitte der Woche. Erholung hatte Vorrang vor Intensität.",
        stepsCopy: "Trotz müden Beinen: Schrittziel erneut geknackt. Die tägliche Bewegung hält sich stabil.",
        activityCopy: "Krafttraining dominiert – HIIT kam hinzu. Beachte die erhöhte Belastung bei wenig Schlaf."
    },
    3: {
        dates: ['15.', '16.', '17.', '18.', '19.', '20.', '21.'],
        sleep:  [8.3, 8.3, 7.0, 6.7, 7.0, 6.7, 6.0],
        stress: [18.4, 22.0, 22.2, 31.7, 16.9, 27.7, 31.7],
        steps:  [11200, 9500, 14500, 12300, 8900, 7600, 9100],
        activities: [30, 45, 15, 10],
        summary: {
            sleep: "6 h 58 min", sleepStat: "Diskontinuierlich",
            stress: "24 / 100", stressStat: "Moderat",
            steps: "73.100", stepsStat: "Ziel übertroffen",
            focus: "Gravel-Cycling & Kraft"
        },
        bubble: "Woche 3: Auf dem Rad! 🚴‍♀️",
        statusClass: "warning",
        statusText: "Status: Belastung hoch / Schlaf instabil ⚠",
        sleepCopy: "Unruhige Woche: Gute Nächte zu Beginn, dann sinkende Schlafdauer. Hohe Trainingsbelastung zeigt Wirkung.",
        stressCopy: "Stressspitzen vor allem zum Wochenende – Gravel-Rides fordern das Nervensystem deutlich.",
        stepsCopy: "73.100 Schritte – neuer Monatsrekord! Die langen Radausfahrten trieben die Aktivität nach oben.",
        activityCopy: "Gravel-Cycling in dieser Woche der Star – fast die Hälfte aller Trainingsminuten im Sattel."
    },
    4: {
        dates: ['22.', '23.', '24.', '25.', '26.', '27.', '28.'],
        sleep:  [6.7, 6.1, 7.7, 8.6, 9.0, 8.3, 8.7],
        stress: [17.7, 26.5, 19.0, 12.1, 23.3, 19.3, 21.9],
        steps:  [9200, 8400, 10500, 11800, 13100, 9500, 10200],
        activities: [35, 25, 25, 15],
        summary: {
            sleep: "7 h 53 min", sleepStat: "Optimal",
            stress: "20 / 100", stressStat: "Niedrig-Moderat",
            steps: "72.700", stepsStat: "Ziel erreicht",
            focus: "Krafttraining & HIIT"
        },
        bubble: "Woche 4: Comeback! ⚡",
        statusClass: "optimal",
        statusText: "Status: Volle Performance ✓",
        sleepCopy: "Perfekte Erholung nach Woche 3: Schlaf steigt kontinuierlich an – bis zu 9 Stunden am Freitag. Bereit für alles.",
        stressCopy: "Gute Regulierung nach der intensiven Vorwoche. Nervensystem hat sich erholt.",
        stepsCopy: "72.700 Schritte – konstant stark. Alltag und Training sind jetzt gut ausbalanciert.",
        activityCopy: "Ausgewogener Mix: Kraft und HIIT gleichwertig. Solides Fundament für Mai."
    }
};

// ── CHART INSTANCES ──────────────────────────────────
let chartSleep, chartStress, chartSteps, chartActivity;

const GRID_COLOR = 'rgba(255,255,255,0.05)';
const chartDefaults = {
    scales: {
        y: { grid: { color: GRID_COLOR }, ticks: { color: '#5a5a80' }, border: { color: 'transparent' } },
        x: { grid: { display: false }, ticks: { color: '#5a5a80' }, border: { color: 'transparent' } }
    },
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 400 }
};

function destroyCharts() {
    [chartSleep, chartStress, chartSteps, chartActivity].forEach(c => { if (c) c.destroy(); });
}

function initCharts(week) {
    destroyCharts();
    const d = aprilData[week];

    // 1. SCHLAF
    chartSleep = new Chart(document.getElementById('sleepChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.dates,
            datasets: [
                {
                    label: 'Schlaf (h)',
                    data: d.sleep,
                    backgroundColor: d.sleep.map(v => v >= 7 ? 'rgba(122,183,255,0.75)' : 'rgba(255,107,107,0.6)'),
                    borderRadius: 4,
                    borderSkipped: false
                },
                {
                    label: 'WHO 7h',
                    data: Array(7).fill(7),
                    type: 'line',
                    borderColor: 'rgba(255,107,107,0.5)',
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: { ...chartDefaults, scales: { ...chartDefaults.scales, y: { ...chartDefaults.scales.y, min: 0, max: 11 } } }
    });

    // 2. STRESS
    chartStress = new Chart(document.getElementById('stressChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: d.dates,
            datasets: [{
                label: 'Stress',
                data: d.stress,
                borderColor: '#7adbff',
                backgroundColor: 'rgba(122,219,255,0.06)',
                fill: true,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#7adbff'
            }]
        },
        options: { ...chartDefaults, scales: { ...chartDefaults.scales, y: { ...chartDefaults.scales.y, min: 0, max: 55 } } }
    });

    // 3. SCHRITTE
    chartSteps = new Chart(document.getElementById('stepsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.dates,
            datasets: [
                {
                    label: 'Schritte',
                    data: d.steps,
                    backgroundColor: d.steps.map(v => v >= 10000 ? 'rgba(122,183,255,0.75)' : 'rgba(196,181,253,0.6)'),
                    borderRadius: 4,
                    borderSkipped: false
                },
                {
                    label: '10.000 Ziel',
                    data: Array(7).fill(10000),
                    type: 'line',
                    borderColor: 'rgba(255,107,107,0.5)',
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: chartDefaults
    });

    // 4. DONUT – pastel colors, NO black border
    chartActivity = new Chart(document.getElementById('activityChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Krafttraining 🏋️', 'Gravel 🚴', 'HIIT/Hyrox 🏃', 'Gehen 👟'],
            datasets: [{
                data: d.activities,
                backgroundColor: ['#bfdbfe', '#a5f3fc', '#ddd6fe', '#fbcfe8'],
                borderColor: '#080814',
                borderWidth: 3,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '72%',
            animation: { duration: 400 },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#9999bb',
                        font: { size: 11 },
                        boxWidth: 12,
                        padding: 14,
                        usePointStyle: true,
                        pointStyleWidth: 10
                    }
                }
            }
        }
    });
}

// ── UPDATE ────────────────────────────────────────────
function updateDashboard(week) {
    const d = aprilData[week];
    initCharts(week);

    // Summary values
    document.getElementById('val-sleep-duration').textContent = d.summary.sleep;
    document.getElementById('val-sleep-status').textContent   = d.summary.sleepStat;
    document.getElementById('val-stress-level').textContent   = d.summary.stress;
    document.getElementById('val-stress-status').textContent  = d.summary.stressStat;
    document.getElementById('val-steps-count').textContent    = d.summary.steps;
    document.getElementById('val-steps-status').textContent   = d.summary.stepsStat;
    document.getElementById('val-activity-focus').textContent = d.summary.focus;

    // Story copy
    document.getElementById('sleepCopy').textContent    = d.sleepCopy;
    document.getElementById('stressCopy').textContent   = d.stressCopy;
    document.getElementById('stepsCopy').textContent    = d.stepsCopy;
    document.getElementById('activityCopy').textContent = d.activityCopy;

    // Kettlebell bubble
    document.getElementById('kettlebellBubble').textContent = d.bubble;

    // Status badge
    const badge = document.getElementById('statusBadge');
    document.getElementById('statusText').textContent = d.statusText;
    badge.className = 'status-badge ' + (d.statusClass === 'warning' ? 'warning' : '');

    // Kettlebell glow color
    const svgEl = document.getElementById('kettlebellSvg');
    if (d.statusClass === 'warning') {
        svgEl.style.filter = 'drop-shadow(0 0 18px rgba(255,107,107,0.45))';
    } else {
        svgEl.style.filter = 'drop-shadow(0 0 18px rgba(122,183,255,0.4))';
    }
}

// ── SLIDER ───────────────────────────────────────────
const slider    = document.getElementById('weekSlider');
const weekLabel = document.getElementById('weekLabel');

const weekTexts = {
    1: "Woche 1  ·  01.04. – 07.04.",
    2: "Woche 2  ·  08.04. – 14.04.",
    3: "Woche 3  ·  15.04. – 21.04.",
    4: "Woche 4  ·  22.04. – 28.04."
};

slider.addEventListener('input', function () {
    weekLabel.textContent = weekTexts[this.value];
    updateDashboard(parseInt(this.value));
});

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    weekLabel.textContent = weekTexts[1];
    updateDashboard(1);
});
