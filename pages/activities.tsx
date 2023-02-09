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
 
  const handleOpen = (value: any) => {
    if(value === "one"){
      setOpenOne(!openOne);
    }else if(value === "two"){
      setOpenTwo(!openTwo);
    }else if(value === "three"){
      setOpenThree(!openThree);
    }
  };
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
                      This is a simple example of Page you can build using
                      Material Tailwind. It features multiple components based on the
                      Tailwind CSS and Material Design by Google.
                    </Typography><br/>
                </div>
            </div>
          </div>
      </div>
      <div className="text-center px-16" style={{marginBottom:"10px"}}>
      <section className="bg-white dark:bg-gray-900">
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

                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                    </p>
                  </> : null
                  }
            </div>

            <div className="bg-teal-100 border-2 border-gray-100 rounded-lg dark:border-gray-700" onClick={()=>handleOpen("two")}>
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">{t("services.ReadaptationOrtopedique")}</h1>

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

                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                    </p>
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

                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                    </p>
                  </> : null
                  }
            </div>

        </div>
    </div>
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