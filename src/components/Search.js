import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from 'cities.json';
import styled from 'styled-components';

export default function Search({onSearchChange}) {

    console.log(cities)
  // note: the id field is mandatory
  const items = cities

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
    console.log(item ,"selected")
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
    width: 100%;
    z-index: 3
   }
`