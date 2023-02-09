import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Image from 'next/image'
import {
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import Link from 'next/link';
import CardHours from '../components/card_hours';
import Card from '../components/card';


export default function Home() {
  const { t } = useTranslation("");
  const [effect, setEffect] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const showParagraph = (number:string) => {
    console.log("qui")
    if(number === "first"){
      setShowFirst(true);
      setShowSecond(false);
      setShowThird(false);
    }else if(number === "second"){
      setShowFirst(false);
      setShowSecond(true);
      setShowThird(false);
    }else if(number === "third"){
      setShowFirst(false);
      setShowSecond(false);
      setShowThird(true);
    }
};

  return (
    <Layout home>
      <Head>
        <title>{t("title.Title")}</title>
      </Head>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/foto_home/campo.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                SPIKE Physio Sport
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography><br/>
              <div className="flex justify-center">
              <Link href="#home_title">
                <button
                    className={`${
                      effect && "animate-wiggle"
                    } bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded`}
                    onClick={() => {
                      setEffect(true);
                    }}
                    onAnimationEnd={() => setEffect(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
              </Link>
               
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="text-center px-16" id="home_title" style={{marginBottom:"10px"}}>
        <div className='card-container' >
          <CardHours
              iconS={""}
              key={"card1"}
              title={"Spike Physio Sport"}
              googleLink={"https://www.facebook.com/mercedesfarina76"}
              text=""
              image={"/img/physio/logo.png"}
          />
          </div>
          <br/>
          <h1 style={{marginTop:"20px", marginBottom:"10px"}} className="font-semibold leading-tight text-5xl">{t("home.Valeurs")}</h1>
          <div className='card-container'>
          <Card
              style={{cursor:"pointer"}}
              onClick={()=>showParagraph("first")}
              iconS={""}
              key={"card1"}
              title={t("home.Pratique")}
              instagramLink={""}
              fbLink={""}
              text=""
              image={"/img/physio/evidence_base.png"}
          />
          <Card
            onClick={()=>showParagraph("second")}
            iconS={""}
            key={"card2"}
            title={t("home.Soins")}
            instagramLink={""}
            fbLink={""}
            text=""
            image={"/img/physio/cure.jpg"}
          />
          <Card
            onClick={()=>showParagraph("third")}
            iconS={""}
            key={"card3"}
            title={t("home.Recherche")}
            instagramLink={""}
            fbLink={""}
            text=""
            image={"/img/physio/ricerca.jpg"}
          />
        </div>
        {showFirst ? 
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
          {t("home.TextOne")}
        </p> : null
        }
        {showSecond ? 
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
          {t("home.TextTwo")}
        </p> : null
        }
        {showThird ? 
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
          {t("home.TextThree")}
        </p> : null
        }
        
      </div>
    </Layout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}