import React from 'react';
import ReactDOM from 'react-dom';
import LiveDemoBox from './components/LiveDemoBox';

const App = () => {
  return <LiveDemoBox />;
};

ReactDOM.render(<App />, document.getElementById('react-live-demo-box'));
