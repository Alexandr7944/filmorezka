import Head from 'next/head'
import React from 'react'
import {Header} from "@/components/Header";

type MyContainerProps = {
  children: React.ReactNode,
  keywords?: HTMLMetaElement
}

const MyContainer: React.FC<MyContainerProps> = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta name='keywords' content={'кино, сериалы, ' + keywords }/>
        <title>Фильморезка</title>
      </Head>
      <Header></Header>
      {children}
    </>
  )
}

export default MyContainer