const state = {
    bookmarks: [{
            title: 'apples',
            check: false

        },
        {
            title: 'oranges',
            check: false
        }

    ],

}

function render() {
    console.log('Hello World!');
    const items = state.bookmarks.map(item => `
<li>
        <span class="shopping-item">${item.title}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
`)
    $('.shopping-list').html(items)
}

function eventListener() {
    $('form').submit(e => {
        console.log('Hello World!');
        e.preventDefault()
        const titleValue = e.target.title.value
        state.bookmarks.push({
            title: titleValue,
            check: false
        })
        render()
    })
}

function main() {
    eventListener()
    render()
}
$(main)