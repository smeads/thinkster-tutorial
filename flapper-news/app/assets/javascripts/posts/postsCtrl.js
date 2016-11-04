angular
.module('flapperNews')
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, posts, post){
  $scope.post = post;

  $scope.addComment = function(){
      if($scope.body === '') { return; }
      posts.addcomment(post.id, {
        body: $scope.body,
        author: 'user',
      }).success(function(comment) {
        $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };
    $scope.incremmentUpvotes = function(comment){
    posts.upvotesComment(post, comment);
  };
}]);
