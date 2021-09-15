import { useAuth } from "../assest/auth"
import CookieStandAdmin from '../Component/CookieStandAdmin'
import Header from "../Component/Header"
import Head from 'next/head'
import Login from "../Component/Login"


export default function Home() {
  const { user, login, logout } = useAuth();
 

  return (
    <div className="bg-green-50 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />

      {user ? (
        <>
          <CookieStandAdmin />
        </>
      ) : (
        <>
          <Login />
        </>
      )}

    </div>
  )
}
