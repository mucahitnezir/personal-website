import Head from 'next/head'

import Banner from '../components/banner'
import Social from '../components/social'

export default function Home() {
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
