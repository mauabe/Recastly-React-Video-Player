// var searchYoutube = function (query, callback){
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search?',
//     data:{
//       key: window.YOUTUBE_API_KEY,
//       q: query,
//       part: 'snippet',
//       maxResults: 10,
//       videoEmbeddable: 'true'
//     },
//     type: 'GET',
//     //dataType: 'json',
//     sucess: function(data){
//       console.log(data);
//       if (callback){
//         callback(data);
//       }
//     },
//   }
//   );
// }

var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log(key, query);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        console.log(items);
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => 
        
        console.error(err)
      );
    });
};

//window.APICall = APICall;

window.searchYouTube = searchYouTube;


