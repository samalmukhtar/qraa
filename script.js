// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('الصفحة جاهزة!');
    
    // مثال: إضافة حدث للنقر على الأزرار
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            alert('تم النقر على الزر!');
        });
    });
});