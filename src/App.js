
import './App.scss';
import { Button } from './components/Buttons/Button';
import { List } from './components/List/List';
import React, { useState } from "react";

const items=["el1","el2","el3","el4"]
function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <List data = {items}/>
     <butto></butto>
     <Button name="-" onClick={() => setCount(count - 1)}/>
     <span>{count}</span>
     <Button name="+" onClick={() => setCount(count + 1)}/>
    </div>
  );
}

export default App;
