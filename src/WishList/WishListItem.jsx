import React, { useState, useEffect } from 'react'

function WishListItem({ wish, onCompletedChange }) {
    const [age, setAge] = useState(0)
    useEffect(() => {
        console.log('WishListItem rendered: ' + wish.text)
        let ageInterval
        if (!wish.completed) {
            //If the wish is not completed, we start the timer by adding 1 to the age every second
            ageInterval = setInterval(() => {
                setAge((currentAge) => currentAge + 1)
            }, 1000)
        } else {
            //If the wish is completed, we clear the timer
            setAge(0)
        }
        return () => {
            clearInterval(ageInterval)
        }
    }, [wish.completed])
    return (
        <li
            className={`
        wish-list__item
        ${wish.completed ? 'wish-list__item--done' : ''}
        ${age >= 5 && age < 10 ? 'wish-list__item--warn' : ''}
        ${age >= 10 ? 'wish-list__item--danger' : ''}

        `}
        >
            <input
                id={wish.id}
                type="checkbox"
                checked={wish.completed}
                onChange={(e) => onCompletedChange(e.target.checked)}
            />
            <label htmlFor={wish.id}>{wish.text}</label>
        </li>
    );
}

export default WishListItem
