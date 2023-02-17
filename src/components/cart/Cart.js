import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../ui/Modal';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = !!cartCtx.items.length;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    {...item}
                />
            ))}
        </ul>;

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;