import { useState } from 'react'
import toast from 'react-hot-toast'

import { useAuthContext } from '../context/auth-context'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async ({ email, pass }) => {
    const success = handleInputErrors(email, pass)
    if (!success) return
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pass })
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem('app-user', JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }
}
export default useLogin

function handleInputErrors(email, pass) {
  if (!email || !pass) {
    toast.error('Please fill in all fields')
    console.log('email: ' + email + ' pass: ' + pass)
    return false
  }

  return true
}
