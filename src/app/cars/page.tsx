import CardsContainer from '@/components/CardsContainer'
import { Car } from '@/services/Car'
import React from 'react'

type Props = {}

const cars: Car[] = [
    {
        "name": "Audi A4",
        "type": "Sedan",
        "color": "Schwarz",
        "motor": {
            "serialNumber": 12345678,
            "horsePower": 190
        }
    },
    {
        "name": "BMW X5",
        "type": "SUV",
        "color": "Weiß",
        "motor": {
            "serialNumber": 87654321,
            "horsePower": 286
        }
    },
    {
        "name": "Mercedes C-Klasse",
        "type": "Sedan",
        "color": "Silber",
        "motor": {
            "serialNumber": 11223344,
            "horsePower": 204
        }
    },
    {
        "name": "Volkswagen Golf",
        "type": "Hatchback",
        "color": "Blau",
        "motor": {
            "serialNumber": 44332211,
            "horsePower": 150
        }
    },
    {
        "name": "Ford Mustang",
        "type": "Coupe",
        "color": "Rot",
        "motor": {
            "serialNumber": 99887766,
            "horsePower": 450
        }
    },
    {
        "name": "Tesla Model 3",
        "type": "Limousine",
        "color": "Grau",
        "motor": {
            "serialNumber": 56781234,
            "horsePower": 283
        }
    },
    {
        "name": "Porsche 911",
        "type": "Sportwagen",
        "color": "Gelb",
        "motor": {
            "serialNumber": 13572468,
            "horsePower": 385
        }
    },
    {
        "name": "Toyota Land Cruiser",
        "type": "SUV",
        "color": "Grün",
        "motor": {
            "serialNumber": 24681357,
            "horsePower": 272
        }
    },
    {
        "name": "Volvo XC60",
        "type": "SUV",
        "color": "Braun",
        "motor": {
            "serialNumber": 33445566,
            "horsePower": 250
        }
    },
    {
        "name": "Honda Civic",
        "type": "Kompaktwagen",
        "color": "Orange",
        "motor": {
            "serialNumber": 77889900,
            "horsePower": 182
        }
    }
]

export default function CarsPage({ }: Props) {
    return (
        <div>
            <h2>Cars</h2>
            <CardsContainer cars={cars} />
        </div>
    )
}