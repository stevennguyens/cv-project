import React, {Component} from 'react';
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
            list: [{name: '', id: uniqid()}, {name: '', id: uniqid()}],
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
        console.log(e.keyCode);
        if (e.keyCode === 8 && e.target.value === '') {
            this.removeItem(e)
        }
    }

    removeItem = (item) => {
        this.setState({
            list: this.state.list.filter(list => list.id !== item.id)
        })
        console.log(this.state.list);
    }
    onClick = (e) => {
        if (this.state.list.length < 6) {
            this.setState({
                list: this.state.list.concat({name: '', id: uniqid()})
            })
        }
    }

    render() {  
        const { edit } = this.props;  
        const { item, list } = this.state;
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