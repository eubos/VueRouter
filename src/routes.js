import VueRouter from 'vue-router'
import Home from './pages/Home'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error'
//lazy loading
const Cars = resolve =>{
    require.ensure(['./pages/Cars.vue'], ()=>{
        resolve(
            require('./pages/Cars.vue')
        )
    })
}
export default new VueRouter({
    routes:[
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars,
            name:'cars'

        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    //children component
                    path: 'full',
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter(to, from, next){
                        console.log('beforeEnter')
                        next()
                    }
                }
            ]
        },
        {
            path: '/none',
            redirect:{
                name: 'cars'
            }
        },
        {
            path:'*',
            component: ErrorCmp
        }
    ],
    //make no hash
    mode: 'history',
    //make scrolling
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return{
            x: 0,
            y: 0
        }
    }
})