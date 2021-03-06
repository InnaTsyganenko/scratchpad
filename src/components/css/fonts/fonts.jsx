import React from 'react';

function Fonts() {

  return (
    <section className="conspect">
      <h1>Work with Fonts</h1>
      <h2>Свойство font-size - размер шрифта</h2>
      <p>чтобы при изменении основного размера шрифта родителя его дочерние элементы пропорционально меняли свои размеры шрифта, есть специальная единица измерения — em.</p>
      <p>Величина 1em — это такой же размер шрифта, что и у родителя. Соответственно, если нужно, чтобы шрифт дочернего элемента был всегда в 2 раза больше родительского, то надо задать значение 2em.</p>
      <p>На самом деле абсолютную величину размера шрифта можно задавать не только в пикселях, пунктах и других величинах, но и особыми «шрифтовыми» ключевыми словами: xx-small, x-small, small, medium, large, x-large и xx-large. На практике этими единицами измерения пользуются редко.</p>
      <p>Наравне с «абсолютными» ключевыми словами существует пара «относительных» ключевых слов, которые применяются к размеру шрифта: larger и smaller. Они буквально делают размер шрифта элемента больше или меньше того размера, который задан его родительскому элементу.</p>

      <h3>Свойство line-height</h3>
      <p>Свойство управляет высотой строки или межстрочным интервалом. Спецификация рекомендует устанавливать его в пределах 100-120% от размера шрифта.</p>
      <p>Значение normal позволяет всем нестилизованным текстам выглядеть удобочитаемо. Однако, если есть необходимость отойти от стилизации по умолчанию, line-height можно задать фиксированное абсолютное значение в px.</p>

      <h3>Свойство font-family</h3>
      <p>В значении этого свойства указывается список названий шрифтов, перечисленных через запятую. В начале списка располагают самый желаемый шрифт, затем менее желаемый, а в самом конце списка — общий тип шрифта. Браузер проходит по списку слева направо и использует первый найденный в системе или на сайте шрифт. Если название шрифта состоит из нескольких слов, то его нужно заключать в кавычки.</p>
      <p><span className="hl-9">font-family: &quot;PT Sans&quot;, &quot;Arial&quot;, sans-serif;</span></p>
      <ul>
        <li>serif — шрифт с засечками;</li>
        <li>sans-serif — шрифт без засечек.</li>
        <li>monospace — моноширинный шрифт;</li>
        <li>cursive — шрифт с неформальным начертанием, например, имитация рукописного текста или леттеринга;</li>
        <li>fantasy — декоративный шрифт, например, всемирно известный Comic Sans.</li>
      </ul>

      <h2>Использование нестандартных шрифтов</h2>
      <a href="https://htmlacademy.ru/blog/boost/tutorial/fonts-loading" target="_blank" rel="noopener noreferrer">Как подключить и оптимизировать нестандартные шрифты</a>
      <p>Простейший способ использовать такой шрифт — найти его в специальном сервисе по названию, получить там код подключения шрифта, вставить этот код в свою вёрстку и использовать шрифт, как обычно, с помощью свойства font-family.</p>
      <p>Подобных сервисов с бесплатными шрифтами достаточно много - Google Fonts, fontstorage.</p>
      <p>При использовании веб-шрифтов не забывайте указывать так называемые «фоллбэк»-шрифты — стандартные шрифты, которые будут отображаться, если веб-шрифт либо недоступен, либо не поддерживается старым браузером пользователя.</p>

      <h3>Подробнее о шрифтах: правило @font-face - «эт-правило font-face»</h3>
      <pre>{`@font-face {
  font-family: "Font";
  src: local("Font"),
       local("My Font"),
       url("font.woff2") format("woff2"),
       url("font.woff") format("woff");
}`}
      </pre>
      <p>В свойстве font-family задаётся название подключаемого семейства шрифта.</p>
      <p>В свойстве src через запятую перечисляются источники, откуда шрифт может быть подключён. Браузер будет пробовать все источники по очереди, пока не найдёт подходящий вариант. Поэтому целесообразно указывать источники, начиная с самого предпочтительного и заканчивая наименее подходящим. Разберём пример выше:</p>
      <ol>
        <li>Сначала браузер попробует источник local(&quot;Font&quot;). Это означает, что он попытается найти локально на вашем компьютере или устройстве шрифт под названием Font.</li>
        <li>Если такого шрифта не найдено, следующим будет попытка найти и использовать локальный шрифт с названием My Font.</li>
        <li>Если в этот момент локальных шрифтов найдено не было, браузер запросит файл шрифта из удалённого источника по адресу url(&quot;font.woff2&quot;). После самого адреса шрифта опционально указывается подсказка для браузера — формат шрифта. В нашем примере это поле format(&quot;woff2&quot;).</li>
        <li>Если браузер не поддерживает формат woff2, то он пойдёт дальше и попробует загрузить шрифт из следующего источника. По адресу url(&quot;font.woff&quot;) будет запрошен шрифт в формате woff. Этот формат поддерживает большинство современных браузеров.</li>
      </ol>
      <p>Как использовать подключённые шрифты</p>
      <pre>{`p {
  font-family: "Font";
}`}
      </pre>
      <h4>Как не провалиться с «декоративными» шрифтами</h4>
      <p>Иногда очень хочется оформить какие-то элементы сайта красивыми шрифтами — «рукописными», «каллиграфическими», рисованными. Конечно, это вопрос дизайна, и нас он не всегда касается. Но мы должны предусмотрительно подключить веб-безопасные шрифты на случай, если локальные не загрузятся. И не использовать слишком много разных шрифтов: они каждый загружаются на компьютер пользователя, если их нет в операционной системе. Не рекомендуется не использовать больше 2 шрифтов на одной странице. И не использовать шрифт Comic Sans как основной.</p>
      <h5>Про веб-безопасные шрифты</h5>
      <p>Это те, которые установлены на компьютерах максимального количества пользователей. По ссылке можно посмотреть статистику локально установленных шрифтов на разных операционных системах. Обычно имеются в виду: Arial, Courier New, Georgia, Times New Roman, Trebuchet MS, Verdana.</p>
      <p>В случае, если ваш особенный шрифт не загрузится по каким-либо причинам, стоит указать «запасной», который не слишком испортит вид сайта. Запасные шрифты записываются через запятую в порядке предпочтения. Важно, чтобы эти шрифты поддерживали нужный язык основного шрифта, например, кириллицу, если текст на сайте написан по-русски.</p>
      <p>Есть ещё одно требование к веб-безопасным шрифтам: они должны относиться к тому же семейству, что и «декоративный» шрифт. Для шрифтов с «засечками» — это может быть Times New Roman, Georgia, «без засечек» — Arial, Verdana.</p>
      <p>Зачастую для логотипа используют специально купленный или отрисованный шрифт, и есть соблазн сделать логотип текстом. Лучше не нужно: если шрифт не загрузится, будет очень обидно, что за логотип заплачено, а он выглядит не так, как нужно. Не загрузившаяся картинка вызывает меньше вопросов.</p>
      <p>В первом же блоке после меню часто используются особенные шрифты, это своего рода промо-блок, в нём часто предполагается что-то яркое, что должно зацепить пользователя. Часто шрифт в этом блоке очень необычный и больше нигде не используется. Не нужно делать его шрифтом в этом случае, всё равно там есть картинка-фон, объедините слои в графическом редакторе и выгрузите как графику.</p>
      <p>При выгрузке векторной графики важно убедиться, что выгрузились именно векторные формы, описанные точками, а не тег <code>&lt;text&gt;</code>, в который обёрнуты буквы и приписаны стили.</p>
      <p>Кроме шрифтов с буквами и символами существуют «иконочные шрифты», позволяющие встроить файл с готовым набором иконок вместо букв и дальше использовать его неограниченно. Это оправданная мера, если на сайте предполагается очень много иконок и они будут использоваться единообразно. Во всех остальных случаях иконочный шрифт не обоснован. Во-первых, иконочные шрифты обычно достаточно тяжёлые, и это дополнительно увеличивает вес сайта, и такой шрифт должен скачаться на компьютер пользователя (шансов, что именно он уже есть у пользователя, очень мало: иконочные шрифты часто индивидуальные). Во-вторых, любые манипуляции с такими шрифтами сложны (при маштабировании падает качество, для ретины нужны отдельные улучшенные иконки, иначе браузер сам отрисует), в то время как SVG — уже принятый для таких случаев стандарт — в качестве не теряет ни при каких обстоятельствах.</p>

      <h3>Свойство font-weight, толщинa шрифта</h3>
      <ul>
        <li>100: Thin;</li>
        <li>200: Extra Light (Ultra Light);</li>
        <li>300: Light;</li>
        <li>400: Normal;</li>
        <li>500: Medium;</li>
        <li>600: Semi Bold (Demi Bold);</li>
        <li>700: Bold;</li>
        <li>800: Extra Bold (Ultra Bold);</li>
        <li>900: Black (Heavy).</li>
      </ul>
      <p>в большинстве системных шрифтов всё равно есть только два варианта толщины: обычный normal (400) и жирный bold (700).</p>
      <p>Кроме перечисленных выше числовых значений у font-weight может быть ещё два относительных значения: bolder и lighter. Эти значения делают шрифт жирнее и тоньше, чем текущее или унаследованное значение.</p>

      <h3>Свойство font-style, начертание</h3>
      <ol>
        <li>normal — обычное начертание;</li>
        <li>italic — курсивное начертание;</li>
        <li>oblique — наклонное начертание.</li>
      </ol>
      <p>Если задано значение italic, браузер будет пытаться найти в заданном шрифте отдельное курсивное начертание символов. В некоторых шрифтах отдельный курсив предусмотрен. Если отдельного курсивного начертания в шрифте не предусмотрено, то браузер сделает текст наклонным, то есть сымитирует курсив. Что равноценно заданию тексту значения font-style: oblique.</p>

      <h2>Инструменты для работы со шрифтами</h2>
      <h3>Базы шрифтов</h3>
      <p>Для этого существуют две основные базы: Google Fonts и Adobe Fonts.</p>
      <h3>Определение шрифта</h3>
      <p>What the Font. Инструмент предлагает поиск по базе данных на основе изображения шрифта. В случае, если служба изображения не работает, у What the Font также есть форум, полный экспертов.</p>
      <p>Identifont. Позволяет подобрать похожие шрифты, если для вас не принципиальна полная идентичность, а установка некоторых шрифтов затруднена. По названию, популярным шрифтам, картинке и прочим атрибутам Identifont должен помочь вам в поиске. Кстати, обязательно ознакомьтесь с разделом бесплатных шрифтов.</p>
      <p>WhatFont. Независимый разработчик Chengyin Liu создал приложение WhatFont в виде расширения для браузера и даже мобильного приложения. В браузере вы просто кликаете на интересующий вас шрифт, и WhatFont отображает его название и характеристики.</p>
      <p>Fount. Для использования инструмента, необходимо добавить сайт с инструментом в закладки. После зайти на сайт с интересующим шрифтом и нажать на закладку Fount.</p>

      <h2>Вариативные шрифты</h2>
      <p>В 2016 году появились вариативные шрифты — и это до сих пор подаётся как прорыв, новое слово в веб-типографике. Новый формат называется OpenType Font Variables и уже имеет неплохую поддержку в браузерах (Internet Explorer это, конечно, не касается, но что он вообще поддерживает?!).</p>
      <p>Суть концепции в том, что в одном файле формата OpenType в оптимизированном виде содержится информация о возможностях шрифта: модификации размеров, стилей и начертаний. Каждая из таких возможностей называется осью вариации (или просто осью). То есть оси вариации — это характеристики шрифта, которыми мы управляем. У вариативных шрифтов есть уже известные и стандартные («зарезервированные») оси:</p>
      <ul>
        <li>&quot;wdth&quot; — ширина;</li>
        <li>&quot;wght&quot; — вес;</li>
        <li>&quot;slnt&quot; — наклон;</li>
        <li>&quot;ital&quot; — курсив;</li>
        <li>&quot;opsz&quot; — оптический размер.</li>
      </ul>
      <p>А есть оси кастомные, их имена пишутся прописными буквами, например, &quot;GRAD&quot; (от английского Grade). Не каждый вариативный шрифт обязательно будет использовать все известные оси вариации. Это полностью зависит от создателя конкретного шрифта.</p>

      <h3>Как определить, какие есть возможности у шрифта?</h3>
      <p>Можно прочитать там, откуда вы шрифт взяли, можно посмотреть на сервисе <a href="https://wakamaifondue.com/" target="_blank" rel="noopener noreferrer">wakamaifondue.com</a>. Загрузите туда шрифт — и сервис покажет вам данные о шрифте, в том числе о его вариативности. Там же появляется значение и код для работы со шрифтом на сайте.</p>
      <p>Если вы используете Google Fonts, то в описании есть информация о том, какие оси — вариативные. Подвигайте ползунок: в каких пределах работает вариативность?</p>

      <h3>Как подключить вариативный шрифт?</h3>
      <h4>Подключение через базы шрифтов</h4>
      <p>Тут не всё так просто, как кажется в статьях, пропагандирующих использование этой технологии. В целом подключение всех шрифтов в чём-то похоже, но есть и своя специфика. Подключение через базу шрифтов Google Fonts не позволяет в полной мере использовать все возможности по настройке вариативного шрифта. В API Google Fonts нет параметров, которые управляют вариативными шрифтами. Например, не получится использовать CSS-свойства font-variation-settings и font-feature-settings для управления параметрами вариативного шрифта (об этих свойствах подробнее в материале «Вариативная типографика»).</p>
      <p>Ниже приведён пример подключения вариативного шрифта Epilogue, в котором есть две оси: &quot;wght&quot; (вес) и &quot;ital&quot; (курсив). Шрифт подключается из базы шрифтов Google Fonts.</p>
      <pre>{`<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400..800;1
400..800&display=swap" rel="stylesheet">`}
      </pre>
      <p>В примере варианты веса перечислены в виде диапазона значений 400..800. Ещё один минус использования базы шрифтов Google Fonts: строку подключения вам придётся править вручную. При добавлении шрифта через команду Select this style в строку подключения каждый раз будут добавлены лишь установленные значения параметров шрифта.</p>
      <pre>{`<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,630;0,848
1,467;1,539;1,630;1,730;1,812&display=swap" rel="stylesheet"></link>`}
      </pre>

      <h4>Подключение локальных шрифтов через @font-face</h4>
      <p>Первое, на что нужно обратить внимание, это настройка осей при подключении. Например, для оси &quot;wght&quot; (вес) в CSS-свойстве font-weight в качестве значений может быть указано два значения, которые представляют собой допустимый диапазон. Для настройки осей &quot;slnt&quot; (наклон) и &quot;ital&quot; (курсив) используется CSS-свойство font-style, для оси наклон указывается ключевое слово oblique и диапазон значений, в пределах который будет изменяться угол наклона. Для курсива указывается значение italic как флаг: курсив может быть только включён или выключен.</p>
      <pre>{`@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2");
  font-weight: 400 800; /* это диапазон */
  font-style: oblique 0deg 12deg; /* настройка оси slnt (slant) */
  font-stretch: 75% 125%;
}`}
      </pre>
      <p>Если вы используете настройку диапазонов значений для CSS-свойств: font-weight, font-stretch или font-style, будьте внимательны. Браузер не будет применять значения соответствующих CSS-свойств вне указанного диапазона. Эти значения будут просто игнорироваться.</p>
      <p>В документации по вариативным шрифтам вы можете увидеть примеры, где в качестве формата файла в директиве @font-face для вариативных шрифтов используется woff2-variations. Но, к сожалению, не во всех браузерах реализован полный синтаксис нового формата шрифта, поэтому внимательно следите за этим. Все браузеры, поддерживающие вариативные шрифты, по-прежнему будут отображать их, даже если вы установите формат woff2, к примеру, вместо woff2-variation.</p>

      <h3>Как настраивать в материале вариативный шрифт?</h3>
      <p>Способ настройки через CSS-свойство font-variation-settings подойдёт лишь для шрифтов, подключённых локально через директиву @font-face.</p>
      <p>Вот основные значения и их соответствие CSS-свойствам:</p>
      <ul>
        <li>&quot;wdth&quot; — font-weight</li>
        <li>&quot;wght&quot; — font-stretch</li>
        <li>&quot;slnt&quot;(slant) — font-style: oblique + angle</li>
        <li>&quot;ital&quot; — font-style: italic</li>
        <li>&quot;opsz&quot; — font-optical-sizing</li>
      </ul>
      <p>Ширина управляется свойством font-stretch или font-variation-settings: &quot;wdth&quot; …;, значения имеет в процентах, 100% — стандарт, 50% — узкое, 200% — широкое начертание соответственно.</p>
      <p>font-style варьирует угол наклона между oblique –90deg и oblique 90deg. font-style: italic. Как альтернатива может быть использовано свойство font-variation-settings: &quot;ital&quot; 1;.</p>
      <p>Если используемый вами шрифт имеет только ось slant, но не имеет italic, можно использовать стандартное свойство font-style например:</p>
      <pre>{`em {
  font-style: oblique 12deg;
}`}
      </pre>
      <p>Если доступны обе оси, потребуется использовать font-variation-settings, и в этом случае понадобится просто задать числовое значение без указания единиц измерения deg.</p>
      <pre>{`em {
  font-variation-settings: "slnt" 12;
}`}
      </pre>
      <p>Технически вы можете задавать обе оси: и для наклона (угла) и для курсива (замены символа). Примеры таких шрифтов: Roslindale Italic и Roslindale Recursive. Учитывая то, что курсив и наклон используют одно и то же CSS-свойство font-style, для определения параметров обоих атрибутов придётся использовать font-variation-settings:</p>
      <pre>{`em {
  font-variation-settings: "ital" 1, "slnt" 12;
}`}
      </pre>
      <p>Что такое оптический размер? Это взаимозависимость контрастности и размера букв. Например, если буква А имеет размер 20px, то её линии будут толще и менее контрастными, чем если она имеет размер 60px. Это имеет смысл для шрифтов с разной толщиной линий. Для настройки оптического размера было введено новое свойство: font-optical-sizing, которое может принимать одно из двух значений: off или auto.</p>
      <img src="img/text/text-7.png" alt="Оптический размер (толщина и контрастность линии в зависимости от размера)" width="800" />
      <p>Что делать, если у шрифта есть какая-то особенная, кастомная вариативная ось? Например, которая отращивает на основном штрихе (вертикальной длинной части символа) пузырь, или которая меняет вид и форму засечек.</p>
      <p>Нужно выяснить, как называется кастомная ось и как выглядит правильное название оси. Обратите внимание, что имена «зарезервированных» осей пишутся строчными буквами, а кастомных — прописными.</p>
      <img src="img/text/text-8.png" alt="Скриншот с axis-praxis с параметрами шрифта" width="800" />
      <p>Скриншот с <a href="https://www.axis-praxis.org/specimens/__DEFAULT__" target="_blank" rel="noopener noreferrer">axis-praxis.org</a>, это мы нажали кнонку CSS и вычислили, какое из многочисленных вариативных свойств делает эти милые пупырки посередине штрихов.</p>

      <h3>Особенности, доступность, применимость</h3>
      <p>Вариативность — пока что достаточно новая технология и может не везде сработать, или сработать неожиданно. В общем, будет лучше «подстраховать» её веб-безопасным или хотя бы обычным шрифтом и продумать, как это будет отображаться, если вариативность «отвалится». И не делать вариативными шрифтами логотипы, конечно.</p>

      <h3>Сервисы и инструменты для работы с вариативными шрифтами</h3>
      <ul>
        <li><a href="https://wakamaifondue.com/" target="_blank" rel="noopener noreferrer"> wakamaifondue.com</a>— сервис получения и визуализации всей информации о шрифтах.</li>
        <li><a href="https://v-fonts.com/" target="_blank" rel="noopener noreferrer">v-fonts.com</a> — можно выбрать из коллекции шрифтов и посмотреть, как они работают.</li>
        <li><a href="https://www.axis-praxis.org/specimens/__DEFAULT__" target="_blank" rel="noopener noreferrer">axis-praxis.org</a> — сервис с визуализацией вариативности.</li>
      </ul>
      <p>Вариативные шрифты отлично поддерживаются в Firefox: инструменты разработчика браузера позволяют выбрать нужный шрифт и попробовать менять параметры. Нужно выбрать в меню, всплывающем по клику правой кнопкой мыши, опцию «Исследовать элемент», выбрать вкладку «Шрифты» (Fonts) — и увидеть всё, что касается шрифтов.</p>
      <img src="img/text/text-9.png" alt="Скриншот из браузера Mozilla Firefox с инструментами разработчика в области шрифтов" width="800" />

      <h3>Зачем всё-таки нужны вариативные шрифты</h3>
      <p>Суть и смысл вариативных шрифтов в том, что они могут дать все возможные варианты использования шрифта в одном файле, с минимальным весом. Курсив, много размеров, очень тонкий и супер-жирный — вы используете всё, но пользователь закачает только один файл, а не множество. Ну и конечно, ради красивых эффектов. Можно сделать плавно «худеющие» и «толстеющие» буквы по наведению, как в примере:</p>
      <img src="img/text/text-10.png" alt="Слово «шрифт» — при наведении, в неактивном состоянии выглядело так же, как первое слово. Можно сделать плавный переход" width="800" />
      <pre>{`<h1>
  <span>Вариативный</span> шрифт
</h1>
@import url("https://fonts.googleapis.com/css2?family=Recursive:wght@300..1000&display=swap");

html {
  font-family: "Recursive", monospace;
  background: black;
  color: white;
}

h1 {
  font-size: 2.5em;
  word-spacing: -0.6em;
  word-break: break-all;
  line-height: 1;
  font-weight: 300;
  transition: 0.75s;
  margin: 0;
  text-align: center;
}

h1:hover {
  font-weight: 1000;
}

h1 span {
  font-weight: 1000;
  transition: 1s;
}

h1:hover span {
  font-weight: 300;
}`}
      </pre>

      <h2>Вариативная типографика</h2>
      <p>Типографика как управление отображением отдельных символов, их сочетаний и текста в целом — это огромная тема, которая начинается с рукописных текстов и не заканчивается ГОСТами. Охватить её целиком невозможно, да и не нужно: веб по большей части не стремится к усложнению типографики, ведь это усложнило бы шрифты и утяжелило бы сайты и браузеры. Мы ограничимся возможностями веб-шрифтов и методами управления этими возможностями.</p>
      <p>Фактически у глобального свойства font есть множество расширений. Спецификация называет следующие:</p>
      <ul>
        <li>font-family — наименование шрифта;</li>
        <li>font-size — кегль (размер) шрифта;</li>
        <li>font-style — уже знакомое начертание (курсив или наклонное начертание);</li>
        <li>font-weight — насыщенность (вес);</li>
        <li>font-kerning — кернинг;</li>
        <li>font-variant — универсальное свойство для управления типографикой, как раз тема материала;</li>
        <li>font-feature-settings — ещё одно свойство для управления типографикой, о котором пойдёт речь.</li>
      </ul>
      <p><a href="https://www.w3.org/TR/css-fonts-3/" target="_blank" rel="noopener noreferrer">Спецификация</a> языка CSS по работе со шрифтами.</p>
      <p>Разница font-variant и font-feature-settings. По смыслу — ни в чём. Это свойства, позволяющие управлять вариативностью типографики внутри одного шрифта. Их значения могут дублировать друг друга.</p>
      <p>Авторы спецификации рекомендуют использование font-variant «по возможности». Это связано с тем, что оно должно работать со шрифтами, подключёнными локально или через базы шрифтов, в то время как font-feature-settings требует локального подключения шрифта через @font-face. Но работа font-variant менее стабильна, нужно потратить больше времени, чтобы разобраться, и хуже с поддержкой.</p>

      <h3>font-variant</h3>
      <p>Раньше (в древних версиях CSS) свойство font-variant позволяло написать текст всеми прописными буквами, но в размер строчных. Это называется капителью. Сейчас же это ключ для группы свойств.</p>
      <h4>font-variant-ligatures</h4>
      <p>Лигатура — это совместное написание двух символов. Например, в немецком языке в некоторых случаях два s вместе пишутся как ß. Вообще для многих иностранных языков это нормальная практика, печатать символы слитно. Для русского языка это нетипичный подход, русская типографика не подразумевает лигатур в обычной печати или вебе. Но лигатуры красивы для дизайна логотипов и так далее. Спецификация крайне мало касается кириллических шрифтов.</p>
      <p>Свойство может быть очень полезно для работы с сайтами на иностранных языках или для шрифтов рукописного типа. В этом контексте лигатуры будут означать связное письмо (как в школе учили, что буквы должны соединяться). Но, чтобы это заработало, лигатуры должны быть прописаны в самом шрифте, а этого обычно не случается, особенно с кириллическими шрифтами.</p>
      <p>Исключением можно назвать специализированные моноширинные шрифты для программных целей, которые содержат лигатуры программистских знаков. Используются в редакторах кода, вроде Sublime или VS Code. Применение особенных свойств для активации символов в таком случае не нужно. Про такие шрифты есть <a href="https://betterwebtype.com/articles/2020/02/13/5-monospaced-fonts-with-cool-coding-ligatures/" target="_blank" rel="noopener noreferrer">англоязычная статья 2020 года</a>.</p>
      <h4>font-variant-numeric</h4>
      <p>Свойство — целая коллекция значений для работы с числовым контентом. Обратите внимание, что применять это свойство нужно довольно точечно, иначе оно влияет на другие символы и, например, знаки препинания могут оказаться в середине строки.</p>
      <h5>Вид дробей</h5>
      <p>Значение diagonal-fractions изменяет вид слеша, которым мы показываем дробь. В первом примере применили diagonal-fractions, во-втором — нет.</p>
      <img src="img/text/text-11.png" alt="" width="800" />
      <p>Значение font-variant-numeric: stacked-fractions; должно в той же ситуации привести дробь в идеально-вертикальное положение, но это зависит не только от свойства, но и от шрифта. У большинства шрифтов может не найтись для этого символов. Тогда, если у шрифта нет таких символов, при применении свойства ничего не произойдёт.</p>
      <h5>Вид цифр</h5>
      <p>font-variant-numeric: slashed-zero; делает нули перечёркнутыми, что позволяет их с большей лёгкостью отличать от буквы O. Работает только тогда, когда такой перечёркнутый ноль есть в шрифте.</p>
      <p>font-variant-numeric: oldstyle-nums; — значение, которое отображает числа в «старом стиле». Позволяет выделить из общего вида текста числа.</p>
      <p>font-variant-numeric: lining-nums; вернёт цифры в ровный относительно базовой линии вид.</p>
      <h5>Кернинг цифр</h5>
      <p>Значения proportional-nums и tabular-nums регулируют ширину символов цифр. Это может довольно сильно влиять на внешний вид страницы, если цифры располагаются столбцами. В пропорциональном виде 1 уже, чем 9, и довольно существенно; это означает, что два числа с одинаковым разрядом (и следовательно, одинаковым количеством символов) могут занимать разное пространство. В «табулярном» виде символы и числа в целом будут занимать одинаковое место, вне зависимости от того, какие именно цифры попали туда. Слева — пропорциональный вид, справа — табулярный вид.</p>
      <h5>font-variant-caps</h5>
      <p>Это вроде как наш любимый капслок. ВСЕМИ ПРОПИСНЫМИ. Но нет! У него целых семь значений, и ни одно из них не идентично text-transform: uppercase;. Смотрите на иллюстрацию.</p>
      <img src="img/text/text-12.png" alt="" width="800" />

      <h3>font-feature-settings</h3>
      <p>Это свойство — пример того, как браузеры, спецификации и шрифты работают в связке. OpenType — это формат шрифтовых файлов, он может иметь расширения.ttf, .woff и некоторые другие. Но для типографики важно то, что тонкими настройками таких шрифтов можно управлять с помощью свойства font-feature-settings.</p>
      <p><blockquote>Функции OpenType похожи на секретные разделы в шрифтах. Раскрыть их — это найти способ заставить шрифты выглядеть и вести себя по-разному, в большей или меньшей степени. Не все функции OpenType подходят для постоянного использования, но некоторые функции имеют решающее значение для хорошей типографики.</blockquote> <cite>Тим Браун, руководитель отдела типографики Adobe</cite></p>
      <p>К примеру, добавим вариативности шрифту Vollkorn. Включим отображение лигатур и перечеркнём нули.</p>
      <img src="img/text/text-13.png" alt="Пример использования вариативности шрифта Vollkorn" width="800" />
      <p>За то, чтобы ноль был перечёркнутым, отвечает значение &quot;zero&quot;, за отображение лигатур — &&quot;dlig&quot; и &quot;liga&quot;.</p>
      <p>font-feature-settings: &quot;zero&quot;; соответственно сделает все нули, попавшие под действие свойства, перечёркнутыми. Такой записи достаточно, чтобы включить функцию, хотя запись типа &quot;zero&quot; on помогает лучше понять что происходит в коде.</p>
      <p>Если же функцию, доступную по-умолчанию, нужно выключить, обязательно добавлять off. Если свойство было применено ко всему материалу, но нужно эту особенность отключить точечно, можно написать так: font-feature-settings: &quot;zero&quot; off;. Хотя именно нулей это вряд ли коснётся, а вот для лигатур или каких-то сугубо декоративных особенностей может пригодиться.</p>
      <h5>Виды значений</h5>
      <ul>
        <li>normal — не происходит никаких изменений в выборе или позиционировании глифа. Значение по умолчанию;</li>
        <li>&quot;строка и/или целое число&quot; on/off — строка представляет собой функцию OpenType. Целое число, если присутствует, указывает индекс, используемый для выбора символа. Значение должно быть 0 или больше. Значение 0 указывает, что функция отключена. Для логических объектов значение 1 включает функцию. Для объектов, не являющихся логическими, значение 1 или больше включает объект и указывает индекс выбора объекта. Значение on является синонимом 1, а off является синонимом 0. Если значение опущено, принимается значение 1;</li>
        <li>initial — устанавливает значение свойства в значение по умолчанию;</li>
        <li>inherit — наследует значение свойства от родительского элемента.</li>
      </ul>
      <h5>Синтаксис</h5>
      <pre>{`{
  font-feature-settings: normal;
  font-feature-settings: "smcp", "swsh" 2;
  font-feature-settings: "dlig" 1;
  font-feature-settings: "smcp" on;
  font-feature-settings: "c2sc";
  font-feature-settings: "liga" off;
  font-feature-settings: "tnum", "hist";
  font-feature-settings: inherit;
  font-feature-settings: initial;

  /* Общая запись в одно свойство всех значений */
  font-feature-settings: "zero" on, "ss20" on, "kern" 5, "mark" 4, "nlck" on;
}

/* применяем лигатуры двух видов и альтернативное начертание */
.content {
  font-feature-settings: "dlig", "liga", "salt", "calt";
}

/* всё отключили */
.inactive .content {
  font-feature-settings: "dlig" off, "liga" off, "salt" off, "calt" off;
}`}
      </pre>
      <p><a href="https://helpx.adobe.com/fonts/using/open-type-syntax.html" target="_blank" rel="noopener noreferrer">Полный перечень OpenType функций и их описание</a></p>
      <p>CSS-свойство font-feature-settings может не действовать на шрифты, подключённые из баз шрифтов, например Google Fonts. Всё зависит от API, которое предоставляет база шрифтов. Чтобы настраивать типографику в этом случае, шрифт придётся подключить локально с помощью директивы @font-face.</p>
      <p>Управлять можно только теми настройками шрифта, которые разработчик предусмотрел. Чтобы узнать, какие возможности шрифта есть, можно посмотреть у разработчиков или на сервисах.</p>
      <p>Например, на сайте <a href="https://fontdrop.info/" target="_blank" rel="noopener noreferrer">fontdrop.info</a>, куда можно загрузить файл шрифта и попробовать его настройки вживую.</p>
      <p>Увидеть, какие функции настраиваются, можно и в базе шрифтов Adobe. Для этого нужно включить интересующие шрифты в свой проект, при этом придётся авторизоваться под учётной записью Adobe. На странице My Adobe Fonts во вкладке Web Projects перейти в режим редактирования проекта. В поле Character set отобразятся настраиваемые OpenType функции (возможно, дополнительно придётся установить галочку напротив OpenType Features).</p>
      <p>Соответственно, настройка OpenType функций при работе с макетом в Фигме переносится из вкладки кода с помощью CSS-свойства font-feature-settings.</p>

      <h2>Fonts Like</h2>
      <dl>
        <dt>&quot;Operator SSm Book&quot;</dt>
        <dd className="font-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
        <dt>&quot;Operator SSm XLight&quot;</dt>
        <dd className="font-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</dd>
      </dl>
    </section>
  );
}
export default Fonts;
