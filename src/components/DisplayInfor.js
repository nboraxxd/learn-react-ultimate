import React, { useEffect, useState } from 'react'
import './DisplayInfor.scss'
import logoReact from './../logo.svg'

const DisplayInfor = (props) => {
  const { listCrush } = props

  const [isShowListCrush, setShowHideListCrush] = useState(true)

  function handleToggleListCrush() {
    setShowHideListCrush(!isShowListCrush)
  }
  console.log('render')

  useEffect(() => {
    if (listCrush.length === 1) {
      console.log('only one crush')
    }
  }, [listCrush])

  return (
    <section className="display-infor-container">
      <button
        onClick={() => {
          handleToggleListCrush()
        }}
      >
        {isShowListCrush === true ? 'Hide' : 'Show'} list crush
      </button>
      {isShowListCrush && (
        <div>
          {listCrush.map((crush) => {
            return (
              <div key={crush.id} className={+crush.age >= 25 ? 'green' : 'red'}>
                <div>My crush name's {crush.name}</div>
                <div>She age's {crush.age}</div>
                <div>She is from {crush.address}</div>
                <button
                  onClick={() => {
                    props.handleDeleteCrush(crush.id)
                  }}
                >
                  Delete
                </button>
                <hr />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default DisplayInfor
