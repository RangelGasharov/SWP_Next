import React from 'react'
import styles from "./ProductBox.module.css"
import { Product } from '@/services/Product'

type Props = {
    product: Product
}

export const ProductBox = ({ product }: Props) => {
    return (
        <div className={styles["main-container"]} key={product.id}>
            <div>{product.id}</div>
            <div>{product.product_name}</div>
            <div>{product.product_price}</div>
            <div>{product.quantity_in_stock}</div>
        </div>
    )
}