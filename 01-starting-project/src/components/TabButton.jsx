const TabButton = ({ children, isSelected, ...props}) => {

    return(
        <li>
            {/* <button onClick={handleClick()}>{children}</button> */}
                    {/* we should not call the handler with () here because if we do then it will executed when button element
                        gets executed but we want to executed our handler when button is clicked so avoid ()*/}
            <button className={isSelected ? "active" : undefined} {...props}>{ children }</button>
        </li>
    )
}

export default TabButton;