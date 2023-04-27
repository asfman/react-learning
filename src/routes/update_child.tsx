import { useState, useEffect, memo } from 'react';

const Child = memo(function() {
  console.log("child render");
  const s = 'data in child';
  const [ text, setText ] = useState('');
  // react 18 strict模式下 useEffect会运行两次mount->unmout->mount
  useEffect(() => {
    console.log('call useEffect');
    return () => console.log('useEffect unmount');
  }, []);

  return <div style={{padding: '16px', borderRadius: '8px', margin: '18px auto',  border: '1px solid #ccc'}}>
      <h2>{text}</h2>
      <button onClick={()=> setText(s + Math.random().toString())}>update</button>
    </div>
});

export default function UpdateChild() {
  console.log('parent render');
  const s = 'data in parent';
  const [ data, setData ] = useState(s);
  return <>
    <div>{data}</div>
    <button onClick={() => setData(s + Math.random().toString())}>change data</button>
    <Child />
    </>
}
