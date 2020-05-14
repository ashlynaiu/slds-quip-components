import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VisualPicker from './components/Visual Picker';
import Animation from './components/Animation';

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact={true} path="/" component={VisualPicker} />
        <Route path="/animation" component={Animation} />
      </Router>
    </div>
  );
}

export default App;
