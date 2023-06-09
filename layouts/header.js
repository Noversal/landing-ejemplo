export default function Header () {
  return /* html */`
  <header id="header">
  <div id="logo">
    <img src="./image/logo.png" alt="Logo de equipo">
  </div>
  <div id="menu-hamburguesa">
  <span></span>
  <span></span>
  <span></span>
</div>

  <nav>
    <ul id="ul"> 
      <li><a href="#header">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#presentation-org">Acerca de</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>`
}
