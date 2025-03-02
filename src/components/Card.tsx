import { Car } from '@/services/Car'
import React from 'react'
import styles from "./Card.module.css"
import { Engine } from '@/services/Engine'

type Props = {
    car: Car
    engine: Engine
}

export default function Card({ car, engine }: Props) {
    return (
        <div className={styles["main-container"]}>
            <h2>{car.name}</h2>
            <div>{car.color}</div>
            <div>{car.type}</div>
            <div>{engine?.horse_power}</div>
        </div>
    )
}