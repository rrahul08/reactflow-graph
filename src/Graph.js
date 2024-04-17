
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
import pin from './assets/oie_8R6P0yGgouRw.png'
import CustomNode from './CustomNode';




const initialNodes = [
    { id: '1',type:'customnode' , position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2',type:'customnode' , position: { x: 0, y: 100 }, data: { label: '2', imageURL:pin } },
  ];

  
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const nodeTypes = { customnode: CustomNode }

  function Graph() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   
    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
    );
   
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    );
  }
  
  export default Graph;