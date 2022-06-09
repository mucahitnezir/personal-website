import Head from 'next/head'

import Banner from '../components/banner'
import Social from '../components/social'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Banner />
      <Social />
    </>
  )
}

export default Home
