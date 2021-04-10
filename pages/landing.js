import Head from 'next/head'
import Link from 'next/link'

import Page from '../layouts/page'

export default function Home() {
    return (
        <Page>
            <Head>
                <title>NEON Marketing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {
                    /*
                <video autoPlay={true}>
                    <source src="/img/video.mp4" type="video/mp4" />
                </video>
                    */
                }
            </div>
        </Page>
    )
}
