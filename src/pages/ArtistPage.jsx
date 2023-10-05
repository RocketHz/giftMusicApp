import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import ArtistAlbum from '../components/ArtistPage/ArtistAlbum'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'

const ArtistPage = () => {

  const { id } = useParams()

  const [ artist, getArtist ] = useFetch()

  useEffect(() => {
    getArtist(`/api/artists/${id}`)
  }, [id])
  

  return (
    <div>
      <Link to='/'>Back</Link>
      <ArtistInfo 
        artist={artist}
      />
      <ArtistAlbum 
        artist={artist?.albums}
      />
      <ArtistSongsTop
        tracks={artist?.songsTop}
      />
    </div>
  )
}

export default ArtistPage