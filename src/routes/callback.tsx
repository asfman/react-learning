import { FC, memo, useState, useCallback } from 'react';

interface Props {
  onClick?: () => void,
}

const Child: FC<Props> = memo((props: Props) => {
  console.log("Child render");

  return (
    <div onClick={props.onClick}>
      Child Component
      <ul>
      {
        Array.from({length: 20}, (_, index) => (
          <li key={index}> child {index} </li>
        ))
      }
      </ul>
    </div>);
});

export default function Callback() {
  console.log("Callback render");
  const [count, setCount] = useState(0);

  const childClickHandler = useCallback(() => {
    console.log('child clicked');
  }, []);

  return (
    <div>
      <p>
        <button onClick={() => setCount(count+1)}>Callback {count}</button>
      </p>
      <Child onClick={childClickHandler} />
    </div>
  );
}
