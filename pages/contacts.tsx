import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import Card from '../components/card'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkedAlt, FaPhoneSquareAlt } from 'react-icons/fa'

export default function Contacts() {
  let [isOpen, setIsOpen] = useState(false)
  let completeRef = useRef(null)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    
    <Layout home={false}>
      <Head>
        <title>Contatti - NCS Agata</title>
      </Head>
      <div className="aspect-w-10 aspect-h-4">
        <Image layout='fill' src="/img/contact-bg.jpg" className="max-w-full h-auto shadow-lg" alt=""/>
        <div className="absolute w-full py-2.5 top-12 inset-x-0 text-orange-500 text-xl text-center leading-4">
          <h2 className="font-extrabold leading-tight text-5xl">Contatti</h2>
          <p className='pt-2'>Per maggiori informazioni contattaci</p>
        </div>

      </div>
      <br/>
      <div className="text-center px-16">
        <div className='card-container'>
          <Card
              iconS={<FaMapMarkedAlt size={50}/>}
              key={"card1"}
              title={"Indirizzo"}
              instagramLink={""}
              fbLink={""}
              text={"Via Del Peralto 2 - Righi, 16136 GENOVA"}
              image={""}
            />
            <Card
              iconS={<AiOutlineMail size={50}/>}
              key={"card2"}
              title={"Email"}
              instagramLink={""}
              fbLink={""}
              text={<a style={{color:"black"}} href="mailto:nucleocinofiloagata@gmail.com">nucleocinofiloagata@gmail.com</a>}              
              image={""}
            />
            <Card
              iconS={<FaPhoneSquareAlt size={50}/> }
              key={"card3"}
              title={"Telefono"}
              instagramLink={""}
              fbLink={""}
              text={"+39 348 1521638"}
              image={""}
            />
            </div>
            <br/><hr/><br/>
            <div className='text-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11396.47082285048!2d8.9320357!3d44.4307477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xddfaadd6cbbbabe4!2sNucleo%20Cinofilo%20da%20Soccorso%20Agata!5e0!3m2!1sit!2sit!4v1647032326575!5m2!1sit!2sit" width="600" height="450" style={{border:"0", display:"inline", width:"100%"}} allowFullScreen={true} loading="lazy"></iframe>
            </div>
            <br/><hr/><br/>
            <h1 className="font-bold leading-tight text-5xl">5x1000</h1>
            <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
            Per chi volesse sostenere l’associazione è possibile devolvere il 5 x 1000 indicando il nostro codice fiscale 95179930102 nella dichiarazione dei redditi oppure facendo offerta libera tramite bonifico bancario IBAN: IT19 E030 6909 6061 0000 0146 660.
            </p>
            <br/><hr/><br/>
            <h1 className="font-bold leading-tight text-5xl">Lettura Consigliata</h1><br/>
            <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <Image src={'/img/libro.jpg'} width="250" height="400"></Image>
        </button>

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
        initialFocus={completeRef}
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center pt-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h2"
                  className="text-2xl font-medium leading-6 text-gray-900"
                  
                >
                  Trama
                </Dialog.Title><br/><hr/>
                <div className="mt-2" ref={completeRef} > 
                  <p className="text-sm text-gray-500">
                  Nella vita di tutti noi arriva sempre un giorno in cui qualcuno ci dirà “fatti coraggio” e quelle poche parole, anche se minimamente, ci esorteranno a reagire. Però, passato il momento, ci si ritroverà a combattere da soli, oppure nella peggiore delle ipotesi a cadere nella rassegnazione e nella perenne sofferenza interiore.
                  </p><br/>
                  <p className="text-sm text-gray-500">
                  Anche per il tassista Aldo, coprotagonista del romanzo, iniziò con tanti “fatti coraggio”.
                  </p><br/>
                  <p className="text-sm text-gray-500">
                  Per il cane Duilio, altro principale attore di questo testo, addirittura nessuno aveva speso neanche una frase di conforto. Ci poteva essere solo una risposta per risollevarsi, una risposta nata dalla casualità, dal destino e sicuramente dall’amore.
                  </p><br/>
                  <p className="text-sm text-gray-500">
                  Questo è il senso di Un elisir chiamato cane.
                  </p>
                  <br/><hr/><br/>
                  <h2 className="font-bold leading-tight text-2xl">Carlo Ronchetti</h2><br/>
                  <p className="text-sm text-gray-500">
                  Si definisce autore non professionista ma professionale. Collaboratore in un recente passato nella stesura dei testi per comici di rilievo e ancor prima attore e autore agli albori della Genova cabarettistica degli anni ‘70.
                  </p>
                  <p className="text-sm text-gray-500">
                  Nel 2014 il suo desiderio di riempire fogli si concretizza con il libro “Il recinto delle prugne”, i cui proventi vanno totalmente nelle casse di un’associazione che opera a favore di cani sfortunati.
                  </p>
                  <p className="text-sm text-gray-500">
                  l lupo perde il pelo ma non il vizio, e dopo svariati anni vedere su internet un cagnone sconosciuto in cerca di adozione trasmette nuova ispirazione all’autore. Nasce così “Un elisir chiamato cane”. Con questa nuova opera sicuramente si rafforzerà il titolo di “lo scrittore dei cani” simpaticamente attribuitogli da un suo lettore.
                  </p>
                  <br/><hr/><br/>
                  <p className="text-sm text-gray-500">
                    Per acquistare il libro: <a style={{color:"black"}} target={"_blank"} href='https://www.thekill.it/tutti-gli-accessori-per-cani/2772-libro-un-elisir-chiamato-cane-carlo-ronchetti.html'>The Kill</a>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-orange-900 bg-orange-100 border border-transparent rounded-md hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                    onClick={closeModal}
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      </div><br/>
      
      
    </Layout>
  )
}