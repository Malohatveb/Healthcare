<template>
    <div class="ber_menu">
        <div class="left_img">
            <img :src="bemor.rasm" alt="">
        </div>
        <div class="top">
            <div class="big_title">
                <h2>{{bemor.ism}}</h2>
                <div class="btn">
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M0 15.3663C0.4448 13.8399 0.888 12.3135 1.3328 10.7871C1.368 10.6655 1.4048 10.5439 1.4368 10.4223C1.488 10.2383 1.584 10.0895 1.7312 9.96634C1.8688 9.85274 1.9904 9.71674 2.1168 9.59034C4.2016 7.52474 6.2864 5.45915 8.3696 3.39195C8.4176 3.34395 8.4592 3.28955 8.4928 3.24795C8.776 3.53275 9.0416 3.79995 9.3376 4.09755C9.3056 4.11995 9.2432 4.15195 9.1952 4.19995C7.0352 6.35515 4.8768 8.51034 2.7216 10.6703C2.6448 10.7487 2.5808 10.8559 2.5504 10.9615C2.2912 11.8175 2.0448 12.6783 1.7888 13.5375C1.7568 13.6447 1.7728 13.7119 1.8544 13.7855C1.9872 13.9055 2.104 14.0431 2.2384 14.1615C2.2848 14.2015 2.3728 14.2319 2.4288 14.2175C3.2896 13.9711 4.1488 13.7199 5.0064 13.4607C5.08 13.4383 5.1488 13.3759 5.2064 13.3167C7.3968 11.1327 9.584 8.94554 11.7712 6.75994C11.8128 6.71835 11.848 6.67195 11.872 6.64474C12.1824 6.95514 12.4832 7.25594 12.8128 7.58554C12.7984 7.59514 12.7408 7.61914 12.7008 7.65914C10.544 9.79514 8.384 11.9263 6.2384 14.0735C5.9392 14.3743 5.6144 14.5599 5.2128 14.6735C3.7888 15.0767 2.3712 15.5023 0.9504 15.9199C0.856 15.9471 0.76 15.9727 0.6656 15.9999H0.5376C0.4688 15.9695 0.3984 15.9423 0.3296 15.9103C0.1376 15.8207 0.072 15.6383 0 15.4607V15.3663ZM4.3024 12.7151C4.2608 12.4495 4.216 12.2063 4.1872 11.9631C4.1728 11.8479 4.1264 11.8015 4.0144 11.7807C3.7408 11.7279 3.4704 11.6591 3.2176 11.6031C5.4864 9.32954 7.7552 7.05434 10.0096 4.79355C10.3696 5.15355 10.7456 5.52795 11.1088 5.88955C8.8624 8.14234 6.5952 10.4159 4.3024 12.7151ZM10.8368 1.02556C11.0416 0.82556 11.2464 0.61276 11.4656 0.414361C12.0944 -0.152038 12.9136 -0.139238 13.5264 0.459161C14.2032 1.11836 14.8704 1.78556 15.5296 2.46236C16.1536 3.10075 16.144 3.95515 15.5216 4.59195C15.3344 4.78395 15.1408 4.97115 14.9616 5.14715C13.592 3.77915 12.224 2.41276 10.8368 1.02556ZM9.168 2.53596C9.4784 2.24476 9.7968 1.94556 10.0992 1.66076C11.5328 3.09435 12.9584 4.52155 14.3968 5.95995C14.0976 6.23995 13.776 6.54235 13.4656 6.83354L9.168 2.53596Z" fill="#A0A4A8"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                    </button>
                    <button @click="del(id)">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.00957 14.3248C4.02557 14.7024 4.33597 15 4.71357 15H11.2912C11.6688 15 11.9808 14.7024 11.9952 14.3248L12.4656 4.408H3.53917L4.00957 14.3248ZM9.48957 6.872C9.48957 6.7136 9.61757 6.5856 9.77597 6.5856H10.2336C10.392 6.5856 10.52 6.7152 10.52 6.872V12.5376C10.52 12.696 10.3904 12.824 10.2336 12.824H9.77597C9.61757 12.824 9.48957 12.696 9.48957 12.5376V6.872ZM7.48797 6.872C7.48797 6.7136 7.61597 6.5856 7.77437 6.5856H8.23197C8.39037 6.5856 8.51837 6.7152 8.51837 6.872V12.5376C8.51837 12.696 8.39037 12.824 8.23197 12.824H7.77437C7.61597 12.824 7.48797 12.696 7.48797 12.5376V6.872ZM5.48477 6.872C5.48477 6.7136 5.61277 6.5856 5.76957 6.5856H6.22717C6.38557 6.5856 6.51357 6.7152 6.51357 6.872V12.5376C6.51357 12.696 6.38397 12.824 6.22717 12.824H5.76957C5.61117 12.824 5.48477 12.696 5.48477 12.5376V6.872ZM12.7776 1.7216H9.74397V1.1472C9.74397 1.0656 9.67837 1 9.59677 1H6.40957C6.32797 1 6.26237 1.0656 6.26237 1.1472V1.7216H3.22717C2.98397 1.7216 2.78557 1.9184 2.78557 2.1632V3.552H13.2192V2.1632C13.2192 1.92 13.0224 1.7216 12.7776 1.7216Z" fill="#FF6760"/></svg>
                    </button>
                </div>
            </div>
            <div class="asosiy">
                <div class="right1">
                    <table>
                        <tr>
                            <td>Tashrif sanasi:</td>
                            <th>{{bemor.sana}}</th>
                            <td>Chiqish sanasi:</td>
                            <th>{{bemor.ch_sana}}</th>  
                        </tr>
                        <tr>
                            <td>Davolangan bo'lim:</td>
                            <th>{{bemor.bolim}}</th>
                            <td>Ma'sul shifokor:</td>
                            <th>{{bemor.masul}}</th>
                        </tr>
                        <tr>
                            <td>Murojat sababi:</td>
                            <th>{{bemor.sababb}}</th>
                        </tr>
                    </table>
                    <hr>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="right2">
                <p>Shaxsiy ma'lumotlar</p>
                <table>
                    <tr>
                        <td>Tug'ilgan sana:</td>
                        <th>{{bemor.year}}</th>
                        <td>Oilaviy holat:</td>
                        <th>{{bemor.femily}}</th>
                        <td>Telefon raqam:</td>
                        <th>{{bemor.sh_tel}}</th>
                    </tr>
                    <tr>
                        <td>Tug'ilgan hudud:</td>
                        <th>{{bemor.hudud}}</th>
                        <td>Ma'lumoti:</td>
                        <th>{{bemor.malumot}}</th>
                        <td>Oila azolarining<br>telefon raqam:</td>
                        <th>{{bemor.f_tel}}</th>
                    </tr>
                    <tr>
                        <td>Manzil:</td>
                        <th>{{bemor.manzil}}</th>
                        <td>Bandlik holati:</td>
                        <th>{{bemor.band}}</th>
                        <td>Ish joyi:</td>
                        <th>{{bemor.ishjoyi}}</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div class="right3">
                <p>Tibbiy ma’lumotlar</p>
                <table>
                    <tr>
                        <td>Qon guruhi</td>
                        <th>{{bemor.qon}}</th>
                        <td>Imtiyoziy kategoriyasi</td>
                        <th>{{bemor.im_kote}}</th>
                        <td>Invalidlik</td>
                        <th>{{bemor.inval}}</th>
                    </tr>
                    <tr>
                        <td>RH faktor</td>
                        <th>{{bemor.faktor}}</th>
                        <td>Imtiyoz hujjati</td>
                        <th>{{bemor.imtiyoz_h}}</th>
                        <td>Vazni</td> 
                        <th>{{bemor.vazni}}</th>
                    </tr>
                    <tr>
                        <td>Sug'urta polisi</td>
                        <th>{{bemor.polis}}</th>
                        <td>Imtiyoz olingan sana</td>
                        <th>{{bemor.imtiyoz_s}}</th>
                        <td>Bo'yi</td>
                        <th>{{bemor.boyi}}</th>
                    </tr>
                    <tr>
                        <td>Sug'urta firmasi</td>
                        <th>{{bemor.sugurta}}</th>
                        <td>Alergiya reaksiyalari</td>
                        <th>{{bemor.alergiya}}</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:this.$route.params.id,
            bemor:{}
        }
    },
    created(){
        axios.get('http://localhost:3000/bemorlar/' +this.id).then(response =>{this.bemor = response.data})
    },
    methods:{
        del(){
            axios.delete('http://localhost:3000/bemorlar/'+ this.id).then(response =>{this.bemor =response.data
                console.log(response)
                this.$router.push({path:'/bemorlar'})
            })
        }
    }
}
</script>

<style>

</style>