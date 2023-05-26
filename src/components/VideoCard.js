import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSelectedVideo } from '../utils/videoSlice';

const VideoCard = ({videoInfo}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {creator, reaction, submission} = videoInfo;
    const {handle, pic} = creator;
    const {count} = reaction;
    const {thumbnail, title} = submission;

    const handleVideoClick = () => {
        dispatch(updateSelectedVideo(videoInfo));
        navigate('/video?postId='+videoInfo.postId, { state: { videoInfo: videoInfo } });
    }

  return (
    <div className='cursor-default bg-white shadow-lg w-fit h-fit rounded-lg overflow-hidden'>
        <div className='w-80 h-64 relative'>
            <img onClick={handleVideoClick} className='w-full h-full object-cover cursor-pointer' alt='thumbnail' src={thumbnail} />
            <div className='absolute bottom-2 right-2 p-2 rounded-lg shadow-lg bg-purple-800 text-white flex items-center gap-1'><ThumbUpOutlinedIcon /> {count}</div>
        </div>
        <div className='p-2 flex flex-col gap-3'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className='flex items-center gap-2'>
                <div className='h-10 w-10 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' alt='pic' src={pic} />
                </div>
                <h5 className='font-bold text-sm'>@{handle}</h5>
            </div>
        </div>
    </div>
  )
}

export default VideoCard