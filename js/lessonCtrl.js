angular.module("directivePractice")
.controller("lessonCtrl", function ($scope, lessonService) {
// $scope.lesson = "Two-way binding"

$scope.announceDay = function announceDay(lesson, day) {
  if(!day) {
    alert(lesson + ' is not scheduled')
  } else {
    alert(lesson + ' is active on ' + day + '.')

  }
}


$scope.lessons = ['Services',
                  'Routing',
                  'Directives',
                  'Review',
                  'Firebase',
                  'No server project',
                  'Node',
                  'Express',
                  'Mongo'];

});
