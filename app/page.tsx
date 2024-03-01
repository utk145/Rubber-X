"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Banner from "./_components/Banner";
import Header from "./_components/Header";
import { useEffect } from "react";

export default function Home() {

  // https://kinde.com/docs/developer-tools/nextjs-sdk/#client-components---usekindebrowserclient 
  const {user} = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);    
  }, [user])
  

  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  );
}
