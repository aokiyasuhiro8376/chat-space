$(function(){
  function buildHTML(messages){
    if (message.image) {
      var html = 
    }
  }
  $('#message_content').on('submit', function(e){
    e.preventDefault()
    $.ajax({
      url: '/messages/json',
      type: 'POST',
      date: new FormData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});