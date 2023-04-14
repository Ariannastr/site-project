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

const resetModal = ()=>{
  if(showFirst){
    setShowFirst(false);
  }
  if(showSecond){
    setShowSecond(false);
  }
  if(showThird){
    setShowThird(false);
  }
}

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
                {t("home.Intro")}
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
      <div className="relative flex py-5 items-center" id="home_title">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">{t("home.Hours")}</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="text-center px-16" style={{marginBottom:"50px"}} onClick={() => resetModal()}>
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
          </div>
          <div className='card-container'>
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
          </div>
          <div className='card-container'>
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

        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {t("home.Pratique")}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowFirst(false)}
                >
                  <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto" style={{ maxHeight:"300px", overflowY:"auto"}}>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {t("home.TextOne")}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowFirst(false)}
                >
                  {t("home.Close")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        : null}
        {showSecond ? 
        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                {t("home.Soins")}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowFirst(false)}
                >
                  <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto" style={{ maxHeight:"300px", overflowY:"auto"}}>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {t("home.TextTwo")}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowFirst(false)}
                >
                  {t("home.Close")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> : null
        }
        {showThird ? 
          <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  {t("home.Recherche")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowFirst(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto" style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {t("home.TextThree")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowFirst(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>: null
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