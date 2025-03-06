import { Car } from '@/services/Car'
import React from 'react'
import Card from './Card'
import styles from "./CardsContainer.module.css"
import { Engine } from '@/services/Engine'
import { CarType } from '@/services/CarType'

type Props = {
    cars: Car[],
    engines: Engine[],
    carTypes: CarType[]
}

export default function CardsContainer({ cars, engines, carTypes }: Props) {
    const engineDictionary = engines.reduce((acc, engine: Engine) => {
        acc[engine.id] = engine;
        return acc;
    }, {});

    const carTypeDictionary = carTypes.reduce((acc, carType: CarType) => {
        acc[carType.id] = carType;
        return acc;
    }, {});

    return (
        <div className={styles["main-container"]}>
            {cars?.map((car) => {
                return (<Card key={car.id} car={car} engine={engineDictionary[car.engine_fk]} carType={carTypeDictionary[car.car_type_fk]} />)
            })}
        </div>
    )
}