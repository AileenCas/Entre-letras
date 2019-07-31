import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import toolbar from './views/Toolbar'
import TableroPrincipal from "./views/TableroPrincipal";
import Menu from "./views/Menu";
import Bienvenida from "./views/Bienvenida";
import Temas  from "./views/Temas";
import Retos from "./views/Retos";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'bienvenida',
            components: {
                main: Bienvenida
            }

        },
        {
            path: '/tablero',
            name: 'TableroPrincipal',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components:{ main: TableroPrincipal}

        },
        {
            path: '/tablero/temas',
            name: 'Temas',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components:{ main: Temas}

        },
       /* {
            path: '/Retos',
            name: 'Retos',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Temas

        }*/
    ]
})