// import CustomNode from './CustomNode';

// export const initialNodes = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'input' },
//       position: { x: 0, y: 0 },
//     },
//     {
//       id: '2',
//       data: { label: 'node 2' },
//       position: { x: 0, y: 100 },
//     },
//     {
//       id: '2a',
//       data: { label: 'node 2a' },
//       position: { x: 0, y: 200 },
//     },
//     {
//       id: '2b',
//       data: { label: 'node 2b' },
//       position: { x: 0, y: 300 },
//     },
//     {
//       id: '2c',
//       data: { label: 'node 2c' },
//       position: { x: 0, y: 400 },
//     },
//     {
//       id: '2d',
//       data: { label: 'node 2d' },
//       position: { x: 0, y: 500 },
//     },
//     {
//       id: '3',
//       data: { label: 'node 3' },
//       position: { x: 200, y: 100 },
//     },
//   ];
  
//   export const initialEdges = [
//     { id: 'e12', source: '1', target: '2', animated: true },
//     { id: 'e13', source: '1', target: '3', animated: true },
//     { id: 'e22a', source: '2', target: '2a', animated: true },
//     { id: 'e22b', source: '2', target: '2b', animated: true },
//     { id: 'e22c', source: '2', target: '2c', animated: true },
//     { id: 'e2c2d', source: '2c', target: '2d', animated: true },
//   ];
export const idata = [
    {
      hierarchical: {
        nodes: [
          { id: "1", value: "1" },
          { id: "2", value: "2" },
          { id: "3", value: "3" },
          { id: "4", value: "4" },
          { id: "5", value: "5" },
          { id: "6", value: "6" }],
        edges: [
          { source: "1", target: "2" },
          { source: "1", target: "3" },
          { source: "2", target: "4" },
          { source: "2", target: "5" },
          { source: "3", target: "6" }]
      }
    }
  ];

//   export const data = JSON.parse(`[
//     {
//       "hierarchical": {
//         "nodes": [
//           {
//             "id": "0",
//             "label": "0"
//           },
//           {
//             "id": "1",
//             "label": "1"
//           },
//           {
//             "id": "2",
//             "label": "2"
//           },
//           {
//             "id": "3",
//             "label": "3"
//           },
//           {
//             "id": "4",
//             "label": "4"
//           },
//           {
//             "id": "5",
//             "label": "5"
//           },
//           {
//             "id": "6",
//             "label": "6"
//           },
//           {
//             "id": "7",
//             "label": "7"
//           },
//           {
//             "id": "8",
//             "label": "8"
//           },
//           {
//             "id": "9",
//             "label": "9"
//           }
//         ],
//         "edges": [
//           {
//             "source": "0",
//             "target": "1"
//           },
//           {
//             "source": "0",
//             "target": "2"
//           },
//           {
//             "source": "1",
//             "target": "3"
//           },
//           {
//             "source": "1",
//             "target": "4"
//           },
//           {
//             "source": "2",
//             "target": "5"
//           },
//           {
//             "source": "3",
//             "target": "6"
//           },
//           {
//             "source": "3",
//             "target": "7"
//           },
//           {
//             "source": "4",
//             "target": "8"
//           },
//           {
//             "source": "5",
//             "target": "9"
//           }
//         ]
//       }
//     }
//   ]`);



//   export const data = JSON.parse(`[
//     {
        
//         "hierarchical": {
//           "nodes": [
//             {
//               "id": "1",
//               "value": "1",
//               "label": "isis"
//             },
//             {
//               "id": "2",
//               "value": "2",
//               "label": "isis"
//             },
//             {
//               "id": "3",
//               "value": "3",
//               "label": "bgp"
//             },
//             {
//               "id": "4",
//               "value": "4",
//               "label": "ospf"
//             },
//             {
//               "id": "5",
//               "value": "5",
//               "label": "isis"
//             },
//             {
//               "id": "6",
//               "value": "6",
//               "label": "bgp"
//             },
//             {
//               "id": "7",
//               "value": "7",
//               "label": "ospf"
//             },
//             {
//               "id": "8",
//               "value": "8",
//               "label": "bgp"
//             },
//             {
//               "id": "9",
//               "value": "9",
//               "label": "isis"
//             },
//             {
//               "id": "10",
//               "value": "10",
//               "label": "bgp"
//             },
//             {
//               "id": "11",
//               "value": "11",
//               "label": "ospf"
//             },
//             {
//               "id": "12",
//               "value": "12",
//               "label": "bgp"
//             },
//             {
//               "id": "13",
//               "value": "13",
//               "label": "isis"
//             },
//             {
//               "id": "14",
//               "value": "14",
//               "label": "rip"
//             },
//             {
//               "id": "15",
//               "value": "15",
//               "label": "rip"
//             },
//             {
//               "id": "16",
//               "value": "16",
//               "label": "eigrp"
//             },
//             {
//               "id": "17",
//               "value": "17",
//               "label": "rip"
//             },
//             {
//               "id": "18",
//               "value": "18",
//               "label": "rip"
//             },
//             {
//               "id": "19",
//               "value": "19",
//               "label": "rip"
//             },
//             {
//               "id": "20",
//               "value": "20",
//               "label": "rip"
//             },
//             {
//               "id": "21",
//               "value": "21",
//               "label": "rip"
//             },
//             {
//               "id": "22",
//               "value": "22",
//               "label": "rip"
//             },
//             {
//               "id": "23",
//               "value": "23",
//               "label": "rip"
//             },
//             {
//               "id": "24",
//               "value": "24",
//               "label": "eigrp"
//             },
//             {
//               "id": "25",
//               "value": "25",
//               "label": "eigrp"
//             },
//             {
//               "id": "26",
//               "value": "26",
//               "label": "eigrp"
//             },
//             {
//               "id": "27",
//               "value": "27",
//               "label": "eigrp"
//             },
//             {
//               "id": "28",
//               "value": "28",
//               "label": "eigrp"
//             },
//             {
//               "id": "29",
//               "value": "29",
//               "label": "eigrp"
//             },
//             {
//               "id": "30",
//               "value": "30",
//               "label": "eigrp"
//             },
//             {
//               "id": "31",
//               "value": "31",
//               "label": "eigrp"
//             },
//             {
//               "id": "32",
//               "value": "32",
//               "label": "eigrp"
//             },
//             {
//               "id": "33",
//               "value": "33",
//               "label": "eigrp"
//             },
//             {
//               "id": "34",
//               "value": "34",
//               "label": "eigrp"
//             },
//             {
//               "id": "35",
//               "value": "35",
//               "label": "eigrp"
//             },
//             {
//               "id": "36",
//               "value": "36",
//               "label": "eigrp"
//             },
//             {
//               "id": "37",
//               "value": "37",
//               "label": "eigrp"
//             },
//             {
//               "id": "38",
//               "value": "38",
//               "label": "ospf"
//             },
//             {
//               "id": "39",
//               "value": "39",
//               "label": "ospf"
//             },
//             {
//               "id": "40",
//               "value": "40",
//               "label": "ospf"
//             },
//             {
//               "id": "41",
//               "value": "41",
//               "label": "ospf"
//             },
//             {
//               "id": "42",
//               "value": "42",
//               "label": "ospf"
//             },
//             {
//               "id": "43",
//               "value": "43",
//               "label": "ospf"
//             },
//             {
//               "id": "44",
//               "value": "44",
//               "label": "ospf"
//             },
//             {
//               "id": "45",
//               "value": "45",
//               "label": "ospf"
//             },
//             {
//               "id": "46",
//               "value": "46",
//               "label": "ospf"
//             },
//             {
//               "id": "47",
//               "value": "47",
//               "label": "ospf"
//             },
//             {
//               "id": "48",
//               "value": "48",
//               "label": "ospf"
//             },
//             {
//               "id": "49",
//               "value": "49",
//               "label": "ospf"
//             },
//             {
//               "id": "50",
//               "value": "50",
//               "label": "ospf"
//             },
//             {
//               "id": "51",
//               "value": "51",
//               "label": "ospf"
//             },
//             {
//               "id": "52",
//               "value": "52",
//               "label": "ospf"
//             },
//             {
//               "id": "53",
//               "value": "53",
//               "label": "isis"
//             },
//             {
//               "id": "54",
//               "value": "54",
//               "label": "isis"
//             },
//             {
//               "id": "55",
//               "value": "55",
//               "label": "bgp"
//             },
//             {
//               "id": "56",
//               "value": "56",
//               "label": "bgp"
//             },
//             {
//               "id": "57",
//               "value": "57",
//               "label": "bgp"
//             },
//             {
//               "id": "58",
//               "value": "58",
//               "label": "bgp"
//             },
//             {
//               "id": "59",
//               "value": "59",
//               "label": "isis"
//             },
//             {
//               "id": "60",
//               "value": "60",
//               "label": "isis"
//             },
//             {
//               "id": "61",
//               "value": "61",
//               "label": "isis"
//             },
//             {
//               "id": "62",
//               "value": "62",
//               "label": "isis"
//             },
//             {
//               "id": "63",
//               "value": "63",
//               "label": "isis"
//             },
//             {
//               "id": "64",
//               "value": "64",
//               "label": "ospf"
//             },
//             {
//               "id": "65",
//               "value": "65",
//               "label": "ospf"
//             },
//             {
//               "id": "66",
//               "value": "66",
//               "label": "rip"
//             },
//             {
//               "id": "67",
//               "value": "67",
//               "label": "rip"
//             },
//             {
//               "id": "68",
//               "value": "68",
//               "label": "rip"
//             },
//             {
//               "id": "69",
//               "value": "69",
//               "label": "rip"
//             },
//             {
//               "id": "70",
//               "value": "70",
//               "label": "eigrp"
//             },
//             {
//               "id": "71",
//               "value": "71",
//               "label": "eigrp"
//             },
//             {
//               "id": "72",
//               "value": "72",
//               "label": "eigrp"
//             },
//             {
//               "id": "73",
//               "value": "73",
//               "label": "eigrp"
//             },
//             {
//               "id": "74",
//               "value": "74",
//               "label": "eigrp"
//             },
//             {
//               "id": "75",
//               "value": "75",
//               "label": "eigrp"
//             },
//             {
//               "id": "76",
//               "value": "76",
//               "label": "ospf"
//             },
//             {
//               "id": "77",
//               "value": "77",
//               "label": "ospf"
//             },
//             {
//               "id": "78",
//               "value": "78",
//               "label": "ospf"
//             },
//             {
//               "id": "79",
//               "value": "79",
//               "label": "ospf"
//             },
//             {
//               "id": "80",
//               "value": "80",
//               "label": "ospf"
//             },
//             {
//               "id": "81",
//               "value": "81",
//               "label": "ospf"
//             },
//             {
//               "id": "82",
//               "value": "82",
//               "label": "ospf"
//             },
//             {
//               "id": "83",
//               "value": "83",
//               "label": "ospf"
//             },
//             {
//               "id": "84",
//               "value": "84",
//               "label": "ospf"
//             },
//             {
//               "id": "85",
//               "value": "85",
//               "label": "ospf"
//             },
//             {
//               "id": "86",
//               "value": "86",
//               "label": "ospf"
//             },
//             {
//               "id": "87",
//               "value": "87",
//               "label": "ospf"
//             },
//             {
//               "id": "88",
//               "value": "88",
//               "label": "ospf"
//             },
//             {
//               "id": "89",
//               "value": "89",
//               "label": "ospf"
//             },
//             {
//               "id": "90",
//               "value": "90",
//               "label": "ospf"
//             },
//             {
//               "id": "91",
//               "value": "91",
//               "label": "eigrp"
//             },
//             {
//               "id": "92",
//               "value": "92",
//               "label": "eigrp"
//             },
//             {
//               "id": "93",
//               "value": "93",
//               "label": "eigrp"
//             },
//             {
//               "id": "94",
//               "value": "94",
//               "label": "eigrp"
//             },
//             {
//               "id": "95",
//               "value": "95",
//               "label": "eigrp"
//             },
//             {
//               "id": "96",
//               "value": "96",
//               "label": "eigrp"
//             },
//             {
//               "id": "97",
//               "value": "97",
//               "label": "eigrp"
//             },
//             {
//               "id": "98",
//               "value": "98",
//               "label": "eigrp"
//             },
//             {
//               "id": "99",
//               "value": "99",
//               "label": "eigrp"
//             },
//             {
//               "id": "100",
//               "value": "100",
//               "label": "eigrp"
//             }
//           ],
//           "edges": [
//             {
//               "source": "1",
//               "target": "2"
//             },
//             {
//               "source": "1",
//               "target": "3"
//             },
//             {
//               "source": "2",
//               "target": "4"
//             },
//             {
//               "source": "2",
//               "target": "5"
//             },
//             {
//               "source": "3",
//               "target": "6"
//             },
//             {
//               "source": "4",
//               "target": "7"
//             },
//             {
//               "source": "6",
//               "target": "8"
//             },
//             {
//               "source": "5",
//               "target": "9"
//             },
//             {
//               "source": "6",
//               "target": "10"
//             },
//             {
//               "source": "7",
//               "target": "11"
//             },
//             {
//               "source": "8",
//               "target": "12"
//             },
//             {
//               "source": "9",
//               "target": "13"
//             },
//             {
//               "source": "13",
//               "target": "53"
//             },
//             {
//               "source": "13",
//               "target": "54"
//             },
//             {
//               "source": "53",
//               "target": "59"
//             },
//             {
//               "source": "59",
//               "target": "60"
//             },
//             {
//               "source": "59",
//               "target": "61"
//             },
//             {
//               "source": "54",
//               "target": "62"
//             },
//             {
//               "source": "54",
//               "target": "63"
//             },
//             {
//               "source": "12",
//               "target": "55"
//             },
//             {
//               "source": "12",
//               "target": "56"
//             },
//             {
//               "source": "56",
//               "target": "57"
//             },
//             {
//               "source": "56",
//               "target": "58"
//             },
//             {
//               "source": "11",
//               "target": "51"
//             },
//             {
//               "source": "11",
//               "target": "52"
//             },
//             {
//               "source": "51",
//               "target": "64"
//             },
//             {
//               "source": "51",
//               "target": "65"
//             },
//             {
//               "source": "64",
//               "target": "88"
//             },
//             {
//               "source": "64",
//               "target": "89"
//             },
//             {
//               "source": "65",
//               "target": "90"
//             },
//             {
//               "source": "3",
//               "target": "14"
//             },
//             {
//               "source": "14",
//               "target": "15"
//             },
//             {
//               "source": "15",
//               "target": "17"
//             },
//             {
//               "source": "15",
//               "target": "18"
//             },
//             {
//               "source": "17",
//               "target": "21"
//             },
//             {
//               "source": "17",
//               "target": "22"
//             },
//             {
//               "source": "17",
//               "target": "23"
//             },
//             {
//               "source": "22",
//               "target": "66"
//             },
//             {
//               "source": "22",
//               "target": "67"
//             },
//             {
//               "source": "23",
//               "target": "68"
//             },
//             {
//               "source": "23",
//               "target": "69"
//             },
//             {
//               "source": "18",
//               "target": "19"
//             },
//             {
//               "source": "18",
//               "target": "20"
//             },
//             {
//               "source": "14",
//               "target": "16"
//             },
//             {
//               "source": "16",
//               "target": "24"
//             },
//             {
//               "source": "24",
//               "target": "26"
//             },
//             {
//               "source": "24",
//               "target": "27"
//             },
//             {
//               "source": "26",
//               "target": "28"
//             },
//             {
//               "source": "28",
//               "target": "70"
//             },
//             {
//               "source": "28",
//               "target": "71"
//             },
//             {
//               "source": "27",
//               "target": "29"
//             },
//             {
//               "source": "16",
//               "target": "25"
//             },
//             {
//               "source": "25",
//               "target": "30"
//             },
//             {
//               "source": "30",
//               "target": "32"
//             },
//             {
//               "source": "30",
//               "target": "33"
//             },
//             {
//               "source": "33",
//               "target": "34"
//             },
//             {
//               "source": "33",
//               "target": "35"
//             },
//             {
//               "source": "34",
//               "target": "72"
//             },
//             {
//               "source": "34",
//               "target": "73"
//             },
//             {
//               "source": "73",
//               "target": "74"
//             },
//             {
//               "source": "73",
//               "target": "75"
//             },
//             {
//               "source": "25",
//               "target": "31"
//             },
//             {
//               "source": "31",
//               "target": "37"
//             },
//             {
//               "source": "37",
//               "target": "91"
//             },
//             {
//               "source": "91",
//               "target": "93"
//             },
//             {
//               "source": "91",
//               "target": "94"
//             },
//             {
//               "source": "93",
//               "target": "100"
//             },
//             {
//               "source": "94",
//               "target": "99"
//             },
//             {
//               "source": "31",
//               "target": "36"
//             },
//             {
//               "source": "36",
//               "target": "92"
//             },
//             {
//               "source": "92",
//               "target": "95"
//             },
//             {
//               "source": "92",
//               "target": "96"
//             },
//             {
//               "source": "95",
//               "target": "98"
//             },
//             {
//               "source": "96",
//               "target": "97"
//             },
//             {
//               "source": "4",
//               "target": "39"
//             },
//             {
//               "source": "4",
//               "target": "38"
//             },
//             {
//               "source": "38",
//               "target": "41"
//             },
//             {
//               "source": "41",
//               "target": "44"
//             },
//             {
//               "source": "41",
//               "target": "45"
//             },
//             {
//               "source": "45",
//               "target": "48"
//             },
//             {
//               "source": "45",
//               "target": "49"
//             },
//             {
//               "source": "48",
//               "target": "78"
//             },
//             {
//               "source": "44",
//               "target": "50"
//             },
//             {
//               "source": "50",
//               "target": "76"
//             },
//             {
//               "source": "50",
//               "target": "77"
//             },
//             {
//               "source": "76",
//               "target": "83"
//             },
//             {
//               "source": "83",
//               "target": "84"
//             },
//             {
//               "source": "83",
//               "target": "85"
//             },
//             {
//               "source": "77",
//               "target": "86"
//             },
//             {
//               "source": "77",
//               "target": "87"
//             },
//             {
//               "source": "38",
//               "target": "40"
//             },
//             {
//               "source": "40",
//               "target": "43"
//             },
//             {
//               "source": "40",
//               "target": "42"
//             },
//             {
//               "source": "42",
//               "target": "47"
//             },
//             {
//               "source": "47",
//               "target": "81"
//             },
//             {
//               "source": "47",
//               "target": "82"
//             },
//             {
//               "source": "42",
//               "target": "46"
//             },
//             {
//               "source": "46",
//               "target": "79"
//             },
//             {
//               "source": "46",
//               "target": "80"
//             }
//           ]
//         }
    
//     }
// ]`) 


export const data = JSON.parse(`[
  {
    "hierarchical": 
    {
      "nodes": [
        {
          "id": "1",
          "value": "1",
          "label": "isis"
        },
        {
          "id": "2",
          "value": "2",
          "label": "isis"
        },
        {
          "id": "3",
          "value": "3",
          "label": "bgp"
        },
        {
          "id": "4",
          "value": "4",
          "label": "ospf"
        },
        {
          "id": "5",
          "value": "5",
          "label": "isis"
        },
        {
          "id": "6",
          "value": "6",
          "label": "bgp"
        },
        {
          "id": "7",
          "value": "7",
          "label": "ospf"
        },
        {
          "id": "8",
          "value": "8",
          "label": "bgp"
        },
        {
          "id": "9",
          "value": "9",
          "label": "isis"
        },
        {
          "id": "10",
          "value": "10",
          "label": "bgp"
        },
        {
          "id": "11",
          "value": "11",
          "label": "ospf"
        },
        {
          "id": "12",
          "value": "12",
          "label": "bgp"
        },
        {
          "id": "13",
          "value": "13",
          "label": "isis"
        },
        {
          "id": "14",
          "value": "14",
          "label": "rip"
        },
        {
          "id": "15",
          "value": "15",
          "label": "rip"
        },
        {
          "id": "16",
          "value": "16",
          "label": "eigrp"
        },
        {
          "id": "17",
          "value": "17",
          "label": "rip"
        },
        {
          "id": "18",
          "value": "18",
          "label": "rip"
        },
        {
          "id": "19",
          "value": "19",
          "label": "rip"
        },
        {
          "id": "20",
          "value": "20",
          "label": "rip"
        },
        {
          "id": "21",
          "value": "21",
          "label": "rip"
        },
        {
          "id": "22",
          "value": "22",
          "label": "rip"
        },
        {
          "id": "23",
          "value": "23",
          "label": "rip"
        },
        {
          "id": "24",
          "value": "24",
          "label": "eigrp"
        },
        {
          "id": "25",
          "value": "25",
          "label": "eigrp"
        },
        {
          "id": "26",
          "value": "26",
          "label": "eigrp"
        },
        {
          "id": "27",
          "value": "27",
          "label": "eigrp"
        },
        {
          "id": "28",
          "value": "28",
          "label": "eigrp"
        },
        {
          "id": "29",
          "value": "29",
          "label": "eigrp"
        },
        {
          "id": "30",
          "value": "30",
          "label": "eigrp"
        },
        {
          "id": "31",
          "value": "31",
          "label": "eigrp"
        },
        {
          "id": "32",
          "value": "32",
          "label": "eigrp"
        },
        {
          "id": "33",
          "value": "33",
          "label": "eigrp"
        },
        {
          "id": "34",
          "value": "34",
          "label": "eigrp"
        },
        {
          "id": "35",
          "value": "35",
          "label": "eigrp"
        },
        {
          "id": "36",
          "value": "36",
          "label": "eigrp"
        },
        {
          "id": "37",
          "value": "37",
          "label": "eigrp"
        },
        {
          "id": "38",
          "value": "38",
          "label": "ospf"
        },
        {
          "id": "39",
          "value": "39",
          "label": "ospf"
        },
        {
          "id": "40",
          "value": "40",
          "label": "ospf"
        },
        {
          "id": "41",
          "value": "41",
          "label": "ospf"
        },
        {
          "id": "42",
          "value": "42",
          "label": "ospf"
        },
        {
          "id": "43",
          "value": "43",
          "label": "ospf"
        },
        {
          "id": "44",
          "value": "44",
          "label": "ospf"
        },
        {
          "id": "45",
          "value": "45",
          "label": "ospf"
        },
        {
          "id": "46",
          "value": "46",
          "label": "ospf"
        },
        {
          "id": "47",
          "value": "47",
          "label": "ospf"
        },
        {
          "id": "48",
          "value": "48",
          "label": "ospf"
        },
        {
          "id": "49",
          "value": "49",
          "label": "ospf"
        },
        {
          "id": "50",
          "value": "50",
          "label": "ospf"
        },
        {
          "id": "51",
          "value": "51",
          "label": "ospf"
        },
        {
          "id": "52",
          "value": "52",
          "label": "ospf"
        },
        {
          "id": "53",
          "value": "53",
          "label": "isis"
        },
        {
          "id": "54",
          "value": "54",
          "label": "isis"
        },
        {
          "id": "55",
          "value": "55",
          "label": "bgp"
        },
        {
          "id": "56",
          "value": "56",
          "label": "bgp"
        },
        {
          "id": "57",
          "value": "57",
          "label": "bgp"
        },
        {
          "id": "58",
          "value": "58",
          "label": "bgp"
        },
        {
          "id": "59",
          "value": "59",
          "label": "isis"
        },
        {
          "id": "60",
          "value": "60",
          "label": "isis"
        },
        {
          "id": "61",
          "value": "61",
          "label": "isis"
        },
        {
          "id": "62",
          "value": "62",
          "label": "isis"
        },
        {
          "id": "63",
          "value": "63",
          "label": "isis"
        },
        {
          "id": "64",
          "value": "64",
          "label": "ospf"
        },
        {
          "id": "65",
          "value": "65",
          "label": "ospf"
        },
        {
          "id": "66",
          "value": "66",
          "label": "rip"
        },
        {
          "id": "67",
          "value": "67",
          "label": "rip"
        },
        {
          "id": "68",
          "value": "68",
          "label": "rip"
        },
        {
          "id": "69",
          "value": "69",
          "label": "rip"
        },
        {
          "id": "70",
          "value": "70",
          "label": "eigrp"
        },
        {
          "id": "71",
          "value": "71",
          "label": "eigrp"
        },
        {
          "id": "72",
          "value": "72",
          "label": "eigrp"
        },
        {
          "id": "73",
          "value": "73",
          "label": "eigrp"
        },
        {
          "id": "74",
          "value": "74",
          "label": "eigrp"
        },
        {
          "id": "75",
          "value": "75",
          "label": "eigrp"
        },
        {
          "id": "76",
          "value": "76",
          "label": "ospf"
        },
        {
          "id": "77",
          "value": "77",
          "label": "ospf"
        },
        {
          "id": "78",
          "value": "78",
          "label": "ospf"
        },
        {
          "id": "79",
          "value": "79",
          "label": "ospf"
        },
        {
          "id": "80",
          "value": "80",
          "label": "ospf"
        },
        {
          "id": "81",
          "value": "81",
          "label": "ospf"
        },
        {
          "id": "82",
          "value": "82",
          "label": "ospf"
        },
        {
          "id": "83",
          "value": "83",
          "label": "ospf"
        },
        {
          "id": "84",
          "value": "84",
          "label": "ospf"
        },
        {
          "id": "85",
          "value": "85",
          "label": "ospf"
        },
        {
          "id": "86",
          "value": "86",
          "label": "ospf"
        },
        {
          "id": "87",
          "value": "87",
          "label": "ospf"
        },
        {
          "id": "88",
          "value": "88",
          "label": "ospf"
        },
        {
          "id": "89",
          "value": "89",
          "label": "ospf"
        },
        {
          "id": "90",
          "value": "90",
          "label": "ospf"
        },
        {
          "id": "91",
          "value": "91",
          "label": "eigrp"
        },
        {
          "id": "92",
          "value": "92",
          "label": "eigrp"
        },
        {
          "id": "93",
          "value": "93",
          "label": "eigrp"
        },
        {
          "id": "94",
          "value": "94",
          "label": "eigrp"
        },
        {
          "id": "95",
          "value": "95",
          "label": "eigrp"
        },
        {
          "id": "96",
          "value": "96",
          "label": "eigrp"
        },
        {
          "id": "97",
          "value": "97",
          "label": "eigrp"
        },
        {
          "id": "98",
          "value": "98",
          "label": "eigrp"
        },
        {
          "id": "99",
          "value": "99",
          "label": "eigrp"
        },
        {
          "id": "100",
          "value": "100",
          "label": "eigrp"
        },
        {
          "id": "101",
          "value": "101",
          "label": "ospf"
        },
        {
          "id": "102",
          "value": "102",
          "label": "ospf"
        },
        {
          "id": "103",
          "value": "103",
          "label": "ospf"
        },
        {
          "id": "104",
          "value": "104",
          "label": "ospf"
        },
        {
          "id": "105",
          "value": "105",
          "label": "ospf"
        },
        {
          "id": "106",
          "value": "106",
          "label": "ospf"
        },
        {
          "id": "107",
          "value": "107",
          "label": "ospf"
        },
        {
          "id": "108",
          "value": "108",
          "label": "ospf"
        },
        {
          "id": "109",
          "value": "109",
          "label": "ospf"
        },
        {
          "id": "110",
          "value": "110",
          "label": "ospf"
        },
        {
          "id": "111",
          "value": "111",
          "label": "ospf"
        },
        {
          "id": "112",
          "value": "112",
          "label": "ospf"
        },
        {
          "id": "113",
          "value": "113",
          "label": "ospf"
        },
        {
          "id": "114",
          "value": "114",
          "label": "ospf"
        },
        {
          "id": "115",
          "value": "115",
          "label": "ospf"
        },
        {
          "id": "116",
          "value": "116",
          "label": "ospf"
        },
        {
          "id": "117",
          "value": "117",
          "label": "ospf"
        },
        {
          "id": "118",
          "value": "118",
          "label": "ospf"
        },
        {
          "id": "119",
          "value": "119",
          "label": "ospf"
        },
        {
          "id": "120",
          "value": "120",
          "label": "ospf"
        },
        {
          "id": "121",
          "value": "121",
          "label": "ospf"
        },
        {
          "id": "122",
          "value": "122",
          "label": "ospf"
        },
        {
          "id": "123",
          "value": "123",
          "label": "ospf"
        },
        {
          "id": "124",
          "value": "124",
          "label": "ospf"
        },
        {
          "id": "125",
          "value": "125",
          "label": "ospf"
        },
        {
          "id": "126",
          "value": "126",
          "label": "ospf"
        },
        {
          "id": "127",
          "value": "127",
          "label": "ospf"
        },
        {
          "id": "128",
          "value": "128",
          "label": "ospf"
        },
        {
          "id": "129",
          "value": "129",
          "label": "ospf"
        },
        {
          "id": "130",
          "value": "130",
          "label": "ospf"
        },
        {
          "id": "131",
          "value": "131",
          "label": "ospf"
        },
        {
          "id": "132",
          "value": "132",
          "label": "ospf"
        },
        {
          "id": "133",
          "value": "133",
          "label": "ospf"
        },
        {
          "id": "134",
          "value": "134",
          "label": "ospf"
        },
        {
          "id": "135",
          "value": "135",
          "label": "ospf"
        },
        {
          "id": "136",
          "value": "136",
          "label": "ospf"
        },
        {
          "id": "137",
          "value": "137",
          "label": "ospf"
        },
        {
          "id": "138",
          "value": "138",
          "label": "ospf"
        },
        {
          "id": "139",
          "value": "139",
          "label": "ospf"
        },
        {
          "id": "140",
          "value": "140",
          "label": "ospf"
        },
        {
          "id": "141",
          "value": "141",
          "label": "ospf"
        },
        {
          "id": "142",
          "value": "142",
          "label": "ospf"
        },
        {
          "id": "143",
          "value": "143",
          "label": "ospf"
        },
        {
          "id": "144",
          "value": "144",
          "label": "ospf"
        },
        {
          "id": "145",
          "value": "145",
          "label": "ospf"
        },
        {
          "id": "146",
          "value": "146",
          "label": "ospf"
        },
        {
          "id": "147",
          "value": "147",
          "label": "ospf"
        },
        {
          "id": "148",
          "value": "148",
          "label": "ospf"
        },
        {
          "id": "149",
          "value": "149",
          "label": "rip"
        },
        {
          "id": "150",
          "value": "150",
          "label": "rip"
        },
        {
          "id": "151",
          "value": "151",
          "label": "rip"
        },
        {
          "id": "152",
          "value": "152",
          "label": "rip"
        },
        {
          "id": "153",
          "value": "153",
          "label": "rip"
        },
        {
          "id": "154",
          "value": "154",
          "label": "rip"
        },
        {
          "id": "155",
          "value": "155",
          "label": "rip"
        },
        {
          "id": "156",
          "value": "156",
          "label": "rip"
        },
        {
          "id": "157",
          "value": "157",
          "label": "rip"
        },
        {
          "id": "158",
          "value": "158",
          "label": "rip"
        },
        {
          "id": "159",
          "value": "159",
          "label": "rip"
        },
        {
          "id": "160",
          "value": "160",
          "label": "rip"
        },
        {
          "id": "161",
          "value": "161",
          "label": "rip"
        },
        {
          "id": "162",
          "value": "162",
          "label": "rip"
        },
        {
          "id": "163",
          "value": "163",
          "label": "rip"
        },
        {
          "id": "164",
          "value": "164",
          "label": "rip"
        },
        {
          "id": "165",
          "value": "165",
          "label": "rip"
        },
        {
          "id": "166",
          "value": "166",
          "label": "rip"
        },
        {
          "id": "167",
          "value": "167",
          "label": "rip"
        },
        {
          "id": "168",
          "value": "168",
          "label": "rip"
        },
        {
          "id": "169",
          "value": "169",
          "label": "rip"
        },
        {
          "id": "170",
          "value": "170",
          "label": "rip"
        },
        {
          "id": "171",
          "value": "171",
          "label": "rip"
        },
        {
          "id": "172",
          "value": "172",
          "label": "rip"
        },
        {
          "id": "173",
          "value": "173",
          "label": "rip"
        },
        {
          "id": "174",
          "value": "174",
          "label": "rip"
        },
        {
          "id": "175",
          "value": "175",
          "label": "rip"
        },
        {
          "id": "176",
          "value": "176",
          "label": "rip"
        },
        {
          "id": "177",
          "value": "177",
          "label": "rip"
        },
        {
          "id": "178",
          "value": "178",
          "label": "rip"
        },
        {
          "id": "179",
          "value": "179",
          "label": "eigrp"
        },
        {
          "id": "180",
          "value": "180",
          "label": "eigrp"
        },
        {
          "id": "181",
          "value": "181",
          "label": "eigrp"
        },
        {
          "id": "182",
          "value": "182",
          "label": "eigrp"
        },
        {
          "id": "183",
          "value": "183",
          "label": "eigrp"
        },
        {
          "id": "184",
          "value": "184",
          "label": "eigrp"
        },
        {
          "id": "185",
          "value": "185",
          "label": "eigrp"
        },
        {
          "id": "186",
          "value": "186",
          "label": "eigrp"
        },
        {
          "id": "187",
          "value": "187",
          "label": "eigrp"
        },
        {
          "id": "188",
          "value": "188",
          "label": "eigrp"
        },
        {
          "id": "189",
          "value": "189",
          "label": "eigrp"
        },
        {
          "id": "190",
          "value": "190",
          "label": "eigrp"
        },
        {
          "id": "191",
          "value": "191",
          "label": "eigrp"
        },
        {
          "id": "192",
          "value": "192",
          "label": "eigrp"
        },
        {
          "id": "193",
          "value": "193",
          "label": "eigrp"
        },
        {
          "id": "194",
          "value": "194",
          "label": "eigrp"
        },
        {
          "id": "195",
          "value": "195",
          "label": "eigrp"
        },
        {
          "id": "196",
          "value": "196",
          "label": "eigrp"
        },
        {
          "id": "197",
          "value": "197",
          "label": "eigrp"
        },
        {
          "id": "198",
          "value": "198",
          "label": "eigrp"
        },
        {
          "id": "199",
          "value": "199",
          "label": "eigrp"
        },
        {
          "id": "200",
          "value": "200",
          "label": "eigrp"
        },
        {
          "id": "201",
          "value": "201",
          "label": "eigrp"
        },
        {
          "id": "202",
          "value": "202",
          "label": "eigrp"
        },
        {
          "id": "203",
          "value": "203",
          "label": "eigrp"
        },
        {
          "id": "204",
          "value": "204",
          "label": "eigrp"
        },
        {
          "id": "205",
          "value": "205",
          "label": "eigrp"
        },
        {
          "id": "206",
          "value": "206",
          "label": "eigrp"
        },
        {
          "id": "207",
          "value": "207",
          "label": "eigrp"
        },
        {
          "id": "208",
          "value": "208",
          "label": "eigrp"
        },
        {
          "id": "209",
          "value": "209",
          "label": "eigrp"
        },
        {
          "id": "210",
          "value": "210",
          "label": "eigrp"
        },
        {
          "id": "211",
          "value": "211",
          "label": "eigrp"
        },
        {
          "id": "212",
          "value": "212",
          "label": "eigrp"
        },
        {
          "id": "213",
          "value": "213",
          "label": "eigrp"
        },
        {
          "id": "214",
          "value": "214",
          "label": "eigrp"
        },
        {
          "id": "215",
          "value": "215",
          "label": "eigrp"
        },
        {
          "id": "216",
          "value": "216",
          "label": "eigrp"
        },
        {
          "id": "217",
          "value": "217",
          "label": "eigrp"
        },
        {
          "id": "218",
          "value": "218",
          "label": "eigrp"
        },
        {
          "id": "219",
          "value": "219",
          "label": "eigrp"
        },
        {
          "id": "220",
          "value": "220",
          "label": "eigrp"
        },
        {
          "id": "221",
          "value": "221",
          "label": "eigrp"
        },
        {
          "id": "222",
          "value": "222",
          "label": "eigrp"
        },
        {
          "id": "223",
          "value": "223",
          "label": "eigrp"
        },
        {
          "id": "224",
          "value": "224",
          "label": "eigrp"
        },
        {
          "id": "225",
          "value": "225",
          "label": "eigrp"
        },
        {
          "id": "226",
          "value": "226",
          "label": "ripng"
        },
        {
          "id": "227",
          "value": "227",
          "label": "ldp"
        },
        {
          "id": "228",
          "value": "228",
          "label": "ripng"
        },
        {
          "id": "229",
          "value": "229",
          "label": "ripng"
        },
        {
          "id": "230",
          "value": "230",
          "label": "ripng"
        },
        {
          "id": "231",
          "value": "231",
          "label": "ripng"
        },
        {
          "id": "232",
          "value": "232",
          "label": "ripng"
        },
        {
          "id": "233",
          "value": "233",
          "label": "ripng"
        },
        {
          "id": "234",
          "value": "234",
          "label": "ripng"
        },
        {
          "id": "235",
          "value": "235",
          "label": "ripng"
        },
        {
          "id": "236",
          "value": "236",
          "label": "ripng"
        },
        {
          "id": "237",
          "value": "237",
          "label": "ripng"
        },
        {
          "id": "238",
          "value": "238",
          "label": "ripng"
        },
        {
          "id": "239",
          "value": "239",
          "label": "ripng"
        },
        {
          "id": "240",
          "value": "240",
          "label": "ripng"
        },
        {
          "id": "241",
          "value": "241",
          "label": "ripng"
        },
        {
          "id": "242",
          "value": "242",
          "label": "ripng"
        },
        {
          "id": "243",
          "value": "243",
          "label": "ripng"
        },
        {
          "id": "244",
          "value": "244",
          "label": "ripng"
        },
        {
          "id": "245",
          "value": "245",
          "label": "ripng"
        },
        {
          "id": "246",
          "value": "246",
          "label": "ripng"
        },
        {
          "id": "247",
          "value": "247",
          "label": "ripng"
        },
        {
          "id": "248",
          "value": "248",
          "label": "ripng"
        },
        {
          "id": "249",
          "value": "249",
          "label": "ripng"
        },
        {
          "id": "250",
          "value": "250",
          "label": "ripng"
        },
        {
          "id": "251",
          "value": "251",
          "label": "ldp"
        },
        {
          "id": "252",
          "value": "252",
          "label": "ldp"
        },
        {
          "id": "253",
          "value": "253",
          "label": "ldp"
        },
        {
          "id": "254",
          "value": "254",
          "label": "ldp"
        },
        {
          "id": "255",
          "value": "255",
          "label": "ldp"
        },
        {
          "id": "256",
          "value": "256",
          "label": "ldp"
        },
        {
          "id": "257",
          "value": "257",
          "label": "ldp"
        },
        {
          "id": "258",
          "value": "258",
          "label": "ldp"
        },
        {
          "id": "259",
          "value": "259",
          "label": "ldp"
        },
        {
          "id": "260",
          "value": "260",
          "label": "ldp"
        },
        {
          "id": "261",
          "value": "261",
          "label": "ldp"
        },
        {
          "id": "262",
          "value": "262",
          "label": "ldp"
        },
        {
          "id": "263",
          "value": "263",
          "label": "ldp"
        },
        {
          "id": "264",
          "value": "264",
          "label": "ldp"
        },
        {
          "id": "265",
          "value": "265",
          "label": "ldp"
        },
        {
          "id": "266",
          "value": "266",
          "label": "ldp"
        },
        {
          "id": "267",
          "value": "267",
          "label": "ldp"
        },
        {
          "id": "268",
          "value": "268",
          "label": "ldp"
        },
        {
          "id": "269",
          "value": "269",
          "label": "ldp"
        },
        {
          "id": "270",
          "value": "270",
          "label": "ldp"
        },
        {
          "id": "271",
          "value": "271",
          "label": "ldp"
        },
        {
          "id": "272",
          "value": "272",
          "label": "ldp"
        },
        {
          "id": "273",
          "value": "273",
          "label": "ldp"
        },
        {
          "id": "274",
          "value": "274",
          "label": "ldp"
        },
        {
          "id": "275",
          "value": "275",
          "label": "ldp"
        },
        {
          "id": "276",
          "value": "276",
          "label": "ldp"
        },
        {
          "id": "277",
          "value": "277",
          "label": "ldp"
        },
        {
          "id": "278",
          "value": "278",
          "label": "ldp"
        },
        {
          "id": "279",
          "value": "279",
          "label": "ldp"
        },
        {
          "id": "280",
          "value": "280",
          "label": "ldp"
        },
        {
          "id": "281",
          "value": "281",
          "label": "ldp"
        },
        {
          "id": "282",
          "value": "282",
          "label": "ldp"
        },
        {
          "id": "283",
          "value": "283",
          "label": "ldp"
        },
        {
          "id": "284",
          "value": "284",
          "label": "ldp"
        },
        {
          "id": "285",
          "value": "285",
          "label": "ldp"
        },
        {
          "id": "286",
          "value": "286",
          "label": "ldp"
        },
        {
          "id": "287",
          "value": "287",
          "label": "ldp"
        },
        {
          "id": "288",
          "value": "288",
          "label": "ldp"
        },
        {
          "id": "289",
          "value": "289",
          "label": "ldp"
        },
        {
          "id": "290",
          "value": "290",
          "label": "ldp"
        },
        {
          "id": "291",
          "value": "291",
          "label": "ldp"
        },
        {
          "id": "292",
          "value": "292",
          "label": "ldp"
        },
        {
          "id": "293",
          "value": "293",
          "label": "ldp"
        },
        {
          "id": "294",
          "value": "294",
          "label": "ldp"
        },
        {
          "id": "295",
          "value": "295",
          "label": "ldp"
        },
        {
          "id": "296",
          "value": "296",
          "label": "ldp"
        },
        {
          "id": "297",
          "value": "297",
          "label": "ldp"
        },
        {
          "id": "298",
          "value": "298",
          "label": "ldp"
        },
        {
          "id": "299",
          "value": "299",
          "label": "ldp"
        },
        {
          "id": "300",
          "value": "300",
          "label": "ldp"
        }
      ],
      "edges": [
        {
          "source": "1",
          "target": "2"
        },
        {
          "source": "1",
          "target": "3"
        },
        {
          "source": "2",
          "target": "4"
        },
        {
          "source": "2",
          "target": "5"
        },
        {
          "source": "3",
          "target": "6"
        },
        {
          "source": "4",
          "target": "7"
        },
        {
          "source": "6",
          "target": "8"
        },
        {
          "source": "5",
          "target": "9"
        },
        {
          "source": "6",
          "target": "10"
        },
        {
          "source": "7",
          "target": "11"
        },
        {
          "source": "8",
          "target": "12"
        },
        {
          "source": "9",
          "target": "13"
        },
        {
          "source": "13",
          "target": "53"
        },
        {
          "source": "13",
          "target": "54"
        },
        {
          "source": "53",
          "target": "59"
        },
        {
          "source": "59",
          "target": "60"
        },
        {
          "source": "59",
          "target": "61"
        },
        {
          "source": "54",
          "target": "62"
        },
        {
          "source": "54",
          "target": "63"
        },
        {
          "source": "12",
          "target": "55"
        },
        {
          "source": "12",
          "target": "56"
        },
        {
          "source": "56",
          "target": "57"
        },
        {
          "source": "56",
          "target": "58"
        },
        {
          "source": "11",
          "target": "51"
        },
        {
          "source": "11",
          "target": "52"
        },
        {
          "source": "51",
          "target": "64"
        },
        {
          "source": "51",
          "target": "65"
        },
        {
          "source": "64",
          "target": "88"
        },
        {
          "source": "64",
          "target": "89"
        },
        {
          "source": "65",
          "target": "90"
        },
        {
          "source": "3",
          "target": "14"
        },
        {
          "source": "14",
          "target": "15"
        },
        {
          "source": "15",
          "target": "17"
        },
        {
          "source": "15",
          "target": "18"
        },
        {
          "source": "17",
          "target": "21"
        },
        {
          "source": "17",
          "target": "22"
        },
        {
          "source": "17",
          "target": "23"
        },
        {
          "source": "22",
          "target": "66"
        },
        {
          "source": "22",
          "target": "67"
        },
        {
          "source": "23",
          "target": "68"
        },
        {
          "source": "23",
          "target": "69"
        },
        {
          "source": "18",
          "target": "19"
        },
        {
          "source": "18",
          "target": "20"
        },
        {
          "source": "14",
          "target": "16"
        },
        {
          "source": "16",
          "target": "24"
        },
        {
          "source": "24",
          "target": "26"
        },
        {
          "source": "24",
          "target": "27"
        },
        {
          "source": "26",
          "target": "28"
        },
        {
          "source": "28",
          "target": "70"
        },
        {
          "source": "28",
          "target": "71"
        },
        {
          "source": "27",
          "target": "29"
        },
        {
          "source": "16",
          "target": "25"
        },
        {
          "source": "25",
          "target": "30"
        },
        {
          "source": "30",
          "target": "32"
        },
        {
          "source": "30",
          "target": "33"
        },
        {
          "source": "33",
          "target": "34"
        },
        {
          "source": "33",
          "target": "35"
        },
        {
          "source": "34",
          "target": "72"
        },
        {
          "source": "34",
          "target": "73"
        },
        {
          "source": "73",
          "target": "74"
        },
        {
          "source": "73",
          "target": "75"
        },
        {
          "source": "25",
          "target": "31"
        },
        {
          "source": "31",
          "target": "37"
        },
        {
          "source": "37",
          "target": "91"
        },
        {
          "source": "91",
          "target": "93"
        },
        {
          "source": "91",
          "target": "94"
        },
        {
          "source": "93",
          "target": "100"
        },
        {
          "source": "94",
          "target": "99"
        },
        {
          "source": "31",
          "target": "36"
        },
        {
          "source": "36",
          "target": "92"
        },
        {
          "source": "92",
          "target": "95"
        },
        {
          "source": "92",
          "target": "96"
        },
        {
          "source": "95",
          "target": "98"
        },
        {
          "source": "96",
          "target": "97"
        },
        {
          "source": "4",
          "target": "39"
        },
        {
          "source": "4",
          "target": "38"
        },
        {
          "source": "38",
          "target": "41"
        },
        {
          "source": "41",
          "target": "44"
        },
        {
          "source": "41",
          "target": "45"
        },
        {
          "source": "45",
          "target": "48"
        },
        {
          "source": "45",
          "target": "49"
        },
        {
          "source": "48",
          "target": "78"
        },
        {
          "source": "44",
          "target": "50"
        },
        {
          "source": "50",
          "target": "76"
        },
        {
          "source": "50",
          "target": "77"
        },
        {
          "source": "76",
          "target": "83"
        },
        {
          "source": "83",
          "target": "84"
        },
        {
          "source": "83",
          "target": "85"
        },
        {
          "source": "77",
          "target": "86"
        },
        {
          "source": "77",
          "target": "87"
        },
        {
          "source": "38",
          "target": "40"
        },
        {
          "source": "40",
          "target": "43"
        },
        {
          "source": "40",
          "target": "42"
        },
        {
          "source": "42",
          "target": "47"
        },
        {
          "source": "47",
          "target": "81"
        },
        {
          "source": "47",
          "target": "82"
        },
        {
          "source": "42",
          "target": "46"
        },
        {
          "source": "46",
          "target": "79"
        },
        {
          "source": "46",
          "target": "80"
        },
        {
          "source": "89",
          "target": "101"
        },
        {
          "source": "101",
          "target": "102"
        },
        {
          "source": "101",
          "target": "103"
        },
        {
          "source": "102",
          "target": "104"
        },
        {
          "source": "102",
          "target": "105"
        },
        {
          "source": "104",
          "target": "106"
        },
        {
          "source": "104",
          "target": "107"
        },
        {
          "source": "106",
          "target": "108"
        },
        {
          "source": "107",
          "target": "111"
        },
        {
          "source": "108",
          "target": "109"
        },
        {
          "source": "108",
          "target": "110"
        },
        {
          "source": "103",
          "target": "112"
        },
        {
          "source": "103",
          "target": "113"
        },
        {
          "source": "112",
          "target": "114"
        },
        {
          "source": "112",
          "target": "115"
        },
        {
          "source": "115",
          "target": "116"
        },
        {
          "source": "115",
          "target": "117"
        },
        {
          "source": "117",
          "target": "118"
        },
        {
          "source": "117",
          "target": "119"
        },
        {
          "source": "113",
          "target": "120"
        },
        {
          "source": "120",
          "target": "121"
        },
        {
          "source": "87",
          "target": "122"
        },
        {
          "source": "122",
          "target": "123"
        },
        {
          "source": "122",
          "target": "124"
        },
        {
          "source": "124",
          "target": "125"
        },
        {
          "source": "124",
          "target": "126"
        },
        {
          "source": "126",
          "target": "127"
        },
        {
          "source": "127",
          "target": "128"
        },
        {
          "source": "127",
          "target": "129"
        },
        {
          "source": "128",
          "target": "130"
        },
        {
          "source": "128",
          "target": "131"
        },
        {
          "source": "82",
          "target": "132"
        },
        {
          "source": "82",
          "target": "133"
        },
        {
          "source": "132",
          "target": "134"
        },
        {
          "source": "132",
          "target": "135"
        },
        {
          "source": "135",
          "target": "136"
        },
        {
          "source": "136",
          "target": "137"
        },
        {
          "source": "136",
          "target": "138"
        },
        {
          "source": "138",
          "target": "139"
        },
        {
          "source": "138",
          "target": "140"
        },
        {
          "source": "140",
          "target": "141"
        },
        {
          "source": "140",
          "target": "142"
        },
        {
          "source": "142",
          "target": "143"
        },
        {
          "source": "142",
          "target": "144"
        },
        {
          "source": "144",
          "target": "145"
        },
        {
          "source": "144",
          "target": "146"
        },
        {
          "source": "145",
          "target": "147"
        },
        {
          "source": "147",
          "target": "148"
        },
        {
          "source": "66",
          "target": "149"
        },
        {
          "source": "66",
          "target": "150"
        },
        {
          "source": "149",
          "target": "151"
        },
        {
          "source": "149",
          "target": "152"
        },
        {
          "source": "152",
          "target": "153"
        },
        {
          "source": "152",
          "target": "154"
        },
        {
          "source": "154",
          "target": "155"
        },
        {
          "source": "155",
          "target": "156"
        },
        {
          "source": "155",
          "target": "157"
        },
        {
          "source": "157",
          "target": "158"
        },
        {
          "source": "157",
          "target": "159"
        },
        {
          "source": "159",
          "target": "160"
        },
        {
          "source": "159",
          "target": "161"
        },
        {
          "source": "161",
          "target": "162"
        },
        {
          "source": "161",
          "target": "163"
        },
        {
          "source": "163",
          "target": "164"
        },
        {
          "source": "68",
          "target": "165"
        },
        {
          "source": "68",
          "target": "166"
        },
        {
          "source": "166",
          "target": "167"
        },
        {
          "source": "166",
          "target": "168"
        },
        {
          "source": "168",
          "target": "169"
        },
        {
          "source": "168",
          "target": "170"
        },
        {
          "source": "170",
          "target": "171"
        },
        {
          "source": "171",
          "target": "172"
        },
        {
          "source": "171",
          "target": "173"
        },
        {
          "source": "173",
          "target": "174"
        },
        {
          "source": "173",
          "target": "175"
        },
        {
          "source": "175",
          "target": "176"
        },
        {
          "source": "175",
          "target": "177"
        },
        {
          "source": "177",
          "target": "178"
        },
        {
          "source": "70",
          "target": "179"
        },
        {
          "source": "70",
          "target": "180"
        },
        {
          "source": "180",
          "target": "181"
        },
        {
          "source": "181",
          "target": "182"
        },
        {
          "source": "181",
          "target": "183"
        },
        {
          "source": "183",
          "target": "184"
        },
        {
          "source": "183",
          "target": "185"
        },
        {
          "source": "185",
          "target": "186"
        },
        {
          "source": "186",
          "target": "187"
        },
        {
          "source": "186",
          "target": "188"
        },
        {
          "source": "188",
          "target": "189"
        },
        {
          "source": "189",
          "target": "190"
        },
        {
          "source": "190",
          "target": "191"
        },
        {
          "source": "190",
          "target": "192"
        },
        {
          "source": "74",
          "target": "193"
        },
        {
          "source": "74",
          "target": "194"
        },
        {
          "source": "194",
          "target": "195"
        },
        {
          "source": "75",
          "target": "196"
        },
        {
          "source": "196",
          "target": "197"
        },
        {
          "source": "197",
          "target": "198"
        },
        {
          "source": "197",
          "target": "199"
        },
        {
          "source": "198",
          "target": "200"
        },
        {
          "source": "198",
          "target": "201"
        },
        {
          "source": "201",
          "target": "202"
        },
        {
          "source": "202",
          "target": "203"
        },
        {
          "source": "202",
          "target": "204"
        },
        {
          "source": "204",
          "target": "205"
        },
        {
          "source": "199",
          "target": "206"
        },
        {
          "source": "199",
          "target": "207"
        },
        {
          "source": "99",
          "target": "208"
        },
        {
          "source": "99",
          "target": "209"
        },
        {
          "source": "209",
          "target": "210"
        },
        {
          "source": "210",
          "target": "211"
        },
        {
          "source": "210",
          "target": "212"
        },
        {
          "source": "212",
          "target": "213"
        },
        {
          "source": "212",
          "target": "214"
        },
        {
          "source": "214",
          "target": "215"
        },
        {
          "source": "214",
          "target": "216"
        },
        {
          "source": "216",
          "target": "217"
        },
        {
          "source": "217",
          "target": "218"
        },
        {
          "source": "97",
          "target": "219"
        },
        {
          "source": "97",
          "target": "220"
        },
        {
          "source": "220",
          "target": "221"
        },
        {
          "source": "221",
          "target": "222"
        },
        {
          "source": "221",
          "target": "223"
        },
        {
          "source": "223",
          "target": "224"
        },
        {
          "source": "224",
          "target": "225"
        },
        {
          "source": "1",
          "target": "226"
        },
        {
          "source": "226",
          "target": "228"
        },
        {
          "source": "226",
          "target": "229"
        },
        {
          "source": "228",
          "target": "230"
        },
        {
          "source": "228",
          "target": "231"
        },
        {
          "source": "230",
          "target": "236"
        },
        {
          "source": "236",
          "target": "237"
        },
        {
          "source": "236",
          "target": "238"
        },
        {
          "source": "238",
          "target": "239"
        },
        {
          "source": "238",
          "target": "240"
        },
        {
          "source": "240",
          "target": "241"
        },
        {
          "source": "240",
          "target": "242"
        },
        {
          "source": "242",
          "target": "243"
        },
        {
          "source": "229",
          "target": "232"
        },
        {
          "source": "232",
          "target": "233"
        },
        {
          "source": "232",
          "target": "234"
        },
        {
          "source": "233",
          "target": "235"
        },
        {
          "source": "234",
          "target": "244"
        },
        {
          "source": "234",
          "target": "245"
        },
        {
          "source": "245",
          "target": "246"
        },
        {
          "source": "246",
          "target": "247"
        },
        {
          "source": "246",
          "target": "248"
        },
        {
          "source": "247",
          "target": "249"
        },
        {
          "source": "248",
          "target": "250"
        },
        {
          "source": "227",
          "target": "251"
        },
        {
          "source": "227",
          "target": "252"
        },
        {
          "source": "251",
          "target": "254"
        },
        {
          "source": "251",
          "target": "255"
        },
        {
          "source": "254",
          "target": "259"
        },
        {
          "source": "254",
          "target": "260"
        },
        {
          "source": "260",
          "target": "263"
        },
        {
          "source": "263",
          "target": "264"
        },
        {
          "source": "263",
          "target": "265"
        },
        {
          "source": "265",
          "target": "266"
        },
        {
          "source": "265",
          "target": "267"
        },
        {
          "source": "267",
          "target": "268"
        },
        {
          "source": "267",
          "target": "269"
        },
        {
          "source": "269",
          "target": "270"
        },
        {
          "source": "269",
          "target": "271"
        },
        {
          "source": "271",
          "target": "272"
        },
        {
          "source": "255",
          "target": "261"
        },
        {
          "source": "255",
          "target": "262"
        },
        {
          "source": "262",
          "target": "285"
        },
        {
          "source": "262",
          "target": "286"
        },
        {
          "source": "286",
          "target": "287"
        },
        {
          "source": "287",
          "target": "288"
        },
        {
          "source": "287",
          "target": "289"
        },
        {
          "source": "289",
          "target": "290"
        },
        {
          "source": "289",
          "target": "291"
        },
        {
          "source": "290",
          "target": "292"
        },
        {
          "source": "290",
          "target": "293"
        },
        {
          "source": "293",
          "target": "294"
        },
        {
          "source": "294",
          "target": "295"
        },
        {
          "source": "294",
          "target": "296"
        },
        {
          "source": "294",
          "target": "297"
        },
        {
          "source": "295",
          "target": "298"
        },
        {
          "source": "295",
          "target": "299"
        },
        {
          "source": "299",
          "target": "300"
        },
        {
          "source": "253",
          "target": "256"
        },
        {
          "source": "253",
          "target": "257"
        },
        {
          "source": "253",
          "target": "258"
        },
        {
          "source": "257",
          "target": "273"
        },
        {
          "source": "273",
          "target": "274"
        },
        {
          "source": "273",
          "target": "275"
        },
        {
          "source": "275",
          "target": "276"
        },
        {
          "source": "276",
          "target": "277"
        },
        {
          "source": "276",
          "target": "278"
        },
        {
          "source": "278",
          "target": "279"
        },
        {
          "source": "279",
          "target": "280"
        },
        {
          "source": "279",
          "target": "281"
        },
        {
          "source": "280",
          "target": "284"
        },
        {
          "source": "281",
          "target": "282"
        },
        {
          "source": "281",
          "target": "283"
        },
        {
          "source": "1",
          "target": "227"
        },
        {
          "source": "227",
          "target": "253"
        }
      ]
    }
}
]`) 



  
  
  // Convert hierarchical nodes to flat nodes with positions
  export const initialNodes = [];
  const nodeMap = {};
  
  data[0].hierarchical.nodes.forEach(node => {
    const x = Math.floor(Math.random() * 200); 
    const y = Math.floor(Math.random() * 200); 
    initialNodes.push({
      id: node.id,
      data: { label: node.label },
      position: { x, y },
      type:'customnode'
    });
    nodeMap[node.id] = { ...node };
  });
  
  // Convert hierarchical edges to flat edges
  export const initialEdges = data[0].hierarchical.edges.map(edge => ({
    id: `${edge.source}-${edge.target}`, // Generate unique ID for each edge
    source: edge.source,
    target: edge.target,
     // Assuming you want edges to be animated
  }));

  // const nodeTypes = { customnode: CustomNode }
  
  // Calculate the positions based on a tree structure
  const calculateNodePositions = (nodeId, parentPosition, depth, direction) => {
    const node = nodeMap[nodeId];
    const x = parentPosition.x + (depth * 150 * direction); // Adjust x position based on depth and direction
    const y = parentPosition.y + 100; // Adjust y position
    const existingNode = initialNodes.find(n => n.id === node.id);
  
    if (existingNode) {
      existingNode.position = { x, y };
    }
  
    // Recursively calculate positions for child nodes
    const childEdges = initialEdges.filter(edge => edge.source === node.id);
    childEdges.forEach((edge, index) => {
      const nextDirection = index === 0 ? 1 : -1; // Alternate direction for child nodes
      calculateNodePositions(edge.target, { x, y }, depth + 1, nextDirection);
    });
  };
  
  // Start with the root node (id: "1") to calculate positions
  calculateNodePositions("1", { x: 0, y: 0 }, 0, 1);
  
  