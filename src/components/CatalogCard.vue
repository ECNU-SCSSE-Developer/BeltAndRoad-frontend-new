<template>
    <div>
        <el-card class="catalog" shadow="hover">
            <span>{{name}}</span>
        </el-card>
    </div>
</template>

<script>
  export default {
    props:['name'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
    .catalog {
        width: 320px;
        height: 240px;
        &:extend(.flex);
        margin: 60px;
    }
</style>
