<template>
    <div class="black">
        <div class="modal">
            <h4>Yangi bemorni ro'yhatdan o'tkazish</h4>
            <div class="modal_top">
                <input type="text" v-model="bemor.rasm" placeholder="Rasm url adresi">
                <input type="text" v-model="bemor.ism" placeholder="Ism-sharifi">
                <input type="text" v-model="bemor.email" placeholder="Email">
                <input type="number" v-model="bemor.qabul"
                placeholder="Qabul vaqti">
                <input type="number" v-model="bemor.sana"
                placeholder="Tashrif sanasi">
                <input type="text" v-model="bemor.sabab" placeholder=" Sabab">
                <input type="number" v-model="bemor.ch_sana"
                placeholder="Chiqish sanasi">
                <select v-model="bemor.bolim" class="slecet">
                    <option value="Davolangan bo’lim:"></option>
                    <option value="Nevrolgiya">Nevrolgiya</option>
                    <option value="Lor">Lor</option>
                    <option value="Psixolog">Psixolog</option>
                </select>
                <input type="text" v-model="bemor.masul" placeholder="Ma'sul shifokor">
                <input type="text" v-model="bemor.sababb" placeholder="Murojat sababi">
                <input type="number" v-model="bemor.year" placeholder="Tug'ilgan sana">
                <select v-model="bemor.femily" class="slecet">
                    <option value="Oilaviy holat">Oilaviy holat</option>
                    <option value="Turmishga chiqqan">Turmishga chiqqan</option>
                    <option value="Turmushga chiqmagan">Turmushga chiqmagan</option>
                </select>
                <input type="number" v-model="bemor.sh_tel" placeholder="Telefon raqam">
                <input type="text" v-model="bemor.hudud" class="slecet" >
                <input type="text" v-model="bemor.malumot" placeholder="Ma'lumoti">
                <input type="number" v-model="bemor.f_tel" placeholder="Oila azolaridan telefon raqam">
                <input type="text" v-model="bemor.manzil" placeholder="Manzil">
                <input type="text" v-model="bemor.band" placeholder="Bandlik holati">
                <input type="text" v-model="bemor.ishjoyi" placeholder="Ish joyi">
                <input type="text" v-model="bemor.qon" placeholder="Qon guruhi">
                <input type="text" v-model="bemor.im_kote" placeholder="Imtiyoziy kategoriyasi">
                <input type="text" v-model="bemor.inval" placeholder="Invalidlik">
                <input type="text" v-model="bemor.faktor" placeholder="RH faktor">
                <input type="text" v-model="bemor.imtiyoz_h" placeholder="Imtiyoz hujjati">
                <input type="text" v-model="bemor.vazni" placeholder="Vazni">
                <input type="text" v-model="bemor.polis" placeholder="Sug'urta polisi">
                <input type="number" v-model="bemor.imtiyoz_s" placeholder="Imtiyoz olingan sana">
                <input type="number" v-model="bemor.boyi" placeholder="Bo'yi">
                <input type="text" v-model="bemor.alergiya" placeholder="Alergiya reaksiyalari">
                <input type="text" v-model="bemor.sugurta" placeholder="Sug'urta firma">

            </div>
            <div class="modal_bottom">
                <button class="close" @click="close">Bekor qilish</button>
                <button class="add" @click="add">Qo'shish</button>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            bemor:{
            },
        }
    },
    methods:{
        add(){
            axios.post('http://localhost:3000/bemorlar',this.bemor).then(response =>{
                this.bemor = {}
                this.$emit('newBemor',response.data)
                this.$emit('closeModal',false)
            })
        },
        close(){
            this.bemor = {}
            this.$emit('closeModal',false)
        }
    }
}
</script>

<style>

</style>