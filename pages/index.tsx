import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Image from 'next/image'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation("");
  const [effect, setEffect] = useState(false);

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
                Your story starts with us.
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
      <div className="text-center px-16">
        <h1 id="home_title" className="font-semibold leading-tight text-5xl">Home</h1>
        <h4 className="font-normal leading-tight text-2xl">Di seguito le principali notizie</h4><br/>
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
        {t("home.text")}
        </p> 
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