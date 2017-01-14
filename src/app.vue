<template>
  <div class="content">
      <p>hello</p>
  </div>
</template>
<style>
@reset-global pc;
body{
    background-color: #bed7ff;
}
.content{
    size : 100%;
}
</style>
<script>
    //import magicMap from "components/magicMap"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          //  magicMap
        }
    }
</script>