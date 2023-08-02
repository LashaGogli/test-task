import React from 'react'
import "./PreferencesComponent.css"
import time from "../../pictures/timer_black_24dp.svg"
import momxmarebeli from "../../pictures/kmayofilimomx.svg"
import building from "../../pictures/bulding.svg"
import payment from "../../pictures/payment.svg"
import date from "../../pictures/date_range_black_24dp.png"

export default function PreferencesComponent() {
    return (
        <div className='outpreferencesContainer'>
            <div className='preferencesContainer'>
                <p className='upiratesobebiP'>უპირატესობები</p>
                <div className='inside-preferences-down-container'>
                    <div className='inside-cards-div'>
                        <img src='https://unison.ge/images/0e81943b9a8669e63e11359f0b619598.svg' alt='man logo in preferences' className='for-marginup' />
                        <p className='for-margin'>მომხმარებლის კმაყოფილების 96%-იანი დონე</p>
                    </div>
                    <div className='inside-cards-div'>
                        <img src='https://unison.ge/images/47b83610762e010c584ecd7ccbdb2e29.svg' alt='star logo in preferences' className='for-marginup' />
                        <p className='for-margin'>მაღალრეიტინგული გადამზღვევი კომპანიები</p>
                    </div>
                    <div className='inside-cards-div'>
                        <img src='https://unison.ge/images/d1e445d61af41234ab9578bb70dad744.svg' alt='finger logo in preferences' className='for-marginup' />
                        <p className='for-margin'>თანამედროვე ელექტრონული სერვისები</p>
                    </div>
                    <div className='inside-cards-div'>
                        <img src={time} alt='time logo in preferences' className='for-marginup' />
                        <p className='for-margin'>ზარალის დარეგულირების უმოკლესი ვადები</p>
                    </div>
                    <div className='inside-cards-div'>
                        <img src='https://unison.ge/images/e2ac6d32c188ceee274b0cfbccb0c39a.svg' alt='2men logo in preferences' className='for-marginup' />
                        <p className='for-margin'>კორპორატიული კლიენტების ფართო სპექტრი</p>
                    </div>
                    <div className='inside-cards-div'>
                        <img src='https://unison.ge/images/853555a40e63991eefd2b0e4ba7ea121.svg' alt='3stars logo in preferences' className='for-marginup' />
                        <p className='for-margin'>გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილება</p>
                    </div>


                    <div className='inside-cards-div-mobile'>
                        <img src={momxmarebeli} alt='kmayofili momxmarebeli logo' />
                        <p className='middle-P'>32067</p>
                        <p className='for-margin'>კმაყოფილი <br></br> მომხმარებელი</p>
                    </div>
                    <div className='inside-cards-div-mobile'>
                        <img src={building} alt='building logo in preferences' />
                        <p className='middle-P'>5</p>
                        <p className='for-margin'>ფილიალი <br></br>საქართველოში</p>
                    </div>
                    <div className='inside-cards-div-mobile'>
                        <img src={payment} alt='payment logo in preferences' />
                        <p className='middle-P'>2'800'843 ₾</p>
                        <p className='for-margin'>ანაზღაურებული <br></br>თანხა</p>
                    </div>
                    <div className='inside-cards-div-mobile'>
                        <img src={date} alt='date logo in preferences' />
                        <p className='middle-P'>12</p>
                        <p className='for-margin'>წარმატებული <br></br>წელი</p>
                    </div>

                </div>
            </div>
            <div className='xazi-div'></div>
        </div>
    )
}
