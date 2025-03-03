import { Engine } from '@/services/Engine'
import React from 'react'
import styles from "./EngineCard.module.css"

type Props = {
    engine: Engine
}

export default function EngineCard({ engine }: Props) {
    return (
        <div>
            <h4>Engine</h4>
            <div className={styles["information-box"]}>
                <div>Serial number:</div>
                <div>{engine.serial_number}</div>
                <div>Horse power:</div>
                <div>{engine.horse_power}</div>
            </div>
        </div>
    )
}