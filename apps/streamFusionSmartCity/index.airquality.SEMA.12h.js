/**
 * Main stream fusion example for smartmeters (Mlaka).
 */

// includes
const StreamFusion = require('nrg-stream-fusion').streamFusion;

// SMART-CITY CONFIG
let smConf = {
    "aggr": {
        "airquality": [
            { "field": "caqi", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [     // 1d sliding window
                    {"type": "ma" },
                    {"type": "max" },
                    {"type": "min" },
                    {"type": "variance" },
                ]}
            ]},
            { "field": "no2", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [     // 1d sliding window
                    {"type": "ma" },
                    {"type": "max" },
                    {"type": "min" },
                    {"type": "variance" },
                ]}
            ]},
            { "field": "o3", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [     // 1d sliding window
                    {"type": "ma" },
                    {"type": "max" },
                    {"type": "min" },
                    {"type": "variance" },
                ]}
            ]},
            { "field": "pm025", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [     // 1d sliding window
                    {"type": "ma" },
                    {"type": "max" },
                    {"type": "min" },
                    {"type": "variance" },
                ]}
            ]},
            { "field": "pm100", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [     // 1d sliding window
                    {"type": "ma" },
                    {"type": "max" },
                    {"type": "min" },
                    {"type": "variance" },
                ]}
            ]}
        ],
        "calculated": []
    },
    "fusion": {                                                         // feature vector configuration
        "fusionModel": "ST0005-0000_12h",                               // name of the topic
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 60 * 60 * 1000,                                   // resampling on 60 min
        "model": {
            topic: "predictions_ST0005-0000",
            horizon: 12,
            label: 0,
            options: {
                method: "StructuredEMA",
                structuralFactorPosition: 3,
                N: 5
            }
        },
        "nodes": [
            {
                "type": "airquality",
                "nodeid": "ST0005-0000",
                "aggrConfigId": "airquality",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [                                // current features
                        { type: "value", "name": "caqi" },                      // first feature is also the predicted feature
                        { type: "value", "name": "pm100|ma|86400000" },
                        { type: "value", "name": "pm025|ma|86400000" },
                    ]}
                ]
            },
            {
                "type": "calculated",
                "nodeid": "calculated",
                "aggrConfigId": "calculated",
                "nodeFrequency": 3600000,
                "fusionTick": 3600000,  // debug this - this is set via streamingNode or similar
                "master": false,
                "holidays": [
                    '2020-08-15', '2020-10-31', '2020-11-01', '2020-12-25', '2020-12-26',
                    '2021-01-01', '2021-01-02', '2021-02-08', '2021-04-05', '2021-04-27', '2021-05-01', '2021-05-02', '2021-06-25', '2021-08-15', '2021-10-31', '2021-11-01', '2021-12-25', '2021-12-26',
                    '2022-01-01', '2022-01-02', '2022-02-08', '2022-04-18', '2022-04-27', '2022-05-01', '2022-05-02', '2022-06-25', '2022-08-15', '2022-10-31', '2022-11-01', '2022-12-25', '2022-12-26'
                ],
                "attributes": [
                    { "time": 12, "attributes": [
                        { type: "value", name: "hourOfDay" }
                    ]}
                ]
            }
        ]
    }
};

// kafka connection config
let connectionConfig = {
    kafka: "172.29.12.94:9092"
}

// initialize all the fusion scenarios
console.log("Initializing models for 12h prediction horizons - structured EMA");
console.log("AirQuality ST0005-0000");

let fusion = [];
const sensors = [ 'caqi', 'no2', 'o3', 'pm025', 'pm100', 'w'];

// create 5 fusion models
for (let i = 0; i < sensors.length; i++) {
    connectionConfig.clientId = 'clientSubstation_' + Math.random().toString(16).substr(2, 8);
    smConf["fusion"]["nodes"][0]["attributes"][0]["attributes"][0] = { type: "value", "name": sensors[i] };
    console.log("Sensor:", sensors[i]);
    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
} //