window.addEventListener('scroll', function() {
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function menutoggle() {
    const menutoggle = this.document.querySelector('.menutoggle');
    const navigation = this.document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}