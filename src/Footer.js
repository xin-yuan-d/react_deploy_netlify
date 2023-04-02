const Footer = ({ length }) => {
    return (
        // x list item/ items
        <footer>
            <p>{length} List {length === 1 ? "item" : "items"}</p>
        </footer>
    )
}

export default Footer
