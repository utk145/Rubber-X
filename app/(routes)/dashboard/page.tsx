"use client";
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useMutation, useQuery } from 'convex/react';
import React, { useEffect } from 'react';

const Dashboard = () => {

  // const { user } = useKindeBrowserClient();
  const { user }: any = useKindeBrowserClient(); // fix for the error  in above line: Type 'string | null | undefined' is not assignable to type 'string

  const getUser = useQuery(api.user.getUser, { email: user?.email });

  const createUser = useMutation(api.user.createUser);


  useEffect(() => {
    if (user) {
      // console.log(getUser);
      if (getUser === undefined) {
        createUser({
          name: user?.given_name,
          email: user?.email,
          image: user?.picture
        }).then((resp) => {
          console.log(resp);
        }).catch((err) => { alert(err) })
      }
    };
  }, [user])



  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  )
}

export default Dashboard