import React from 'react';

export default function Maincontent(props) {//props jotta pystyy lähettämään ja vastaanottamaan app.js:stä propsia
  return <div className="Maincontent">

      <div className="MainPage">
            <div className="otsikko"><b> Koronavirus</b>

            <div className="kuva">
                  <img className="koronakuva"src='https://hs.mediadelivery.fi/img/658/666a492de329ab7ab9d2c8c7fbb66cf7.jpg.webp'
                  height="500" widht="500"></img>
                  
                  </div>
                  </div>
                  <div className="Side">
                   <div className="newsbar"><b>Luetuimmat</b></div>
                  {
                        props.sivuotsikko.map((item)=>{
                              return <div className='numero' key={item}>{item.nmb}
                              <div className="uutinen" key={item}>{item.news} </div>
                              </div>
                        })}
                  </div>
      </div>
      </div>;}