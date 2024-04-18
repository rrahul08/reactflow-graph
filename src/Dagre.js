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
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MiniMap,
  Controls,
  Background
} from 'reactflow';

import CustomNode from './CustomNode.js';
import { initialNodes, initialEdges } from './Data.js';
import 'reactflow/dist/style.css';

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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedLabel, setSelectedLabel] = useState('');

  const uniqueLabels = [...new Set(initialNodes.map(node => node.data.label))];

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
  const filteredNodes = selectedLabel ? initialNodes.filter(node => node.data.label === selectedLabel) : initialNodes;
  const filteredEdges = initialEdges.filter(edge =>
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
      <div style={{ flex: '1', position: 'relative' }}>
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
          <Panel position="top-right">
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
          </Panel>
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DagreLayout;
