import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Input, Button } from '@material-tailwind/react'
import React from 'react'

const Login = () => {
  const { login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      toast.success('Logged In!')
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xs rounded-xl mx-auto my-14 py-5 px-7">
      <div className="flex flex-col gap-2">
        <Input
          className="p-3 rounded text-neutral-400"
          type="text"
          color="teal"
          label="Username"
          onChange={(e) => setUsernameInput(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="p-3 rounded text-neutral-400"
          type="password"
          color="teal"
          label="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
      </div>
      <div className=" text-blue-600 underline"></div>
      <Button type="submit" value="submit" color="teal">
        Login
      </Button>

      <div>
        <p>
          Not a member yet?
          <Link to="/register">
            <span className="font-bold text-blue-600 underline "> Sign up for free</span>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default Login
