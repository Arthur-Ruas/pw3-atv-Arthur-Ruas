import React from 'react'
import Image from '../../assets/livro.jpg'
import './cardBook.css'

const CardBook = () => {
    return (
      <div className="card-book">
          <div className='card-book__esquerdo'>
              <img className="card-book__image" src={Image} alt="Capa do livro de Isaac Asimov"/>
          </div>
          <div className='card-book__direito'>
              <header className='card-book__direito__header'>
                  <h3 className="card-book__title">Babilônia: A mesopotâmia e o nascimento da civilização</h3>
                  <p className="card-book__author">por <span>Paul Kriwaczek</span></p>
              </header>
              <div className='card-book__direito__content'>
                <p className="card-book__description">Em Babilônia, Paul Kriwaczek conta a história da antiga Mesopotâmia, desde as primeiras povoações, em torno de 5400 a.C., até a chegada dos persas no século VI a.C.</p>

                <p>O autor faz a crônica da ascensão e queda do reino babilônico durante esse período e analisa suas numerosas inovações materiais, sociais e culturais. O povo da Mesopotâmia lançou as bases do que hoje conhecemos como civilização – com o nascimento da escrita, do estado centralizado, da divisão do trabalho, da religião organizada, da matemática e da lei, entre muitas outras coisas fundamentais que nos servem até hoje.</p>

                <p>Nas cidades que construíram se desenrolou metade da história humana. No cerne da magistral narrativa de Kriwaczek está a glória da Babilônia ― “o portal dos deuses” ―, que teve seu apogeu no reinado do soberano amorita Hamurábi, que unificou a cidade entre 1800 e 1750 a.C. Embora o poder babilônico viesse a crescer e depois declinar nos séculos seguintes, a Babilônia preservou sua importância como centro cultural, religioso e político por mais de 4 mil anos.</p>
              </div>
          </div>     
      </div>
    )
  }

export default CardBook