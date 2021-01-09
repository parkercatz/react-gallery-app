import React, { useEffect, useState } from 'react'
import { fetchImages } from '../api/DogAPI'
import Gallery from './Gallery'

const Main = () => {
  const [urls, setUrls] = useState(null)
  useEffect(() => {
    fetchImages('shiba').then((urls) => {
      setUrls(urls)
    })
  }, [])
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  )
}

export default Main
