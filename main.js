var selected_btn;

const home      = document.getElementById('home');
const gallery   = document.getElementById('gallery');
const book      = document.getElementById('book');

document.querySelectorAll('.header-btn').forEach(btn => {
    btn.addEventListener('mouseenter', (ev) => {
        document.querySelectorAll('.header-btn').forEach(b => {
            if (b.id === ev.target.id) {
                if (b.classList.contains('hb-drk')) {
                    b.classList.remove('hb-drk');
                }
            } else {
                if (!b.classList.contains('hb-drk')) {
                    b.classList.add('hb-drk');
                }
            }
        });
    });
    btn.addEventListener('mouseout', (ev) => {
        document.querySelectorAll('.header-btn').forEach(b => {
            if (!b.classList.contains('hb-drk')) {
                b.classList.add('hb-drk');
            }
        });
    });
    document.querySelectorAll('.header-btn').forEach(b => {
        if (!b.classList.contains('hb-drk')) {
            b.classList.add('hb-drk');
        }
    });
});

function btnclick(el) {
    if (el.id.split('-')[1] === 'home') {
        if (home.classList.contains('hidden')) {home.classList.remove('hidden')};
        if (!gallery.classList.contains('hidden')) {gallery.classList.add('hidden')};
        if (!book.classList.contains('hidden')) {book.classList.add('hidden');}
    }
    if (el.id.split('-')[1] === 'gallery') {
        if (!home.classList.contains('hidden')) {home.classList.add('hidden')};
        if (gallery.classList.contains('hidden')) {gallery.classList.remove('hidden')};
        if (!book.classList.contains('hidden')) {book.classList.add('hidden');}
    }
    if (el.id.split('-')[1] === 'book') {
        if (!home.classList.contains('hidden')) {home.classList.add('hidden')};
        if (!gallery.classList.contains('hidden')) {gallery.classList.add('hidden')};
        if (book.classList.contains('hidden')) {book.classList.remove('hidden');}
    }
}