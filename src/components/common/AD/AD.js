import React from 'react';
import PropTypes from 'prop-types';
import styles from './AD.module.scss';

const AD = ({ name, prize, image}) => {
  return (
    <div className='row'>
      <div className={`col-6 ${styles.photo}`}>
        <img src={image} alt={name}></img>
      </div>
      <div className={`col-6 ${styles.specyfication}`}>
        <h3>{prize}</h3>
        <div className='row'>
          <div className='col-4'>
            Rozmiar
          </div>
          <div className='col-4'>
            sztuk
          </div>
          <div className='col-4'>
            ADD to Cart
          </div>
        </div>
        <div>
        Wykonany z najwyższej jakości bawełny, biały t-shirt z tonalnym napisem EKIPATONOSI z przodu. Do znakowania użyto techniki przestrzennego sitodruku strukturalnego. Idealnie sprawdzi się dla ludzi ceniących sobie klasykę.

        Prostota koszulki świetnie współgra z innymi częściami garderoby. T-Shirty z kolekcji TONAL dzięki bazowym kolorom oraz delikatnemu znakowaniu są uniwersalnym uzupełniem każej szafy.
        </div>
        <div>
        Cechy:
          bez szwów bocznych,
          dekolt wykończony dzianiną ściągaczową 1:1 z dodatkiem 5 % elastanu,
          taśma wzmacniająca na ramionach,
          krój ze szwami bocznymi - (dziecięce rozmiary).
        </div>
        <div>
        CZAS DOSTAWY: 48 GODZIN
        </div>
      </div>
    </div>
  );
};

AD.propTypes ={
  name: PropTypes.string,
  image: PropTypes.string,
  prize: PropTypes.string,
};

export default AD;
