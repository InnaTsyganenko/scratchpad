import React from 'react';

function StyleInJS() {

  return (
    <section className="conspect">
      <h1>Динамические стили элементов</h1>
      <h2>Свойство style</h2>
      <p>С помощью свойства style можно управлять стилями элемента. После style через точку указывают то CSS-свойство, которое нужно изменить. Чтобы изменить стиль элемента, указанному свойству нужно присвоить новое значение</p>
      <pre>{`let element = document.querySelector('p');

// Зададим абзацу зелёный цвет текста
element.style.color = 'green';`}
      </pre>
      <p>Стили, заданные с помощью свойства style, работают так же, как если бы их указали в разметке в атрибуте style самого элемента. <span className="hl-">Они имеют больший приоритет, чем CSS-правила из файла со стилями.</span></p>
      <p>Свойство style позволяет не только изменять стили, но и получать их. Правда, с его помощью можно узнать только те стили, которые заданы в разметке в атрибуте style самого элемента. Такие стили ещё называют встроенными.</p>
      <p>Используйте style только в тех случаях, когда с помощью классов задачу решать неудобно.</p>
      <p>Чтобы получить все стили, которые применяются к элементу, используйте метод window.getComputedStyle.</p>
      <p>В JavaScript для разделения слов используется «верблюжий» стиль(CamelCase). Например:</p>
      <table>
        <tbody>
          <tr>
            <td>CSS</td>
            <td>JаvaScript</td>
          </tr>
          <tr>
            <td>font-size</td>
            <td>fontSize</td>
          </tr>
          <tr>
            <td>background-color</td>
            <td>backgroundColor</td>
          </tr>
          <tr>
            <td>border-left-width</td>
            <td>borderLeftWidth</td>
          </tr>
        </tbody>
      </table>
      <p>Если мы получаем данные из поля ввода, то чтобы задать единицы измерения, используем конкатенацию:</p>
      <pre>{`longread.style.fontSize = sizeSetting.value + 'px';

// Допустим, пользователь ввёл число 16
longread.style.fontSize = 16 + 'px'; // Результат: '16px'`}
      </pre>
      <p>Чтобы узнать, какие стили уже применяются к элементу, используйте метод window.getComputedStyle.</p>
      <p>Чтобы показать пароль, нужно превратить поле ввода пароля в текстовое поле ввода. Чтобы изменить тип поля ввода, нужно записать в свойство type новое значение:</p>
      <pre>{`let input = document.querySelector('input');

// Сделаем input текстовым полем ввода
input.type = 'text';`}
      </pre>

      <h2><span className="hl-5">Практика</span></h2>
      <h3><span className="hl-6">Меняем стили статьи</span></h3>
      <p>На новостном сайте мы будем изменять стили отдельной статьи - цвет текста и фона, размер текста.</p>
      <p>Выбранное значение хранится в свойстве value выпадающего списка. Чтобы изменить цвет текста на тот, который выбрал пользователь, нужно записать выбранное значение в свойство style статьи. Используем обработчик событий onchange. Например:</p>
      <pre>{`// Находим выпадающий список
let select = document.querySelector('select');

// Добавляем списку обработчик событий
select.onchange = function () {
// Меняем цвет текста на выбранное значение
longread.style.color = select.value;
};`}
      </pre>
      <p>Если сдвинуть ползунок влево, текст должен стать меньше, а если вправо — больше. Выбранный размер должен выводиться на страницу рядом с полем.</p>
      <p>Ползунок позволяет выбрать число из указанного диапазона. В нашем случае это целое число от 8 до 48. Значение по умолчанию - 14, потому что размер шрифта в статье сейчас 14px. Значение получим с помощью свойства value.</p>
      <p>Чтобы показать выбранное число, запишем его в текстовое содержимое элемента с классом pixels. Нам нужно получать значение, когда пользователь передвигает ползунок. Используем обработчик событий onchange. Например:</p>
      <pre>{`// Находим поле и элемент для вывода значения
let range = document.querySelector('input');
let span = document.querySelector('span');

// Добавляем полю обработчик событий
range.onchange = function () {
// Выводим значение на страницу
span.textContent = range.value
}`}
      </pre>
      <p>В CSS за размер шрифта отвечает свойство font-size. В JavaScript нельзя использовать дефисы в названиях свойств, вместо этого для разделения слов используется «верблюжий» стиль. Например:</p>
      <pre>{`CSS	JаvaScript
font-size	fontSize
background-color	backgroundColor
border-left-width	borderLeftWidth`}
      </pre>
      <p>Получается, чтобы изменить размер шрифта, нам нужно присвоить новое значение свойству fontSize:</p>
      <pre>{`let element = document.querySelector('p');

// Зададим абзацу размер шрифта 24px
element.style.fontSize = '24px';
// также нужно указать единицы измерения
longread.style.fontSize = sizeSetting.value + 'px';`}
      </pre>
      <p>новое значение надо получать при каждом изменении положения ползунка, используем oninput.</p>

      <h3><span className="hl-6">Настраиваем цвет фона</span></h3>
      <p>За цвет фона в CSS отвечает свойство background-color.</p>

      <h3><span className="hl-5">Страница регистрации на новостном сайте.</span></h3>
      <h4><span className="hl-6">чтобы пользователи могли по желанию увидеть пароль, который вводят.</span></h4>
      <p>Чтобы показать пароль, поле ввода пароля превращают в текстовое поле ввода. Для этого его тип изменяют на text. За тип в JavaScript отвечает свойство type. Чтобы изменить тип поля ввода, нужно записать в свойство type новое значение:</p>
      <pre>{`let input = document.querySelector('input');

// Сделаем input текстовым полем ввода
input.type = 'text';`}
      </pre>

      <h4><span className="hl-6">Используем чекбокс, чтобы показать пароль</span></h4>
      <p>запрограммировать шкалу сложности пароля, которая будет напоминать пользователям, что лучше придумать пароль подлиннее.</p>
      <p>Чтобы выполнить задачу, нам нужно менять тип поля с паролем, когда пользователь ставит галочку в чекбоксе «Показать пароль».</p>
      <p>Поле для ввода пароля имеет класс password. Найдём его, запишем в переменную и сделаем обычным текстовым полем.</p>
      <p>Чекбокс «Показать пароль» имеет класс show-password. Найдём его, запишем в переменную и добавим ему обработчик. Затем переместим инструкцию, изменяющую тип поля, внутрь обработчика.</p>
      <p>Если чекбокс выключили, пароль должен прятаться. Но сейчас этого не происходит: достаточно поставить галочку один раз, и пароль будет виден всегда. Как это исправить?</p>
      <p>Добавим в обработчик событий условную конструкцию и будем проверять, включён ли чекбокс. Если включён, поле с паролем нужно сделать текстовым. А если выключен, то полю нужно вернуть тип password. Чтобы проверить состояние чекбокса, используем свойство checked.</p>
      <pre>{`// Проверяем, включён ли чекбокс
if (showPassword.checked) {
// Показываем пароль
} else {
// Прячем пароль
}`}
      </pre>
      <h4><span className="hl-6">Изменяем ширину полоски</span></h4>
      <p>Мы запрограммировали функцию «показать пароль». Теперь нам нужно сделать шкалу, которая покажет, насколько надёжен придуманный пользователем пароль. Шкала — это тонкая полоска в нижней части поля «Пароль», которая должна расти с каждым введённым символом. Если пароль слишком короткий, полоска должна быть красной, если пароль средней длины — жёлтой, а если пароль достаточно длинный — зелёной.</p>
      <p>Создавать отдельный класс для каждой длины пароля было бы неудобно, поэтому мы будем изменять стиль элемента с помощью свойства style. Так как она располагается горизонтально, то менять надо свойство width, отвечающее за ширину элемента.</p>
      <p>Если ширина элемента задана в процентах, она рассчитывается относительно ширины родительского элемента. Если ширина родителя 200px, то вложенный элемент с шириной 50% будет иметь абсолютную ширину 100px.</p>
      <p>Полоска имеет класс security-bar. Найдём её, запишем в переменную и зададим ей ширину 50%.</p>
      <p>Нам нужно, чтобы ширина полоски менялась вместе с длиной введённого пароля. Длина введённого значения хранится в его свойстве length.</p>
      <pre>{`let input = document.querySelector('input');

console.log(input.value); // Выведет: Кекс
console.log(input.value.length); // Выведет: 4`}
      </pre>
      <p>С каждым введённым символом полоска должна увеличиваться на 10% от ширины родителя.</p>
      <p>Выходит, чтобы получить ширину полоски, нам нужно умножить длину пароля на число 10. И не забудем добавить с помощью конкатенации единицы измерения — проценты:</p>
      <pre>{'securityBar.style.width = password.value.length * 10 + '%';'}</pre>
      <p>Используем обработчик событий oninput чтобы ширина полоски менялась одновременно с длиной пароля. Добавим его полю ввода пароля и свяжем ширину полоски и длину введённого значения.</p>
      <p>Что случится, если ширина полоски окажется больше 100%? Всё зависит от того, какое значение указано в CSS свойстве overflow родительского элемента. Мы использовали значение hidden, поэтому «лишняя» часть полоски просто не будет отображаться.</p>

      <p>Теперь нам нужно задать ей правильный цвет. Для этого нам понадобится условная конструкция, в которой мы будем сравнивать длину пароля password.value.length с разными числами. Позаботимся о своём удобстве заранее — запишем длину пароля в отдельную переменную и будем использовать именно её.</p>
      <pre>{'let passLength = password.value.length;'}</pre>
      <p>Длина пароля меняется с каждым введённым символом. Чтобы в переменной passLength всегда было актуальное значение, присваивать его надо внутри обработчика событий oninput.</p>
      <p>Добавим внутрь обработчика oninput условную конструкцию и, если условие истинно, зададим полоске красный цвет фона:</p>
      <pre>{`if (passLength &lt;= 5) {
        securityBar.style.backgroundColor = 'red';
      }`}
      </pre>
      <p>Добавим в нашу условную конструкцию ветку else if и скажем JavaScript покрасить полоску в жёлтый цвет, если пароль длиннее 5 символов, но короче 10.</p>
      <p>Но если пароль длиной 10 символов или больше, полоска должна стать зелёной. Мы могли бы добавить ещё одну ветку else if, но в данном случае хватит и просто else.</p>
      <pre>{`if (passLength &lt;= 5) {
        // Инструкции выполнятся, если истинно первое условие
      } else if (passLength &gt; 5 && passLength &lt; 10) {
        // Инструкции выполнятся, если истинно второе условие
      } else {
        // Инструкции выполнятся, если оба условия ложны
      }`}
      </pre>
      <p>Добавим третью ветку в нашу условную конструкцию и убедимся, что цвет полоски меняется с красного на жёлтый, а после — с жёлтого на зелёный.</p>
    </section>
  );
}
export default StyleInJS;