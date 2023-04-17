import React from 'react';

function BasicJS() {

  return (
    <section className="conspect">
      <h1>Основы JavaScript</h1>
      <h2>JavaScript. Что это такое и как подключить его на страницу.</h2>
      <p>JavaScript — это язык сценариев(от англ. script). Это язык программирования, разработанный для воздействия на существующий объект или систему. JavaScript используется для создания и управления динамическим содержимым веб-сайта — всем, что перемещается, обновляется или иным образом изменяется на веб-странице <span className="hl-1">без перезагрузки</span>. JavaScript не меняет исходный файл с разметкой, но, выполняя инструкции, меняет страницу прямо в браузере пользователя.</p>
      <p>Код на языке JavaScript называют скриптом.</p>

      <h2>Стандарт ECMAScript</h2>
      <p>Чтобы JS во всех браузерах выполнялся одинаково (стандартно), существует стандарт ECMAScript (разработан совместно Netscape и Microsoft). Это именно стандарт, а JavaScript — реализация стандарта в вебе.</p>
      <p>Сам ECMAScript является объектно-ориентированным и задуман как базовый язык, к которому могут быть добавлены объекты любой конкретной области или контекста.</p>
      <p>Чтобы проиллюстрировать пример «стандарта», вспомним об обычной клавиатуре компьютера, которую мы используем каждый день. У подавляющего большинства клавиатур буквы расположены в одном и том же порядке. Пробел, клавиша Enter, стрелки и цифровой блок также расположены приблизительно одинаково. Это связано с тем, что большинство производителей клавиатур опираются на стандарт раскладки QWERTY. Так и производители браузеров в реализации JavaScript опираются на стандарт ECMAScript.</p>

      <h2>Спецификация</h2>
      <p>Спецификация — это документация к языку программирования. Обычно это большой документ с подробнейшим описанием языка. Cпецификация необходима разработчикам языка программирования — по ней дорабатывается язык, реализуются новые возможности.</p>
      <p>В любом языке программирования всегда есть неочевидные вещи. Понять, почему они работают именно так — поможет спецификация. Это последняя инстанция.</p>
      <p>Язык JavaScript определяет спецификация <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noopener noreferrer">ECMA-262</a>, её поддержкой занимается комитет <a href="https://github.com/tc39/proposals" target="_blank" rel="noopener noreferrer">TC39</a>.</p>

      <h2>DOM. Living Standard</h2>
      <p>В спецификации ECMA-262 приведена информация только касательно самого языка программирования. Сведений, которые относятся к применению JavaScript в браузере в ней нет. Они описаны в отдельном документе — <a href="https://dom.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">DOM. Living Standard</a>.</p>

      <h2>Где искать информацию</h2>
      <p>Портал <a href="https://developer.mozilla.org/ru/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>. Здесь вы найдёте описание API, примеры кода и другую полезную информацию. Многие разделы переведены на русский язык.</p>

      <h2>Подключение скриптов</h2>
      <p>Подключить внешним файлом:</p>
      <pre>{`<body>
  <!-- Содержимое страницы -->
  <script src="app.js"></script>
</body>`}
      </pre>

      <p>Инлайновый код. Код пишется внутри тега script:</p>
      <pre>{`<body>
  <h1>Hello, JavaScript</h1>
  <script>
  alert('Привет, JavaScript!');
  </script>
</body>`}
      </pre>
      <p>Чтобы подключить на страницу ещё один файл с кодом на JavaScript, снова используем тег script:</p>
      <pre>{`<body>
  <script src="themes.js"></script>
  <script src="likes.js"></script>
</body>`}
      </pre>
      <p><span className="hl-7">Если задан атрибут src, то содержимое тега <code>&lt;script&gt;</code> игнорируется.</span></p>
      <p>Браузер обрабатывает инструкции последовательно: сначала в первом файле, потом во втором — как будто они все находятся в одном месте. Если за тегом script находится разметка, она не отрисуется пока не выполнится скрипт (в случае с инлайновым кодом) или пока он не скачается с внешнего ресурса и не будет выполнен (при подключении внешнего файла). Поэтому мы будем подключать скрипт перед закрывающим тегом body — так мы будем уверены, что вся разметка отобразилась на странице и с ней можно работать.</p>
      <p>Программы часто разбивают на несколько файлов, обычно одному файлу соответствует одна задача: например, управление темами или подписка на рассылку.</p>

      <h2>Атрибуты defer и async</h2>
      <p>У тега <code>&lt;script&gt;</code> есть два атрибута, позволяющие указать, как загружать и выполнять внешние сценарии.</p>

      <h3>defer</h3>
      <p>Сценарии, подключаемые с применением атрибута defer, браузер загрузит в фоновом режиме, не прерывая отрисовку страницы. Выполнение таких сценариев произойдёт после завершения разбора html-документа. Причём неважно сколько сценариев подключается таким образом (с применением атрибута defer). Браузер дождётся завершения их загрузки и начнёт выполнять.</p>
      <p>При использовании атрибута defer стоит помнить об ещё одном важном нюансе. После разбора html-документа, браузер генерирует событие DOMContentLoaded. Это означает, что браузер разобрал HTML и построил DOM-дерево, при этом некоторые внешние ресурсы (изображения, стили и так далее) могли ещё не успеть загрузится. Событие DOMContentLoaded — своего рода сигнал для сценариев, которые опираются на DOM-элементы.</p>
      <p>Так вот, если для загрузки сценариев применялся атрибут defer, то событие DOMContentLoaded сгенерируется только после окончания загрузки и выполнения всех таких сценариев. Об этом важно помнить.</p>
      <p>defer следует применять, когда важна последовательность выполнения сценариев и готовность DOM. Применение defer снимает ограничение на подключение внешних сценариев в самом конце страницы. Поскольку разбор html-документа не прерывается, подключение может производиться в любом месте страницы.</p>

      <h3>async</h3>
      <p>Сценарии, подключаемые с применением атрибута async загружаются в фоне и выполняются по мере готовности. Последовательность выполнения не гарантируется. Кто первый загрузился, тот и выполнится раньше. При этом браузер не будет дожидаться загрузки и выполнения таких сценариев, чтобы сгенерировать событие DOMContentLoaded. Поэтому сценарии с async могут выполнится как перед готовностью DOM, так и после.</p>
      <p>Применять атрибуты defer и async имеет смысл только при подключении внешних сценариев. Если тег <code>&lt;script&gt;</code> используется без атрибута src, то атрибуты defer и async игнорируются. Поэтому, если воспользоваться одним из разобранных атрибутов и написать код внутри тега <code>&lt;script&gt;</code>, ожидаемого эффекта не будет.</p>
      <p className="hl-8">Атрибуты async и defer помогут оптимизировать загрузку и выполнение кода. Первый удобен для подключения счётчиков, аналитики и других подобных сценариев. Таким сценариям, как правило, не важна готовность DOM и последовательность выполнения. defer, наоборот, полезен там, где важна последовательность.</p>
      <img src="./img/js/whatwg-async-defer-diff.png" alt="Различия атрибутов defer и async" width="774" height="182" />
      <p>Когда внешний сценарий независим от выполнения других сценариев и не опирается на готовность DOM, имеет смысл воспользоваться атрибутом async. Примеры таких сценариев: всевозможные счётчики, внешние сервисы аналитики и так далее.</p>
      <p>Если вам требуется подключить только один сценарий к странице и вы подключаете его в самом конце страницы, перед закрывающим тегом body, то атрибуты defer/async можно не применять.</p>

      <h2>Комментарии</h2>
      <p>Комментарий — это текст, поясняющий код. Он не выводится в браузер и никак не влияет на работу программы.</p>
      <p>В JavaScript есть два вида комментариев:</p>
      <pre>{`// Однострочные комментарии
/* И многострочные. Они могут отключить сразу несколько строк кода. */`}
      </pre>
      <p>Пример полезных комментариев: причина выбора именно этого решения. Любую задачу можно решить несколькими способами. Комментарий может помочь объяснить выбор конкретного решения. Со временем вы сами можете вернуться к коду, прочитать этот комментарий, и в голову может прийти более удачное решение этой задачи. Комментарий поможет вспомнить, почему был выбран именно этот вариант.</p>
      <p>Есть ещё один полезный вид комментариев — JSDoc. Современные редакторы/IDE поддерживают формат описания комментариев в формате JSDoc. Это формат вводит правила на описание (комментирование) функций/классов. Например, он позволяет задокументировать параметры (какие типы принимает функция), результат выполнения функции и так далее.</p>
      <p>JSDoc — это больше, чем просто комментирование. Комментарии, написанные в таком формате умеют разбирать редакторы кода. Обычно такая функциональность либо встроена, либо решается за счёт установки расширения.</p>
      <p>Если редактор обнаружит описание функции в JSDoc, то при обращении к этой функции, он выведет подсказку. Перечислит параметры, укажет их тип и даже добавит описание функции. Подобные подсказки вы наверняка видели во время применения встроенных функций.</p>
      <p>Другая польза от JSDoc — возможность сгенерировать документацию. Специальные инструменты могут перебрать все модули проекта, вытащить из них комментарии в JSDoc и собрать красивую документацию.</p>
      <p>Если требуется закомментировать сразу блок кода, в VSCode для этого предусмотрена комбинация горячих клавиш — Ctrl + /</p>
      <blockquote><p><q>Комментарии в коде должны быть похожими на кружевные трусики: маленькими, прозрачными, и оставляющими достаточно места для воображения.</q></p><cite>Марк Цукерберг</cite></blockquote>

      <h2>Строгий режим</h2>
      <p>Главная задача строгого режима (strict mode) — уберечь разработчика от ошибок. Сделать невозможными некоторые безумные вещи, на которые раньше интерпретатор закрывал глаза. Это приводило к ошибкам на ровном месте.</p>
      <ul>
        <li>Строгий режим повышает требования к коду. </li>
        <li>Включение строго режима исправляет ошибки, которые мешают движку оптимизировать выполнение кода.</li>
        <li>Строгий режим запрещает использовать потенциально некорректные операции, устаревший синтаксис или зарезервированные слова для будущих версий языка.</li>
      </ul>
      <p>Для включения строгого режима применяется директива &quot;use strict&quot; или &apos;use strict&apos;.</p>
      <pre>{`'use strict';
  // Любой код далее будет работать в строгом режиме

  function inStrictMode() {
  'use strict';
  // Код функции работает в строгом режиме
  }
  // Код вне функции inStrictMode работает обычном режиме
  function noStrictMode() {
  // Код внутри других функций, объявленных вне,
  // также работает обычном режиме
  }

  inStrictMode();
  noStrictMode();`}
      </pre>

      <h2>Консоль</h2>
      <p> Консоль — инструмент разработчика, который помогает тестировать код. Если во время выполнения скрипта возникнет ошибка, в консоли появится сообщение о ней. А ещё в консоль можно выводить текстовые подсказки. Чтобы вывести сообщение в консоль, нужно использовать console.log:</p>
      <pre>{`console.log('Привет от JavaScript!');
// Выведет: Привет от JavaScript!
console.log(document.querySelector('.page'));
// Выведет в консоль найденный элемент`}
      </pre>
    </section>
  );
}
export default BasicJS;
