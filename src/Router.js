import App from './App';
import Tab from './tab/tab';

let routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/tab',
                component: Tab
            }
        ]
    },
    
]

export default routes