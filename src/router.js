import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import toolbar from './views/Toolbar'
import TableroPrincipal from "./views/TableroPrincipal";
import Menu from "./views/Menu";
import Bienvenida from "./views/Bienvenida";
import Temas  from "./views/Temas";
import Agudas from "./views/Agudas";
import Graves from "./views/Graves";
import Retos from "./views/Retos";
import Esdru from "./views/Esdru";
import Sobre from "./views/Sobre";
import Punto from "./views/Punto";
import Diptongo from "./views/Diptongo";
import JuegoPreguntas from "./views/JuegoPreguntas"


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'bienvenida',
            components: {main: Bienvenida}
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
        {
            path:'/tablero/temas/Agudas',
            name: 'Agudas',
            components:{ main: Agudas}
        },
        {
            path:'/tablero/temas/Graves',
            name: 'Graves',
            components:{ main: Graves}
        },
        {
            path:'/tablero/temas/Esdru',
            name: 'Esdru',
            components:{ main: Esdru}
        },
        {
            path:'/tablero/temas/Sobre',
            name: 'Sobre',
            components:{ main: Sobre}
        },
        {
            path:'/tablero/temas/Punto',
            name: 'Punto',
            components:{ main: Punto}
        },
        {
            path:'/tablero/temas/Diptongo',
            name: 'Diptongo',
            components:{ main: Diptongo}
        },
        {
            path:'/tablero/juegos/JuegoPreguntas',
            name: 'JuegoPreguntas',
            components:{ main: JuegoPreguntas}
        }
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