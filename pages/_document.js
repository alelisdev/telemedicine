import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        const {locale} = this.props.__NEXT_DATA__ 
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html lang="zxx" dir={dir} lang={locale}>
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" 
                        rel="stylesheet" 
                    />
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;