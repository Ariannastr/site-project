import Head from 'next/head'
import Layout from '../components/layout'
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useCallback, useState } from 'react';
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import path from 'path';
import fs from 'fs';

function Instructors(props) {
  const { t } = useTranslation("");
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const slides = props.photos.map(({ src, key, width, height, images }) => ({
    src: "/"+src,
    key,
    width,
    height,
    srcSet: images?.map((image) => ({
      src: "/"+image.src,
      width: image.width,
      height: image.height
    }))
  }));


  return (
    <Layout home={false}>
      <Head>
        <title>Gallery - SPIKE Physio Sport</title>
      </Head>
      <div className="text-center px-16" style={{marginBottom:"10px"}}>
        <h1 className="font-semibold leading-tight text-5xl" style={{marginBottom:"10px"}}>Gallery</h1>
        
        <PhotoAlbum photos={props.photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

        <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            render={{
    slide: (image, offset, rect) => {
      const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
      const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

      return (
        <div style={{ position: "relative", width, height }}>
          <Image
            alt=""
            src={image}
            layout="fill"
            loading="eager"
            objectFit="contain"
            draggable={false}
            sizes={
              typeof window !== "undefined"
                ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                : `${width}px`
            }
          />
        </div>
      );
    }
  }}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ locale }: any) {
    let galleryS = []
    const dirRelativeToPublicFolder = 'img/gallery/'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    
    const filenames = fs.readdirSync(dir);
    for(let fileN of filenames){
      galleryS.push( {src:dirRelativeToPublicFolder+fileN,
        width: 300, height:300})  
    }
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        photos: galleryS,
      },
    };
  
}

export default Instructors;