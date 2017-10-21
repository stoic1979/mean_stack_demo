angular.module('storyCtrl', ['storyService'])

.controller('StoryController', function(Story){

	var vm = this;

	Story.all()
	.then(function(response){
		console.log("-- got stories: " + JSON.stringify(response.data));
		vm.stories = response.data;

	});	

	vm.createStory = function() {

		vm.message = '';
		Story.create(vm.storyData)
		.then(function(response){

			// clear up the form's fields
			vm.storyData.content = '';

			vm.message = response.data.message; 

			console.log("story created: " + response.data.message);
			console.log("story : " + response.data.story);

			vm.stories.push(response.data.story);
		});

	};//createStory

});//StoryController