import React from 'react'
import "./NewsesComponent.css"
import pirvelisiaxle from "../../pictures/Rectangle 1.png"
import meoresiaxle from "../../pictures/Rectangle 2.png"
import mesamesiaxle from "../../pictures/Rectangle 3.png"

export default function NewsesComponent() {
    return (
        <div className='container-for-newses'>
            <p className='siaxleebi-P'>სიახლეები</p>
            <div className='div-siaxleebi'>
                <div className='siaxleebis-cardebi'>
                    <div className='zeda-div'>
                        <img src={pirvelisiaxle} alt='pirveli siaxlis surati' className='siaxle-suratebi' />
                    </div>
                    <div className='qveda-div'>
                        <p className='zeda-P'>ქალაქგარეთ ცხოვრების 10 <br></br>გავრცელებული მითი</p>
                        <p className='qveda-P'> 6 ნოემბერი</p>
                    </div>
                </div>
                <div className='siaxleebis-cardebi'>
                    <div className='zeda-div'>
                        <img src={meoresiaxle} alt='pirveli siaxlis surati' className='siaxle-suratebi' />
                    </div>
                    <div className='qveda-div'>
                        <p className='zeda-P'>ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</p>
                        <p className='qveda-P'> 28 ოქტომბერი</p>
                    </div>
                </div>
                <div className='siaxleebis-cardebi'>
                    <div className='zeda-div'>
                        <img src={mesamesiaxle} alt='pirveli siaxlis surati' className='siaxle-suratebi' />
                    </div>
                    <div className='qveda-div'>
                        <p className='zeda-P'>ავტომობილის სალონის მოვლის თანამედროვე ხერხები</p>
                        <p className='qveda-P'> 14 ოქტომბერი</p>
                    </div>
                </div>
            </div>
            <p className='yvela-siaxle'>ყველა სიახლე
                <div className='arrow-div'></div>
            </p>

        </div>
    )
}
