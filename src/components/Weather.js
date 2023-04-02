import React from 'react'
import styled from 'styled-components'

export default function Weather({data}) {
  // const currentDate = new Date(data)
  return (
    <div>{data ? <Card>
      {
        <>
         <div>
            <p>{data.name}</p>
            {/* <p>{currentDate}</p> */}
            <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
            />
          <p>{data.main.temp} °C</p>
         </div>
        <div>

        </div>
        </>
      }
    </Card>  : <div>henuz data yok</div>
    }</div>
  )
}

const Card = styled.div`
  width: 100%;
  height: 100%;
`