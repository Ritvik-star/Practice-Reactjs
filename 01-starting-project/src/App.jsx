// import image from "./assets/react-core-concepts.png";
// import childImage from "./assets/components.png";
//since image was not named in its original file by default so we could import it without {}
//but if something which is alreadt by default named inside file and we are import it
//then use {}...e.g...
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

//react will execute, a component only once by default
//to re-execute or re-render the component we should use 'state'
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  // rule for hooks
  // Hooks can only be called inside React function components.
  // Hooks can only be called at the top level of a component.
  // Hooks cannot be conditional.

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("click handled", selectedButton, selectedTopic); //we will get the old/previous value here right away
    //because react will update the state and whenever this app component will rerender then only the updated state will be
    //render
  }

  //for 3rd way of conditional rendering
  let tabContent = <p>Please select a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            {/* here we are spread op. (...) which will extract or pull out the properties or element of that array */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul> */}
          {/* better way to do it dynamically as done below */}
          <ul>
            {CORE_CONCEPTS.map((CoreConcept) => {
              <CoreConcept {...CoreConcept} key={CoreConcept.title} />
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* passing function as props */}
            {/* <TabButton onClick={handleClick}>Components</TabButton> */}
            {/* passing function as props with custom args*/}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>

          {/* conditional rendering based on state*/}

          {/* way-1 ---> By using ternory operator */}
          {/* {!selectedTopic ? (
            <p>Please select a topic!</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* way-2 ---> By using AND && operator*/}
          {/* {!selectedTopic && <p>Please select a topic!</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* way-3 ---> By using variables for jsx */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
