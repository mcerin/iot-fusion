const a0_0x1b99=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','value','HighLevelProducer','client','offset','Publish\x20to\x20Kafka:\x20(err)','fetch','partition','Message\x20Error:\x20',',\x20(data)','message','publish','Consumer','./abstract.js','apply','consumer','addListener','setOffset','config','error','log','kafka','topic','outOfRange','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Offset','StreamFusion\x20HLP\x20for\x20Kafka:\x20','test','addPublisher','min','KafkaClient','maxNum','constructor','producer','offsetOutOfRange','parse'];(function(_0x2d93b0,_0x1b99dc){const _0x36594f=function(_0x5779cd){while(--_0x5779cd){_0x2d93b0['push'](_0x2d93b0['shift']());}},_0x833504=function(){const _0x3c9479={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2b8fe2,_0x4dfff7,_0x4d591e,_0x1115fb){_0x1115fb=_0x1115fb||{};let _0x1c65b0=_0x4dfff7+'='+_0x4d591e,_0x447b0e=0x0;for(let _0x328d2b=0x0,_0x4499ce=_0x2b8fe2['length'];_0x328d2b<_0x4499ce;_0x328d2b++){const _0x116378=_0x2b8fe2[_0x328d2b];_0x1c65b0+=';\x20'+_0x116378;const _0x287044=_0x2b8fe2[_0x116378];_0x2b8fe2['push'](_0x287044),_0x4499ce=_0x2b8fe2['length'],_0x287044!==!![]&&(_0x1c65b0+='='+_0x287044);}_0x1115fb['cookie']=_0x1c65b0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x20e80c,_0x4a53b2){_0x20e80c=_0x20e80c||function(_0x19b999){return _0x19b999;};const _0x1ead19=_0x20e80c(new RegExp('(?:^|;\x20)'+_0x4a53b2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1bdf1e=function(_0x4f3e93,_0xa4d1fd){_0x4f3e93(++_0xa4d1fd);};return _0x1bdf1e(_0x36594f,_0x1b99dc),_0x1ead19?decodeURIComponent(_0x1ead19[0x1]):undefined;}},_0x3fee8f=function(){const _0x78567b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x78567b['test'](_0x3c9479['removeCookie']['toString']());};_0x3c9479['updateCookie']=_0x3fee8f;let _0x12ec49='';const _0x33ff86=_0x3c9479['updateCookie']();if(!_0x33ff86)_0x3c9479['setCookie'](['*'],'counter',0x1);else _0x33ff86?_0x12ec49=_0x3c9479['getCookie'](null,'counter'):_0x3c9479['removeCookie']();};_0x833504();}(a0_0x1b99,0x123));const a0_0x3659=function(_0x2d93b0,_0x1b99dc){_0x2d93b0=_0x2d93b0-0x0;let _0x36594f=a0_0x1b99[_0x2d93b0];return _0x36594f;};const a0_0x4d591e=function(){let _0x2484d7=!![];return function(_0x5287a1,_0x2bafd2){const _0x1797b6=_0x2484d7?function(){if(_0x2bafd2){const _0x485213=_0x2bafd2[a0_0x3659('0xb')](_0x5287a1,arguments);return _0x2bafd2=null,_0x485213;}}:function(){};return _0x2484d7=![],_0x1797b6;};}(),a0_0x4dfff7=a0_0x4d591e(this,function(){const _0x500601=function(){const _0x4b6e7c=_0x500601[a0_0x3659('0x1d')](a0_0x3659('0x21'))()[a0_0x3659('0x1d')](a0_0x3659('0x15'));return!_0x4b6e7c[a0_0x3659('0x18')](a0_0x4dfff7);};return _0x500601();});a0_0x4dfff7();let Broker=require(a0_0x3659('0xa'));const kafka=require('kafka-node');class KafkaNodeBroker extends Broker{constructor(_0x4b143b,_0x3002ec,_0x4e672b){super(_0x4b143b,_0x3002ec,_0x4e672b);}[a0_0x3659('0x19')](){console[a0_0x3659('0x11')](a0_0x3659('0x17')+this['topic']);let _0x48cc6c=kafka[a0_0x3659('0x23')],_0x215eb6=new kafka[(a0_0x3659('0x1b'))]({'kafkaHost':this['config']['kafka']});this[a0_0x3659('0x1e')]=new _0x48cc6c(_0x215eb6);}[a0_0x3659('0xd')](_0x554856){console[a0_0x3659('0x11')]('Connecting\x20to\x20Kafka:\x20'+this[a0_0x3659('0x13')]),this['Consumer']=kafka[a0_0x3659('0x9')],this['client']=new kafka[(a0_0x3659('0x1b'))]({'kafkaHost':this[a0_0x3659('0xf')][a0_0x3659('0x12')]}),this[a0_0x3659('0x1')]=new kafka[(a0_0x3659('0x16'))](this[a0_0x3659('0x0')]);let _0x2c6ccb=this;this['consumer']=new this[(a0_0x3659('0x9'))](this[a0_0x3659('0x0')],[{'topic':this[a0_0x3659('0x13')],'partition':0x0}],{'groupId':this['id']}),this[a0_0x3659('0xc')]['on'](a0_0x3659('0x7'),function(_0x4bc81e){try{let _0xaccdf1=JSON[a0_0x3659('0x20')](_0x4bc81e[a0_0x3659('0x22')]);_0x554856(_0xaccdf1);}catch(_0x4a6782){console[a0_0x3659('0x11')](a0_0x3659('0x5'),_0x4a6782[a0_0x3659('0x7')]);}}),this[a0_0x3659('0xc')]['on'](a0_0x3659('0x10'),function(_0x126479){console['log']('Consumer\x20Error:\x20',_0x126479[a0_0x3659('0x7')]);}),this[a0_0x3659('0xc')]['on'](a0_0x3659('0x1f'),function(_0x1caf8a){console[a0_0x3659('0x11')](_0x2c6ccb['id'],a0_0x3659('0x14'),_0x1caf8a),_0x1caf8a[a0_0x3659('0x1c')]=0x2,_0x2c6ccb[a0_0x3659('0x1')][a0_0x3659('0x3')]([_0x1caf8a],function(_0x4c1709,_0x558f3b){if(_0x4c1709)return console['error'](_0x4c1709);var _0x43c1f4=Math[a0_0x3659('0x1a')](_0x558f3b[_0x1caf8a['topic']][_0x1caf8a[a0_0x3659('0x4')]]);console[a0_0x3659('0x11')](_0x2c6ccb),_0x2c6ccb[a0_0x3659('0xc')][a0_0x3659('0xe')](_0x1caf8a[a0_0x3659('0x13')],_0x1caf8a[a0_0x3659('0x4')],_0x43c1f4);});});}[a0_0x3659('0x8')](_0x2065f3){this[a0_0x3659('0x1e')]['send']([{'topic':this['topic'],'messages':_0x2065f3}],function(_0x322cca,_0x3698ae){console[a0_0x3659('0x11')](a0_0x3659('0x2'),_0x322cca,a0_0x3659('0x6'),_0x3698ae);});}}module['exports']=KafkaNodeBroker;