import Link from 'next/link'
import React from 'react'
import styles from "./Menu.module.css"

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className={styles["list-box"]}>
                <li><Link className={styles["list-element"]} href="/">Home</Link></li>
                <li><Link className={styles["list-element"]} href="/cars">Cars</Link></li>
                <li><Link className={styles["list-element"]} href="/trucks">Trucks</Link></li>
            </ul>
        </div>
    )
}