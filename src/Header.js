import React from 'react'
import image from './image/facebook.jpg'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css'

function Header() {
    return (
        <div className="header">
             <div className="header__left">
                 <img style={{height: 40}} src={image} alt="facebook logo"/>
                      <div className="header__input">
                           <SearchIcon />
                     <input type="text" placeholder="Search Facebook"/>
        </div>
        </div>
            <div className="header__center">
             <div className="header__option header__option--active">
             <HomeIcon fontSize="large"/>
             </div>
             <div className="header__option">
             <FlagIcon fontSize="large"/>
             </div>
             <div className="header__option">
             < GroupIcon fontSize="large"/>
             </div>
             <div className="header__option">
             < SubscriptionsIcon fontSize="large"/>
             </div>
             <div className="header__option">
             < StorefrontIcon fontSize="large"/>
             </div>
           
            </div>
            <div className="header__right">
                <div className="header__info">
                <Avatar />
                <h4>knktyagi</h4>
                </div>
                <IconButton>
                <AddIcon/>
                </IconButton>

                <IconButton>
                <ForumIcon/>
                </IconButton>

                <IconButton>
                <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
