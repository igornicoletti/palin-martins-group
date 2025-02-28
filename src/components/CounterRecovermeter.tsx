import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type CounterProps = {
  duration?: number
}

const credits = [
  {
    label: 'Créditos de produtores rurais recuperados desde 2023',
    value: '32.124.459,51'
  },
  {
    label: 'Créditos recuperados de tributos federais',
    value: '42.838.083,98'
  },
  {
    label: 'Créditos de ICMS vendidos pela Palin desde 2014',
    value: '92.761.131,55'
  }
] as const

export const CounterRecovermeter = ({ duration = 1500 }: CounterProps) => {
  const hasAnimated = useRef(false)
  const [count, setCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const parseNumber = (value: string) =>
    parseFloat(value.replace(/\./g, '').replace(',', '.'))

  const totalCredits = useMemo(() =>
    credits.reduce((acc, { value }) => acc + parseNumber(value), 0), [])

  const animateCounter = useCallback((start: number, end: number, time: number) => {
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / time, 1)
      setCount(start + progress * (end - start))

      if (progress < 1) requestAnimationFrame(updateCounter)
    }

    requestAnimationFrame(updateCounter)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animateCounter(0, totalCredits, duration)
      }
    }, { threshold: 0.5 })

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [animateCounter, totalCredits, duration])

  return (
    <p ref={sectionRef}>R${count.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
  )
}
