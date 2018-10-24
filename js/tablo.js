var celk = {
    'Česko': ['sud', 'prot'],
    'ČSRvUA': ['sud', 'prot', 'slov', 'ukr'],
    'ČSRbUA': ['sud', 'prot', 'slov'],
    'Protektorát': ['prot'],
    'Pohraničí': ['sud'],
};

var img = Object.values(data).map(function(v) {
    return v.in
});

var emg = Object.values(data).map(function(v) {
    return v.out
});

var ali = Object.values(data).map(function(v) {
    return v.cizinci
});

function mapHighlight(year) {
    celk['ČSRvUA'].forEach(function(v) {
        document.getElementById(v).style.fill = '#F7F7F7';
        //document.getElementById('narat_in').innerHTML = 'Vyberte rok z grafu.';
    });
    if (year == 'out') { return };

    document.getElementById('narat_in').innerHTML = data[year].in_txt;
    document.getElementById('narat_out').innerHTML = data[year].out_txt;

    data[year].in_area.split(', ').forEach(function(ce) {
        if (Object.keys(celk).indexOf(ce) > -1) {
            celk[ce].forEach(function(c) {
                document.getElementById(c).style.fill = '#4575b4'
            })
        }
    });
    data[year].out_area.split(', ').forEach(function(ce) {
        if (Object.keys(celk).indexOf(ce) > -1) {
            celk[ce].forEach(function(c) {
                document.getElementById(c).style.fill = '#d73027'
            })
        }
    })
};

Highcharts.chart('tline', {
title: {
    text: 'Pohyby obyvatel na území bývalého Československa'
},
credits: {
    enabled: false
},
subtitle: {
    text: 'podle analýzy Člověka v tísni'
},
yAxis: {
    title: {
        text: 'Počet osob'
    }
},
legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
},
plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        },
        marker: {
            enabled: false,
            symbol: 'circle'
        },
        stickyTracking: true,
        pointStart: 1918,
        point: {
            events: {
                mouseOver: function(evt) {
                    mapHighlight(evt.target.category)
                }
            }
        }
    }
},
tooltip: {
    shared: true,
    crosshairs: [true]
},
series: [{
    name: 'Imigrace',
    data: img,
    color: '#4575b4'
}, {
    name: 'Emigrace',
    data: emg,
    color: '#d73027'
}, {
    name: 'Cizinci',
    data: ali,
    color: '#8073ac'
}]
});

document.getElementById('tline').onmouseout = function() {
    mapHighlight('out')
};