import React, { useEffect, useState } from 'react';

//Components
import SearchBar from './Components/SearchBar';
import API from './YTAPI';
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'

const App = () => {

  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState(null)

  useEffect( async (term) => {
    const response = await API.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items)
    setSelectedVideos(response.data.items[0])
    console.log(response.data.items);
  }, []) 

  const handleSubmit = async (term) => {
    const response = await API.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items)
    setSelectedVideos(response.data.items[0])
  }

  const handleVideoSelect = (video) => {
    setSelectedVideos(video)
  }

    return (
      <div className="ui container">
       <SearchBar
       handleFormSubmit={handleSubmit}
       />
       <div className='ui grid'>
         <div className='ui row'>
           <div className='eleven wide column'>
              <VideoDetail video={selectedVideos}/>
           </div>
            <div className='five wide column'>
              <VideoList 
              handleVideoSelect={handleVideoSelect}
              videos={videos}
              />
            </div>
         </div>
       </div>
      </div>
    );
  }

export default App;
