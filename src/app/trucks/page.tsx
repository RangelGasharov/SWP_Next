import CardsContainer from '@/components/CardsContainer';
import { Car } from '@/services/Car';
import { CarType } from '@/services/CarType';
import { Engine } from '@/services/Engine';
import React from 'react';
import styles from "./trucks-page.module.css";

type Props = {}

const getTrucks = async () => {
    const res = await fetch('http://localhost:3000/api/truck');
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

export default async function TrucksPage({ }: Props) {
    const trucks: Car[] = await getTrucks();
    const engines: Engine[] = await getEngines();
    const carTypes: CarType[] = await getCarTypes();
    return (
        <div className={styles["main-container"]}>
            <h2>Trucks</h2>
            <CardsContainer cars={trucks} engines={engines} carTypes={carTypes} />
        </div>
    )
}