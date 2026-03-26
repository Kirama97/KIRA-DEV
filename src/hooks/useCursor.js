import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      raf = requestAnimationFrame(animate)
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()
    addHoverListeners()

    // Re-attach on DOM changes
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])
}
