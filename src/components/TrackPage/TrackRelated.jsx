import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import TrackCard from '../HomePage/TrackCard'

const TrackRelated = ({ artist }) => {

    const [ trackList, getTrackList ] = useFetch()

    useEffect(() => {
      if (artist) {
        getTrackList(`/api/tracks?limit=5&q=${artist}`)
      }
    }, [artist])
    

  return (
    <section>
      <h3>Track Related</h3>
<div>
  {
    trackList?.tracks.items.map(track => (
      <TrackCard
        key={track.id}
        track={track}
      />
    ))
  }
</div>
    </section>
  )
}

export default TrackRelated