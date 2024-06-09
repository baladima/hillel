"use strict";

$(document).ready(function () {
  var $list = $('[data-list]');
  var $input = $('[data-input]');
  var $submitButton = $('[data-submit-button]');
  var $modal = new bootstrap.Modal($('#taskModal'));
  var $modalTaskText = $('#modalTaskText');
  new Sortable($list[0], {
    animation: 150
  });
  function deleteListItem($element) {
    var $listItemToRemove = $element.closest('[data-list-item]');
    $listItemToRemove.remove();
  }
  function createListItem() {
    var task = $input.val();
    var $listItem = $('<li>', {
      'data-list-item': '',
      'class': 'list-group-item',
      'text': task
    });
    var $button = $('<button>', {
      'data-delete-button': '',
      'class': 'btn btn-primary',
      'style': 'margin-left: 16px;',
      'text': 'Delete'
    });
    $listItem.append($button);
    $list.append($listItem);
    $input.val('');
  }
  $list.on('click', '[data-delete-button]', function () {
    deleteListItem($(this));
  });
  $list.on('click', '[data-list-item]', function () {
    var taskText = $(this).clone().children().remove().end().text().trim();
    $modalTaskText.text(taskText);
    $modal.show();
  });
  $submitButton.on('click', function () {
    if ($input.val().trim() !== '') {
      createListItem();
    }
  });
  $input.on('keypress', function (e) {
    if (e.key === 'Enter') {
      $submitButton.click();
    }
  });
});