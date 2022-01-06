import { Component } from "react";
export class Biznesplan extends Component{
state = {
    userInput: '',
    bizneslist: []
}
onChangeEvent(e){
    this.setState({userInput:e})
}
addItem(input){
    if(input===''){
        alert('Введите текст')
    }
    else{
        let listArray = this.state.bizneslist;
        listArray.push(input);
        this.setState({
            bizneslist: listArray,
            userInput:''
        })
    }

}
crossWord(e){
    const li = e.target;
    li.classList.toggle ('crossed')
}
deliteItem(){
    let listArray = this.state.bizneslist;
    listArray=[];
    this.setState({bizneslist: listArray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
                <div className="enter">
                <input type='text'
                placeholder='Введите текст'
                onChange = {(e)=>{this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}
                />
                <button onClick={()=>this.addItem(this.state.userInput)}>Добавить</button>
                </div>
                <ol className="list">
                    {this.state.bizneslist.map((item, index)=>(
                        <li className="li" onClick = {this.crossWord} key={index}> {item}</li>
                    ))}
                </ol>
                <button onClick={()=>this.deliteItem()}>Удалить список</button>
            </form>
        </div>
    )
}
}