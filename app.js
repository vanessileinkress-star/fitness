// Globale Chart-Konfiguration für weiße Schrift
Chart.defaults.color = '#ffffff';

// Wir laden die von Python generierte JSON-Datei
fetch('clean_sleep.json')
    .then(response => response.json())
    .then(data => {
        renderCharts(data);
    })
    .catch(error => {
        console.error("Fehler beim Laden der echten Garmin-Daten:", error);
        // Fallback: Dummy-Daten anzeigen, falls Datei (noch) nicht da ist
        const fallbackData = {
            labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
            sleep_hours: [6.2, 6.8, 5.9, 7.1, 6.0, 8.5, 8.0],
            recovery_score: [78, 65, 66, 73, 63, 96, 77]
        };
        renderCharts(fallbackData);
    });

function renderCharts(data) {
    // 1. DYNAMISCHER SCHLAF-CHART (Deine echten Daten!)
    const ctxSleep = document.getElementById('sleepChart').getContext('2d');
    new Chart(ctxSleep, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Deine Schlafdauer (Std.)',
                data: data.sleep_hours,
                backgroundColor: '#3c3486', 
                borderRadius: 8
            }, {
                label: 'WHO-Minimum (7 Std.)',
                data: Array(data.labels.length).fill(7),
                type: 'line',
                borderColor: '#ff4d4d', 
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.1)' }, min: 0, max: 12 },
                x: { grid: { display: false } }
            }
        }
    });

    // 2. ERHOLUNGS-CHART (Wie gut lädst du deine Batterien wieder auf?)
    const ctxRecovery = document.getElementById('recoveryChart').getContext('2d');
    new Chart(ctxRecovery, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Garmin Recovery Score',
                data: data.recovery_score,
                borderColor: '#426e92',
                backgroundColor: 'rgba(66, 110, 146, 0.4)',
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }, {
                label: 'Kritische Grenze (50)',
                data: Array(data.labels.length).fill(50),
                borderColor: '#ff4d4d',
                borderWidth: 2,
                borderDash: [3, 3],
                pointRadius: 0,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.1)' }, min: 0, max: 100 },
                x: { grid: { display: false } }
            }
        }
    });
}
