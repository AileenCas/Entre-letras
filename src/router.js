import Vue from 'vue'
import Router from 'vue-router'
import TableroPrincipal from "./views/TableroPrincipal";
import Toolbar from "./views/Toolbar";
import Perfil from "./views/Perfil";
import Bienvenida from "./views/Bienvenida";
import Temas from "./views/Temas";
import retos from "./views/Retos";
import Resultados from "./views/Resultados";
import Tips from "./views/Tips";
import Agudas from "./views/Agudas";
import Agudas1 from "./views/Agudas1";
import Agudas2 from "./views/Agudas2";
import AgudasR from "./views/AgudasR";
import GravesR from "./views/GravesR";
import Graves from "./views/Graves";
import Graves1 from "./views/Graves1";
import Graves2 from "./views/Graves2";
import Esdru from "./views/Esdru";
import EsdruR from "./views/EsdruR";
import Esdru1 from "./views/Esdru1";
import Esdru2 from "./views/Esdru2";
import SobreR from "./views/SobreR";
import Sobre from "./views/Sobre";
import Sobre1 from "./views/Sobre1";
import Sobre2 from "./views/Sobre2";
import Punto from "./views/Punto";
import PuntoR from "./views/PuntoR";
import Punto1 from "./views/Punto1";
import Punto2 from "./views/Punto2";
import DiptongoR from "./views/DiptongoR";
import Diptongo from "./views/Diptongo";
import Diptongo1 from "./views/Diptongo1";
import Diptongo2 from "./views/Diptongo2";
import Triptongos2 from "./views/Triptongos2";
import Triptongos from "./views/Triptongos";
import TriptongosR from "./views/TriptongosR";
import Triptongos1 from "./views/Triptongos1";
import HiatoR from "./views/HiatoR";
import Hiato from "./views/Hiato";
import Hiato1 from "./views/Hiato1";
import Hiato2 from "./views/Hiato2";
import Coma2 from "./views/Coma2";
import Coma from "./views/Coma";
import ComaR from "./views/ComaR";
import Coma1 from "./views/Coma1";
import Tilde from "./views/Tilde";
import Tilde1 from "./views/Tilde1";
import TildeR from "./views/TildeR";
import Tilde2 from "./views/Tilde2";
import Dia2 from "./views/Dia2";
import Dia from "./views/Dia";
import DiaR from "./views/DiaR";
import Dia1 from "./views/Dia1";
import Compuestas1 from "./views/Compuestas1";
import CompuestasR from "./views/CompuestasR";
import Compuestas from "./views/Compuestas";
import Compuestas2 from "./views/Compuestas2";
import Comillas from "./views/Comillas";
import ComillasR from "./views/ComillasR";
import Comillas1 from "./views/Comillas1";
import Comillas2 from "./views/Comillas2";
import Excla1 from "./views/Excla1";
import ExclaR from "./views/ExclaR";
import Exclama from "./views/Exclama";
import Excla2 from "./views/Excla2";
import Inte2 from "./views/Inte2";
import Inte from "./views/Inte";
import InteR from "./views/InteR";
import Inte1 from "./views/Inte1";
import JUEGO1 from "./views/JUEGO1";
import JUEGO2 from "./views/JUEGO2";

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
            path: '/tablero/retos',
            name: 'retos',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: retos}

        },
        {
            path: '/tablero/Resultados',
            name: 'Resultados',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: Resultados}

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
            path: '/tablero/Tips',
            name: 'Tips',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {main: Tips}

        },
        {
            path: '/tablero/temas/Agudas',
            name: 'Agudas',
            components: {main: Agudas}
        },
        {
            path:'/tablero/retos/AgudasR',
            name:'AgudasR',
            components:{main: AgudasR}
        },
        {
            path: '/tablero/retos/Agudas2',
            name: 'Agudas1',
            components: {main: Agudas1}
        },
        {
            path: '/tablero/retos/Agudas2',
            name: 'Agudas2',
            components: {main: Agudas2}
        },
        {
            path: '/tablero/temas/Graves',
            name: 'Graves',
            components: {main: Graves}
        },
        {
            path:'/tablero/retos/GravesR',
            name:'GravesR',
            components:{main: GravesR}
        },
        {
            path:'/tablero/retos/Graves1',
            name:'Graves1',
            components:{main: Graves1}
        },
        {
            path:'/tablero/retos/Graves2',
            name:'Graves2',
            components:{main: Graves2}
        },
        {
            path:'/tablero/retos/EsdruR',
            name:'EsdruR',
            components:{main: EsdruR}
        },
        {
            path: '/tablero/temas/Esdru',
            name: 'Esdru',
            components: {main: Esdru}
        },
        {
            path: '/tablero/temas/Esdru1',
            name: 'Esdru1',
            components: {main: Esdru1}
        },
        {
            path: '/tablero/temas/Esdru2',
            name: 'Esdru2',
            components: {main: Esdru2}
        },
        {
            path: '/tablero/temas/Sobre',
            name: 'Sobre',
            components: {main: Sobre}
        },
        {
            path: '/tablero/temas/Sobre1',
            name: 'Sobre1',
            components: {main: Sobre1}
        },
        {
            path: '/tablero/temas/Sobre2',
            name: 'Sobre2',
            components: {main: Sobre2}
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
            path: '/tablero/temas/Punto',
            name: 'Punto',
            components: {main: Punto}
        },
        {
            path: '/tablero/temas/Punto2',
            name: 'Punto2',
            components: {main: Punto2}
        },
        {
            path: '/tablero/temas/Punto1',
            name: 'Punto1',
            components: {main: Punto1}
        },
        {
            path: '/tablero/temas/Diptongo',
            name: 'Diptongo',
            components: {main: Diptongo}
        },
        {
            path: '/tablero/retos/diptongo1',
            name: 'Diptongo1',
            components: {main: Diptongo1}
        },
        {
            path:'/tablero/retos/DiptongoR',
            name:'DiptongoR',
            components:{main: DiptongoR}
        },
        {
            path:'/tablero/retos/Diptongo2',
            name:'Diptongo2',
            components:{main: Diptongo2}
        },
        {
            path:'/tablero/retos/Triptongos2',
            name:'Triptongos2',
            components:{main: Triptongos2}
        },
        {
            path:'/tablero/retos/TriptongosR',
            name:'TriptongosR',
            components:{main: TriptongosR}
        },
        {
            path: '/tablero/temas/Triptongos',
            name: 'Triptongos',
            // eslint-disable-next-line no-undef
            components: {main: Triptongos}
        },
        {
            path: '/tablero/temas/Triptongos1',
            name: 'Triptongos1',
            // eslint-disable-next-line no-undef
            components: {main: Triptongos1}
        },
        {
            path: '/tablero/temas/Hiato',
            name: 'Hiato',
            // eslint-disable-next-line no-undef
            components: {main: Hiato}
        },
        {
            path: '/tablero/temas/Hiato1',
            name: 'Hiato1',
            // eslint-disable-next-line no-undef
            components: {main: Hiato1}
        },
        {
            path:'/tablero/retos/HiatoR',
            name:'HiatoR',
            components:{main: HiatoR}
        },
        {
            path:'/tablero/retos/Hiato2',
            name:'Hiato2',
            components:{main: Hiato2}
        },

        {
            path: '/tablero/temas/Coma2',
            name: 'Coma2',
            // eslint-disable-next-line no-undef
            components: {main: Coma2}
        },

        {
            path: '/tablero/temas/Coma',
            name: 'Coma',
            // eslint-disable-next-line no-undef
            components: {main: Coma}
        },
        {
            path:'/tablero/retos/ComaR',
            name:'ComaR',
            components:{main: ComaR}
        },
        {
            path:'/tablero/retos/Coma1',
            name:'Coma1',
            components:{main: Coma1}
        },
        {
            path: '/tablero/temas/Tilde',
            name: 'Tilde',
            // eslint-disable-next-line no-undef
            components: {main: Tilde}
        },
        {
            path:'/tablero/retos/TildeR',
            name:'TildeR',
            components:{main: TildeR}
        },
        {
            path:'/tablero/retos/Tilde1',
            name:'Tilde1',
            components:{main: Tilde1}
        },
        {
            path:'/tablero/retos/Tilde2',
            name:'Tilde2',
            components:{main: Tilde2}
        },
        {
            path:'/tablero/retos/Dia2',
            name:'Dia2',
            components:{main: Dia2}
        },
        {
            path:'/tablero/retos/DiaR',
            name:'DiaR',
            components:{main: DiaR}
        },
        {
            path: '/tablero/temas/Dia',
            name: 'Dia',
            // eslint-disable-next-line no-undef
            components: {main: Dia}
        },
        {
            path:'/tablero/retos/Dia1',
            name:'Dia1',
            components:{main: Dia1}
        },
        {
            path: '/tablero/retos/CompuestasR',
            name: 'CompuestasR',
            components: {main: CompuestasR}
        },
        {
            path: '/tablero/temas/Compuestas',
            name: 'Compuestas',
            // eslint-disable-next-line no-undef
            components: {main: Compuestas}
        },
        {
            path: '/tablero/temas/Compuestas1',
            name: 'Compuestas1',
            // eslint-disable-next-line no-undef
            components: {main: Compuestas1}
        },
        {
            path: '/tablero/temas/Compuestas2',
            name: 'Compuestas2',
            // eslint-disable-next-line no-undef
            components: {main: Compuestas2}
        },
        {
            path: '/tablero/temas/Comillas2',
            name: 'Comillas2',
            // eslint-disable-next-line no-undef
            components: {main: Comillas2}
        },
        {
            path: '/tablero/temas/Comillas',
            name: 'Comillas',
            // eslint-disable-next-line no-undef
            components: {main: Comillas}
        },
        {
            path:'/tablero/retos/ComillasR',
            name:'ComillasR',
            components:{main: ComillasR}
        },
        {
            path:'/tablero/retos/Comillas1',
            name:'Comillas1',
            components:{main: Comillas1}
        },
        {
            path:'/tablero/retos/ExclaR',
            name:'ExclaR',
            components:{main: ExclaR}
        },
        {
            path: '/tablero/juegos/Exclama',
            name: 'Exclama',
            components: {main: Exclama}
        },
        {
            path:'/tablero/retos/Excla1',
            name:'Excla1',
            components:{main: Excla1}
        },
        {
            path:'/tablero/retos/Excla2',
            name:'Excla2',
            components:{main: Excla2}
        },
        {
            path: '/tablero/temas/Inte2',
            name: 'Inte2',
            // eslint-disable-next-line no-undef
            components: {main: Inte2}
        },
        {
            path: '/tablero/temas/Inte',
            name: 'Inte',
            // eslint-disable-next-line no-undef
            components: {main: Inte}
        },
        {
            path: '/tablero/temas/Inte1',
            name: 'Inte1',
            // eslint-disable-next-line no-undef
            components: {main: Inte1}
        },
        {
            path:'/tablero/retos/InteR',
            name:'InteR',
            components:{main: InteR}
        },
        {
            path:'/tablero/JUEGO1',
            name: 'JUEGO1',
            components:{main: JUEGO1 }
        },
        {
            path:'/tablero/JUEGO2',
            name: 'JUEGO2',
            components:{main: JUEGO2 }
        },
    ]
})