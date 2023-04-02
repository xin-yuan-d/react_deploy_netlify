import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  // init items with empty array instead
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  /*
  console.log('before useEffect')


  // use efect is asynchronous, it runs the code inside after everything else has rendered
  useEffect(()=>{
    console.log('inside useEffect')
  }, [items])

  console.log('after use effect')*/

  /*
  useEffect(()=>{
    // at load time(bc [] is an unchanged dependency), set items to what's inside of shopping list( so that when you refresh we have our shoppinglist content back) - ideal to when working with api!
    setItems(JSON.parse(localStorage.getItem('shoppinglist')))
  }, [])*/

  // everytime items state gets changed, save the updated items to local storage
  useEffect(()=>{
    // store to local storage newitems
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])


  // receives an item and adds it to local storage
  const addItem = (item) => {
    // if there are items in our list items[last item]'s id and incrment it by 1 : otherwise if no item in list, give it id 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // construct a new item with its 3 values(item being a string)
    const myNewItem = { id, checked: false, item };
    // create new array to update the list of items
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  // receives the event object 
  const handleSubmit = (e) => {
    //prevent the page reload so that when you type in smth and try to use it it does flash and disapear
    e.preventDefault();

    // check for blank value submitted  
    if (!newItem) return;
    addItem(newItem);
    // reset the new item to empty, bc we don't want to continue to have "pizza" there
    setNewItem('');
  }
  // pass the props to each component
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      {/*  filters the items it displays to only display whatever is stored inside the search variable*/}
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
