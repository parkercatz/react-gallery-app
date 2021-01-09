import React from 'react'
import Image from './Image'
import Loading from './Loading'

const Gallery = (props) => {
  const { urls } = props

  if (urls === null) {
    return <Loading />
  }

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url, index) => {
        return (
          <div key={index} className="column is-3">
            <Image src={url} />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
