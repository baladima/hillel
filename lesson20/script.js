$(document).ready(function () {
    let $list = $('[data-list]');
    let $input = $('[data-input]');
    let $submitButton = $('[data-submit-button]');
    let $modal = new bootstrap.Modal($('#taskModal'));
    let $modalTaskText = $('#modalTaskText');

    new Sortable($list[0], {
        animation: 150
    });

    function deleteListItem($element) {
        let $listItemToRemove = $element.closest('[data-list-item]');
        $listItemToRemove.remove();
    }

    function createListItem() {
        let task = $input.val();

        let $listItem = $('<li>', {
            'data-list-item': '',
            'class': 'list-group-item',
            'text': task
        });

        let $button = $('<button>', {
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
        let taskText = $(this).clone().children().remove().end().text().trim();
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
