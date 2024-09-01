//export default function Section({ title, children, id}){ //can use this way of props destructuring or
export default function Section({ title, children, ...props}){  //this way, using ... rest op which will add all the upcoming props
                                                                //into one prop object then can use it.
    return(
        // <section id={id}>
        <section {...props}>    
                    {/* here we are using ... spread op to spread/expand the props into section element */}
            <h2>{title}</h2>
            {children}
        </section>
    )
}