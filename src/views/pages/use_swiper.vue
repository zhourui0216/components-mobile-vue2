<template>
	<div>
		<swiper :data="list" :current="2" proportion="1920:1080" :autoplay="false" :circular="false"></swiper>
	</div>
</template>

<script>
import swiper from "../../components/swiper/index.vue";
export default {
	components: {
		swiper
	},
	data() {
		return {
			list: [
				"https://img2.baidu.com/it/u=4028963788,1491236689&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500",
				"https://img1.baidu.com/it/u=1724157493,2813978428&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
				"https://img1.baidu.com/it/u=1542608407,2645267206&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
				"https://img1.baidu.com/it/u=1568193619,25276165&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=281",
				"https://img0.baidu.com/it/u=2134805653,2919336616&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
			]
		}
	},
}
</script>

<style scoped lang="scss">
</style>