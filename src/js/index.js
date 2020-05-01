import 'jquery';
import 'popper.js';

// **************************************
// * Option A: Include all of Bootstrap *
// **************************************

import 'bootstrap';

// ****************************************
// * Option B: Include parts of Bootstrap *
// ****************************************

// import 'bootstrap/js/dist/util';

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/index';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

$(document).ready(() => {
  // console.log('Hello, world');
  const leftSidebarMenu = $('#leftSidebarMenu .collapse');

  $(leftSidebarMenu).on('show.bs.collapse', function () {
    $(this).siblings('.card-header').find('i.fas').removeClass('fa-plus').addClass('fa-minus');
  });
  $(leftSidebarMenu).on('hide.bs.collapse', function () {
    $(this).siblings('.card-header').find('i.fas').removeClass('fa-minus').addClass('fa-plus');
  });

});
