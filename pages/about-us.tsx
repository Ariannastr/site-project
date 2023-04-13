import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from '@material-tailwind/react';
import Card from '../components/card';

export default function AboutUs() {
  const { t } = useTranslation("");
  return (
    <Layout home={false}>
      <Head>
        <title>{t("equipe.AboutUs")} - SPIKE Physio Sport</title>
      </Head>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-[url('/img/noi.jpeg')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
              <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                  <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 font-black"
                    >
                      {t("equipe.AboutUs")}
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80">
                      {t("equipe.Intro")}
                    </Typography><br/>
                </div>
            </div>
          </div>
        </div>

      <div className="text-center px-16" style={{marginBottom:"10px"}}>
      <h1 className="font-semibold leading-tight text-5xl">{t("equipe.Title")}</h1>
        <h4 className="font-normal leading-tight text-2xl">{t("equipe.Text")}</h4><br/>
        <div className='card-container'>
          <Card
              iconS={""}
              key={"card1"}
              style={""}
              title={"Enrico Tonon"}
              instagramLink={""}
              fbLink={""}
              text={t("equipe.Chef")}
              image={"/img/physio/avatar.jpg"}
          />
          <Card
            style={""}
            iconS={""}
            key={"card2"}
            title={"Altro Medico"}
            instagramLink={""}
            fbLink={""}
            text={t("equipe.Physio")}
            image={"/img/physio/avatar.jpg"}
          />
          
        </div>
        <br/>
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