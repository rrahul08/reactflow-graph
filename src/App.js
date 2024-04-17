import { ReactFlowProvider } from 'reactflow';
import './App.css';
import LayoutFlow from './Elk';
import Graph from './Graph';
import D3 from './Dagre';
import DagreLayout from './Dagre';

function App() {
  return (
    // <div className="App">
    //   <Graph/>
    // </div>
    <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlowProvider>
    {/* <LayoutFlow /> */}
    <DagreLayout/>
  </ReactFlowProvider>
  </div>
  );
}

export default App;
