import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Input, Button, Radio, Typography } from '@material-tailwind/react'

import { useAuth } from '../providers/AuthProvider'

const Register = () => {
  const { register, login } = useAuth()
  const navigate = useNavigate()
  const [emailInput, setEmailInput] = useState<string>('')
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [firstnameInput, setFirstnameInput] = useState<string>('')
  const [lastnameInput, setLastnameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [conpasswordInput, setConPasswordInput] = useState<string>('')
  const [genderInput, setGenderInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (passwordInput !== conpasswordInput) {
      return alert('Please Check your password!!!')
    }

    try {
      await register(
        emailInput,
        usernameInput,
        firstnameInput,
        lastnameInput,
        passwordInput,
        conpasswordInput,
        genderInput,
      )
      await login(usernameInput, passwordInput)

      toast.success('Registered and Login!')
      navigate('/')
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md m-auto my-14 py-5 px-7">
      <div>
        <h1 className="text-4xl font-bold text-teal-400 text-center">REGISTRATION</h1>
        <p className="text-center">Complete your profile and start your learning!</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          type="text"
          label="Firstname"
          onChange={(e) => setFirstnameInput(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          type="text"
          label="Lastname"
          onChange={(e) => setLastnameInput(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          type="text"
          label="Username"
          onChange={(e) => setUsernameInput(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          label="Email"
          type="email"
          onChange={(e) => setEmailInput(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          type="password"
          color="teal"
          label="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          type="password"
          color="teal"
          label="Confirm Password"
          onChange={(e) => setConPasswordInput(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-row items-start gap-4 ">
        <p className="mt-2">Gender:</p>
        <div className="flex flex-row flex-wrap">
          <Radio
            color="teal"
            id="MALE"
            name="gender"
            value="MALE"
            label={<Typography className="text-neutral-400">Male</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
            required
          ></Radio>
          <Radio
            color="teal"
            id="FEMALE"
            name="gender"
            value="FEMALE"
            label={<Typography className="text-neutral-400">Female</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
            required
          ></Radio>
          <Radio
            color="teal"
            id="LGBTQ"
            name="gender"
            value="LGBTQ"
            label={<Typography className="text-neutral-400">LGBTQ</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
            required
          ></Radio>
          <Radio
            color="teal"
            id="PREFERNOTTOSAY"
            name="gender"
            value="PREFERNOTTOSAY"
            label={<Typography className="text-neutral-400">Prefer not to say</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
            required
          ></Radio>
        </div>
      </div>

      <div className="text-violet-600">
        <Button color="teal" className="w-full" type="submit" value="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default Register
