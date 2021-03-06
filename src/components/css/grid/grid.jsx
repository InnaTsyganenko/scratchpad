import React from 'react';

function Grid() {

  return (
    <section className="conspect">
      <h1>CSS Grid Layout</h1>
      <p><a href="examples/layouts/index.html" target="_blank" rel="noopener noreferrer">Layouts</a></p>
      <p><a href="https://alialaa.github.io/css-grid-cheat-sheet/" target="_blank" rel="noopener noreferrer">CSS Grid Cheat Sheet</a></p>
      <p><a href="https://css-live.ru/css/bolshaya-statya-pro-gridy-css-grid-layout.html" target="_blank" rel="noopener noreferrer">Большая статья про гриды (CSS Grid Layout)</a></p>
      <p><a href="https://cssgridgarden.com/#ru" target="_blank" rel="noopener noreferrer">GRID GARDEN</a></p>
      <p>CSS Grid Layout оптимизирован для двухмерных макетов: тех, в которых нужно управлять выравниванием содержимого в обоих измерениях.</p>
      <p>По сути грид — это сетка, таблица. В гриде можно управлять размерами одновременно и рядов, и столбцов сетки. «Ячейкам» грида можно задавать ширину и высоту, управлять отступами между ними. Размеры могут быть фиксированными или рассчитываться динамически.</p>
      <p>Технология гридов позволяет выстраивать объекты в двухмерную сетку с малым количеством дополнительных обёрток, позволяет сократить количество строк кода и таким образом сократить время и стоимость разработки.</p>
      <p>Сетки на гридах могут быть простыми (вроде стандартного сайта, состоящего из хедера, футера и контента) и сложными (например, в гридах бывают сетки, будто выложенные из разноразмерных кирпичей).</p>
      <img src="img/grid/grid-1.png" alt="Очень простой сайт, хедер, контент и футер" width="800" />
      <p>С развитием веба раскладка сайтов усложнилась, всё чаще приближаясь к журнальной, стала важной типографика, стало критичным расположение контента на странице, структура информации. Часто сайты, созданные ради информационного контента, создаются очень приближенными к полиграфическим изданиям.</p>
      <img src="img/grid/grid-2.png" alt="Сложная плиточная структура, которую возможно сделать на чистом CSS только с помощью гридов" width="800" />
      <p>В отличие от полиграфического дизайна, сетка в веб-дизайне может быть не только фиксированной, но и динамической. К примеру, вы можете сделать одну или несколько колонок макета растягиваемыми, «резиновыми», задав их ширину в процентах или других относительных единицах, а размер остальных колонок зафиксировать.</p>
      <img src="img/grid/grid-3.png" alt="Размеры гридов можно фиксировать или нет" width="800" />
      <p>Когда вы применяете display: grid; к какому-либо элементу, грид, или сетка, начинает «влиять» только на непосредственных потомков этого элемента. Получается, что гридом будут управляться все элементы только первого уровня вложенности.</p>
      <img src="/img/skill-grid-theory-19.png" width="800" alt="CSS Grid Layot наглядно"></img>
      <ul>
        <li>grid container — грид-контейнер, он же грид-родитель, верхний, родительский элемент грида</li>
        <li>grid item — грид-элемент, он же грид-ребёнок, элемент первого уровня вложенности в грид-контейнер, собственно, его расположение — цель грида</li>
        <li>grid track — грид-полоса, собирательный термин для ряда и колонки грида</li>
        <li>grid cell — грид-ячейка</li>
        <li>grid line — грид-линия, виртуальная граница между соседними грид-полосами, к которой можно привязывать грид-элементы</li>
        <li>grid area — грид-область, пространство для размещения грид-элементов, ограниченное четырьмя грид-линиями</li>
        <li>grid gutter, grid gap — грид-интервал, промежуток между соседними грид-полосами</li>
      </ul>
      <p>Количеством рядов и столбцов грида мы можем явно управлять.</p>
      <p>Для этого существуют свойства grid-template-columns и grid-template-rows. Эти свойства перечисляют количество и размер будущих столбцов и рядов грида.</p>
      <p>А можно было использовать span. Кодовое слово span в CSS Grid означает количество ячеек в любом направлении, которое займёт элемент:</p>
      <pre>{`.header {
  grid-column: 1 / span 2; /* начиная с первой грид-линии займёт две ячейки */
}`}
      </pre>
      <p>Чтобы растянуть грид-элемент, используют слово span, а после указывают число колонок, которые элемент должен занять:</p>
      <pre>{`// Этот элемент растянется на три колонки
.wide-element {
  grid-column: span 3;
}`}
      </pre>
      <p>Ценность записи вида grid-column: 1 / -1; в том, что не нужно высчитывать количество линий, а в случае динамического наполнения (когда количество столбцов или строк меняется) сетка не сломается, а по-прежнему будет доходить до конца строки или столбца.</p>
      <p>Если у грид-контейнера есть псевдоэлементы ::before и ::after, которые включены в поток (им не задано абсолютное позиционирование), то они тоже становятся грид-элементами. Эту особенность гридов удобно использовать для создания микросеток, то есть стилизации небольших интерфейсных элементов.</p>

      <h2>Явные и неявные координаты грид-элементов</h2>
      <p>Грид сначала располагает элементы с явно заданными координатами, а затем автоматически размещает элементы с не заданными координатами.</p>
      <p>На практике такое поведение оказывается довольно удобными, так как не всем элементам нужно явно прописывать все координаты, часть грид «берёт на себя» и не требует явного прописывания и, как следствие, это уменьшает количество необходимого CSS-кода.</p>

      <h2>Свойство grid-auto-flow</h2>
      <p>Оно управляет автозаполнением грид-контейнера.</p>
      <pre>{`.grid-container {
  display: grid;
  grid-auto-flow: row;
}`}
      </pre>
      <p>Значение по умолчанию row говорит располагать элементы в том порядке, в котором они идут в разметке, и при необходимости создавать новые ряды.</p>
      <p>Но если указать значение dense, то контейнер будет заполняться так, чтобы не было пропусков. Значение dense заставляет грид-контейнер заполнять пустые ячейки первым подходящим по размеру грид-элементом. При этом визуальный порядок на странице может отличаться от порядка элементов в разметке. Если порядок элементов важен, лучше это значение не использовать.</p>

      <h2>Размеры в гриде</h2>
      <p>Размеры строк и колонок в гриде и интервалы между ними определяются почти всеми возможными единицами измерения, относительными и абсолютными, то есть это могут быть значения в px, % и auto, а также в остальных единицах размеров CSS. Также у гридов есть своя собственная относительная единица fr.</p>
      <p>fr (fraction) — доля доступного (свободного от другого контента) пространства в грид-контейнере;</p>
      <p>auto — пространство, достаточное для контента;</p>
      <p>% — процент от доступной ширины или высоты грид-контейнера.</p>
      <p>Если сделать 5 колонок по 1fr с одинаковым контентом, это отобразится точно так же, как если сделать их auto, и так же, как если сделать их по 20%.</p>
      <p>Фракции и auto не сжимаются меньше наименьшего размера контента, и если экран становится меньше, чем возможно, чтобы контент уместить, появляется полоса прокрутки. Значения в процентах не учитывают контент, и столбцы могут сжиматься бесконечно, полоса прокрутки не появляется.</p>
      <p className="hl-4">Рассмотрим пример.</p>
      <pre>{`.grid {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
}`}
      </pre>
      <p>Такая трёхколоночная сетка будет рассчитываться следующим образом:</p>
      <ol>
        <li>Сначала будет высчитан минимально возможный размер, необходимый для контента во всех трёх колонках.</li>
        <li>Потом колонка размером auto займёт пространство по размеру своего контента.</li>
        <li>Остальное пространство (если оно будет) поделят поровну колонки размером 1fr.</li>
      </ol>
      <img src="img/grid/grid-8.png" alt="Как это отображается в браузере при минимальном контенте" width="800" />
      <p className="hl-4">И ещё один пример сразу со всеми тремя единицами измерения: fr, auto и %.</p>
      <pre>{`.grid {
  display: grid;
  grid-template-columns: 1fr 20% auto 20%;
}`}
      </pre>
      <p>Эта четырёхколоночная сетка будет рассчитываться так:</p>
      <ol>
        <li>Второй и четвёртый столбцы, по 20%, займут по 20% размера грид-контейнера.</li>
        <li>Столбцы размером auto и 1fr займут не меньше места, чем нужно для их контента в минимальном размере (например, по ширине самого длинного слова).</li>
        <li>Потом столбец auto займёт достаточно места для своего контента (возможно, это будет всё место).</li>
        <li>Если что-то останется — это достанется столбцу размером 1fr.</li>
      </ol>
      <img src="img/grid/grid-9.png" alt="Как это отображается в браузере при минимальном контенте" width="800" />
      <p>В фракциях (fr) можно задавать только размеры столбцов и строк в гриде. Размеры грид-интервалов (gap) во фракция не указываются (даже если вы это сделаете, это не сработает). Теоретически можно задавать значения грид-интервалов в процентах (проценты в данной ситуации считаются от размера контейнера или доступного пространства), но спецификация не фокусируется на этой возможности, и в разных браузерах проценты рассчитываются по-разному.</p>

      <h2>Повторы в гриде</h2>
      <p>Если рисунок столбцов или строк повторяется, его можно описать с помощью функции repeat:</p>
      <pre>{`{
  /* 12 раз повторить колонку в 1fr */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* или то же самое с repeat */
  grid-template-columns: repeat(12, 1fr);

  /* 4 раза повторить комбинацию из 2 колонок */
  grid-template-columns: 100px 250px 100px 250px 100px 250px 100px 250px;
  /* или то же самое с repeat */
  grid-template-columns: repeat(4, 100px 250px);

  /* 3 раза повторить 3 колонки и к тому же дать имена линиям между ними */
  grid-template-columns: repeat(3, 20px 50px [price-start] 30px [price-end]);
}`}
      </pre>
      <h3>Значение auto-fit</h3>
      <p>Количество колонок будет зависеть от ширины окна.</p>
      <pre>{'grid-template-columns: repeat(auto-fit, ширина колонки);'}</pre>

      <h3>Значение minmax</h3>
      <p>C помощью minmax ширина колонок будет изменяться динамически и будет зависеть от наличия свободного пространства. Его указывают в repeat вместо фиксированной ширины колонок. В скобках после minmax задают минимальный и максимальный размеры колонок, они разделяются запятой. Код ниже позволит колонкам изменять ширину в зависимости от имеющегося в контейнере свободного пространства. При этом колонки не станут меньше 100px и не растянутся больше, чем на 150px:</p>
      <pre>{'grid-template-columns: repeat(auto-fit, minmax(100px, 150px));'}</pre>
      <p>В minmax в качестве максимального значения часто используют единицу измерения fr. Она позволяет колонкам увеличивать ширину до тех пор, пока свободного пространства в контейнере не хватит на ещё одну колонку.</p>

      <h2>Гриды: расположение грид-элементов»</h2>
      <h3>Координаты грид-элементов: grid-row-start и grid-column-start</h3>
      <p>Когда мы задаём координату начала грид-элементу по рядам или столбцам, он автоматически продлевается до следующей линии рядов или столбцов и таким образом образуется грид-ячейка.</p>
      <ul>
        <li>grid-column-start - начало по столбцу</li>
        <li>grid-column-end - конец по столбцу</li>
        <li>grid-row-start - начало по ряду</li>
        <li>grid-row-end - конец по ряду</li>
      </ul>
      <p>Если задать знак минус, то отсчёт линий начнётся с конца.</p>
      <p>Сокращённый синтаксис для этих свойств:</p>
      <pre>{`grid-column: 1 / 3;

/* Это то же самое, что: */

grid-column-start: 1;
grid-column-end: 3;
Аналогично:
grid-row: 1 / -2;

/* Это то же самое, что: */

grid-row-start: 1;
grid-row-end: -2;`}
      </pre>

      <h2>Наложение элементов грида и свойство z-index</h2>
      <p>Грид-элементы могут наслаиваться друг на друга, при этом они начинают себя вести как будто абсолютно спозиционированные, при этом на них так же действует свойство z-index.</p>
      <p>В случае пересечения координат двух элементов грида они просто располагаются один поверх другого в порядке следования в разметке, как будто это стопка листов.</p>
      <p>Чем выше z-index, тем выше элемент в «стопке». Если у двух элементов одинаковый z-index, то выше будет располагаться тот, который идёт следующим по разметке.</p>

      <h2>Именованные области грида: свойство grid-template-areas</h2>
      <p>Есть быстрый способ создания сетки с помощью свойств grid-template-areas и grid-area. В значении свойства grid-template-areas визуально «по клеточкам» описывается структура грида.</p>
      <p>Допустим, что мы хотим сверстать простой грид 3 на 3, который представляет из себя три столбца. В разметке мы имеем контейнер с тремя дочерними элементами:</p>
      <pre>{`<div class="grid">
  <div class="grid-element-1"></div>
  <div class="grid-element-2"></div>
  <div class="grid-element-3"></div>
</div>
В CSS нам нужно описать области грида:

grid-template-areas:
  "red yellow green"
  "red yellow green"
  "red yellow green";`}
      </pre>
      <p>Строки в значении свойства grid-template-areas — ни что иное, как визуальное представление рядов грида, а значения в строках — представление столбцов.</p>
      <p><span className="hl-10">Есть небольшое ограничение — грид должен быть прямоугольной формы, а количество объявленных столбцов в каждой строке должно быть одинаковым.</span></p>
      <p>Названия областей должны начинаться с буквы и могут включать цифры и дефис. Например, &quot;lava lava2 lava-3&quot; — валидное значение для grid-template-areas. Названия в строках перечисляются через один или несколько пробелов.</p>
      <p>Теперь нужно связать визуальное представление с конкретными элементами в HTML. И поможет нам в этом свойство grid-area, в котором для каждого элемента прописывается своё название:</p>
      <pre>{`.grid-element-1 {
  grid-area: red;
}

.grid-element-2 {
  grid-area: yellow;
}

.grid-element-3 {
  grid-area: green;
}`}
      </pre>
      <p><span className="hl-8">Имена грид-областям можно давать любые, кроме значащих в гриде (имя span лучше не давать), в том числе можно давать имена из одной буквы. Обратим внимание, что название grid-area для каждого элемента должно быть уникальным. Если у вас 12 колонок, что бывает часто, то набить 12 раз h для хедера будет гораздо проще, чем написать 12 раз слово header. Теоретически можно использовать даже имена-эмодзи из Юникода (правда, есть версия, что это не очень удобно).</span></p>
      <pre>{`<div class="container">
  <header class="header">
  </header>

  <nav class="menu">
  </nav>

  <main class="content">
  </main>

  <aside class="aside">
  </aside>

  <footer class="footer">
  </footer>
</div>
.container {
  display: grid;

  /* 12 колонок */
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;

  /* 5 рядов */
  grid-template-rows: 50px 50px 50px 50px 50px;

  grid-template-areas:
    "h h h h h h h h h h h h"
    "m c c c c c c c c c c a"
    "m c c c c c c c c c c a"
    "m c c c c c c c c c c a"
    "m f f f f f f f f f f f"
}

.header {
  grid-area: h;
}

.menu {
  grid-area: m;
}

.content {
  grid-area: c;
}

.aside {
  grid-area: a;
}

.footer {
  grid-area: f;
}`}
      </pre>
      <img src="img/grid/grid-5.png" alt="Сетка" width="800" />
      <p>Для пустых мест в сетке в таком описании ставится точка. В примере мы покажем только саму область.</p>
      <pre>{`grid-template-areas:
    "h h h h h h h h h h h h"
    "m . c c c c c c c c c ."
    "m . c c c c c c c c c a"
    ". . c c c c c c c c c a"
    ". f f f f f f f f f f ."
}`}
      </pre>
      <img src="img/grid/grid-6.png" alt="Сетка" width="800" />
      <p>Одному элементу в HTML может соответствовать только одна грид-область. Если одна грид-область задана нескольким HTML-элементам, действовать будет только одно, наиболее специфичное объявление:</p>
      <pre>{`.grid-element-1 {
  grid-area: red; /* Грид-область назначается первому элементу */
}

.grid-element-2 {
  grid-area: red; /* Грид-область red переназначается второму элементу */
}`}
      </pre>
      <p>Рассмотрим пример:</p>
      <pre>{`<div class="container">
  <header class="header">
  </header>

  <nav class="menu">
  </nav>

  <main class="content">
  </main>

  <footer class="footer">
  </footer>
</div>
.container {
  display: grid;
  grid-template-columns: 100px 600px;  /* два столбца 100px и 600px */
  grid-template-rows: 40px 200px 40px; /* три ряда 40px, 200px и 40px */

  grid-template-areas:
    "menu header header"    /* первый ряд грида */
    "menu content content"  /* второй ряд грида */
    "footer footer footer"; /* третий ряд грида */
}

.header {
  grid-area: header; /* название области сетки из grid-template-areas */
}

.menu {
  grid-area: menu;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}`}
      </pre>
      <img src="img/grid/grid-4.png" alt="Как это выглядит в браузере" width="800" />
      <p>В целом, всю важную информацию о гриде можно записать в одно свойство grid-template: названия линий, количества колонок и их размеры, области и их размеры… Получится, например, так:</p>
      <pre>{`{
  grid-template:
    [header-top]             /* имя первой линии рядов */
    "b b b s s s s" 1fr      /* первый ряд и его высота */
    [header-bottom main-top] /* имена второй линии рядов */
    "c c c c m m m" auto     /* второй ряд и его высота */
    [main-bottom]            /* имя последней линии рядов */
    /                        /* переходим к характеристикам столбцов */
    1fr 2fr;                 /* их два, вот их размер */
}`}
      </pre>
      <p>Такая запись не позволяет использовать repeat, а также делает код менее удобным для чтения. Однако программы-минификаторы, для которых важна как можно более короткая запись, могут использовать именно такой формат.</p>
      <p>Как вы уже видели выше, свойства grid-row-start и grid-row-end могут быть «упакованы» в свойство grid-row, а свойства grid-column-start и grid-column-end — в свойство grid-column.</p>
      <p>Для задания координат есть ещё более «объединяющее» свойство — grid-area. Оно включает сразу четыре значения координат и расшифровывается так:  grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end;.</p>
      <pre>{`{
  grid-area: 5 / 1 / 6 / 2;

  /* или то же самое */
  grid-row-start: 5;
  grid-column-start: 1;
  grid-row-end: 6;
  grid-column-end: 2;
}`}
      </pre>

      <h3>Свойство grid-template-areas и пустые области грида</h3>
      <p>Свойство grid-template-areas позволяет некоторые области помечать как пустые - для этого вместо буквенного именования области используется символ точки. К примеру, возьмём код из прошлой теории, где был грид из трёх столбцов.</p>
      <pre>{`grid-template-areas:
  "red yellow green"
  "red yellow green"
  "red yellow green";`}
      </pre>
      <p>Если мы хотим, чтобы в первом ряду осталась только последняя зелёная ячейка, то заменим red и yellow в первой строке на точки:</p>
      <pre>{`grid-template-areas:
  ".   .      green"
  "red yellow green"
  "red yellow green";`}
      </pre>

      <h2>Автоматические координаты элементов в гриде: столбцы и ряды</h2>
      <p>Свойство grid-template-columns перечисляет количество и ширину будущих столбцов грида. К примеру, запись grid-template-columns:</p>
      <p>100px 100px 100px; говорит гриду: &quot;Ты будешь иметь три столбца, каждый шириной 100px&quot;.</p>
      <p>Если не задавать параметры для рядов, то их количество становится переменным. Порядок действий такой:</p>
      <ul>
        <li>Все грид-элементы выстраиваются в один ряд согласно объявленной раскладке столбцов.</li>
        <li>Если грид-элементов больше, чем столбцов, то не вписавшиеся в один ряд элементы переносятся на следующий ряд и заполняют его.</li>
        <li>Новые ряды формируются до тех пор, пока все грид-элементы не будут вписаны в раскладку по столбцам. Если последний ряд заполняется элементами не полностью, то оставшееся место в гриде остаётся пустым.</li>
      </ul>
      <p>Аналогично grid-template-columns работает и свойство grid-template-rows, только оно сообщает гриду сколько рядов он будет содержать и какой они будут высоты. К примеру, запись grid-template-rows: 100px 200px 100px; говорит гриду: - Ты будешь иметь три ряда, первый высотой 100px, второй высотой 200px и третий — 100px.</p>
      <p>Если при этом столбцам не заданы явные параметры, то по умолчанию, будет существовать всего один столбец, элементы в котором растянутся на всю его ширину.</p>
      <p>В случае, если в гриде есть ряды, которым не задана явная высота в grid-template-rows, оставшееся свободное пространство по высоте распределится среди них равномерно.</p>
      <p>Комбинируя задание явного расположения грид-элементов и их автоматическое распределение, можно строить сложные и одновременно гибкие сетки.</p>

      <h2>Именованные грид-линии</h2>
      <p>Давайте теперь изменим пример и в изначальной раскладке грида пропишем также названия грид-линий для области грид-элемента .main. В имени могут использоваться любые буквы, латиница, кириллица, символы юникода и так далее. Имена записываются в квадратных скобках через дефис внутри свойств grid-template-columns и grid-template-rows. «Стартовые» линии рядов назовём [content-column-start] и [content-row-start], а «конечные» — [content-column-end] и [content-row-end].</p>
      <pre>{`.grid {
  …

  grid-template-columns: [content-column-start] 100px 100px 100px [content-column-end] 100px;
  grid-template-rows:
    100px
    [content-row-start]
    100px
    100px
    [content-row-end]
    100px;

  …
}`}
      </pre>
      <p>Теперь при прописывании координат грид-элементов мы можем опираться не только на номера грид-линий, но ещё и их имена:</p>
      <pre>{`.main {
  /* элемент начинается с линии «content-column-start» и идёт до линии «content-column-end» */
  grid-column: content-column-start / content-column-end;

  /* элемент начинается с линии «content-row-start» и идёт до линии «content-row-end» */
  grid-row: content-row-start / content-row-end;
}`}
      </pre>
      <p>Именованными линиями мы можем пользоваться не только для задания координат грид-элемента .main, но и для остальных грид-элементов:</p>
      <pre>{`.header {
  grid-column: 1 / 5;

  /* элемент идёт с первой линии до линии «content-row-start» */
  grid-row: 1 / content-row-start;
}

.aside {
  /* элемент идёт с линии «content-row-start» до линии «content-row-end» */
  grid-row: content-row-start / content-row-end;
}

.footer {
  /* элемент идёт с линии «content-row-end» до пятой линии */
  grid-row: content-row-end / 5;
  grid-column: 1 / 5;
}`}
      </pre>
      <p>Именованными линиями также можно пользоваться не только в свойствах grid-row-start/grid-row-end/grid-row и grid-column-start/grid-column-end/grid-column.</p>
      <p>Рассмотрим пример. Здесь обозначены линии по обеим осям, которые «открывают» и «закрывают» контент — они называются [content-start] и [content-end].</p>
      <pre>{`.grid {
  display: grid;


  grid-template-columns: 100px [content-start] 100px [content-end];
  grid-template-rows:
    50px
    [content-start]
    200px
    [content-end]
    50px;
}

.content {
  /* мы назвали линии единообразно и между линий автоматически появилась грид-область
  с соответствующим линиям названием */
  grid-area: content;
}`}
      </pre>
      <img src="img/grid/grid-7.png" alt="" width="800" />

      <h2>Грид-интервал: свойство <span className="hl-2">gap</span></h2>
      <p>Свойство gap позволяет добавлять интервал между рядами и столбцами. Определяется это свойство в px, %, em/rem или vw, и других единицах измерения:</p>
      <pre>{`{
  gap: 10px;        /* интервал в 10px появится между всеми элементами */
  row-gap: 10px;    /* интервал в 10px появится только между рядами */
  column-gap: 20px; /* интервал в 20px появится только между столбцами */
  gap: 10px 20px;   /* интервал между рядами 10px, между столбцами 20px */
}`}
      </pre>
      <p><span className="hl-5">У грид-интервалов есть особенности: промежутки появляются между элементами и не появляются по краям контейнера.</span></p>
      <img src="/img/grid-gap.png" width="800" alt="Свойство gap"></img>
      <p>Если задать элементам внешние отступы (margin), они не будут «схлопываться» с грид-интервалами. То есть для сочетания gap: 10px; margin-right: 30px; общий отступ будет 40 пикселей.</p>
      <p>В более ранних спецификациях эти свойства имеют приставку grid- в начале (grid-column-gap, grid-row-gap, grid-gap), сейчас работают оба варианта свойств. Они были переименованы и теперь используются не только с гридами.</p>

      <h2>Инструменты для работы с гридами</h2>
      <p>В средства разработчика браузеров Google Chrome и Mozilla Firefox включены также инструменты для удобной инспекции гридов.</p>
      <p>Помимо встроенного в Chrome инспектора существует также сторонний инспектор CSS Grid Highlighter for Chrome, который можно установить в браузер в виде расширения.</p>
      <p>Если вам нравятся визуальные средства для работы с гридами, то познакомьтесь с такими инструментами как CSS Grid Generator и CSS Grid Cheat Sheet — в них можно с помощью графического интерфейса создать грид и экспортировать полученный код, или же просто «поиграть» с настройками грида для улучшения понимания.</p>

      <h2>Баги и ограничения</h2>
      <p>Гриды, несмотря на относительную новизну технологии — отлично описанная система. Её реализовали и выпустили в современных браузерах в рекордные по меркам CSS срокам — за пару лет. Но, к сожалению, в браузерной реализации гридов есть и баги, которые пока не исправлены:</p>
      <p>Про то, что gap не идеально работает с процентными значениями, мы рассказывали в материале про грид-интервалы. Для внешних и внутренних отступов грид-элементов также лучше не использовать размеры в процентах, так как браузеры их по-разному рассчитывают.</p>
      <p>Элемент <code>&lt;fieldset&gt;</code> не может быть грид-контейнером в Google Chrome, и это большое упущение, так как вынуждает искать обходные пути при вёрстке. Кнопки <code>&lt;button&gt;</code> тоже не могут быть грид-контейнерами, но это может быть полезно реже.</p>
      <p>Многострочное поле ввода <code>&lt;textarea&gt;</code> сворачивается до нулевого размера, когда в него вводят текст, правда, это происходит только в Google Chrome на MacOS.</p>
      <p>Также пока что не везде работают subgrid: это возможность распространять влияние грида не только на дочерние элементы, но и на элементы более глубокой вложенности.</p>
      <p><a href="https://github.com/rachelandrew/gridbugs" target="_blank" rel="noopener noreferrer">Полный список багов</a></p>
      <p><a href="https://css-live.ru/articles/chto-mozhet-polomat-maket-na-gridax-css-grid-layout.html" target="_blank" rel="noopener noreferrer">Что может поломать макет на гридах (CSS Grid Layout)</a></p>
      <p>Пример, в котором бы пригодился subgrid:</p>
      <pre>{`<article class="grid"> <!-- это грид-контейнер -->
  <h1></h1>            <!-- это грид-элемент -->

  <ul>                 <!-- это грид-элемент -->
    <li></li>          <!-- это уже не грид-элемент :( -->
    <li></li>
    <li></li>
  </ul>

  <p></p>              <!-- это грид-элемент -->
</article>`}
      </pre>
      <p>Если мы хотим сделать элементы списка грид-элементами, это не сработает: элементом грида будет только сам список как непосредственный дочерний элемент грид-контейнера.</p>
      <p>Свойство display: contents;, применённое для <code>&lt;ul&gt;</code> могло бы выступить в качестве решения этой проблемы, но у этого свойства пока что тоже есть проблемы с реализацией в браузерах.</p>
    </section>
  );
}

export default Grid;
