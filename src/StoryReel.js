import React from 'react'
import './StoryReel.css'
import Story from './Story'
import imageM from './image/Mehak.jpg'
import imageAbhishek from './image/Abhishek.jpg'
import imagek from './image/my_dp.jpg'
import imageN from './image/Nancy.jpg'

function StoryReel() {
    return (
        <div className="storyReel">
           <Story
           image="https://scontent-del1-1.xx.fbcdn.net/v/t1.0-0/s640x640/118384592_3086239538164615_2680244049627905250_o.jpg?_nc_cat=101&_nc_sid=365331&_nc_ohc=8xcHs_oMs0kAX-ig-4_&_nc_ht=scontent-del1-1.xx&tp=7&oh=d96b3872192bdc7407202d45d73e1503&oe=5F71F27A"
           profileSrc={imageM}
           title="Meenakshi Rajput"
            />
            <Story
            image="https://scontent-del1-1.xx.fbcdn.net/v/t15.5256-10/p235x165/118643171_3236326239750304_3688306860227667135_n.jpg?_nc_cat=101&_nc_sid=1055be&_nc_ohc=ZFp4kdJFHVIAX-OwFEX&_nc_ht=scontent-del1-1.xx&tp=6&oh=81ea755f4dc35b1bf2faa02b8724f947&oe=5F73E2CE"
            profileSrc={imageAbhishek}
            title="Abhishek Dubey"
             />
             <Story
             image="https://scontent-del1-1.xx.fbcdn.net/v/t15.5256-10/s417x417/118711802_3312953232131640_1555173856965540588_n.jpg?_nc_cat=102&_nc_sid=1055be&_nc_ohc=joTwz79haP0AX-wJrxs&_nc_ht=scontent-del1-1.xx&oh=7a2f826b42eaab8bb06afc81eb10c4be&oe=5F72B903"
             profileSrc={imagek}
             title="Kanak Tyagi"
              />
              <Story
              image="https://scontent-del1-1.xx.fbcdn.net/v/t15.5256-10/p235x165/118260345_3324002594321018_5516227594070343702_n.jpg?_nc_cat=108&_nc_sid=1055be&_nc_ohc=8nMqTS6qHtoAX8UVFC7&_nc_oc=AQkzRujuBdgF60tNYIU_cv_EFvcNCho-L246Faw7yERD_ld6QVmmlgkLNGkn-b_Qre4&_nc_ht=scontent-del1-1.xx&oh=4e9231d44a0ada212d556bcd42e8acf3&oe=5F7551DA"
              profileSrc={imageN}
              title="Hema Singh"
               />
        </div>
    )
}

export default StoryReel
