<template>
    <div class="contact">
        <div id="map">
            <div style="height: 6.67rem;" id="allmap"></div>
        </div>
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    name: 'contact',
    mounted () {
        console.log(BMap)
        this.ShowMap('116.465928,39.965221', '博信诚（北京）网络科技有限公司', '远洋新干线', '（86-10）84466910', '（86-10）84466910', '16')
    },
    methods: {
        ShowMap (zuobiao, name, addrsee, phone, chuanzhen, zoom) {
            var arrzuobiao = zuobiao.split(',')
            var map = new BMap.Map('allmap')
            map.enableScrollWheelZoom()
            map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom)
            map.addControl(new BMap.NavigationControl())
            var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]))
            map.addOverlay(marker)
            var infoWindow = new BMap.InfoWindow('<p style="color: #bf0008;font-size:14px;">' + name + '</p><p>地址：' + addrsee + '</p><p>电话：' + phone + '</p><p>传真：' + chuanzhen + '</p>')
            marker.addEventListener('click', function () {
                this.openInfoWindow(infoWindow)
            })
            marker.openInfoWindow(infoWindow)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.contact
    transition: all .5s;
    .map
        margin-top: -500px;
</style>
