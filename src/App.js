import {useState} from 'react';
let list=[
  'hi ✋',
  'this is 👍',
  'war 🪖'
]
export default function App(){
  let [index,setIndex]=useState(0);
  function fun(){
    if(index>0){
      return index--;
    }
    else{
      return index;
    }
  }
  function fun2(){
    if(index<2){
      return index++;
    }
    else{
      return index;
    }
  }
  return(
    <>
      <div className='car'>
        <div className={`car2 ${index>=0?'red':'advance'}`}>1</div>
        <div className={`car2 ${index>=1?'red':'advance'}`}>2</div>
        <div className={`car2 ${index>=2?'red':'advance'}`}>3</div>
        <div>
          {list[index]}
          <div>
            <button onClick={()=>(setIndex(fun))}> Previous </button>
            <button onClick={()=>(setIndex(fun2))}> Next </button>
          </div>
        </div>
      </div>
    </>
  )
}