$(document).ready(function () {

   $('.saveBtn').on('click', function() {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, value);

      $('.notification').addClass('show');

      setTimeout(function() {
        $('notification').removeClass('show');
      }, 5000);
    });

  function hourUpdater() {
    var currentHour = dayjs().hour();

    // loop over time blocks
    $('.time-block').each(function () {
      var timeblock = parseInt($(this).attr('id').split('-')[1]);
      
      // if and else statements to determine if its the actual time or not
      if (timeblock < currentHour) {
        $(this).addClass('past');
      } else if (timeblock === currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClassClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // Is the current time correct, or does it need to be updated?
  setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13.description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});