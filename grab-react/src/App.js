import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';

function App() {
  const text = "기모링!";
  const sayHello = function(){
    return <h3>인프런 기모링</h3>
  }
  const sayHello2 = function(){
    alert('안녕');
  }
  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해줘잉</div>
      <ChildComponent name="그랩" age={27}/>
      <ChildComponent name="철수" age={17}/>
      <ChildComponent name="길동" age={37}/>
    </div>
  );
}

export default App;
