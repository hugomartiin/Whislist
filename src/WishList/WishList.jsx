import React from 'react';

function WishList(props) {
    return (
        <ul className="wish-list">
            {props.wishes.map((wish) => (
                <li
                    key={wish.id}
                    className={`
            wish-list__item
            ${wish.completed ? 'wish-list__item--done' : ''}
            `}
                >
                    <input
                        type="checkbox"
                        checked={wish.completed}
                        id={wish.id}
                    />
                    <label htmlFor={wish.id}>{wish.text}</label>
                </li>
            ))}
        </ul>


    );
};

export default WishList;