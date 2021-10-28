import type { NextPage } from 'next'
import Head from 'next/head'
import { useWallet } from 'use-wallet'

import Navbar from '../components/navbar'
import AdminPanel from '../components/adminPanel'

const Home: NextPage = () => {
  const wallet = useWallet()
  const { status } = wallet

  return (
    <div className="max-w-screen-xl m-auto">
      <Head>
        <title>Web 3 Starter Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1 className="m-auto text-center mt-8 text-9xl font-extrabold"> Web 3 Starter</h1>

      <div className="flex justify-center mt-8">
        {status === 'connected' && (
          <div className="flex space-x-3">
            <AdminPanel />
            <AdminPanel />
          </div>
        )}
      </div>
      <style jsx>{`
        h1 {
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
