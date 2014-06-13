'use strict';

angular.$ = angular.element;

// jqLite `.parent()` 支持 selector
angular.$.prototype.parent = function(sel) {
  if(!sel) return angular.$(this[0].parentNode);
  var list = [].slice.call(document.querySelectorAll(sel))
    , currentNode = this[0]
    , ret;

  while(currentNode.nodeName !== 'HTML') {
    currentNode = currentNode.parentNode;
    var index = list.indexOf(currentNode);
    if(index !== -1) {
      ret = currentNode;
      currentNode = document.documentElement;
      continue;
    }
  }
  return angular.$(ret);
}

// jqLite `.find()` 支持 selector
angular.$.prototype.find = function(sel) {
  if(!sel) return angular.$();
  var list = [].slice.call(document.querySelectorAll(sel))
    , childrens = [].slice.call(this[0].getElementsByTagName('*'))
    , ret = [];

  list.forEach(function(el) {
    if(childrens.indexOf(el) !== -1) ret.push(el);
  })

  return angular.$(ret);
}

angular.module('meleme.directives', [])

  /* 抽屉式 menu
   * Example:
   *   0. <button melemeDrawer="SELECTOR">Menu</button>
   *   1. 不指定 SELECTOR 时，在按钮本身加 `drawer-open` 这个 class
   *   2. 指定时，在 SELECTOR 上加 `drawer-open` 这个 class
   */
  .directive('melemeDrawer', function() {
    return {
      restrict: 'A',
      link: function(scope, $el, attrs) {
        var $target =  attrs.melemeDrawer ? angular.$(document.querySelectorAll(attrs.melemeDrawer)) : $el;

        $el.on('click', function(e) {
          e.preventDefault();

          $target.toggleClass('drawer-open');
          [].slice.call(angular.$(document).find('[meleme-drawer]')).forEach(function(el){
            el.classList.toggle('active');
          })
        })
      }
    }
  })

  /* 下拉菜单
   * Example:
   *   0. <button melemeDropdown="SELECTOR">Toggle Dropdown</button>
   *   1. 不指定 SELECTOR 时，在按钮的父节点加上 `dropdown-open` 这个 class
   *   2. 指定时，在 SELECTOR 上加 `dropdown-open` 这个 class
   */
  .directive('melemeDropdown', function() {
    return {
      retrict: 'A',
      link: function(scope, $el, attrs) {

        var $dropdown = attrs.melemeDropdown && document.querySelectorAll(attrs.melemeDropdown);
        $dropdown = $dropdown.length ? angular.$($dropdown) : $el.parent();

        $el.on('click', function(e) {
          e.preventDefault();
          $dropdown.toggleClass('dropdown-open');
        });

//        $dropdown.on('mouseleave', function() {
//          $dropdown.removeClass('dropdown-open');
//        })
      }
    }
  })

  /* Tab 切换
   * Example:
   *   0. <button melemeTab="#ID">显示拥有 #ID 的元素</button>
   *   1. 不指定 #ID 时，在按钮的父节点加上 `dropdown-open` 这个 class
   *   2. 指定或者有 href="#ID" 的时候，在本身或者 #ID 上加 `dropdown-open` 这个 class
   */
  .directive('melemeTab', function() {
    return {
      restrict: 'A',
      link: function(scope, $tab, attrs) {
        var target = attrs.melemeTab || $tab.attr('href')
          , $target = target ? angular.$(document.querySelector(target)) : angular.$()
          , $tabParent = $tab.parent('.tab-title');

        $tabParent = $tabParent.length ? $tabParent : $tab.parent();
        $tab.on('click', function(e) {
          e.preventDefault();

          $target.parent('.tab-content').find('.active').removeClass('active');
          $target.addClass('active');

          $tabParent.find('.active').removeClass('active');
          $tab.addClass('active');
        })
      }
    }
  })

  /* Accordion 显示
   * Example:
   *   0. <button melemeAccordion="SELECTOR">SELECTOR</button>
   *   1. 不指定 SELECTOR 时，在按钮的父节点加上 `active` 这个 class
   *   2. 指定的时候，在 SELECTOR 上加 `active` 这个 class
   */
  .directive('melemeAccordion', function() {
    return {
      restrict: 'A',
      link: function(scope, $el, attrs) {

        var $parent = $el.parent(attrs.melemeAccordion);

        $el.on('click', function(e) {
          e.preventDefault();
          $parent.toggleClass('active');
        })
      }
    }
  })