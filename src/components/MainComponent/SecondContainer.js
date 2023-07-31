import React from 'react'
import "./SecondContainer.css"
import indicator from "../../pictures/indicators.svg"
import PreferencesComponent from './PreferencesComponent'
import NewsesComponent from './NewsesComponent'

export default function SecondContainer() {
    return (
        <div className='lower-main-container'>
            <div className='inside-lower-container'>
                <img src={indicator} alt="indicator" className="indicator" />
                <div className='div-for-cards'>
                    <div className='card-divs'>
                        <img
                            src='https://unison.ge/images/propertyInsurance.svg?9416e3156fb39180b7ca7cf58c8fdbba'
                            alt='home logo'
                            className='logoes' />
                        <img
                            src='https://unison.ge/images/hoverPropertyInsurance.svg?da356c6bd195b10827c7d896700f2b98'
                            alt='home logo on hover'
                            className='logoes-on-hover' />
                        <p>ქონების <br></br>დაზღვევა</p>
                        <button className='sheidzineDiv'>შეიძინე</button>
                    </div>
                    <div className='card-divs'>
                        <img
                            src='https://unison.ge/images/health.png?10aada4bda145e7c68f53e599103b08b'
                            alt='health insurance'
                            className='logoes' />
                        <img
                            src='https://unison.ge/images/hoverHealth.svg?3c16ef43fb545184cf50bd3b8ebf746b'
                            alt='health insuranceon hover'
                            className='logoes-on-hover' />
                        <p>ჯანმრთელობის დაზღვევა</p>
                        <button className='sheidzineDiv'>შეიძინე</button>
                    </div>
                    <div className='card-divs'>
                        <img
                            src='https://unison.ge/images/carInsurance.svg?af1e34f8bf1792067ec3451473763ad8'
                            alt='auto insurance'
                            className='logoes' />
                        <img
                            src='https://unison.ge/images/hoverCarInsurance.svg?abf71d98a9428a6a9767bc443b76c085'
                            alt='auto insurance on hover'
                            className='logoes-on-hover' />
                        <p>ავტომობილის დაზღვევა</p>
                        <button className='sheidzineDiv'>შეიძინე</button>
                    </div>
                    <div className='card-divs'>
                        <img
                            src='https://unison.ge/images/resInsurance.svg?724296dfc283f9fcbd88406e19c6c868'
                            alt='man logo'
                            className='logoes' />
                        <img
                            src='https://unison.ge/images/hoverResInsurance.svg?7a481e157a76cbeb2806c33f6513b003'
                            alt='man logo on hover'
                            className='logoes-on-hover' />
                        <p>პასუხისმგებლობის დაზღვევა</p>
                        <button className='sheidzineDiv'>შეიძინე</button>
                    </div>
                    <div className='card-divs'>
                        <img
                            src='https://unison.ge/images/travelInsurance.svg?cb959b4ea78885e3593231d09793ba5c'
                            alt='airplain logo'
                            className='logoes' />
                        <img
                            src='https://unison.ge/images/hoverTravelInsurance.svg?8faeaaf011a885089606174f0f91ff41'
                            alt='auto insurance on hover'
                            className='logoes-on-hover' />
                        <p>სამოგზაურო დაზღვევა</p>
                        <button className='sheidzineDiv'>შეიძინე</button>
                    </div>
                </div>
            </div>
            <PreferencesComponent/>
            <NewsesComponent/>
        </div>
    )
}
