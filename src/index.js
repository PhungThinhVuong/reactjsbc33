import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoFuncCom from './Components/DemoFuncCom';
import DemoHeader from './Components/DemoHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='abc'>
  <DemoFuncCom/>
  <DemoHeader/>
 </div>
);
