import $ from 'jquery'
import { generateRuteImg } from '../utils'
import CompanyPresent from './CompanyPresent.js'
import Contact from './contact.js'
import Hero from './Hero.js'
import Recomendation from './recomendation.js'
import formWizard from './formWizard'

const img = 'cratos.png'
const rutaImg = generateRuteImg(img)

const imagenes = await $.ajax('./heroInfo.json')

export default function Main () {
  return /* html */`
    <main>
        <div class="general">
          ${Hero({ imagenes })}
          ${CompanyPresent()}
          ${Recomendation()}
          ${Contact()}
          <section class="banner" style="outline: none;box-shadow: rgba(29, 17, 192, 0.17) 0px -23px 25px 0px inset, rgba(12, 38, 171, 0.15) 0px -36px 30px 0px inset, rgba(38, 23, 171, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(49, 8, 184, 0.09) 0px 4px 2px, rgba(27, 30, 205, 0.09) 0px 8px 4px, rgba(8, 7, 101, 0.09) 0px 16px 8px, rgba(61, 21, 163, 0.09) 0px 32px 16px;">
            <h2 class="title">Soy el<strong style="color: white"> Dios</strong> de la guerra</h2>
            <img src= ${rutaImg} alt="">
          </section>  
          ${formWizard()}
        </div>
    </main>
    `
}
