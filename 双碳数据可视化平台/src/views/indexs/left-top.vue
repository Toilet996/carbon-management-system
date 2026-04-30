<template>
  <ul class="user_overview">
    <li style="color: aqua;">
      <div class="user_overview_num shui">
        <dv-digital-flop :config="watercfg" style="width:100%;height:100%;" />
        <p>耗水量</p>
      </div>
    </li>

        <li style="color: aqua;">
      <div class="user_overview_num dian">
        <dv-digital-flop :config="powercfg" style="width:100%;height:100%;" />
        <p>耗电量</p>
      </div>
    </li>

        <li style="color: aqua;">
      <div class="user_overview_num tan">
        <dv-digital-flop :config="tancfg" style="width:100%;height:100%;" />
        <p>碳排放量</p>
      </div>
    </li>
  </ul>

</template>

<script setup>
import { ref,onMounted } from 'vue';
import { currentGET} from "@/api/modules";

const config1 = {
  number: [0],
  content: '{nt}'
}
const watercfg = ref({...config1}) 
const powercfg = ref({...config1}) 
const tancfg = ref({...config1}) 
const getData = async()=>{
  const res = await currentGET('big2')
  if(res.code==200){
    const e = res.rows[0]
    const water = e.totalWaterConsume+e.totalOfficeWaterConsume
    const power = e.totalPowerConsume+e.totalOfficePowerConsume

    watercfg.value = {...watercfg.value,number:[water]}
    powercfg.value = {...powercfg.value,number:[power]}
    tancfg.value = {...tancfg.value,number:[e.totalCarbonEmission]}
  }
}

onMounted(getData)
</script>

<style scoped>
.user_overview{
  display: flex;
  margin: 0;
  list-style: none;
}
.user_overview li{
  flex: 1;
  text-align: center;
}
.user_overview li p{
  height: 16px;
  font-size: 16px;
  margin: 0;
  text-align: center;
}
.user_overview_num{
  height: 160px;
  width: 160px;
  margin: 30px auto 40px;
  position: relative;
}
.user_overview_num::before{
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background-position: center;
  background-size: cover;
}
.shui::before{
  background-image: url('../../assets/img/left_top_lan.png');
}
.dian::before{
  background-image: url('../../assets/img/left_top_huang.png');
}
.tan::before{
  background-image: url('../../assets/img/left_top_lv.png');
}


</style>