# ProgressBlock

## Прототип блока Progress для использования в мобильных web-приложениях.
Основное предназначение блока отображать процесс выполнения процессов и их прогресс
выполнения.

## Состояния
- Normal – базовое состояние, в котором путём задания Value можно управлять
размером дуги, отражающей некоторый параметр или прогресс процесс. Начало
дуги соответствует 12 часам, конец дуги при увеличении параметра Value
движется по направлению часовой стрелки и достигает начала при значении;
- Animated – независимое состояние, при котором блок или его элементы
начинают вращаться с некоторым периодом по часовой стрелке.
- Hidden – состояние скрывающее блок со страницы.

## Использование
Для использования блока нужно создать инстанс класса Progress
```
const progress = new Progress(id, parent_id, initial_state, initial_value);
```
Где параметры конструктора:   
`id` - id блока на странице;    
`parent_id` - id контейнера, в который будет отрендерен блок (по дефолту body);   
`initial_state` - начальное состояние блока - одно из значений `"normal" | "animated" | "hidden"` (по дефолту `"normal"`);    
`initial_value` - начальное значение value - целое число от 0 до 100 (по дефолту 0). 

Методы:
```
progress.updateProgressValue(value)
```
позволяет передать новое значение Value (целое число от 0 до 100)
```
progress.updateProgressState(state)
```
позволяет передать новое состояние State (одно из значений `"normal" | "animated" | "hidden"`)

## Технологии
- JS без библиотек и фреймворков;
- SASS;
- HTML;
- Сборщик Webpack.

## Запуск приложения
Склонируйте репозиторий командой 
```
git clone https://github.com/lu7623/ProgressBlock.git
```
Установите зависимости 
```
npm install
```
Для запуска dev сервера на 9000 порту воспользуйтесь командой 
```
npm run serve
```
Для осуществления production сборки воспользуйтесь командой
```
npm run build
```

## Ссылка на деплой 
https://lu7623.github.io/ProgressBlock/