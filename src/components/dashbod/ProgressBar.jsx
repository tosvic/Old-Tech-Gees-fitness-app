import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className={`h-full bg-blue-500 rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
