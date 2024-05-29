(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_BDC95708_D993_426B_41D1_9DC67F73A3F3",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_F1D6228C_D9B3_426A_41E8_7F205F31030E"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8816054B_DAF3_46EE_41D9_1A6517573292.ogg",
  "mp3Url": "media/audio_8816054B_DAF3_46EE_41D9_1A6517573292.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8816054B_DAF3_46EE_41D9_1A6517573292",
 "data": {
  "label": "8. Bale Pelawatan"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_881D9397_DAF3_4266_41E7_1A748B627CE8.ogg",
  "mp3Url": "media/audio_881D9397_DAF3_4266_41E7_1A748B627CE8.mp3",
  "class": "AudioResource"
 },
 "id": "audio_881D9397_DAF3_4266_41E7_1A748B627CE8",
 "data": {
  "label": "5. Ratu Anom"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 7",
 "hfovMin": "135%",
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3091.31,
   "angle": 94.75,
   "y": 1642.68,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
  "this.overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
  "this.overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
  "this.overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
  "this.overlay_9D866CFA_BBB7_47AE_41C4_95C552770376"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -86.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.38,
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "distance": 1
  },
  {
   "yaw": -173.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.46,
   "panorama": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2.ogg",
  "mp3Url": "media/audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2",
 "data": {
  "label": "10. Bale Pengrauhan"
 }
},
{
 "initialPosition": {
  "yaw": -81.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4B5B968_C486_34D8_41E5_2C0B757B9ABA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -82.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D42C09B1_C486_3449_41B5_2EA4B2E1E6AC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_883F8CE1_DAF3_47DA_41D3_3042785822AF.ogg",
  "mp3Url": "media/audio_883F8CE1_DAF3_47DA_41D3_3042785822AF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_883F8CE1_DAF3_47DA_41D3_3042785822AF",
 "data": {
  "label": "21. Betara Nini"
 }
},
{
 "initialPosition": {
  "yaw": -129.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D44969BF_C486_37B9_41A0_2DD51B5A3530",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 173.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D6ABB8E5_C486_35C9_41E0_4E24420D427E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8810A719_DAF3_426A_41B3_914D9EBF18EF.ogg",
  "mp3Url": "media/audio_8810A719_DAF3_426A_41B3_914D9EBF18EF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8810A719_DAF3_426A_41B3_914D9EBF18EF",
 "data": {
  "label": "11. Bale Banten"
 }
},
{
 "initialPosition": {
  "yaw": 12.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D689A8D7_C486_35C9_41BC_D04F7F9FC9CE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_883C7D6C_DAF3_46AA_41BF_752D783D152D.ogg",
  "mp3Url": "media/audio_883C7D6C_DAF3_46AA_41BF_752D783D152D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_883C7D6C_DAF3_46AA_41BF_752D783D152D",
 "data": {
  "label": "22. Bale Piasan"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 4000,
 "label": "Madya Mandala",
 "image": {
  "levels": [
   {
    "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_lq.jpeg",
    "width": 295,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 222
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_BB42FE1B_DEF0_C26E_41C8_8296A33B3B76",
  "this.overlay_BB03F9B3_DEF0_C1BE_41E7_63B0B2765D12",
  "this.overlay_B840D048_DEF7_5EEA_41B5_F0DB826CBF18",
  "this.overlay_B971FFA5_DEF7_C25A_41D4_8DE82D9CCE85",
  "this.overlay_B85811E8_DEF1_C1AA_41CD_C0E5590A5892"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "height": 3000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4.ogg",
  "mp3Url": "media/audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4.mp3",
  "class": "AudioResource"
 },
 "id": "audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4",
 "data": {
  "label": "28. Ratu Ngurah Ebuh"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 3",
 "hfovMin": "135%",
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 2668.73,
   "angle": 90,
   "y": 1219.53,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
  "this.overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
  "this.overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
  "this.overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
  "this.overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E",
  "this.overlay_F6748890_DAF0_CE7A_41E5_51CCB22EBD80"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -167.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.44,
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "distance": 1
  },
  {
   "yaw": 76.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.51,
   "panorama": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "distance": 1
  },
  {
   "yaw": -49.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.6,
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  },
  {
   "yaw": -167.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.6,
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  },
  {
   "yaw": 76.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.6,
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 6.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB6C9938_C486_3447_4182_6B0CDD5FC314",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992.ogg",
  "mp3Url": "media/audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992.mp3",
  "class": "AudioResource"
 },
 "id": "audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992",
 "data": {
  "label": "13. Taksu Agung"
 }
},
{
 "initialPosition": {
  "yaw": -94.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D533B8AB_C486_3459_41DA_B3DB9F89C0BF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_883A3E03_DAF3_425E_41CA_765D6497A627.ogg",
  "mp3Url": "media/audio_883A3E03_DAF3_425E_41CA_765D6497A627.mp3",
  "class": "AudioResource"
 },
 "id": "audio_883A3E03_DAF3_425E_41CA_765D6497A627",
 "data": {
  "label": "23. Bale Pesanekan"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_88272A9C_DAF3_426B_41A4_366E324B427D.ogg",
  "mp3Url": "media/audio_88272A9C_DAF3_426B_41A4_366E324B427D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_88272A9C_DAF3_426B_41A4_366E324B427D",
 "data": {
  "label": "17. Pengayatan Pura Sakenan"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E.ogg",
  "mp3Url": "media/audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E",
 "data": {
  "label": "26. Wisnu"
 }
},
{
 "initialPosition": {
  "yaw": 84.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D41089A2_C486_344B_41DB_79611B1F8401",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA.ogg",
  "mp3Url": "media/audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA",
 "data": {
  "label": "20. Bale Pemangku"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8837FF1A_DAF3_426E_41BF_69C752A7D336.ogg",
  "mp3Url": "media/audio_8837FF1A_DAF3_426E_41BF_69C752A7D336.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8837FF1A_DAF3_426E_41BF_69C752A7D336",
 "data": {
  "label": "25. Ratu Gede Gangga"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72.ogg",
  "mp3Url": "media/audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72.mp3",
  "class": "AudioResource"
 },
 "id": "audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72",
 "data": {
  "label": "12. Bale Piasan"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 1",
 "hfovMin": "135%",
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 1036.9,
   "angle": 90.12,
   "y": 1219.24,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
  "this.overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
  "this.overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
  "this.overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.05,
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "distance": 1
  },
  {
   "yaw": -139.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 50.32,
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 1.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4FAF993_C486_3449_41E6_8A40BE5940CD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -103.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB7A493E_C486_34B8_41D9_DA9CD4A65F1F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 8",
 "hfovMin": "135%",
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 2704.04,
   "angle": 86.56,
   "y": 1662.37,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
  "this.overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
  "this.overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 4.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.53,
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "distance": 1
  },
  {
   "yaw": -92.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.81,
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 71.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB58B92A_C486_345B_41DE_1094B5D26467",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 40.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB61E931_C486_3449_41B0_A9D848D31E0A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4A97962_C486_34CB_41DA_8ABBD7611FFF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4.ogg",
  "mp3Url": "media/audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4.mp3",
  "class": "AudioResource"
 },
 "id": "audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4",
 "data": {
  "label": "2. Meru Tumpang Tiga"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_882D78E2_DAF3_4FDE_4160_5A177B836367.ogg",
  "mp3Url": "media/audio_882D78E2_DAF3_4FDE_4160_5A177B836367.mp3",
  "class": "AudioResource"
 },
 "id": "audio_882D78E2_DAF3_4FDE_4160_5A177B836367",
 "data": {
  "label": "14. Pengayatan Pura Batukaru"
 }
},
{
 "initialPosition": {
  "yaw": -94.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D53D88B1_C486_3448_41DB_E3C816547A36",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3.ogg",
  "mp3Url": "media/audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3.mp3",
  "class": "AudioResource"
 },
 "id": "audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3",
 "data": {
  "label": "29. Bale Piasan"
 }
},
{
 "initialPosition": {
  "yaw": 172.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D459D9C5_C486_37C8_41D1_A145FF918A8A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787.ogg",
  "mp3Url": "media/audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787",
 "data": {
  "label": "31. Bale KulKul"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E.ogg",
  "mp3Url": "media/audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E",
 "data": {
  "label": "1. Padmasana"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_880381DE_DAF3_41E6_41D8_B683B125F078.ogg",
  "mp3Url": "media/audio_880381DE_DAF3_41E6_41D8_B683B125F078.mp3",
  "class": "AudioResource"
 },
 "id": "audio_880381DE_DAF3_41E6_41D8_B683B125F078",
 "data": {
  "label": "2. Meru Tumpang Tiga"
 }
},
{
 "items": [
  {
   "media": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera"
  },
  {
   "media": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera"
  },
  {
   "media": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera"
  },
  {
   "media": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera"
  },
  {
   "media": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera"
  },
  {
   "media": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera"
  },
  {
   "media": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera"
  },
  {
   "media": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera"
  },
  {
   "media": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera"
  },
  {
   "media": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera"
  },
  {
   "media": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera"
  },
  {
   "media": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera"
  },
  {
   "media": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera"
  },
  {
   "media": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera"
  },
  {
   "media": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera"
  },
  {
   "media": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera"
  },
  {
   "media": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera"
  },
  {
   "media": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_E71F6571_FE6F_152F_41D6_142612208792.ogg",
  "mp3Url": "media/audio_E71F6571_FE6F_152F_41D6_142612208792.mp3",
  "class": "AudioResource"
 },
 "id": "audio_E71F6571_FE6F_152F_41D6_142612208792",
 "data": {
  "label": "3. Pengayatan Kahyangan Tiga"
 }
},
{
 "initialPosition": {
  "yaw": 174.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D54C58B9_C486_35B8_41DF_FEA3764E5AB2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_88387E91_DAF3_427A_41E6_F9620897DEE4.ogg",
  "mp3Url": "media/audio_88387E91_DAF3_427A_41E6_F9620897DEE4.mp3",
  "class": "AudioResource"
 },
 "id": "audio_88387E91_DAF3_427A_41E6_F9620897DEE4",
 "data": {
  "label": "24. Pewaregan"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pintu ke Madya Utama",
 "hfovMin": "135%",
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2268.81,
   "angle": 91.48,
   "y": 1283.64,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
  "this.overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -178.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 15.39,
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  },
  {
   "yaw": -7.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.96,
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jaba Pemerajan 1",
 "hfovMin": "135%",
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1653.48,
   "angle": 181.76,
   "y": 1620.45,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
  "this.overlay_A741A38A_B697_426E_41D8_C41840EE397A",
  "this.overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
  "this.overlay_F1D6BBB5_D9B0_C1A5_41D6_846EE8F5ED3E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -5.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.55,
   "panorama": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "distance": 1
  },
  {
   "yaw": 159.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.6,
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  },
  {
   "yaw": -90.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.6,
   "panorama": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 93.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D41D09A9_C486_3459_41E4_3860D9C71739",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C.ogg",
  "mp3Url": "media/audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C",
 "data": {
  "label": "30. Bale Gong Jaba"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pintu ke Utama Mandala",
 "hfovMin": "135%",
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 2843.92,
   "angle": 92.79,
   "y": 1414.69,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
  "this.overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
  "this.overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -167.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.55,
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "distance": 1
  },
  {
   "yaw": 78.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.09,
   "panorama": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "distance": 1
  },
  {
   "yaw": 50.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -139.98,
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 4",
 "hfovMin": "135%",
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3152.96,
   "angle": 70.16,
   "y": 735.01,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
  "this.overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
  "this.overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
  "this.overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
  "this.overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 97.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.49,
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "distance": 1
  },
  {
   "yaw": 135.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.05,
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218.ogg",
  "mp3Url": "media/audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218.mp3",
  "class": "AudioResource"
 },
 "id": "audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218",
 "data": {
  "label": "19. Pelik Sari Kauh"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_881A4434_DAF3_46BA_41E2_30159DFCC13C.ogg",
  "mp3Url": "media/audio_881A4434_DAF3_46BA_41E2_30159DFCC13C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_881A4434_DAF3_46BA_41E2_30159DFCC13C",
 "data": {
  "label": "6. Hyang Ibu"
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 4000,
 "label": "Utama Mandala",
 "image": {
  "levels": [
   {
    "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_lq.jpeg",
    "width": 295,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 222
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_B20767F3_DE91_41BD_41DE_B3819DBE273E",
  "this.overlay_BCDEC48F_DE90_C666_41E1_FA68CCAAE8FA",
  "this.overlay_B35095DA_DE90_C1EE_41E7_5D5F857A9C43",
  "this.overlay_BB693225_DE90_C25A_41D1_219E544E3D94",
  "this.overlay_B86CCEC8_DE90_C3EA_41D7_E49FCAB3FE8E",
  "this.overlay_A5449207_DE90_C266_41E0_97DE3DADF49E",
  "this.overlay_B8F2A788_DE91_C26A_41D9_DC77BCE6EF9D"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "height": 3000
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 4000,
 "label": "Nista Mandala",
 "image": {
  "levels": [
   {
    "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2400
   },
   {
    "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_lq.jpeg",
    "width": 295,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 222
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_BB226F56_D997_42E6_41CC_76064614B70D",
  "this.overlay_A722412B_D993_7EAE_41DB_296A40D04CC1",
  "this.overlay_A1B6D603_D991_425E_41D8_E815608B72DF",
  "this.overlay_A40EF114_D9AF_3E7A_41C3_EF4428324BEF",
  "this.overlay_A18A7F21_D9B0_C25A_41C9_FE7DE55E3411",
  "this.overlay_A793AE85_D9B1_C25A_4195_5675A5C3E5FC"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.33,
 "thumbnailUrl": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.21,
 "height": 3000
},
{
 "initialPosition": {
  "yaw": -175.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D56E68C9_C486_35D9_41D8_705F550E50FF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -164.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D69868DE_C486_35FB_41D9_7E91CE59041E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.61,
  "class": "PanoramaCameraPosition",
  "pitch": -1
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 172.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4CEE976_C486_34C8_41E0_4FDE5934ACEB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB4B4919_C486_3479_41DC_1ACC0DA9646E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 130.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D47B69D3_C486_37C9_41E6_248073A7D79A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4A0895B_C486_34F9_41E7_AFD587D60EC3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 2",
 "hfovMin": "135%",
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 1699.99,
   "angle": 81.41,
   "y": 1076.55,
   "class": "PanoramaMapLocation"
  }
 ],
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -177.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.06,
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "distance": 1
  },
  {
   "yaw": 0.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.12,
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7.ogg",
  "mp3Url": "media/audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7.mp3",
  "class": "AudioResource"
 },
 "id": "audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7",
 "data": {
  "label": "7. Kemulan"
 }
},
{
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4958953_C486_34C9_41E1_D1EF0266B34F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00.ogg",
  "mp3Url": "media/audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00.mp3",
  "class": "AudioResource"
 },
 "id": "audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00",
 "data": {
  "label": "15. Manjang Sakaluang"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B.ogg",
  "mp3Url": "media/audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B",
 "data": {
  "label": "9. Bale Gong"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gapura Nista Mandala",
 "hfovMin": "135%",
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 1472.29,
   "angle": -105.18,
   "y": 1364.62,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
  "this.overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 98.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.28,
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 87.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D48F394C_C486_34DF_41C8_FB47FA7834B1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sanggah Betara Nini",
 "hfovMin": "135%",
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 3035.82,
   "angle": 79.81,
   "y": 2250.29,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
  "this.overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
  "this.overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.44,
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jaba Pemerajan 2",
 "hfovMin": "135%",
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2175.64,
   "angle": 189.53,
   "y": 1611.52,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
  "this.overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 85.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -90.88,
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  },
  {
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -101.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4D5697E_C486_34BB_4195_8A3C5F18796D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 12.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB46E910_C486_3447_41CA_21464F741CDC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala",
 "hfovMin": "135%",
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 2351.88,
   "angle": 264.19,
   "y": 1421.63,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
  "this.overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
  "this.overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
  "this.overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
  "this.overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
  "this.overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -177.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.63,
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  },
  {
   "yaw": 28.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.18,
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 89.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D406299A_C486_3478_41E0_CE52C6B3A485",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pintu ke Nista Mandala",
 "hfovMin": "135%",
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 1394.72,
   "angle": 266.21,
   "y": 862.44,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
  "this.overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
  "this.overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -95.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 98.79,
   "panorama": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "distance": 1
  },
  {
   "yaw": -179.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.7,
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "distance": 1
  },
  {
   "yaw": -6.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.59,
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D57858D0_C486_35C8_4176_6F01BDF68E48",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 31.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4EF098C_C486_345F_41E1_79C48722355C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  "this.PanoramaPlayListItem_D5BE285A_C486_34FB_41E6_AAF6AC537DB8",
  "this.PanoramaPlayListItem_D5C3A85C_C486_34FF_41A7_27EC7553043D",
  "this.PanoramaPlayListItem_D5C3385C_C486_34FF_41BD_93A5A729A3CC",
  "this.PanoramaPlayListItem_D5C0885C_C486_34FF_41D2_1CFA481D3870",
  "this.PanoramaPlayListItem_D5C0785C_C486_34FF_41CB_B626741BE114",
  "this.PanoramaPlayListItem_D5C1C85C_C486_34FF_41C5_B1FCBAE2EC94",
  "this.PanoramaPlayListItem_D5C6B85C_C486_34FF_41D5_351FB4BAEF07",
  "this.PanoramaPlayListItem_D5C6485C_C486_34FF_41C9_7BC02B6BAFB6",
  "this.PanoramaPlayListItem_D5C7D85D_C486_34F9_41C8_B16ACF18BB89",
  "this.PanoramaPlayListItem_D5C4B85D_C486_34F9_41D4_879826762FAE",
  "this.PanoramaPlayListItem_D5C7B85D_C486_34F9_41DF_95867B3CBE66",
  "this.PanoramaPlayListItem_D5C7185E_C486_34FB_41D6_47A6FCA64FB9",
  "this.PanoramaPlayListItem_D5C4F863_C486_34C9_41D9_9FFB945BBA70",
  "this.PanoramaPlayListItem_D5C44863_C486_34C9_41E5_377A86C6FD59",
  "this.PanoramaPlayListItem_D5C51863_C486_34C9_41DE_C27FC537D88D",
  "this.PanoramaPlayListItem_D5CA9863_C486_34C9_41D0_EF8FD8646B6F",
  "this.PanoramaPlayListItem_D5CA7864_C486_34CF_41C2_92D244B58ED3",
  "this.PanoramaPlayListItem_D5CBD864_C486_34CF_41E5_62E06739F2E4"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5.ogg",
  "mp3Url": "media/audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5.mp3",
  "class": "AudioResource"
 },
 "id": "audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5",
 "data": {
  "label": "24. Pewaregan"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pintu Masuk Pemerajan",
 "hfovMin": "128%",
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1632.08,
   "angle": 174.88,
   "y": 2267.46,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -176.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.59,
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_881FB308_DAF3_426A_41E5_8F23E936C97C.ogg",
  "mp3Url": "media/audio_881FB308_DAF3_426A_41E5_8F23E936C97C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_881FB308_DAF3_426A_41E5_8F23E936C97C",
 "data": {
  "label": "4. Gedong Kunci"
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Halaman Madya Mandala 5",
 "hfovMin": "135%",
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3111.28,
   "angle": 95.16,
   "y": 1187.4,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
  "this.overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
  "this.overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
  "this.overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.86,
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "distance": 1
  },
  {
   "yaw": -87.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 97.41,
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sanggah Ratu Ngurah Ebuh",
 "hfovMin": "135%",
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2318.35,
   "angle": 95.23,
   "y": 1081.28,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
  "this.overlay_AE57CE02_BA91_425E_41CC_C59F17058325"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -148.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.59,
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_81300207_DA93_C266_41DC_160D7BDE13D4.ogg",
  "mp3Url": "media/audio_81300207_DA93_C266_41DC_160D7BDE13D4.mp3",
  "class": "AudioResource"
 },
 "id": "audio_81300207_DA93_C266_41DC_160D7BDE13D4",
 "data": {
  "label": "27. Aling-Aling"
 }
},
{
 "initialPosition": {
  "yaw": -20.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4E3F985_C486_3449_41E7_FEB258A18670",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 92.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D46B49CC_C486_37D8_41D3_3AF8A05FFB59",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30.ogg",
  "mp3Url": "media/audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30",
 "data": {
  "label": "18. Pelik Sari Kangin"
 }
},
{
 "initialPosition": {
  "yaw": 2.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D43EC9B7_C486_3449_41D6_BB593199E949",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jaba Pemerajan 3",
 "hfovMin": "135%",
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1650.95,
   "angle": 86.73,
   "y": 1044.55,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
  "this.overlay_A2078302_B6B1_425E_41E4_269921A75A62",
  "this.overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
  "this.overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 85.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.21,
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  },
  {
   "yaw": -7.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -148.15,
   "panorama": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "distance": 1
  },
  {
   "yaw": 15.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.93,
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1.ogg",
  "mp3Url": "media/audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1.mp3",
  "class": "AudioResource"
 },
 "id": "audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1",
 "data": {
  "label": "16. Pengayatan Pura Uluwatu"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 2.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_CB4DF921_C486_3449_41DC_2135A01EAAEE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D55E48C1_C486_35C8_41D1_6D0745D4824D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -151.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4C0E970_C486_34C7_41DA_F829C806A340",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A.ogg",
  "mp3Url": "media/audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A.mp3",
  "class": "AudioResource"
 },
 "id": "audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A",
 "data": {
  "label": "3. Pengayatan Kahyangan Tiga"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D52338A2_C486_344B_41A6_65911D2C0D87",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_D4803946_C486_34CB_41E5_66365C77A348",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "2.3%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 641,
 "top": "1.5%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 332,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [],
 "backgroundColor": [],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0
},
{
 "shadow": false,
 "maxHeight": 234,
 "maxWidth": 283,
 "id": "Container_BDC95708_D993_426B_41D1_9DC67F73A3F3",
 "children": [
  "this.MapViewer",
  "this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "right": "3.1%",
 "width": "17.069%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 58,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 130,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "25.799%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--DENAH"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D",
  "this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A",
  "this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226",
  "this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D",
  "this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57",
  "this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06",
  "this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761",
  "this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC",
  "this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349",
  "this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA",
  "this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB",
  "this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A",
  "this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927",
  "this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183",
  "this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1",
  "this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C",
  "this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0",
  "this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA",
  "this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1",
  "this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D",
  "this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C",
  "this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9",
  "this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004",
  "this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0",
  "this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5",
  "this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A",
  "this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E",
  "this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9",
  "this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A",
  "this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false); this.stopGlobalAudio(this.audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A)",
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "--PELINGGIH"
 },
 "hide": "this.stopGlobalAudio(this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C); this.stopGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); this.stopGlobalAudio(this.audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3); this.stopGlobalAudio(this.audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4); this.stopGlobalAudio(this.audio_81300207_DA93_C266_41DC_160D7BDE13D4); this.stopGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); this.stopGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); this.stopGlobalAudio(this.audio_88387E91_DAF3_427A_41E6_F9620897DEE4); this.stopGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); this.stopGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); this.stopGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); this.stopGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); this.stopGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); this.stopGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); this.stopGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); this.stopGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); this.stopGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); this.stopGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); this.stopGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); this.stopGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); this.stopGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); this.stopGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); this.stopGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); this.stopGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); this.stopGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); this.stopGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); this.stopGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); this.stopGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); this.stopGlobalAudio(this.audio_880381DE_DAF3_41E6_41D8_B683B125F078); this.stopGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); this.stopGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5)",
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F10FE96B_D991_4EAE_41C5_6521EEE84E57",
  "this.Container_F2D2E2E3_D993_C3DE_41AF_57F211543810"
 ],
 "id": "Container_F1D6228C_D9B3_426A_41E8_7F205F31030E",
 "width": "99.94%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Pelinggih"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718EBEE0_7EA6_6C57_41C2_EB14B5C6481A",
   "pitch": -0.44,
   "hfov": 7.54,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E).get('state') == 'playing') { this.stopGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0987FE6D_066E_3F74_4156_DA0032C0B70A",
   "pitch": 0.57,
   "hfov": 7.54,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4).get('state') == 'playing') { this.stopGlobalAudio(this.audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_E6F2F600_FE6F_16ED_41E3_8567EAF7DBF4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718F8EE0_7EA6_6C57_41DB_530E428228A5",
   "pitch": 2.07,
   "hfov": 7.53,
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_D55E48C1_C486_35C8_41D1_6D0745D4824D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718FCEE0_7EA6_6C57_41DC_1032EAF89543",
   "pitch": -35.23,
   "hfov": 13.85,
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.65,
   "yaw": -173.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22, this.camera_D56E68C9_C486_35D9_41D8_705F550E50FF); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71881EE0_7EA6_6C57_41A1_7F736E3E13EE",
   "pitch": -33.98,
   "hfov": 13.65,
   "yaw": -173.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D866CFA_BBB7_47AE_41C4_95C552770376",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 78,
  "x": 1355.72,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 823.44,
  "class": "HotspotMapOverlayMap",
  "height": 78,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1355.72,
  "y": 823.44,
  "class": "HotspotMapOverlayImage",
  "width": 78,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_0.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ],
   "class": "ImageResource"
  },
  "height": 78
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BB42FE1B_DEF0_C26E_41C8_8296A33B3B76",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 78,
  "x": 2312.88,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1382.63,
  "class": "HotspotMapOverlayMap",
  "height": 78,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2312.88,
  "y": 1382.63,
  "class": "HotspotMapOverlayImage",
  "width": 78,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_1.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ],
   "class": "ImageResource"
  },
  "height": 78
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BB03F9B3_DEF0_C1BE_41E7_63B0B2765D12",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 78,
  "x": 1433.29,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1325.62,
  "class": "HotspotMapOverlayMap",
  "height": 78,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1433.29,
  "y": 1325.62,
  "class": "HotspotMapOverlayImage",
  "width": 78,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_2.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ],
   "class": "ImageResource"
  },
  "height": 78
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B840D048_DEF7_5EEA_41B5_F0DB826CBF18",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 78,
  "x": 2804.92,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1375.69,
  "class": "HotspotMapOverlayMap",
  "height": 78,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2804.92,
  "y": 1375.69,
  "class": "HotspotMapOverlayImage",
  "width": 78,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_3.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ],
   "class": "ImageResource"
  },
  "height": 78
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B971FFA5_DEF7_C25A_41D4_8DE82D9CCE85",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 78,
  "x": 2996.82,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2211.29,
  "class": "HotspotMapOverlayMap",
  "height": 78,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2996.82,
  "y": 2211.29,
  "class": "HotspotMapOverlayImage",
  "width": 78,
  "image": {
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_4.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ],
   "class": "ImageResource"
  },
  "height": 78
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B85811E8_DEF1_C1AA_41CD_C0E5590A5892",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.51,
   "yaw": 40.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71835EDE_7EA6_6C6B_41D2_C25F9FD76BDF",
   "pitch": 5.09,
   "hfov": 7.51,
   "yaw": 40.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -16.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71838EDE_7EA6_6C6B_41AD_5CFEBA5A05D2",
   "pitch": 7.1,
   "hfov": 7.48,
   "yaw": -16.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -49.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_D4958953_C486_34C9_41E1_D1EF0266B34F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7183CEDE_7EA6_6C6B_41D1_34BD922FAAF8",
   "pitch": -22.55,
   "hfov": 10.79,
   "yaw": -49.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718C3EDE_7EA6_6C6B_41CE_DFF0BEEE914D",
   "pitch": 2.2,
   "hfov": 5.02,
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.33,
   "yaw": -167.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_D4A0895B_C486_34F9_41E7_AFD587D60EC3); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718C7EDF_7EA6_6C69_41DC_8CB2F7C104CC",
   "pitch": -43.27,
   "hfov": 10.33,
   "yaw": -167.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 76.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_D4A97962_C486_34CB_41DA_8ABBD7611FFF); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718CEEDF_7EA6_6C69_41B7_D4E124A9EA42",
   "pitch": -26.57,
   "hfov": 10.45,
   "yaw": 76.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6748890_DAF0_CE7A_41E5_51CCB22EBD80",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 96.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71873EDD_7EA6_6C69_41CF_26D3CD31C6EB",
   "pitch": -1.44,
   "hfov": 7.53,
   "yaw": 96.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.5,
   "yaw": -62.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71879EDD_7EA6_6C69_41DE_63332292A965",
   "pitch": 5.21,
   "hfov": 6.5,
   "yaw": -62.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -139.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_D44969BF_C486_37B9_41A0_2DD51B5A3530); this.mainPlayList.set('selectedIndex', 9); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_2_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.75,
   "yaw": -139.98
  }
 ],
 "id": "overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4, this.camera_D43EC9B7_C486_3449_41D6_BB593199E949); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71804EDD_7EA6_6C69_41D4_A15D650E9C5C",
   "pitch": -24.18,
   "hfov": 7.68,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 80.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_E71F6571_FE6F_152F_41D6_142612208792).get('state') == 'playing') { this.stopGlobalAudio(this.audio_E71F6571_FE6F_152F_41D6_142612208792); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_E71F6571_FE6F_152F_41D6_142612208792); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71888EE0_7EA6_6C57_41CD_E590CF109D41",
   "pitch": 3.33,
   "hfov": 7.52,
   "yaw": 80.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.89,
   "yaw": 4.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_CB6C9938_C486_3447_4182_6B0CDD5FC314); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7188DEE1_7EA6_6C59_41BB_6028DF875232",
   "pitch": -31.97,
   "hfov": 12.89,
   "yaw": 4.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.47,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_CB7A493E_C486_34B8_41D9_DA9CD4A65F1F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71894EE1_7EA6_6C59_41D6_E4A38462EC04",
   "pitch": -31.84,
   "hfov": 15.47,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_D6ABB8E5_C486_35C9_41E0_4E24420D427E); this.mainPlayList.set('selectedIndex', 6); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.14,
   "yaw": -7.59
  }
 ],
 "id": "overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.87,
   "yaw": -178.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_D69868DE_C486_35FB_41D9_7E91CE59041E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BABEDC_7EA6_6C6F_419A_2DD728C300C5",
   "pitch": -15.51,
   "hfov": 7.87,
   "yaw": -178.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.33,
   "yaw": -5.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C, this.camera_D52338A2_C486_344B_41A6_65911D2C0D87); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BECEDA_7EA6_6C6B_41DE_D6773CB59EE0",
   "pitch": -14.13,
   "hfov": 11.33,
   "yaw": -5.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.77,
   "yaw": -90.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556, this.camera_D53D88B1_C486_3448_41DB_E3C816547A36); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BF2EDB_7EA6_6C69_41C7_73C5DC0B8013",
   "pitch": -9.99,
   "hfov": 9.77,
   "yaw": -90.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A741A38A_B697_426E_41D8_C41840EE397A",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 159.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_D533B8AB_C486_3459_41DA_B3DB9F89C0BF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BF6EDB_7EA6_6C69_41DA_8FF0D1858388",
   "pitch": -12.25,
   "hfov": 6.51,
   "yaw": 159.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.07,
   "yaw": 54.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, true, 0, null, null, false); this.setComponentVisibility(this.HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BFAEDB_7EA6_6C69_41DE_A203FE6837BD",
   "pitch": 20.16,
   "hfov": 7.07,
   "yaw": 54.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1D6BBB5_D9B0_C1A5_41D6_846EE8F5ED3E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.96,
   "yaw": -167.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_CB4DF921_C486_3449_41DC_2135A01EAAEE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71853EDD_7EA6_6C69_41D1_0C8759DC08F8",
   "pitch": -21.17,
   "hfov": 9.96,
   "yaw": -167.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 78.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB, this.camera_CB58B92A_C486_345B_41DE_1094B5D26467); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71858EDD_7EA6_6C69_41DC_2305603AEEFA",
   "pitch": -11.62,
   "hfov": 5.78,
   "yaw": 78.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.94,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_CB61E931_C486_3449_41B0_A9D848D31E0A); this.mainPlayList.set('selectedIndex', 11); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 2, this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_2_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89,
   "yaw": 50.32
  }
 ],
 "id": "overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.27,
   "yaw": -58.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7183CEDF_7EA6_6C69_41DD_AA0220DE9F78",
   "pitch": -2.7,
   "hfov": 6.27,
   "yaw": -58.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -26.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718C1EDF_7EA6_6C69_41B2_4C31605F48F2",
   "pitch": 4.84,
   "hfov": 7.51,
   "yaw": -26.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718C6EDF_7EA6_6C69_4180_F4F580B2828E",
   "pitch": 4.33,
   "hfov": 7.52,
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.82,
   "yaw": 135.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_D47B69D3_C486_37C9_41E6_248073A7D79A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718CAEDF_7EA6_6C69_417F_E100B44D957E",
   "pitch": -36.49,
   "hfov": 11.82,
   "yaw": 135.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 97.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_D46B49CC_C486_37D8_41D3_3AF8A05FFB59); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718D1EDF_7EA6_6C69_41C6_5689E9E2E098",
   "pitch": -26.57,
   "hfov": 10.45,
   "yaw": 97.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 997.4,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1179.74,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 997.4,
  "y": 1179.74,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_0.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B20767F3_DE91_41BD_41DE_B3819DBE273E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 1660.49,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1037.05,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1660.49,
  "y": 1037.05,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_1.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BCDEC48F_DE90_C666_41E1_FA68CCAAE8FA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 2629.23,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1180.03,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2629.23,
  "y": 1180.03,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_2.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B35095DA_DE90_C1EE_41E7_5D5F857A9C43",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 3113.46,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 695.51,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3113.46,
  "y": 695.51,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_3.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BB693225_DE90_C25A_41D1_219E544E3D94",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 3071.78,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1147.9,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3071.78,
  "y": 1147.9,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_4.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B86CCEC8_DE90_C3EA_41D7_E49FCAB3FE8E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 3051.81,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1603.18,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3051.81,
  "y": 1603.18,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_5.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A5449207_DE90_C266_41E0_97DE3DADF49E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 79,
  "x": 2664.54,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1622.87,
  "class": "HotspotMapOverlayMap",
  "height": 79,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2664.54,
  "y": 1622.87,
  "class": "HotspotMapOverlayImage",
  "width": 79,
  "image": {
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_6.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 79
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B8F2A788_DE91_C26A_41D9_DC77BCE6EF9D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 1592.08,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2227.46,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1592.08,
  "y": 2227.46,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_0.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BB226F56_D997_42E6_41CC_76064614B70D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 1613.48,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1580.45,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1613.48,
  "y": 1580.45,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_1.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A722412B_D993_7EAE_41DB_296A40D04CC1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 1610.95,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1004.55,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1610.95,
  "y": 1004.55,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_2.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A1B6D603_D991_425E_41D8_E815608B72DF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 2228.81,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1243.64,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2228.81,
  "y": 1243.64,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_3.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A40EF114_D9AF_3E7A_41C3_EF4428324BEF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 2135.64,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1571.52,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2135.64,
  "y": 1571.52,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_4.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A18A7F21_D9B0_C25A_41C9_FE7DE55E3411",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 2278.35,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1041.28,
  "class": "HotspotMapOverlayMap",
  "height": 80,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2278.35,
  "y": 1041.28,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_5.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 80
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_A793AE85_D9B1_C25A_4195_5675A5C3E5FC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.05,
   "yaw": -177.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_D57858D0_C486_35C8_4176_6F01BDF68E48); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7180BEDE_7EA6_6C6B_41D3_450AB0CB7B45",
   "pitch": -17.02,
   "hfov": 8.05,
   "yaw": -177.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A707D66E_BA90_C2A6_41D4_5129D7A7A73A",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 112.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71811EDE_7EA6_6C6B_41C9_736CFA6F1D8A",
   "pitch": -1.57,
   "hfov": 5.02,
   "yaw": 112.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A71BD6C6_BA90_C3E6_41E6_74C454529120",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71815EDE_7EA6_6C6B_41C4_A7D656132F50",
   "pitch": 0.94,
   "hfov": 5.02,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_989ED567_BA91_46A6_41BF_ADC016CA985E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 68.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71818EDE_7EA6_6C6B_41D1_9303B59E3823",
   "pitch": 1.44,
   "hfov": 5.02,
   "yaw": 68.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98304E75_BA91_42BA_41E5_0A3270584B52",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 0.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_D689A8D7_C486_35C9_41BC_D04F7F9FC9CE); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7181FEDE_7EA6_6C6B_41C7_F7D389868BF6",
   "pitch": -26.94,
   "hfov": 8.62,
   "yaw": 0.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98C90373_BA91_C2BE_4181_D1705A4BD89A",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5,
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71823EDE_7EA6_6C6B_41D1_9E83261B60C6",
   "pitch": -5.59,
   "hfov": 5,
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A07C467_BA9F_46A6_41E0_E0B629F41C41",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71829EDE_7EA6_6C6B_41D0_2991D36F6FE5",
   "pitch": 2.2,
   "hfov": 5.02,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_984A6B01_BA9F_C25A_41A8_B7D1A7D78D3B",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -31.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7182DEDE_7EA6_6C6B_41D8_5EC8921EB2E5",
   "pitch": 3.2,
   "hfov": 5.02,
   "yaw": -31.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99591FC0_BA9F_C1DB_41E3_13497D48D4C8",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 98.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_D41089A2_C486_344B_41DB_79611B1F8401); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BABEDC_7EA6_6C6F_41D5_B618369D8DAB",
   "pitch": -28.33,
   "hfov": 8.29,
   "yaw": 98.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.26,
   "yaw": -176.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 7, this.audio_81300207_DA93_C266_41DC_160D7BDE13D4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BB2EDC_7EA6_6C6F_41C8_527D498C58D2",
   "pitch": -4.21,
   "hfov": 6.26,
   "yaw": -176.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -44.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71864EDD_7EA6_6C69_41C2_D53394C1608A",
   "pitch": 8.35,
   "hfov": 7.46,
   "yaw": -44.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.47,
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF).get('state') == 'playing') { this.stopGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71869EDD_7EA6_6C69_41DA_D8AB36B691F7",
   "pitch": 7.35,
   "hfov": 7.47,
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": -108.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_D4D5697E_C486_34BB_4195_8A3C5F18796D); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7186CEDD_7EA6_6C69_41CE_2493755F8A1A",
   "pitch": -12.12,
   "hfov": 7.98,
   "yaw": -108.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.05,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_D406299A_C486_3478_41E0_CE52C6B3A485); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71B80EDB_7EA6_6C69_41AE_7CE8ACC0D30C",
   "pitch": -20.66,
   "hfov": 9.05,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -129.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_2_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27,
   "yaw": -129.81
  }
 ],
 "id": "overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.28,
   "yaw": 28.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_CB4B4919_C486_3479_41DC_1ACC0DA9646E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BB7EDC_7EA6_6C6F_41C8_8C0B72E14526",
   "pitch": -11.24,
   "hfov": 6.28,
   "yaw": 28.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -135.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BBCEDC_7EA6_6C6F_419A_A95448A59258",
   "pitch": -6.97,
   "hfov": 7.48,
   "yaw": -135.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.78,
   "yaw": -85.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BBFEDC_7EA6_6C6F_417C_3DF0F3DACF78",
   "pitch": -25.81,
   "hfov": 6.78,
   "yaw": -85.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.49,
   "yaw": -100.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627).get('state') == 'playing') { this.stopGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71844EDC_7EA6_6C6F_41D2_014B12830033",
   "pitch": 6.85,
   "hfov": 4.49,
   "yaw": -100.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -43.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5).get('state') == 'playing') { this.stopGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71848EDC_7EA6_6C6F_41CC_15D585CFB97C",
   "pitch": 3.2,
   "hfov": 4.51,
   "yaw": -43.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.58,
   "yaw": -177.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_CB46E910_C486_3447_41CA_21464F741CDC); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7184DEDD_7EA6_6C69_41D6_9BBA56AC715F",
   "pitch": -17.65,
   "hfov": 6.58,
   "yaw": -177.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.44,
   "yaw": -6.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_D4CEE976_C486_34C8_41E0_4FDE5934ACEB); this.mainPlayList.set('selectedIndex', 5); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 0, this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_0_0.png",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "yaw": -6.96
  }
 ],
 "id": "overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -95.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330, this.camera_D4B5B968_C486_34D8_41E5_2C0B757B9ABA); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BB8EDC_7EA6_6C6F_41D3_15742C17A887",
   "pitch": -15.51,
   "hfov": 9.8,
   "yaw": -95.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.97,
   "yaw": -179.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_D4C0E970_C486_34C7_41DA_F829C806A340); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BBDEDC_7EA6_6C6F_41B1_37B9C7C4F209",
   "pitch": -12.12,
   "hfov": 8.97,
   "yaw": -179.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "media": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5BE285A_C486_34FB_41E6_AAF6AC537DB8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5BE285A_C486_34FB_41E6_AAF6AC537DB8",
 "camera": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera"
},
{
 "media": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C3A85C_C486_34FF_41A7_27EC7553043D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C3A85C_C486_34FF_41A7_27EC7553043D",
 "camera": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera"
},
{
 "media": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C3385C_C486_34FF_41BD_93A5A729A3CC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C3385C_C486_34FF_41BD_93A5A729A3CC",
 "camera": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera"
},
{
 "media": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C0885C_C486_34FF_41D2_1CFA481D3870, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C0885C_C486_34FF_41D2_1CFA481D3870",
 "camera": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera"
},
{
 "media": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C0785C_C486_34FF_41CB_B626741BE114, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C0785C_C486_34FF_41CB_B626741BE114",
 "camera": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera"
},
{
 "media": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C1C85C_C486_34FF_41C5_B1FCBAE2EC94, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C1C85C_C486_34FF_41C5_B1FCBAE2EC94",
 "camera": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera"
},
{
 "media": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C6B85C_C486_34FF_41D5_351FB4BAEF07, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C6B85C_C486_34FF_41D5_351FB4BAEF07",
 "camera": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera"
},
{
 "media": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C6485C_C486_34FF_41C9_7BC02B6BAFB6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C6485C_C486_34FF_41C9_7BC02B6BAFB6",
 "camera": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera"
},
{
 "media": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C7D85D_C486_34F9_41C8_B16ACF18BB89, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C7D85D_C486_34F9_41C8_B16ACF18BB89",
 "camera": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera"
},
{
 "media": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C4B85D_C486_34F9_41D4_879826762FAE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C4B85D_C486_34F9_41D4_879826762FAE",
 "camera": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera"
},
{
 "media": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C7B85D_C486_34F9_41DF_95867B3CBE66, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C7B85D_C486_34F9_41DF_95867B3CBE66",
 "camera": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera"
},
{
 "media": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C7185E_C486_34FB_41D6_47A6FCA64FB9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C7185E_C486_34FB_41D6_47A6FCA64FB9",
 "camera": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera"
},
{
 "media": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C4F863_C486_34C9_41D9_9FFB945BBA70, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C4F863_C486_34C9_41D9_9FFB945BBA70",
 "camera": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera"
},
{
 "media": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C44863_C486_34C9_41E5_377A86C6FD59, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C44863_C486_34C9_41E5_377A86C6FD59",
 "camera": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera"
},
{
 "media": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5C51863_C486_34C9_41DE_C27FC537D88D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5C51863_C486_34C9_41DE_C27FC537D88D",
 "camera": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera"
},
{
 "media": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5CA9863_C486_34C9_41D0_EF8FD8646B6F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5CA9863_C486_34C9_41D0_EF8FD8646B6F",
 "camera": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera"
},
{
 "media": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5CA7864_C486_34CF_41C2_92D244B58ED3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5CA7864_C486_34CF_41C2_92D244B58ED3",
 "camera": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera"
},
{
 "media": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
 "end": "this.trigger('tourEnded')",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D5CBD864_C486_34CF_41E5_62E06739F2E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D5CBD864_C486_34CF_41E5_62E06739F2E4",
 "camera": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.59,
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_D54C58B9_C486_35B8_41DF_FEA3764E5AB2); this.mainPlayList.set('selectedIndex', 1); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 0, this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71BE2EDA_7EA6_6C6B_41A3_AFFAE9D1B1E8",
   "pitch": -13.38,
   "hfov": 12.59,
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MapViewer",
 "left": "0%",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "86.75%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "bottom": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -28.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718D6EDF_7EA6_6C69_41C1_8C57C70005E8",
   "pitch": 4.08,
   "hfov": 7.52,
   "yaw": -28.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718DCEDF_7EA6_6C69_41D8_468017674657",
   "pitch": 3.58,
   "hfov": 7.52,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.65,
   "yaw": -87.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_D42C09B1_C486_3449_41B5_2EA4B2E1E6AC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718DEEDF_7EA6_6C69_41C2_51049430E0D9",
   "pitch": -40.51,
   "hfov": 9.65,
   "yaw": -87.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.95,
   "yaw": 91.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_D41D09A9_C486_3459_41E4_3860D9C71739); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_718E7EE0_7EA6_6C57_41D8_8F8880C62C76",
   "pitch": -31.59,
   "hfov": 12.95,
   "yaw": 91.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.73,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71B9EEDB_7EA6_6C69_41D0_9B1B8C181403",
   "pitch": 7.1,
   "hfov": 8.73,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -148.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_D459D9C5_C486_37C8_41D1_A145FF918A8A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_2_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67,
   "yaw": -148.15
  }
 ],
 "id": "overlay_AE57CE02_BA91_425E_41CC_C59F17058325",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB, this.camera_D4EF098C_C486_345F_41E1_79C48722355C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02,
   "yaw": -7.59
  }
 ],
 "id": "overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -80.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71B8EEDB_7EA6_6C69_41AA_B543766BCFA1",
   "pitch": 5.59,
   "hfov": 6.25,
   "yaw": -80.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2078302_B6B1_425E_41E4_269921A75A62",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_D4FAF993_C486_3449_41E6_8A40BE5940CD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71B94EDB_7EA6_6C69_41CD_59AB75FAC480",
   "pitch": -11.24,
   "hfov": 5.3,
   "yaw": 15.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_D4E3F985_C486_3449_41E7_FEB258A18670); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71B97EDB_7EA6_6C69_41DF_52FADE9AB03C",
   "pitch": -16.77,
   "hfov": 6.86,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 3,
 "borderSize": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [],
 "backgroundColor": [],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0
},
{
 "shadow": false,
 "popUpBackgroundColor": "#FFFFFF",
 "fontFamily": "Arial",
 "data": {
  "name": "DropDown1204"
 },
 "textDecoration": "none",
 "id": "DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59",
 "left": "0%",
 "width": "100%",
 "popUpBackgroundOpacity": 0.9,
 "height": "14.08%",
 "backgroundOpacity": 0.9,
 "paddingRight": 5,
 "popUpShadow": false,
 "popUpFontColor": "#000000",
 "paddingLeft": 5,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadowSpread": 1,
 "selectedPopUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "top": "0%",
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#666666",
  "#333333"
 ],
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "popUpGap": 0,
 "paddingTop": 0,
 "playList": "this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist",
 "fontSize": 14,
 "fontColor": "#FFFFFF",
 "class": "DropDown",
 "fontStyle": "normal",
 "popUpShadowColor": "#000000",
 "fontWeight": "normal",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#333333"
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "scrollBarColor": "#000000",
 "backgroundImageUrl": "skin/Container_062A782F_1140_E20B_41AF_B3E5DE341773.png",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Image_B173588E_DFB1_CE66_41E8_C546790FEFDC"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "left": "15%",
 "width": "70.02%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "minWidth": 1,
 "height": 140,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F3BFF16F_D9B7_DEA6_41E6_8545B20DF17C",
  "this.Container_F3B86175_D9B7_DEBA_41E1_90237E8182C9"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Kulkul"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2785756_D9B1_42E6_41DE_636DC12FB239",
  "this.Container_F27F9756_D9B1_42E6_41D7_D867145C80CA"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A",
 "left": "15%",
 "show": "this.playGlobalAudio(this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C)",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Gong Jaba"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2FF5402_D9B1_C65E_41E6_E83272FA479E",
  "this.Container_F2FFE403_D9B1_C65E_41DF_16EFEF549B9F"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Ratu Ngurah Ebuh"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2EA4905_D9B3_4E5A_41D6_3659ADAABBA2",
  "this.Container_F2EAB905_D9B3_4E5A_41DB_09D41AFFDA77"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Aling-Aling"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F36CC979_D9B3_4EAA_41A1_2017FB6D7D5D",
  "this.Container_F36D697A_D9B3_4EAE_4162_DAA25603E950"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Sumur"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F1B2A4D3_D9B3_C7FE_41D2_F050AF9BDF9E",
  "this.Container_F1B0C4D4_D9B3_C7FA_41BC_C76385F93531"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Ratu Gede Gangga"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F22058DC_D9B3_4FEA_41E3_5CBC5B21E8A7",
  "this.Container_F22188DD_D9B3_4FEA_41C0_FF516774FF59"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F23F991A_D9B3_4E6E_41B0_438FC198D761",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Pewaregan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F3348E91_D9B0_C27D_41C2_FAF01DB0EED2",
  "this.Container_F3345E92_D9B0_C27E_41D6_85072356FA69"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Pesanekan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F187ED7C_D9B1_46AA_41B7_1C699EB319F3",
  "this.Container_F185CD7D_D9B1_46AA_41B9_BF14286C1310"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F196EDCA_D9B1_41EE_41D7_DF886135E349",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Piyasan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F202A428_D9B1_C6AA_41DD_591615A0DA05",
  "this.Container_F2016429_D9B1_C6AA_41E7_BAFE85610D5F"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Betara Nini"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2D4D614_D9B1_C27A_41D8_F7C36164CFD2",
  "this.Container_F2D48615_D9B1_C27A_41D0_1DDAA17A442A"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Pemangku"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F33365B9_D9B1_41AA_41D6_3D2C681FC539",
  "this.Container_F332D5BE_D9B1_41A7_41CF_FD03D815BED8"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F313D675_D9B1_42BA_41D7_E2C88342E45A",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Pelik Sari Kauh"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F47CD5B7_D9B1_41A6_41D8_98535F93CC15",
  "this.Container_F47C55B7_D9B1_41A6_41D4_49BF3C515B2A"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Pelik Sari Kangin"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2175776_D9B0_C2A6_41D1_50370C703342",
  "this.Container_F2171776_D9B0_C2A6_41BF_BFFD5A26A564"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "P. Pura Sakenan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F38675A3_D9BF_C65E_41D7_75E5BADD2F65",
  "this.Container_F38635A8_D9BF_C1AA_41E4_93527CDBE6F7"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "P. Pura Uluwatu"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2716A3C_D9BF_C2AB_41C9_D7CA586517DF",
  "this.Container_F2728A3E_D9BF_C2A6_41DB_522757BB023E"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Manjang Sakaluang"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2F782CE_D9BF_43E6_41E5_5834021649A0",
  "this.Container_F2F7C2CF_D9BF_43E6_41D8_415EB43C1312"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "P. Pura Batukaru"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F37E3BB5_D9B0_C1BA_41E1_C9910670F2A9",
  "this.Container_F37F9BB7_D9B0_C1A6_41DD_7735771CA952"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Taksu Agung"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F3A4495F_D9B0_CEE6_41D3_6587064C8147",
  "this.Container_F3A5F960_D9B0_CEDA_41E2_1A6D4234C8FF"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Piasan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2D8B7AE_D9B1_C1A6_41E7_3E69B5D5B79D",
  "this.Container_F2DAD7AF_D9B1_C1A6_41CE_F14F69C18941"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Banten"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F336A2EB_D9B1_43AE_41D4_93EDB47E85B6",
  "this.Container_F33602F0_D9B1_43BA_41B3_57AE0A375800"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F31173A3_D9B1_425E_41E6_97AE8695F64C",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Pengrahuan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F442A7D6_D9B1_41E6_41E2_71B316C332AB",
  "this.Container_F442E7D6_D9B1_41E6_41C2_E9DCE42FAFF8"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F420A80F_D9B1_4E66_41E0_75075927F1D9",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Gong"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F223C628_D9B0_C2AA_41BD_FC4CEB0A1DB0",
  "this.Container_F2222629_D9B0_C2AA_4193_4C501E0C73AB"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2306672_D9B0_C2BF_41CD_40D0178F1004",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Bale Pelawatan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2D06B61_D9B0_C2DA_41E7_0D30FD633E91",
  "this.Container_F2D02B62_D9B0_C2DE_4191_306650CA6BE0"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Kemulan"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2A78427_D9B0_C6A6_41E0_6EF6070F63A6",
  "this.Container_F2A5A428_D9B0_C6AA_41D1_9DA0D9790925"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Hyang Ibu"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F39E32A2_D9B1_425E_41DD_FEF3E93DA99B",
  "this.Container_F39E62A2_D9B1_425E_41E5_B401D6C5E69C"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F464D35E_D9B1_42E6_41A2_11101AFF320A",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Ratu Anom"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F5689091_D9B1_FE7A_41C4_8A6F572A4760",
  "this.Container_F56F2091_D9B1_FE7A_41E5_562DF488EBA3"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Gedong Kunci"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F2A32266_D9B1_42A6_41CB_47138DD18216",
  "this.Container_F2A36267_D9B1_42A6_41DA_F97A30077370"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Pengayatan Kahyangan Tiga"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F34F0D8F_D9B1_4666_41E0_39E5465E2EFD",
  "this.Container_F34F5D8F_D9B1_4666_41E2_8F0824ABB8F5"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Meru Tupang Tiga"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F3FB4FE8_D9B0_C1AA_41E0_03DD47CA2EB5",
  "this.Container_F3FB1FE8_D9B0_C1AA_41B6_F06AE1A10AA8"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Padmasana"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false)",
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_F1180917_D991_4E66_41C7_09C7754AABF9",
  "this.Container_F11A3918_D991_4E6A_41C9_68A09F29E1B2"
 ],
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "id": "Container_F10FE96B_D991_4EAE_41C5_6521EEE84E57",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E"
 ],
 "id": "Container_F2D2E2E3_D993_C3DE_41AF_57F211543810",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718EBEE0_7EA6_6C57_41C2_EB14B5C6481A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_0987FE6D_066E_3F74_4156_DA0032C0B70A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718F8EE0_7EA6_6C57_41DB_530E428228A5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718FCEE0_7EA6_6C57_41DC_1032EAF89543",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71881EE0_7EA6_6C57_41A1_7F736E3E13EE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71835EDE_7EA6_6C6B_41D2_C25F9FD76BDF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71838EDE_7EA6_6C6B_41AD_5CFEBA5A05D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7183CEDE_7EA6_6C6B_41D1_34BD922FAAF8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718C3EDE_7EA6_6C6B_41CE_DFF0BEEE914D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718C7EDF_7EA6_6C69_41DC_8CB2F7C104CC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718CEEDF_7EA6_6C69_41B7_D4E124A9EA42",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71873EDD_7EA6_6C69_41CF_26D3CD31C6EB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71879EDD_7EA6_6C69_41DE_63332292A965",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71804EDD_7EA6_6C69_41D4_A15D650E9C5C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71888EE0_7EA6_6C57_41CD_E590CF109D41",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7188DEE1_7EA6_6C59_41BB_6028DF875232",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71894EE1_7EA6_6C59_41D6_E4A38462EC04",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BABEDC_7EA6_6C6F_419A_2DD728C300C5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BECEDA_7EA6_6C6B_41DE_D6773CB59EE0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BF2EDB_7EA6_6C69_41C7_73C5DC0B8013",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BF6EDB_7EA6_6C69_41DA_8FF0D1858388",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71BFAEDB_7EA6_6C69_41DE_A203FE6837BD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71853EDD_7EA6_6C69_41D1_0C8759DC08F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71858EDD_7EA6_6C69_41DC_2305603AEEFA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_7183CEDF_7EA6_6C69_41DD_AA0220DE9F78",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718C1EDF_7EA6_6C69_41B2_4C31605F48F2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718C6EDF_7EA6_6C69_4180_F4F580B2828E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718CAEDF_7EA6_6C69_417F_E100B44D957E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718D1EDF_7EA6_6C69_41C6_5689E9E2E098",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7180BEDE_7EA6_6C6B_41D3_450AB0CB7B45",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71811EDE_7EA6_6C6B_41C9_736CFA6F1D8A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71815EDE_7EA6_6C6B_41C4_A7D656132F50",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71818EDE_7EA6_6C6B_41D1_9303B59E3823",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7181FEDE_7EA6_6C6B_41C7_F7D389868BF6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71823EDE_7EA6_6C6B_41D1_9E83261B60C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71829EDE_7EA6_6C6B_41D0_2991D36F6FE5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_7182DEDE_7EA6_6C6B_41D8_5EC8921EB2E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BABEDC_7EA6_6C6F_41D5_B618369D8DAB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71BB2EDC_7EA6_6C6F_41C8_527D498C58D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71864EDD_7EA6_6C69_41C2_D53394C1608A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71869EDD_7EA6_6C69_41DA_D8AB36B691F7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7186CEDD_7EA6_6C69_41CE_2493755F8A1A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71B80EDB_7EA6_6C69_41AE_7CE8ACC0D30C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BB7EDC_7EA6_6C6F_41C8_8C0B72E14526",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71BBCEDC_7EA6_6C6F_419A_A95448A59258",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71BBFEDC_7EA6_6C6F_417C_3DF0F3DACF78",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71844EDC_7EA6_6C6F_41D2_014B12830033",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71848EDC_7EA6_6C6F_41CC_15D585CFB97C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7184DEDD_7EA6_6C69_41D6_9BBA56AC715F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BB8EDC_7EA6_6C6F_41D3_15742C17A887",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BBDEDC_7EA6_6C6F_41B1_37B9C7C4F209",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71BE2EDA_7EA6_6C6B_41A3_AFFAE9D1B1E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718D6EDF_7EA6_6C69_41C1_8C57C70005E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_718DCEDF_7EA6_6C69_41D8_468017674657",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718DEEDF_7EA6_6C69_41C2_51049430E0D9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_718E7EE0_7EA6_6C57_41D8_8F8880C62C76",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71B9EEDB_7EA6_6C69_41D0_9B1B8C181403",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_71B8EEDB_7EA6_6C69_41AA_B543766BCFA1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71B94EDB_7EA6_6C69_41CD_59AB75FAC480",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_71B97EDB_7EA6_6C69_41DF_52FADE9AB03C",
 "rowCount": 6,
 "colCount": 4
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 60,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "shadow": false,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Container black"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "bottom": "40%",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton arrow"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "shadow": false,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "width": "90%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.25,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0.02
 ],
 "backgroundColor": [
  "#CCCCCC"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Container"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 1
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "right": 9,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "bottom": "40%",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minWidth": 50,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg"
},
{
 "shadow": false,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": 140,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemMinHeight": 50,
 "itemOpacity": 1,
 "propagateClick": true,
 "minWidth": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "itemHeight": 160,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemWidth": 220,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailBorderRadius": 0
},
{
 "shadow": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": true,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.373757784243!2d115.18340980814848!3d-8.65595759135529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24754f5670f25%3A0xff35ad45b603026d!2sPemerajan%20Agung%20Sakti%20Padangsambian!5e0!3m2!1sen!2sid!4v1704045242736!5m2!1sen!2sid",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame"
 },
 "backgroundColorDirection": "vertical"
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "2.38%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minWidth": 30,
 "propagateClick": true,
 "mode": "push",
 "borderSize": 0,
 "height": "35.72%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg"
},
{
 "maxHeight": 1200,
 "maxWidth": 999,
 "id": "Image_B173588E_DFB1_CE66_41E8_C546790FEFDC",
 "width": "86.076%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "url": "skin/Image_B173588E_DFB1_CE66_41E8_C546790FEFDC.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image376241"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "4.308%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": true,
 "minWidth": 30,
 "height": "36.429%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg"
},
{
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F3BFB174_D9B7_DEBA_41D9_2F1BCBDFFCA6"
 ],
 "id": "Container_F3BFF16F_D9B7_DEA6_41E6_8545B20DF17C",
 "width": "45%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F3B8E175_D9B7_DEBA_41CA_ABA4F553C152"
 ],
 "id": "Container_F3B86175_D9B7_DEBA_41E1_90237E8182C9",
 "width": "55%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 30,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 30,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2787756_D9B1_42E6_41E5_DF0F10B8B6B5"
 ],
 "id": "Container_F2785756_D9B1_42E6_41DE_636DC12FB239",
 "width": "45%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F27FB756_D9B1_42E6_41A4_99488DA8AC09"
 ],
 "id": "Container_F27F9756_D9B1_42E6_41D7_D867145C80CA",
 "width": "55%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 30,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 30,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 26,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2FF0402_D9B1_C65E_41E2_0D0A39B60A19"
 ],
 "id": "Container_F2FF5402_D9B1_C65E_41E6_E83272FA479E",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2FFC403_D9B1_C65E_41E5_F393DED1D914"
 ],
 "id": "Container_F2FFE403_D9B1_C65E_41DF_16EFEF549B9F",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2EA6905_D9B3_4E5A_41E8_520326379B7C"
 ],
 "id": "Container_F2EA4905_D9B3_4E5A_41D6_3659ADAABBA2",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2EAC906_D9B3_4E66_41CB_69F69D78F59D"
 ],
 "id": "Container_F2EAB905_D9B3_4E5A_41DB_09D41AFFDA77",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F36D297A_D9B3_4EAE_41D4_BF3BB5456AF8"
 ],
 "id": "Container_F36CC979_D9B3_4EAA_41A1_2017FB6D7D5D",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F36DB97A_D9B3_4EAE_41D0_381E777F6510"
 ],
 "id": "Container_F36D697A_D9B3_4EAE_4162_DAA25603E950",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F1B0F4D3_D9B3_C7FE_41E0_09E684120B8C"
 ],
 "id": "Container_F1B2A4D3_D9B3_C7FE_41D2_F050AF9BDF9E",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F1B0A4D4_D9B3_C7FA_41E7_3180D4E59EB1"
 ],
 "id": "Container_F1B0C4D4_D9B3_C7FA_41BC_C76385F93531",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F22068DC_D9B3_4FEA_41D2_8EEB29FE7991"
 ],
 "id": "Container_F22058DC_D9B3_4FEA_41E3_5CBC5B21E8A7",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F221A8DD_D9B3_4FEA_41E0_7EC702DD9438"
 ],
 "id": "Container_F22188DD_D9B3_4FEA_41C0_FF516774FF59",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F3347E92_D9B0_C27E_41E8_B91504068C04"
 ],
 "id": "Container_F3348E91_D9B0_C27D_41C2_FAF01DB0EED2",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F3343E92_D9B0_C27E_41DC_86B93B6AB8CB"
 ],
 "id": "Container_F3345E92_D9B0_C27E_41D6_85072356FA69",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F185BD7C_D9B1_46AA_41CC_032173512D73"
 ],
 "id": "Container_F187ED7C_D9B1_46AA_41B7_1C699EB319F3",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F185ED7D_D9B1_46AA_41E1_38B6D101BDB5"
 ],
 "id": "Container_F185CD7D_D9B1_46AA_41B9_BF14286C1310",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2014428_D9B1_C6AA_41D3_23CCE999C9AD"
 ],
 "id": "Container_F202A428_D9B1_C6AA_41DD_591615A0DA05",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2010429_D9B1_C6AA_41E7_C8287B02E4D7"
 ],
 "id": "Container_F2016429_D9B1_C6AA_41E7_BAFE85610D5F",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2D4A615_D9B1_C27A_41D9_6C02CF9A7E72"
 ],
 "id": "Container_F2D4D614_D9B1_C27A_41D8_F7C36164CFD2",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2D36615_D9B1_C27A_41E4_42CD95BEEFF4"
 ],
 "id": "Container_F2D48615_D9B1_C27A_41D0_1DDAA17A442A",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F332B5B9_D9B1_41AA_41DD_E8689C4FECFE"
 ],
 "id": "Container_F33365B9_D9B1_41AA_41D6_3D2C681FC539",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F332F5BE_D9B1_41A7_4187_3D06CE2F91B6"
 ],
 "id": "Container_F332D5BE_D9B1_41A7_41CF_FD03D815BED8",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F47C15B7_D9B1_41A6_41E1_90BEFCACFC7E"
 ],
 "id": "Container_F47CD5B7_D9B1_41A6_41D8_98535F93CC15",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F47BA5B7_D9B1_41A6_4195_444B8BF02A4D"
 ],
 "id": "Container_F47C55B7_D9B1_41A6_41D4_49BF3C515B2A",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2173776_D9B0_C2A6_41BB_5B32F9C283C1"
 ],
 "id": "Container_F2175776_D9B0_C2A6_41D1_50370C703342",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F216F776_D9B0_C2A6_41C8_32F195AC66D9"
 ],
 "id": "Container_F2171776_D9B0_C2A6_41BF_BFFD5A26A564",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F38615A3_D9BF_C65E_41D5_4FA73DB4565F"
 ],
 "id": "Container_F38675A3_D9BF_C65E_41D7_75E5BADD2F65",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F386D5A8_D9BF_C1AA_41CB_4C63DE0C0EB6"
 ],
 "id": "Container_F38635A8_D9BF_C1AA_41E4_93527CDBE6F7",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F272BA3E_D9BF_C2A6_41D3_1DD64B419294"
 ],
 "id": "Container_F2716A3C_D9BF_C2AB_41C9_D7CA586517DF",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2736A3E_D9BF_C2A6_41E4_8FA8F43D79A0"
 ],
 "id": "Container_F2728A3E_D9BF_C2A6_41DB_522757BB023E",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2F7E2CE_D9BF_43E6_41D9_4C415FE45EBE"
 ],
 "id": "Container_F2F782CE_D9BF_43E6_41E5_5834021649A0",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2F722CF_D9BF_43E6_41E4_D17FC949EA9A"
 ],
 "id": "Container_F2F7C2CF_D9BF_43E6_41D8_415EB43C1312",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F37FDBB7_D9B0_C1A6_41C9_19A077B3C4DD"
 ],
 "id": "Container_F37E3BB5_D9B0_C1BA_41E1_C9910670F2A9",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F37FBBB7_D9B0_C1A6_41E1_957AE7BD8AF3"
 ],
 "id": "Container_F37F9BB7_D9B0_C1A6_41DD_7735771CA952",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F3A4295F_D9B0_CEE6_41E8_616267536F48"
 ],
 "id": "Container_F3A4495F_D9B0_CEE6_41D3_6587064C8147",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F3A5D960_D9B0_CEDA_41D3_AD454349EC1E"
 ],
 "id": "Container_F3A5F960_D9B0_CEDA_41E2_1A6D4234C8FF",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2DAE7AE_D9B1_C1A6_41D5_92CE7A80C4C4"
 ],
 "id": "Container_F2D8B7AE_D9B1_C1A6_41E7_3E69B5D5B79D",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2DAB7AF_D9B1_C1A6_41E5_BDA37DF13331"
 ],
 "id": "Container_F2DAD7AF_D9B1_C1A6_41CE_F14F69C18941",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F336F2EB_D9B1_43AE_41D6_C9078C7A55A8"
 ],
 "id": "Container_F336A2EB_D9B1_43AE_41D4_93EDB47E85B6",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F33622F1_D9B1_43BA_4198_CAFC1B80F697"
 ],
 "id": "Container_F33602F0_D9B1_43BA_41B3_57AE0A375800",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F44287D6_D9B1_41E6_41CE_48CA1CD35E6B"
 ],
 "id": "Container_F442A7D6_D9B1_41E6_41E2_71B316C332AB",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F44237D6_D9B1_41E6_41D3_B3871E57578D"
 ],
 "id": "Container_F442E7D6_D9B1_41E6_41C2_E9DCE42FAFF8",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2221628_D9B0_C2AA_41E4_4A4FC84B40D5"
 ],
 "id": "Container_F223C628_D9B0_C2AA_41BD_FC4CEB0A1DB0",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F225C629_D9B0_C2AA_41E4_3BF70267FFF6"
 ],
 "id": "Container_F2222629_D9B0_C2AA_4193_4C501E0C73AB",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2D04B61_D9B0_C2DA_41E1_1988AC7DF9C4"
 ],
 "id": "Container_F2D06B61_D9B0_C2DA_41E7_0D30FD633E91",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2D00B62_D9B0_C2DE_41BA_1D658AAE1025"
 ],
 "id": "Container_F2D02B62_D9B0_C2DE_4191_306650CA6BE0",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2A5D427_D9B0_C6A6_41DB_FA6794253030"
 ],
 "id": "Container_F2A78427_D9B0_C6A6_41E0_6EF6070F63A6",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2A58428_D9B0_C6AA_41D4_E04ADC316FBD"
 ],
 "id": "Container_F2A5A428_D9B0_C6AA_41D1_9DA0D9790925",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F39E12A2_D9B1_425E_41E4_E69E96B83D64"
 ],
 "id": "Container_F39E32A2_D9B1_425E_41DD_FEF3E93DA99B",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F39EB2A2_D9B1_425E_41B9_06368F56E1AF"
 ],
 "id": "Container_F39E62A2_D9B1_425E_41E5_B401D6C5E69C",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F56F4091_D9B1_FE7A_41BA_9D3A7D831742"
 ],
 "id": "Container_F5689091_D9B1_FE7A_41C4_8A6F572A4760",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F56F0091_D9B1_FE7A_41D4_7C46CFC75717"
 ],
 "id": "Container_F56F2091_D9B1_FE7A_41E5_562DF488EBA3",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F2A34267_D9B1_42A6_41CA_8EF2E4E1982E"
 ],
 "id": "Container_F2A32266_D9B1_42A6_41CB_47138DD18216",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F2A28267_D9B1_42A6_41CF_C883E5D5F729"
 ],
 "id": "Container_F2A36267_D9B1_42A6_41DA_F97A30077370",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F34F7D8F_D9B1_4666_41CA_D81347886C99"
 ],
 "id": "Container_F34F0D8F_D9B1_4666_41E0_39E5465E2EFD",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F34EBD8F_D9B1_4666_41DF_201523D51349"
 ],
 "id": "Container_F34F5D8F_D9B1_4666_41E2_8F0824ABB8F5",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F3FB7FE8_D9B0_C1AA_41E4_8C2D252BE92F"
 ],
 "id": "Container_F3FB4FE8_D9B0_C1AA_41E0_03DD47CA2EB5",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F3FACFE9_D9B0_C1AA_41E3_F9B4F133ECF0"
 ],
 "id": "Container_F3FB1FE8_D9B0_C1AA_41B6_F06AE1A10AA8",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 300,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 25,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "minWidth": 25,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed_rollover.jpg"
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_F11BD917_D991_4E66_41E1_5BA878AACD9A"
 ],
 "id": "Container_F1180917_D991_4E66_41C7_09C7754AABF9",
 "width": "55%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_F11A1918_D991_4E6A_419C_26901203AE22",
  "this.Container_F11A6919_D991_4E6A_41E0_FE86539BFA5A",
  "this.Container_F11E491F_D991_4E66_41D5_3EF031FA62CA"
 ],
 "id": "Container_F11A3918_D991_4E6A_41C9_68A09F29E1B2",
 "width": "45%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_rollover.jpg",
 "minWidth": 50,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_pressed_rollover.jpg"
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 40,
 "propagateClick": true,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 40,
 "paddingTop": 40,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "- Buttons set"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 1
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": true,
 "minWidth": 30,
 "height": "36.14%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": "0%",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "bottom": "20%",
 "propagateClick": true,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "right": 10,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "bottom": "20%",
 "propagateClick": true,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png"
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "minWidth": 30,
 "height": "10%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg"
},
{
 "shadow": false,
 "id": "WebFrame_F3BFB174_D9B7_DEBA_41D9_2F1BCBDFFCA6",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/23d626615cba489681c6460d4ffdb9f6/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6"
 ],
 "id": "Container_F3B8E175_D9B7_DEBA_41CA_ABA4F553C152",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2787756_D9B1_42E6_41E5_DF0F10B8B6B5",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/e6209f65e7784349a6cb97d291635ae2/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F27F375B_D9B1_42EE_41E3_801A4F6DF559"
 ],
 "id": "Container_F27FB756_D9B1_42E6_41A4_99488DA8AC09",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2FF0402_D9B1_C65E_41E2_0D0A39B60A19",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/9e144d3de01246fd9ca7c2b46cc6bdf8/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2FED407_D9B1_C666_41D8_4CC81D3E2B83"
 ],
 "id": "Container_F2FFC403_D9B1_C65E_41E5_F393DED1D914",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2EA6905_D9B3_4E5A_41E8_520326379B7C",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/591dedf38fb54d49b1d38b48a268e97d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2EB8909_D9B3_4E6A_41BA_1C1CD5B74272"
 ],
 "id": "Container_F2EAC906_D9B3_4E66_41CB_69F69D78F59D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F36D297A_D9B3_4EAE_41D4_BF3BB5456AF8",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/61c01253d4fc40a9a9d654b16f53fa7d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F36AC987_D9B3_4E66_41C9_2B93354570D3"
 ],
 "id": "Container_F36DB97A_D9B3_4EAE_41D0_381E777F6510",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F1B0F4D3_D9B3_C7FE_41E0_09E684120B8C",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/a15d615b331d4f7883728fbafe4da582/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F1BE84D7_D9B3_C7E6_419E_2AEE63ED109F"
 ],
 "id": "Container_F1B0A4D4_D9B3_C7FA_41E7_3180D4E59EB1",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F22068DC_D9B3_4FEA_41D2_8EEB29FE7991",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/59cbed02f900418b80eab2416cebb1a3/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F22EB8DF_D9B3_4FE6_41E5_CF72B2F455E2"
 ],
 "id": "Container_F221A8DD_D9B3_4FEA_41E0_7EC702DD9438",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F3347E92_D9B0_C27E_41E8_B91504068C04",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/a96ebfff782c465d9151f74be5a1a5ca/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F3326EA0_D9B0_C25A_41E8_C99A7E64B665"
 ],
 "id": "Container_F3343E92_D9B0_C27E_41DC_86B93B6AB8CB",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F185BD7C_D9B1_46AA_41CC_032173512D73",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/42c4474b88e9492ba854937eb46b7568/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F1820D80_D9B1_465A_41CA_2EB90C60C12A"
 ],
 "id": "Container_F185ED7D_D9B1_46AA_41E1_38B6D101BDB5",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2014428_D9B1_C6AA_41D3_23CCE999C9AD",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/5eac3e32bceb4fc58a0671e099060f68/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F200642B_D9B1_C6AE_41D7_2CCB1C2F1E41"
 ],
 "id": "Container_F2010429_D9B1_C6AA_41E7_C8287B02E4D7",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2D4A615_D9B1_C27A_41D9_6C02CF9A7E72",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/31bcd0d167764b699434a58c604eb4c2/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2D24618_D9B1_C26A_4183_71551AB09B6C"
 ],
 "id": "Container_F2D36615_D9B1_C27A_41E4_42CD95BEEFF4",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F332B5B9_D9B1_41AA_41DD_E8689C4FECFE",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/19a8f777b31347fb8eb18e732ee4a13b/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F33175CC_D9B1_41EA_41CD_F15ABF8A49AB"
 ],
 "id": "Container_F332F5BE_D9B1_41A7_4187_3D06CE2F91B6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F47C15B7_D9B1_41A6_41E1_90BEFCACFC7E",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/73e5d8cc29bd43248b452235625324ab/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F47995BA_D9B1_41AE_41D6_7D676D3B2B54"
 ],
 "id": "Container_F47BA5B7_D9B1_41A6_4195_444B8BF02A4D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2173776_D9B0_C2A6_41BB_5B32F9C283C1",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/39b08f25af7045a584e530791dfd1145/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2163779_D9B0_C2AA_41E0_AD5C1B9EE8C2"
 ],
 "id": "Container_F216F776_D9B0_C2A6_41C8_32F195AC66D9",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F38615A3_D9BF_C65E_41D5_4FA73DB4565F",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/5d1815d6d3294a69adcfea200214c280/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F387A5B5_D9BF_C1BA_41D7_27351B219547"
 ],
 "id": "Container_F386D5A8_D9BF_C1AA_41CB_4C63DE0C0EB6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F272BA3E_D9BF_C2A6_41D3_1DD64B419294",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/200269ac737a46fd9b0d8344cb949ce9/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2754A40_D9BF_C2DB_41E4_751E2EA30057"
 ],
 "id": "Container_F2736A3E_D9BF_C2A6_41E4_8FA8F43D79A0",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2F7E2CE_D9BF_43E6_41D9_4C415FE45EBE",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/ab0ae3399f05408cb844a03184b5caa7/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2C8F2D1_D9BF_43FA_41D8_042E51FDEC93"
 ],
 "id": "Container_F2F722CF_D9BF_43E6_41E4_D17FC949EA9A",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F37FDBB7_D9B0_C1A6_41C9_19A077B3C4DD",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/a93c9fdbde804327b76cfc0d5583dda4/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F3703BC9_D9B0_C1EA_41C8_DA3B6315EF96"
 ],
 "id": "Container_F37FBBB7_D9B0_C1A6_41E1_957AE7BD8AF3",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F3A4295F_D9B0_CEE6_41E8_616267536F48",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/0e363528f6534a1a8a0e35642127d03b/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F3A63965_D9B0_CEDA_41CA_99780AFFE9D7"
 ],
 "id": "Container_F3A5D960_D9B0_CEDA_41D3_AD454349EC1E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2DAE7AE_D9B1_C1A6_41D5_92CE7A80C4C4",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/afce83d39ce54437af5a1445c99200bc/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2DF47B2_D9B1_C1BE_41CB_20B7A3B655E8"
 ],
 "id": "Container_F2DAB7AF_D9B1_C1A6_41E5_BDA37DF13331",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F336F2EB_D9B1_43AE_41D6_C9078C7A55A8",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/8f09e368285347899c1cd9f5a4a3fb20/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F30962FF_D9B1_43A6_41C4_FBDA348BBBC5"
 ],
 "id": "Container_F33622F1_D9B1_43BA_4198_CAFC1B80F697",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F44287D6_D9B1_41E6_41CE_48CA1CD35E6B",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/72e5dcb49a77430d8a1f398f14ce712a/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F44567D9_D9B1_41EA_41CA_23341EC94A74"
 ],
 "id": "Container_F44237D6_D9B1_41E6_41D3_B3871E57578D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2221628_D9B0_C2AA_41E4_4A4FC84B40D5",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/f65cd75869bf42e1b4665809dbde640d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F227E62B_D9B0_C2AE_41C1_CD46266D739E"
 ],
 "id": "Container_F225C629_D9B0_C2AA_41E4_3BF70267FFF6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2D04B61_D9B0_C2DA_41E1_1988AC7DF9C4",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/d201adb4c5064f238e0cab6349b196dc/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2D34B64_D9B0_C2DA_41E7_7C4C2AD5B8BF"
 ],
 "id": "Container_F2D00B62_D9B0_C2DE_41BA_1D658AAE1025",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2A5D427_D9B0_C6A6_41DB_FA6794253030",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/b05603284ed949168979d2eee1a34ef9/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2BB342C_D9B0_C6AA_41DA_DAEA63EC75B9"
 ],
 "id": "Container_F2A58428_D9B0_C6AA_41D4_E04ADC316FBD",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F39E12A2_D9B1_425E_41E4_E69E96B83D64",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/918d84290c6f4073afa713e0e61b689a/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F39DD2B0_D9B1_43BA_41D1_D06514EE8E75"
 ],
 "id": "Container_F39EB2A2_D9B1_425E_41B9_06368F56E1AF",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F56F4091_D9B1_FE7A_41BA_9D3A7D831742",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/25c6f3cdad7449fa9625fda5ce7e06f3/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F56EA094_D9B1_FE7A_41E0_078DA917F2DC"
 ],
 "id": "Container_F56F0091_D9B1_FE7A_41D4_7C46CFC75717",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F2A34267_D9B1_42A6_41CA_8EF2E4E1982E",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/e11421fea1314a7aa490b5fa86c652be/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F2A2226A_D9B1_42AE_41E7_6D0D4E6AD0A4"
 ],
 "id": "Container_F2A28267_D9B1_42A6_41CF_C883E5D5F729",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F34F7D8F_D9B1_4666_41CA_D81347886C99",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/0573c31d57214abaa5582539a6bff18d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F34E5D93_D9B1_467E_41E2_13B3E61B903E"
 ],
 "id": "Container_F34EBD8F_D9B1_4666_41DF_201523D51349",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F3FB7FE8_D9B0_C1AA_41E4_8C2D252BE92F",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://sketchfab.com/models/b87343bd7afa4afaa5e8bce2019f66a8/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F3F9BFF7_D9B0_C1A6_41D7_48B264AEF560"
 ],
 "id": "Container_F3FACFE9_D9B0_C1AA_41E3_F9B4F133ECF0",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "content"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "WebFrame_F11BD917_D991_4E66_41E1_5BA878AACD9A",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://museumnasional.iheritage-virtual.id/collection/detail/117#",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.454%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": false,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame115223"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "id": "Container_F11A1918_D991_4E6A_419C_26901203AE22",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "5%",
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_F11C791A_D991_4E6E_41AE_CFB5C099D875",
  "this.Container_F11C591A_D991_4E6E_41CE_58DA43A7D060"
 ],
 "id": "Container_F11A6919_D991_4E6A_41E0_FE86539BFA5A",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "Container_F11E491F_D991_4E66_41D5_3EF031FA62CA",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 3,
 "shadowSpread": 1,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "width": "100%",
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "top": "0%",
 "shadowOpacity": 0,
 "propagateClick": true,
 "minWidth": 40,
 "height": "34.611%",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image Company"
 },
 "shadow": true,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside"
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
 "width": "100%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "26%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "26%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 1"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 130,
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "class": "Container",
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE KULKUL</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.98vh;\">Terletak di sudut jaba sisi pekarangan pura. Fungsinya untuk tempat kulkul yang dibunyikan awal, akhir dan saat tertentu pada upacara.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F27F375B_D9B1_42EE_41E3_801A4F6DF559",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE GONG JABA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.98vh;\">Tempat menabuh gamelan gong atau gamelan lainnya yang terletak di bagian jaba sisi..</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2FED407_D9B1_C666_41D8_4CC81D3E2B83",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>RATU NGURAH EBUH</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.98vh;\">Pelinggih yang berfungsi sebagai penjaga pintu masuk ke Sanggah Pamerajan. Sebelum memasuki Pamerajan, setiap individu di sini melakukan persembahyangan dan meminta izin kepada entitas spiritual.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2EB8909_D9B3_4E6A_41BA_1C1CD5B74272",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>ALING-ALING</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Bangunan pembatas antara angkul - angkul (gapura/pintu masuk) dengan pekarangan merajan yang berfungsi sebagai penetralisir dari gangguan negatif baik secara sekala maupun niskala.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F36AC987_D9B3_4E66_41C9_2B93354570D3",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>SUMUR (WISNU)</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Sumber air suci yang diperlukan untuk upacara keagamaan, termasuk penyiraman dan penyucian patung-patung dewa atau benda-benda suci.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F1BE84D7_D9B3_C7E6_419E_2AEE63ED109F",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>RATU GEDE GANGGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat persinggahan untuk tamu merajan sebagai manifestasi tuhan lainnya.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F22EB8DF_D9B3_4FE6_41E5_CF72B2F455E2",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PEWAREGAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat yang terletak di Jaba tengah, berfungsi untuk dapur mempersiapkan keperluan sajian upacara di Pura.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F3326EA0_D9B0_C25A_41E8_C99A7E64B665",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE PESANEKAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Sebagai tempat beristirahat Jero Mangku atau pengempon merajan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F1820D80_D9B1_465A_41CA_2EB90C60C12A",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PIYASAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat untuk menyimpan, menyiapkan, dan menyajikan sarana-sarana yang diperlukan dalam upacara keagamaan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F200642B_D9B1_C6AE_41D7_2CCB1C2F1E41",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BETARA NINI</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pengayatan (pemujaan) ida betara nini (ida batara sri yang memberikan kemakmuran).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2D24618_D9B1_C26A_4183_71551AB09B6C",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE PEMANGKU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pemangku agama (pinandita) menghaturkan persembahan Yadnya kepada tuhan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F33175CC_D9B1_41EA_41CD_F15ABF8A49AB",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PELIK SARI KAUH</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Pelinggih Bale Tajuk yang berfungsi untuk menyimpan pratima meraga Dewa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F47995BA_D9B1_41AE_41D6_7D676D3B2B54",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>PELIK SARI KANGIN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Pelinggih yang berada ditengah-tengah juga disebut dengan Bale Pileh atau Bale Tajuk. Fungsinya untuk menyimpan pratima meraga Hyang.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2163779_D9B0_C2AA_41E0_AD5C1B9EE8C2",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA SAKENAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Sakenan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F387A5B5_D9BF_C1BA_41D7_27351B219547",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA ULUWATU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Uluwatu.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2754A40_D9BF_C2DB_41E4_751E2EA30057",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>MANJANG SAKALUANG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat penghormatan terhadap Mpu Kuturan, seorang tokoh agama penting dalam menyatukan berbagai sekte agama yang ada di Bali menjadi satu paham yang dikenal sebagai Tri Murti.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2C8F2D1_D9BF_43FA_41D8_042E51FDEC93",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA BATUKARU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Batukaru.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F3703BC9_D9B0_C1EA_41C8_DA3B6315EF96",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>TAKSU AGUNG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat untuk memohon keberhasilan untuk semua jenis profesi serta mendekatkan diri ke hadapan Sang Hyang Taksu Agung atau Sang Hyang Adi Taksu.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F3A63965_D9B0_CEDA_41CA_99780AFFE9D7",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE PIASAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat untuk menyimpan, menyiapkan, dan menyajikan sarana-sarana yang diperlukan dalam upacara keagamaan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2DF47B2_D9B1_C1BE_41CB_20B7A3B655E8",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE BANTEN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat untuk menaruh perlengkapan bebantenan untuk upacara Hindu di Bali.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F30962FF_D9B1_43A6_41C4_FBDA348BBBC5",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE PENGRAHUAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat di mana pelaksanaan upacara nedunin Ida Bhatara agar rauh (datang).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F44567D9_D9B1_41EA_41CA_23341EC94A74",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE GONG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat menabuh gamelan gong atau gamelan lainnya yang terletak di bagian utama mandala.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F227E62B_D9B0_C2AE_41C1_CD46266D739E",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>BALE PELAWATAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat menaruh pratima, barong, Ratu Ayu dan Ratu Gede.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2D34B64_D9B0_C2DA_41E7_7C4C2AD5B8BF",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>KEMULAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat para atman leluhur, Dewa Pitara / Dewa Hyang ataupun Bhatra Hyang Guru atau keturunan anak Agung Gede Padang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2BB342C_D9B0_C6AA_41DA_DAEA63EC75B9",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>HYANG IBU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat suci yang didedikasikan untuk memuja Ida Batara Anak Agung Gede Padang, yang dianggap sebagai pencipta dan pemrakarsa dari Pemerajan Agung Sakti tersebut.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F39DD2B0_D9B1_43BA_41D1_D06514EE8E75",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>RATU ANOM</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Pelinggih yang didedikasikan khusus untuk memuja Ida Batara Lanang Dawan, sebagai putra dari Ida Batara Sakti.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F56EA094_D9B1_FE7A_41E0_078DA917F2DC",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>GEDONG KUNCI</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi</B></SPAN><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Pelinggih pokok yang digunakan untuk menyembah Ida Batara Sakti sebagai leluhur Pemerajan Agung Sakti Padangsambian.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F2A2226A_D9B1_42AE_41E7_6D0D4E6AD0A4",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PENGAYATAN KAHYANGAN TIGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat pemujaan tuhan dalam fungsinya sebagai niyasa atau simbol stana Hyang Widhi dalam konsep Tri Murti.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F34E5D93_D9B1_467E_41E2_13B3E61B903E",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>MERU TUMPANG TIGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat singgah atau tempat bersemayam bagi Ida Batara Kawitan, yang merupakan leluhur rohani atau entitas spiritual yang sangat dihormati dalam tradisi agama Hindu di Bali.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F3F9BFF7_D9B0_C1A6_41D7_48B264AEF560",
 "width": "99.749%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 9,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "99.849%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><U>PADMASANA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-size:4.19vh;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Lambang makrokosmos atau alam semesta yang merupakan istana langsung dari Ida Sang Hyang Widhi Wasa atau Tuhan itu sendiri.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_F11C791A_D991_4E6E_41AE_CFB5C099D875",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "46%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0
},
{
 "shadow": false,
 "children": [
  "this.Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C",
  "this.HTMLText_F11E091E_D991_4E66_41DB_9BD949069031"
 ],
 "id": "Container_F11C591A_D991_4E6E_41CE_58DA43A7D060",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "- content"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "NISTA MANDALA >",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "normal",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "MADYA MANDALA >",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "UTAMA MANDALA >",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "UTAMA MANDALA > ",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "blue line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 56,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "class": "Container",
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 30,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 30,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 30,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 30,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 30,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Container",
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C",
 "width": "25%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C.jpg",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "id": "HTMLText_F11E091E_D991_4E66_41DB_9BD949069031",
 "width": "75%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.41vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton Info"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton Thumblist"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton Location"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton Floorplan"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton Video"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed_rollover.png"
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "data": {
  "name": "Player468"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
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
