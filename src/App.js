import { ReactFlowProvider } from 'reactflow';
import './App.css';


import DagreLayout from './Dagre';

function App() {
  return (

    <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlowProvider>
    <DagreLayout/>
  </ReactFlowProvider>
  </div>
  );
}

export default App;
