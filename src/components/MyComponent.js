// class component
// function component
import React, { useState } from 'react'
import AddCrushInfor from './AddCrushInfor'
import DisplayInfor from './DisplayInfor'

const MyComponent = (props) => {
  const [listCrush, setNewCrushList] = useState([
    { id: 1, name: 'Quyen', age: 22, address: 'Ho Chi Minh' },
    { id: 2, name: 'Linh', age: 27, address: 'Dong Nai' },
    { id: 3, name: 'Chan', age: 23, address: 'Gia Lai' },
    { id: 4, name: 'Tramm', age: 18, address: 'Binh Thuan' },
    { id: 5, name: 'Nhu', age: 25, address: 'Dong Nai' },
  ])

  function handleAddNewCrush(crushObj) {
    setNewCrushList([crushObj, ...listCrush])
  }

  function handleDeleteCrush(crushId) {
    let listCrushClone = [...listCrush]
    listCrushClone = listCrushClone.filter((crush) => crush.id !== crushId)
    setNewCrushList(listCrushClone)
  }

  const test = { name: 'eric', age: 26 }

  return (
    <>
      <br />
      {JSON.stringify(test)}
      <div className="a">
        <AddCrushInfor handleAddNewCrush={handleAddNewCrush} />
        <br /> <br />
        <DisplayInfor listCrush={listCrush} handleDeleteCrush={handleDeleteCrush} />
      </div>
      <div className="b"></div>
    </>
  )
}

export default MyComponent
