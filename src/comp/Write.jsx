import React, { useEffect, useState } from 'react';

function Write({ insert, updateItem }) {
    let [txt,setTxt] = useState('');
    let[type,setType] = useState('insert');
    function submit(e) {
        e.preventDefault();
        console.log(e.target.txt.value)
        if (e.target.txt.value !== '') {
            let d = { id: Date.now(), todo: txt, state: false }
            insert(d, type)
            setTxt('')
        }
    }

    
    useEffect(()=>{
        updateItem ? setType('update') : setType('insert')
        if(!updateItem){
        } else{
            setTxt(updateItem?.todo);
        }
    },[updateItem]);

    return (
        <div className='write'>
            <form onSubmit={submit}>
                <input type="text" name='txt' value={txt}
                onChange={(e)=>{setTxt(e.target.value)}} />
                <input type='submit' value={type == 'insert' ? "저장" : "수정" } />
            </form>
        </div>
    );
}

export default Write;