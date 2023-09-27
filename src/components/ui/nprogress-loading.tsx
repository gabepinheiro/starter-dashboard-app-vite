import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({ easing: 'ease', speed: 800, showSpinner: true })

export function NProgressLoading() {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  })

  return null
}
