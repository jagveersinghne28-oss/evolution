import React from 'react';

function SampleCard({title, children}){
  return (
    <div className="snapshot-card">
      <h3 style={{margin:'0 0 8px 0'}}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default function SnapshotViewer(){
  // Placeholder UI for snapshots. We'll render an empty state initially.
  return (
    <section className="container main">
      <div style={{display:'flex',gap:16,flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{margin:0}}>Snapshots</h2>
        </div>

        <div className="snapshot-grid">
          <div className="snapshot-card snapshot-empty">
            No snapshots yet — drop an image or click to add.
          </div>
          <SampleCard title="Example 1">Preview or details go here.</SampleCard>
          <SampleCard title="Example 2">Preview or details go here.</SampleCard>
        </div>
      </div>
    </section>
  )
}
