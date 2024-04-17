import ELK from 'elkjs/lib/elk.bundled.js';
import React, { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow';

import { initialNodes, initialEdges } from './Data';
import 'reactflow/dist/style.css';

const elk = new ELK();

const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
  const defaultOptions = {
    'elk.algorithm': 'stress',
    'elk.layered.spacing.nodeNodeBetweenLayers': 150,
    'elk.spacing.nodeNode': 150,
  };

  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = { ...defaultOptions, ...options };
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes(),
      edges: getEdges(),
    };

    elk.layout(graph).then(({ children }) => {
      // By mutating the children in-place we saves ourselves from creating a
      // needless copy of the nodes array.
      children.forEach((node) => {
        node.position = { x: node.x, y: node.y };
      });

      setNodes(children);
      window.requestAnimationFrame(() => {
        fitView();
      });
    });
  }, []);

  return { getLayoutedElements };
};

const LayoutFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const { getLayoutedElements } = useLayoutedElements();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      minZoom={0.1}
      style={{margin:'20px'}}
    >
      <Panel position="top-right">
        <button
          onClick={() =>
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'DOWN' })
          }
        >
          vertical layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'RIGHT' })
          }
        >
          horizontal layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              'elk.algorithm': 'org.eclipse.elk.radial',
            })
          }
        >
          radial layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              'elk.algorithm': 'org.eclipse.elk.force',
            })
          }
        >
          force layout
        </button>

      </Panel>
      <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  );
};

export default LayoutFlow;