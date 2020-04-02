$( document ).ready(function() {

var userFeed = new Instafeed({
get: 'user'
userId: '2873938204',
limit: 8,
resolution: 'standard_resolution',
accessToken: '',
sortBy: 'most-recent',
template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();





}):