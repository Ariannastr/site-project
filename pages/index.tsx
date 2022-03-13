import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Carousel from '../components/carousel';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='border-b-[10px] border-gray-900 '>
        <Carousel featuredProducts={[
  "/img/foto_home/campo.jpeg",
  "/img/nora_auto.jpeg",
  "/img/cristina_ingrid.jpeg",
  "/img/pc.jpeg",
]} label={[
  {title:"Il Nucleo Cinofilo da Soccorso Agata", text:"forma unità cinofile per la ricerca di persone disperse in superficie o travolte da macerie."},
  {title:"NCS Agata", text:"si avvale, per l’addestramento delle sue unità cinofile da soccorso, di tecnici istruttori diplomati Enci, Fed.I.C.S. e IWDA. N.C.S."},
  {title:"Agata", text:"è una organizzazione di volontariato senza scopo di lucro."},
  {title:"NCS Agata", text:"è iscritta nel registro del terzo settore e nell’elenco di Protezione Civile Regione Liguria al numero Vol.P.C. n. P-GE-0192, fa parte di Fed.I.C.S. Federazione Italiana Cani da Soccorso."}
]}/>
      </div>
      <div className="content_bg item-center text-center">
        <h2 className="font-bold pt-4 leading-tight text-5xl">Ultime Notizie:</h2><br/>
        <div style={{display:"inline-block"}}>
        <iframe className='iframe_mobile' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fncsagata&tabs=timeline%2Cevents&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="800" style={{border:"none",overflow:"hidden", display:"inline"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </Layout>
  )
}