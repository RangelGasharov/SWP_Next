import Link from 'next/link'
import React from 'react'
import styles from "./Menu.module.css"

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className={styles["list-box"]}>
                <li className={styles["list-element"]}><Link href="/">Home</Link></li>
                <li className={styles["list-element"]}><Link href="/cars">Cars</Link></li>
                <li className={styles["list-element"]}><Link href="/trucks">Trucks</Link></li>
            </ul>
        </div>
    )
}