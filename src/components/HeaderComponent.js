import React from 'react'
import arrow from "../pictures/Path 398.svg"
import phone from "../pictures/phone.svg"
import russia from "../pictures/russia.png"
import "../components/HeaderComponent.css"


export default function HeaderComponent() {
  return (
    <div className='mainDiv'>
      <div className='insideDiv'>
        <div className='left-Header-Div '><link
          href="https://blogfonts.com/css/aWQ9MTMxMjY2JnN1Yj0yNjYmYz1oJnR0Zj1ITEIudHRmJm49aGVsdmV0aWNhLTU1LXJvbWFu/Helvetica 55 Roman.ttf"
          rel="stylesheet"
          type="text/css" />
          <ul>
            <li className='li-item'>მთავარი</li>
            <li className='li-item'>ჩვენ შესახებ</li>
            <li className='li-item'>სიახლეები</li>
            <li className='li-item'>პარტნიორები</li>
            <li className='li-item'>კონტაქტი</li>
            <li>
              <div className='outSOS'>
                <div className='sos'>SOS</div>
                <div className="SOdropdown">
                  <div className='someDiv'>
                    <p className='afterDropDownP'>მოხდა სადაზღვევო შემთხვევა</p>
                    <p className='afterDropDownP'>შემთხვევის სტატუსის შემოწმება</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='right-Header-Div' >
          <div className='outerDivForDropingDown'>
            <div className='languageDiv'>
              <img
                src='https://unison.ge/images/GeorgiaFlag.svg?a089e7b8a768cd8850c6daa5aca918fc'
                alt='Georgian flag'
                className='georgianFlag' />
              <span>ქართული</span>
              <img src={arrow} alt='arrow down' className='arrowPic' />
            </div>
            <div className="languagedropdown">
              <div className='languageDropDownDiv'>
                <div className='leftTransparentDiv'>
                  <img
                    src='https://unison.ge/images/brit.png?d2892f3fc1d904cbeacc1cf5729285e3'
                    alt='English Flag'
                    className='EnglishFlag' />
                  <span>English</span>
                </div>
                <div className='transparentDiv'></div>
              </div>
              <div className='languageDropDownDiv'>
                <div className='leftTransparentDiv'>
                  <img
                    src={russia}
                    alt='Georgian flag'
                    className='georgianFlag' />
                  <span>Русский</span>
                </div>
                <div className='transparentDiv'></div>
              </div>
            </div>
          </div>
          <div className='hotLineDiv'>
            <span>ცხელი ხაზი</span>
            <img src={phone} alt='phone' className='phonePic' />
            <span>2 991 991</span>
          </div>
        </div>
      </div>
    </div>

  )
}
