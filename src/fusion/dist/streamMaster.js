const a0_0xb784=['exports','bind','fusion','log','command','stringify','options','./common/utils/utils.js','apply','target','broker','config','new','type','version','return\x20/\x22\x20+\x20this\x20+\x20\x22/','topic','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','addListener','connection','1.0.0','constructor','composeMessage','status','addPublisher','./common/brokers/brokers.js','client_id','kafka','delete','messageCb','parse','./streamFusion.js','identify'];(function(_0x1e0599,_0xb784ed){const _0x441ef4=function(_0xb99da7){while(--_0xb99da7){_0x1e0599['push'](_0x1e0599['shift']());}},_0x3989cf=function(){const _0x24e7f8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1432db,_0x4f8c25,_0x40de6e,_0x40870f){_0x40870f=_0x40870f||{};let _0x3c39a7=_0x4f8c25+'='+_0x40de6e,_0x2fb627=0x0;for(let _0x3608ce=0x0,_0x1c72a8=_0x1432db['length'];_0x3608ce<_0x1c72a8;_0x3608ce++){const _0x1bd5cc=_0x1432db[_0x3608ce];_0x3c39a7+=';\x20'+_0x1bd5cc;const _0x5686c9=_0x1432db[_0x1bd5cc];_0x1432db['push'](_0x5686c9),_0x1c72a8=_0x1432db['length'],_0x5686c9!==!![]&&(_0x3c39a7+='='+_0x5686c9);}_0x40870f['cookie']=_0x3c39a7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e33f8,_0x2c4e33){_0x3e33f8=_0x3e33f8||function(_0x110fa7){return _0x110fa7;};const _0x687d05=_0x3e33f8(new RegExp('(?:^|;\x20)'+_0x2c4e33['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4f4d8a=function(_0xd525ff,_0x3ecefb){_0xd525ff(++_0x3ecefb);};return _0x4f4d8a(_0x441ef4,_0xb784ed),_0x687d05?decodeURIComponent(_0x687d05[0x1]):undefined;}},_0x369785=function(){const _0x29dae7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x29dae7['test'](_0x24e7f8['removeCookie']['toString']());};_0x24e7f8['updateCookie']=_0x369785;let _0x239d79='';const _0x1f4090=_0x24e7f8['updateCookie']();if(!_0x1f4090)_0x24e7f8['setCookie'](['*'],'counter',0x1);else _0x1f4090?_0x239d79=_0x24e7f8['getCookie'](null,'counter'):_0x24e7f8['removeCookie']();};_0x3989cf();}(a0_0xb784,0xe2));const a0_0x441e=function(_0x1e0599,_0xb784ed){_0x1e0599=_0x1e0599-0x0;let _0x441ef4=a0_0xb784[_0x1e0599];return _0x441ef4;};const a0_0x40de6e=function(){let _0x461bbf=!![];return function(_0x5aa159,_0x2064af){const _0x3194fd=_0x461bbf?function(){if(_0x2064af){const _0x55fb1c=_0x2064af[a0_0x441e('0xd')](_0x5aa159,arguments);return _0x2064af=null,_0x55fb1c;}}:function(){};return _0x461bbf=![],_0x3194fd;};}(),a0_0x4f8c25=a0_0x40de6e(this,function(){const _0x1b4be9=function(){const _0x2b5a91=_0x1b4be9[a0_0x441e('0x1a')](a0_0x441e('0x14'))()[a0_0x441e('0x1a')](a0_0x441e('0x16'));return!_0x2b5a91['test'](a0_0x4f8c25);};return _0x1b4be9();});a0_0x4f8c25();const {AbstractBroker,KafkaNodeBroker,MQTTBroker,KafkaRDBroker}=require(a0_0x441e('0x1e')),streamFusion=require(a0_0x441e('0x3')),Utils=require(a0_0x441e('0xc'));class streamMaster{constructor(_0x31e955){let _0x53a81d=this;this['config']=JSON[a0_0x441e('0x2')](JSON[a0_0x441e('0xa')](_0x31e955)),this[a0_0x441e('0x7')]=[],this[a0_0x441e('0x15')]='fusionAdmin',this[a0_0x441e('0x13')]=a0_0x441e('0x19'),this[a0_0x441e('0x1f')]=Utils['uuidv4']();if(a0_0x441e('0x18')in _0x31e955){if(_0x31e955['connection'][a0_0x441e('0x12')]==a0_0x441e('0x20'))this[a0_0x441e('0xf')]=new KafkaNodeBroker(this[a0_0x441e('0x10')]['connection'][a0_0x441e('0xb')],this[a0_0x441e('0x15')],this[a0_0x441e('0x1f')]),this[a0_0x441e('0xf')][a0_0x441e('0x1d')](),this['broker'][a0_0x441e('0x17')](_0x53a81d[a0_0x441e('0x1')][a0_0x441e('0x6')](_0x53a81d));else _0x31e955[a0_0x441e('0x18')][a0_0x441e('0x12')]=='mqtt'?(this[a0_0x441e('0xf')]=new MQTTBroker(this[a0_0x441e('0x10')][a0_0x441e('0x18')][a0_0x441e('0xb')],this[a0_0x441e('0x15')],this[a0_0x441e('0x1f')]),this[a0_0x441e('0xf')][a0_0x441e('0x1d')](),this[a0_0x441e('0xf')][a0_0x441e('0x17')](_0x53a81d[a0_0x441e('0x1')]['bind'](_0x53a81d))):this[a0_0x441e('0xf')]=new AbstractBroker(this['config'][a0_0x441e('0x18')]['options'],this[a0_0x441e('0x15')],this['client_id']);}}['composeMessage'](_0x4b4150){let _0x5b3bb3=_0x4b4150;return _0x5b3bb3['id']=this[a0_0x441e('0x1f')],_0x5b3bb3[a0_0x441e('0x13')]=this[a0_0x441e('0x13')],JSON[a0_0x441e('0xa')](_0x5b3bb3);}[a0_0x441e('0x1')](_0x36b363){let _0x552908=!![];if(a0_0x441e('0xe')in _0x36b363){if(_0x36b363[a0_0x441e('0xe')]!=this[a0_0x441e('0x1f')])_0x552908=![];};if(_0x552908==![])return;if(a0_0x441e('0x9')in _0x36b363){if(_0x36b363[a0_0x441e('0x9')]==a0_0x441e('0x4'))this[a0_0x441e('0xf')]['publish'](this[a0_0x441e('0x1b')]({}));else{if(_0x36b363[a0_0x441e('0x9')]==a0_0x441e('0x1c')){}else{if(_0x36b363[a0_0x441e('0x9')]==a0_0x441e('0x11')){}else{if(_0x36b363[a0_0x441e('0x9')]==a0_0x441e('0x0')){}}}}}console[a0_0x441e('0x8')]('Received:',_0x36b363);}}module[a0_0x441e('0x5')]=streamMaster;