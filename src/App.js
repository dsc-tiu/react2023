
import './App.css';
import HelloWorld from './components/Function.js'
import ClassComponent from './components/ClassComponent'

import './styles/component.css'
import { add, sub } from './functions/add';

// import Class from './Class';
// import { Functional } from './Functional';
// import { useState } from 'react';

function App() {
  // const [classComponent, setClassComponent] = useState(false)
  // const [FunctionalComponent, setFunctionalComponent] = useState(false)

  const obj1 = {
    name: "Gourav",
    batch: "BCS4B",
    roll: 1165,
    count: 0
  }
  const obj2 = {
    name: "Aryan",
    batch: "BCS4B",
    roll: 1166,
    count: 1
  }

  return (
    <>
      <HelloWorld userDetails={obj1} type="student" />
      <HelloWorld userDetails={obj2} type="TA" />
      
      <ClassComponent />
    </>
    // <>
    //   <button onClick={() => setClassComponent(!classComponent)}>
    //     Add Class Component
    //   </button>
    //   {classComponent && <Class data={obj1} />}
    //   <button onClick={() => setFunctionalComponent(!FunctionalComponent)}>
    //     Add Functional Component
    //   </button>
    //   {FunctionalComponent &&
    //     <Functional data={obj2} />
    //   }
    // </>
  );
}

export default App;
