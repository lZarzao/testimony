import React from 'react';
import '../stylesheets/Testimony.css'

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img
        className='img-testimony'
        src={require(`../assets/testimonio-${props.img}`)}
        alt='testimony'
      />

      <div className='container-testimony-text'>
        <p className='name-testimony'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='job-testimony'>
          {props.job} at <strong>{props.company}</strong>
        </p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
