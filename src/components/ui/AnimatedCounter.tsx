import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  separator?: string
  className?: string
}

function formatNumber(n: number, separator: string) {
  return Math.floor(n).toLocaleString('es-HN').replace(/,/g, separator)
}

export default function AnimatedCounter({
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * to)
      if (progress < 1) requestAnimationFrame(step)
      else setCount(to)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count, separator)}{suffix}
    </span>
  )
}
