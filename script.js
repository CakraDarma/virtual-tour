(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
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
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "minHeight": 20,
 "propagateClick": true,
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "verticalAlign": "top",
 "layout": "absolute",
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_881FB308_DAF3_426A_41E5_8F23E936C97C.mp3",
  "oggUrl": "media/audio_881FB308_DAF3_426A_41E5_8F23E936C97C.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_881FB308_DAF3_426A_41E5_8F23E936C97C",
 "data": {
  "label": "4. Gedong Kunci"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E961FB82_FE61_3DF2_41DB_A1AB6AAD0A2A",
 "initialPosition": {
  "yaw": -101.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E908AB3D_FE61_3D17_41D6_3EA818B2B377",
 "initialPosition": {
  "yaw": -94.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E87E6AC5_FE61_3F77_41E3_2462892973DE",
 "initialPosition": {
  "yaw": 173.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E954DB74_FE61_3D16_41DA_676A5AA2D6E7",
 "initialPosition": {
  "yaw": 93.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9B04B0A_FE61_3EFD_41CC_A3CF457343D8",
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -148.15,
   "backwardYaw": -7.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Nista M_Spot 5",
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
 "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2318.35,
   "angle": 95.23,
   "class": "PanoramaMapLocation",
   "y": 1081.28
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
  "this.overlay_AE57CE02_BA91_425E_41CC_C59F17058325"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8837FF1A_DAF3_426E_41BF_69C752A7D336.mp3",
  "oggUrl": "media/audio_8837FF1A_DAF3_426E_41BF_69C752A7D336.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8837FF1A_DAF3_426E_41BF_69C752A7D336",
 "data": {
  "label": "25. Ratu Gede Gangga"
 }
},
{
 "items": [
  "this.PanoramaPlayListItem_E622DA2F_FE61_3F33_41EE_8E89DC47E804",
  "this.PanoramaPlayListItem_E623EA30_FE61_3F2D_41D4_2656A952C149",
  "this.PanoramaPlayListItem_E63C7A30_FE61_3F2D_41E9_AC49B666585C",
  "this.PanoramaPlayListItem_E63DBA30_FE61_3F2D_41D8_F6ABB3BFF00C",
  "this.PanoramaPlayListItem_E63E1A35_FE61_3F17_41CF_EFA0876649A3",
  "this.PanoramaPlayListItem_E63F6A35_FE61_3F17_41BC_53900BF68D10",
  "this.PanoramaPlayListItem_E63F1A35_FE61_3F17_41E9_AF0C89D87BEE",
  "this.PanoramaPlayListItem_E6385A36_FE61_3F15_41E4_FB8352284E82",
  "this.PanoramaPlayListItem_E638AA36_FE61_3F15_41D6_27ABC864EFED",
  "this.PanoramaPlayListItem_E6393A36_FE61_3F15_41CD_82E8D528464B",
  "this.PanoramaPlayListItem_E63A6A36_FE61_3F15_41D0_D074DCEC356E",
  "this.PanoramaPlayListItem_E63AEA36_FE61_3F15_41D4_8771058896A6",
  "this.PanoramaPlayListItem_E63B7A36_FE61_3F15_41E7_72E3FE11AADB",
  "this.PanoramaPlayListItem_E63BAA36_FE61_3F15_41E2_A935D92C0394",
  "this.PanoramaPlayListItem_E6343A37_FE61_3F13_41E8_08F46CD3B9D9",
  "this.PanoramaPlayListItem_E6348A37_FE61_3F13_41AB_94E76C18ECAA",
  "this.PanoramaPlayListItem_E635FA37_FE61_3F13_41E9_6EF709FCD31E",
  "this.PanoramaPlayListItem_E6364A3B_FE61_3F13_41C9_30F31D42F17B"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9923AF3_FE61_3F13_417D_3B4A7E1C4C9D",
 "initialPosition": {
  "yaw": -179.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_883A3E03_DAF3_425E_41CA_765D6497A627.mp3",
  "oggUrl": "media/audio_883A3E03_DAF3_425E_41CA_765D6497A627.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_883A3E03_DAF3_425E_41CA_765D6497A627",
 "data": {
  "label": "23. Bale Pesanekan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7.mp3",
  "oggUrl": "media/audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7",
 "data": {
  "label": "7. Kemulan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_882D78E2_DAF3_4FDE_4160_5A177B836367.mp3",
  "oggUrl": "media/audio_882D78E2_DAF3_4FDE_4160_5A177B836367.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_882D78E2_DAF3_4FDE_4160_5A177B836367",
 "data": {
  "label": "14. Pengayatan Pura Batukaru"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C.mp3",
  "oggUrl": "media/audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C",
 "data": {
  "label": "30. Bale Gong Jaba"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA.mp3",
  "oggUrl": "media/audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA",
 "data": {
  "label": "20. Bale Pemangku"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9863AE3_FE61_3F33_41EC_6CA1EB8FEDE2",
 "initialPosition": {
  "yaw": 6.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera",
 "initialPosition": {
  "yaw": -176.61,
  "class": "PanoramaCameraPosition",
  "pitch": -1
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E870FAD4_FE61_3F15_41E6_69B0250DEF1A",
 "initialPosition": {
  "yaw": 71.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 85.6,
   "backwardYaw": 159.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  },
  {
   "yaw": -7.59,
   "backwardYaw": -148.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
   "distance": 1
  },
  {
   "yaw": 15.39,
   "backwardYaw": -178.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Nista M_Spot 4",
 "id": "panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
 "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1650.95,
   "angle": 86.73,
   "class": "PanoramaMapLocation",
   "y": 1044.55
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
  "this.overlay_A2078302_B6B1_425E_41E4_269921A75A62",
  "this.overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
  "this.overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 98.79,
   "backwardYaw": -95.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Madya M_Spot 2",
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
 "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 1472.29,
   "angle": -105.18,
   "class": "PanoramaMapLocation",
   "y": 1364.62
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
  "this.overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -177.05,
   "backwardYaw": 0.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "distance": 1
  },
  {
   "yaw": 0.44,
   "backwardYaw": -167.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 2",
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
 "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 1699.99,
   "angle": 81.41,
   "class": "PanoramaMapLocation",
   "y": 1076.55
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A707D66E_BA90_C2A6_41D4_5129D7A7A73A",
  "this.overlay_A71BD6C6_BA90_C3E6_41E6_74C454529120",
  "this.overlay_989ED567_BA91_46A6_41BF_ADC016CA985E",
  "this.overlay_98304E75_BA91_42BA_41E5_0A3270584B52",
  "this.overlay_98C90373_BA91_C2BE_4181_D1705A4BD89A",
  "this.overlay_9A07C467_BA9F_46A6_41E0_E0B629F41C41",
  "this.overlay_984A6B01_BA9F_C25A_41A8_B7D1A7D78D3B",
  "this.overlay_99591FC0_BA9F_C1DB_41E3_13497D48D4C8"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_883F8CE1_DAF3_47DA_41D3_3042785822AF.mp3",
  "oggUrl": "media/audio_883F8CE1_DAF3_47DA_41D3_3042785822AF.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_883F8CE1_DAF3_47DA_41D3_3042785822AF",
 "data": {
  "label": "21. Betara Nini"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8816054B_DAF3_46EE_41D9_1A6517573292.mp3",
  "oggUrl": "media/audio_8816054B_DAF3_46EE_41D9_1A6517573292.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8816054B_DAF3_46EE_41D9_1A6517573292",
 "data": {
  "label": "8. Bale Pelawatan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9BEEB02_FE61_3EED_41CB_AB44BF90DC76",
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E.mp3",
  "oggUrl": "media/audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E",
 "data": {
  "label": "26. Wisnu"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9FC5B30_FE61_3D2D_41E2_7C52E3382FFC",
 "initialPosition": {
  "yaw": 89.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00.mp3",
  "oggUrl": "media/audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00",
 "data": {
  "label": "15. Manjang Sakaluang"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9434B6D_FE61_3D37_41E5_47CCEADE095E",
 "initialPosition": {
  "yaw": 84.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_881A4434_DAF3_46BA_41E2_30159DFCC13C.mp3",
  "oggUrl": "media/audio_881A4434_DAF3_46BA_41E2_30159DFCC13C.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_881A4434_DAF3_46BA_41E2_30159DFCC13C",
 "data": {
  "label": "6. Hyang Ibu"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9CB4B12_FE61_3EED_41EB_7A8B1B6FC3FC",
 "initialPosition": {
  "yaw": -44.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E68E2B90_FE61_3DED_41D9_BD3F50284BE8",
 "initialPosition": {
  "yaw": -129.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B.mp3",
  "oggUrl": "media/audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B",
 "data": {
  "label": "9. Bale Gong"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -176.55,
   "backwardYaw": -5.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  }
 ],
 "hfovMin": "128%",
 "hfov": 360,
 "label": "Nista M_Spot 1",
 "id": "panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
 "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1632.08,
   "angle": 174.88,
   "class": "PanoramaMapLocation",
   "y": 2267.46
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E974CB89_FE61_3DFF_41E8_24FF730406A6",
 "initialPosition": {
  "yaw": 2.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "minimumZoomFactor": 0.5,
 "label": "Utama Mandala",
 "id": "map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 4000,
 "image": {
  "class": "ImageResource",
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
    "class": "ImageResourceLevel",
    "height": 222,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "thumbnailUrl": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_t.jpg",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 3000,
 "overlays": [
  "this.overlay_B20767F3_DE91_41BD_41DE_B3819DBE273E",
  "this.overlay_BCDEC48F_DE90_C666_41E1_FA68CCAAE8FA",
  "this.overlay_B35095DA_DE90_C1EE_41E7_5D5F857A9C43",
  "this.overlay_BB693225_DE90_C25A_41D1_219E544E3D94",
  "this.overlay_B86CCEC8_DE90_C3EA_41D7_E49FCAB3FE8E",
  "this.overlay_A5449207_DE90_C266_41E0_97DE3DADF49E",
  "this.overlay_B8F2A788_DE91_C26A_41D9_DC77BCE6EF9D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E903CB46_FE61_3D75_41D3_4A69EFC5BE1C",
 "initialPosition": {
  "yaw": -94.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4.mp3",
  "oggUrl": "media/audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4",
 "data": {
  "label": "28. Ratu Ngurah Ebuh"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E861FABE_FE61_3F15_41E2_65EB93A53DC2",
 "initialPosition": {
  "yaw": -164.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2.mp3",
  "oggUrl": "media/audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2",
 "data": {
  "label": "10. Bale Pengrauhan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E916BB4D_FE61_3D77_41CC_7B4B10033CAD",
 "initialPosition": {
  "yaw": -20.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9ABCAFB_FE61_3F13_41D3_AD0A013351A0",
 "initialPosition": {
  "yaw": 87.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_881D9397_DAF3_4266_41E7_1A748B627CE8.mp3",
  "oggUrl": "media/audio_881D9397_DAF3_4266_41E7_1A748B627CE8.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_881D9397_DAF3_4266_41E7_1A748B627CE8",
 "data": {
  "label": "5. Ratu Anom"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1.mp3",
  "oggUrl": "media/audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1",
 "data": {
  "label": "16. Pengayatan Pura Uluwatu"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5.mp3",
  "oggUrl": "media/audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5",
 "data": {
  "label": "24. Pewaregan"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 4.46,
   "backwardYaw": -173.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "distance": 1
  },
  {
   "yaw": -92.51,
   "backwardYaw": 76.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 7",
 "id": "panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
 "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 2704.04,
   "angle": 86.56,
   "class": "PanoramaMapLocation",
   "y": 1662.37
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
  "this.overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
  "this.overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.93,
   "backwardYaw": 15.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  },
  {
   "yaw": -7.59,
   "backwardYaw": -6.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Nista M_Spot 6",
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
 "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2268.81,
   "angle": 91.48,
   "class": "PanoramaMapLocation",
   "y": 1283.64
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
  "this.overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E99F0AEB_FE61_3F32_41E4_E090EDFAAD5A",
 "initialPosition": {
  "yaw": -103.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E7832A5E_FE61_3F15_41D1_E6D1F89FD44C",
 "initialPosition": {
  "yaw": 12.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_88387E91_DAF3_427A_41E6_F9620897DEE4.mp3",
  "oggUrl": "media/audio_88387E91_DAF3_427A_41E6_F9620897DEE4.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_88387E91_DAF3_427A_41E6_F9620897DEE4",
 "data": {
  "label": "24. Pewaregan"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8810A719_DAF3_426A_41B3_914D9EBF18EF.mp3",
  "oggUrl": "media/audio_8810A719_DAF3_426A_41B3_914D9EBF18EF.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8810A719_DAF3_426A_41B3_914D9EBF18EF",
 "data": {
  "label": "11. Bale Banten"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 91.38,
   "backwardYaw": -86.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
   "distance": 1
  },
  {
   "yaw": -87.49,
   "backwardYaw": 97.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 5",
 "id": "panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
 "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3111.28,
   "angle": 95.16,
   "class": "PanoramaMapLocation",
   "y": 1187.4
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
  "this.overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
  "this.overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
  "this.overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18"
 ]
},
{
 "minimumZoomFactor": 0.5,
 "label": "Nista Mandala",
 "id": "map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
 "fieldOfViewOverlayInsideOpacity": 0.33,
 "width": 4000,
 "image": {
  "class": "ImageResource",
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
    "class": "ImageResourceLevel",
    "height": 222,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.21,
 "maximumZoomFactor": 1.2,
 "thumbnailUrl": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_t.jpg",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 3000,
 "overlays": [
  "this.overlay_BB226F56_D997_42E6_41CC_76064614B70D",
  "this.overlay_A722412B_D993_7EAE_41DB_296A40D04CC1",
  "this.overlay_A1B6D603_D991_425E_41D8_E815608B72DF",
  "this.overlay_A40EF114_D9AF_3E7A_41C3_EF4428324BEF",
  "this.overlay_A18A7F21_D9B0_C25A_41C9_FE7DE55E3411",
  "this.overlay_A793AE85_D9B1_C25A_4195_5675A5C3E5FC"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist",
 "class": "PlayList"
},
{
 "minimumZoomFactor": 0.5,
 "label": "Madya Mandala",
 "id": "map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 4000,
 "image": {
  "class": "ImageResource",
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
    "class": "ImageResourceLevel",
    "height": 222,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "thumbnailUrl": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_t.jpg",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 3000,
 "overlays": [
  "this.overlay_BB42FE1B_DEF0_C26E_41C8_8296A33B3B76",
  "this.overlay_BB03F9B3_DEF0_C1BE_41E7_63B0B2765D12",
  "this.overlay_B840D048_DEF7_5EEA_41B5_F0DB826CBF18",
  "this.overlay_B971FFA5_DEF7_C25A_41D4_8DE82D9CCE85",
  "this.overlay_B85811E8_DEF1_C1AA_41CD_C0E5590A5892"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_880381DE_DAF3_41E6_41D8_B683B125F078.mp3",
  "oggUrl": "media/audio_880381DE_DAF3_41E6_41D8_B683B125F078.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_880381DE_DAF3_41E6_41D8_B683B125F078",
 "data": {
  "label": "2. Meru Tumpang Tiga"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E.mp3",
  "oggUrl": "media/audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E",
 "data": {
  "label": "1. Padmasana"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 97.41,
   "backwardYaw": -87.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "distance": 1
  },
  {
   "yaw": 135.6,
   "backwardYaw": -49.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 4",
 "id": "panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
 "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3152.96,
   "angle": 70.16,
   "class": "PanoramaMapLocation",
   "y": 735.01
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
  "this.overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
  "this.overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
  "this.overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
  "this.overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E8746ACD_FE61_3F77_41EF_5194DFB46B4F",
 "initialPosition": {
  "yaw": 2.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.59,
   "backwardYaw": -176.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
   "distance": 1
  },
  {
   "yaw": -90.88,
   "backwardYaw": 85.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
   "distance": 1
  },
  {
   "yaw": 159.21,
   "backwardYaw": 85.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Nista M_Spot 2",
 "id": "panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
 "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 1653.48,
   "angle": 181.76,
   "class": "PanoramaMapLocation",
   "y": 1620.45
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
  "this.overlay_A741A38A_B697_426E_41D8_C41840EE397A",
  "this.overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
  "this.overlay_F1D6BBB5_D9B0_C1A5_41D6_846EE8F5ED3E"
 ]
},
{
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -86.86,
   "backwardYaw": 91.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
   "distance": 1
  },
  {
   "yaw": -173.53,
   "backwardYaw": 4.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 6",
 "id": "panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
 "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 3091.31,
   "angle": 94.75,
   "class": "PanoramaMapLocation",
   "y": 1642.68
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
  "this.overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
  "this.overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
  "this.overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
  "this.overlay_9D866CFA_BBB7_47AE_41C4_95C552770376"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9484B67_FE61_3D33_41BE_75716524C835",
 "initialPosition": {
  "yaw": 130.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E7AF5A6B_FE61_3F33_41C8_AD76F6638B7B",
 "initialPosition": {
  "yaw": -88.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9DE7B19_FE61_3D1F_41E1_C1616F0C0A32",
 "initialPosition": {
  "yaw": -81.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -108.09,
   "backwardYaw": 78.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Madya M_Spot 5",
 "id": "panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
 "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 3035.82,
   "angle": 79.81,
   "class": "PanoramaMapLocation",
   "y": 2250.29
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
  "this.overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
  "this.overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72.mp3",
  "oggUrl": "media/audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72",
 "data": {
  "label": "12. Bale Piasan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E96FBB7B_FE61_3D13_41C0_76D5FD23EFF0",
 "initialPosition": {
  "yaw": -82.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9357B61_FE61_3D2F_41BA_40F9C592E634",
 "initialPosition": {
  "yaw": 92.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -167.12,
   "backwardYaw": 0.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "distance": 1
  },
  {
   "yaw": 76.81,
   "backwardYaw": -92.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
   "distance": 1
  },
  {
   "yaw": -49.05,
   "backwardYaw": 135.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  },
  {
   "yaw": -167.12,
   "backwardYaw": 135.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  },
  {
   "yaw": 76.81,
   "backwardYaw": 135.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 3",
 "id": "panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
 "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 2668.73,
   "angle": 90,
   "class": "PanoramaMapLocation",
   "y": 1219.53
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
  "this.overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
  "this.overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
  "this.overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
  "this.overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E",
  "this.overlay_F6748890_DAF0_CE7A_41E5_51CCB22EBD80"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_88272A9C_DAF3_426B_41A4_366E324B427D.mp3",
  "oggUrl": "media/audio_88272A9C_DAF3_426B_41A4_366E324B427D.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_88272A9C_DAF3_426B_41A4_366E324B427D",
 "data": {
  "label": "17. Pengayatan Pura Sakenan"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -95.28,
   "backwardYaw": 98.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
   "distance": 1
  },
  {
   "yaw": -179.18,
   "backwardYaw": 28.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "distance": 1
  },
  {
   "yaw": -6.96,
   "backwardYaw": -7.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Madya M_Spot 1",
 "id": "panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
 "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 1394.72,
   "angle": 266.21,
   "class": "PanoramaMapLocation",
   "y": 862.44
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
  "this.overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
  "this.overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -177.55,
   "backwardYaw": -167.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  },
  {
   "yaw": 28.7,
   "backwardYaw": -179.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Madya M_Spot 3",
 "id": "panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
 "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 2351.88,
   "angle": 264.19,
   "class": "PanoramaMapLocation",
   "y": 1421.63
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
  "this.overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
  "this.overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
  "this.overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
  "this.overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
  "this.overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E98EDADC_FE61_3F15_41A6_BFB21C919496",
 "initialPosition": {
  "yaw": 40.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.06,
   "backwardYaw": -177.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
   "distance": 1
  },
  {
   "yaw": -139.98,
   "backwardYaw": 50.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Utama M_Spot 1",
 "id": "panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
 "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_A47A8247_D993_42E6_41AC_2B8F1074F3DC",
   "x": 1036.9,
   "angle": 90.12,
   "class": "PanoramaMapLocation",
   "y": 1219.24
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
  "this.overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
  "this.overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
  "this.overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A.mp3",
  "oggUrl": "media/audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A",
 "data": {
  "label": "3. Pengayatan Kahyangan Tiga"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218.mp3",
  "oggUrl": "media/audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218",
 "data": {
  "label": "19. Pelik Sari Kauh"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9EAEB29_FE61_3D3F_41C7_697887814079",
 "initialPosition": {
  "yaw": 172.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992.mp3",
  "oggUrl": "media/audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992",
 "data": {
  "label": "13. Taksu Agung"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E7B4BA79_FE61_3F1F_41E7_499B3755AD02",
 "initialPosition": {
  "yaw": -179.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9233B59_FE61_3D1F_41C7_F59D1E9A023D",
 "initialPosition": {
  "yaw": 1.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E794EA65_FE61_3F37_41D2_5E5051FD2F72",
 "initialPosition": {
  "yaw": 0.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_81300207_DA93_C266_41DC_160D7BDE13D4.mp3",
  "oggUrl": "media/audio_81300207_DA93_C266_41DC_160D7BDE13D4.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_81300207_DA93_C266_41DC_160D7BDE13D4",
 "data": {
  "label": "27. Aling-Aling"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210"
  },
  {
   "yaw": 85.6,
   "backwardYaw": -90.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Nista M_Spot 3",
 "id": "panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
 "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04",
   "x": 2175.64,
   "angle": 189.53,
   "class": "PanoramaMapLocation",
   "y": 1611.52
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
  "this.overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -167.63,
   "backwardYaw": -177.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
   "distance": 1
  },
  {
   "yaw": 78.44,
   "backwardYaw": -108.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
   "distance": 1
  },
  {
   "yaw": 50.32,
   "backwardYaw": -139.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "Madya M_Spot 4",
 "id": "panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
 "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_BA589B40_DEF3_42DA_41E1_156FB6C77256",
   "x": 2843.92,
   "angle": 92.79,
   "class": "PanoramaMapLocation",
   "y": 1414.69
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
  "this.overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
  "this.overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9F77B37_FE61_3D13_41E6_414697E7000C",
 "initialPosition": {
  "yaw": 3.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E7885A57_FE61_3F13_41D1_7AEF2D787039",
 "initialPosition": {
  "yaw": 174.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E6811B97_FE61_3D13_41C7_72D69A11D0CF",
 "initialPosition": {
  "yaw": 172.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E7A27A71_FE61_3F2F_41CF_61AD83D9D55E",
 "initialPosition": {
  "yaw": -175.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_883C7D6C_DAF3_46AA_41BF_752D783D152D.mp3",
  "oggUrl": "media/audio_883C7D6C_DAF3_46AA_41BF_752D783D152D.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_883C7D6C_DAF3_46AA_41BF_752D783D152D",
 "data": {
  "label": "22. Bale Piasan"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30.mp3",
  "oggUrl": "media/audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30",
 "data": {
  "label": "18. Pelik Sari Kangin"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E8643AB6_FE61_3F15_41ED_FC15AA7105D7",
 "initialPosition": {
  "yaw": 12.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787.mp3",
  "oggUrl": "media/audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787",
 "data": {
  "label": "31. Bale KulKul"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9D7FB20_FE61_3D2D_41EB_9C65C4E5FDB9",
 "initialPosition": {
  "yaw": -151.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
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
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E9281B53_FE61_3D13_41EA_8FDE46FD3ABD",
 "initialPosition": {
  "yaw": 31.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3.mp3",
  "oggUrl": "media/audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3",
 "data": {
  "label": "29. Bale Piasan"
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 641,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-- SETTINGS"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 330,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.MapViewer",
  "this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59"
 ],
 "id": "Container_BDC95708_D993_426B_41D1_9DC67F73A3F3",
 "backgroundOpacity": 0.3,
 "width": 283,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "2%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 117,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "2%",
 "contentOpaque": false,
 "height": 234,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "minWidth": 142,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--FLOORPLAN"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "maxWidth": 283
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "--DENAH"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
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
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false); this.stopGlobalAudio(this.audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "hide": "this.stopGlobalAudio(this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C); this.stopGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); this.stopGlobalAudio(this.audio_89CD5164_DAF3_5EDA_41E0_E8E6DC9D21A3); this.stopGlobalAudio(this.audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4); this.stopGlobalAudio(this.audio_81300207_DA93_C266_41DC_160D7BDE13D4); this.stopGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); this.stopGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); this.stopGlobalAudio(this.audio_88387E91_DAF3_427A_41E6_F9620897DEE4); this.stopGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); this.stopGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); this.stopGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); this.stopGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); this.stopGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); this.stopGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); this.stopGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); this.stopGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); this.stopGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); this.stopGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); this.stopGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); this.stopGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); this.stopGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); this.stopGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); this.stopGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); this.stopGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); this.stopGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); this.stopGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); this.stopGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); this.stopGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); this.stopGlobalAudio(this.audio_880381DE_DAF3_41E6_41D8_B683B125F078); this.stopGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); this.stopGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5)",
 "visible": false,
 "data": {
  "name": "--PELINGGIH"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_F10FE96B_D991_4EAE_41C5_6521EEE84E57",
  "this.Container_F2D2E2E3_D993_C3DE_41AF_57F211543810"
 ],
 "id": "Container_F1D6228C_D9B3_426A_41E8_7F205F31030E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.94%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Pelinggih"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "mode": "toggle",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "mode": "toggle",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_89CFC0CB_DAF3_5FEE_41D8_24348C5E58B4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.73,
   "image": "this.AnimatedImageResource_71B9EEDB_7EA6_6C69_41D0_9B1B8C181403",
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 7.1,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A261BD13_B6B7_C67E_41CC_A981F3586106",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.73,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_E6811B97_FE61_3D13_41C7_72D69A11D0CF); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_2_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ]
   },
   "hfov": 11.85,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.67,
   "yaw": -148.15
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AE57CE02_BA91_425E_41CC_C59F17058325",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -148.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "media": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E622DA2F_FE61_3F33_41EE_8E89DC47E804, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_camera",
 "id": "PanoramaPlayListItem_E622DA2F_FE61_3F33_41EE_8E89DC47E804"
},
{
 "media": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E623EA30_FE61_3F2D_41D4_2656A952C149, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_camera",
 "id": "PanoramaPlayListItem_E623EA30_FE61_3F2D_41D4_2656A952C149"
},
{
 "media": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63C7A30_FE61_3F2D_41E9_AC49B666585C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_camera",
 "id": "PanoramaPlayListItem_E63C7A30_FE61_3F2D_41E9_AC49B666585C"
},
{
 "media": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63DBA30_FE61_3F2D_41D8_F6ABB3BFF00C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_camera",
 "id": "PanoramaPlayListItem_E63DBA30_FE61_3F2D_41D8_F6ABB3BFF00C"
},
{
 "media": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63E1A35_FE61_3F17_41CF_EFA0876649A3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_camera",
 "id": "PanoramaPlayListItem_E63E1A35_FE61_3F17_41CF_EFA0876649A3"
},
{
 "media": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63F6A35_FE61_3F17_41BC_53900BF68D10, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_camera",
 "id": "PanoramaPlayListItem_E63F6A35_FE61_3F17_41BC_53900BF68D10"
},
{
 "media": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63F1A35_FE61_3F17_41E9_AF0C89D87BEE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_camera",
 "id": "PanoramaPlayListItem_E63F1A35_FE61_3F17_41E9_AF0C89D87BEE"
},
{
 "media": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6385A36_FE61_3F15_41E4_FB8352284E82, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_camera",
 "id": "PanoramaPlayListItem_E6385A36_FE61_3F15_41E4_FB8352284E82"
},
{
 "media": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E638AA36_FE61_3F15_41D6_27ABC864EFED, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_camera",
 "id": "PanoramaPlayListItem_E638AA36_FE61_3F15_41D6_27ABC864EFED"
},
{
 "media": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6393A36_FE61_3F15_41CD_82E8D528464B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_camera",
 "id": "PanoramaPlayListItem_E6393A36_FE61_3F15_41CD_82E8D528464B"
},
{
 "media": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63A6A36_FE61_3F15_41D0_D074DCEC356E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_camera",
 "id": "PanoramaPlayListItem_E63A6A36_FE61_3F15_41D0_D074DCEC356E"
},
{
 "media": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63AEA36_FE61_3F15_41D4_8771058896A6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_camera",
 "id": "PanoramaPlayListItem_E63AEA36_FE61_3F15_41D4_8771058896A6"
},
{
 "media": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63B7A36_FE61_3F15_41E7_72E3FE11AADB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_camera",
 "id": "PanoramaPlayListItem_E63B7A36_FE61_3F15_41E7_72E3FE11AADB"
},
{
 "media": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E63BAA36_FE61_3F15_41E2_A935D92C0394, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_camera",
 "id": "PanoramaPlayListItem_E63BAA36_FE61_3F15_41E2_A935D92C0394"
},
{
 "media": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6343A37_FE61_3F13_41E8_08F46CD3B9D9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_camera",
 "id": "PanoramaPlayListItem_E6343A37_FE61_3F13_41E8_08F46CD3B9D9"
},
{
 "media": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6348A37_FE61_3F13_41AB_94E76C18ECAA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_camera",
 "id": "PanoramaPlayListItem_E6348A37_FE61_3F13_41AB_94E76C18ECAA"
},
{
 "media": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E635FA37_FE61_3F13_41E9_6EF709FCD31E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_camera",
 "id": "PanoramaPlayListItem_E635FA37_FE61_3F13_41E9_6EF709FCD31E"
},
{
 "media": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22",
 "end": "this.trigger('tourEnded')",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6364A3B_FE61_3F13_41C9_30F31D42F17B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_camera",
 "id": "PanoramaPlayListItem_E6364A3B_FE61_3F13_41C9_30F31D42F17B"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB, this.camera_E9281B53_FE61_3D13_41EA_8FDE46FD3ABD); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ]
   },
   "hfov": 7.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.02,
   "yaw": -7.59
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A290DDBC_B6B0_C1AA_41B2_0D7B0E66EA73",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.25,
   "image": "this.AnimatedImageResource_71B8EEDB_7EA6_6C69_41AA_B543766BCFA1",
   "yaw": -80.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.59,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A2078302_B6B1_425E_41E4_269921A75A62",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -80.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_E9233B59_FE61_3D1F_41C7_F59D1E9A023D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.3,
   "image": "this.AnimatedImageResource_71B94EDB_7EA6_6C69_41CD_59AB75FAC480",
   "yaw": 15.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.24,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A2B31BF6_B6B1_41A6_41E4_E3363D0742B2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_E916BB4D_FE61_3D77_41CC_7B4B10033CAD); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.86,
   "image": "this.AnimatedImageResource_71B97EDB_7EA6_6C69_41DF_52FADE9AB03C",
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.77,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AF952C78_BAF7_46AA_41DE_2B2514FB9782",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_E9434B6D_FE61_3D37_41E5_47CCEADE095E); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.29,
   "image": "this.AnimatedImageResource_71BABEDC_7EA6_6C6F_41D5_B618369D8DAB",
   "yaw": 98.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.33,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A061CE24_BAF1_C25A_41BA_270A0361F40C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 98.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, true, 0, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 7, this.audio_81300207_DA93_C266_41DC_160D7BDE13D4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.26,
   "image": "this.AnimatedImageResource_71BB2EDC_7EA6_6C6F_41C8_527D498C58D2",
   "yaw": -176.86,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.21,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A04E08DD_BAEF_4FEA_4187_4C3E12BEC064",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.26,
   "yaw": -176.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.21,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_E7B4BA79_FE61_3F1F_41E7_499B3755AD02); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.05,
   "image": "this.AnimatedImageResource_7180BEDE_7EA6_6C6B_41D3_450AB0CB7B45",
   "yaw": -177.05,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.02,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A707D66E_BA90_C2A6_41D4_5129D7A7A73A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.05,
   "yaw": -177.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.02,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881844BF_DAF3_47A6_41D0_696BFA73F9C7); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_71811EDE_7EA6_6C6B_41C9_736CFA6F1D8A",
   "yaw": 112.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.57,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A71BD6C6_BA90_C3E6_41E6_74C454529120",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 112.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.57,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881A4434_DAF3_46BA_41E2_30159DFCC13C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_71815EDE_7EA6_6C6B_41C4_A7D656132F50",
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.94,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_989ED567_BA91_46A6_41BF_ADC016CA985E",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.94,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881D9397_DAF3_4266_41E7_1A748B627CE8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_71818EDE_7EA6_6C6B_41D1_9303B59E3823",
   "yaw": 68.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_98304E75_BA91_42BA_41E5_0A3270584B52",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 68.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.44,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_E8643AB6_FE61_3F15_41ED_FC15AA7105D7); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_7181FEDE_7EA6_6C6B_41C7_F7D389868BF6",
   "yaw": 0.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.94,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_98C90373_BA91_C2BE_4181_D1705A4BD89A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 0.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8821DC57_DAF3_46E6_41C6_8BCC694881FA); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5,
   "image": "this.AnimatedImageResource_71823EDE_7EA6_6C6B_41D1_9E83261B60C6",
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.59,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A07C467_BA9F_46A6_41E0_E0B629F41C41",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5,
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.59,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881FB308_DAF3_426A_41E5_8F23E936C97C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_71829EDE_7EA6_6C6B_41D0_2991D36F6FE5",
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_984A6B01_BA9F_C25A_41A8_B7D1A7D78D3B",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.2,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8812D685_DAF3_425A_41DD_1D0FD6A5D5D2); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_7182DEDE_7EA6_6C6B_41D8_5EC8921EB2E5",
   "yaw": -31.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_99591FC0_BA9F_C1DB_41E3_13497D48D4C8",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -31.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.2,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_E7885A57_FE61_3F13_41D1_7AEF2D787039); this.mainPlayList.set('selectedIndex', 1); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 0, this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_71BE2EDA_7EA6_6C6B_41A3_AFFAE9D1B1E8",
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.38,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B95A8258_B690_C2EA_41B9_AE9FFDF9CC8D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "map": {
  "width": 79,
  "x": 997.4,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1179.74
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B20767F3_DE91_41BD_41DE_B3819DBE273E",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 997.4,
  "height": 79,
  "y": 1179.74,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_0.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 1660.49,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1037.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_BCDEC48F_DE90_C666_41E1_FA68CCAAE8FA",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1660.49,
  "height": 79,
  "y": 1037.05,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_1.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 2629.23,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1180.03
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B35095DA_DE90_C1EE_41E7_5D5F857A9C43",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2629.23,
  "height": 79,
  "y": 1180.03,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_2.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 3113.46,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 695.51
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_BB693225_DE90_C25A_41D1_219E544E3D94",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 3113.46,
  "height": 79,
  "y": 695.51,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_3.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 3071.78,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1147.9
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B86CCEC8_DE90_C3EA_41D7_E49FCAB3FE8E",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 3071.78,
  "height": 79,
  "y": 1147.9,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_4.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 3051.81,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1603.18
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A5449207_DE90_C266_41E0_97DE3DADF49E",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 3051.81,
  "height": 79,
  "y": 1603.18,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_5.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 79,
  "x": 2664.54,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 79,
  "y": 1622.87
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B8F2A788_DE91_C26A_41D9_DC77BCE6EF9D",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2664.54,
  "height": 79,
  "y": 1622.87,
  "width": 79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A47A8247_D993_42E6_41AC_2B8F1074F3DC_HS_6.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88019274_DAF3_42BA_41E0_7BBB7CCC0F0A); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_71888EE0_7EA6_6C57_41CD_E590CF109D41",
   "yaw": 80.27,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.33,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C578FD6_BBB1_41E6_41DC_911216EDC9EC",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 80.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_E9863AE3_FE61_3F33_41EC_6CA1EB8FEDE2); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.89,
   "image": "this.AnimatedImageResource_7188DEE1_7EA6_6C59_41BB_6028DF875232",
   "yaw": 4.46,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.97,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9F7F93D2_BBB3_41FE_415D_72394822BE85",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.89,
   "yaw": 4.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.97,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_E99F0AEB_FE61_3F32_41E4_E090EDFAAD5A); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.47,
   "image": "this.AnimatedImageResource_71894EE1_7EA6_6C59_41D6_E4A38462EC04",
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.84,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C02222F_BBB3_C2A6_41E4_B3EA44658A72",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.47,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_E87E6AC5_FE61_3F77_41E3_2462892973DE); this.mainPlayList.set('selectedIndex', 6); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_0_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ]
   },
   "hfov": 7.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.14,
   "yaw": -7.59
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AE175F48_BA91_42E9_41BE_C38AC59875CE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_E861FABE_FE61_3F15_41E2_65EB93A53DC2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.87,
   "image": "this.AnimatedImageResource_71BABEDC_7EA6_6C6F_419A_2DD728C300C5",
   "yaw": -178.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AEC891E3_BAEF_C1DE_41E3_049F907BD9B8",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.87,
   "yaw": -178.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88272A9C_DAF3_426B_41A4_366E324B427D); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_718D6EDF_7EA6_6C69_41C1_8C57C70005E8",
   "yaw": -28.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.08,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9DDD4885_BBB1_4E5A_41DE_FC5EDFAA0430",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -28.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882D78E2_DAF3_4FDE_4160_5A177B836367); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_718DCEDF_7EA6_6C69_41D8_468017674657",
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C71C67B_BBB1_42A1_41BA_4305D77EB6EF",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.58,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_E96FBB7B_FE61_3D13_41C0_76D5FD23EFF0); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.65,
   "image": "this.AnimatedImageResource_718DEEDF_7EA6_6C69_41C2_51049430E0D9",
   "yaw": -87.49,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C0243CE_BBB3_41E6_41CE_3EEFE8DCD439",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.65,
   "yaw": -87.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.51,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626, this.camera_E954DB74_FE61_3D16_41DA_676A5AA2D6E7); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.95,
   "image": "this.AnimatedImageResource_718E7EE0_7EA6_6C57_41D8_8F8880C62C76",
   "yaw": 91.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.59,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9CBBD04C_BBB3_7EEA_41E7_15B36B018B18",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.95,
   "yaw": 91.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "map": {
  "width": 80,
  "x": 1592.08,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 2227.46
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_BB226F56_D997_42E6_41CC_76064614B70D",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1592.08,
  "height": 80,
  "y": 2227.46,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_0.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 80,
  "x": 1613.48,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 1580.45
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A722412B_D993_7EAE_41DB_296A40D04CC1",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1613.48,
  "height": 80,
  "y": 1580.45,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_1.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 80,
  "x": 1610.95,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 1004.55
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A1B6D603_D991_425E_41D8_E815608B72DF",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1610.95,
  "height": 80,
  "y": 1004.55,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_2.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 80,
  "x": 2228.81,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 1243.64
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A40EF114_D9AF_3E7A_41C3_EF4428324BEF",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2228.81,
  "height": 80,
  "y": 1243.64,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_3.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 80,
  "x": 2135.64,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 1571.52
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A18A7F21_D9B0_C25A_41C9_FE7DE55E3411",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2135.64,
  "height": 80,
  "y": 1571.52,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_4.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 80,
  "x": 2278.35,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 80,
  "y": 1041.28
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A793AE85_D9B1_C25A_4195_5675A5C3E5FC",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2278.35,
  "height": 80,
  "y": 1041.28,
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA51D8C9_D991_4FEA_41D9_5B552E0F6C04_HS_5.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 78,
  "x": 1355.72,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 78,
  "y": 823.44
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_BB42FE1B_DEF0_C26E_41C8_8296A33B3B76",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1355.72,
  "height": 78,
  "y": 823.44,
  "width": 78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_0.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 78,
  "x": 2312.88,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 78,
  "y": 1382.63
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_BB03F9B3_DEF0_C1BE_41E7_63B0B2765D12",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2312.88,
  "height": 78,
  "y": 1382.63,
  "width": 78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_1.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 78,
  "x": 1433.29,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 78,
  "y": 1325.62
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B840D048_DEF7_5EEA_41B5_F0DB826CBF18",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1433.29,
  "height": 78,
  "y": 1325.62,
  "width": 78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_2.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 78,
  "x": 2804.92,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 78,
  "y": 1375.69
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B971FFA5_DEF7_C25A_41D4_8DE82D9CCE85",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2804.92,
  "height": 78,
  "y": 1375.69,
  "width": 78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_3.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 78,
  "x": 2996.82,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 78,
  "y": 2211.29
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B85811E8_DEF1_C1AA_41CD_C0E5590A5892",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2996.82,
  "height": 78,
  "y": 2211.29,
  "width": 78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_BA589B40_DEF3_42DA_41E1_156FB6C77256_HS_4.png",
     "width": 62,
     "class": "ImageResourceLevel",
     "height": 62
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72).get('state') == 'playing') { this.stopGlobalAudio(this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_881167B2_DAF3_41BE_41E0_AAA4C4EBFF72); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.27,
   "image": "this.AnimatedImageResource_7183CEDF_7EA6_6C69_41DD_AA0220DE9F78",
   "yaw": -58.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.7,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A0AA9B2_BBB0_C1BE_41E0_7DB144141AAC",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.27,
   "yaw": -58.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.7,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882CB858_DAF3_4EEA_41E8_3E3F681AA992); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_718C1EDF_7EA6_6C69_41B2_4C31605F48F2",
   "yaw": -26.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.84,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A86673E_BBB1_42A6_41CD_7E7A805EC8D8",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -26.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.84,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00).get('state') == 'playing') { this.stopGlobalAudio(this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_882B6970_DAF3_4EBA_41E8_C52BA82B8B00); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_718C6EDF_7EA6_6C69_4180_F4F580B2828E",
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 4.33,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9D7BE7BE_BBB1_C1A6_41CE_53B7B673DC2F",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9, this.camera_E9484B67_FE61_3D33_41BE_75716524C835); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_718CAEDF_7EA6_6C69_417F_E100B44D957E",
   "yaw": 135.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A98E1D3_BBB0_C1FE_41E5_E293786C7B94",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.82,
   "yaw": 135.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.49,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_E9357B61_FE61_3D2F_41BA_40F9C592E634); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_718D1EDF_7EA6_6C69_41C6_5689E9E2E098",
   "yaw": 97.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.57,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9D9C0175_BBB0_DEBA_41E0_C627A11CEDB9",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 97.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.57,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C, this.camera_E9F77B37_FE61_3D13_41E6_414697E7000C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.33,
   "image": "this.AnimatedImageResource_71BECEDA_7EA6_6C6B_41DE_D6773CB59EE0",
   "yaw": -5.59,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.13,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A4E16F31_B690_C2BA_41D2_C3A7D7F498D3",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.33,
   "yaw": -5.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556, this.camera_E908AB3D_FE61_3D17_41D6_3EA818B2B377); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.77,
   "image": "this.AnimatedImageResource_71BF2EDB_7EA6_6C69_41C7_73C5DC0B8013",
   "yaw": -90.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.99,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A741A38A_B697_426E_41D8_C41840EE397A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.77,
   "yaw": -90.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F, this.camera_E903CB46_FE61_3D75_41D3_4A69EFC5BE1C); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.51,
   "image": "this.AnimatedImageResource_71BF6EDB_7EA6_6C69_41DA_8FF0D1858388",
   "yaw": 159.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.25,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A4652D42_B697_C6DE_41DA_34EB3D204BAF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 159.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, true, 0, null, null, false); this.setComponentVisibility(this.HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8D2FC37F_DAF0_C2A6_41B0_0CE6A0821787); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.07,
   "image": "this.AnimatedImageResource_71BFAEDB_7EA6_6C69_41DE_A203FE6837BD",
   "yaw": 54.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 20.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_F1D6BBB5_D9B0_C1A5_41D6_846EE8F5ED3E",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.07,
   "yaw": 54.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingLeft": 6,
 "width": 283,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "height": 218,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88295A0E_DAF3_4266_41C4_F9C46B4222D1); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_718EBEE0_7EA6_6C57_41C2_EB14B5C6481A",
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C3BD623_BBB1_C25E_41E4_9DEE9CD2BA98",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E).get('state') == 'playing') { this.stopGlobalAudio(this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_9FBDDD9C_DBAF_466A_41DD_BCDFF67A898E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_718F1EE0_7EA6_6C57_41D1_CC9C89ED83CA",
   "yaw": 55.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.07,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C7642AF_BBB1_43A7_41D3_C32B0CBAD9C3",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.54,
   "yaw": 55.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.07,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_880381DE_DAF3_41E6_41D8_B683B125F078).get('state') == 'playing') { this.stopGlobalAudio(this.audio_880381DE_DAF3_41E6_41D8_B683B125F078); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_880381DE_DAF3_41E6_41D8_B683B125F078); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.53,
   "image": "this.AnimatedImageResource_718F8EE0_7EA6_6C57_41DB_530E428228A5",
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.07,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9CB59062_BBB1_5EDE_41D2_487A5424C3FD",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.07,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4, this.camera_E7AF5A6B_FE61_3F33_41C8_AD76F6638B7B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_718FCEE0_7EA6_6C57_41DC_1032EAF89543",
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.23,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9C8C23C6_BBB7_41E6_41BA_F8939F8ACC82",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22, this.camera_E7A27A71_FE61_3F2F_41CF_61AD83D9D55E); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.65,
   "image": "this.AnimatedImageResource_71881EE0_7EA6_6C57_41A1_7F736E3E13EE",
   "yaw": -173.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.98,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9D866CFA_BBB7_47AE_41C4_95C552770376",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.65,
   "yaw": -173.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883C7D6C_DAF3_46AA_41BF_752D783D152D); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.46,
   "image": "this.AnimatedImageResource_71864EDD_7EA6_6C69_41C2_D53394C1608A",
   "yaw": -44.84,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 8.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A248D1F4_BA91_41BA_41D2_55022820A1B6",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -44.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.35,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF).get('state') == 'playing') { this.stopGlobalAudio(this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883F8CE1_DAF3_47DA_41D3_3042785822AF); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.47,
   "image": "this.AnimatedImageResource_71869EDD_7EA6_6C69_41DA_D8AB36B691F7",
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 7.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A3FDAB02_BA91_C25E_41B0_AFC3C5DBBD75",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.47,
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.35,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_E961FB82_FE61_3DF2_41DB_A1AB6AAD0A2A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.98,
   "image": "this.AnimatedImageResource_7186CEDD_7EA6_6C69_41CE_2493755F8A1A",
   "yaw": -108.09,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A3CF6E81_BA91_425A_41C5_06DBE200A2A6",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.98,
   "yaw": -108.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.12,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8825EB2E_DAF3_42A6_41D6_30B75FF78D30); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_71835EDE_7EA6_6C6B_41D2_C25F9FD76BDF",
   "yaw": 40.57,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.09,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9AD0466F_BA91_42A6_41CF_ECE25A6F2E23",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": 40.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.09,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218).get('state') == 'playing') { this.stopGlobalAudio(this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_88233BCB_DAF3_41EE_41E2_03F03A9F7218); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_71838EDE_7EA6_6C6B_41AD_5CFEBA5A05D2",
   "yaw": -16.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 7.1,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A8C8EBD_BA91_43AA_41C7_A1283BFB71CF",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -16.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.1,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_E9BEEB02_FE61_3EED_41CB_AB44BF90DC76); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_7183CEDE_7EA6_6C6B_41D1_34BD922FAAF8",
   "yaw": -49.05,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.55,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_994B6128_BA93_5EAA_41A7_6CF0539F7025",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -49.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8810A719_DAF3_426A_41B3_914D9EBF18EF); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_718C3EDE_7EA6_6C6B_41CE_DFF0BEEE914D",
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_99A40B5E_BA93_42E6_41DD_C1A22D4BD088",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.2,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_E9B04B0A_FE61_3EFD_41CC_A3CF457343D8); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.33,
   "image": "this.AnimatedImageResource_718C7EDF_7EA6_6C69_41DC_8CB2F7C104CC",
   "yaw": -167.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.27,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A93CE14_BA90_C27A_41DF_8D4F03D0B69E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.33,
   "yaw": -167.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509, this.camera_E9CB4B12_FE61_3EED_41EB_7A8B1B6FC3FC); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_718CEEDF_7EA6_6C69_41B7_D4E124A9EA42",
   "yaw": 76.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.57,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_F6748890_DAF0_CE7A_41E5_51CCB22EBD80",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 76.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637, this.camera_E9EAEB29_FE61_3D3F_41C7_697887814079); this.mainPlayList.set('selectedIndex', 5); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 0, this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
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
   "hfov": 9.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.9,
   "yaw": -6.96
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AF6CD134_BAF7_FEBA_41D2_1358AD9FAD61",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.44,
   "yaw": -6.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.9,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330, this.camera_E9DE7B19_FE61_3D1F_41E1_C1616F0C0A32); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.8,
   "image": "this.AnimatedImageResource_71BB8EDC_7EA6_6C6F_41D3_15742C17A887",
   "yaw": -95.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AF94A49C_BAF0_C66A_41D8_482965B4E7AF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -95.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.51,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_E9D7FB20_FE61_3D2D_41EB_9C65C4E5FDB9); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.97,
   "image": "this.AnimatedImageResource_71BBDEDC_7EA6_6C6F_41B1_37B9C7C4F209",
   "yaw": -179.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A0A667E5_BAF3_41DA_41BC_6043964E3962",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.97,
   "yaw": -179.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.12,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210, this.camera_E794EA65_FE61_3F37_41D2_5E5051FD2F72); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.28,
   "image": "this.AnimatedImageResource_71BB7EDC_7EA6_6C6F_41C8_8C0B72E14526",
   "yaw": 28.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.24,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A1BD2A96_BA93_4266_41E5_9C572630878F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.28,
   "yaw": 28.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8837FF1A_DAF3_426E_41BF_69C752A7D336); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_71BBCEDC_7EA6_6C6F_419A_A95448A59258",
   "yaw": -135.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.97,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A1C8E0FE_BA91_DFA6_41E0_38D92088A511",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -135.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8832DFB0_DAF3_41BA_41DB_C2AE811DEF6E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.78,
   "image": "this.AnimatedImageResource_71BBFEDC_7EA6_6C6F_417C_3DF0F3DACF78",
   "yaw": -85.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.81,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A1BC9AAD_BA91_C3AA_41CF_4333B62AC299",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.78,
   "yaw": -85.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.81,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627).get('state') == 'playing') { this.stopGlobalAudio(this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_883A3E03_DAF3_425E_41CA_765D6497A627); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.49,
   "image": "this.AnimatedImageResource_71844EDC_7EA6_6C6F_41D2_014B12830033",
   "yaw": -100.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 6.85,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A105ED4B_BA91_46EE_41D4_AAA09CF0F1EF",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.49,
   "yaw": -100.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.85,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5).get('state') == 'playing') { this.stopGlobalAudio(this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_908FDB91_DBB1_427A_41C1_1C18E4C1E7F5); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.51,
   "image": "this.AnimatedImageResource_71848EDC_7EA6_6C6F_41CC_15D585CFB97C",
   "yaw": -43.08,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A1E97132_BA97_5EBE_41D1_FECD592B7113",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -43.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.2,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_E7832A5E_FE61_3F15_41D1_E6D1F89FD44C); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.58,
   "image": "this.AnimatedImageResource_7184DEDD_7EA6_6C69_41D6_9BBA56AC715F",
   "yaw": -177.55,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.65,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A4B7AA7B_BA91_42AE_41BE_3E766FDEEA22",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.58,
   "yaw": -177.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.65,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8816054B_DAF3_46EE_41D9_1A6517573292); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.53,
   "image": "this.AnimatedImageResource_71873EDD_7EA6_6C69_41CF_26D3CD31C6EB",
   "yaw": 96.09,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A6847D6F_BAAF_46A6_41D3_E8AA0E13891B",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 96.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.44,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, true, 0, null, null, false); if(this.getGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B).get('state') == 'playing') { this.stopGlobalAudio(this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_8814D5F4_DAF3_41BA_41A8_CD8D53AB533B); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.5,
   "image": "this.AnimatedImageResource_71879EDD_7EA6_6C69_41DE_63332292A965",
   "yaw": -62.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.21,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A61E65B9_BAAF_41AA_4190_91FE5194CDC8",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.5,
   "yaw": -62.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.21,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4, this.camera_E68E2B90_FE61_3DED_41D9_BD3F50284BE8); this.mainPlayList.set('selectedIndex', 9); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
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
   "hfov": 7.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.75,
   "yaw": -139.98
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A64F21E0_BA90_C1DA_41DF_35279C69A621",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -139.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.75,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4, this.camera_E974CB89_FE61_3DFF_41E8_24FF730406A6); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.68,
   "image": "this.AnimatedImageResource_71804EDD_7EA6_6C69_41D4_A15D650E9C5C",
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.18,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A7B03421_BA93_465A_41D5_A6D6A3BD258F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4, this.camera_E9FC5B30_FE61_3D2D_41E2_7C52E3382FFC); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.05,
   "image": "this.AnimatedImageResource_71B80EDB_7EA6_6C69_41AE_7CE8ACC0D30C",
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A2850138_B6B0_DEAA_41CF_C9359CCCF44E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.05,
   "yaw": 85.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 1, this.panorama_BB7AAF76_B691_42A6_41D3_4AA613188556)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_2_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "hfov": 7.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.27,
   "yaw": -129.81
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AEF0FBB4_BA97_C1BA_41CC_F59753500C1D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -129.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC, this.camera_E8746ACD_FE61_3F77_41EF_5194DFB46B4F); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.96,
   "image": "this.AnimatedImageResource_71853EDD_7EA6_6C69_41D1_0C8759DC08F8",
   "yaw": -167.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.17,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A26BCEFD_BA91_43AA_41D0_8DC4ACEA15C1",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.96,
   "yaw": -167.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.17,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB, this.camera_E870FAD4_FE61_3F15_41E6_69B0250DEF1A); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.78,
   "image": "this.AnimatedImageResource_71858EDD_7EA6_6C69_41DC_2305603AEEFA",
   "yaw": 78.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.62,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A3838180_BA91_FE5A_41E4_D592215AD069",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 78.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.62,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10, this.camera_E98EDADC_FE61_3F15_41A6_BFB21C919496); this.mainPlayList.set('selectedIndex', 11); this.setMediaBehaviour(this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist, 2, this.panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_2_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "hfov": 8.94,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.89,
   "yaw": 50.32
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_A242CC4E_BA97_46E6_41CF_68CD9D3DF214",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.94,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "mode": "toggle",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 10,
 "paddingTop": 0,
 "height": 110,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingTop": 0,
 "height": "85.959%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 66,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": 0,
 "width": 330,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "popUpBorderRadius": 0,
 "fontFamily": "Arial",
 "id": "DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59",
 "left": "0%",
 "backgroundOpacity": 0.9,
 "paddingLeft": 5,
 "popUpFontColor": "#000000",
 "paddingRight": 5,
 "class": "DropDown",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "popUpBackgroundOpacity": 0.9,
 "popUpShadow": false,
 "minHeight": 1,
 "selectedPopUpBackgroundColor": "#333333",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "popUpBackgroundColor": "#FFFFFF",
 "popUpGap": 0,
 "playList": "this.DropDown_A0DD342B_D991_46AE_41E3_1B315B60FB59_playlist",
 "minWidth": 1,
 "selectedPopUpFontColor": "#FFFFFF",
 "fontSize": 14,
 "data": {
  "name": "DropDown1204"
 },
 "fontColor": "#FFFFFF",
 "popUpShadowBlurRadius": 6,
 "backgroundColorDirection": "vertical",
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#666666",
  "#333333"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "arrowColor": "#FFFFFF",
 "popUpShadowSpread": 1,
 "fontWeight": "normal",
 "fontStyle": "normal",
 "textDecoration": "none",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "height": "14.08%",
 "rollOverPopUpBackgroundColor": "#FFFFFF"
},
{
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "backgroundImageUrl": "skin/Container_062A782F_1140_E20B_41AF_B3E5DE341773.png",
 "propagateClick": false,
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_B173588E_DFB1_CE66_41E8_C546790FEFDC"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "70.02%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 140,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F3BFF16F_D9B7_DEA6_41E6_8545B20DF17C",
  "this.Container_F3B86175_D9B7_DEBA_41E1_90237E8182C9"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Kulkul"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2785756_D9B1_42E6_41DE_636DC12FB239",
  "this.Container_F27F9756_D9B1_42E6_41D7_D867145C80CA"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "show": "this.playGlobalAudio(this.audio_8E9585C7_DAB3_41E6_41E4_37D30ED5152C)",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Gong Jaba"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2FF5402_D9B1_C65E_41E6_E83272FA479E",
  "this.Container_F2FFE403_D9B1_C65E_41DF_16EFEF549B9F"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Ratu Ngurah Ebuh"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2EA4905_D9B3_4E5A_41D6_3659ADAABBA2",
  "this.Container_F2EAB905_D9B3_4E5A_41DB_09D41AFFDA77"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Aling-Aling"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F36CC979_D9B3_4EAA_41A1_2017FB6D7D5D",
  "this.Container_F36D697A_D9B3_4EAE_4162_DAA25603E950"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Sumur"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F1B2A4D3_D9B3_C7FE_41D2_F050AF9BDF9E",
  "this.Container_F1B0C4D4_D9B3_C7FA_41BC_C76385F93531"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Ratu Gede Gangga"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F22058DC_D9B3_4FEA_41E3_5CBC5B21E8A7",
  "this.Container_F22188DD_D9B3_4FEA_41C0_FF516774FF59"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F23F991A_D9B3_4E6E_41B0_438FC198D761",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Pewaregan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F3348E91_D9B0_C27D_41C2_FAF01DB0EED2",
  "this.Container_F3345E92_D9B0_C27E_41D6_85072356FA69"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Pesanekan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F187ED7C_D9B1_46AA_41B7_1C699EB319F3",
  "this.Container_F185CD7D_D9B1_46AA_41B9_BF14286C1310"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F196EDCA_D9B1_41EE_41D7_DF886135E349",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Piyasan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F202A428_D9B1_C6AA_41DD_591615A0DA05",
  "this.Container_F2016429_D9B1_C6AA_41E7_BAFE85610D5F"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Betara Nini"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2D4D614_D9B1_C27A_41D8_F7C36164CFD2",
  "this.Container_F2D48615_D9B1_C27A_41D0_1DDAA17A442A"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Pemangku"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F33365B9_D9B1_41AA_41D6_3D2C681FC539",
  "this.Container_F332D5BE_D9B1_41A7_41CF_FD03D815BED8"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F313D675_D9B1_42BA_41D7_E2C88342E45A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Pelik Sari Kauh"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F47CD5B7_D9B1_41A6_41D8_98535F93CC15",
  "this.Container_F47C55B7_D9B1_41A6_41D4_49BF3C515B2A"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Pelik Sari Kangin"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2175776_D9B0_C2A6_41D1_50370C703342",
  "this.Container_F2171776_D9B0_C2A6_41BF_BFFD5A26A564"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "P. Pura Sakenan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F38675A3_D9BF_C65E_41D7_75E5BADD2F65",
  "this.Container_F38635A8_D9BF_C1AA_41E4_93527CDBE6F7"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "P. Pura Uluwatu"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2716A3C_D9BF_C2AB_41C9_D7CA586517DF",
  "this.Container_F2728A3E_D9BF_C2A6_41DB_522757BB023E"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Manjang Sakaluang"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2F782CE_D9BF_43E6_41E5_5834021649A0",
  "this.Container_F2F7C2CF_D9BF_43E6_41D8_415EB43C1312"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "P. Pura Batukaru"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F37E3BB5_D9B0_C1BA_41E1_C9910670F2A9",
  "this.Container_F37F9BB7_D9B0_C1A6_41DD_7735771CA952"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Taksu Agung"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F3A4495F_D9B0_CEE6_41D3_6587064C8147",
  "this.Container_F3A5F960_D9B0_CEDA_41E2_1A6D4234C8FF"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Piasan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2D8B7AE_D9B1_C1A6_41E7_3E69B5D5B79D",
  "this.Container_F2DAD7AF_D9B1_C1A6_41CE_F14F69C18941"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Banten"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F336A2EB_D9B1_43AE_41D4_93EDB47E85B6",
  "this.Container_F33602F0_D9B1_43BA_41B3_57AE0A375800"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F31173A3_D9B1_425E_41E6_97AE8695F64C",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Pengrahuan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F442A7D6_D9B1_41E6_41E2_71B316C332AB",
  "this.Container_F442E7D6_D9B1_41E6_41C2_E9DCE42FAFF8"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F420A80F_D9B1_4E66_41E0_75075927F1D9",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Gong"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F223C628_D9B0_C2AA_41BD_FC4CEB0A1DB0",
  "this.Container_F2222629_D9B0_C2AA_4193_4C501E0C73AB"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2306672_D9B0_C2BF_41CD_40D0178F1004",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Bale Pelawatan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2D06B61_D9B0_C2DA_41E7_0D30FD633E91",
  "this.Container_F2D02B62_D9B0_C2DE_4191_306650CA6BE0"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Kemulan"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2A78427_D9B0_C6A6_41E0_6EF6070F63A6",
  "this.Container_F2A5A428_D9B0_C6AA_41D1_9DA0D9790925"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Hyang Ibu"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F39E32A2_D9B1_425E_41DD_FEF3E93DA99B",
  "this.Container_F39E62A2_D9B1_425E_41E5_B401D6C5E69C"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F464D35E_D9B1_42E6_41A2_11101AFF320A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Ratu Anom"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F5689091_D9B1_FE7A_41C4_8A6F572A4760",
  "this.Container_F56F2091_D9B1_FE7A_41E5_562DF488EBA3"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Gedong Kunci"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F2A32266_D9B1_42A6_41CB_47138DD18216",
  "this.Container_F2A36267_D9B1_42A6_41DA_F97A30077370"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Pengayatan Kahyangan Tiga"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F34F0D8F_D9B1_4666_41E0_39E5465E2EFD",
  "this.Container_F34F5D8F_D9B1_4666_41E2_8F0824ABB8F5"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Meru Tupang Tiga"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_F3FB4FE8_D9B0_C1AA_41E0_03DD47CA2EB5",
  "this.Container_F3FB1FE8_D9B0_C1AA_41B6_F06AE1A10AA8"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Padmasana"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_F1180917_D991_4E66_41C7_09C7754AABF9",
  "this.Container_F11A3918_D991_4E6A_41C9_68A09F29E1B2"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_F10FE96B_D991_4EAE_41C5_6521EEE84E57",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E"
 ],
 "id": "Container_F2D2E2E3_D993_C3DE_41AF_57F211543810",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71B9EEDB_7EA6_6C69_41D0_9B1B8C181403",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AF245_B691_42DA_41E1_540766FDB2AB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71B8EEDB_7EA6_6C69_41AA_B543766BCFA1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71B94EDB_7EA6_6C69_41CD_59AB75FAC480",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71B97EDB_7EA6_6C69_41DF_52FADE9AB03C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AB92E_B691_4EA6_41E1_36D1FECD572F_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BABEDC_7EA6_6C6F_41D5_B618369D8DAB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BB2EDC_7EA6_6C6F_41C8_527D498C58D2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEC5754F_BAF1_46E6_41E3_554983BCE330_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7180BEDE_7EA6_6C6B_41D3_450AB0CB7B45",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71811EDE_7EA6_6C6B_41C9_736CFA6F1D8A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71815EDE_7EA6_6C6B_41C4_A7D656132F50",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71818EDE_7EA6_6C6B_41D1_9303B59E3823",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7181FEDE_7EA6_6C6B_41C7_F7D389868BF6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71823EDE_7EA6_6C6B_41D1_9E83261B60C6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71829EDE_7EA6_6C6B_41D0_2991D36F6FE5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7182DEDE_7EA6_6C6B_41D8_5EC8921EB2E5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0778_BAB7_C2AA_41DE_F1D7F2DBA9A4_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BE2EDA_7EA6_6C6B_41A3_AFFAE9D1B1E8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8D1BC4F_B691_46E6_41D5_114B5BC2F69C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71888EE0_7EA6_6C57_41CD_E590CF109D41",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7188DEE1_7EA6_6C59_41BB_6028DF875232",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71894EE1_7EA6_6C59_41D6_E4A38462EC04",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C37E8_BAB7_41AA_41A6_683F1DDB1C22_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BABEDC_7EA6_6C6F_419A_2DD728C300C5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89AF4B5_B691_C7BA_41BC_2F3C2E24E637_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718D6EDF_7EA6_6C69_41C1_8C57C70005E8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718DCEDF_7EA6_6C69_41D8_468017674657",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718DEEDF_7EA6_6C69_41C2_51049430E0D9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718E7EE0_7EA6_6C57_41D8_8F8880C62C76",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45CD22F_BAB7_42A6_41C8_A9A9504F4DB4_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7183CEDF_7EA6_6C69_41DD_AA0220DE9F78",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718C1EDF_7EA6_6C69_41B2_4C31605F48F2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718C6EDF_7EA6_6C69_4180_F4F580B2828E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718CAEDF_7EA6_6C69_417F_E100B44D957E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718D1EDF_7EA6_6C69_41C6_5689E9E2E098",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C07C3_BAB7_41DE_41E1_BCAFEC456509_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BECEDA_7EA6_6C6B_41DE_D6773CB59EE0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BF2EDB_7EA6_6C69_41C7_73C5DC0B8013",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BF6EDB_7EA6_6C69_41DA_8FF0D1858388",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BFAEDB_7EA6_6C69_41DE_A203FE6837BD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AC611_B691_427A_41C9_786EF39D2AB4_1_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718EBEE0_7EA6_6C57_41C2_EB14B5C6481A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718F1EE0_7EA6_6C57_41D1_CC9C89ED83CA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718F8EE0_7EA6_6C57_41DB_530E428228A5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718FCEE0_7EA6_6C57_41DC_1032EAF89543",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71881EE0_7EA6_6C57_41A1_7F736E3E13EE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C0D6F_BAB7_46A6_41E1_CC1174C95626_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71864EDD_7EA6_6C69_41C2_D53394C1608A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71869EDD_7EA6_6C69_41DA_D8AB36B691F7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7186CEDD_7EA6_6C69_41CE_2493755F8A1A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEEACD5_BAF0_C7FA_41E3_6E84278DCFCB_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71835EDE_7EA6_6C6B_41D2_C25F9FD76BDF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71838EDE_7EA6_6C6B_41AD_5CFEBA5A05D2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7183CEDE_7EA6_6C6B_41D1_34BD922FAAF8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718C3EDE_7EA6_6C6B_41CE_DFF0BEEE914D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718C7EDF_7EA6_6C69_41DC_8CB2F7C104CC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_718CEEDF_7EA6_6C69_41B7_D4E124A9EA42",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A45C022B_BAB7_42AE_41DB_8E31F54886F9_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BB8EDC_7EA6_6C6F_41D3_15742C17A887",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BBDEDC_7EA6_6C6F_41B1_37B9C7C4F209",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AE14F1B1_BAF1_C1BA_41D5_8A3DF4447210_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BB7EDC_7EA6_6C6F_41C8_8C0B72E14526",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BBCEDC_7EA6_6C6F_419A_A95448A59258",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71BBFEDC_7EA6_6C6F_417C_3DF0F3DACF78",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71844EDC_7EA6_6C6F_41D2_014B12830033",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71848EDC_7EA6_6C6F_41CC_15D585CFB97C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7184DEDD_7EA6_6C69_41D6_9BBA56AC715F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEEFF1C4_BAF1_41DA_41D7_5444D5E24CBC_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71873EDD_7EA6_6C69_41CF_26D3CD31C6EB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71879EDD_7EA6_6C69_41DE_63332292A965",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71804EDD_7EA6_6C69_41D4_A15D650E9C5C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A4204CB4_BAB7_C7BA_41B5_5C60FCE5AC10_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71B80EDB_7EA6_6C69_41AE_7CE8ACC0D30C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BB7AAF76_B691_42A6_41D3_4AA613188556_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71853EDD_7EA6_6C69_41D1_0C8759DC08F8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_71858EDD_7EA6_6C69_41DC_2305603AEEFA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEE2494A_BAF0_CEEE_41E1_79B724687CC4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 60,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 36,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundOpacity": 0.25,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "90%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0.02
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#CCCCCC"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": true,
 "maxHeight": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 9,
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 50
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderRadius": 0,
 "width": "25%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "itemLabelFontStyle": "italic",
 "class": "ThumbnailGrid",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "borderRadius": 5,
 "itemMaxWidth": 1000,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minHeight": 1,
 "itemThumbnailOpacity": 1,
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemOpacity": 1,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemWidth": 220,
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "propagateClick": true,
 "borderSize": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemHeight": 160,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "paddingBottom": 70,
 "horizontalAlign": "center",
 "itemLabelGap": 7,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.373757784243!2d115.18340980814848!3d-8.65595759135529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24754f5670f25%3A0xff35ad45b603026d!2sPemerajan%20Agung%20Sakti%20Padangsambian!5e0!3m2!1sen!2sid!4v1704045242736!5m2!1sen!2sid",
 "minHeight": 1,
 "scrollEnabled": true,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "insetBorder": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderRadius": 0,
 "width": "3.619%",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "5.902%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1200,
 "id": "Image_B173588E_DFB1_CE66_41E8_C546790FEFDC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "class": "Image",
 "right": "0%",
 "width": "86.076%",
 "borderRadius": 0,
 "url": "skin/Image_B173588E_DFB1_CE66_41E8_C546790FEFDC.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image376241"
 },
 "maxWidth": 999
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderRadius": 0,
 "width": "4.308%",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": 20,
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "36.429%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F3BFB174_D9B7_DEBA_41D9_2F1BCBDFFCA6"
 ],
 "id": "Container_F3BFF16F_D9B7_DEA6_41E6_8545B20DF17C",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F3B8E175_D9B7_DEBA_41CA_ABA4F553C152"
 ],
 "id": "Container_F3B86175_D9B7_DEBA_41E1_90237E8182C9",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2787756_D9B1_42E6_41E5_DF0F10B8B6B5"
 ],
 "id": "Container_F2785756_D9B1_42E6_41DE_636DC12FB239",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F27FB756_D9B1_42E6_41A4_99488DA8AC09"
 ],
 "id": "Container_F27F9756_D9B1_42E6_41D7_D867145C80CA",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2FF0402_D9B1_C65E_41E2_0D0A39B60A19"
 ],
 "id": "Container_F2FF5402_D9B1_C65E_41E6_E83272FA479E",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2FFC403_D9B1_C65E_41E5_F393DED1D914"
 ],
 "id": "Container_F2FFE403_D9B1_C65E_41DF_16EFEF549B9F",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2EA6905_D9B3_4E5A_41E8_520326379B7C"
 ],
 "id": "Container_F2EA4905_D9B3_4E5A_41D6_3659ADAABBA2",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2EAC906_D9B3_4E66_41CB_69F69D78F59D"
 ],
 "id": "Container_F2EAB905_D9B3_4E5A_41DB_09D41AFFDA77",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F36D297A_D9B3_4EAE_41D4_BF3BB5456AF8"
 ],
 "id": "Container_F36CC979_D9B3_4EAA_41A1_2017FB6D7D5D",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F36DB97A_D9B3_4EAE_41D0_381E777F6510"
 ],
 "id": "Container_F36D697A_D9B3_4EAE_4162_DAA25603E950",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F1B0F4D3_D9B3_C7FE_41E0_09E684120B8C"
 ],
 "id": "Container_F1B2A4D3_D9B3_C7FE_41D2_F050AF9BDF9E",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F1B0A4D4_D9B3_C7FA_41E7_3180D4E59EB1"
 ],
 "id": "Container_F1B0C4D4_D9B3_C7FA_41BC_C76385F93531",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F22068DC_D9B3_4FEA_41D2_8EEB29FE7991"
 ],
 "id": "Container_F22058DC_D9B3_4FEA_41E3_5CBC5B21E8A7",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F221A8DD_D9B3_4FEA_41E0_7EC702DD9438"
 ],
 "id": "Container_F22188DD_D9B3_4FEA_41C0_FF516774FF59",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F3347E92_D9B0_C27E_41E8_B91504068C04"
 ],
 "id": "Container_F3348E91_D9B0_C27D_41C2_FAF01DB0EED2",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F3343E92_D9B0_C27E_41DC_86B93B6AB8CB"
 ],
 "id": "Container_F3345E92_D9B0_C27E_41D6_85072356FA69",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F185BD7C_D9B1_46AA_41CC_032173512D73"
 ],
 "id": "Container_F187ED7C_D9B1_46AA_41B7_1C699EB319F3",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F185ED7D_D9B1_46AA_41E1_38B6D101BDB5"
 ],
 "id": "Container_F185CD7D_D9B1_46AA_41B9_BF14286C1310",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2014428_D9B1_C6AA_41D3_23CCE999C9AD"
 ],
 "id": "Container_F202A428_D9B1_C6AA_41DD_591615A0DA05",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2010429_D9B1_C6AA_41E7_C8287B02E4D7"
 ],
 "id": "Container_F2016429_D9B1_C6AA_41E7_BAFE85610D5F",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2D4A615_D9B1_C27A_41D9_6C02CF9A7E72"
 ],
 "id": "Container_F2D4D614_D9B1_C27A_41D8_F7C36164CFD2",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2D36615_D9B1_C27A_41E4_42CD95BEEFF4"
 ],
 "id": "Container_F2D48615_D9B1_C27A_41D0_1DDAA17A442A",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F332B5B9_D9B1_41AA_41DD_E8689C4FECFE"
 ],
 "id": "Container_F33365B9_D9B1_41AA_41D6_3D2C681FC539",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F332F5BE_D9B1_41A7_4187_3D06CE2F91B6"
 ],
 "id": "Container_F332D5BE_D9B1_41A7_41CF_FD03D815BED8",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F47C15B7_D9B1_41A6_41E1_90BEFCACFC7E"
 ],
 "id": "Container_F47CD5B7_D9B1_41A6_41D8_98535F93CC15",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F47BA5B7_D9B1_41A6_4195_444B8BF02A4D"
 ],
 "id": "Container_F47C55B7_D9B1_41A6_41D4_49BF3C515B2A",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2173776_D9B0_C2A6_41BB_5B32F9C283C1"
 ],
 "id": "Container_F2175776_D9B0_C2A6_41D1_50370C703342",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F216F776_D9B0_C2A6_41C8_32F195AC66D9"
 ],
 "id": "Container_F2171776_D9B0_C2A6_41BF_BFFD5A26A564",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F38615A3_D9BF_C65E_41D5_4FA73DB4565F"
 ],
 "id": "Container_F38675A3_D9BF_C65E_41D7_75E5BADD2F65",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F386D5A8_D9BF_C1AA_41CB_4C63DE0C0EB6"
 ],
 "id": "Container_F38635A8_D9BF_C1AA_41E4_93527CDBE6F7",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F272BA3E_D9BF_C2A6_41D3_1DD64B419294"
 ],
 "id": "Container_F2716A3C_D9BF_C2AB_41C9_D7CA586517DF",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2736A3E_D9BF_C2A6_41E4_8FA8F43D79A0"
 ],
 "id": "Container_F2728A3E_D9BF_C2A6_41DB_522757BB023E",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2F7E2CE_D9BF_43E6_41D9_4C415FE45EBE"
 ],
 "id": "Container_F2F782CE_D9BF_43E6_41E5_5834021649A0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2F722CF_D9BF_43E6_41E4_D17FC949EA9A"
 ],
 "id": "Container_F2F7C2CF_D9BF_43E6_41D8_415EB43C1312",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F37FDBB7_D9B0_C1A6_41C9_19A077B3C4DD"
 ],
 "id": "Container_F37E3BB5_D9B0_C1BA_41E1_C9910670F2A9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F37FBBB7_D9B0_C1A6_41E1_957AE7BD8AF3"
 ],
 "id": "Container_F37F9BB7_D9B0_C1A6_41DD_7735771CA952",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F3A4295F_D9B0_CEE6_41E8_616267536F48"
 ],
 "id": "Container_F3A4495F_D9B0_CEE6_41D3_6587064C8147",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F3A5D960_D9B0_CEDA_41D3_AD454349EC1E"
 ],
 "id": "Container_F3A5F960_D9B0_CEDA_41E2_1A6D4234C8FF",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2DAE7AE_D9B1_C1A6_41D5_92CE7A80C4C4"
 ],
 "id": "Container_F2D8B7AE_D9B1_C1A6_41E7_3E69B5D5B79D",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2DAB7AF_D9B1_C1A6_41E5_BDA37DF13331"
 ],
 "id": "Container_F2DAD7AF_D9B1_C1A6_41CE_F14F69C18941",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F336F2EB_D9B1_43AE_41D6_C9078C7A55A8"
 ],
 "id": "Container_F336A2EB_D9B1_43AE_41D4_93EDB47E85B6",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F33622F1_D9B1_43BA_4198_CAFC1B80F697"
 ],
 "id": "Container_F33602F0_D9B1_43BA_41B3_57AE0A375800",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F44287D6_D9B1_41E6_41CE_48CA1CD35E6B"
 ],
 "id": "Container_F442A7D6_D9B1_41E6_41E2_71B316C332AB",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F44237D6_D9B1_41E6_41D3_B3871E57578D"
 ],
 "id": "Container_F442E7D6_D9B1_41E6_41C2_E9DCE42FAFF8",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2221628_D9B0_C2AA_41E4_4A4FC84B40D5"
 ],
 "id": "Container_F223C628_D9B0_C2AA_41BD_FC4CEB0A1DB0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F225C629_D9B0_C2AA_41E4_3BF70267FFF6"
 ],
 "id": "Container_F2222629_D9B0_C2AA_4193_4C501E0C73AB",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2D04B61_D9B0_C2DA_41E1_1988AC7DF9C4"
 ],
 "id": "Container_F2D06B61_D9B0_C2DA_41E7_0D30FD633E91",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2D00B62_D9B0_C2DE_41BA_1D658AAE1025"
 ],
 "id": "Container_F2D02B62_D9B0_C2DE_4191_306650CA6BE0",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2A5D427_D9B0_C6A6_41DB_FA6794253030"
 ],
 "id": "Container_F2A78427_D9B0_C6A6_41E0_6EF6070F63A6",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2A58428_D9B0_C6AA_41D4_E04ADC316FBD"
 ],
 "id": "Container_F2A5A428_D9B0_C6AA_41D1_9DA0D9790925",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F39E12A2_D9B1_425E_41E4_E69E96B83D64"
 ],
 "id": "Container_F39E32A2_D9B1_425E_41DD_FEF3E93DA99B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F39EB2A2_D9B1_425E_41B9_06368F56E1AF"
 ],
 "id": "Container_F39E62A2_D9B1_425E_41E5_B401D6C5E69C",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F56F4091_D9B1_FE7A_41BA_9D3A7D831742"
 ],
 "id": "Container_F5689091_D9B1_FE7A_41C4_8A6F572A4760",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F56F0091_D9B1_FE7A_41D4_7C46CFC75717"
 ],
 "id": "Container_F56F2091_D9B1_FE7A_41E5_562DF488EBA3",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F2A34267_D9B1_42A6_41CA_8EF2E4E1982E"
 ],
 "id": "Container_F2A32266_D9B1_42A6_41CB_47138DD18216",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F2A28267_D9B1_42A6_41CF_C883E5D5F729"
 ],
 "id": "Container_F2A36267_D9B1_42A6_41DA_F97A30077370",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F34F7D8F_D9B1_4666_41CA_D81347886C99"
 ],
 "id": "Container_F34F0D8F_D9B1_4666_41E0_39E5465E2EFD",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F34EBD8F_D9B1_4666_41DF_201523D51349"
 ],
 "id": "Container_F34F5D8F_D9B1_4666_41E2_8F0824ABB8F5",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.WebFrame_F3FB7FE8_D9B0_C1AA_41E4_8C2D252BE92F"
 ],
 "id": "Container_F3FB4FE8_D9B0_C1AA_41E0_03DD47CA2EB5",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F3FACFE9_D9B0_C1AA_41E3_F9B4F133ECF0"
 ],
 "id": "Container_F3FB1FE8_D9B0_C1AA_41B6_F06AE1A10AA8",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderRadius": 0,
 "width": "25%",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "pressedRollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3EDD1F6_D9B7_C1A6_41E5_DC5061CC613D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F24A67A6_D9B1_41A6_41DC_6343EE44B24A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2D6E473_D9B1_C6BE_41E4_51F77930C226, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2FDD947_D9B3_4EE6_41DA_9BDA9DB77A5D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F34C3A31_D9B3_42BA_41E2_C4285A3ABD57, false, 0, null, null, false); this.setComponentVisibility(this.Container_F183D51C_D9B3_C66A_41E2_1CEB2AE70C06, false, 0, null, null, false); this.setComponentVisibility(this.Container_F23F991A_D9B3_4E6E_41B0_438FC198D761, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3175F4A_D9B0_C2EE_41CE_99E8A18B55BC, false, 0, null, null, false); this.setComponentVisibility(this.Container_F196EDCA_D9B1_41EE_41D7_DF886135E349, false, 0, null, null, false); this.setComponentVisibility(this.Container_F211B461_D9B1_C6DD_41DD_A6FF6BFC60AA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A096D2_D9B1_C3FE_41D2_5449342C34FB, false, 0, null, null, false); this.setComponentVisibility(this.Container_F313D675_D9B1_42BA_41D7_E2C88342E45A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F1C5F6CF_D9B1_43E6_41DC_A67BCCB76927, false, 0, null, null, false); this.setComponentVisibility(this.Container_F218F7AF_D9B0_C1A6_41C0_3E9C66537183, false, 0, null, null, false); this.setComponentVisibility(this.Container_F463D5F9_D9BF_C1AA_41E2_21439BEF73B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2419A8A_D9BF_C26E_41D9_84C3027A170C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2C6E30A_D9BF_426E_41C0_B742E54AD3E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F35DEC6F_D9B0_C6A6_41D8_F2663DC0BCFA, false, 0, null, null, false); this.setComponentVisibility(this.Container_F386599B_D9B0_CE6E_41A7_3F7C71D495F1, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A8E7F8_D9B1_C1AA_41DB_15AB5544540D, false, 0, null, null, false); this.setComponentVisibility(this.Container_F31173A3_D9B1_425E_41E6_97AE8695F64C, false, 0, null, null, false); this.setComponentVisibility(this.Container_F420A80F_D9B1_4E66_41E0_75075927F1D9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2306672_D9B0_C2BF_41CD_40D0178F1004, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2A1DB9B_D9B0_C26E_41CD_28D4D66895C0, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2B45466_D9B0_C6A6_41DA_97D77D5BB7C5, false, 0, null, null, false); this.setComponentVisibility(this.Container_F464D35E_D9B1_42E6_41A2_11101AFF320A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F27B31CE_D9B1_C1E6_41E5_8EBBE6C6FD2E, false, 0, null, null, false); this.setComponentVisibility(this.Container_F2BD12A3_D9B1_425E_41E4_6D0A893CB7B9, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3586DCD_D9B1_41EA_41DA_EA5F718C915A, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3C5E0A3_D9B0_DE5E_41DC_E6AE99070E54, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.WebFrame_F11BD917_D991_4E66_41E1_5BA878AACD9A"
 ],
 "id": "Container_F1180917_D991_4E66_41C7_09C7754AABF9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "children": [
  "this.Container_F11A1918_D991_4E6A_419C_26901203AE22",
  "this.Container_F11A6919_D991_4E6A_41E0_FE86539BFA5A",
  "this.Container_F11E491F_D991_4E66_41D5_3EF031FA62CA"
 ],
 "id": "Container_F11A3918_D991_4E6A_41C9_68A09F29E1B2",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E.jpg",
 "borderRadius": 0,
 "width": "25%",
 "pressedIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "pressedRollOverIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_F2F4F238_D993_C2AA_41BF_E59589663F5E_rollover.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
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
 "backgroundOpacity": 0,
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "class": "Container",
 "scrollBarOpacity": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 40,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 40,
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderRadius": 0,
 "width": "100%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": 20,
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderRadius": 0,
 "width": "14.22%",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderRadius": 0,
 "width": "14.22%",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderRadius": 0,
 "width": "10%",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "propagateClick": true,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": 20,
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "height": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_F3BFB174_D9B7_DEBA_41D9_2F1BCBDFFCA6",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/23d626615cba489681c6460d4ffdb9f6/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6"
 ],
 "id": "Container_F3B8E175_D9B7_DEBA_41CA_ABA4F553C152",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2787756_D9B1_42E6_41E5_DF0F10B8B6B5",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/e6209f65e7784349a6cb97d291635ae2/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F27F375B_D9B1_42EE_41E3_801A4F6DF559"
 ],
 "id": "Container_F27FB756_D9B1_42E6_41A4_99488DA8AC09",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2FF0402_D9B1_C65E_41E2_0D0A39B60A19",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/9e144d3de01246fd9ca7c2b46cc6bdf8/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2FED407_D9B1_C666_41D8_4CC81D3E2B83"
 ],
 "id": "Container_F2FFC403_D9B1_C65E_41E5_F393DED1D914",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2EA6905_D9B3_4E5A_41E8_520326379B7C",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/591dedf38fb54d49b1d38b48a268e97d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2EB8909_D9B3_4E6A_41BA_1C1CD5B74272"
 ],
 "id": "Container_F2EAC906_D9B3_4E66_41CB_69F69D78F59D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F36D297A_D9B3_4EAE_41D4_BF3BB5456AF8",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/61c01253d4fc40a9a9d654b16f53fa7d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F36AC987_D9B3_4E66_41C9_2B93354570D3"
 ],
 "id": "Container_F36DB97A_D9B3_4EAE_41D0_381E777F6510",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F1B0F4D3_D9B3_C7FE_41E0_09E684120B8C",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/a15d615b331d4f7883728fbafe4da582/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F1BE84D7_D9B3_C7E6_419E_2AEE63ED109F"
 ],
 "id": "Container_F1B0A4D4_D9B3_C7FA_41E7_3180D4E59EB1",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F22068DC_D9B3_4FEA_41D2_8EEB29FE7991",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/59cbed02f900418b80eab2416cebb1a3/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F22EB8DF_D9B3_4FE6_41E5_CF72B2F455E2"
 ],
 "id": "Container_F221A8DD_D9B3_4FEA_41E0_7EC702DD9438",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F3347E92_D9B0_C27E_41E8_B91504068C04",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/a96ebfff782c465d9151f74be5a1a5ca/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F3326EA0_D9B0_C25A_41E8_C99A7E64B665"
 ],
 "id": "Container_F3343E92_D9B0_C27E_41DC_86B93B6AB8CB",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F185BD7C_D9B1_46AA_41CC_032173512D73",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/42c4474b88e9492ba854937eb46b7568/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F1820D80_D9B1_465A_41CA_2EB90C60C12A"
 ],
 "id": "Container_F185ED7D_D9B1_46AA_41E1_38B6D101BDB5",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2014428_D9B1_C6AA_41D3_23CCE999C9AD",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/5eac3e32bceb4fc58a0671e099060f68/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F200642B_D9B1_C6AE_41D7_2CCB1C2F1E41"
 ],
 "id": "Container_F2010429_D9B1_C6AA_41E7_C8287B02E4D7",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2D4A615_D9B1_C27A_41D9_6C02CF9A7E72",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/31bcd0d167764b699434a58c604eb4c2/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2D24618_D9B1_C26A_4183_71551AB09B6C"
 ],
 "id": "Container_F2D36615_D9B1_C27A_41E4_42CD95BEEFF4",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F332B5B9_D9B1_41AA_41DD_E8689C4FECFE",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/19a8f777b31347fb8eb18e732ee4a13b/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F33175CC_D9B1_41EA_41CD_F15ABF8A49AB"
 ],
 "id": "Container_F332F5BE_D9B1_41A7_4187_3D06CE2F91B6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F47C15B7_D9B1_41A6_41E1_90BEFCACFC7E",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/73e5d8cc29bd43248b452235625324ab/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F47995BA_D9B1_41AE_41D6_7D676D3B2B54"
 ],
 "id": "Container_F47BA5B7_D9B1_41A6_4195_444B8BF02A4D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2173776_D9B0_C2A6_41BB_5B32F9C283C1",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/39b08f25af7045a584e530791dfd1145/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2163779_D9B0_C2AA_41E0_AD5C1B9EE8C2"
 ],
 "id": "Container_F216F776_D9B0_C2A6_41C8_32F195AC66D9",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F38615A3_D9BF_C65E_41D5_4FA73DB4565F",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/5d1815d6d3294a69adcfea200214c280/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F387A5B5_D9BF_C1BA_41D7_27351B219547"
 ],
 "id": "Container_F386D5A8_D9BF_C1AA_41CB_4C63DE0C0EB6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F272BA3E_D9BF_C2A6_41D3_1DD64B419294",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/200269ac737a46fd9b0d8344cb949ce9/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2754A40_D9BF_C2DB_41E4_751E2EA30057"
 ],
 "id": "Container_F2736A3E_D9BF_C2A6_41E4_8FA8F43D79A0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2F7E2CE_D9BF_43E6_41D9_4C415FE45EBE",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/ab0ae3399f05408cb844a03184b5caa7/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2C8F2D1_D9BF_43FA_41D8_042E51FDEC93"
 ],
 "id": "Container_F2F722CF_D9BF_43E6_41E4_D17FC949EA9A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F37FDBB7_D9B0_C1A6_41C9_19A077B3C4DD",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/a93c9fdbde804327b76cfc0d5583dda4/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F3703BC9_D9B0_C1EA_41C8_DA3B6315EF96"
 ],
 "id": "Container_F37FBBB7_D9B0_C1A6_41E1_957AE7BD8AF3",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F3A4295F_D9B0_CEE6_41E8_616267536F48",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/0e363528f6534a1a8a0e35642127d03b/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F3A63965_D9B0_CEDA_41CA_99780AFFE9D7"
 ],
 "id": "Container_F3A5D960_D9B0_CEDA_41D3_AD454349EC1E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2DAE7AE_D9B1_C1A6_41D5_92CE7A80C4C4",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/afce83d39ce54437af5a1445c99200bc/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2DF47B2_D9B1_C1BE_41CB_20B7A3B655E8"
 ],
 "id": "Container_F2DAB7AF_D9B1_C1A6_41E5_BDA37DF13331",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F336F2EB_D9B1_43AE_41D6_C9078C7A55A8",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/8f09e368285347899c1cd9f5a4a3fb20/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F30962FF_D9B1_43A6_41C4_FBDA348BBBC5"
 ],
 "id": "Container_F33622F1_D9B1_43BA_4198_CAFC1B80F697",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F44287D6_D9B1_41E6_41CE_48CA1CD35E6B",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/72e5dcb49a77430d8a1f398f14ce712a/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F44567D9_D9B1_41EA_41CA_23341EC94A74"
 ],
 "id": "Container_F44237D6_D9B1_41E6_41D3_B3871E57578D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2221628_D9B0_C2AA_41E4_4A4FC84B40D5",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/f65cd75869bf42e1b4665809dbde640d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F227E62B_D9B0_C2AE_41C1_CD46266D739E"
 ],
 "id": "Container_F225C629_D9B0_C2AA_41E4_3BF70267FFF6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2D04B61_D9B0_C2DA_41E1_1988AC7DF9C4",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/d201adb4c5064f238e0cab6349b196dc/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2D34B64_D9B0_C2DA_41E7_7C4C2AD5B8BF"
 ],
 "id": "Container_F2D00B62_D9B0_C2DE_41BA_1D658AAE1025",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2A5D427_D9B0_C6A6_41DB_FA6794253030",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/b05603284ed949168979d2eee1a34ef9/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2BB342C_D9B0_C6AA_41DA_DAEA63EC75B9"
 ],
 "id": "Container_F2A58428_D9B0_C6AA_41D4_E04ADC316FBD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F39E12A2_D9B1_425E_41E4_E69E96B83D64",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/918d84290c6f4073afa713e0e61b689a/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F39DD2B0_D9B1_43BA_41D1_D06514EE8E75"
 ],
 "id": "Container_F39EB2A2_D9B1_425E_41B9_06368F56E1AF",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F56F4091_D9B1_FE7A_41BA_9D3A7D831742",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/25c6f3cdad7449fa9625fda5ce7e06f3/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F56EA094_D9B1_FE7A_41E0_078DA917F2DC"
 ],
 "id": "Container_F56F0091_D9B1_FE7A_41D4_7C46CFC75717",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F2A34267_D9B1_42A6_41CA_8EF2E4E1982E",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/e11421fea1314a7aa490b5fa86c652be/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F2A2226A_D9B1_42AE_41E7_6D0D4E6AD0A4"
 ],
 "id": "Container_F2A28267_D9B1_42A6_41CF_C883E5D5F729",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F34F7D8F_D9B1_4666_41CA_D81347886C99",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/0573c31d57214abaa5582539a6bff18d/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F34E5D93_D9B1_467E_41E2_13B3E61B903E"
 ],
 "id": "Container_F34EBD8F_D9B1_4666_41DF_201523D51349",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F3FB7FE8_D9B0_C1AA_41E4_8C2D252BE92F",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/b87343bd7afa4afaa5e8bce2019f66a8/embed?autospin=1&autostart=1&preload=1",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": true,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "children": [
  "this.HTMLText_F3F9BFF7_D9B0_C1A6_41D7_48B264AEF560"
 ],
 "id": "Container_F3FACFE9_D9B0_C1AA_41E3_F9B4F133ECF0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "WebFrame_F11BD917_D991_4E66_41E1_5BA878AACD9A",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://museumnasional.iheritage-virtual.id/collection/detail/117#",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollEnabled": false,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame115223"
 },
 "height": "99.454%"
},
{
 "id": "Container_F11A1918_D991_4E6A_419C_26901203AE22",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "5%"
},
{
 "children": [
  "this.HTMLText_F11C791A_D991_4E6E_41AE_CFB5C099D875",
  "this.Container_F11C591A_D991_4E6E_41CE_58DA43A7D060"
 ],
 "id": "Container_F11A6919_D991_4E6A_41E0_FE86539BFA5A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "id": "Container_F11E491F_D991_4E66_41D5_3EF031FA62CA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": 40
},
{
 "maxHeight": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "shadowColor": "#000000",
 "class": "Image",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "shadowOpacity": 0,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 30,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 40,
 "paddingTop": 0,
 "height": "34.611%",
 "shadow": true,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image Company"
 },
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "shadowSpread": 1
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "26%",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 5,
 "paddingTop": 0,
 "height": 130,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-2"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-3"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-4"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-5"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-6"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F3BB517D_D9B7_DEAA_41CF_556E7905C2E6",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE KULKUL</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Terletak di sudut jaba sisi pekarangan pura. Fungsinya untuk tempat kulkul yang dibunyikan awal, akhir dan saat tertentu pada upacara.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F27F375B_D9B1_42EE_41E3_801A4F6DF559",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE GONG JABA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Tempat menabuh gamelan gong atau gamelan lainnya yang terletak di bagian jaba sisi..</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2FED407_D9B1_C666_41D8_4CC81D3E2B83",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>RATU NGURAH EBUH</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.09vh;\">Pelinggih yang berfungsi sebagai penjaga pintu masuk ke Sanggah Pamerajan. Sebelum memasuki Pamerajan, setiap individu di sini melakukan persembahyangan dan meminta izin kepada entitas spiritual.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2EB8909_D9B3_4E6A_41BA_1C1CD5B74272",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>ALING-ALING</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Bangunan pembatas antara angkul - angkul (gapura/pintu masuk) dengan pekarangan merajan yang berfungsi sebagai penetralisir dari gangguan negatif baik secara sekala maupun niskala.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F36AC987_D9B3_4E66_41C9_2B93354570D3",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>SUMUR (WISNU)</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Sumber air suci yang diperlukan untuk upacara keagamaan, termasuk penyiraman dan penyucian patung-patung dewa atau benda-benda suci.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F1BE84D7_D9B3_C7E6_419E_2AEE63ED109F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>RATU GEDE GANGGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat persinggahan untuk tamu merajan sebagai manifestasi tuhan lainnya.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F22EB8DF_D9B3_4FE6_41E5_CF72B2F455E2",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PEWAREGAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat yang terletak di Jaba tengah, berfungsi untuk dapur mempersiapkan keperluan sajian upacara di Pura.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F3326EA0_D9B0_C25A_41E8_C99A7E64B665",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE PESANEKAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Sebagai tempat beristirahat Jero Mangku atau pengempon merajan.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F1820D80_D9B1_465A_41CA_2EB90C60C12A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PIYASAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat untuk menyimpan, menyiapkan, dan menyajikan sarana-sarana yang diperlukan dalam upacara keagamaan.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F200642B_D9B1_C6AE_41D7_2CCB1C2F1E41",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BETARA NINI</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pengayatan (pemujaan) ida betara nini (ida batara sri yang memberikan kemakmuran).</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2D24618_D9B1_C26A_4183_71551AB09B6C",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE PEMANGKU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pemangku agama (pinandita) menghaturkan persembahan Yadnya kepada tuhan.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F33175CC_D9B1_41EA_41CD_F15ABF8A49AB",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PELIK SARI KAUH</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Pelinggih Bale Tajuk yang berfungsi untuk menyimpan pratima meraga Dewa.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F47995BA_D9B1_41AE_41D6_7D676D3B2B54",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><U>PELIK SARI KANGIN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Pelinggih yang berada ditengah-tengah juga disebut dengan Bale Pileh atau Bale Tajuk. Fungsinya untuk menyimpan pratima meraga Hyang.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2163779_D9B0_C2AA_41E0_AD5C1B9EE8C2",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA SAKENAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Sakenan.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F387A5B5_D9BF_C1BA_41D7_27351B219547",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA ULUWATU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Uluwatu.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2754A40_D9BF_C2DB_41E4_751E2EA30057",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>MANJANG SAKALUANG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat penghormatan terhadap Mpu Kuturan, seorang tokoh agama penting dalam menyatukan berbagai sekte agama yang ada di Bali menjadi satu paham yang dikenal sebagai Tri Murti.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2C8F2D1_D9BF_43FA_41D8_042E51FDEC93",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PENGAYATAN PURA BATUKARU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pengayatan (pemujaan) Hyang Widhi dalam manifestasinya yang berstana di Pura Batukaru.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F3703BC9_D9B0_C1EA_41C8_DA3B6315EF96",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>TAKSU AGUNG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat untuk memohon keberhasilan untuk semua jenis profesi serta mendekatkan diri ke hadapan Sang Hyang Taksu Agung atau Sang Hyang Adi Taksu.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F3A63965_D9B0_CEDA_41CA_99780AFFE9D7",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE PIASAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat untuk menyimpan, menyiapkan, dan menyajikan sarana-sarana yang diperlukan dalam upacara keagamaan.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2DF47B2_D9B1_C1BE_41CB_20B7A3B655E8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE BANTEN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat untuk menaruh perlengkapan bebantenan untuk upacara Hindu di Bali.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F30962FF_D9B1_43A6_41C4_FBDA348BBBC5",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE PENGRAHUAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat di mana pelaksanaan upacara nedunin Ida Bhatara agar rauh (datang).</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F44567D9_D9B1_41EA_41CA_23341EC94A74",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE GONG</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat menabuh gamelan gong atau gamelan lainnya yang terletak di bagian utama mandala.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F227E62B_D9B0_C2AE_41C1_CD46266D739E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>BALE PELAWATAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat menaruh pratima, barong, Ratu Ayu dan Ratu Gede.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2D34B64_D9B0_C2DA_41E7_7C4C2AD5B8BF",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>KEMULAN</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat para atman leluhur, Dewa Pitara / Dewa Hyang ataupun Bhatra Hyang Guru atau keturunan anak Agung Gede Padang.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2BB342C_D9B0_C6AA_41DA_DAEA63EC75B9",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>HYANG IBU</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat suci yang didedikasikan untuk memuja Ida Batara Anak Agung Gede Padang, yang dianggap sebagai pencipta dan pemrakarsa dari Pemerajan Agung Sakti tersebut.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F39DD2B0_D9B1_43BA_41D1_D06514EE8E75",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>RATU ANOM</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Pelinggih yang didedikasikan khusus untuk memuja Ida Batara Lanang Dawan, sebagai putra dari Ida Batara Sakti.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F56EA094_D9B1_FE7A_41E0_078DA917F2DC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>GEDONG KUNCI</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Pelinggih pokok yang digunakan untuk menyembah Ida Batara Sakti sebagai leluhur Pemerajan Agung Sakti Padangsambian.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F2A2226A_D9B1_42AE_41E7_6D0D4E6AD0A4",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PENGAYATAN KAHYANGAN TIGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat pemujaan tuhan dalam fungsinya sebagai niyasa atau simbol stana Hyang Widhi dalam konsep Tri Murti.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F34E5D93_D9B1_467E_41E2_13B3E61B903E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>MERU TUMPANG TIGA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Tempat singgah atau tempat bersemayam bagi Ida Batara Kawitan, yang merupakan leluhur rohani atau entitas spiritual yang sangat dihormati dalam tradisi agama Hindu di Bali.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_F3F9BFF7_D9B0_C1A6_41D7_48B264AEF560",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "99.749%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "99.849%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.07vh;font-family:'Oswald';\"><B><U>PADMASANA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cc6633;font-family:'Oswald';\"><B>Deskripsi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.21vh;\">Lambang makrokosmos atau alam semesta yang merupakan istana langsung dari Ida Sang Hyang Widhi Wasa atau Tuhan itu sendiri.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 9
},
{
 "id": "HTMLText_F11C791A_D991_4E6E_41AE_CFB5C099D875",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "46%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.16vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C",
  "this.HTMLText_F11E091E_D991_4E66_41DB_9BD949069031"
 ],
 "id": "Container_F11C591A_D991_4E6E_41CE_58DA43A7D060",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "75%"
},
{
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Tour Info"
 },
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "NISTA MANDALA >",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Panorama List"
 },
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "MADYA MANDALA >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Location"
 },
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "UTAMA MANDALA >",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "UTAMA MANDALA > ",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 40,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": 2
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 7,
 "paddingTop": 0,
 "height": 56,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 7,
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "class": "Button",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 9"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "class": "Button",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 9"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "class": "Button",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 9"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "class": "Button",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 9"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "class": "Button",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 9"
 },
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 200,
 "id": "Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "class": "Image",
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_F11E291A_D991_4E6E_41DE_FB6446B5BC1C.jpg",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "id": "HTMLText_F11E091E_D991_4E66_41DB_9BD949069031",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.74vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed_rollover.png",
 "mode": "push",
 "paddingTop": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "cursor": "hand",
 "maxWidth": 101
}],
 "height": "100%",
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false
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
