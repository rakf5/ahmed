document.addEventListener('DOMContentLoaded', function() {
    // تأكد من إضافة التأثيرات عند تحميل الصفحة
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(el) {
        el.classList.add('fade-in');
    });

    const slideUpElements = document.querySelectorAll('.fade-in-slide-up');
    slideUpElements.forEach(function(el) {
        el.classList.add('fade-in-slide-up');
    });
});
