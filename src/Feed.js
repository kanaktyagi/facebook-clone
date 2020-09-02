import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import imagek from './image/my_dp.jpg'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
            <Post 
                profilePic={imagek}
                message="Wow this is works!"
                timestamp="This is a timestamp"
                userName="kanak tyagi"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
