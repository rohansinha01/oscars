/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Button = () => {
const [rank, setRank] = useState(0)

function handleClick() {
    setRank()
}

  return (
    <>
    <div>
        <button onClick={handleClick}>
            Submit
        </button>
    </div>
    </>
  )
}

export default Button