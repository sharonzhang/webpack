<template>
<div class="common-layout">
    <el-header class="push-header">
    <div class="logo-content">
        <img src="../../assets/img/logo.svg" alt="logo">
        <h2>测试任务平台</h2>
    </div>
    <div class="user-info">
        <img src="../../assets/img/avatar.jpg" alt="">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item :route="{name: 'profile'}">个人信息</el-dropdown-item> -->
            <el-dropdown-item :route="{name: 'logout'}">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
    </el-header>
    <sidebar :sidebar="sidebarData"></sidebar>
    <el-main class="push-main" :style="{'min-height':winHeight+'px'}">
        <slot name="main-content"></slot>
    </el-main>
    </div>
</template>
<script>
import sidebar from './sidebar.vue'
export default{
    props:['sidebarData'],
    data(){
        return {
           userName:"测试",
           winHeight: window.innerHeight - 60
        }
    },
    components:{
        sidebar
    },
    mounted(){
        let _this=this;
      window.addEventListener('resize', function() {
         _this.winHeight=window.innerHeight-60;
      }, true);
    }
}
</script>
<style lang="scss" scoped>
.common-layout{
    margin-left:200px;
}
.push-header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:rgb(50, 65, 87);
    display:flex;
    justify-content:space-between;
    z-index:1000;
    .logo-content{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        img{
            width:30px;
            margin-right: 10px;
        }
        h2{
            color:#fff;
            font-size: 18px;
        }
    }
    .user-info{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        img{
            border-radius: 100%;
            width:50px;
            margin-right:15px;
        }
        .el-dropdown{
            color:#fff;
        }
    }
}
.push-sidebar{
    position:fixed;
    top:60px;
    left:0;
    width:200px;
    text-align:left;
    background:rgb(50, 65, 87);
    overflow-y:auto;
}
.push-main{
    background-color: #e9eef3;
}
</style>