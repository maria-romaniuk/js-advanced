
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */



  //достать из контейнера кнопку data
  //в теле найти по селектору data-tab нужный
  // добавить ему класс active (.add.toggleclass)
  //удалить active при переключении removeclass




//   var btn = document.querySelectorAll('.showButtons');
//   var tab = document.querySelectorAll('.tab[data-tab]');
//
//   console.log(btn);
//   console.log(tab);
//
//
// btn.forEach(function () {
//
// });



  var buttonContainer = document.getElementById('buttonContainer');
  var tabContainer = document.getElementById('showButton');

  buttonContainer.onclick = function () {
      var btn = event.target.dataset.tab;
      console.log(btn);
      tabContainer = event.target.dataset.tab;
      console.log(tabContainer);
  };
  // var Eventmode = function () {
  //     if (btn[i] = tabContainer[i]) {
  //         tabContainer.toggle('active');
  //     }
  // };
  // Eventmode();

  // tabContainer = function () {
  //     var tab_num = tabContainer.querySelector('[data-tab]');
  //     tab_num.classList.toggle('active');
  //    console.log(tab_num);
  // };


  // var tab = function () {
  //
  // };
  //
  //
  // buttonContainer.onclick = function () {
  //
  // };










