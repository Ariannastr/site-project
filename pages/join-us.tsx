import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'


export default function JoinUs() {
  return (
    <Layout home={false}>
      <Head>
        <title>Unisciti a Noi - NCS Agata</title>
      </Head>
      
      <div className="aspect-w-10 aspect-h-6">
        <Image layout='fill' src="/img/gruppo_giallo.jpeg" className="max-w-full h-auto shadow-lg" alt=""/>
        <div className="absolute w-full py-2.5  inset-x-0 text-orange-500 text-xl text-center leading-4">
          <h2 className="font-extrabold leading-tight text-5xl mobile-header">Unisciti a Noi</h2>
        </div>

      </div>
      <br/>
      <div className="text-center px-16">
        <h4 className="font-normal leading-tight text-2xl">Vuoi diventare un volontario di Protezione Civile, una unità cinofila o partecipare all’addestramento dei nostri cani?</h4><br/>
        <Link href="/contacts">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded">
                CONTATTACI
            </button>
        </Link>
        <div className="w-full px-4 pt-5">
        <h1 className="font-semibold leading-tight text-5xl">Faq: Domande frequenti</h1>
      <div className="w-full max-w-md p-2 pt-8 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>Come si diventa volontari di Protezione Civile?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Per diventare volontario operativo di protezione civile ci si deve iscrivere in una associazione e seguire la formazione erogata da Regione Liguria.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>Come faccio a diventare unità cinofila da soccorso?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Per diventare unità cinofila bisogna seguire un addestramento con il cane e la formazione obbligatoria per i volontari di Protezione Civile.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>I cani sono di proprietà del conduttore?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Si, i cani sono di proprietà dei volontari che con passione dedicano il loro tempo libero al loro addestramento.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>Posso partecipare agli addestramenti dei cani da ricerca?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Si, chiamaci e potrai assistere ad un addestramento delle nostre unità cinofile da soccorso.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>I volontari sono retribuiti?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No, l’attività dei volontari (cinofili e non) non prevede nessun tipo di retribuzione, é gratuita e spontanea.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div><br/>
    </div>
      </div>
      
      
    </Layout>
  )
}