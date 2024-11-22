import React, { useEffect, useState } from 'react';
import { Graph } from '@antv/g6';
import './AntvGraph.css';

const AntvGraphWithLayout = () => {
  const [graph, setGraph] = useState(null);
  const [layout, setLayout] = useState('circular'); 

  useEffect(() => {
    const newGraph = new Graph({
      container: 'container',
      layout: {
        type: 'circular',
      },
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
      },
      width: 800,
      height: 600,
      data: {
        nodes: [
          { id: 'Node1' },
          { id: 'Node2' },
          { id: 'Node3' },
          { id: 'Node4' },
          { id: 'Node5' },
          { id: 'Node6' },
          { id: 'Node7' },
          { id: 'Node8' },
          { id: 'Node9' },
          { id: 'Node10' },
        ],
        edges: [
          { source: 'Node1', target: 'Node2', value: 1 },
          { source: 'Node2', target: 'Node3', value: 2 },
          { source: 'Node3', target: 'Node4', value: 3 },
          { source: 'Node4', target: 'Node5', value: 4 },
          { source: 'Node5', target: 'Node6', value: 5 },
          { source: 'Node6', target: 'Node7', value: 6 },
          { source: 'Node7', target: 'Node8', value: 7 },
          { source: 'Node8', target: 'Node9', value: 8 },
          { source: 'Node9', target: 'Node10', value: 9 },
          { source: 'Node10', target: 'Node1', value: 10 },
        ],
      },
    });

    newGraph.render();
    setGraph(newGraph); 
  }, []);

  useEffect(() => {
    // if (graph && typeof graph.stopLayout === 'function') {
    if (graph) {
      const layoutOptions = {
        circular: { type: 'circular' },
        grid: { type: 'grid' },
        force: { type: 'force', preventOverlap: true },
        radial: { type: 'radial', preventOverlap: true },
        concentric: { type: 'concentric' },
        mds: { type: 'mds', linkDistance: 100 },
      };

      // graph.stopLayout();
      graph.setLayout(layoutOptions[layout]); 
      graph.layout(); 
    }
  }, [layout, graph]);

  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div className='content'>
      <h1>Antv/G6 Example</h1>
      <div id="container" style={{ border: '1px solid #ccc', width: '800px', height: '600px' }}></div>
      <div style={{ marginTop: '10px' }}>
        <label>Choose layout: </label>
        <select value={layout} onChange={handleLayoutChange}>
          <option value="circular">Circular</option>
          <option value="grid">Grid</option>
          <option value="force">Force</option>
          <option value="radial">Radial</option>
          <option value="concentric">Concentric</option>
          <option value="mds">MDS</option>
        </select>
      </div>
    </div>
  );
};

export default AntvGraphWithLayout;
