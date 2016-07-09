exports.addToCart = function() {
  return {
    controller: 'AddToCartController',
    templateUrl: 'templates/add_to_cart.html'
  };
};

exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: 'templates/category_products.html'
  }
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: 'templates/category_tree.html'
  }
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: 'templates/checkout.html'
  };
};

exports.logout = function() {
  return {
    controller: 'LogoutController',
    templateUrl: 'templates/logout.html'
  };
};

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: 'templates/navbar.html'
  };
};


/*
exports.body = function() {
  return {
    controller: 'BodyController',
    templateUrl: 'templates/body.html'
  };
};

*/

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: 'templates/product_details.html'
  };
};

exports.userMenu = function(){
	return {
    controller: 'MyHttpController',
    templateUrl: '<div class="user" ng-show="user">' +
              '  Current User: {{user.profile.username}}' +
              '</div>' +
              '<div ng-show="!user">' +
              '  <a href="/auth/facebook">' +
              '    Log In' +
              '  </a>' +
              '</div>'
  };
	
};

exports.searchBar = function() {
  return {
    controller: 'SearchBarController',
    templateUrl: '/templates/search_bar.html'
  };
};
