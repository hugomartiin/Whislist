import React from 'react';
import WishListItem from './WishListItem';

function WishList({ wishes, setWishes }) {

    const onCompletedChangeHandler = (checked, i) => {
        const tempWishes = [...wishes];
        tempWishes[i].completed = checked;
        setWishes(tempWishes);
    }


    return (
        <ul className='wish-list'>
            {wishes.map((wish, i) => (
                <WishListItem
                    key={wish.id}
                    wish={wish}
                    onCompletedChange={(checked) => onCompletedChangeHandler(checked, i)}
                />
            ))}
        </ul>

    );
};

export default WishList;