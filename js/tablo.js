var celk = {
    'Česko': ['sud', 'prot'],
    'ČSRvUA': ['sud', 'prot', 'slov', 'ukr'],
    'ČSRbUA': ['sud', 'prot', 'slov'],
    'Protektorát': ['prot'],
    'Pohraničí': ['sud'],
};

var img = Object.keys(data).map(function(v) {
    return data[v].in
});

var emg = Object.keys(data).map(function(v) {
    return data[v].out
});

var ali = Object.keys(data).map(function(v) {
    return data[v].cizinci
});

function mapHighlight(year) {
    celk['ČSRvUA'].forEach(function(v) {
        document.getElementById(v).style.fill = '#F7F7F7';
        //document.getElementById('narat_in').innerHTML = 'Vyberte rok z grafu.';
    });
    if (year == 'out') { return };
    narods.update({
        series: [{
            name: 'Ostatní',
            data: [data[year].ostatni]
        }, {
            name: 'Poláci',
            data: [data[year].polaci]
        }, {
            name: 'Němci',
            data: [data[year].nemci]
        }, {
            name: 'Slováci',
            data: [data[year].slovaci]
        }, {
            name: 'Češi',
            data: [data[year].cesi]
        }]
    });

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
chart: {
    height: 200,
},
title: {
    text: 'Pohyby obyvatel na území bývalého Československa',
    style: {
        display: 'none'
    }
},
credits: {
    enabled: false
},
subtitle: {
    text: 'podle analýzy Člověka v tísni',
    style: {
        display: 'none'
    }
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

//narslozeni
var narods = Highcharts.chart('narods', {
    chart: {
        height: 170,
        type: 'bar'
    },
    colors: ['#b3b3b3', '#a6d854', '#e5c494', '#fc8d62', '#8da0cb'],
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    style: {
        display: 'none'
    },
    subtitle: {
        text: 'národnostní složení'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        //visible: false,
        title: {
            text: undefined,
        },
        min: 0,
        max: 100,
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            animation: false,
            enableMouseTracking: false,
            events: {
                legendItemClick: function () {
                    return false; 
                }
            }
        }
    },
    series: [{
        name: 'Ostatní',
        data: [0.8]
    }, {
        name: 'Poláci',
        data: [1]
    }, {
        name: 'Němci',
        data: [30.6]
    }, {
        name: 'Slováci',
        data: [0]
    }, {
        name: 'Češi',
        data: [67.6]
    }]
});

document.getElementById('tline').onmouseout = function() {
    mapHighlight('out')
};