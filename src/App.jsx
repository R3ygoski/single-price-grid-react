import InviteSection from './components/InviteSection'
import SignUpSection from './components/SignUpSection'
import AboutSection from './components/AboutSection'
import './App.scss'

export default function App() {

  return (
    <>
    <main className='main'>
      <article className='main__card'>
        <InviteSection/>
        <SignUpSection/>
        <AboutSection/>
      </article>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/R3ygoski" target='_blank' rel="noreferrer">Bernardo Poggioni</a>.
      </div>
    </main>
    </>
  )
}

