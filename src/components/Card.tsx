import { Car } from '@/services/Car'
import React from 'react'
import styles from "./Card.module.css"

type Props = {
    car: Car
}

export default function Card({ car }: Props) {
    return (
        <div className={styles["main-container"]}>
            <h2>{car.name}</h2>
            <div>{car.color}</div>
            <div>{car.type}</div>
        </div>
    )
}