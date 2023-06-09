import $ from 'jquery'

export function scrollHeader () {
  const header = $('header')
  let ubicacionPrincipal = 0

  window.addEventListener('scroll', () => {
    const desplazamientoActual = window.scrollY

    if (desplazamientoActual === 0) {
      header.css({ background: '#fdfdfd3d' })
    } else {
      header.css({ background: 'white' })
    }

    if (ubicacionPrincipal > desplazamientoActual) {
      header.css({ top: '0' }, { background: 'green' })
    } else {
      header.css({ top: '-100px' })
    }

    ubicacionPrincipal = desplazamientoActual
  })
}
