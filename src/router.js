import Vue from 'vue'
import Router from 'vue-router'
import TableroPrincipal from "./views/TableroPrincipal";
import Toolbar from "./views/Toolbar";
import Bienvenida from "./views/Bienvenida";
import Temas from "./views/Temas";
import Agudas from "./views/Agudas";
import Graves from "./views/Graves";
import retos from "./views/Retos";
import Esdru from "./views/Esdru";
import Sobre from "./views/Sobre";
import Punto from "./views/Punto";
import Diptongo from "./views/Diptongo";
import Triptongos from "./views/Triptongos";
import Hiato from "./views/Hiato";
import Exclama from "./views/Exclama";
import Coma from "./views/Coma";
import Dia from "./views/Dia";
import Compuestas from "./views/Compuestas";
import Comillas from "./views/Comillas";
import Inte from "./views/Inte";
import Tilde from "./views/Tilde";
import JuegoPreguntas from "./views/JuegoPreguntas";
import Perfil from "./views/Perfil";
import Comparte from "./views/Comparte";
import JUEGO1 from "./views/JUEGO1";
import JUEGO2 from "./views/JUEGO2";
import AgudasR from "./views/AgudasR";
import GravesR from "./views/GravesR";
import EsdruR from "./views/EsdruR";
import SobreR from "./views/SobreR";
import PuntoR from "./views/PuntoR";
import DiptongoR from "./views/DiptongoR";
import TriptongosR from "./views/TriptongosR";
import HiatoR from "./views/HiatoR";
import ComaR from "./views/ComaR";
import TildeR from "./views/TildeR";
import DiaR from "./views/DiaR";
import CompuestasR from "./views/CompuestasR";
import ComillasR from "./views/ComillasR";
import ExclaR from "./views/ExclaR";
import InteR from "./views/InteR";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: ' Bienvenida',
            components: {main: Bienvenida}
        },
        {
            path: '/tablero',
            name: 'TableroPrincipal',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: TableroPrincipal}
        },
        {
            path: '/tablero/temas',
            name: 'Temas',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: Temas}
        },
        {
            path: '/tablero/temas/Agudas',
            name: 'Agudas',
            components: {main: Agudas}
        },
        {
            path: '/tablero/temas/Graves',
            name: 'Graves',
            components: {main: Graves}
        },
        {
            path: '/tablero/temas/Esdru',
            name: 'Esdru',
            components: {main: Esdru}
        },
        {
            path: '/tablero/temas/Sobre',
            name: 'Sobre',
            components: {main: Sobre}
        },
        {
            path: '/tablero/temas/Punto',
            name: 'Punto',
            components: {main: Punto}
        },
        {
            path: '/tablero/temas/Diptongo',
            name: 'Diptongo',
            components: {main: Diptongo}
        },
        {
            path: '/tablero/temas/Triptongos',
            name: 'Triptongos',
            // eslint-disable-next-line no-undef
            components: {main: Triptongos}
        },
        {
            path: '/tablero/temas/Hiato',
            name: 'Hiato',
            // eslint-disable-next-line no-undef
            components: {main: Hiato}
        },
        {
            path: '/tablero/retos/JuegoPreguntas',
            name: 'JuegoPreguntas',
            components: {main: JuegoPreguntas}
        },
        {
            path: '/tablero/juegos/Exclama',
            name: 'Exclama',
            components: {main: Exclama}
        },
        {
            path: '/tablero/temas/Coma',
            name: 'Coma',
            // eslint-disable-next-line no-undef
            components: {main: Coma}
        },
        {
            path: '/tablero/temas/Dia',
            name: 'Dia',
            // eslint-disable-next-line no-undef
            components: {main: Dia}
        },
        {
            path: '/tablero/temas/Compuestas',
            name: 'Compuestas',
            // eslint-disable-next-line no-undef
            components: {main: Compuestas}
        },
        {
            path: '/tablero/temas/Comillas',
            name: 'Comillas',
            // eslint-disable-next-line no-undef
            components: {main: Comillas}
        },
        {
            path: '/tablero/temas/Inte',
            name: 'Inte',
            // eslint-disable-next-line no-undef
            components: {main: Inte}
        },
        {
            path: '/tablero/temas/Tilde',
            name: 'Tilde',
            // eslint-disable-next-line no-undef
            components: {main: Tilde}
        },

        {
            path: '/tablero/retos',
            name: 'retos',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: retos}

        },
        {
            path: '/tablero/Toolbar',
            name: 'Toolbar',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: Toolbar}

        },
        {
            path: '/tablero/Menu/Perfil',
            name: 'Perfil',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: Perfil}

        },
        {
            path: '/tablero/Comparte',
            name: 'Comparte',
            components: {main: Comparte}
        },
        {
            path:'/tablero/JUEGO1',
            name: 'JUEGO1',
            components:{main: JUEGO1 }
        },
        {
            path:'/tablero/retos/AgudasR',
            name:'AgudasR',
            components:{main: AgudasR}
        },
        {
            path:'/tablero/retos/GravesR',
            name:'GravesR',
            components:{main: GravesR}
        },
        {
            path:'/tablero/retos/EsdruR',
            name:'EsdruR',
            components:{main: EsdruR}
        },
        {
            path:'/tablero/retos/SobreR',
            name:'SobreR',
            components:{main: SobreR}
        },
        {
            path:'/tablero/retos/PuntoR',
            name:'PuntoR',
            components:{main: PuntoR}
        },
        {
            path:'/tablero/retos/DiptongoR',
            name:'DiptongoR',
            components:{main: DiptongoR}
        },
        {
            path:'/tablero/retos/TriptongosR',
            name:'TriptongosR',
            components:{main: TriptongosR}
        },
        {
            path:'/tablero/retos/HiatoR',
            name:'HiatoR',
            components:{main: HiatoR}
        },
        {
            path:'/tablero/retos/ComaR',
            name:'ComaR',
            components:{main: ComaR}
        },
        {
            path:'/tablero/retos/TildeR',
            name:'TildeR',
            components:{main: TildeR}
        },
        {
            path:'/tablero/retos/DiaR',
            name:'DiaR',
            components:{main: DiaR}
        },
        {
            path:'/tablero/retos/CompuestasR',
            name:'CompuestasR',
            components:{main:CompuestasR}
        },
        {
            path:'/tablero/retos/ComillasR',
            name:'ComillasR',
            components:{main: ComillasR}
        },
        {
            path:'/tablero/retos/ExclaR',
            name:'ExclaR',
            components:{main: ExclaR}
        },
        {
            path:'/tablero/retos/InteR',
            name:'InteR',
            components:{main: InteR}
        },
        {
            path:'/tablero/JUEGO2',
            name: 'JUEGO2',
            components:{main: JUEGO2 }
        },
    ]
})