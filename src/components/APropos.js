import React from 'react';
import CollapseComponent from './CollapseComponent';
import { aboutList } from './AboutList';

const APropos = () => {
  return (
    <div className="page-apropos">
      <div className="banner-apropos">
        
      </div>
      <div className="collapse-container">
        {aboutList.map(item => (
          <CollapseComponent
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default APropos