import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Podcast Presentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Podcast" />
        <p className="This is my Passion Project Podcast About Fishing">
        </p>
      </main>

      <Footer />
    </div>
  )
}
