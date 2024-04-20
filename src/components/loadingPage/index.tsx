import Loader from 'components/loader';
import React from 'react';


const LoadingPage: React.FC = (props) => {
  return (
    <div className="flex grow align-middle justify-center">
      <Loader />
    </div>
  );
};

export default LoadingPage;
