import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const VideoDetail = () => {
    const location = useLocation();
    const videoInfo = location.state?.videoInfo;
    const {creator, reaction, submission} = videoInfo;
    const {handle, name, pic} = creator;
    const {count} = reaction;
    const {description, mediaUrl, title} = submission;
  return (
    <div className='flex lg:flex-col'>
        <div className='p-4 2xl:w-1/2 lg:w-full'>
            <Link to='/'><h5 className='flex items-center gap-2 font-semibold'><ArrowBackOutlinedIcon /> Go to Home</h5></Link>
            <ReactPlayer url={mediaUrl} playing controls width={'100%'} />
        </div>
        <div className='flex flex-col gap-4 p-4 2xl:w-1/2 lg:w-full'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' alt='pic' src={pic} />
                    </div>
                    <div>
                        <h4 className='font-bold text-sm'>{name}</h4>
                        <h5 className='font-bold text-sm'>@{handle}</h5>
                    </div>
                </div>
                <div className='p-2 rounded-lg shadow-lg bg-purple-800 text-white flex items-center gap-1'><ThumbUpOutlinedIcon /> {count}</div>
            </div>
            <p className='bg-gray-200 p-2 rounded-lg shadow-lg'>{description}</p>
        </div>
    </div>
  )
}

export default VideoDetail