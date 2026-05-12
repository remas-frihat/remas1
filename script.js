// إضافة تأثيرات للروابط
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#1abc9c';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = 'white';
    });
});

// إضافة تأثيرات لعناصر الخدمات والمرافق
document.querySelectorAll('.service-item, .facility-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});