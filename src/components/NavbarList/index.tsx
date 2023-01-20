import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CartButtonHeader from '../CartButtonHeader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ESupportedLangs } from '../../config/i18nConfig';
import { useState, useEffect, useCallback } from 'react';
import { changeLanguageMy } from '../../store/languageSlice';
import { useDebounce } from '../../hooks/use-debounce';
import { useGetGoodsQuery } from '../../store/goodsApi';

export interface INavbarListProps {}

export default function NavbarList(props: INavbarListProps) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const currentLanguage = useAppSelector((state) => state.lang).currentLanguage;
  // console.log('1');

  // useEffect(() => {
  //   console.log(debounced);
  // }, [debounced]);

  const onChangeLangHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      i18n.changeLanguage(e.target.value);
      dispatch(changeLanguageMy(e.target.value));
    },
    [i18n, dispatch]
  );

  // const onClickSearchHandler = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ): void => {
  //   console.log(e.target);
  // };

  const navigate = useNavigate();
  const showCartHandler = useCallback(() => {
    navigate('/cart');
  }, [navigate]);

  // const showModalHandler = () => {};

  // const hideCartHandler = () => {
  //   // setCartIsVisible(false);
  // };
  const userName = user.name ? user.name : 'Не авторизован';

  return (
    <Container>
      {/* Belosvet&copy;.  */}
      <Navbar.Brand>Менеджер: {userName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto">
          <Link to="/" className="me-2">
            Головна
          </Link>
          <Link to="/about" className="me-2">
            About
          </Link>
        </Nav>
        <Nav>
          <Form.Select
            size="sm"
            aria-label="Default select example"
            className="w-auto"
            onChange={onChangeLangHandler}
            value={currentLanguage}
          >
            <option value={ESupportedLangs.ua}>{ESupportedLangs.ua}</option>
            <option value={ESupportedLangs.ru}>{ESupportedLangs.ru}</option>
          </Form.Select>
        </Nav>
      </Navbar.Collapse>
      <CartButtonHeader onClick={showCartHandler} />
    </Container>
  );
}
