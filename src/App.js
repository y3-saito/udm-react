import React from 'react';
// import { render } from '@testing-library/react';

// class App exports Component {
//   render() {
//     return (
//     <React.Fragment> 
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => { console.log("I am yuta") }} />
//     </React.Fragment>
//     )
//   }
// }

// function App() {
//   return (
//     // ↓ React.Fragmentは無駄なダグを表示させないための記述
//     <React.Fragment> 
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => { console.log("I am yuta") }} />
//     </React.Fragment>
//   );
// }
// function App() {
//   const greeting = "Hi!!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

// function App() {
//   return React.createElement(
//     "h1",
//     null,
//     "Hello,wold!!"
//   );
// }

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hama", age: 5 },
    {name: "Yamada"}

  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
