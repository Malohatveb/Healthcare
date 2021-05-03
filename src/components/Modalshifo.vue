<template>
    <div class="pink">
        <div class="modal_shifo">
            <h4>Shifokor haqida ma'lumot</h4>
            <div class="modal_top">
                <div class="center">
                    <input type="text" v-model="shifo.rasm"
                    placeholder="Rasmni urlni adresi">
                    <input type="text" v-model="shifo.ism" placeholder="Ism-sharifi">
                    <input type="text" v-model="shifo.email" placeholder="Email">
                    <input type="text" v-model="shifo.mutax" placeholder="Mautaxasisligi">
                    <input type="text" v-model="shifo.sana" placeholder="Ishga kirgan sana">
                    <select class="input" v-model="shifo.bulim">
                        <option value="Nevrolgiya">Nevrolgiya</option>
                        <option value="Lor">Lor</option>
                    </select>
                    <input type="number" v-model="shifo.qsana" placeholder="Qabul kunlari">
                    <input type="text" v-model="shifo.ish_grafigi" placeholder="Ish grafigi">
                    <input type="number" v-model="shifo.ish_staj" placeholder="Ish staji">
                    <input type="number" v-model="shifo.tug_sana" placeholder="Tug'ilgan sana">
                    <select v-model="shifo.o_holat" class="input">
                        <option value="Oilaviy holat">Oilaviy holat</option>
                        <option value="Uylangan">Uylangan</option>
                        <option value="Uylanmagan">Uylanmagan</option>
                        <option value="Turmushga chiqqan">Turmushga chiqqan</option>
                        <option value="Turmushga chiqmagan">Turmushga chiqmagan</option>
                    </select>
                    <input type="number" v-model="shifo.tel_raqam"
                    placeholder="Telefon raqam" >
                    <input type="text" v-model="shifo.hudud" placeholder="Tug'ilgan hudud">
                    <input type="text" v-model="shifo.malumot" placeholder="Ma'lumoti">
                    <input type="number" v-model="shifo.otel" placeholder="Oila azolaridan telefon raqam">
                    <input type="text" v-model="shifo.manzil" placeholder="Manzil">
                </div>
                <div class="modal_shifo_bottom">
                    <button class="close" @click="close">Bekor qilish</button>
                    <button class="add" @click="add">Qo'shish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            shifo:{}
        }
    },
    methods:{
        add(){
            axios.post('http://localhost:3000/shifokorlar',this.shifo).then(response =>{
                this.shifo = {}
                this.$emit('newShifo',response.data)
                this.$emit('closeModalshifo',false)
            })
        }, 
        close(){
            this.shifo={}
            this.$emit('closeModalshifo',false)
        } 
    }    
}
</script>

<style>

</style>