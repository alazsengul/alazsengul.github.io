import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body className='bg-gray-200 p-4'>
                <div className='max-w-screen-sm mx-auto bg-white p-2 rounded-md shadow-sm text-sm leading-4 text-gray-700'>
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}