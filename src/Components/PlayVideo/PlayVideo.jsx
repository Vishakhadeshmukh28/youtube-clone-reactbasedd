import React, { useState } from 'react'
import'./PlayVideo.css'
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';

const PlayVideo = ({videoId}) => {

    const[apiData,setApiData]=useState(null);
    const fetchVideoData=async()=>{
        //Fetching video data
        const videoDetails_url=` https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url)
    }

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0"></iframe>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className='play-video-info'>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>GreatStack</p>
            <span>1M subscribers</span>
        </div>
        <button>Subsribe</button>
      </div>
      <div className='vid-description'>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on Wb development</p>
        <hr />
        <h4>130 comments</h4>
        <div className='comment'>
            <img src={user_profile} alt="" />
            <div>
                <h1>JAck Nicholson <span>1 day ago</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis qui reiciendis repellat nam dicta. Tempora cupiditate optio delectus laboriosam tempore assumenda nemo laborum eum est, nesciunt, totam aut. Molestias, nostrum.</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt="" />
            <div>
                <h1>JAck Nicholson <span>1 day ago</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis qui reiciendis repellat nam dicta. Tempora cupiditate optio delectus laboriosam tempore assumenda nemo laborum eum est, nesciunt, totam aut. Molestias, nostrum.</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt="" />
            <div>
                <h1>JAck Nicholson <span>1 day ago</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis qui reiciendis repellat nam dicta. Tempora cupiditate optio delectus laboriosam tempore assumenda nemo laborum eum est, nesciunt, totam aut. Molestias, nostrum.</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt="" />
            <div>
                <h1>JAck Nicholson <span>1 day ago</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis qui reiciendis repellat nam dicta. Tempora cupiditate optio delectus laboriosam tempore assumenda nemo laborum eum est, nesciunt, totam aut. Molestias, nostrum.</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
