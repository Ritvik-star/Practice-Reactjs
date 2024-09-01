import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import Tabs from "./Tabs";
import { Table } from "./Table";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();

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

  const [data, setData] = useState(CORE_CONCEPTS)
  const [edit, setEdit] = useState(false);

  function deletehandler(e){
    let title = e.title;
    let result = CORE_CONCEPTS.filter((e) => e.title !== title);
    console.log(result)
    setData(result);
  }

  // function changeHandler(e){
    // let title = e.title;
    // const result = CORE_CONCEPTS.map((e) =>{
    //   if(e.title == title){
    //     e.description = e.target.value;
    //   }
    // })
    // console.log(result)
    // setData(result);
  // }

  return (
    //we can make this section as a wrapper component so that we can use it dynamically as we want
    // {/* and if we pass id as a prop in Section comp then it will not automatically forwarded
    // to the Section comp, as others will, so we have to mannually set and used id as prop in comp */}
    //so attributes like id will not automatically forwarded so will use them as forwarded/proxy props in comp.
    <Section title="Examples" id="examples">
      {/* // <section id="examples">  */}
      {/* here above in section we are using id */}
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* <menu> */}
      {/* passing function as props */}
      {/* <TabButton onClick={handleClick}>Components</TabButton> */}
      {/* passing function as props with custom args*/}

      {/* </menu> */}

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
      {/* {tabContent} */}
      {/* </section> */}

      <Table>
        <thead>
          <tr>
            {data.map((e, index) => (
              <th key={index}>{e.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((e) => (
              <td key={e.title}>
                {edit ? <input type="text" value={e.description} readOnly={true}/> : `${e.description}`}
                <button onClick={setEdit(!edit)}>edit</button>
                <button onClick={()=>deletehandler(e)}>delete</button>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Section>
  );
}
