Chart.defaults.color = '#5a5a80';
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
Chart.defaults.font.size = 11;

const aprilData = {
    1: {
        dates: ['Mo','Di','Mi','Do','Fr','Sa','So'],
        sleep:  [7.4, 7.6, 7.3, 7.8, 8.0, 7.8, 8.1],
        steps:  [8400, 7800, 9500, 11200, 8900, 10100, 12300],
        activities: [40, 30, 10, 20],
        weekTxt: '01.04. – 07.04. · Woche 1 von 4',
        mot: 'Top-Start in den April: Schlaf, Schritte, Training – alles im grünen Bereich. Genau so soll es sein.',
        sleep_title: 'Erholung auf höchstem Niveau',
        sleep_copy:  'Jede Nacht über 7 Stunden – dein Körper konnte sich vollständig regenerieren und ist bereit für neue Herausforderungen.',
        sleep_val:   '7 h 42 min', sleep_stat: 'Optimal',
        steps_title: 'Jeden Tag in Bewegung',
        steps_copy:  '68.200 Schritte in 7 Tagen – das WHO-Tagesziel wurde konsequent durchgehalten. Bewegung ist zur Gewohnheit geworden.',
        steps_val:   '68.200', steps_stat: 'Ziel erreicht',
        act_title:   'Deine Woche im Überblick',
        act_copy:    'Krafttraining als solide Basis, ergänzt durch Gehen für die Alltagsaktivität. Eine ausgewogene Kombination.',
        act_focus:   'Kraft & Gehen',
        act_who:     'Status: Erfüllt',
        mot_border:  '#7ab7ff'
    },
    2: {
        dates: ['Mo','Di','Mi','Do','Fr','Sa','So'],
        sleep:  [6.0, 6.9, 5.3, 7.0, 7.4, 6.4, 5.9],
        steps:  [7100, 6200, 8500, 13000, 14200, 11000, 8400],
        activities: [50, 10, 20, 20],
        weekTxt: '08.04. – 14.04. · Woche 2 von 4',
        mot: 'Du hast viel geleistet – aber dein Schlaf sagt: kurze Pause einlegen. Wer sich erholt, kommt stärker zurück.',
        sleep_title: 'Schlafdefizit – Körper meldet sich',
        sleep_copy:  'Nur 6 h 08 min im Schnitt. Besonders Mittwoch war kritisch mit nur 5:18 h. Der Körper braucht jetzt Erholung.',
        sleep_val:   '6 h 08 min', sleep_stat: 'Defizit',
        steps_title: 'Trotzdem aktiv geblieben',
        steps_copy:  'Trotz Müdigkeit 68.400 Schritte gehalten. Die Gewohnheit trägt dich auch in schwachen Wochen.',
        steps_val:   '68.400', steps_stat: 'Ziel erreicht',
        act_title:   'Hohes Volumen, wenig Erholung',
        act_copy:    'Krafttraining dominiert – kombiniert mit HIIT und wenig Schlaf. Das ist mutig, aber auf Dauer riskant.',
        act_focus:   'Kraft & HIIT',
        act_who:     'Status: Erfüllt (Aber riskante Belastung)',
        mot_border:  '#ff6b6b'
    },
    3: {
        dates: ['Mo','Di','Mi','Do','Fr','Sa','So'],
        sleep:  [8.3, 8.3, 7.0, 6.7, 7.0, 6.7, 6.0],
        steps:  [11200, 9500, 14500, 12300, 8900, 7600, 9100],
        activities: [30, 45, 15, 10],
        weekTxt: '15.04. – 21.04. · Woche 3 von 4',
        mot: 'Du hast dich aufs Rad geschwungen und Kilometer gemacht. Jetzt weißt du: Ausdauer kostet auch Erholung. Der Ausgleich folgt.',
        sleep_title: 'Schlaf instabil – Trend abwärts',
        sleep_copy:  'Gut gestartet, dann sinkend. Die langen Radausfahrten kosten mehr Erholung als gedacht – das ist ganz normal.',
        sleep_val:   '6 h 58 min', sleep_stat: 'Instabil',
        steps_title: 'Neuer Monatsrekord!',
        steps_copy:  '73.100 Schritte – Radkilometer zählen mit. Das ist deine aktivste Woche im April.',
        steps_val:   '73.100', steps_stat: 'Rekord',
        act_title:   'Gravel übernimmt das Ruder',
        act_copy:    'Fast die Hälfte aller Trainingsminuten auf dem Rad – klares Zeichen für einen starken Ausdauer-Fokus.',
        act_focus:   'Gravel & Kraft',
        act_who:     'Status: Erfüllt (Fokus Ausdauer)',
        mot_border:  '#ff6b6b'
    },
    4: {
        dates: ['Mo','Di','Mi','Do','Fr','Sa','So'],
        sleep:  [6.7, 6.1, 7.7, 8.6, 9.0, 8.3, 8.7],
        steps:  [9200, 8400, 10500, 11800, 13100, 9500, 10200],
        activities: [35, 25, 25, 15],
        weekTxt: '22.04. – 28.04. · Woche 4 von 4',
        mot: 'Was für ein Finale: Schlaf steigt auf 9 Stunden, Schritte konstant, Training ausgewogen. Du hast den April stark beendet – weiter so!',
        sleep_title: 'Perfekte Erholung',
        sleep_copy:  'Schlaf steigt kontinuierlich bis auf 9 Stunden am Freitag. Der Körper hat sich vollständig regeneriert.',
        sleep_val:   '7 h 53 min', sleep_stat: 'Optimal',
        steps_title: 'Stabil und konstant',
        steps_copy:  '72.700 Schritte – Alltag und Training sind jetzt im Gleichgewicht. Genau da willst du sein.',
        steps_val:   '72.700', steps_stat: 'Ziel erreicht',
        act_title:   'Ausgewogener Mix',
        act_copy:    'Kraft und HIIT gleichwertig – ein solides Fundament für den Mai. April abgehakt!',
        act_focus:   'Kraft & HIIT',
        act_who:     'Status: Perfekt erfüllt',
        mot_border:  '#7ab7ff'
    }
};

let chartSleep, chartSteps, chartActivity;

const BLUE_L   = 'rgba(122,183,255,0.7)';
const RED_L    = 'rgba(255,107,107,0.6)';
const RED_LINE = '#ff6b6b';
const GRID     = 'rgba(255,255,255,0.04)';

// NEUE KONTRAST-FARBEN FÜR DAS RING-DIAGRAMM (bessere Lesbarkeit)
const ACTIVITY_COLORS = [
    '#7ab7ff', // Krafttraining: Primär Hellblau
    '#b388ff', // Gravel: Pastell-Lila
    '#7adbff', // HIIT: Cyan
    '#ffb7b2'  // Gehen: Pastell-Koralle
];

const scaleBase = {
    grid: { color: GRID },
    ticks: { color: '#5a5a80', font: { size: 10 } },
    border: { color: 'transparent' }
};

function buildCharts(week) {
    const d = aprilData[week];
    [chartSleep, chartSteps, chartActivity].forEach(c => { if (c) c.destroy(); });

    const base = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 320 },
        plugins: { legend: { display: false } },
        scales: {
            y: { ...scaleBase },
            x: { ...scaleBase, grid: { display: false } }
        }
    };

    // Schlaf Chart
    chartSleep = new Chart(document.getElementById('sleepChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.dates,
            datasets: [
                { data: d.sleep, backgroundColor: d.sleep.map(v => v >= 7 ? BLUE_L : RED_L), borderRadius: 4 },
                { data: Array(7).fill(7), type: 'line', borderColor: RED_LINE, borderWidth: 1.5, borderDash: [5, 3], pointRadius: 0, fill: false }
            ]
        },
        options: { ...base, scales: { ...base.scales, y: { ...scaleBase, min: 0, max: 11, ticks: { ...scaleBase.ticks, callback: v => v + 'h' } } } }
    });

    // Schritte Chart
    chartSteps = new Chart(document.getElementById('stepsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.dates,
            datasets: [
                { data: d.steps, backgroundColor: d.steps.map(v => v >= 10000 ? BLUE_L : RED_L), borderRadius: 4 },
                { data: Array(7).fill(10000), type: 'line', borderColor: RED_LINE, borderWidth: 1.5, borderDash: [5, 3], pointRadius: 0, fill: false }
            ]
        },
        options: { ...base, scales: { ...base.scales, y: { ...scaleBase, ticks: { ...scaleBase.ticks, callback: v => v >= 1000 ? Math.round(v / 1000) + 'k' : v } } } }
    });

    // Aktivitäten Donut Chart
    chartActivity = new Chart(document.getElementById('activityChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Krafttraining 🏋️', 'Gravel 🚴', 'HIIT / Hyrox 🏃', 'Gehen 👟'],
            datasets: [{
                data: d.activities,
                backgroundColor: ACTIVITY_COLORS,
                borderColor: '#080814',
                borderWidth: 3,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            animation: { duration: 320 },
            plugins: {
                legend: { position: 'right', labels: { color: '#9999bb', font: { size: 11 }, boxWidth: 11, padding: 14, usePointStyle: true } }
            }
        }
    });
}

function updateTexts(week) {
    const d = aprilData[week];

    document.getElementById('weekLabel').textContent       = d.weekTxt;
    document.getElementById('motText').textContent         = d.mot;

    document.getElementById('sleepTitle').textContent      = d.sleep_title;
    document.getElementById('sleepCopy').textContent       = d.sleep_copy;
    document.getElementById('val-sleep-duration').textContent = d.sleep_val;
    document.getElementById('val-sleep-status').textContent   = d.sleep_stat;

    document.getElementById('stepsTitle').textContent      = d.steps_title;
    document.getElementById('stepsCopy').textContent       = d.steps_copy;
    document.getElementById('val-steps-count').textContent = d.steps_val;
    document.getElementById('val-steps-status').textContent = d.steps_stat;

    document.getElementById('actTitle').textContent        = d.act_title;
    document.getElementById('activityCopy').textContent    = d.act_copy;
    document.getElementById('val-activity-focus').textContent = d.act_focus;
    
    // WHO Status Update für Aktivitäten
    document.getElementById('actWhoStatus').innerHTML = `<br><strong style="color:var(--accent-blue);">${d.act_who}</strong>`;

    // Motivationsbalken Farbe
    const motBar = document.querySelector('.motivation-bar');
    motBar.style.borderTopColor = d.mot_border;

    // ---- BILDER FÜR DIE KETTLEBELLS UPDATEN ----
    const imgSleep = document.getElementById('kbImgSleep');
    const imgSteps = document.getElementById('kbImgSteps');
    const imgAct = document.getElementById('kbImgAct');

    // Dateinamen der hochgeladenen Bilder
    const daumen = 'kettlebell_daumenhoch.png';
    const tipp = 'kettlebell.png';

    // Bild-Logik: Je nach Woche ändern sich die Grafiken neben den Blöcken
    if (week === 1) {
        imgSleep.src = daumen;
        imgSteps.src = daumen;
        imgAct.src = daumen;
    } else if (week === 2) {
        imgSleep.src = tipp;     // Schlafmangel!
        imgSteps.src = daumen;
        imgAct.src = tipp;       // Risiko durch Übertraining
    } else if (week === 3) {
        imgSleep.src = tipp;     // Schlaf weiterhin instabil
        imgSteps.src = daumen;
        imgAct.src = daumen;     
    } else {
        imgSleep.src = daumen;
        imgSteps.src = daumen;
        imgAct.src = daumen;
    }
}

function updateDashboard(week) {
    updateTexts(week);
    buildCharts(week);
}

document.getElementById('weekSlider').addEventListener('input', function () {
    updateDashboard(parseInt(this.value));
});

document.addEventListener('DOMContentLoaded', function () {
    updateDashboard(1);
});
