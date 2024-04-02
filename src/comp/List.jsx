import React from 'react';
function List({ data, remove, isDone,update }) {
    const list = data.map((obj) => (
        <li key={obj.id} className={obj.state?'done':''}>
            
            {obj.todo}
            <button onClick={() => {update(obj.id)}}>수정</button>
            <button onClick={() => {remove(obj.id)}}>삭제</button>
            <button onClick={()=>{isDone(obj.id)}}>완료</button>
        </li>
    ));
    return (
        <ul className='list'>
            {list}
        </ul>
    );
}

export default List;