import React, { useState } from 'react'

const AddCrushInfor = (props) => {
  const [nameOfCrush, setNameOfCrush] = useState('Tramm')
  const [addressOfCrush, setAddressOfCrush] = useState('Vietnam')
  const [ageOfCrush, setAgeOfCrush] = useState(18)
  const [favoriteNumberOfCrush, setFavoriteNumberOfCrush] = useState(
    Math.floor(Math.random() * 100) + 1
  )

  function handleOnChangeName(event) {
    setNameOfCrush(event.target.value)
  }

  function handleOnChangeAddress(event) {
    setAddressOfCrush(event.target.value)
  }

  function handleOnChangeAge(event) {
    setAgeOfCrush(event.target.value)
  }

  function handleOnChangeFavoriteNumber(event) {
    setFavoriteNumberOfCrush(event.target.value)
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    props.handleAddNewCrush({
      id: Date.now(),
      name: nameOfCrush,
      address: addressOfCrush,
      age: ageOfCrush,
      favorite: favoriteNumberOfCrush,
    })
  }

  return (
    <div>
      My crush is {nameOfCrush}, she is from {addressOfCrush}, she is {ageOfCrush} years old and her
      favorite number is {favoriteNumberOfCrush}
      <form
        onSubmit={(event) => {
          handleOnSubmit(event)
        }}
      >
        <label>Your cursh: </label>
        <input type="text" onChange={(event) => handleOnChangeName(event)} />

        <label>Address: </label>
        <input type="text" onChange={(event) => handleOnChangeAddress(event)} />

        <label>Age: </label>
        <input type="text" onChange={(event) => handleOnChangeAge(event)} />

        <label>Favorite number: </label>
        <input type="text" onChange={(event) => handleOnChangeFavoriteNumber(event)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddCrushInfor
