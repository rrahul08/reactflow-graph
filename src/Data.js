import CustomNode from './CustomNode';

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



  export const data = JSON.parse(`[
    {
        
        "hierarchical": {
          "nodes": [
            {
              "id": "1",
              "label": "ospf",
              "value": "1"
            },
            {
              "id": "2",
              "value": "2",
              "label": "isis"
            },
            {
              "id": "3",
              "value": "3",
              "label": "ospf"
            },
            {
              "id": "4",
              "value": "4",
              "label": "bgp"
            },
            {
              "id": "5",
              "value": "5",
              "label": "isis"
            },
            {
              "id": "6",
              "value": "6",
              "label": "ospf"
            },
            {
              "id": "7",
              "value": "7",
              "label": "bgp"
            },
            {
              "id": "8",
              "value": "8",
              "label": "S"
            },
            {
              "id": "9",
              "value": "9",
              "label": "isis"
            },
            {
              "id": "10",
              "value": "10",
              "label": "ospf"
            },
            {
              "id": "11",
              "value": "11",
              "label": "bgp"
            },
            {
              "id": "12",
              "value": "12",
              "label": "O"
            },
            {
              "id": "13",
              "value": "13",
              "label": "isis"
            },
            {
              "id": "14",
              "value": "14"
            },
            {
              "id": "15",
              "value": "15"
            },
            {
              "id": "16",
              "value": "16"
            },
            {
              "id": "17",
              "value": "17"
            },
            {
              "id": "18",
              "value": "18"
            },
            {
              "id": "19",
              "value": "19"
            },
            {
              "id": "20",
              "value": "20"
            },
            {
              "id": "21",
              "value": "21"
            },
            {
              "id": "22",
              "value": "22"
            },
            {
              "id": "23",
              "value": "23"
            },
            {
              "id": "24",
              "value": "24"
            },
            {
              "id": "25",
              "value": "25"
            },
            {
              "id": "26",
              "value": "26"
            },
            {
              "id": "27",
              "value": "27"
            },
            {
              "id": "28",
              "value": "28"
            },
            {
              "id": "29",
              "value": "29"
            },
            {
              "id": "30",
              "value": "30"
            },
            {
              "id": "31",
              "value": "31"
            },
            {
              "id": "32",
              "value": "32"
            },
            {
              "id": "33",
              "value": "33"
            },
            {
              "id": "34",
              "value": "34"
            },
            {
              "id": "35",
              "value": "35"
            },
            {
              "id": "36",
              "value": "36"
            },
            {
              "id": "37",
              "value": "37"
            },
            {
              "id": "38",
              "value": "38"
            },
            {
              "id": "39",
              "value": "39"
            },
            {
              "id": "40",
              "value": "40"
            },
            {
              "id": "41",
              "value": "41"
            },
            {
              "id": "42",
              "value": "42"
            },
            {
              "id": "43",
              "value": "43"
            },
            {
              "id": "44",
              "value": "44"
            },
            {
              "id": "45",
              "value": "45"
            },
            {
              "id": "46",
              "value": "46"
            },
            {
              "id": "47",
              "value": "47"
            },
            {
              "id": "48",
              "value": "48"
            },
            {
              "id": "49",
              "value": "49"
            },
            {
              "id": "50",
              "value": "50"
            },
            {
              "id": "51",
              "value": "51"
            },
            {
              "id": "52",
              "value": "52"
            },
            {
              "id": "53",
              "value": "53"
            },
            {
              "id": "54",
              "value": "54"
            },
            {
              "id": "55",
              "value": "55"
            },
            {
              "id": "56",
              "value": "56"
            },
            {
              "id": "57",
              "value": "57"
            },
            {
              "id": "58",
              "value": "58"
            },
            {
              "id": "59",
              "value": "59"
            },
            {
              "id": "60",
              "value": "60"
            },
            {
              "id": "61",
              "value": "61"
            },
            {
              "id": "62",
              "value": "62"
            },
            {
              "id": "63",
              "value": "63"
            },
            {
              "id": "64",
              "value": "64"
            },
            {
              "id": "65",
              "value": "65"
            },
            {
              "id": "66",
              "value": "66"
            },
            {
              "id": "67",
              "value": "67"
            },
            {
              "id": "68",
              "value": "68"
            },
            {
              "id": "69",
              "value": "69"
            },
            {
              "id": "70",
              "value": "70"
            },
            {
              "id": "71",
              "value": "71"
            },
            {
              "id": "72",
              "value": "72"
            },
            {
              "id": "73",
              "value": "73"
            },
            {
              "id": "74",
              "value": "74"
            },
            {
              "id": "75",
              "value": "75"
            },
            {
              "id": "76",
              "value": "76"
            },
            {
              "id": "77",
              "value": "77"
            },
            {
              "id": "78",
              "value": "78"
            },
            {
              "id": "79",
              "value": "79"
            },
            {
              "id": "80",
              "value": "80"
            },
            {
              "id": "81",
              "value": "81"
            },
            {
              "id": "82",
              "value": "82"
            },
            {
              "id": "83",
              "value": "83"
            },
            {
              "id": "84",
              "value": "84"
            },
            {
              "id": "85",
              "value": "85"
            },
            {
              "id": "86",
              "value": "86"
            },
            {
              "id": "87",
              "value": "87"
            },
            {
              "id": "88",
              "value": "88"
            },
            {
              "id": "89",
              "value": "89"
            },
            {
              "id": "90",
              "value": "90"
            },
            {
              "id": "91",
              "value": "91"
            },
            {
              "id": "92",
              "value": "92"
            },
            {
              "id": "93",
              "value": "93"
            },
            {
              "id": "94",
              "value": "94"
            },
            {
              "id": "95",
              "value": "95"
            },
            {
              "id": "96",
              "value": "96"
            },
            {
              "id": "97",
              "value": "97"
            },
            {
              "id": "98",
              "value": "98"
            },
            {
              "id": "99",
              "value": "99"
            },
            {
              "id": "100",
              "value": "100"
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
      data: { label: node.id },
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

  const nodeTypes = { customnode: CustomNode }
  
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
  
  