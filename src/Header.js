const Header = ({ title }) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}


// defaultProps allow us to set values for the props expected in the component, if those are not provided, then the def props values will take over 
// ex here: if App.js doesnt have title = Grocery List, then the title will be Default Title
Header.defaultProps = {
    title: "Default Title"
}

export default Header;
