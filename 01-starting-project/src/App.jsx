// import image from "./assets/react-core-concepts.png";
// import childImage from "./assets/components.png";
//since image was not named in its original file by default so we could import it without {}
//but if something which is alreadt by default named inside file and we are import it
//then use {}...e.g...
// import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header";
import React, { Fragment, useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Example from "./components/Examples";

//react will execute, a component only once by default
//to re-execute or re-render the component we should use 'state'
function App() {
  // rule for hooks
  // Hooks can only be called inside React function components.
  // Hooks should only be called at the top level of a component.
  // Hooks cannot be conditional.

  return (
    //here below we are using div as a wrapper element but div in itself an extra element in this case in dom
    <>
      {/* // <div>    */}
      {/* we can use Fragment by importing from react and then can use it as a wrapper element.e.g.. */}
      {/* <Fragment></Fragment> */}
      {/* and that's how we will be able to remove an extra element from dom 
      or we can just use, empty opening closing bracket's  */}
      {/* <></>  */}
      <Header />  
      {/* since, we splitted the components like coreConcepts and examples so whenever any state will change inside them 
      then those comps only will rerender, main App comps will not rerender and that's why header will not change */}
      <main>
        <CoreConcepts />
        <Example />
      </main>
      {/* </div> */}
    </>
  );
}

export default App;

// //if we don't use JSX then we don't need to build it or convert it into js using babel or wabpack

// //with jsx
//   <div id="content">
//     <p>hello world</p>
//   </div>
// -->need to transform or convert
// -->pretty simple and easy readble

// //without jsx

//   React.createElement(
//     'div',
//     {id: 'content'},
//     React.createElement(
//       'p',
//       null,
//       'Hello world',
//     )
//   );
// ---> no need for any extra plugin for converting it
//---> bit complex to write and read
