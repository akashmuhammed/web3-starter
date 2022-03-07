import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useWallet } from 'use-wallet'
import { Toaster } from 'react-hot-toast'

import { ENSSection, TxStatesSection, GMModeSection, WalletConnectSection } from '../components/web3FeatureSections'
import AdminPanel from '../components/adminPanel'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  const wallet = useWallet()
  const { status, networkName } = wallet

  return (
    <div className="max-w-screen-xl m-auto pb-4 md:pb-12">
      <Head>
        <title>Web 3 Starter Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <Navbar />

      <h1 className="m-auto text-center md:mt-8 text-4xl md:text-6xl font-extrabold">
        Welcome to{' '}
        <a href="https://github.com/iMuzz/web3-starter" target="_blank" rel="noreferrer" className="rotating-hue">
          Web 3 Starter
        </a>
      </h1>

      <div className="flex flex-col space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl">
        <WalletConnectSection />
        <ENSSection />
        <TxStatesSection />
        <GMModeSection />
      </div>

      {status === 'connected' && networkName !== 'main' && (
        <div className="flex mt-4 space-x-3">
          <div className="flex justify-center mt-8 border-t border-solid border-gray-200 max-w-4xl m-auto">
            <AdminPanel />
          </div>
        </div>
      )}

      <a
        href="https://github.com/iMuzz/web3-starter"
        target="_blank"
        rel="noreferrer"
        className="fixed left-5 bottom-4 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/github.png" alt="Github Icon" width="35" height="35" />
      </a>
      <div className="fixed right-5 bottom-4 flex flex-col">
        <div className="text-gray-500 dark:text-white text-xs mb-2 text-center">Maintained By</div>
        <div>
          <a className="mr-2" href="https://twitter.com/faraaz" target="_blank" rel="noreferrer">
            <Image className="rounded-full" src="/peng.jpeg" alt="Faraaz N." width="35" height="35" />
          </a>
          <a href="https://twitter.com/jonathanmcai" rel="noreferrer" target="_blank">
            <Image className="rounded-full" src="/jon.jpeg" alt="Jonny Cai" width="35" height="35" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .rotating-hue {
          background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: hue 30s infinite linear;
        }

        @-webkit-keyframes hue {
          from {
            -webkit-filter: hue-rotate(0deg);
          }
          to {
            -webkit-filter: hue-rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
