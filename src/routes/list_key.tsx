import { useState } from 'react'

function ListItem({ number }: {number: number}) {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const handleClick = () => {
    setIsHighlighted(!isHighlighted)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: isHighlighted ? 'yellow' : 'transparent',
      }}
    >
      {number}
    </div>
  )
}

export default function ListKey() {
  const [numbers, setNumbers] = useState([1,2,3,4,5])

  return (
    <>
      {
        numbers.map((num, index) => {
          return <ListItem key={index} number={num}/>
        })
      }
      <button onClick={() => setNumbers(numbers.slice(1))}>delete</button>
    </>
  )
}

