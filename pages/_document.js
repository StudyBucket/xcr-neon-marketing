import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="" lang="de-DE">
                <Head>
                    {/* embed Ubuntu form google fonts */}
                    <link rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin />

                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
                        media="print" onload="this.media='all'" />

                    <noscript>
                        <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
