# Tutorial

Так как на проекте не будет тайпскрипта, то советую пользоваться [PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)

!Важно, используется [`Next.js`](https://nextjs.org/docs/getting-started) это React с сервер сайд рендерингом. Тут главное понять как работает в нем роутинг. По сути каждый раз когда вы будете создвать новый файл в папке `pages`, то под него будет создаваться страничка. Подробнее [тут](https://nextjs.org/docs/routing/introduction)

## Линтеры

В проекте используется:

- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/docs/user-guide/getting-started)
- [style lint](https://stylelint.io/)
- [git simple hooks](https://www.npmjs.com/package/simple-git-hooks)

## Удобные либы которые добавлены в пекедж джейсон

- [React hook form](https://react-hook-form.com/) - очень удобно работать с формами
- [classnames](https://www.npmjs.com/package/classnames) - удобно миксовать классы
- [react-use](https://github.com/streamich/react-use) - кучу готовых хуков чтобы не придумывать велосипед
- [React Query](https://react-query.tanstack.com/installation) - удобная работа с запросами. Кеширует ваши запросы, дабы повторно их не исполнять.

## ~~Redux~~

Добавлять в проект просто так его не вижу смысла, будет нужен только тогда, когда проект сильно разрастется

## VS Code extensions

Также для тех кто пользуется VSCode я добавил список из нужных плагинов, которые нужно доставить, будет всплывашка которая предложит их установить, когда открыли проект в первый раз. Те кто пользуется webstorm в этом сетапе не нуждаются

## Структура создания компонента

Например мы создали компонент Button

Button:

- index.js - файл который импортит в себя основной компонент и отдает его наружу
- Button.jsx - само отображение файла
- Button.module.css - здесь храним стили если хотим пользоваться `css-modules`
- hooks.js - в том случае, если нужны кастомные хуки только для этого компонента
- icons or images - папка с иконками или картинками вцелом, так как стоит плагин `@svgr/webpack` то `svg` иконки можно импортить как компоненты
