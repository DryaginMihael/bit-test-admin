# Тестовое задание для компании БИТ

Текст задания: [документ](https://docs.google.com/document/d/1nXX2Qc4584BsH0NQgUiWXZUMOEE--yFFxewK_WdEKSs/edit)

Макет: [открыть макет](https://www.figma.com/file/XqFgvsYqbStEQHQbTozc1t/TestBit-case?type=design&node-id=780-25430&mode=design&t=nMw4OF5vs5imbcHp-0)

На данный момент:

- сделана таблица с массивом замоканых пользователей
- поддержана сортировка по количеству токенов
- поиск по имени пользователя (с delay)
- реализована навигация по страницам
- по клику на пользователся открывается drawer
- реализован адаптив

Не реализовано:

- использование API
- pixel perfect layour
- содержимое drawer (график и таблица)
- код неотрефакторен (например таблицу надо вынесть в UI)
- не используется state manager

Настроен eslint и prettier по этой [статье](https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc)
Настройка eslint для React взята из [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/)

Настроены GitHub actions для CI/CD
