import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import TrackCard from '../components/HomePage/TrackCard'

const HomePage = () => {

  const [ listTracks, getTracks ] = useFetch()
  const [ inputValue, setInputValue ] = useState('ricardo arjona')
  const [ quantityPerPage, setQuantityPerPage ] = useState(10)

  useEffect(() => {
    getTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])  
  
  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTrackPerPage = e => { 
    setQuantityPerPage(e.target.value)
   }


  return (
    <div className='home_container'>
      <div className='track_list_container'>
        <form className='form_track' onSubmit={handleSearch}>
          <input className='form_track_input' ref={inputSearch} type="text" />
          <select className='form_track_select' onChange={handleTrackPerPage}>
            {
              [2,4,6,8,10].map(tracksPerPage => (
                <option key={tracksPerPage} value={tracksPerPage}>{tracksPerPage}</option>
              ))
            }
          </select>
        </form>
        <div className="track_list_content">
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard
                key={track.id}
                track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage