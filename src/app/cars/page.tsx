import CardsContainer from '@/components/CardsContainer'
import { Car } from '@/services/Car';
import { Engine } from '@/services/Engine';
import React from 'react'
import styles from "./cars-page.module.css"
import { CarType } from '@/services/CarType';
import CarForm from '@/components/CarForm';

type Props = {}

const getCars = async () => {
    const res = await fetch('http://localhost:3000/api/car');
    if (!res.ok) throw new Error('Fehler beim Laden der Daten');
    return res.json();
}

const getEngines = async () => {
    const res = await fetch('http://localhost:3000/api/engine');
    if (!res.ok) throw new Error('Fehler beim Laden der Daten');
    return res.json();
}

const getCarTypes = async () => {
    const res = await fetch('http://localhost:3000/api/car_type');
    if (!res.ok) throw new Error('Fehler beim Laden der Daten');
    return res.json();
}

export default async function CarsPage({ }: Props) {
    const cars: Car[] = await getCars();
    const engines: Engine[] = await getEngines();
    const carTypes: CarType[] = await getCarTypes();

    return (
        <div className={styles["main-container"]}>
            <h2>Cars</h2>
            <CarForm />
            <CardsContainer cars={cars} engines={engines} carTypes={carTypes} />
        </div>
    )
}