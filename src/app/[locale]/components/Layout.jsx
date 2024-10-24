"use client"
import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
// import dynamic from "next/dynamic";


// const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });
const Layout = ({children}) => {
  const [reloadChat, setReloadChat] = useState(false);
  // const handleRefresh = () => {
  //   window.location.reload();
  //   console.log("refresh")
  // }
  // const handleRefresh = (locale) => {
  //   // Set the state to trigger a re-render in the ChatWidget
  //   setReloadChat((prev) => !prev);
  //   console.log('Language changed to:', locale);
  // };
  return (
    < >
      <Header />
      {children}
      {/* <ChatWidget reload={reloadChat} /> */}
      <Footer />
     
    </>
  )
}

export default Layout
