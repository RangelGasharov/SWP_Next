import Card from '@/components/Card'
import { Car } from '@/services/Car'
import Link from 'next/link'
import React from 'react'

type Props = {}

const car: Car = {
    name: "Test car",
    type: "xyz",
    color: "#ffffff",
    motor: {
        serialNumber: 12345,
        horsePower: 100
    }
}

export default function CarsPage({ }: Props) {
    return (
        <div>
            <Card car={car} />
            <div>Cars</div>
            <Link href="/">Home</Link>
        </div>
    )
}