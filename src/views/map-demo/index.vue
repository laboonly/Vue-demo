<!--
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-01-28 4:58:17 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-02-01, 2:20:58 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 -->

<template>
    <div class="content">
        <div class="map-container" id="map-container"></div>
    </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import * as map from 'hcttop-map'

// import point from './assets/json/point.json'
// import rivers from './assets/json/rivers.json'
// import baoan from './assets/json/baoan.json'

export default {
  name: 'mapDemo',
  data () {
    return {
      map: null,
      //   OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      OSMUrl: `http://10.10.20.211:7001/china/{z}/{x}/{y}.png`
    }
  },
  mounted () {
    console.log('map', map)
    this.initMap()
  },
  methods: {
    initMap () {
      this.map = map.createMap('map-container')
      this.map.setView([22.5553, 113.884], 11)
      map.createTileLayer(this.map, this.OSMUrl, { maxZoom: 19 })
      // let markslist = [[22.5553, 113.884]]

      // point.data.forEach(ele => {
      //   markslist.push([ele.lat, ele.lng])
      // });
    //   this.addArea()
    //   map.L.circle([22.5553, 113.884], {radius: 500}).addTo(this.map)
    //   this.addMarks(point.data)
    //   this.addPolyLine()
    }
  }
}
</script>

<style lang="less" scoped>
.content {
    position: relative;
    width: 1000px;
    height: 1000px;
}
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

  .station_marker {
    height: 31px!important;
    width: 60px!important;
    // min-width: 54px;

    .title {
      width: 100%;
      margin: 0 auto;
      padding: 3px 3px 3px 3px;
      line-height: 1;
      font-size: 12px;
      color: #000;
      border-radius: 15px;
      background-color: #3886ff;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      // text-align: center;
      color: #fff;
      .title-span {
        display: inline-block;
        // margin-left: 9px;
        padding: 0 3px;
        text-align: center;
        line-height: 18px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 9px;
        border: 1px solid #ffffff;
      }

    }
  }
</style>
