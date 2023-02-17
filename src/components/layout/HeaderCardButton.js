import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../cart/CartIcon';

import classes from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {

    const [btnHighlighted, setBtnHighlight] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump: ''}`;

    useEffect(() => {
        if(!items.length) return;

        setBtnHighlight(true);

        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numCartItems}
            </span>
        </button>
    );
};

export default HeaderCardButton;