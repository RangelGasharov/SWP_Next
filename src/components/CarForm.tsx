"use client";
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function CarForm() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [engineFk, setEngineFk] = useState<number | ''>('');
    const [carTypeFk, setCarTypeFk] = useState<number | ''>('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !color || !engineFk || !carTypeFk) {
            setError('All fields are required.');
            return;
        }

        const carData = {
            name,
            color,
            engine_fk: engineFk,
            car_type_fk: carTypeFk,
        };

        try {
            const response = await fetch('/api/car', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add car.');
            }

            const result = await response.json();
            setMessage(`Car added successfully with ID: ${result.insertId}`);

            setName('');
            setColor('');
            setEngineFk('');
            setCarTypeFk('');
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Add a New Car</Typography>
            <TextField
                label="Car Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Color"
                variant="outlined"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            />
            <TextField
                label="Engine Foreign Key"
                type="number"
                variant="outlined"
                value={engineFk}
                onChange={(e) => setEngineFk(Number(e.target.value))}
                required
            />
            <TextField
                label="Car Type Foreign Key"
                type="number"
                variant="outlined"
                value={carTypeFk}
                onChange={(e) => setCarTypeFk(Number(e.target.value))}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Confirm
            </Button>
            {message && <Typography color="green">{message}</Typography>}
            {error && <Typography color="red">{error}</Typography>}
        </Box>
    );
};