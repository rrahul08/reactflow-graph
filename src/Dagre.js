import Dagre from '@dagrejs/dagre';
import React, { useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MiniMap,
  Controls,
  Background
} from 'reactflow';

import { initialNodes, initialEdges } from './Data.js';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode.js';

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, options) => {
  g.setGraph({ rankdir: options.direction , nodesep:options.nodeSpacing , ranksep:options.rankSpacing});

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => g.setNode(node.id, node ));
  

  
  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id);

      const size = options.nodeSize || { width: 100, height: 50 }; 
      return { ...node, position: { x, y }, data: { ...node.data, size }  };
    }),
    edges: edges.map((edge) => ({
      ...edge,
      style: { stroke: 'black',strokeWidth: 3 }, // Change 'red' to any color you prefer
      arrowHeadColor: 'black' // Change 'red' to any color you prefer
    })),
  };
};

const nodeTypes = { customnode: CustomNode }

const DagreLayout = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onLayout = useCallback(
    (direction) => {
      const layouted = getLayoutedElements(nodes, edges, { direction , nodeSpacing:150 , rankSpacing:250 , nodeSize: { width: 150, height: 100 } });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      minZoom={0.1}
    >
      <Panel position="top-right">
        <button onClick={() => onLayout('TB')}>vertical layout</button>
        <button onClick={() => onLayout('LR')}>horizontal layout</button>
      </Panel>
      <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  );
};

export default DagreLayout