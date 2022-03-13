import Head from 'next/head'
import Layout from '../components/layout'

import { useCallback, useState } from 'react';
import fs from 'fs';
import path from 'path';
import Gallery from 'react-photo-gallery-react17';
import Carousel, { Modal, ModalGateway } from 'react-images';

function GalleryS(props:any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout home={false}>
      <Head>
        <title>Galleria - NCS Agata</title>
      </Head>
      <div className="text-center px-16">
        <h1 className="font-semibold leading-tight text-5xl">Galleria</h1>
        
         <Gallery photos={props.photos} onClick={openLightbox}/>
         <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={props.photos.map((x:any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
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

    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    
    const filenames = fs.readdirSync(dir);
    for(let fileN of filenames){
      galleryS.push( {src:dirRelativeToPublicFolder+fileN,
        width: 1, height:4})
      
    }
    return {
      props: {
        photos: galleryS,
      },
    };
  
}

export default GalleryS;