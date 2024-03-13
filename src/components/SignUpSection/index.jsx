import './SignUpSection.scss'

export default function SignUpSection(){
    return(
        <section className="section_signup">
            <h3 className="section_signup__title">Monthly Subscription</h3>
            <p className="section_signup__price">$29
                <span className="section_signup__price-pmonth">per month</span>
            </p>
            <p className="section_signup__desc">Full access for less than $1 a day</p>
            <button className="section_signup__button">Sign Up</button>
        </section>
    )
}