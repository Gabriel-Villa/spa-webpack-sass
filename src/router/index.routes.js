import {pages} from '../controllers/index';

const d = document;

let content = d.getElementById('root')
const router = async (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/':{
            return content.appendChild(pages.home());
        }
            
        case '#/products':
            return console.log('products') 
        case '#/posts':
            return content.appendChild(await pages.posts());
        default:
            return content.appendChild(pages.notFound());
    }
}

export { router };