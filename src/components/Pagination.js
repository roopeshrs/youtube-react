import React, {useState, useEffect} from 'react'
import { FETCH_VIDEOS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoList } from '../utils/videoSlice';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Pagination = ({setIsLoading}) => {
    const dispatch = useDispatch();
    const videoList = useSelector(store => store.video.videoList);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(()=>{
        fetchVideos(currentPage);
    }, [currentPage])

    const fetchVideos = async (page) => {
        setIsLoading(true);
        try {
            const response = await fetch(FETCH_VIDEOS_API + page);
            const json = await response.json();
            dispatch(updateVideoList(json.data.posts));
        } catch (error) {
            console.error('Error:', error.message);
        }
        setIsLoading(false);
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    
      const handlePreviousPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
    }

  return (
    <div className='flex items-center gap-4'>
      <button onClick={handlePreviousPage} className={`bg-gray-200 p-2 rounded-lg shadow-lg ${currentPage===0 && 'cursor-default text-gray-300'}`}><ArrowBackIosOutlinedIcon /></button>
      <button onClick={handleNextPage} className={`bg-gray-200 p-2 rounded-lg shadow-lg ${videoList?.length===0 && 'cursor-default text-gray-300'}`}><ArrowForwardIosOutlinedIcon /></button>
    </div>
  )
}

export default Pagination