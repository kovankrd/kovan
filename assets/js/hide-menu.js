$(document).ready(function(){
    $("#main-item-1, #main-item-2").on('click', function(){
      $('#main-dropdown, #main-ul').removeClass('show');
    });
    $('#submenu-item-1, #submenu-item-2').on('click', function(){
      $('#main-dropdown, #main-ul').removeClass('show');
    });
  });