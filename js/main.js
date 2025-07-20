/* 粒子背景 */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles-js');
    const count = 50;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 5 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = Math.random() * 20 + 10 + 's';
        p.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(p);
    }

    /* 鼠标轨迹粒子 */
    document.addEventListener('mousemove', e => {
        const dot = document.createElement('div');
        dot.classList.add('particle');
        dot.style.width = '3px';
        dot.style.height = '3px';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.background = '#ff2d75';
        dot.style.opacity = 0.8;
        dot.style.animation = 'none';
        container.appendChild(dot);
        setTimeout(() => dot.remove(), 1000);
    });
});