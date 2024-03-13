import './AboutSection.scss'

import {listItem} from './listItem.js'

export default function AboutSection(){
    return(
        <section className="section_about">
            <h3 className="section_about__title">Why Us</h3>
            <ul className="section_about__list">
                {listItem.map((e)=>{
                    return <li key={e.id}>{e.item}</li>
                })}
            </ul>
        </section>
    )
}