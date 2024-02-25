import React from 'react'
import './cardBook.css'

const CardBook = ({Image ,Titulo, Autor, Descricao}) => {
    return (
      <div className="card-book">
          <div className='card-book__esquerdo'>
              <img className="card-book__image" src={Image} alt="Capa do livro de Isaac Asimov"/>
              <button className='card-book__button-read-more'>Ler amostra</button>
          </div>
          <div className='card-book__direito'>
              <header className='card-book__direito__header'>
                  <h3 className="card-book__title">{Titulo}</h3>
                  <p className="card-book__author">por <span>{Autor}</span></p>
              </header>
              <div className='card-book__direito__content'>
                <p className="card-book__description">{Descricao}</p>
              </div>
              <div className='card-book__problem'>
                <p className='card-book__problem__link'>Relatar um problema com este produto</p>
              </div>
          </div>     
      </div>
    )
  }

export default CardBook