<template>
    <div class="shifokorlar">
        <app-shifokorlar :shifokorlar="shifokorlar"></app-shifokorlar>
        <div class="modalniy">
            <app-modalshifo v-show="isModalshifo" @newShifo='shifokorlar.push($event)' @closeModalshifo='isModalshifo=$event'></app-modalshifo>
        </div>
        <div class="bottom">
            <div class="btn_left">
                <button>
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.71199 0.933319L0.911987 5.73332L5.71199 10.5333L7.08799 9.17332L3.64799 5.73332L7.08799 2.29332L5.71199 0.933319Z" fill="#E8E8E8"/></svg>
                </button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28805 10.5333L7.08805 5.73332L2.28805 0.933319L0.928049 2.29332L4.35205 5.73332L0.912048 9.17332L2.28805 10.5333Z" fill="#52575C"/></svg>
                </button>
            </div>
            <div class="btn_right">
                <button @click="isModalshifo=!isModalshifo">
                    <img src="../assets/img/doctor 2.png" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import appShifokorlar from '../components/shifokorlar'
import appModalshifo from '../components/Modalshifo'
export default {
    data(){
        return{
            isModalshifo:false,
            shifo:{},
            shifokorlar:{}
        }
    },
    components:{
        appShifokorlar,
        appModalshifo
    },
    created(){
        axios.get('http://localhost:3000/shifokorlar').then(response =>{this.shifokorlar = response.data})
    }
}
</script>

<style>

</style>