(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC4ECAB8_CBF7_C3AA_41D8_C128FA9803C3",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Utama M_Spot 4",
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "class": "AdjacentPanorama",
   "yaw": 135.6,
   "backwardYaw": -49.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "class": "AdjacentPanorama",
   "yaw": 97.41,
   "backwardYaw": -87.49,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
 "overlays": [
  "this.overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
  "this.overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
  "this.overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
  "this.overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
  "this.overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF00DC5E_CBF7_C6E6_41BD_2862F38DB121",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_F6AC6592_CF91_467E_41D4_01D4A2680D2E_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "denah merajan.drawio",
 "id": "map_F6AC6592_CF91_467E_41D4_01D4A2680D2E",
 "width": 1971,
 "scaleMode": "fit_inside",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_F6AC6592_CF91_467E_41D4_01D4A2680D2E.png",
    "width": 1971,
    "class": "ImageResourceLevel",
    "height": 2033
   },
   {
    "url": "media/map_F6AC6592_CF91_467E_41D4_01D4A2680D2E_lq.png",
    "width": 252,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 260
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "height": 2033
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCDF0B76_CBF7_C2A6_41E1_D7C5A8832F19",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera"
  },
  {
   "media": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera"
  },
  {
   "media": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera"
  },
  {
   "media": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera"
  },
  {
   "media": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera"
  },
  {
   "media": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera"
  },
  {
   "media": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera"
  },
  {
   "media": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera"
  },
  {
   "media": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera"
  },
  {
   "media": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera"
  },
  {
   "media": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera"
  },
  {
   "media": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera"
  },
  {
   "media": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera"
  },
  {
   "media": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera"
  },
  {
   "media": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera"
  },
  {
   "media": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera"
  },
  {
   "media": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera"
  },
  {
   "media": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCFB2BA0_CBF7_C25A_41A2_01B96F436C41",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Nista M_Spot 2",
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "class": "AdjacentPanorama",
   "yaw": 159.21,
   "backwardYaw": 85.6,
   "distance": 1
  },
  {
   "panorama": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "class": "AdjacentPanorama",
   "yaw": -90.88,
   "backwardYaw": 85.6,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "class": "AdjacentPanorama",
   "yaw": -5.59,
   "backwardYaw": -176.55,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg",
 "overlays": [
  "this.overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
  "this.overlay_A741A38A_B697_426E_41D8_C41840EE397A",
  "this.overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
  "this.overlay_93C5CDAB_B9B0_C1AE_41AE_C78F2B0BB216",
  "this.overlay_91BE3CC7_BB91_47E6_41E3_94737004275F"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FDA57A80_CBF7_C25A_419E_CF927CE8AEAC",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_FDD169A5_CBF7_CE5A_41AC_7E3CC71DB5DE",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC1C8B1B_CBF7_C26D_41E3_584ED0D81CE2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC64EAD4_CBF7_C3FA_41D3_73CF6C643776",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC89ABAE_CBF7_C1A6_41B4_53B296BD122A",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_FDC40985_CBF7_CE5A_41D2_C705DD88331A",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F6AC6592_CF91_467E_41D4_01D4A2680D2E",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF720C35_CBF7_C6BA_41C6_80372D9AD553",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC089B0E_CBF7_C266_41DC_0CFC97676476",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FDAF5A8E_CBF7_C266_41C5_6D950F71D4B4",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Madya M_Spot 1",
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "class": "AdjacentPanorama",
   "yaw": -6.96,
   "backwardYaw": -7.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "class": "AdjacentPanorama",
   "yaw": -179.18,
   "backwardYaw": 28.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "class": "AdjacentPanorama",
   "yaw": -95.28,
   "backwardYaw": 98.79,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
 "overlays": [
  "this.overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
  "this.overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
  "this.overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC9FABBD_CBF7_C1AA_41E6_C9E5D1257811",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Utama M_Spot 6",
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "class": "AdjacentPanorama",
   "yaw": -86.86,
   "backwardYaw": 91.38,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "class": "AdjacentPanorama",
   "yaw": -173.53,
   "backwardYaw": 4.46,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
 "overlays": [
  "this.overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
  "this.overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
  "this.overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
  "this.overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
  "this.overlay_9D866CFA_BBB7_47AE_41C4_95C552770376"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_FDD099A5_CBF7_CE5A_41BE_8A57178E1569",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F43C4972_CF93_4EBF_41E2_A6CF464CB438",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF629C05_CBF7_C65A_41B5_148193EE466B",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FDB1CA9B_CBF7_C26E_41E6_573668D51CBD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC06BAFE_CBF7_C3A6_41D4_7065287CF137",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera"
  },
  {
   "media": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera"
  },
  {
   "media": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera"
  },
  {
   "media": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera"
  },
  {
   "media": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera"
  },
  {
   "media": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera"
  },
  {
   "media": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera"
  },
  {
   "media": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera"
  },
  {
   "media": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera"
  },
  {
   "media": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera"
  },
  {
   "media": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera"
  },
  {
   "media": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera"
  },
  {
   "media": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera"
  },
  {
   "media": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera"
  },
  {
   "media": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera"
  },
  {
   "media": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera"
  },
  {
   "media": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera"
  },
  {
   "media": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera"
  }
 ]
},
{
 "vfov": 180,
 "label": "Madya M_Spot 4",
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "class": "AdjacentPanorama",
   "yaw": -167.63,
   "backwardYaw": -177.55,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "class": "AdjacentPanorama",
   "yaw": 78.44,
   "backwardYaw": -108.09,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "class": "AdjacentPanorama",
   "yaw": 50.32,
   "backwardYaw": -139.98,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
 "overlays": [
  "this.overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
  "this.overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
  "this.overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "titleTextDecoration": "none",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_8EF1D773_B6F0_C2BE_41E7_9FD149DEC661",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyBackgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "height": 600,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "headerBorderSize": 0,
 "title": "asdasdasdasdsdfadfadfadfadf",
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundOpacity": 1,
 "propagateClick": false,
 "shadow": true,
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.image_uidFDC3998B_CBF7_CE6E_41E2_381453C41B36_0",
  "this.htmlText_8EF3E77C_B6F0_C2AA_41D6_BF6A03C6978C"
 ],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "titleFontWeight": "normal",
 "class": "Window",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "titleFontFamily": "Arial",
 "shadowHorizontalLength": 3,
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "headerPaddingBottom": 10,
 "closeButtonIconColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBorderSize": 0,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "scrollBarMargin": 2,
 "closeButtonPaddingLeft": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "footerBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingLeft": 10,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "gap": 9,
 "data": {
  "name": "Window93403"
 },
 "paddingTop": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "footerBorderSize": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "vfov": 180,
 "label": "Nista M_Spot 5",
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "class": "AdjacentPanorama",
   "yaw": -148.15,
   "backwardYaw": -7.59,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
 "overlays": [
  "this.overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
  "this.overlay_AE57CE02_BA91_425E_41CC_C59F17058325"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Utama M_Spot 7",
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "class": "AdjacentPanorama",
   "yaw": 4.46,
   "backwardYaw": -173.53,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
 "overlays": [
  "this.overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
  "this.overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
  "this.overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.61,
  "pitch": -1
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Utama M_Spot 1",
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "class": "AdjacentPanorama",
   "yaw": -139.98,
   "backwardYaw": 50.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "class": "AdjacentPanorama",
   "yaw": 0.06,
   "backwardYaw": -177.05,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
 "overlays": [
  "this.overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
  "this.overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
  "this.overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
  "this.overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Utama M_Spot 5",
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "class": "AdjacentPanorama",
   "yaw": 91.38,
   "backwardYaw": -86.86,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "class": "AdjacentPanorama",
   "yaw": -87.49,
   "backwardYaw": 97.41,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
 "overlays": [
  "this.overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
  "this.overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
  "this.overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
  "this.overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -164.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC516AC6_CBF7_C3E6_41B8_8D3A17FBEE0C",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Nista M_Spot 3",
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "class": "AdjacentPanorama",
   "yaw": 85.6,
   "backwardYaw": -90.88,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
 "overlays": [
  "this.overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
  "this.overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC3D0B48_CBF7_C2EA_41E1_12729AC1B383",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Nista Mandala",
 "id": "map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B",
 "width": 4000,
 "scaleMode": "fit_inside",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B_lq.jpeg",
    "width": 295,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 222
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "height": 3000
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCE3CB83_CBF7_C25D_41E3_197736CAE21A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC274B29_CBF7_C2AA_41A1_0E13643E245E",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Utama M_Spot 3",
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "class": "AdjacentPanorama",
   "yaw": -167.12,
   "backwardYaw": 0.44,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "class": "AdjacentPanorama",
   "yaw": -49.05,
   "backwardYaw": 135.6,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "class": "AdjacentPanorama",
   "yaw": -167.12,
   "backwardYaw": 135.6,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
 "overlays": [
  "this.overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
  "this.overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
  "this.overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
  "this.overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
  "this.overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_FDD119A5_CBF7_CE5A_41E1_E714C8805D0D",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F43C4972_CF93_4EBF_41E2_A6CF464CB438",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_F43C4972_CF93_4EBF_41E2_A6CF464CB438_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Madya Mandala",
 "id": "map_F43C4972_CF93_4EBF_41E2_A6CF464CB438",
 "width": 4000,
 "scaleMode": "fit_inside",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_F43C4972_CF93_4EBF_41E2_A6CF464CB438.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_F43C4972_CF93_4EBF_41E2_A6CF464CB438_lq.jpeg",
    "width": 295,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 222
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "height": 3000
},
{
 "vfov": 180,
 "label": "Nista M_Spot 1",
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "class": "AdjacentPanorama",
   "yaw": -176.55,
   "backwardYaw": -5.59,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "128%",
 "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
 "overlays": [
  "this.overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_F4EEE14F_CF70_DEE6_41B8_8A6E776D79E3",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "height": 600,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "titleFontColor": "#000000",
 "title": "",
 "shadowVerticalLength": 0,
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "paddingBottom": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "propagateClick": false,
 "shadow": true,
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_F4ED3150_CF70_DEFA_41E8_49D95CCD3F36",
  {
   "class": "WebFrame",
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 0,
   "width": "100%",
   "scrollEnabled": false,
   "url": "//www.youtube.com/embed/eGMbL-lVh2Y?v=eGMbL-lVh2Y",
   "borderSize": 0,
   "minWidth": 0,
   "backgroundColor": [],
   "insetBorder": false,
   "backgroundOpacity": 1,
   "paddingBottom": 0,
   "borderRadius": 0,
   "height": "24%",
   "shadow": false,
   "data": {
    "name": "WebFrame117813"
   },
   "paddingTop": 0,
   "propagateClick": false,
   "backgroundColorRatios": []
  },
  {
   "class": "WebFrame",
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 0,
   "width": "100%",
   "scrollEnabled": true,
   "url": "https://sketchfab.com/models/19b6f12cdbcd4fb6bc3d41df10180d75/embed?autostart=1",
   "borderSize": 0,
   "minWidth": 0,
   "backgroundColor": [],
   "insetBorder": false,
   "backgroundOpacity": 1,
   "paddingBottom": 0,
   "borderRadius": 0,
   "height": "25%",
   "shadow": false,
   "data": {
    "name": "WebFrame117868"
   },
   "paddingTop": 0,
   "propagateClick": false,
   "backgroundColorRatios": []
  },
  {
   "class": "WebFrame",
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "minHeight": 0,
   "width": "100%",
   "scrollEnabled": true,
   "url": "//www.youtube.com/embed/eGMbL-lVh2Y?v=eGMbL-lVh2Y",
   "borderSize": 0,
   "minWidth": 0,
   "backgroundColor": [],
   "insetBorder": false,
   "backgroundOpacity": 1,
   "paddingBottom": 0,
   "borderRadius": 0,
   "height": "25%",
   "shadow": false,
   "data": {
    "name": "VideoUrl118456"
   },
   "paddingTop": 0,
   "propagateClick": false,
   "backgroundColorRatios": []
  }
 ],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "class": "Window",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "titleFontFamily": "Arial",
 "shadowHorizontalLength": 3,
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "headerPaddingBottom": 10,
 "closeButtonIconColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "scrollBarMargin": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadowOpacity": 0.5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingLeft": 10,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "gap": 10,
 "data": {
  "name": "Window117294"
 },
 "paddingTop": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "titleTextDecoration": "none",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_91C9659B_B6F3_466E_41E6_3D216A76633E_t.jpg",
 "label": "img16",
 "id": "photo_91C9659B_B6F3_466E_41E6_3D216A76633E",
 "width": 1368,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_91C9659B_B6F3_466E_41E6_3D216A76633E.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 912
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCF69B92_CBF7_C27E_41DF_8C1D28576975",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_FDD159A5_CBF7_CE5A_41E6_14FC669207B6",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F6D16453_CF93_46FD_41CE_921D08FA4A37",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.37,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC6F5AE2_CBF7_C3DE_41E6_A683CA78B922",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "vfov": 180,
 "label": "Nista M_Spot 4",
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "class": "AdjacentPanorama",
   "yaw": 85.6,
   "backwardYaw": 159.21,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "class": "AdjacentPanorama",
   "yaw": 15.39,
   "backwardYaw": -178.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "class": "AdjacentPanorama",
   "yaw": -7.59,
   "backwardYaw": -148.15,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
 "overlays": [
  "this.overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
  "this.overlay_A2078302_B6B1_425E_41E4_269921A75A62",
  "this.overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
  "this.overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Madya M_Spot 5",
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "class": "AdjacentPanorama",
   "yaw": -108.09,
   "backwardYaw": 78.44,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
 "overlays": [
  "this.overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
  "this.overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
  "this.overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC72BAF0_CBF7_C3BA_41E3_524FC7DE04CC",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_F6D16453_CF93_46FD_41CE_921D08FA4A37_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Utama Mandala",
 "id": "map_F6D16453_CF93_46FD_41CE_921D08FA4A37",
 "width": 4000,
 "scaleMode": "fit_inside",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_F6D16453_CF93_46FD_41CE_921D08FA4A37.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_F6D16453_CF93_46FD_41CE_921D08FA4A37_lq.jpeg",
    "width": 295,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 222
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "height": 3000
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF4D6BE7_CBF7_C1A6_41E4_8A2A25E76B46",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FD834A56_CBF7_C2E6_41DE_D3C01007BFDF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCD57B66_CBF7_C2A6_41D9_490ACCE78891",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Madya M_Spot 2",
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "AdjacentPanorama",
   "yaw": 98.79,
   "backwardYaw": -95.28,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
 "overlays": [
  "this.overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
  "this.overlay_A0E1D83A_BAEF_4EAE_41D4_6C4457C5DEDF",
  "this.overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_FDD1B9A6_CBF7_C1A6_41DA_0240976C8F54",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F6D16453_CF93_46FD_41CE_921D08FA4A37",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF536BF5_CBF7_C1A5_41DF_8B7186E3F592",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Utama M_Spot 2",
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "class": "AdjacentPanorama",
   "yaw": 0.44,
   "backwardYaw": -167.12,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "class": "AdjacentPanorama",
   "yaw": -177.05,
   "backwardYaw": 0.06,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
 "overlays": [
  "this.overlay_A707D66E_BA90_C2A6_41D4_5129D7A7A73A",
  "this.overlay_A71BD6C6_BA90_C3E6_41E6_74C454529120",
  "this.overlay_989ED567_BA91_46A6_41BF_ADC016CA985E",
  "this.overlay_98304E75_BA91_42BA_41E5_0A3270584B52",
  "this.overlay_98C90373_BA91_C2BE_4181_D1705A4BD89A",
  "this.overlay_9A07C467_BA9F_46A6_41E0_E0B629F41C41",
  "this.overlay_984A6B01_BA9F_C25A_41A8_B7D1A7D78D3B",
  "this.overlay_99591FC0_BA9F_C1DB_41E3_13497D48D4C8"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 40.02,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF262CAA_CBF7_C7AE_41E1_E1B5D31CB819",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCC15B57_CBF7_C2E6_41D5_E04303E35758",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FC2B7B38_CBF7_C2AA_41E7_5C83421FC661",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCAFEBCB_CBF7_C1EE_41D9_16CE879DF227",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FD8ACA64_CBF7_C2DA_41A6_37606A7B6637",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FD9CCA72_CBF7_C2BE_41DB_8E4A12A587B2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FCBDBBDA_CBF7_C1EE_41E8_2423423CCF00",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FDBB6AA9_CBF7_C3AA_4196_9B6AC2FC3DFD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_FF103C81_CBF7_C65A_41DD_D83475FBDFC5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Nista M_Spot 6",
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "class": "AdjacentPanorama",
   "yaw": -178.93,
   "backwardYaw": 15.39,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "AdjacentPanorama",
   "yaw": -7.59,
   "backwardYaw": -6.96,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
 "overlays": [
  "this.overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
  "this.overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_FDD1E9A5_CBF7_CE5A_41E5_E12977CDF6D1",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F48EAF71_CF93_42BA_41B5_6B61CC0E713B",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "vfov": 180,
 "label": "Madya M_Spot 3",
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "class": "AdjacentPanorama",
   "yaw": -177.55,
   "backwardYaw": -167.63,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "AdjacentPanorama",
   "yaw": 28.7,
   "backwardYaw": -179.18,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
 "overlays": [
  "this.overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
  "this.overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
  "this.overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
  "this.overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
  "this.overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
  "this.overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "paddingLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "shadow": false,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "paddingRight": 0,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "borderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "width": 115.05,
 "horizontalAlign": "left",
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 641,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--INFO photo"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948E05EB_BB91_C1AE_41D6_FB0DE777A774",
   "hfov": 6.27,
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.03,
   "distance": 100
  }
 ],
 "id": "overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.03,
   "hfov": 6.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948ED5EB_BB91_C1AE_41E1_649EAEE1F357",
   "hfov": 7.51,
   "pitch": 4.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -26.76,
   "distance": 100
  }
 ],
 "id": "overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.76,
   "hfov": 7.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948E85EB_BB91_C1AE_41D8_565DA8A5A856",
   "hfov": 7.52,
   "pitch": 4.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.78,
   "distance": 100
  }
 ],
 "id": "overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.78,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948D55EC_BB91_C1AA_41D0_1C6C99E336F8",
   "hfov": 11.82,
   "pitch": -36.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 135.6,
   "distance": 100
  }
 ],
 "id": "overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_FCFB2BA0_CBF7_C25A_41A2_01B96F436C41); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.6,
   "hfov": 11.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948DC5EC_BB91_C1AA_41E2_CF1FC5FF24DA",
   "hfov": 10.45,
   "pitch": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.41,
   "distance": 100
  }
 ],
 "id": "overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_FC89ABAE_CBF7_C1A6_41B4_53B296BD122A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.41,
   "hfov": 10.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A28F58B9_BAF0_CFAA_41DF_F00BDD457B4E",
   "hfov": 11.33,
   "pitch": -14.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.59,
   "distance": 100
  }
 ],
 "id": "overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C, this.camera_FD9CCA72_CBF7_C2BE_41DB_8E4A12A587B2); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.59,
   "hfov": 11.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A28F18BA_BAF0_CFAE_41D3_1007069978B9",
   "hfov": 9.77,
   "pitch": -9.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.88,
   "distance": 100
  }
 ],
 "id": "overlay_A741A38A_B697_426E_41D8_C41840EE397A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556, this.camera_FD8ACA64_CBF7_C2DA_41A6_37606A7B6637); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.88,
   "hfov": 9.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8E2929EC_B6F1_C1AA_41D3_57D65B123936",
   "hfov": 6.51,
   "pitch": -12.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.21,
   "distance": 100
  }
 ],
 "id": "overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_FD834A56_CBF7_C2E6_41DE_D3C01007BFDF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.21,
   "hfov": 6.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.25
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8E2999ED_B6F1_C1AA_41CF_9CFEA6983FF4",
   "hfov": 7.17,
   "pitch": 17.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.72,
   "distance": 100
  }
 ],
 "id": "overlay_93C5CDAB_B9B0_C1AE_41AE_C78F2B0BB216",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_F4EEE14F_CF70_DEE6_41B8_8A6E776D79E3, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.72,
   "hfov": 7.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.9
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8E2849ED_B6F1_C1AA_41E6_7467C8C11F10",
   "hfov": 7.15,
   "pitch": 18.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 51.12,
   "distance": 100
  }
 ],
 "id": "overlay_91BE3CC7_BB91_47E6_41E3_94737004275F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8EF1D773_B6F0_C2BE_41E7_9FD149DEC661, null, false); this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.12,
   "hfov": 7.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_0_0.png",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": -1.9,
   "yaw": -6.96,
   "hfov": 9.44
  }
 ],
 "id": "overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_FC06BAFE_CBF7_C3A6_41D4_7065287CF137); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.96,
   "hfov": 9.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A436952A_BAB1_C6AE_41B2_E4E1E5F3D360",
   "hfov": 9.8,
   "pitch": -15.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.28,
   "distance": 100
  }
 ],
 "id": "overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330, this.camera_FC1C8B1B_CBF7_C26D_41E3_584ED0D81CE2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.28,
   "hfov": 9.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A431252A_BAB1_C6AE_4197_C399D34FA1A2",
   "hfov": 8.97,
   "pitch": -12.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.18,
   "distance": 100
  }
 ],
 "id": "overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_FC089B0E_CBF7_C266_41DC_0CFC97676476); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.18,
   "hfov": 8.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948DD5EE_BB91_C1A6_41E2_24D72A8821EE",
   "hfov": 7.54,
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.28,
   "distance": 100
  }
 ],
 "id": "overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.28,
   "hfov": 7.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948D95EE_BB91_C1A6_41C6_20EC3A7CF7B8",
   "hfov": 7.54,
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 55.65,
   "distance": 100
  }
 ],
 "id": "overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.65,
   "hfov": 7.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948C65EE_BB91_C1A6_41DE_4251E288F0CC",
   "hfov": 7.53,
   "pitch": 2.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.14,
   "distance": 100
  }
 ],
 "id": "overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.14,
   "hfov": 7.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AC6779_B9B1_42AA_41A7_C774FA61B446",
   "hfov": 13.85,
   "pitch": -35.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.86,
   "distance": 100
  }
 ],
 "id": "overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_FCE3CB83_CBF7_C25D_41E3_197736CAE21A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.86,
   "hfov": 13.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AC8779_B9B1_42AA_41E7_199BD3FE4074",
   "hfov": 13.65,
   "pitch": -33.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.53,
   "distance": 100
  }
 ],
 "id": "overlay_9D866CFA_BBB7_47AE_41C4_95C552770376",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22, this.camera_FCF69B92_CBF7_C27E_41DF_8C1D28576975); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.53,
   "hfov": 13.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.98
  }
 ]
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A43D752C_BAB1_C6AA_41DB_76F64AB51350",
   "hfov": 9.96,
   "pitch": -21.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.63,
   "distance": 100
  }
 ],
 "id": "overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_FF00DC5E_CBF7_C6E6_41BD_2862F38DB121); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.63,
   "hfov": 9.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A43D152C_BAB1_C6AA_41E1_CE8E583AFAE3",
   "hfov": 5.78,
   "pitch": -11.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 78.44,
   "distance": 100
  }
 ],
 "id": "overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB, this.camera_FF103C81_CBF7_C65A_41DD_D83475FBDFC5); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.44,
   "hfov": 5.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0_HS_2_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": -0.89,
   "yaw": 50.32,
   "hfov": 8.94
  }
 ],
 "id": "overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_FF262CAA_CBF7_C7AE_41E1_E1B5D31CB819); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.32,
   "hfov": 8.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.89
  }
 ]
},
{
 "id": "image_uidFDC3998B_CBF7_CE6E_41E2_381453C41B36_0",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 0,
 "url": "media/photo_91C9659B_B6F3_466E_41E6_3D216A76633E.jpg",
 "height": "50%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "data": {
  "name": "Image121489"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "id": "htmlText_8EF3E77C_B6F0_C2AA_41D6_BF6A03C6978C",
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "paddingRight": 10,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sdfdsfsdfsdfasdfsdffsdfsf</SPAN></DIV></div>",
 "height": "50%",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "HTMLText93404"
 },
 "paddingTop": 10,
 "scrollBarWidth": 10
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A29108C0_BAF0_CFDA_41D5_E1CC0321CDB6",
   "hfov": 8.73,
   "pitch": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.03,
   "distance": 100
  }
 ],
 "id": "overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.03,
   "hfov": 8.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0_HS_2_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ]
   },
   "pitch": -7.67,
   "yaw": -148.15,
   "hfov": 11.85
  }
 ],
 "id": "overlay_AE57CE02_BA91_425E_41CC_C59F17058325",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_FCC15B57_CBF7_C2E6_41D5_E04303E35758); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.15,
   "hfov": 11.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F315EF_BB91_C1A6_41C5_9F32DD3052D8",
   "hfov": 7.52,
   "pitch": 3.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.27,
   "distance": 100
  }
 ],
 "id": "overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.27,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F3C5F0_BB91_C1BA_41A1_81253E153138",
   "hfov": 12.89,
   "pitch": -31.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.46,
   "distance": 100
  }
 ],
 "id": "overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_FC3D0B48_CBF7_C2EA_41E1_12729AC1B383); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.46,
   "hfov": 12.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93ACD77A_B9B1_42AE_41BA_18024B8FC320",
   "hfov": 15.47,
   "pitch": -31.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.51,
   "distance": 100
  }
 ],
 "id": "overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.51,
   "hfov": 15.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948495E2_BB91_C1DE_41E0_12069C55601F",
   "hfov": 7.53,
   "pitch": -1.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.09,
   "distance": 100
  }
 ],
 "id": "overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.09,
   "hfov": 7.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948B75E2_BB91_C1DE_41E6_945B875DD0CF",
   "hfov": 6.5,
   "pitch": 5.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.93,
   "distance": 100
  }
 ],
 "id": "overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.93,
   "hfov": 6.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_2_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "pitch": 2.75,
   "yaw": -139.98,
   "hfov": 7.68
  }
 ],
 "id": "overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_FDAF5A8E_CBF7_C266_41C5_6D950F71D4B4); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.98,
   "hfov": 7.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 2.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AFF775_B9B1_42BA_41D8_72D899F66B84",
   "hfov": 7.68,
   "pitch": -24.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.06,
   "distance": 100
  }
 ],
 "id": "overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4, this.camera_FDB1CA9B_CBF7_C26E_41E6_573668D51CBD); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.06,
   "hfov": 7.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948D95EC_BB91_C1AA_41D0_D4D6EB5DB341",
   "hfov": 7.52,
   "pitch": 4.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.26,
   "distance": 100
  }
 ],
 "id": "overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.26,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948C55EC_BB91_C1AA_41E4_993E20B34C87",
   "hfov": 7.52,
   "pitch": 3.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.3,
   "distance": 100
  }
 ],
 "id": "overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.3,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948C25EC_BB91_C1AA_41D3_450D6E6CB681",
   "hfov": 9.65,
   "pitch": -40.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.49,
   "distance": 100
  }
 ],
 "id": "overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_FC4ECAB8_CBF7_C3AA_41D8_C128FA9803C3); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.49,
   "hfov": 9.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AC0778_B9B1_42AA_41D3_975BA8BBE25F",
   "hfov": 12.95,
   "pitch": -31.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.38,
   "distance": 100
  }
 ],
 "id": "overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_FDBB6AA9_CBF7_C3AA_4196_9B6AC2FC3DFD); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.38,
   "hfov": 12.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A28EA8BA_BAF0_CFAE_41E1_0E44D3E0472E",
   "hfov": 9.05,
   "pitch": -20.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.6,
   "distance": 100
  }
 ],
 "id": "overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_FCD57B66_CBF7_C2A6_41D9_490ACCE78891); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.6,
   "hfov": 9.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0_HS_2_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "pitch": -1.27,
   "yaw": -129.81,
   "hfov": 7.43
  }
 ],
 "id": "overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.81,
   "hfov": 7.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -1.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9488E5E5_BB91_C1DA_41E6_81443FDFD117",
   "hfov": 7.51,
   "pitch": 5.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.57,
   "distance": 100
  }
 ],
 "id": "overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.57,
   "hfov": 7.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948885E5_BB91_C1DA_41C6_D8BED73B7A17",
   "hfov": 7.48,
   "pitch": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.71,
   "distance": 100
  }
 ],
 "id": "overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.71,
   "hfov": 7.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AD0777_B9B1_42A6_41E5_6FA80976ACBC",
   "hfov": 10.79,
   "pitch": -22.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.05,
   "distance": 100
  }
 ],
 "id": "overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_FF629C05_CBF7_C65A_41B5_148193EE466B); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.05,
   "hfov": 10.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948FC5E5_BB91_C1DA_41E4_F99F101BD406",
   "hfov": 5.02,
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -59.41,
   "distance": 100
  }
 ],
 "id": "overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.41,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AD3777_B9B1_42A6_419A_5B4FFCCFF0FB",
   "hfov": 10.33,
   "pitch": -43.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.12,
   "distance": 100
  }
 ],
 "id": "overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_FF720C35_CBF7_C6BA_41C6_80372D9AD553); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.12,
   "hfov": 10.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A28C78B8_BAF0_CFAA_41E1_1758906B638E",
   "hfov": 12.59,
   "pitch": -13.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -176.55,
   "distance": 100
  }
 ],
 "id": "overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_FDA57A80_CBF7_C25A_419E_CF927CE8AEAC); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.55,
   "hfov": 12.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ]
},
{
 "id": "htmlText_F4ED3150_CF70_DEFA_41E8_49D95CCD3F36",
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "paddingRight": 10,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "",
 "height": "24%",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "HTMLText117295"
 },
 "paddingTop": 10,
 "scrollBarWidth": 10
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "paddingLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "minHeight": 1,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "show": "this.setMediaBehaviour(this.playList_FDC40985_CBF7_CE5A_41D2_C705DD88331A, 0)",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "borderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ]
   },
   "pitch": -1.02,
   "yaw": -7.59,
   "hfov": 7.68
  }
 ],
 "id": "overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB, this.camera_FCBDBBDA_CBF7_C1EE_41E8_2423423CCF00); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.59,
   "hfov": 7.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A291C8BB_BAF0_CFAE_41B0_BC2C348540FE",
   "hfov": 6.25,
   "pitch": 5.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.39,
   "distance": 100
  }
 ],
 "id": "overlay_A2078302_B6B1_425E_41E4_269921A75A62",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.39,
   "hfov": 6.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A4375529_BAB1_C6AA_41BC_F25542DE5B67",
   "hfov": 5.3,
   "pitch": -11.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.39,
   "distance": 100
  }
 ],
 "id": "overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_FCAFEBCB_CBF7_C1EE_41D9_16CE879DF227); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.39,
   "hfov": 5.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A280067C_BAF0_C2AA_41E1_C60DC8036B6D",
   "hfov": 6.86,
   "pitch": -16.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.6,
   "distance": 100
  }
 ],
 "id": "overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_FC9FABBD_CBF7_C1AA_41E6_C9E5D1257811); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.6,
   "hfov": 6.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A43D952C_BAB1_C6AA_41C6_338E608E8935",
   "hfov": 7.46,
   "pitch": 8.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.84,
   "distance": 100
  }
 ],
 "id": "overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.84,
   "hfov": 7.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A43C552D_BAB1_C6AA_41DA_1A2CD7D01696",
   "hfov": 7.47,
   "pitch": 7.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.64,
   "distance": 100
  }
 ],
 "id": "overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.64,
   "hfov": 7.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A43C152D_BAB1_C6AA_41D5_BA824961D225",
   "hfov": 7.98,
   "pitch": -12.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.09,
   "distance": 100
  }
 ],
 "id": "overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_FCDF0B76_CBF7_C2A6_41E1_D7C5A8832F19); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.09,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948735DF_BB91_C1E6_41E0_CA9CA11E1481",
   "hfov": 8.29,
   "pitch": -28.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 98.79,
   "distance": 100
  }
 ],
 "id": "overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_FF4D6BE7_CBF7_C1A6_41E4_8A2A25E76B46); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.79,
   "hfov": 8.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A431952A_BAB1_C6AE_41DB_B5844A6F7526",
   "hfov": 6.28,
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.45,
   "distance": 100
  }
 ],
 "id": "overlay_A0E1D83A_BAEF_4EAE_41D4_6C4457C5DEDF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.45,
   "hfov": 6.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A430552A_BAB1_C6AE_41D6_537CAA574289",
   "hfov": 5.07,
   "pitch": -36.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.1,
   "distance": 100
  }
 ],
 "id": "overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.1,
   "hfov": 5.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948A45E3_BB91_C1DE_41DD_4DB9F3337F0A",
   "hfov": 8.05,
   "pitch": -17.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -177.05,
   "distance": 100
  }
 ],
 "id": "overlay_A707D66E_BA90_C2A6_41D4_5129D7A7A73A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_FC2B7B38_CBF7_C2AA_41E7_5C83421FC661); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.05,
   "hfov": 8.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948A25E3_BB91_C1DE_41B4_385A74B42618",
   "hfov": 5.02,
   "pitch": -1.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 112.17,
   "distance": 100
  }
 ],
 "id": "overlay_A71BD6C6_BA90_C3E6_41E6_74C454529120",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.17,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948AE5E3_BB91_C1DE_41E5_E13F3BB73A58",
   "hfov": 5.02,
   "pitch": 0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.56,
   "distance": 100
  }
 ],
 "id": "overlay_989ED567_BA91_46A6_41BF_ADC016CA985E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.56,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948945E4_BB91_C1DA_41E6_F691E05FEED1",
   "hfov": 5.02,
   "pitch": 1.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 68.21,
   "distance": 100
  }
 ],
 "id": "overlay_98304E75_BA91_42BA_41E5_0A3270584B52",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.21,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_93AE7776_B9B1_42A6_41E5_45713F0832F0",
   "hfov": 8.62,
   "pitch": -26.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.44,
   "distance": 100
  }
 ],
 "id": "overlay_98C90373_BA91_C2BE_4181_D1705A4BD89A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_FC274B29_CBF7_C2AA_41A1_0E13643E245E); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.44,
   "hfov": 8.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948995E4_BB91_C1DA_41D2_11C5152EED32",
   "hfov": 5,
   "pitch": 5.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -35.05,
   "distance": 100
  }
 ],
 "id": "overlay_9A07C467_BA9F_46A6_41E0_E0B629F41C41",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.05,
   "hfov": 5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948855E4_BB91_C1DA_41D8_CABE64A91611",
   "hfov": 5.02,
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.34,
   "distance": 100
  }
 ],
 "id": "overlay_984A6B01_BA9F_C25A_41A8_B7D1A7D78D3B",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.34,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948805E4_BB91_C1DA_41D2_EFE91AB64FFD",
   "hfov": 5,
   "pitch": -5.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.63,
   "distance": 100
  }
 ],
 "id": "overlay_99591FC0_BA9F_C1DB_41E3_13497D48D4C8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.63,
   "hfov": 5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ]
   },
   "pitch": -1.14,
   "yaw": -7.59,
   "hfov": 7.68
  }
 ],
 "id": "overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_FC64EAD4_CBF7_C3FA_41D3_73CF6C643776); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.59,
   "hfov": 7.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A29058C1_BAF0_CFDA_41CA_E74D8E321D82",
   "hfov": 7.87,
   "pitch": -15.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -178.93,
   "distance": 100
  }
 ],
 "id": "overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_FC516AC6_CBF7_C3E6_41B8_8D3A17FBEE0C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.93,
   "hfov": 7.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_948605E0_BB91_C1DA_41C0_36063D1E6C04",
   "hfov": 6.28,
   "pitch": -11.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.7,
   "distance": 100
  }
 ],
 "id": "overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_FC72BAF0_CBF7_C3BA_41E3_524FC7DE04CC); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.7,
   "hfov": 6.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A433F52B_BAB1_C6AE_41E0_58A36C187DF6",
   "hfov": 7.48,
   "pitch": -6.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -135.28,
   "distance": 100
  }
 ],
 "id": "overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.28,
   "hfov": 7.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A433852B_BAB1_C6AE_41DC_217EFE08C1E7",
   "hfov": 6.78,
   "pitch": -25.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.79,
   "distance": 100
  }
 ],
 "id": "overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.79,
   "hfov": 6.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A432252C_BAB1_C6AA_41E2_96059D26EA41",
   "hfov": 4.49,
   "pitch": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -100.61,
   "distance": 100
  }
 ],
 "id": "overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.61,
   "hfov": 4.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A432052C_BAB1_C6AA_41E1_F375D0A8E5EC",
   "hfov": 4.51,
   "pitch": 3.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.08,
   "distance": 100
  }
 ],
 "id": "overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.08,
   "hfov": 4.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A432A52C_BAB1_C6AA_41BD_BF28B52999FD",
   "hfov": 6.58,
   "pitch": -17.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -177.55,
   "distance": 100
  }
 ],
 "id": "overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_FC6F5AE2_CBF7_C3DE_41E6_A683CA78B922); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.55,
   "hfov": 6.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.65
  }
 ]
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "width": 110,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 110,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "width": "91.304%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "shadow": false,
 "gap": 3,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "verticalAlign": "top"
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "right": 0,
 "width": 330,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [],
 "verticalAlign": "top"
},
{
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundImageUrl": "skin/Container_062A782F_1140_E20B_41AF_B3E5DE341773.png",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": true,
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "verticalAlign": "top"
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "right": "15%",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "15%",
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "absolute",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "15%",
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "right": "15%",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "15%",
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "absolute",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "15%",
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "vertical",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "15%",
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "right": "15%",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948E05EB_BB91_C1AE_41D6_FB0DE777A774",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948ED5EB_BB91_C1AE_41E1_649EAEE1F357",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948E85EB_BB91_C1AE_41D8_565DA8A5A856",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948D55EC_BB91_C1AA_41D0_1C6C99E336F8",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948DC5EC_BB91_C1AA_41E2_CF1FC5FF24DA",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A28F58B9_BAF0_CFAA_41DF_F00BDD457B4E",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A28F18BA_BAF0_CFAE_41D3_1007069978B9",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8E2929EC_B6F1_C1AA_41D3_57D65B123936",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8E2999ED_B6F1_C1AA_41CF_9CFEA6983FF4",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8E2849ED_B6F1_C1AA_41E6_7467C8C11F10",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A436952A_BAB1_C6AE_41B2_E4E1E5F3D360",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A431252A_BAB1_C6AE_4197_C399D34FA1A2",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948DD5EE_BB91_C1A6_41E2_24D72A8821EE",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948D95EE_BB91_C1A6_41C6_20EC3A7CF7B8",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948C65EE_BB91_C1A6_41DE_4251E288F0CC",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AC6779_B9B1_42AA_41A7_C774FA61B446",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AC8779_B9B1_42AA_41E7_199BD3FE4074",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A43D752C_BAB1_C6AA_41DB_76F64AB51350",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A43D152C_BAB1_C6AA_41E1_CE8E583AFAE3",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A29108C0_BAF0_CFDA_41D5_E1CC0321CDB6",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F315EF_BB91_C1A6_41C5_9F32DD3052D8",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F3C5F0_BB91_C1BA_41A1_81253E153138",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93ACD77A_B9B1_42AE_41BA_18024B8FC320",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948495E2_BB91_C1DE_41E0_12069C55601F",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948B75E2_BB91_C1DE_41E6_945B875DD0CF",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AFF775_B9B1_42BA_41D8_72D899F66B84",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948D95EC_BB91_C1AA_41D0_D4D6EB5DB341",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948C55EC_BB91_C1AA_41E4_993E20B34C87",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948C25EC_BB91_C1AA_41D3_450D6E6CB681",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AC0778_B9B1_42AA_41D3_975BA8BBE25F",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A28EA8BA_BAF0_CFAE_41E1_0E44D3E0472E",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9488E5E5_BB91_C1DA_41E6_81443FDFD117",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948885E5_BB91_C1DA_41C6_D8BED73B7A17",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AD0777_B9B1_42A6_41E5_6FA80976ACBC",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948FC5E5_BB91_C1DA_41E4_F99F101BD406",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AD3777_B9B1_42A6_419A_5B4FFCCFF0FB",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A28C78B8_BAF0_CFAA_41E1_1758906B638E",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A291C8BB_BAF0_CFAE_41B0_BC2C348540FE",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A4375529_BAB1_C6AA_41BC_F25542DE5B67",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A280067C_BAF0_C2AA_41E1_C60DC8036B6D",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A43D952C_BAB1_C6AA_41C6_338E608E8935",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A43C552D_BAB1_C6AA_41DA_1A2CD7D01696",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A43C152D_BAB1_C6AA_41D5_BA824961D225",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948735DF_BB91_C1E6_41E0_CA9CA11E1481",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A431952A_BAB1_C6AE_41DB_B5844A6F7526",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A430552A_BAB1_C6AE_41D6_537CAA574289",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948A45E3_BB91_C1DE_41DD_4DB9F3337F0A",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948A25E3_BB91_C1DE_41B4_385A74B42618",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948AE5E3_BB91_C1DE_41E5_E13F3BB73A58",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948945E4_BB91_C1DA_41E6_F691E05FEED1",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93AE7776_B9B1_42A6_41E5_45713F0832F0",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948995E4_BB91_C1DA_41D2_11C5152EED32",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948855E4_BB91_C1DA_41D8_CABE64A91611",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948805E4_BB91_C1DA_41D2_EFE91AB64FFD",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A29058C1_BAF0_CFDA_41CA_E74D8E321D82",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_948605E0_BB91_C1DA_41C0_36063D1E6C04",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A433F52B_BAB1_C6AE_41E0_58A36C187DF6",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A433852B_BAB1_C6AE_41DC_217EFE08C1E7",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A432252C_BAB1_C6AA_41E2_96059D26EA41",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A432052C_BAB1_C6AA_41E1_F375D0A8E5EC",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A432A52C_BAB1_C6AA_41BD_BF28B52999FD",
 "frameDuration": 41,
 "colCount": 4
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 60,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "height": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 58
},
{
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top"
},
{
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "transparencyActive": true,
 "width": 50,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 80,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 80
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 1,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "90%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.25,
 "backgroundColor": [
  "#CCCCCC"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0.02
 ],
 "verticalAlign": "top"
},
{
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "right": 9,
 "width": 50,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minWidth": 1,
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 50,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 50
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderSize": 0,
 "width": "25%",
 "minWidth": 50,
 "height": "75%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 140,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 70,
 "itemMode": "normal",
 "itemLabelFontStyle": "italic",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemOpacity": 1,
 "itemThumbnailOpacity": 1,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "height": "92%",
 "width": "100%",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "paddingBottom": 70,
 "itemHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "propagateClick": true,
 "verticalAlign": "middle",
 "class": "ThumbnailGrid",
 "paddingRight": 70,
 "horizontalAlign": "center",
 "itemMinHeight": 50,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderSize": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "gap": 26,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "data": {
  "name": "ThumbnailList"
 },
 "paddingTop": 10,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "class": "WebFrame",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "scrollEnabled": true,
 "url": "http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.373757784243!2d115.18340980814848!3d-8.65595759135529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24754f5670f25%3A0xff35ad45b603026d!2sPemerajan%20Agung%20Sakti%20Padangsambian!5e0!3m2!1sen!2sid!4v1704045242736!5m2!1sen!2sid",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": true,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "width": "3.619%",
 "minWidth": 50,
 "height": "5.902%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "verticalAlign": "top",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.WebFrame_F4BF8709_CF93_426A_41C0_748654375750"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "width": "55%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "paddingRight": 60,
 "layout": "vertical",
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "45%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderSize": 0,
 "width": "25%",
 "minWidth": 50,
 "height": "75%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "class": "Container",
 "paddingRight": 40,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 40,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "top": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 40,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "- Buttons set"
 },
 "paddingTop": 40,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "horizontalAlign": "right",
 "minHeight": 50,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "top": 20,
 "width": "100%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "height": "36.14%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "top",
 "maxHeight": 60
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "horizontalAlign": "right",
 "minHeight": 50,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "top": 20,
 "width": "100%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "height": "36.14%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "top",
 "maxHeight": 60
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "paddingLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "minHeight": 1,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "shadow": false,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "borderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderSize": 0,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 60
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "horizontalAlign": "right",
 "minHeight": 50,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "top": 20,
 "width": "10%",
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "height": "10%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "cursor": "hand",
 "verticalAlign": "top",
 "maxHeight": 60
},
{
 "id": "WebFrame_F4BF8709_CF93_426A_41C0_748654375750",
 "left": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollEnabled": true,
 "url": "https://sketchfab.com/models/19b6f12cdbcd4fb6bc3d41df10180d75/embed?autostart=1&camera=0",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "99.454%",
 "shadow": false,
 "data": {
  "name": "WebFrame115223"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "5%",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "paddingRight": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "height": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scaleMode": "fit_inside",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Image",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowHorizontalLength": 3,
 "minHeight": 30,
 "width": "100%",
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "borderSize": 0,
 "minWidth": 40,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "top": "0%",
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "34.611%",
 "shadow": true,
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "verticalAlign": "top",
 "maxHeight": 1095,
 "maxWidth": 1095
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "26%",
 "top": "26%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 1"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "height": 130,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 5,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "bottom"
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "top": "25%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "top": "25%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "top": "25%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "top": "25%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "top": "25%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "gap": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "middle"
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "height": "46%",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "NISTA MANDALA >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "MADYA MANDALA >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "UTAMA MANDALA >",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "UTAMA MANDALA > ",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "height": 2,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "blue line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "bottom",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 56,
 "shadow": false,
 "gap": 7,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "propagateClick": false
},
{
 "verticalAlign": "top",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 44,
 "shadow": false,
 "gap": 7,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverFontFamily": "Oswald",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "top",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 8,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "rollOverShadowBlurRadius": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverFontFamily": "Oswald",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "top",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 8,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "rollOverShadowBlurRadius": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverFontFamily": "Oswald",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "top",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 8,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "rollOverShadowBlurRadius": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverFontFamily": "Oswald",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "top",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 8,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "rollOverShadowBlurRadius": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverFontFamily": "Oswald",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top"
},
{
 "verticalAlign": "top",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "height": 8,
 "shadow": false,
 "gap": 10,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "rollOverShadowBlurRadius": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "class": "Button",
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "shadow": false,
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1
},
{
 "scaleMode": "fit_inside",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "height": "100%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "verticalAlign": "top",
 "maxWidth": 200,
 "maxHeight": 200
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "paddingRight": 10,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "75%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "height": "100%",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "scrollBarWidth": 10
},
{
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 44,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
},
{
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 44,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
},
{
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 44,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
},
{
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 44,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
},
{
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 44,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
},
{
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "width": 50,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton --"
 },
 "paddingTop": 0,
 "visible": false,
 "propagateClick": false,
 "maxWidth": 101,
 "cursor": "hand",
 "verticalAlign": "middle",
 "maxHeight": 101
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "paddingRight": 0,
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_FDC40985_CBF7_CE5A_41D2_C705DD88331A.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "shadow": false,
 "gap": 10,
 "width": "100%",
 "paddingTop": 0,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "verticalAlign": "top"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
