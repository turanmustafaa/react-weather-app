import React from 'react'
import styled from 'styled-components'

export default function Weather({data}) {
  // const currentDate = new Date(data)
  // console.log(data)
  return (
    <div>{data ? <Card>
      {
        <>
         <div className='head'>
            <p>{data.name} / {data.sys.country}</p>
            {/* <p>{currentDate}</p> */}
            <img style={{width : "20%"}}
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
            />
            <p>{data.weather[0].description}</p>
          <p style={{fontSize: "40px"}}>{data.main.temp} °C</p>
         </div>
        <div className='details'>
          <div>
            <p>Feels like</p>
            <p>{data.main.feels_like}</p>
          </div>
          <div>
            <p>humidity</p>
            <p>{data.main.humidity}</p>
          </div>
          <div>
            <p>pressure</p>
            <p>{data.main.pressure}</p>
          </div>
          <div>
            <p>Temp Max</p>
            <p>{data.main.temp_max} °C</p>
          </div>
          <div>
            <p>Temp Min</p>
            <p>{data.main.temp_min} °C</p>
          </div>
        </div>
        </>
      }
    </Card>  : <div>henuz data yok</div>
    }</div>
  )
}

const Card = styled.div`
  width: 95%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction : column ;
  justify-content : space-around ;
   p {
    margin : 0 ;
    padding : 0;
   }
   .head {
    margin-top : 10px;
   }
  .details {
    display : flex;
    width: 100%;
    justify-content : space-between; 
    & >div {
      padding-right : 5px;
        &> p:nth-child(1) {
        font-weight : 500;
      }
    }   
  }
`