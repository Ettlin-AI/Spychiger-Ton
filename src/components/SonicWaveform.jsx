import { useEffect, useRef } from 'react'
import './SonicWaveform.css'

function SonicWaveform() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width = canvas.offsetWidth * 2
    const height = canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const bars = 50
    const barWidth = (width / 2) / bars
    let animationId

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < bars; i++) {
        const barHeight = Math.sin(Date.now() / 200 + i / 5) * 50 + 60
        const x = i * barWidth
        const y = (height / 2 - barHeight) / 2

        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight)
        gradient.addColorStop(0, '#00d4ff')
        gradient.addColorStop(1, '#0066ff')

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth - 2, barHeight)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="waveform-container">
      <canvas ref={canvasRef} className="waveform-canvas"></canvas>
    </div>
  )
}

export default SonicWaveform
