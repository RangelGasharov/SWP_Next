import { Car } from '@/services/Car'
import React from 'react'
import Card from './Card'
import styles from "./CardsContainer.module.css"

type Props = {
    cars: Car[]
}

export default function CardsContainer({ cars }: Props) {
    return (
        <div className={styles["main-container"]}>
            {cars?.map((car) => {
                return (<Card key={car.name + car.type + car.color} car={car} />)
            })}
        </div>
    )
}