mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.794247, 40.689238],
    zoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

//load  all the itmes to console
stationdata.forEach(function(station) {

    var stationcolor = 'orange';

    new mapboxgl.Marker({
            color: stationcolor,

        })
        .setLngLat([station.Lng, station.Lat])
        .setPopup(new mapboxgl.Popup({ openOnClick: false, offset: 40 })
            .setText(`Station Name:${station.stops}`))
        .addTo(map);
});

map.on('load', function() {

    map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
        },
        'source-layer': 'sf2010',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 1.75,
                'stops': [
                    [12, 2],
                    [22, 180]
                ]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match', ['get', 'ethnicity'],
                'White', '#fbb03b',
                'Black', '#223b53',
                'Hispanic', '#e55e5e',
                'Asian', '#3bb2d0',
                /* other */
                '#ccc'
            ]
        }
    });
})

// add line
map.on('load', function() {

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [

                        [-73.80744516849518,
                            40.67509293150686
                        ],
                        [-73.80751490592957,
                            40.676451786568805
                        ],
                        [-73.80753636360167,
                            40.676732504671655
                        ],
                        [-73.80762755870819,
                            40.67793673123751
                        ],
                        [-73.80769193172455,
                            40.67840865193191
                        ],
                        [-73.80772411823273,
                            40.678815477435386
                        ],
                        [-73.8078099489212,
                            40.6797674394114
                        ],
                        [-73.80786895751953,
                            40.680336982811696
                        ],
                        [-73.80784749984741,
                            40.681105858683054
                        ],
                        [-73.80783677101135,
                            40.681626573812835
                        ],
                        [-73.80782067775726,
                            40.681915406232406
                        ],
                        [-73.80778312683105,
                            40.682310006247434
                        ],
                        [-73.80775094032288,
                            40.68247272722285
                        ],
                        [-73.80756855010986,
                            40.68323344251322
                        ],
                        [-73.80753636360167,
                            40.683327005826335
                        ],
                        [-73.80764365196228,
                            40.683546675697485
                        ],
                        [-73.80801916122435,
                            40.68429110709896
                        ],
                        [-73.80885601043701,
                            40.68599147113545
                        ],
                        [-73.80922079086304,
                            40.68669112986353
                        ],
                        [-73.80995035171509,
                            40.68817177876495
                        ],
                        [-73.811194896698,
                            40.690400825506494
                        ],
                        [-73.81190299987793,
                            40.69165361466714
                        ],
                        [-73.81102323532104,
                            40.69184885241493
                        ],
                        [-73.81055116653442,
                            40.69197901059565
                        ],
                        [-73.810293674469,
                            40.69204408959066
                        ],
                        [-73.8097357749939,
                            40.69223932619432
                        ],
                        [-73.80930662155151,
                            40.692336944281635
                        ],
                        [-73.80881309509277,
                            40.69271114562474
                        ],
                        [-73.8064956665039,
                            40.69456585169382
                        ],
                        [-73.80454301834106,
                            40.696225281781494
                        ],
                        [-73.80550861358643,
                            40.6968922959549
                        ],
                        [-73.80574464797972,
                            40.697266471713576
                        ],
                        [-73.80647420883179,
                            40.69837271818651
                        ],
                        [-73.80694627761841,
                            40.699023442824625
                        ],
                        [-73.80746126174927,
                            40.69999951786332
                        ],
                        [-73.8077187538147,
                            40.70061769132372
                        ],
                        [-73.80793333053589,
                            40.701496138477786
                        ],
                        [-73.80791187286377,
                            40.70178895162138
                        ],
                        [-73.80623817443848,
                            40.70178895162138
                        ],
                        [-73.80445718765259,
                            40.7021630998761
                        ],
                        [-73.80226850509644,
                            40.702781253257584
                        ],
                        [-73.80023002624512,
                            40.7033831339324
                        ],
                        [-73.7970757484436,
                            40.70460314564103
                        ],
                        [-73.79400730133057,
                            40.70583940137569
                        ],
                        [-73.79245162010193,
                            40.70639245572229
                        ],
                        [-73.79340648651123,
                            40.7077832044444
                        ],
                        [-73.79396438598633,
                            40.70863715856578
                        ],
                        [-73.79546642303467,
                            40.708059724120645
                        ],
                        [-73.79502654075621,
                            40.70743348673892
                        ],
                        [-73.7955093383789,
                            40.70722202863071
                        ]


                    ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#888",
            "line-width": 10
        }
    });
});