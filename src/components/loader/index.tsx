import React from 'react';
// import loader from '.public/image'
import loader from 'assets/image/loader.svg';



const Loader: React.FC = (props) => {
  return (
    <div className='flex align-middle justify-center'>
      <img
        src={loader}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
