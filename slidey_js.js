

$(document).ready(function(){
  var images = [
  "url('http://www.andrew.cmu.edu/user/cfperron/cats/images/cat8.jpg')",
  "url('http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg')",
  "url('http://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg')",
  "url('http://i.ytimg.com/vi/j8ZfWJOK450/hqdefault.jpg')",
  "url('http://jasonlefkowitz.net/wp-content/uploads/2013/07/Cute-Cats-cats-33440930-1280-800.jpg')"
  ]

  var index = 0
  var background = $("#background")

  function changeImage (){
    setInterval(function(){
    $("#background").css("background-image", images[index])
    $("#background").fadeIn( 500 )
    $("#background").fadeOut( 5000)
    if (index < images.length){
      index++
    } else {
      index = 0
    }
  }, 6000)
}

  $("#background").on('click', function(){
    clearInterval(changeImage())
  })

  $("#gif").keydown(function(evt){
   if(evt.keyCode === 13){
     addSearch()
     changeImage()
   }
})

  function addSearch (){
    var gifSearch = $("#gif").val()
    var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag="
    $.getJSON(url + gifSearch, addToImages)
  }
  function addToImages(response){
    var gifUrl = response["data"]["image_url"]
    images.push(gifUrl)
  }


})
