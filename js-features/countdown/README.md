# Игра-кликер

Домашнее задание к занятию 1.1 «Возможности JavaScript в браузере».

## Описание 

Для участия в розыгрышах товаров в социальных сетях, требуется разработать таймер
обратного отсчёта. По окончанию счёта должно всплыть уведомление: «Вы победили в конкурсе»

![Demo](./demo.gif)

### Исходные данные

Основная HTML-разметка

### Процесс реализации

1. Прочитайте данные о текущем количестве секунд таймера в переменную. 
Это будет стартовое значение таймера
2. Каждую секунду уменьшайте значение таймера на 1
3. По окончанию счёта выведите сообщение «Вы победили в конкурсе!»

### Повышенный уровень сложности (не обязательно)

Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
(например, 04:25:19), где *hh* - двухзначное число часов, *mm* - минут, 
*ss* - секунд.

![Extended Demo](./extended-demo.gif)

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Функция *alert*
2. Функция *setTimeout/setInterval*
3. Свойство *textContent*

</details>

## Решение задач
1. Перейти в папку задания. `cd ./js-features/countdown`.
2. Открыть файл `task.js` в вашем редакторе кода и выполнить задание.
3. Открыть файл `task.html` в вашем браузере и убедиться в правильности выводимых результатов.
4. Добавить файл `task.js` в индекс git с помощью команды `git add %file-path%`, где %file-path% - путь до целевого файла. `git add task.js`.
5. Сделать коммит используя команду `git commit -m '%comment%'`, где %comment% - это произвольный комментарий к вашему коммиту. `git commit -m 'first commit countdown'`.
6. Опубликовать код в репозиторий homeworks с помощью команды `git push -u homeworks master`.
7. Прислать ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].

[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/REAMDE.md
[6]: https://netology.ru/

*Никаких файлов прикреплять не нужно.*

Все задачи обязательны к выполнению для получения зачета. Присылать на проверку можно каждую задачу по отдельности или все задачи вместе. Во время проверки по частям ваша домашняя работа будет со статусом "На доработке".

Любые вопросы по решению задач задавайте в группе на Facebook.