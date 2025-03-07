import PeopleContainer from '@/components/PeopleContainer'
import React from 'react'
import styles from "./people-page.module.css"

type Props = {}

export default function PeoplePage({ }: Props) {
    return (
        <div className={styles["main-container"]}>
            <h2>People</h2>
            <PeopleContainer />
        </div>
    )
}