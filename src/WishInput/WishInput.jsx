import React from 'react';
import { useState } from 'react';
function WishInput({ onNewWish }) {
    const [newWish, setNewWish] = useState('');
    const handleKeyUp = (e) => {
        if (e.key == 'Enter' && newWish !== '') {
            const newWishObj = {
                id: Date.now(),
                text: newWish,
                completed: false
            };
            onNewWish(newWishObj);
            setNewWish('');
        }
    }
    return (
        <fieldset className="wish-input">
            <legend className="wish-input__label">New Wish:</legend>
            <input
                type="text"
                placeholder="My new Wish"
                value={newWish}
                onChange={e => setNewWish(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </fieldset>
    )
};
export default WishInput;