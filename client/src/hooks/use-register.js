import { useState } from 'react'
import toast from 'react-hot-toast'

import { useAuthContext } from '../context/auth-context'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()
  // console.log("CHECK");

  const signup = async ({ firstName, lastName, email, pass, confPass }) => {
    const success = handleInputErrors({
      firstName,
      lastName,
      email,
      pass,
      confPass
    })
    if (!success) {
      // console.log("not success");
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          pass,
          confPass,
        })
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      // console.log("data", data);

      localStorage.setItem('app-user', JSON.stringify(data))
      setAuthUser(data)
      toast.success('Signed up successfully')
      // console.log("setAuthUser Done");
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, signup }
}
export default useSignup

function handleInputErrors({ firstName, lastName, email, pass, confPass }) {
  if (!firstName || !lastName || !email || !pass || !confPass) {
    toast.error('Please fill in all fields')
    // console.log(gender);
    return false
  }

  if (pass !== confPass) {
    toast.error('Passwords do not match')
    return false
  }

  if (pass.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }

  return true
}
