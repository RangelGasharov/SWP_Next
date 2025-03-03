import { Car } from '@/services/Car'
import React from 'react'
import styles from "./Card.module.css"
import { Engine } from '@/services/Engine'
import EngineCard from './EngineCard'

type Props = {
    car: Car
    engine: Engine
}

export default function Card({ car, engine }: Props) {
    return (
        <div className={styles["main-container"]}>
            <h2>{car.name}</h2>
            <div className={styles["info-container"]}>
                <div>Color: </div>
                <div>{car.color}</div>
                <div>Type: </div>
                <div>{car.type}</div>
            </div>
            <EngineCard engine={engine} />
        </div>
    )
}