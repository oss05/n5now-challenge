import React from 'react'
import dynamic from 'next/dynamic'

const ExternalPage = dynamic(() => import('next3/pages/index'),{
    ssr: false,
    suspense: true,
})

export default function HarryPotterPage() {
    return <ExternalPage/>
}