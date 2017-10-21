angular.module('storyCtrl', ['storyService'])

.controller('StoryController', function(Story){

	var vm = this;

	Story.all()
	.then(function(response){
		console.log("-- got stories: " + JSON.stringify(response.data));

		// show stories in reverse order of creation
		// means, latest at top pos in list
		vm.stories = response.data.slice().reverse();
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

			// insert latest story in begining of array
			vm.stories.unshift(response.data.story);
		});

	};//createStory

});//StoryController