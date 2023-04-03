import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Forecast({data}) {
    const [forecastData,setForecastData] = useState(data)

    useEffect(() => {
      setForecastData(data)
      console.log(data.list.splice(0,7))
    },[data])

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  return (
    <AccordionDiv>

      {forecastData.list.splice(0,7).map((item,index) => (
          <div className='container-forecast' key={index}>
            <div className='head-forecast'>
              <p className='head'>{forecastDays[index]}</p>
              <img src={`icons/${item.weather[0].icon}.png`}/>
              <p>{item.main.temp} °C</p>
            </div>
            <div className='details-forecast'>
                <div>
                  <p>Feels like</p>
                  <p>{item.main.feels_like} °C</p>
                </div>
                <div>
                  <p>humidity</p>
                  <p>{item.main.humidity}</p>
                </div>
                <div>
                  <p>pressure</p>
                  <p>{item.main.pressure}</p>
                </div>
                <div>
                  <p>Temp Max</p>
                  <p>{item.main.temp_max} °C</p>
                </div>
                <div>
                  <p>Temp Min</p>
                  <p>{item.main.temp_min} °C</p>
                </div>
              </div>
          </div>
      ))}
    </AccordionDiv>
  )
}

const AccordionDiv = styled.div`
  display: flex;
  .container-forecast {
    transition: all .5s ease;
    width:  calc(100% / 7);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: relative;

    .head-forecast {
      transition: all .5s ease;
    display: flex;
    flex-direction: column;
    justify-content : space-around ;
      align-items : center;
      height: 100%;
    .head {
      font-weight : 600;
      font-size : 12px;
    }
    & > img {
      width: 50%;
    }
    }

    .details-forecast {
      display: none;
    }

    &:hover {
      align-items : center;
      display: flex;
      flex-direction : column;
      justify-content : center;
      width: 100%;
      padding: 10px;
      .head-forecast {
        flex-direction : row;
        align-items : center;
        justify-content : space-around ;
        width: 70%;
        & > img {
          width: 40px;
          height 40px: 
        }
      }

      .details-forecast {
        display: flex;
        justify-content : space-between;
        & > div {
          font-size : 10px !important ;
          margin: 5px;
          & > p:nth-child(1){
            font-weight : 500
          }
        }
      }
    }
  }
  /* max-width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
   & > div {

    transition: all .5s ease;
    display: flex;
    flex-direction: column;
    justify-content : space-around ;
    width:  calc(100% / 7);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: relative;
    &:hover {
      width: 90%;
      & > img {
        width: 10%;
        height: 10%;
      }
      & .details {
        display: flex;
        justify-content : space-around;
        width: 100%;
      }
    }
    & > img {
      width: 50%;
      margin: auto;
      height: auto;
    }
   }

   .details {
    display : none;
    & >div {
        & > p:nth-child(1) {
        font-size : 12px;
        font-weight : 500;
      }
    }   
  } */
`