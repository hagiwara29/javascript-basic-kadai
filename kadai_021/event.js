const btn = document.getElementById('btn');

const text = document.getElementById('text')

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
        console.log('ボタンをクリックしました');
    }, 2000);
  });
  
