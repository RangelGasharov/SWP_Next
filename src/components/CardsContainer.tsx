import { Car } from '@/services/Car'
import React from 'react'
import Card from './Card'
import styles from "./CardsContainer.module.css"
import { Engine } from '@/services/Engine'

type Props = {
    cars: Car[],
    engines: Engine[]
}

export default function CardsContainer({ cars, engines }: Props) {
    const engineDictionary = engines.reduce((acc, engine) => {
        acc[engine.id] = engine;
        return acc;
    }, {});

    console.log(engineDictionary);

    return (
        <div className={styles["main-container"]}>
            {cars?.map((car) => {
                return (<Card key={car.name + car.type + car.color} car={car} engine={engineDictionary[car.engine_fk]} />)
            })}
        </div>
    )
}