<template>
  <div class="about">
    <h1>{{result}}</h1>
    <div class="button" @click="add">add</div>
    <Loading text="正在加载，请稍后。。。"></Loading>
    <div>this is aboutS</div>
  </div>
</template>
<script>
// @ is an alias to /src
import Loading from '@/components/base/Loading.vue';
export default {
  data() {
    return {
      data: 123
    };
  },
  components: {
    Loading
  },
  created() {
    //console.log(this);
  },
  mounted() {
    //console.log(this);
    this.printThis();
  },
  computed: {
    result() {
      return this.data * this.data;
    }
  },
  methods: {
    printThis() {
      console.log(this);
    },
    add() {
      this.data++;
      //console.log(this.$http.home)
      this.$http.home().then(res=>{
        console.log(res);
      });
      this.$http.about().then(res=>{
        console.log(res);
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.button {
  width: 40px;
  height: 20px;
  background-color: aquamarine;
}
</style>

