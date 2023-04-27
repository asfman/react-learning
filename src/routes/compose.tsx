import { useState, useMemo, useEffect, FC } from 'react';

function compose(...fns: any[]): any{
  return fns.reduceRight((prevFn, nextFn) =>
    (component: FC<any>) => nextFn(prevFn(component)),
    (value: any) => value
  );
}

interface Data {
  name: string
}

interface Props {
  data?: Data[];
  isLoading: boolean;
}

const withLoadingList = (Component: FC<Props>) => (props: Props) => {
  if (props.isLoading)
    return <div>Loading...</div>
  return <Component {...props} />
}

const withNoDataList = (Component: FC<Props>) => (props: Props) => {
  if (!props.data)
    return <div>No data loaded yet.</div>
  return <Component {...props} />
}

const withDataEmptyList = (Component: FC<Props>) => (props: Props) => {
  if (!props.data!.length)
    return <div>Data is empty.</div>
  return <Component {...props} />
}


export default function Compose () {
  const [data, setData] = useState<Data[]|null>(null);
  const [loading, setLoading] = useState(true);
  const StateList = useMemo(() => compose(withLoadingList, withNoDataList, withDataEmptyList)(List),[]);

  useEffect(() => {
    setTimeout(() => {
      Math.random() > 0.2 ?
      setData(Array.from({length: 36}, (_, index) => (
        { name: `asfman${index+1}` }
      )))
      : setData(null);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <StateList data={data} isLoading={loading} />
  );
}

function List(props: Props) {
  return (
    <>
      <div>List Component</div>
      <ul>
        {
          props.data!.map((item: any, index) => (
            <li key={index.toString()}>{item.name}</li>
          ))
        }
      </ul>
    </>
  );
}


