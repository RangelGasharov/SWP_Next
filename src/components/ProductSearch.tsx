"use client"
import React, { useEffect, useState } from 'react'
import styles from "./ProductSearch.module.css"
import { Button, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Product } from '@/services/Product';
import { ProductBox } from './ProductBox';

type Props = {}

export default function ProductSearch({ }: Props) {
    const [productName, setProductName] = useState("");
    const [response, setResponse] = useState(null);
    const [query, setQuery] = useState(`SELECT * FROM products WHERE product_name LIKE '%%'`);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setQuery(`SELECT * FROM products WHERE product_name LIKE '%${productName}%'`);
    }, [productName])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productname: productName }),
        });

        const data = await res.json();
        setProducts(data.data);
        console.log(products);

        let responseString = data.message;
        if (data.error) {
            responseString += " " + data.error;
        }

        setResponse(responseString);
    };

    return (
        <div className={styles["main-container"]}>
            <div className={styles["inputs-container"]}>
                <TextField label='Productname' value={productName} onChange={(e) => { setProductName(e.target.value) }}></TextField>
                <Button sx={{ margin: 0, height: "10" }} variant='contained' onClick={handleSubmit}><Search /></Button>
            </div>
            <div>{query}</div>
            <div>{response && <p>{response}</p>}</div>
            <div>{products?.map((product: Product) => {
                return (
                    <ProductBox key={product.id} product={product} />
                )
            })}</div>
        </div>
    )
}