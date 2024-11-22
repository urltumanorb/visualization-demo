import React, { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
import './Cytoscape.css';

const CytoscapeGraph = () => {
  const cyRef = useRef(null);
  const [cy, setCy] = useState(null);
  const [sourceId, setSourceId] = useState('');
  const [targetId, setTargetId] = useState('');

  useEffect(() => {
    const cyInstance = cytoscape({
      container: cyRef.current,

      elements: [
        { data: { id: 'a' }, position: { x: 100, y: 100 } },
        { data: { id: 'b' }, position: { x: 200, y: 200 } },
        { data: { id: 'c' }, position: { x: 300, y: 100 } },
        { data: { id: 'd' }, position: { x: 400, y: 200 } },
        { data: { source: 'a', target: 'b' } },
        { data: { source: 'b', target: 'c' } },
        { data: { source: 'c', target: 'd' } }
      ],

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#0074D9',
            'label': 'data(id)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#0074D9',
            'target-arrow-color': '#0074D9',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        },
        {
          selector: 'node:selected',
          style: {
            'background-color': 'red'
          }
        },
        {
          selector: 'edge:selected',
          style: {
            'line-color': 'red',
            'target-arrow-color': 'red'
          }
        }
      ],

      layout: {
        name: 'preset',
      }
    });

    setCy(cyInstance);

    cyInstance.on('tap', 'node, edge', (event) => {
      const target = event.target;
      target.select();
    });

    return () => cyInstance.destroy();
  }, []);

  const addNode = () => {
    if (cy) {
      const newNodeId = `n${cy.nodes().length + 1}`;
      cy.add({
        group: 'nodes',
        data: { id: newNodeId },
        position: { x: Math.random() * 500, y: Math.random() * 300 } 
      });
      cy.layout({ name: 'preset' }).run();
    }
  };

  const connectNodes = () => {
    const nodeIds = cy.nodes().map(node => node.id());
    if (cy && sourceId && targetId && nodeIds.includes(sourceId) && nodeIds.includes(targetId)) {
      cy.add({
        group: 'edges',
        data: { source: sourceId, target: targetId }
      });
      cy.layout({ name: 'preset' }).run();
    }else{
      alert('You provided the wrong node.')
    }
  };

  const deleteSelected = () => {
    if (cy) {
      cy.$(':selected').remove();
      cy.layout({ name: 'preset' }).run();
    }
  };

  return (
    <div className='content'>
      <h1>Cytoscape Example</h1>
      <div>
          <div ref={cyRef} className='cy-container' style={{ width: '600px', height: '400px', border: '1px solid #ccc' }} />
          <div className='operation'>
            <span>Add Node: </span>
            <button onClick={addNode} style={{ marginBottom: '10px' }}>Add</button>
          <div className='operation'>
            <span>Connect Node: </span>
            <input
              type="text"
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              placeholder="Source ID"
              style={{ marginRight: '5px' }}
            />
            <input
              type="text"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              placeholder="Target ID"
              style={{ marginRight: '5px' }}
            />
            <button onClick={connectNodes}>Connect</button>
          </div>
          <div className='operation'>
            <span>Delete Node: </span>
            <button onClick={deleteSelected}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CytoscapeGraph;
