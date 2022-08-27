import React,{Component} from 'react';
import uniqid from "uniqid";
import AddBtn from './body/AddBtn';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                name: '',
                id: uniqid()
            },
            list: [{name: '', id: uniqid()}],
            char: '',
            isMax: false
        }
    }


    changeItem = (e) => {
        this.setState({
            list: this.state.list.map(item => {
                if (item.id === e.target.id) {
                    item.name = e.target.value;
                }
                return item
            }),
            char: e.target.value
        })
    }

    onKeyPress = (e) => {
        const keyCode = e.keyCode;
        
        // backspace on empty list item
        if (keyCode === 8 && e.target.value === '') {
            // if (this.state.list.length - 1 > 0) this.changeFocus(this.getIndexPrev(e.target));
            this.removeItem(e)
        }

        // enter
        if (keyCode === 13) {
            this.onClick();
        }

        // down 
        if (keyCode === 38) {
            this.changeFocus(this.getIndexPrev(e.target.id));
        }

        // up 
        if (keyCode === 40) {
            this.changeFocus(this.getIndexNext(e.target.id));
        }
    }

    removeItem = (item) => {
        const index = this.getIndexCurr(item.target.id);
        this.setState({
            list: this.state.list.filter(list => list.id !== item.target.id),
            isMax: false
        }, () => {
            if (this.changeFocus(index)) {
            } else if (this.changeFocus(index - 1)) {
            } else if (this.changeFocus(index + 1)) {
            }
        })
    }

    onClick = () => {
        const max = this.props.maxItems;
        if (this.state.list.length < max) {
            this.setState({
                list: this.state.list.concat({name: '', id: uniqid()}),
                isMax: false
            }, () => {
                this.changeFocus(this.getIndexCurr(this.state.list[this.state.list.length - 1].id))
            })
        }

        if (this.state.list.length === max - 1) {
            this.setState({
                isMax: true
            })
        }
    }

    changeFocus = (index) => {
        if (this.state.list[index]) {
            const item = document.getElementById(this.state.list[index].id);
            const end = item.value.length;
            item.focus();
            item.setSelectionRange(end, end);
            return true;
        }  else {
            return false;
        }
    }
    
    getIndexCurr = (id) => {
        return this.state.list.map(item => item.id).indexOf(id);
    }

    getIndexPrev = (id) => {
        return this.getIndexCurr(id) - 1
    }

    getIndexNext = (id) => {
        return this.getIndexCurr(id) + 1
    }

    render() {  
        const { edit } = this.props;  
        const { list, isMax } = this.state;

        return(
            <div>
                <ul>
                    {list.map((s) => {
                        return (
                            <li className='item' key={s.id}><input id={s.id} onChange={this.changeItem} onKeyDown={this.onKeyPress} readOnly={!edit} type='text' placeholder='Item' value={s.name}></input></li>
                        ) 
                        })
                    }
                    <AddBtn onClick={this.onClick} edit={edit} list={list} isMax={isMax}/>
                </ul>
            </div>
            )}
}

export default List