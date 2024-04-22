import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { initialEdges,initialNodes } from './Data';

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <img src='https://cdn-icons-png.flaticon.com/512/1266/1266276.png' alt='pin' width='150' height='150' /> 
        <div style={{ marginTop: '4px',marginLeft:'62px',fontSize:'50px' }}>{initialNodes.value}</div>
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default CustomNode;
