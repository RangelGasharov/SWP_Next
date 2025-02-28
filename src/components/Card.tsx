import { Car } from '@/services/Car'
import React from 'react'

type Props = {
    car: Car
}

export default function Card({ car }: Props) {
    return (
        <div>
            <h2>{car.name}</h2>
        </div>
    )
}