import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

function Modal({ children }) {
  const elRef = useRef(null)

  if (elRef.current) {
    elRef.current = document.createElement('div')
  }
}
