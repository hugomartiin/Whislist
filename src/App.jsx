import { useState } from 'react'
import './App.css'
import WishInput from './WishInput/WishInput'
import WishList from './WishList/WishList'
import GeneralButton from './components/GeneralButton'

function App() {
  const [wishes, setWishes] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Vite', completed: true },
    { id: 3, text: 'Build something awesome!', completed: false },
  ])

  const onNewWishHandler = (newWish) => {
    setWishes((currentWishes) => [...currentWishes, newWish]);
  }
  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <WishInput onNewWish={onNewWishHandler} />
      <WishList
        wishes={wishes}
        setWishes={setWishes}
      />
      <GeneralButton
        actionFunction={() => {
          setWishes((wishes) => wishes.filter((wish) => !wish.completed));
        }}
        buttonText="Clear Completed"
      />


    </div>
  )
}

export default App
