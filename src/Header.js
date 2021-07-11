import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
const Header = () => {
    const [{cart,user}]=useStateValue();
    // console.log("user in header",user.email)
    const login=()=>{
        if(user){
            auth.signOut();
        }  
    }

    return (
        <nav className="header">
      
            <Link to="/">
                <img className="header__logo"
                src="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/amazon_PNG11.png?alt=media&token=f003db76-1c44-4a7b-98ff-e0de7122ca5f"
                alt="amazon logo"
                />
            </Link>
            
           
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
           

            <div className="header__nav">
   
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span  className="header__optionLineOne">Hello {user?`${user.email}`:"User"}</span>
                        <span className="header__optionLineTwo">{user?"Sign out":"Sign in"}</span>
                    </div>
                </Link>
             
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                </Link>
       
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon/>
                        <span className="header__optionLineTwo header__basketCount">{cart.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header
