// import Dagre from '@dagrejs/dagre';
// import React, { useCallback,useEffect } from 'react';
// import ReactFlow, {
//   Panel,
//   useNodesState,
//   useEdgesState,
//   useReactFlow,
//   MiniMap,
//   Controls,
//   Background
// } from 'reactflow';

// import { initialNodes, initialEdges } from './Data.js';
// import 'reactflow/dist/style.css';
// import CustomNode from './CustomNode.js';

// const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

// const getLayoutedElements = (nodes, edges, options) => {
//   g.setGraph({ rankdir: options.direction , nodesep:options.nodeSpacing , ranksep:options.rankSpacing});

//   edges.forEach((edge) => g.setEdge(edge.source, edge.target));
//   nodes.forEach((node) => g.setNode(node.id, node ));
  

  
//   Dagre.layout(g);

//   return {
//     nodes: nodes.map((node) => {
//       const { x, y } = g.node(node.id);

    
//       return { ...node, position: { x, y }};
//     }),
//     edges: edges.map((edge) => ({
//       ...edge,
//       style: { stroke: 'black',strokeWidth: 3 }, 
//       arrowHeadColor: 'black' 
//     })),
//   };
// };

// const nodeTypes = { customnode: CustomNode }

// const DagreLayout = () => {
//   const { fitView} = useReactFlow();
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onLayout = useCallback(
//     (direction) => {
//       const layouted = getLayoutedElements(nodes, edges, { direction , nodeSpacing:150 , rankSpacing:250 , nodeSize: { width: 150, height: 100 } });

//       setNodes([...layouted.nodes]);
//       setEdges([...layouted.edges]);

//       // fitView({ padding: 0.1, zoom: true });

//       // fitView({ padding: 100 });
//       window.requestAnimationFrame(() => {
//         fitView();
//       });
//     },
//     [nodes, edges , fitView , setEdges , setNodes]
//   );

//   useEffect(() => {
//     // Call onLayout with 'TB' (top to bottom) direction when component mounts
//     onLayout('TB');
    
//   },[1]);

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       nodeTypes={nodeTypes}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       fitView
 
//       minZoom={0.01}
      
//     >
//       <Panel position="top-right">
//         <button onClick={() => onLayout('TB')}>vertical layout</button>
//         <button onClick={() => onLayout('LR')}>horizontal layout</button>
//       </Panel>
//       <Controls />
//       <MiniMap />
//       <Background variant="dots" gap={12} size={1} />
//     </ReactFlow>
//   );
// };

// export default DagreLayout
import Dagre from '@dagrejs/dagre';
import React, { useCallback, useEffect, useState , useRef } from 'react';
import ReactFlow, {
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MiniMap,
  Controls,
  Background
} from 'reactflow';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CustomNode from './CustomNode.js';
// import { initialNodes, initialEdges } from './Data.js';
import 'reactflow/dist/style.css';
import { initialNodesISIS , initialEdgesISIS } from './Isis.js';



const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, options) => {
  g.setGraph({ rankdir: options.direction, nodesep: options.nodeSpacing, ranksep: options.rankSpacing });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => g.setNode(node.id, node));

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id);
      return { ...node, position: { x, y } };
    }),
    edges: edges.map((edge) => ({
      ...edge,
      style: { stroke: 'black', strokeWidth: 3 },
      arrowHeadColor: 'black'
    })),
  };
};

const nodeTypes = { customnode: CustomNode };

const DagreLayout = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesISIS);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesISIS);
  const [selectedLabel, setSelectedLabel] = useState('');
  const reactFlowWrapper = useRef(null);

  const uniqueLabels = [...new Set(initialNodesISIS.map(node => node.data.label))];

  const handleChangeLabel = (e) => {
    setSelectedLabel(e.target.value);
  };

  const onLayout = useCallback(
    (direction) => {
      const layouted = getLayoutedElements(nodes, edges, { direction, nodeSpacing: 150, rankSpacing: 250, nodeSize: { width: 150, height: 100 } });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges, fitView, setEdges, setNodes]
  );

  useEffect(() => {
    onLayout('TB');
  }, [1]);


  
  // Filter nodes and edges based on the selected label
  const filteredNodes = selectedLabel ? initialNodesISIS.filter(node => node.data.label === selectedLabel) : initialNodesISIS;
  const filteredEdges = initialEdgesISIS.filter(edge =>
    filteredNodes.some(node => node.id === edge.source) &&
    filteredNodes.some(node => node.id === edge.target)
  );

  // Update the graph when the selected label changes
  useEffect(() => {
    const layouted = getLayoutedElements(filteredNodes, filteredEdges, { direction: 'TB', nodeSpacing: 150, rankSpacing: 250, nodeSize: { width: 150, height: 100 } });
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
    fitView();
  }, [selectedLabel, setNodes, setEdges, fitView]);

    useEffect(() => {
    fitView();
  }, [nodes, edges, fitView]);

  const handleDownload = () => {
    html2canvas(document.getElementById('flow'), {
      width: 1500,
      height: 700,
      scale: 2,
      scrollX: 0,
      scrollY: 0,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'px', [1500 * 2, 700 * 2]);
      pdf.addImage(imgData, 'PNG', 0, 0, 1500 * 2, 700 * 2);
      pdf.save('graph.pdf');
    });
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ marginBottom: '10px' }}>
        <select onChange={handleChangeLabel} value={selectedLabel}>
          <option value="">All Labels</option>
          {uniqueLabels.map((label, index) => (
            <option key={index} value={label}>{label}</option>
          ))}
        </select>
       
      </div>
      <div ref={reactFlowWrapper}   id='flow' style={{ flex: '1', position: 'relative' }}>
        
        <ReactFlow
        
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          minZoom={0.01}
          style={{ width: '100%', height: '100%' }}
        >
          <Panel position="top-right" style={{marginTop:''}}>
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
            
          </Panel>
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      {/* <button onClick={handleDownload}>Download as PDF</button>  */}
    </div>
  );
};

export default DagreLayout;
