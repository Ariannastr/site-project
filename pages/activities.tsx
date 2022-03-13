import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import Card from '../components/card'
import Tabs from '../components/tabs'

export default function Activities() {
  return (
    <Layout home={false}>
      <Head>
        <title>Activities - NCS Agata</title>
      </Head>
      
      <div className="aspect-w-14 aspect-h-6">
        <Image layout='fill' src="/img/collage_mod.jpg" className="max-w-full h-auto shadow-lg" alt=""/>
        <div className=" w-full text-orange-500 text-xl text-center leading-4" style={{top:"40%",  height:"fit-content"}}>
          <h2 className="font-extrabold leading-tight text-5xl" >Cosa Facciamo</h2>
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
      ]} />
    </Layout>
  )
}