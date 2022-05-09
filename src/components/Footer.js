import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Присоединяйтесь к нам, чтобы отслеживать походы
                </p>
                <p className='footer-subscription-text'>
                    Можете подписаться в любое время
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Ваш Email'
                        />
                        <Button buttonStyle='btn--outline'>Подписаться</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>О нас</h2>
                        <Link to='/sign-up'>Как это работает</Link>
                        <Link to='/'>Отзывы</Link>
                        <Link to='/'>Карьера</Link>
                        <Link to='/'>Инвесторы</Link>
                        <Link to='/'>Условия Обслуживания</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Связаться с нами</h2>
                        <Link to='/'>Контакты</Link>
                        <Link to='/'>Поддержка</Link>
                        <Link to='/'>Спонсорство</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>

                    <div class='footer-link-items'>
                        <h2>Социальные сети</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>VK</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Telegram</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            WayToGo

                        </Link>
                    </div>
                    <small class='website-rights'>WayToGo © 2022</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link vk'
                            to='/'
                            target='_blank'
                            aria-label='Vk'
                        >
                            <i class='fab fa-vk' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link tg'
                            to='/'
                            target='_blank'
                            aria-label='Tg'
                        >
                            <i class='fab fa-telegram' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
