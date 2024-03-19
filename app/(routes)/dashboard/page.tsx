"use client";
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useConvex, useMutation, useQuery } from 'convex/react';
import React, { useEffect } from 'react';
import Header from './_components/Header';
import FilesList from './_components/FilesList';

const Dashboard = () => {

  // const { user } = useKindeBrowserClient();
  const { user }: any = useKindeBrowserClient(); // fix for the error  in above line: Type 'string | null | undefined' is not assignable to type 'string

  // const getUser = useQuery(api.user.getUser, { email: user?.email }); // It works perfectly fine but commented to have an alternative convex query

  const convex = useConvex();

  const createUser = useMutation(api.user.createUser);


  // https://docs.convex.dev/client/react#one-off-queries
  const checkUser = async () => {
    const getUser = await convex.query(api.user.getUser, { email: user?.email });
    if (!getUser?.length) {
      createUser({
        name: user?.given_name,
        email: user?.email,
        image: user?.picture
      }).then((resp) => {
        // console.log(resp);
      }).catch((err) => { alert(err) })
    }
  }

  useEffect(() => {
    if (user) {
      // console.log(getUser);
      checkUser();
    };
  }, [user])



  return (
    <div className='p-8'>
      <Header />
      <FilesList/>
    </div>
  )
}

export default Dashboard