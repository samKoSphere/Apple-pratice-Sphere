"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const User = () => {
    const {user} =useUser()
  return (
    <> 歡迎回來 {user?.fullName} !<UserButton afterSignOutUrl="/" /></>
  )
}

export default User