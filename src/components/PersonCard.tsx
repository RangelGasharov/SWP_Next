import { Person } from '@/services/Person'
import React from 'react';
import styles from "./PersonCard.module.css";

type Props = {
    person: Person;
}

export default function PersonCard({ person }: Props) {
    return (
        <div className={styles["main-container"]}>
            <div>{person.firstname}</div>
            <div>{person.lastname}</div>
        </div>
    )
}