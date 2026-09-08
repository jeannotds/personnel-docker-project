"use client"
import React, { useEffect, useState } from 'react'
import { healthHttp } from '../api/health.api';
import { HealthProps } from '../interfaces/interface';

export default function Health() {

  const [health, setHealth] = useState<HealthProps>()

    useEffect(()=> {
        const getHealth = async() => {
          const data = await healthHttp();
          setHealth(data)
        }
        getHealth()
    }, [])

  return (
    <div>{health?.message}</div>
  )
}
