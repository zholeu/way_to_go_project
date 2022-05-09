import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Типы Путешествий</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/na-bajdarkah-po-pite.jpg'
                            text='Прогулки на каяках'
                            label='Для начинающих'
                            path='/services'
                        />
                        <CardItem
                            src='images/pension-zellamsee-urlaub003.jpg'
                            text='Велопрогулки по невиданным просторам'
                            label='Популярное'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/cropped-shutterstock_1090646606.jpg'
                            text='Пешие походы'
                            label='Популярное'
                            path='/services'
                        />
                        <CardItem
                            src='images/hiking-adventure.jpg'
                            text='Восхождение на горы'
                            label='Экстрим'
                            path='/products'
                        />
                        <CardItem
                            src='images/shutterstock_508476382.jpg'
                            text='Детские походы'
                            label='Активный отдых'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Cards;
