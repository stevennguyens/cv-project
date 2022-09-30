import React, {useCallback, useEffect, useState} from 'react';
import uniqid from "uniqid";
import AddBtn from './body/AddBtn';

const List = ({edit, maxItems}) => {
    // state for list
    const [list, setList] = useState([
        {name: '',
        id: uniqid()}
    ]);

    // state for max value of list is met
    const [isMax, setMax] = useState(false);

    // function to change list
    const changeItem = (e) => {
        setList(list.map(item => {
            if (item.id === e.target.id) {
                item.name = e.target.value;
            }
            return item
        }));
    }


    // handle key press
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

    // remove item from list and set max to false
    // change focus
    const removeItem = (item) => {
        setList(list.filter(list => list.id !== item.target.id))
        setMax(false)
    }

    const onClick = () => {
        // add empty list item on click
        if (list.length < maxItems) {
            setList(list.concat({name: '', id: uniqid()}))
            setMax(false)
        }

        if (list.length === maxItems - 1) {
            setMax(true)
        }
    }

    // change focus to element using index for list
    const changeFocus = useCallback((index) => {
        if (list[index]) {
            const item = document.getElementById(list[index].id);
            const end = item.value.length;
            item.focus();
            item.setSelectionRange(end, end);
            return true;
        }  else {
            return false;
        }
    }, [list])

    // whenever list is changed, call change focus
    useEffect(() => {
        if (changeFocus(list.length - 1)) {
        } else if (changeFocus(list.length)) {
        } else {
        }
    }, [list, changeFocus])
    
    // get the current index using id for list
    const getIndexCurr = (id) => {
        return list.map(item => item.id).indexOf(id);
    }

    // get the prev index using id for list
    const getIndexPrev = (id) => {
        return getIndexCurr(id) - 1
    }

    // get the next index using id for list
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