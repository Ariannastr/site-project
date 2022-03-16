import Head from 'next/head'
import Layout from '../components/layout'

import { useCallback, useState } from 'react'
import fs from 'fs'
import path from 'path'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from '../components/gallery'
import { InferGetStaticPropsType } from 'next'

function GalleryS(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentImage, setCurrentImage] = useState('')
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((photo: string) => {
    setCurrentImage(photo)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage('')
    setViewerIsOpen(false)
  }

  const photos = props.photos.map((p) => p.src)

  return (
    <Layout home={false}>
      <Head>
        <title>Galleria - NCS Agata</title>
      </Head>
      <div className="px-16 text-center">
        <h1 className="text-5xl font-semibold leading-tight">Galleria</h1>

        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={photos.findIndex((p) => p === currentImage)}
                views={props.photos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let galleryS = []
  const dirRelativeToPublicFolder = 'img/gallery/'

  const dir = path.resolve('./public', dirRelativeToPublicFolder)

  const filenames = fs.readdirSync(dir)
  for (let fileN of filenames) {
    galleryS.push({
      src: '/' + dirRelativeToPublicFolder + fileN,
      width: 1,
      height: 4,
    })
  }
  return {
    props: {
      photos: galleryS,
    },
  }
}

export default GalleryS
