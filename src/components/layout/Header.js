import { Fragment } from 'react';
import HeaderCardButton from './HeaderCardButton';

import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>SmotSnacks</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}><img src={headerImage} alt='Yummy food!'/></div>
    </Fragment>
};

export default Header;