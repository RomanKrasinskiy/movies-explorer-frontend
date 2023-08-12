## Русский

# Кинопоиск - Фронтенд часть
Репозиторий содержит код фронтенд части веб-приложения разработанного для любителей кино и позволяющее находить информацию о различных фильмах, сохранять их себе на аккаунт, а также смотреть трейлеры.

# Описание и функциональность
Проект состоит из стартовой страрницы-портфолио автора, отдельными страницами регистрации и авторизации с соответствующей валидацией полей. При успешной авторизации пользователю становятся доступны дополнительно страницы: "Фильмы", "Сохранённые фильмы", "Аккаунт". При успешной авторизации пользователь попадает на базовую страницу - "Фильмы" где и производится основной поиск фильмов среди стороннего API. Реализована возможность поиска фильмов только среди Короткометражек(длительностью не более 40 минут). Достаточно ввести запрос в поле поиска, как возникнут карточки фильмов с возможностью клика на превью и произойдёт переход на трейлер фильма на YouTube. При клике на иконку лайка(иконки заметки) карточка фильма сохранится и будет отображена на отдельной странице с "Сохранённые фильмы". На любой из страниц фильм легко удалить при повторном нажатии на иконку лайка или крестика. Страница "Аккаунт" позволяет редактировать имя пользователя и email.

## Демонстрация
Ознакомьтесь с [демонстрационной версией](https://kinomovies.nomoreparties.sbs) проекта, чтобы увидеть его в действии.

## Backend
Ознакомьтесь с [бэкендом этого проекта](https://github.com/RomanKrasinskiy/movies-explorer-api.git) созданным с использованием Node.js, Express.js и MongoDB.

## Features
* Разработаны компоненты React.

* Реализована логика регистрации, входа в систему, редактирования профиля и страницы сохраненных фильмов.

* Внедрены асинхронные запросы к серверному API.
* Управление авторизованными и неавторизованными состояниями, позволяющее пользователям сохранять фильмы в своем профиле.
* Реализован клиентский фильтр.

## Установка
Клонируйте репозиторий: 

```
git clone https://github.com/RomanKrasinskiy/movies-explorer-frontend.git
```
Установите зависимости: 
```
npm install
```
Запустите проект:
```
npm start
```


## English

# Movies Explorer - Frontend
The repository contains the frontend code of a web application developed for movie enthusiasts. It allows users to find information about various movies, save them to their account, and watch trailers.

# Description and Functionality
The project consists of a portfolio landing page of the author, separate registration and login pages with corresponding field validation. Upon successful login, the user gains access to additional pages: "Movies", "Saved Movies", and "Account". After successful login, the user is redirected to the base page - "Movies", where the main movie search is performed using a third-party API. The ability to search for short films only (with a duration of up to 40 minutes) has been implemented. Simply enter a search query in the search field, and movie cards will appear with the option to click on a preview, leading to the movie's trailer on YouTube. Clicking on the like icon (bookmark icon) will save the movie card, which will then be displayed on a separate "Saved Movies" page. Any movie can be easily removed from any page by clicking the like icon or the cross icon. The "Account" page allows users to edit their username and email.

## Live Demo
Check out the [live demo](https://kinomovies.nomoreparties.sbs) of the project to see it in action.

## Backend
Check out the [backend of this project](https://github.com/RomanKrasinskiy/movies-explorer-api.git) made with **Node.js**, **Express.js** and **MongoDB**.

## Features
* Designed React components.
* Developed logic for registration, login, profile editing, and saved movies pages.
* Implemented asynchronous requests to the server API.
* Managed authorized and unauthorized states, allowing users to save movies to their profile.
* Implemented client-side filtering.

## Installation
Clone the repository: 

```
git clone https://github.com/RomanKrasinskiy/movies-explorer-frontend.git
```
Install dependencies: 
```
npm install
```
Run the project: 
```
npm start
```
