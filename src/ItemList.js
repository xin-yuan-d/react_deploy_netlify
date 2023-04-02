import LineItem from './LineItem';

// represents a list containing items
// has props items, handle check, handle delete
// pass down key ={item.id} as we need to provide a key to each child of a list if we want no error! - althought LineItem doesn't explicitly take it as a prop
const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList
