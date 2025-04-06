"use client"
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./LoginForm.module.css"

type Props = {}

export default function LoginForm({ }: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [query, setQuery] = useState(`SELECT * FROM users WHERE user_name = '' AND user_password = ''`);

    useEffect(() => {
        setQuery(`SELECT * FROM users WHERE user_name = '${username}' AND user_password = '${password}'`);
    }, [username, password])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        let responseString = data.message;
        if (data.error) {
            responseString += " " + data.error;
        }

        setResponse(responseString);
    };

    return (
        <div className={styles["main-container"]}>
            <div className={styles["inputs-container"]}>
                <TextField label='Username' value={username} onChange={(e) => { setUsername(e.target.value) }}></TextField>
                <TextField label='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></TextField>
                <Button variant='contained' onClick={handleSubmit}>Login</Button>
            </div>
            <div>{query}</div>
            <div>{response && <p>{response}</p>}</div>
        </div>
    )
}