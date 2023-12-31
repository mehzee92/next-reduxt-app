"use client"
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import './../styles/globals.css'

import { store } from './features/store'
import { Provider } from 'react-redux'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 

export default function RootLayout({ children }) {
 return (
  <Provider store={store}>
    <html lang="en">
      <body>
        <Header />
          <main className='container'>
            {children}
          </main>
        <Footer />
        </body>
    </html>
    </Provider>
  )
}
