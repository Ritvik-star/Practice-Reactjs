import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return(
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
    )
}
