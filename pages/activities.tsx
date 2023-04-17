import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Tabs from '../components/tabs'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from '@material-tailwind/react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Activities() {
  const { t } = useTranslation("");
  const [open, setOpen] = useState(1);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [showReadaptOrt, setShowReadaptOrt] = useState(false);
  const [showReadaptSport, setShowReadaptSport] = useState(false);
  const [showManipVert, setShowManipVert] = useState(false);
  const [showManipReedP, setShowManipReedP] = useState(false);
  const [showMassoT, setShowMassoT] = useState(false);
  const [showTechnPomp, setShowTechnPomp] = useState(false);
  const [showTriggerP, setShowTriggerP] = useState(false);
  const [showDrainage, setShowDrainage] = useState(false);
  const [showKinesio, setShowKinesio] = useState(false);
  const [showTecar, setShowTecar] = useState(false);
  const [showUltrason, setShowUltrason] = useState(false);
  const [showElectrSt, setShowElectrSt] = useState(false);
  const [showMagneto, setShowMagneto] = useState(false);
  const [showOnde, setShowOnde] = useState(false);
  const [showReadaptResp, setShowReadaptResp] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
 
  const handleOpen = (value: any) => {
    if(value === "one"){
      setOpenOne(!openOne);
    }else if(value === "two"){
      setOpenTwo(!openTwo);
    }else if(value === "three"){
      setOpenThree(!openThree);
    }
  };

  const resetModal = ()=>{
    if(showReadaptOrt){
      setShowReadaptOrt(false);
      setOpenOne(true);
    }
    if(showReadaptSport){
      setShowReadaptSport(false);
      setOpenOne(true);
    }
    if(showReadaptResp){
      setShowReadaptResp(false);
      setOpenOne(true);
    }
    if(showDrainage){
      setShowDrainage(false);
      setOpenTwo(true);
    }
    if(showManipVert){
      setShowManipVert(false);
      setOpenTwo(true);
    }
    if(showManipReedP){
      setShowManipReedP(false);
      setOpenTwo(true);
    }
    if(showMassoT){
      setShowMassoT(false);
      setOpenTwo(true);
    }
    if(showTechnPomp){
      setShowTechnPomp(false);
      setOpenTwo(true);
    }
    if(showTriggerP){
      setShowTriggerP(false);
      setOpenTwo(true);
    }
    if(showKinesio){
      setShowKinesio(false);
      setOpenTwo(true);
    }
    if(showTecar){
      setShowTecar(false);
      setOpenThree(true);
    }
    if(showUltrason){
      setShowUltrason(false);
      setOpenThree(true);
    }
    if(showElectrSt){
      setShowElectrSt(false);
      setOpenThree(true);
    }
    if(showMagneto){
      setShowMagneto(false);
      setOpenThree(true);
    }
    if(showMatrix){
      setShowMatrix(false);
      setOpenThree(true);
    }
    if(showOnde){
      setShowOnde(false);
      setOpenThree(true);
    }
  }


  return (
    <Layout home={false}>
      <Head>
        
        <title>Services - SPIKE Physio Sport</title>
      </Head>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-[url('/img/collage_mod.jpg')] bg-contain bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
              <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                  <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 font-black"
                    >
                      {t("services.Services")}
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80">
                      {t("services.Intro")}
                    </Typography><br/>
                </div>
            </div>
          </div>
      </div>
      <div className="text-center px-16" style={{marginBottom:"10px"}}>
      <section className="bg-white dark:bg-gray-900" onClick={() => resetModal()}>
    <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">{t("services.Services")}</h1>
        <div className="mt-12 space-y-8">
            <div className="bg-teal-100 border-2 border-gray-100 rounded-lg dark:border-gray-700" onClick={()=>handleOpen("one")}>
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">{t("services.PhysioGeneral")}</h1>
                      {openOne ? 
                      <span className="text-gray-500 bg-gray-300 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                      :
                      <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    }
                        
                </button>
                {openOne ? 
                  <>
                    <hr className="border-gray-300 dark:border-gray-700"/>
                    <div className="grid grid-cols-3 xs:grid-cols-1 grid-flow-dense gap-3 p-5">
                      <button 
                          className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowReadaptOrt(true)}
                        >
                        {t("services.ReadaptOrtop")}
                      </button>
                      <button 
                          className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowReadaptSport(true)}
                        >
                        {t("services.ReadaptSportive")}
                      </button>
                      <button 
                          className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowReadaptResp(true)}
                        >
                        {t("services.ReadaptResp")}
                      </button>
                      </div>
                  </> : null
                  }
            </div>

            <div className="bg-teal-100 border-2 border-gray-100 rounded-lg dark:border-gray-700" onClick={()=>handleOpen("two")}>
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">{t("services.TechnUt")}</h1>

                    {openTwo ? 
                      <span className="text-gray-500 bg-gray-300 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                      :
                      <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    }
                </button>
                {openTwo ? 
                <>
                  <hr className="border-gray-300 dark:border-gray-700"/>
                  <div className="grid grid-cols-3 xs:grid-cols-1 gap-4 p-5">
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowManipVert(true)}
                      >
                      {t("services.ManipVert")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowManipReedP(true)}
                      >
                      {t("services.ReeducPost")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowMassoT(true)}
                      >
                      {t("services.Massot")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowTechnPomp(true)}
                      >
                      {t("services.TechnPomp")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowTriggerP(true)}
                      >
                      {t("services.TriggerP")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowDrainage(true)}
                      >
                      {t("services.Drainage")}
                    </button>
                    <button 
                        className="overflow-hidden col-start-2 xs:col-start-1 bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowKinesio(true)}
                      >
                      {t("services.Kinesio")}
                    </button>
                    </div>
                </> : null
                  }
            </div>

            <div className="bg-teal-100 border-2 border-gray-100 rounded-lg dark:border-gray-700" onClick={()=>handleOpen("three")}>
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">{t("services.ReadaptationSportive")}</h1>

                    {openThree ? 
                      <span className="text-gray-500 bg-gray-300 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                      :
                      <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    }
                </button>
                {openThree ? 
                  <>
                    <hr className="border-gray-300 dark:border-gray-700"/>
                  <div className="grid grid-cols-3 xs:grid-cols-1 gap-4 p-5">
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowTecar(true)}
                      >
                      {t("services.Tecar")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowUltrason(true)}
                      >
                      {t("services.Ultrason")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowElectrSt(true)}
                      >
                      {t("services.ElectrSt")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowMagneto(true)}
                      >
                      {t("services.Magneto")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowOnde(true)}
                      >
                      {t("services.Onde")}
                    </button>
                    <button 
                        className="overflow-hidden bg-teal-500 text-white active:bg-teal-600 hover:bg-teal-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowMatrix(true)}
                      >
                      {t("services.Matrix")}
                    </button>
                   
                    </div>
                    
                  </> : null
                  }
            </div>

        </div>
    </div>
    {showReadaptOrt ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ReadaptOrtop")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowReadaptOrt(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ReadaptOrtText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowReadaptOrt(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showReadaptSport ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl" style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ReadaptSportive")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowReadaptSport(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ReadaptSportiveText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowReadaptSport(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


      {showReadaptResp ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl" style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ReadaptResp")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowReadaptResp(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ReadaptRespText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowReadaptResp(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showManipVert ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ManipVert")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowManipVert(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ManipVertText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowManipVert(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}



{showManipReedP ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ReeducPost")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowManipReedP(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ReeducPostText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowManipReedP(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showMassoT ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Massot")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowMassoT(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.MassotText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMassoT(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showTechnPomp ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.TechnPomp")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowTechnPomp(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.TechnPompText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTechnPomp(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showTriggerP ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.TriggerP")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowTriggerP(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.TriggerPText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTriggerP(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showDrainage ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Drainage")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowDrainage(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.DrainageText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDrainage(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showKinesio ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Kinesio")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowKinesio(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.KinesioText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowKinesio(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showTecar ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Tecar")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowTecar(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.TecarText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTecar(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showUltrason ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Ultrason")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowUltrason(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.UltrasonText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowUltrason(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showElectrSt ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.ElectrSt")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowElectrSt(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.ElectrStText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowElectrSt(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showMagneto ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Magneto")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowMagneto(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.MagnetoText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMagneto(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showOnde ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Onde")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowOnde(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.OndeText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowOnde(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
  {showMatrix ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " style={{maxHeight: "inherit"}}>
              {/*content*/}
              <div style={{maxHeight: "inherit"}} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {t("services.Matrix")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowMatrix(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto " style={{ maxHeight:"300px", overflowY:"auto"}}>
                  <p className="my-4 text-slate-500 text-justify text-sm leading-relaxed">
                    {t("services.MatrixText")}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMatrix(false)}
                  >
                    {t("home.Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
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