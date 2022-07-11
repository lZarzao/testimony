import React from 'react';
import '../stylesheets/Testimony.css'

function Testimony( props ) {
  return props.data.map((item) => (
    <section className='container-testimony' key={item.name}>
      <img
        className='img-testimony'
        src={require(`../assets/testimonio-${item.img}`)}
        alt='testimony'
      />

      <div className='container-testimony-text'>
        <p className='name-testimony'>
          <strong>{item.name}</strong> in {item.country}
        </p>
        <p className='job-testimony'>
          {item.job} at <strong>{item.company}</strong>
        </p>
        <p className='text-testimony' key={item.name}>
          "{item.testimony}"
        </p>
      </div>
    </section>
  ));
}

export default Testimony;
