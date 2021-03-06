import React from 'react';

function MediaQueries() {

  return (
    <section className="conspect">
      <h1>Медиа-запросы</h1>
      <p><a href="https://web.dev/building-an-adaptive-favicon/" target="_blank" rel="noopener noreferrer">Building an adaptive favicon</a></p>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener noreferrer">MDN. prefers-color-scheme</a></p>
      <h2>Медиавыражения</h2>
      <p>Медиавыражения — это способ определить в стилях характеристики браузера или предпочтения пользователя, а затем применить стили или запустить другой код на основе этих параметров. Разрешение экрана, ориентация устройства, настройки операционной системы и другое.</p>
      <p>Чтобы медиавыражение заработало, нужно добавить директиву <span className="hl-8">@media</span>.</p>
      <h3>Характеристики</h3>
      <p><span className="hl-10">resolution</span> - плотность экрана. Используется с префиксом min-, чтобы определить любые экраны с повышенной плотностью выше указанной.</p>
      <p><span className="hl-9">width</span> - используется крайне редко, так как оно срабатывает только для размера вьюпорта, который равен указанной в выражении ширине. Чаще всего вы можете встретить медиавыражение с параметром min-width и max-width - работают включительно.</p>
      <p><span className="hl-7">height</span> - не используют без префиксов. Значения min-height и max-height используются в тех случаях, когда адаптируют плотность или разреженность интерфейса для экранов разной высоты — например, для интерфейса почты.</p>
      <pre>{`@media (min-resolution: 2dppx) {
  .block {
      background-image: url("image@2x.png");
  }
}
срабатывает для экранов с повышенной плотностью 2 и больше.

@media (width: 1024px){
  .block {

  }
}
сработает только для размера вьюпорта 1024px по ширине

@media (min-width: 1024px){
  .block {

  }
}

@media (max-width: 1024px){
  .block {

  }
}

@media (min-height: 1024px){
  .block {

  }
}

@media (max-height: 1024px){
  .block {

  }
}`}
      </pre>

      <h2>Операторы</h2>
      <p>Условиями выступают операторы, с помощью которых мы можем объединять функции или давать несколько факторов срабатывания изменения интерфейса.</p>
      <p><span className="hl-6">and</span> - чтобы выражение применилось должны быть истинны все условия.</p>
      <p><span className="hl-5">or</span> - чтобы выражение применилось должно быть истинно хотя бы одно из условий.</p>
      <pre>{`@media screen (min-width: 320px) and (max-width: 768px) {
  .block {

  }
}
.block изменится, если размер вьюпорта от 320px до 768px.

можно разделить запятыми функции как способ использования or:
@media screen (min-resolution: 2dppx), (min-width 2560px) {
  .block {

  }
}
сработает, если плотность экрана выше 2 или ширина окна больше 2560px.`}
      </pre>
      <p><span className="hl-4">Горизонтальный скролл всего сайта - это всегда плохо.</span></p>
      <p><span className="hl-4">padding указывать обязательно, контент никогда ни к чему не должен прижиматься.</span></p>
      <p>Выбор брейкпойнтов: по макету. Ширина брейкпоинта = ширина контента + отступы.</p>
      <pre>{`// От 320px мобильная версия
body {
 min-width: 320px; // лучше задать на body, чтобы не выпадали фоны
}
.container {
 width: 280px; // либо auto, если макет резиновый
 padding: 0 20px; // не забываем про отступы контента от краёв
}
// От 768px планшетная версия
@media (min-width: 768px) {
 .container {
 width: 640px; // либо auto, если макет резиновый
 padding: 0 64px; // не забываем про отступы контента от краёв
 }
}
// От 1200 десктопная версия
@media (min-width: 1200px) {
 .container {
 width: 960px; // на десктопе контент обычно фиксированной ширины
 padding: 0 120px; // не забываем про отступы контента от краёв
 }
}`}
      </pre>
      <pre>{`Выбор брейкпоинтов: вручную
// От 320px мобильная версия
body {
 min-width: 320px;
}
.container {
 width: auto;
 padding: 0 20px;
}
// От 768px планшетная версия
@media (min-width: 768px) {
 .container {
 width: auto;
 padding: 0 64px;
 }
}
// От 1068px десктопная версия
@media (min-width: 1068px) {
 .container {
 width: 960px; // ширина контента такая же, как и в первом варианте
 padding: 0 64px; // просто уменьшились отступы
 }
}
// Ширина контейнера на вьюпорте в 1067px: 1067px - 128px = 959px
// Результат: бесшовный переход от планшета к десктопу`}
      </pre>
      <p><span className="hl-3">ppi - pixel per inch, количество пикселей на 1 дюйм.</span></p>
    </section>
  );
}
export default MediaQueries;
