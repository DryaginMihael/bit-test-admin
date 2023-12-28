# Тестовое задание

Проет задеплоен [тут](https://bit-test-admin.vercel.app/)

## Задача:

Реализовать первый экран пользовательского интерфейса панели администратора, который будет отображать список пользователей с функциями поиска в таблице и сортировки по количеству токенов. По нажатию на пользователя должен отображаться всплывающий боковой элемент (drawer) с графиком расходов за месяц и таблица с личными данными пользователя.

Текст оригинального задания: [документ](https://docs.google.com/document/d/1nXX2Qc4584BsH0NQgUiWXZUMOEE--yFFxewK_WdEKSs/edit)

Макет: [открыть макет](https://www.figma.com/file/XqFgvsYqbStEQHQbTozc1t/TestBit-case?type=design&node-id=780-25430&mode=design&t=nMw4OF5vs5imbcHp-0)

## Технический стек:
React, Redux + redux-toolkit, TailwindCSS, Jest + react-testing-library, fontawesome, recharts, eslint, prettier

## Реализовано:

- сделана таблица с массивом пользователей с [ресурса](https://jsonplaceholder.typicode.com/) (так как формат данных от API отличаеся от нужного - данные модифицируются на клиенте)
- поддержана пагинация
- поддержана сортировка по количеству токенов (в рамках одной страницы)
- поиск по имени пользователя (с delay, фильтр тоже на клиенте, т.к. API не работает с поиском)
- по клику на пользователся открывается drawer (внутри график и таблица с данными по пользователю)
- реализован адаптив
- настроен eslint и prettier по этой [статье](https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc) (настройка eslint для React взята из [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/))
- добавлены GitHub actions для CI/CD
