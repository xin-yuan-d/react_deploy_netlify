import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
// the button looks like a FaPlus
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    // so that after you enter, the add loses focus & onclick in button -> so that after click the focus is set back to the input
    const inputRef = useRef();

    return (
        // onchange : takes in an event, and calls setNewItem using value
        // don't need to pass e to handle submit(you could) bc its done automatically
        // add item has its value equal to the state newItem
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
