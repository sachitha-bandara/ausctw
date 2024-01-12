import React from 'react';
import './Card.css'; // Create a separate CSS file for styling

function CardForSpeaker ({name,title,abstract,bio, talk, leftColumnRatio, rightColumnRatio, id}) {
  return (
    <div id={id} className="card">
      <div className="cardTitle"> <span className='talkType'>{talk}</span> : {name}</div>
      <div className="cardContent">
        <div className="leftColumn" style={{ flex: leftColumnRatio }}>
          <div className="columnTitle">Title : {title}</div>
          <div className="columnContent abstract">
            <p> <span className='boldText'>Abstract</span> : <span className='make-medium'>{abstract}</span></p>
          </div>
          <div className="columnContent">
            <p ><span className='boldText'>Bio</span> : <span className='make-lighter'>{bio}</span></p>
          </div>
        </div>
        {/* <div className="rightColumn" style={{ flex: rightColumnRatio }}> */}
          {/* <div className="columnTitle">Right Column Title</div> */}
          
        {/* </div> */}
      </div>
    </div>
  );
}

export default CardForSpeaker;
