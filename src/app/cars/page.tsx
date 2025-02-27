import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CarsPage({ }: Props) {
    return (
        <div>
            <div>Cars</div>
            <Link href="/">Home</Link>
        </div>
    )
}