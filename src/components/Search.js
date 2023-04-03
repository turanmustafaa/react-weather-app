import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from 'cities.json';
import styled from 'styled-components';

export default function Search({onSearchChange, geoLocationFunc}) {

    // console.log(cities)
  // note: the id field is mandatory
  const items = cities


  const geolocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const data = {
        lat,
        lng
      }
      geoLocationFunc(data)
  }
}
  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results)
  // }

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result)
  // }

  const handleOnSelect = (item) => {
    // the item selected
    onSearchChange(item)
  }

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
  return (
    <Div>
        <ReactSearchAutocomplete
            items={items}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
          <button className='btn' style={{zIndex: "5"}} onClick={geolocationData}>getlocation</button>
    </Div>
  )
}

const Div = styled.div`
  width : 100%;
  height : 100%;
  display: flex;
  justify-content : center;
  align-items : center;
  background-image: url("https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80"); /* The image used */
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  position: relative;

    &::after {
      content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  opacity: .4; 
  background-color: black;
  z-index : 2;
    }
   & > div {
    width: 50%;
    z-index: 3;
    margin-right : 10px;
   }
   .btn {
    background: none;
    padding: 10px;
    border: 1px solid grey;
    border-radius : 10px;
    color: white;
    cursor : pointer ;
   }
`