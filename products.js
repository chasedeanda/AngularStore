(function(){
	var app = angular.module("store-products", []);

	app.controller('ReviewController', ['$http',function($http){
		this.review = {};
		// var newreview = this;
		this.addReview = function(product){

			this.review.createdOn = Date.now();
			// $http.get('/fake.json').success(function(data){
			// 	newreview.sku = data[0].guid;
			// });
			
			product.reviews.push(this.review);
			this.review = {};
		};
	}]);

	// DIRECTIVES ---------------------------------------
	// ***************************************************
	app.directive('tabs', function(){
		return{
			restrict: 'E',
			templateUrl: 'tabs.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.active = function(tabNum){
					return tabNum === this.tab;
				};
			},
			controllerAs: 'panel'
		};
	});
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});
	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-specs.html'
		};
	});
	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});
	app.directive('submitReview', function(){
		return {
			restrict: 'E',
			templateUrl: 'submit-review.html'
		};
	});
	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function(){
				this.current = 0;
				this.setCurrent = function(num){
				  this.current = num || 0;
				};
			},
			controllerAs: 'gallery'
		};
	});

})();