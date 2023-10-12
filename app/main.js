import '../style.pcss'
import javascriptLogo from '../javascript.svg'
// import viteLogo from '../../../../../../vite.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from '../counter.js'
import { worker } from '../src/mocks/browser'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
if (process.env.NODE_ENV === 'development') {
  worker.start()
}
setupCounter(document.querySelector('#counter'))
