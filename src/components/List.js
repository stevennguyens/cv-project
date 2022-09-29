import React, {useState} from 'react';
import uniqid from "uniqid";
import AddBtn from './body/AddBtn';

const List = ({edit, maxItems}) => {
    const [list, setList] = useState([
        {name: '',
        id: uniqid()}
    ]);

    const [isMax, setMax] = useState(false);

    const changeItem = (e) => {
        setList(list.map(item => {
            if (item.id === e.target.id) {
                item.name = e.target.value;
            }
            return item
        }));
    }

    const onKeyPress = (e) => {
        const keyCode = e.keyCode;
        
        // backspace on empty list item
        if (keyCode === 8 && e.target.value === '') {
            removeItem(e)
        }

        // enter
        if (keyCode === 13) {
            onClick();
        }

        // down 
        if (keyCode === 38) {
            changeFocus(getIndexPrev(e.target.id));
        }

        // up 
        if (keyCode === 40) {
            changeFocus(getIndexNext(e.target.id));
        }
    }

    const removeItem = (item) => {
        const index = getIndexCurr(item.target.id);
        setList(list.filter(list => list.id !== item.target.id))
        setMax(false)
        if (changeFocus(index)) {
        } else if (changeFocus(index - 1)) {
        } else if (changeFocus(index + 1)) {
        }
    }

    const onClick = () => {
        const max = {maxItems};
        if (list.length < max) {
            setList(list.concat({name: '', id: uniqid()}))
            setMax(false)
            changeFocus(getIndexCurr(list[list.length - 1].id))
        }

        if (list.length === max - 1) {
            setMax(true)
        }
    }

    const changeFocus = (index) => {
        if (list[index]) {
            const item = document.getElementById(list[index].id);
            const end = item.value.length;
            item.focus();
            item.setSelectionRange(end, end);
            return true;
        }  else {
            return false;
        }
    }
    
    const getIndexCurr = (id) => {
        return list.map(item => item.id).indexOf(id);
    }

    const getIndexPrev = (id) => {
        return getIndexCurr(id) - 1
    }

    const getIndexNext = (id) => {
        return getIndexCurr(id) + 1
    }

    return (
        <div>
            <ul>
                {list.map((s) => {
                    return (
                        <li className='item' key={s.id}><input id={s.id} onChange={changeItem} onKeyDown={onKeyPress} readOnly={!edit} type='text' placeholder='Item' value={s.name}></input></li>
                    ) 
                    })
                }
                <AddBtn onClick={onClick} edit={edit} isMax={isMax}/>
            </ul>
        </div>
        )
}

export default List