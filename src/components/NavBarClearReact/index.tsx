import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ContainerClearReact';
import { useTranslation } from 'react-i18next';
import './style.scss';
import { ESupportedLangs } from '../../config/i18nConfig';

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const { i18n } = useTranslation();

  const onChangeLangHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Container>
      <div className="header">
        <div className="header__top">
          <div className="header__column header__column--left">
            <nav className="navbar">
              <span className="navbar__links">
                <Link className="navbar__link" to="/">
                  Home
                </Link>
                <Link className="navbar__link" to="/about">
                  About site
                </Link>
                <Link className="navbar__link" to="/login">
                  Login
                </Link>
              </span>
            </nav>
          </div>
          <div className="header__column header__column--right">
            <select className="form-select" onChange={onChangeLangHandler}>
              <option value={ESupportedLangs.ua} className="lang">
                UA
              </option>
              <option value={ESupportedLangs.ru} className="lang">
                RU
              </option>
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
}
