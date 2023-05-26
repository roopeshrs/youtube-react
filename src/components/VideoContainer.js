import React, {useEffect, useState} from 'react'
import VideoCard from './VideoCard'
import { FETCH_VIDEOS_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { updateVideoList } from '../utils/videoSlice'
import Shimmer from './Shimmer'
import Pagination from './Pagination'

const VideoContainer = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const videoList = useSelector(store => store.video.videoList);

    useEffect(()=>{
        fetchVideos();
    }, [])

    const fetchVideos = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(FETCH_VIDEOS_API);
            const json = await response.json();
            dispatch(updateVideoList(json.data.posts));
        } catch (error) {
            console.error('Error:', error.message);
        }
        setIsLoading(false);
    }
      
  return (
    <div className='flex flex-col items-center gap-14 pb-14'>
        <div className='flex flex-wrap justify-center gap-3'>
            {
                isLoading ? (
                    <Shimmer />
                ):(
                    videoList?.map(video => <VideoCard key={video?.postId} videoInfo={video} />)
                )
            }
        </div>
        <Pagination setIsLoading={setIsLoading} />
    </div>
  )
}

export default VideoContainer