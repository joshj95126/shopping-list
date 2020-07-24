function render(title, check) {
    const items = `
<li>
        <span class="shopping-item ${check?'shopping-item__checked':''}">${title}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
`
    $('.shopping-list').append(items)
}

function eventListener() {
    $('body').on('submit', 'form', function(e) {
        e.preventDefault()
        const titleValue = this['shopping-list-entry'].value
        render(titleValue, false)
    })
    $('body').on('click', '.shopping-item-delete', e => {
        const title = $(e.currentTarget).parent().parent().remove()
    })
    $('body').on('click', '.shopping-item-toggle', e => {
        const title = $(e.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')


    })
}


function main() {
    eventListener()

}
$(main)