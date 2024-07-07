import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

import AuthForm from './AuthForm'
import Browse from './Browse'

const Body = () => {
  const dispatch = useDispatch()

  const route = createBrowserRouter([
    {
      path: '/',
      element: <AuthForm />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
      } else {
        dispatch(removeUser())
      }
    })
  }, [])

  return <RouterProvider router={route} />
}

export default Body
