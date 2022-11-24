import './App.css';
import React from 'react';
import checkList from "./store";
import {observer} from 'mobx-react-lite'
const App = observer(() => {
    let count=0;
    if(checkList.lists[0]!=='none'){
        count+=1;
    }
    if(checkList.lists[1]!=='none'){
        count+=1;
    }
    return (
        <div className={'container'}>
            <h1>Learn</h1>
            <ul>
                <button onClick={(e) => checkList.check(e.target.id)} id='0' style={{textDecoration:`${checkList.lists[0]}`}}>Learn Css</button>
                <button onClick={(e) => checkList.check(e.target.id)} id='1' style={{textDecoration:`${checkList.lists[1]}`}}>Learn JS</button>
            </ul>
            <h3>{count}/2</h3>
        </div>
    );
});

export default App;
