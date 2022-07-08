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
        <p className='name-testimony'>{props.name} in {props.country}</p>
        <p className='job-testimony'>{props.job} at {props.company}</p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
