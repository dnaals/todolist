import { useState } from 'react';
import './common.scss'
import List from './comp/List';
import Write from './comp/Write';

function App() {

  const initial = [];
  let [updateItem, setUpdateItem] = useState();
  const [data, setData] = useState(initial);

  let insert = (d, type) => {
    if (type === 'insert') {
      setData([...data, d]);
    } else {
      console.log(updateItem)
      let c = data.map((obj) => {
        if (obj.id === updateItem.id) {
          obj.todo = d.todo;
        }
        return obj
      });

      data.map(obj => obj.id === updateItem.id ? obj.todo = d.todo : '');

      setData(c)
      setUpdateItem('')
    }

  }
  let remove = (id) => {
    let d = data.filter((obj) => {
      return (obj.id !== id)
    });
    setData(d);
  }
  let isDone = (id) => {
    let d = data.map((obj) => {
      if (obj.id === id) {
        obj.state = !obj.state;
        console.log(obj.state)
      }
      return obj;
    });
    setData(d);
  }
  function update(id) {
    let d = data.filter((obj) => {
      return (obj.id === id)
    });
    setUpdateItem(...d);

  }

  let dataEa = data.filter((obj) => {
    return obj.state === false
  });

  return (
    <div className="todolist">
      <h2>TodoList</h2>
      <p> 할 일 {dataEa.length}개 남음 </p>
      <List data={data} isDone={isDone} remove={remove} update={update} />
      <Write insert={insert} updateItem={updateItem} />
    </div>
  );
}

export default App;
