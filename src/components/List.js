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
            char: ''
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
            this.removeItem(e)
        }

        // enter
        if (keyCode === 13) {
            this.onClick(e.target);
        }

        // down 
        if (keyCode === 38) {
            this.changeFocus(this.getIndexPrev(e.target));
        }

        // up 
        if (keyCode === 40) {
            this.changeFocus(this.getIndexNext(e.target));
        }
    }

    removeItem = (item) => {
        this.setState({
            list: this.state.list.filter(list => list.id !== item.target.id)
        })
    }

    onClick = (target) => {
        const MAXLENGTH = 6;
        if (this.state.list.length < MAXLENGTH) {
            this.setState({
                list: this.state.list.concat({name: '', id: uniqid()})
            }, () => {
                this.changeFocus(this.getIndexNext(target));
            })
        } else {
            this.changeFocus(MAXLENGTH - 1);
        }
    }

    changeFocus = (index) => {
        if (this.state.list[index]) {
            const item = document.getElementById(this.state.list[index].id);
            const end = item.value.length;
            item.focus();
            item.setSelectionRange(end, end);
        } 
    }
    
    getIndexCurr = (target) => {
        return this.state.list.map(item => item.id).indexOf(target.id);
    }

    getIndexPrev = (target) => {
        return this.getIndexCurr(target) - 1
    }

    getIndexNext = (target) => {
        return this.getIndexCurr(target) + 1
    }

    render() {  
        const { edit } = this.props;  
        const { list } = this.state;

        return(
            <div>
                <ul>
                    {list.map((s) => {
                        return (
                            <li className='item' key={s.id}><input id={s.id} onChange={this.changeItem} onKeyDown={this.onKeyPress} maxLength={11} readOnly={!edit} type='text' placeholder='Item' value={s.name}></input></li>
                        ) 
                        })
                    }
                    <AddBtn onClick={this.onClick} edit={edit} list={list} />
                </ul>
            </div>
            )}
}

export default List