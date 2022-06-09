import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mücahit Nezir</title>
        <meta name="description" content="Software Engineer from Turkey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
