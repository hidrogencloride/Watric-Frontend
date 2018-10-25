import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  expect(div.innerHTML).toContain('Hello there !');
  ReactDOM.unmountComponentAtNode(div);
});
