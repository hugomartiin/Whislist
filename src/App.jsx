import { useState } from 'react'
import './App.css'

function App() {
  const [wishes] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Get a job', completed: false },
    { id: 3, text: 'Get a job again!', completed: false },
  ])
  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <fieldset className="wish-input">
        <legend className="wish-input__label">New Wish:</legend>
        <input
          type="text"
          placeholder="My new Wish"
        />
      </fieldset>
      <ul className="wish-list">
        {wishes.map((wish) => (
          <li
            className={`
            wish-list__item
            ${wish.completed ? 'wish-list__item--done' : ''}
            `}
          >
            <input
              type="checkbox"
              checked={wish.completed}
            />
            <label>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
