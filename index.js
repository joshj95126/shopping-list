const state = {
    bookmarks: [{
            title: 'apples',
            check: false

        },
        {
            title: 'oranges',
            check: false
        },
        {
            title: 'milk',
            check: true
        },
        {
            title: 'bread',
            check: false
        }
    ],

}

function render() {
    console.log('Hello World!');
    const items = state.bookmarks.map(item => `
<li>
        <span class="shopping-item ${item.check?'shopping-item__checked':''}">${item.title}</span>
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
    $('body').on('click', '.shopping-item-delete', e => {
        const title = $(e.currentTarget).parent().siblings('.shopping-item').text()
        const bookmarks = state.bookmarks.filter(bookmark => bookmark.title != title)
        state.bookmarks = bookmarks
        render()
        console.log(title);
    })
    $('body').on('click', '.shopping-item-toggle', e => {
        const title = $(e.currentTarget).parent().siblings('.shopping-item').text()
        const bookmarks = state.bookmarks.map(bookmark => {
            if (bookmark.title == title) {
                bookmark.check = !bookmark.check
            }
            return bookmark;
        })
        state.bookmarks = bookmarks
        render()
    })
}


function main() {
    eventListener()
    render()
}
$(main)