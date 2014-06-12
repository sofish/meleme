'use strict';

angular.module('meleme.directives', [])

  // 抽屉式 menu
  .directive('melemeDrawer', function() {
    return {
      restrict: 'A',
      link: function(scope, $el, attrs) {
        var $target =  document.querySelector(attrs.melemeDrawer) || $el;
        $target = angular.element($target);

        $el.on('click', function() {
          scope.drawer = false;
          $el.toggleClass('active');
          $target.toggleClass('drawer-open');
        })
      }
    }
  });
