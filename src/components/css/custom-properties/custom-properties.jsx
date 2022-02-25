import React from 'react';

function CustomProperties() {

  return (
    <section className="conspect">
      <h1><dfn title="Кастомный (ударение на «а») означает «сделанный по индивидуальному проекту» или «заточенный под индивидуального пользователя»">Custom</dfn> properties</h1>
      <p>Спецификация <a href="https://www.w3.org/TR/css-variables-1/" target="_blank" rel="noopener noreferrer">CSS Custom Properties for Cascading Variables</a> была создана в 2012 и стала рекомендацией в конце 2015 года.</p>
      <p>Custom properties, кастомные свойства, пользовательские свойства, каскадные переменные, CSS-переменные — всё это название одного и того же.</p>
      <p>Кастомные свойства позволяют быстро и удобно повторно использовать значения CSS-свойств.</p>

      <h2>Определение</h2>
      <p>Именовать кастомное свойство можно произвольно, но лучше делать это информативно — это облегчает чтение больших файлов. Имя любого кастомного свойства начинается с двух дефисов:</p>
      <pre>{`:root {
    --basic-color: #06c;
    --accent-color: #006;
}`}
      </pre>
      <p>Псевдокласс :root находит корневой элемент дерева документа. В HTML :root находит элемент &lt;html&gt; и идентичен селектор по тегу html, но его специфичность выше. В SVG такой селектор выберет корневой элемент &lt;svg&gt;. Обратите внимание, что кастомные свойства чувствительны к регистру.</p>
      <p className="hl-8">Значением кастомного свойства может быть любое значение CSS-свойства: #000, cover, 20px, 1.5, flex, 0 auto.</p>

      <h2>Использование</h2>
      <p>После определения кастомного свойства, мы можем начать его использовать с помощью функции var().</p>
      <pre>{`.about {
    background-color: var(--basic-color);
    color: var(--accent-color);
}`}
      </pre>
      <p>Функция var() может использоваться вместо любой части значения в любом свойстве элемента. Использовать его в качестве имени свойства, селектора или где угодно, кроме значения CSS-свойства — нельзя.</p>
      <p>Если в CSS-свойстве использовать кастомное свойство с неподходящим значением, то CSS-свойство будет работать с начальным значением этого CSS-свойства.</p>
      <pre>{`:root {
    --not-a-color: 20px;
}

p {
    background-color: red;
    background-color: var(--not-a-color);
}`}
      </pre>
      <p>В этом примере &lt;p&gt; будет иметь прозрачный цвет (начальное значение background-color), а не красный фон. Алгоритм работы здесь такой: первый фон переопределится вторым фоном, но так как второй фон имеет неправильное значение 20px, то значением для фона станет значение по умолчанию.</p>

      <h2>Каскадирование и наследование</h2>
      <p>Кастомное свойство можно объявить в корневом элементе и такое свойство будет наследоваться элементам во всём документе. Если пользовательское свойство имеет одинаковое имя и объявляется несколько раз, то стандартные правила каскада помогают разрешить конфликт.</p>
      <pre>{`:root {
    --color: blue;
}

div {
    --color: green;
}

.alert {
    --color: red;
}
<body>
    <p>Станет синим, так как унаследован от корневого элемента</p>
    <div>Станет зеленым, так как цвет взят у селектора 'div'</div>
    <div class="alert">
        Этот текст станет красного цвета
        <p>И даже этот текст будет красного цвета, так как он будет унаследован от '.alert'</p>
    </div>
</body>`}
      </pre>

      <h2>Значение по умолчанию</h2>
      <p>Когда мы используем кастомное свойство, мы также можем установить значение по умолчанию. Таким образом, если такое свойство не определено в месте использования, оно вернётся к значению по умолчанию.</p>
      <pre>{`:root {
    /* удалили кастомное свойство --basic-color */
}

h1 {
    color: var(--basic-color, rebeccapurple);
}
<h1>
  Заголовок пурпурного цвета,
  так как '--basic-color' не определён
</h1>`}
      </pre>

      <h2>Динамическое изменение</h2>
      <p>Динамическое измение — это одно из преимуществ использования кастомных свойств. Дело в том, что они живут постоянно, а не только в вашем коде во время разработки. Если изменить значение кастомного свойства, то оно изменится для всех экземляров.</p>
      <pre>{`:root {
    --basic-color: #fff;
    --accent-color: #000;
}

h1 {
    background-color: var(--basic-color);
    color: var(--accent-color);
}

.about-header {
    background-color: var(--basic-color);
    color: var(--accent-color);
}

.footer {
    background-color: var(--basic-color);
    color: var(--accent-color);
}`}
      </pre>
      <p>После первого определения можно изменить значение кастомных свойств, например с помощью JavaScript. В этом случае цвет поменяет сразу несколько элементов: h1, .about-header и .footer.</p>
      <pre>{`:root {
    --basic-color: #111;
    --accent-color: #eee;
}`}
      </pre>
      <p>Это наглядный пример того, как сделать светлую и тёмную тему сайта. Нужно всего лишь переопределить значение кастомного свойства и весь сайт перекрасится динамически.</p>

      <p>Давайте создадим свойство <code>--box-shadow-color</code> и зададим ему значение tomato. Чтобы использовать это значение в коде, нужно передать его в функцию var().</p>
      <pre>{`.shady {
  --box-shadow-color:
    tomato;
  box-shadow:
    0 0 0 5px
    var(--box-shadow-color);
}`}
      </pre>
      <p>Мы сейчас объявили новое свойство, которое потом можно повторно использовать снова и снова. А ещё свойства box-shadow-color никогда не было в природе и чтобы менять тени, например, по наведению, приходилось переписывать box-shadow целиком. А теперь по ховеру можно просто поменять значение переменной. Круто?</p>
      <pre>{`.shady {
  --box-shadow-color:
    tomato;
}
.shady:hover {
  --box-shadow-color:
    plum;
}`}
      </pre>
      <p>Если вы используете кастомное свойство, которое почему-то не было объявлено, то можно указать его значение по умолчанию, которое будет использовано в таком случае. Ваш компонент тогда можно будет настроить, но без настройки он не сломается.</p>
      <pre>{`.shady {
  font-size:
    var(
      --font-size,
      12px
    );
}`}
      </pre>
      <p>Из-за того, что это кастомные свойства, а не просто доллары с автозаменой, они ведут себя как обычные свойства: наследуются вглубь для всех детей элемента и не видны между элементами-соседями. Чтобы переменную точно было видно во всём документе, её нужно задать самому корневому элементу html, но лучше даже :root, на случай если это корневой элемент svg.</p>
      <pre>{`
      :root {
        --font-size: 12px;
        --theme-color:
          tomato;
      }`}
      </pre>
      <p>Самое крутое, что переменные можно переопределять внутри медиавыражений. Например, если окно больше каких-то размеров, теперь не нужно копировать весь блок и менять его под новую ширину, достаточно поменять нужные кастомные свойства.</p>
      <pre>{`
      @media (min-width: 320px) {
        .shady {
          --font-size: 48px;
        }
      }`}
      </pre>
      <p>Кастомные свойства можно использовать даже внутри функции calc(), которая посчитает результат выражения внутри. Уже не очень похоже на привычный CSS, правда? Стоит ли говорить, что все препроцессоры уже умерли от зависти, глядя на такое.</p>
      <pre>{`.shady {
  font-size:
    calc(
      var(--font-size)
      * 2
    );
}`}
      </pre>
      <p>Ещё кастомные свойства становятся идеальным транспортом для данных между скриптами и стилями. Например, вы можете динамически считать координаты мыши в JS и пробрасывать их в кастомные свойства через setProperty в нужный элемент.</p>
      <pre>{`
      element
      .style
      .setProperty(
        '--pointer-left',
        event.clientX
      );`}
      </pre>
      <p>Дальше в стилях уже можно решить: использовать их в top и left или transform: translate(). И наоборот: значение свойства можно получить в JS с помощью getPropertyValue.</p>
      <p><a href="https://www.w3.org/People/Bos/CSS-variables" target="_blank" rel="noopener noreferrer">Why “variables” in CSS are harmful – an essay</a></p>
      <p><a href="http://zmeika.name/2017/03/02/custom-css-properties-basics.html" target="_blank" rel="noopener noreferrer">Пользовательские свойства CSS. Основы</a></p>
      <p><a href="https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/" target="_blank" rel="noopener noreferrer">It’s Time To Start Using CSS Custom Properties</a></p>
      <p><a href="https://css-live.ru/tricks/malenkie-xitrosti-kastomnyx-svojstv-css-peremennyx.html" target="_blank" rel="noopener noreferrer">Маленькие хитрости кастомных свойств (CSS-переменных)</a></p>
      <p><a href="http://odinokun.com/2019-12-18-7-primerov-ispolzovaniya-kastomnyh-css-svojstv.html" target="_blank" rel="noopener noreferrer">Семь примеров использования кастомных CSS-свойств</a></p>
    </section>
  );
}
export default CustomProperties;