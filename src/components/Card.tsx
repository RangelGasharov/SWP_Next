"use client"
import { Car } from '@/services/Car'
import React, { useState } from 'react'
import styles from "./Card.module.css"
import { Engine } from '@/services/Engine'
import EngineCard from './EngineCard'
import { CarType } from '@/services/CarType'

type Props = {
    car: Car
    engine: Engine,
    carType: CarType
}

export default function Card({ car, engine, carType }: Props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div onClick={() => { setIsActive(!isActive) }} className={styles["main-container"]} style={{ backgroundColor: `${isActive ? "#8be26f" : "#ff5733"}` }}>
            <h2>{car.name}</h2>
            <div className={styles["info-container"]}>
                <div>Color: </div>
                <div>{car.color}</div>
                <div>Type: </div>
                <div>{carType.type_name}</div>
            </div>
            <EngineCard engine={engine} />
        </div>
    )
}