import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import image from './image/my_dp.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={image} title='kanak'/>
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title= "COvid-19 Information Center"
            />
            <SidebarRow 
            Icon={EmojiFlagsIcon}
            title= "Pages"
            />
            <SidebarRow 
            Icon={PeopleIcon}
            title= "Friends"
            />
            <SidebarRow 
            Icon={ChatIcon}
            title= "Messenger"
            />
            <SidebarRow 
            Icon={StorefrontIcon}
            title= "Marketplaces"
            />
            <SidebarRow 
            Icon={VideoLibraryIcon}
            title= "Videos"
            />
            <SidebarRow 
            Icon={ExpandMoreIcon}
            title= "Marketplace"
            />
        </div>
    )
}

export default Sidebar
