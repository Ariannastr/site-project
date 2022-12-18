import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Card from '../components/card'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from '@material-tailwind/react';

export default function Instructors() {
  const { t } = useTranslation("");
  return (
    <Layout home={false}>
      <Head>
        <title>Istruttori - NCS Agata</title>
      </Head>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-[url('/img/myposter.jpg')] bg-contain bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
              <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                  <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 font-black"
                    >
                      Medici.
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
      
      <br/>
      <div className="text-center px-16">
        <h1 className="font-semibold leading-tight text-5xl">Istruttori</h1>
        <h4 className="font-normal leading-tight text-2xl">Di seguito gli istruttori abilitati del gruppo</h4><br/>
        <div className='card-container'>
          <Card
              iconS={""}
              key={"card1"}
              title={"Mercedes Farina"}
              instagramLink={"https://instagram.com/mercedes_k9_nora"}
              fbLink={"https://www.facebook.com/mercedesfarina76"}
              text="Addestratore ENCI sezione 1, Istruttore e figurante Fedics per cani da soccorso in superficie e macerie, conduttore unitá cinofile da soccorso."
              image={"/img/mercedes2.jpeg"}
          />
          <Card
            iconS={""}
            key={"card2"}
            title={"Valentina Guglielmetti"}
            instagramLink={"https://instagram.com/guglielmetti.valentina"}
            fbLink={"https://www.facebook.com/guglielmettivalentina"}
            text="Addestratore ENCI sezione 1, Istruttore e figurante Fedics per cani da soccorso in superficie e macerie, conduttore unitá cinofile da soccorso."
            image={"/img/valentina.jpeg"}
          />
          <Card
            iconS={""}
            key={"card3"}
            title={"Roberta Bottaro"}
            instagramLink={"https://instagram.com/roberta_bottaro"}
            fbLink={"https://www.facebook.com/robertabottaro.k9"}
            text="Addestratore ENCI sezioni 1 e 3, Istruttore e conduttore unitá cinofile mantrailing e detection. Psicologa, criminologa e pedagogista, ha collaborato con il Laboratorio di Cognizione Animale dell’Università di Trieste dove ha partecipato a diversi studi riguardanti l’olfatto del cane."
            image={"/img/roberta.jpeg"}
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