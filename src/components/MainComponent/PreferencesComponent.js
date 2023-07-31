import React from 'react'
import "./PreferencesComponent.css"
import time from "../../pictures/timer_black_24dp.svg"

export default function PreferencesComponent() {
    return (
        <div className='preferencesContainer'>
            <p className='upiratesobebiP'>უპირატესობები</p>
            <div className='inside-preferences-down-container'>
                <div className='inside-cards-div'>
                    <img src='https://unison.ge/images/0e81943b9a8669e63e11359f0b619598.svg' alt='man logo in preferences' className='for-marginup'/>
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
            </div>
        </div>
    )
}
