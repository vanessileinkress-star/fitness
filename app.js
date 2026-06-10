// SCHLAF TOOLTIP

tooltip: {
    callbacks: {
        afterLabel: function(context) {
            if (context.datasetIndex === 0 && context.raw >= 8) {
                return 'Schlafdauer im optimalen Bereich.';
            } else if (context.datasetIndex === 0) {
                return 'Empfohlene Schlafdauer erreicht.';
            }
        }
    }
}
