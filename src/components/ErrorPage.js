import React from 'react'

const ErrorPage = ({ setCurrentPage }) => {
  return (
    <div className="ErrorPage">
      <h1>Coś poszło nie tak...</h1>
      <button
        onClick={e => {
          e.preventDefault()
          setCurrentPage('1_1')
        }}
        className="button button--small mb-20"
      >
        Wróć
      </button>
    </div>
  )
}

export default ErrorPage
