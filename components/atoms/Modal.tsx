import { useCallback, useEffect } from 'react'
import { css } from '@emotion/css'
import globalCss from '../../styles/global-css'
import { getScrollbarWidth } from '../../lib/utils'

interface ModalProps {
  isOpen?: boolean
  openHandler?: () => void
  onClose?: () => void
  children?: React.ReactElement
  escClose?: boolean
}

const Modal = ({
  isOpen = false,
  openHandler,
  onClose,
  children,
  escClose = true
}: ModalProps): React.ReactElement => {
  const openHandling = () => {
    if (openHandler) {
      openHandler()
    }
    if (isOpen === false && onClose) {
      onClose()
    }
  }

  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth()
    
    if (isOpen) {
      document.body.style.setProperty('overflow-y', 'hidden')
      if(scrollbarWidth) {
        document.body.style.setProperty('padding-right', `${scrollbarWidth}px`)
      }
    } else {
      document.body.style.removeProperty('overflow-y')
      document.body.style.removeProperty('padding-right')
    }
  }, [isOpen])

  const keyDownHandling = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape' && escClose && isOpen) {
        openHandling()
      }
    },
    [isOpen]
  )

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandling)

    return () => {
      window.removeEventListener('keydown', keyDownHandling)
    }
  }, [keyDownHandling])

  return (
    <>
      <div
        className={cssModal(isOpen)}
        role="dialog"
        aria-modal="true"
      >
        {children}
        <div
          role="presentation"
          onClick={openHandling}
          className={cssBackdrop}
        />
      </div>
    </>
  )
}

export default Modal

const cssModal = (isOpen: boolean) => css`
  ${isOpen ? 'display: flex' : 'display: none'};
  z-index: 3;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${globalCss.color.backgroundColorDownOpacity};
  backdrop-filter: blur(16px);
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  height: 100%;
  overflow-y: auto;

  a {
    color: ${globalCss.color.color};
    border-bottom: none;
  }
`;

const cssBackdrop = css`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;