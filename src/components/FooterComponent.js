import React from 'react'
import "./FooterComponent.css"
import facebook from "../pictures/facebook.png"
import instagram from "../pictures/Instagram.png"
import linkedin from "../pictures/linkedin.png"
import youtube from "../pictures/youtube.png"
import appstore from "../pictures/appstore.png"
import googleplay from "../pictures/googleplay.png"

export default function FooterComponent() {
    return (
        <>
            <div className='footer-main-container'>
                <div className='footer-transparent-container'>
                    <div className='shorter-container'>
                        <div className='zevit-Div'>
                            <div className='four-divs'>
                                <img
                                    src='https://unison.ge/images/unisonLogo.svg?67e6ca38c569dc486c43deaec1c5ba4e'
                                    alt='unisonis footeris logo'
                                    className='footer-logo' />
                                <p>ჩვენს შესახებ</p>
                                <p>კარიერა</p>
                                <p>პარტნიორები</p>
                            </div>
                            <div className='four-divs'>
                                <p style={{ fontWeight: "bold", color: "#707070", textDecoration: "none" }}>ინფორმაცია</p>
                                <p>სიახლეები</p>
                                <p>საინფორმაციო ფურცელი</p>
                                <p>სამედიცინო პროვაიდერები</p>
                                <p>ხელშეკრულებები</p>
                            </div>
                            <div className='four-divs'>
                                <p style={{ fontWeight: "bold", color: "#707070", textDecoration: "none" }}>დახმარება</p>
                                <p>კონტაქტი</p>
                                <p>მომხმარებლის ხმა</p>
                                <p>ხშირად დასმული კითხვები</p>
                                <p>მონაცემთა დაცვა</p>
                            </div>
                            <div className='four-divs'>
                                <p style={{ fontWeight: "bold", color: "#707070", textDecoration: "none" }}>სოციალური ქსელები</p>
                                <div className='social-media-div'>
                                    <img src={facebook} alt='facebook logo' style={{ width: "30px", height: "30px" }} />
                                    <p>Facebook</p>
                                </div>
                                <div className='social-media-div'>
                                    <img src={instagram} alt='instagram logo' style={{ width: "28px", height: "28px", marginLeft: "2px" }} />
                                    <p>Instagram</p>
                                </div>
                                <div className='social-media-div'>
                                    <img src={linkedin} alt='linkedin logo' style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
                                    <p>Linkedin</p>
                                </div>
                                <div className='social-media-div'>
                                    <img src={youtube} alt='youtube logo' style={{ width: "28px", height: "20px", marginLeft: "2px" }} />
                                    <p>Youtube</p>
                                </div>
                            </div>
                        </div>
                        <div className='qvevit-Div'>
                            <div className='shavi-logoebis-divi'>
                                <img src={appstore} alt='appstore logo' style={{ width: "103px", height: "35px" }} />
                                <img src={googleplay} alt='googleplay logo' style={{ width: "131px", height: "50px" }} />
                            </div>
                            უნისონი © ყველა უფლება დაცულია, 2021
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile-footer-container'>
                <div className='horizontal-listing'>
                    <img src="https://unison.ge/images/unisonLogo.svg?67e6ca38c569dc486c43deaec1c5ba4e" alt="" width="151px" />
                </div>
                <div className='horizontal-list-items'>
                    <p>ჩვენს შესახებ</p>
                    <p>კარიერა</p>
                    <p>პარტნიორები</p>
                </div>
                <div className='horizontal-listing'>ინფორმაცია</div>
                <div className='horizontal-list-items'>
                    <p>სიახლეები</p>
                    <p>საინფორმაციო ფურცელი</p>
                    <p>სამედიცინო პროვაიდერები</p>
                    <p>ხელშეკრულებები</p>
                </div>
                <div className='horizontal-listing'>დახმარება</div>
                <div className='horizontal-list-items'>
                    <p>კონტაქტი</p>
                    <p>მომხმარებლის ხმა</p>
                    <p>ხშირად დასმული კითხვები</p>
                    <p>მონაცემთა დაცვა</p>
                </div>
                <div className='horizontal-list-items' style={{ alignItems: "center" }}>
                    <img src={appstore} alt='appstore logo' style={{ width: "103px", height: "35px" }} />
                    <img src={googleplay} alt='googleplay logo' style={{ width: "131px", height: "50px" }} />
                </div>
                <div className='horizontal-list-items' style={{ alignItems: "center" }}>
                    <div className='social-media-div'>
                        <img src={facebook} alt='facebook logo' style={{ width: "30px", height: "30px" }} />
                        <p>Facebook</p>
                    </div>
                    <div className='social-media-div'>
                        <img src={instagram} alt='instagram logo' style={{ width: "28px", height: "28px", marginLeft: "2px" }} />
                        <p>Instagram</p>
                    </div>
                    <div className='social-media-div'>
                        <img src={linkedin} alt='linkedin logo' style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
                        <p>Linkedin</p>
                    </div>
                    <div className='social-media-div'>
                        <img src={youtube} alt='youtube logo' style={{ width: "28px", height: "20px", marginLeft: "2px" }} />
                        <p>Youtube</p>
                    </div>

                </div>
                <p className='unisonis-uflebebi'>უნისონი © ყველა უფლება დაცულია, 2021</p>
            </div>
        </>
    )
}
