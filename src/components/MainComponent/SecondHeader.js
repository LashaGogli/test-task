import React from 'react'
import logo from "../../pictures/Logo.png"
import kacislogo from "../../pictures/kacislogo.svg"
import redkacislogo from "../../pictures/Component 8 – 11.svg"
import health from "../../pictures/health_and_safety_black_48dp.svg"
import car from "../../pictures/car.svg"
import tipi from "../../pictures/tipis logo.svg"
import airplain from "../../pictures/airplain.svg"
import "../MainComponent/SecondHeader.css"
import phonelogo from "../../pictures/phone logo.svg"
import burgericon from "../../pictures/burgericon.svg"


export default function SecondHeader() {
    return (
        <div className='mainContainer'>
            <div className='upcolor-for-mobile'></div>
            <div className='insideMainContainer'>
                <div className='insideLeftContainer'>
                    <img
                        src={logo}
                        alt='unisonis logo'
                        className='unisonis-logo' />
                    <img
                        src="https://unison.ge/images/Logo.svg?67e6ca38c569dc486c43deaec1c5ba4e"
                        alt='unisonis logo hoverze'
                        className='unisonis-logo-hoverze' />
                    <div className='redPOuterDiv'>
                        <p className='redP'>ფიზიკური <br></br>პირებისთვის</p>
                        <div className='redUnderLineP'>
                            <div className='dropDownDivforRedLine'>
                                <div className='insideDropDownDiv'>
                                    <div className='divForLogoAndP'>
                                        <img src={health} alt='health logo' className='healthLogo' />
                                        <img src="https://unison.ge/images/hoverHealth.svg?3c16ef43fb545184cf50bd3b8ebf746b" alt='health logo' className='healthLogoOnHover' />
                                        <p className='individualuri'>ინდივიდუალური ჯანმრთელობის დაზღვევა</p>
                                    </div>
                                    <div className='divForLogoAndP'>
                                        <img src={car} alt='health logo' className='healthLogo' />
                                        <img src="https://unison.ge/images/hoverCarInsurance.svg?abf71d98a9428a6a9767bc443b76c085" alt='health logo' className='healthLogoOnHover' />
                                        <p className='individualuri'>ავტოდაზღვევა - პაკეტები</p>

                                    </div>
                                    <div className='divForLogoAndP'>
                                        <div className='dropLeftDiv'>
                                            <img src={tipi} alt='health logo' className='healthLogo' />
                                            <img src="https://unison.ge/images/hoverResInsurance.svg?7a481e157a76cbeb2806c33f6513b003" alt='health logo' className='healthLogoOnHover' />
                                            <span className='individualuri'>მძღოლის პასუხისმგებლობის დაზღვევა</span>
                                            <div className='rightArrowIcon'></div>
                                            <div className='alreadyDropped'>
                                                <div className='divForFlex'>
                                                    <p>შემოსული ტურისტებისთვის</p>
                                                    <p>გამსვლელი ტურისტებისთვის</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='divForLogoAndP'>
                                        <img src={airplain} alt='health logo' className='healthLogo' />
                                        <img src="https://unison.ge/images/hoverTravelInsurance.svg?8faeaaf011a885089606174f0f91ff41" alt='health logo' className='healthLogoOnHover' />
                                        <p className='individualuri'>სამოგზაურო დაზღვევა</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='redPOuterDiv'>
                        <p className='redP'>იურიდიული <br></br>პირებისთვის</p>
                        <div className='redUnderLineP'></div>
                    </div>
                    <div className='redPOuterDiv'>
                        <p className='redP'>სავალდებულო <br></br>დაზღვევა</p>
                        <div className='redUnderLineP'></div>
                    </div>
                </div>
                <div className='insideRighttContainer'>
                    <div className='roundDiv'>
                        <img src={kacislogo} alt='patara kacis logo' className='manLogo' />
                        <img src={redkacislogo} alt=' witeli patara kacis logo' className='manLogoOnHover' />
                    </div>
                    <span className='myCabinet'>ჩემი <br></br>კაბინეტი</span>
                </div>
            </div>
            <div className='callToAgent'>
                <img src={phonelogo} alt='telefonis logo witel divshi' className='phoneLogomeore' />
                <p>აგენტთან <br></br>დაკავშირება</p>
            </div>
            <img
                src={burgericon}
                alt='burger icon'
                className='burger-icon' />
        </div>
    )
}
