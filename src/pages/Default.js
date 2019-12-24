import React, { Component ,useState,useEffect,useRef} from 'react';
import {connect} from "react-redux";
const MyContext = React.createContext();
function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completed: false
      }];
    // ... other actions ...
    default:
      return state;
  }
}
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text:todos.length+'' });
  }
  return (
    <div>
    {console.log('todos',todos)}
      <div onClick={handleAddClick}>add todos</div>
      {
        todos.map((todo ,index) => {
          return <p key={index}>todo:{todo.text}</p> 
        })
      }
    </div>
    )
  // ...
}

function mapSTP(state,){
  return {
    appName:state.app.appName
  }
}
function useCustomEffects(count1,count2) {
  // ...
    console.log('outer side')
  const [noZeroCount, setNoZeroCount] = useState(0)
  useEffect(() => {
    console.log('custom effects')
    let flag = count1>0 || count2>0; 
    setNoZeroCount(flag)
  })
  // setNoZeroCount(flag)
  return noZeroCount
}

console.log('useState',useState)

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

function Default(props){
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // console.log('setCount',setCount)
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log('mount')
    // setTimeout(() => {
    //    setCount(count+1)
    // },3000)
    return () => {
      console.log(`You clicked ${count} times`)
    }
  }, []);
 
  useEffect(() => {
    console.log('count useEffect')
    return () => {
      // console.log(`You clicked ${count} times`)
    }
  }, [count]);
  useEffect(() => {
    console.log('count2 useEffect')
    return () => {
      // console.log(`You clicked ${count} times`)
    }
  }, [count2]);
  const customEffection = useCustomEffects(count,count2)
  // why custom effect invoke before rerender
  return (
      <div className="default">
        {console.log('rerender')}
        <Todos/>
        <TextInputWithFocusButton/>
        <p className="appName">{props.appName}</p>
        <div>
          2111111111qoe骄傲圣诞节哦；较为佛；i；金额；哦覅我给；房价网；哦二纺机；饿哦呜i积分呜i哦；二街坊围殴；金佛；文件覅偶；为己任；我；我为兼容；危机佛；危机佛为；囧
        }
        </div>
        <div className="count">{count}</div>
        <button onClick={()=>setCount(count+1)}>111</button>
        <button onClick={()=>setCount2(count2+1)}>222</button>
        <p className="custom">{customEffection?'true':'false'}</p>
      </div>
    );
}
export default connect(mapSTP)(Default)







