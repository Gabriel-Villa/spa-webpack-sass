import views from '../views/home.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = 'text-danger';
    divElement.innerHTML = views; 

    const btn = divElement.querySelector('.btn-click');
    btn.addEventListener('click',() => {
        alert('click');
    })
    return divElement;
}