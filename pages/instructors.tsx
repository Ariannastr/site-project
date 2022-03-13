import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Card from '../components/card'

export default function Instructors() {
  return (
    <Layout home={false}>
      <Head>
        <title>Istruttori - NCS Agata</title>
      </Head>
      
      <div className="aspect-w-16 aspect-h-10">
        <Image layout='fill' src="/img/myposter.jpg" className="max-w-full h-auto shadow-lg" alt=""/>
        <div className="absolute w-full py-2.5 top-12 inset-x-0 text-orange-500 text-xl text-center leading-4" style={{top:"42%"}}>
          <h2 className="font-extrabold leading-tight text-5xl">Istruttori Tecnici</h2>
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