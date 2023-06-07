import { useState } from "react";

const gifts = [
  'Keyboard',
  'Magic Mouse',
  'Apple Watch'
]

function App() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1 >{gift || "Do u want a gift?"}</h1>
      <button onClick={randomGift}>Claim</button>
    </div>
  );
}

export default App;
