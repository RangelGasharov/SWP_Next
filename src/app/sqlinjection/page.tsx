import LoginForm from '@/components/LoginForm'
import ProductSearch from '@/components/ProductSearch'
import React from 'react'
import styles from "./sqlinjection-page.module.css"

type Props = {}

export default function SQLInjectionPage({ }: Props) {
    return (
        <div className={styles["main-container"]}>
            <div>
                <h1>Login</h1>
                <LoginForm></LoginForm>
            </div>
            <div>
                <h1>Products</h1>
                <ProductSearch></ProductSearch>
            </div>
        </div>
    )
}