import LoginForm from '@/components/LoginForm'
import React from 'react'

type Props = {}

export default function SQLInjectionPage({ }: Props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm></LoginForm>
        </div>
    )
}