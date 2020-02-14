const request = new XMLHttpRequest()


request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  let data = JSON.parse(this.response)
  const container = document.getElementById('container')

  data.forEach(movie => {
      console.log(movie.title)
      const movie_div = document.createElement('div')
      movie_div.innerHTML ='<div class="title">' + movie.title + '</div> <div class="desc">' + movie.description + '</div>'
      container.append(movie_div)
  })

}


// Send request
request.send()