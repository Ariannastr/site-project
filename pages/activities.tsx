import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Tabs from '../components/tabs'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from '@material-tailwind/react';

export default function Activities() {
  const { t } = useTranslation("");
  return (
    <Layout home={false}>
      <Head>
        <title>Activities - NCS Agata</title>
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
                      Activities.
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
      <Tabs title={["Protezione Civile", "Unità Cinofile", "Gruppo Motociclistico"]}
        text={[
          {
            tab:[
              {
                text:"I volontari di Protezione Civile operativi e formati da Regione Liguria sono chiamati ad intervenire in caso di calamità, sostengo alla popolazione, informazione e prevenzione nelle scuole del territorio provinciale o nazionale in interventi di colonna mobile.",
                images:["/img/montaggio_tende.jpeg", "/img/mont_tende.jpeg"]
              }
            ]
          },
          {
            tab:[
              {
                text:"Le nostre unità cinofile da superficie, macerie e mantrailing intervengono in attività di ricerca persona scomparsa in ambito urbano/extraurbano o travolte da macerie e crolli dopo un lungo periodo di formazione che li vede impegnati costantemente in esercitazioni settimanali.",
                images:["/img/conduttori/cane2.jpeg", "/img/conduttori/cane6.jpeg", "/img/conduttori/cane4.jpeg", "/img/conduttori/conduttore1.jpeg", "/img/conduttori/premio.jpeg"]
              },
              {
                text:"Si organizzano lezioni singole o collettive di educazione di base per privati che si vogliano avvicinare al mondo del soccorso cinofilo, incontri di valutazione dei binomi e di informazione cinofila per gruppi, centri estivi e scuole che ne facciano richiesta.",
                images:["/img/bimbi.jpeg", "/img/foto_home/campo4.jpeg"]
              }
            ]
          },
          {
            tab:[
              {
                text:"Il neo costituito gruppo motociclistico fuoristrada potrà essere chiamato ad intervenire in caso di smottamenti, crolli e per raggiungere località disagiate e isolate ad esempio a seguito di frana. I piloti dovranno essere formati come volontari di Protezione Civile e seguire la formazione erogata dalla F.M.I. a livello nazionale.",
                images:["/img/casco.jpg"]
              }
            ]
          }
        ]}
      />
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