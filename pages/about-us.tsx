import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <Layout home={false}>
      <Head>
        <title>About Us - NCS Agata</title>
      </Head>
      
      <div className="aspect-w-10 aspect-h-5">
        <Image layout='fill' src="/img/noi.jpeg" className="max-w-full h-auto shadow-lg" alt=""/>
        <div className="absolute w-full py-2.5 top-12 inset-x-0 text-orange-500 text-xl text-center leading-4">
          <h2 className="font-extrabold leading-tight text-5xl">About Us</h2>
          <p className='pt-2'>Breve storia</p>
        </div>

      </div>
      <div className="text-center px-16">
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
        Nel 2015 alcune unità cinofile, rimaste orfane del loro istruttore, hanno deciso che tutta la passione, l’amore per il lavoro con i cani e l’esperienza acquisita negli anni non dovevano essere sprecate cosi hanno deciso di fondare il Nucleo Cinofilo da Soccorso Agata.
        </p> 
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-900">
        Agata non è un nome casuale ma quello di una femmina di Pastore Tedesco operativa in superficie venuta a mancare nel periodo in cui è nato il nucleo e per questo è stato scelto: un po’ omaggiare la sua memoria, un po’ come portafortuna viste le soddisfazioni che questo cane, nonostante fosse stato addestrato inizialmente come cane da difesa personale, ci ha dato nel mondo del soccorso.
        </p>
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-900">
        Abbiamo iniziato con 4 unità cinofile, senza un campo e con pochissima esperienza nel gestire un programma di addestramento. Nonostante due di noi avessero già conseguito titoli di istruttore e di figurante per cani da soccorso, passare da semplice unità cinofila a istruttori non è stato facile e c’è voluta molta forza di volontà e forse un briciolo di follia nel credere che avremmo potuto fare un salto di qualità.
        </p>
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-900">
        Abbiamo cercato un’area che potesse farci da base e abbiamo individuato a Righi, sotto al Forte Castellaccio, un terreno in balia di se stesso e pieno di rovi ma pianeggiante, e per chi conosce la Liguria non era poca cosa; mille richieste, mille incartamenti, ore di lavoro e il campo giorno dopo giorno è apparso davanti ai nostri occhi, oggi recintato, attrezzato con parcheggio, corrente elettrica, acqua, un modulo container che funge da ufficio, gabbie per i cani e attrezzatura per addestramento.
        </p>
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-900">
        Da 4 unità cinofile oggi siamo 30 soci, di cui 19 volontari iscritti in protezione civile, due unità cinofile operative in superficie una in macerie brevettate Enci, due in operative mantrailing con brevetto I.W.D.A e 5 unità cinofile in formazione.
        </p>
        <p className="text-xl font-normal leading-relaxed mt-6 mb-4 text-gray-900">
        Abbiamo creduto in una cinofilia sana che mette davanti a tutto il piacere nel lavorare con il proprio cane, di passare il tempo libero con il nostro amico crescendo insieme e rafforzando un rapporto millenario tra due esseri che si sono incontrati per caso quasi 40 mila anni fa’, il tutto però fatto con la professionalità e la consapevolezza che il ruolo delle unità cinofile ha nel salvare vite umane, questo resterà sempre il sottile guinzaglio che ci legherà agli insegnamenti che il nostro primo istruttore ci ha dato facendoci ammalare di cinofilia, grazie Ernesto.
        </p>
      </div>
      
      
    </Layout>
  )
}