'use strict';
angular.module('drag-drop', [])
  .directive('ebDraggable', function() {
    return {
      restrict: 'A',
      scope: {
        dragObj: '=ebDraggable',
      },
      link: function(scope, element, attrs) {
        console.log(element)
        element.bind('dragstart', function(e) {
          console.log('this happens')
          e.dataTransfer.setData('obj', JSON.stringify(scope.dragObj));
          scope.$emit('dragstart');
        });

        element.bind('dragstop', function(e) {
          console.log('this happens')
          scope.$emit('dragstop');
        });
      }
    };
  })
  .directive('dropTarget', function() {
    return {
      restrict: 'A',
      scope: {
        onDrop: '&',
      },
      link: function(scope, element, attrs) {
        var $ = angular.element; // jQueryLite shortcut
        var dragging = 0;

        element.bind('dragover', function(e) {
          console.log('this happens')
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });

        element.bind('dragenter', function(e) {
          console.log('this happens')

          dragging++;
          $(element).addClass('drag-over');
        });

        element.bind('dragleave', function(e) {
          dragging--;

          if(_.isEqual(dragging, 0)) {
            $(element).removeClass('drag-over');
          }
        });

        element.bind('drop', function(e) {
          e.preventDefault();
          e.stopPropagation();

          dragging = 0;
          $(element).removeClass('drag-over');

          var data = JSON.parse(e.dataTransfer.getData('obj'));
          scope.onDrop()(data);
        });
      }
    };
  });
