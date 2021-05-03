import VueRouter from 'vue-router'
import Bosh_sahifa from './view/Bosh_sahifa'
import bemorlar from './view/bemorlar'
import bemorlar_batafsil from './view/bemorlar_batafsil'
import shifokorlar from './view/shifokorlar'
import shifokorlar_batafsil from './view/shifokorlar_batafsil'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component: Bosh_sahifa
        },
        {
            path:'/bemorlar',
            component: bemorlar
        },
        {
            path:'/bemorlar/:id',
            component: bemorlar_batafsil
        },
        {
            path:'/shifokorlar',
            component: shifokorlar
        },
        {
            path:'/shifokorlar/:id',
            component: shifokorlar_batafsil
        },
    ],
    mode:'history'
})