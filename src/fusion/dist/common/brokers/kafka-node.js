const a0_0x4538=['parse','offset','publish','./abstract.js','message','client','Consumer','producer','kafka-node','maxNum','partition','setOffset','addListener','return\x20/\x22\x20+\x20this\x20+\x20\x22/','StreamFusion\x20HLP\x20for\x20Kafka:\x20','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','apply','Offset','config',',\x20(data)','fetch','Consumer\x20Error:\x20','consumer','Message\x20Error:\x20','offsetOutOfRange','exports','addPublisher','KafkaClient','Connecting\x20to\x20Kafka:\x20','topic','test','kafka','value','HighLevelProducer','log','error'];(function(_0x4333a7,_0x4538db){const _0x281c16=function(_0x3de181){while(--_0x3de181){_0x4333a7['push'](_0x4333a7['shift']());}},_0xeadec5=function(){const _0xe2ab8f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x186b76,_0x27d50a,_0x3089a9,_0x1db8a2){_0x1db8a2=_0x1db8a2||{};let _0x14af5a=_0x27d50a+'='+_0x3089a9,_0x5e21ce=0x0;for(let _0x10c311=0x0,_0x5d2ee4=_0x186b76['length'];_0x10c311<_0x5d2ee4;_0x10c311++){const _0x30cde1=_0x186b76[_0x10c311];_0x14af5a+=';\x20'+_0x30cde1;const _0x133f29=_0x186b76[_0x30cde1];_0x186b76['push'](_0x133f29),_0x5d2ee4=_0x186b76['length'],_0x133f29!==!![]&&(_0x14af5a+='='+_0x133f29);}_0x1db8a2['cookie']=_0x14af5a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x197d85,_0x25ed2e){_0x197d85=_0x197d85||function(_0x369489){return _0x369489;};const _0x409bfe=_0x197d85(new RegExp('(?:^|;\x20)'+_0x25ed2e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2f9468=function(_0x578760,_0x351d9a){_0x578760(++_0x351d9a);};return _0x2f9468(_0x281c16,_0x4538db),_0x409bfe?decodeURIComponent(_0x409bfe[0x1]):undefined;}},_0x49af52=function(){const _0x1ef894=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ef894['test'](_0xe2ab8f['removeCookie']['toString']());};_0xe2ab8f['updateCookie']=_0x49af52;let _0x4a7f57='';const _0x40c997=_0xe2ab8f['updateCookie']();if(!_0x40c997)_0xe2ab8f['setCookie'](['*'],'counter',0x1);else _0x40c997?_0x4a7f57=_0xe2ab8f['getCookie'](null,'counter'):_0xe2ab8f['removeCookie']();};_0xeadec5();}(a0_0x4538,0x17e));const a0_0x281c=function(_0x4333a7,_0x4538db){_0x4333a7=_0x4333a7-0x0;let _0x281c16=a0_0x4538[_0x4333a7];return _0x281c16;};const a0_0x3089a9=function(){let _0x3c9530=!![];return function(_0x2af290,_0x2f43ef){const _0x8ef7ed=_0x3c9530?function(){if(_0x2f43ef){const _0x2a223b=_0x2f43ef[a0_0x281c('0x5')](_0x2af290,arguments);return _0x2f43ef=null,_0x2a223b;}}:function(){};return _0x3c9530=![],_0x8ef7ed;};}(),a0_0x27d50a=a0_0x3089a9(this,function(){const _0x4e4080=function(){const _0x34dafa=_0x4e4080['constructor'](a0_0x281c('0x1'))()['constructor'](a0_0x281c('0x3'));return!_0x34dafa[a0_0x281c('0x13')](a0_0x27d50a);};return _0x4e4080();});a0_0x27d50a();let Broker=require(a0_0x281c('0x1c'));const kafka=require(a0_0x281c('0x21'));class KafkaNodeBroker extends Broker{constructor(_0x3d76ef,_0x106a94,_0x1a1011){super(_0x3d76ef,_0x106a94,_0x1a1011);}[a0_0x281c('0xf')](){console[a0_0x281c('0x17')](a0_0x281c('0x2')+this['topic']);let _0x542da0=kafka[a0_0x281c('0x16')],_0x44874c=new kafka[(a0_0x281c('0x10'))]({'kafkaHost':this[a0_0x281c('0x7')][a0_0x281c('0x14')]});this['producer']=new _0x542da0(_0x44874c);}[a0_0x281c('0x0')](_0x19fd1d){console['log'](a0_0x281c('0x11')+this[a0_0x281c('0x12')]),this[a0_0x281c('0x1f')]=kafka['Consumer'],this[a0_0x281c('0x1e')]=new kafka[(a0_0x281c('0x10'))]({'kafkaHost':this['config'][a0_0x281c('0x14')]}),this['offset']=new kafka[(a0_0x281c('0x6'))](this['client']);let _0x28aea4=this;this[a0_0x281c('0xb')]=new this[(a0_0x281c('0x1f'))](this[a0_0x281c('0x1e')],[{'topic':this['topic'],'partition':0x0}],{'groupId':this['id']}),this['consumer']['on'](a0_0x281c('0x1d'),function(_0x44fa32){try{let _0x260aca=JSON[a0_0x281c('0x19')](_0x44fa32[a0_0x281c('0x15')]);_0x19fd1d(_0x260aca);}catch(_0x2e1869){console['log'](a0_0x281c('0xc'),_0x2e1869['message']);}}),this['consumer']['on']('error',function(_0x59a3e2){console[a0_0x281c('0x17')](a0_0x281c('0xa'),_0x59a3e2['message']);}),this[a0_0x281c('0xb')]['on'](a0_0x281c('0xd'),function(_0xde2773){console[a0_0x281c('0x17')](_0x28aea4['id'],'outOfRange',_0xde2773),_0xde2773[a0_0x281c('0x22')]=0x2,_0x28aea4[a0_0x281c('0x1a')][a0_0x281c('0x9')]([_0xde2773],function(_0x5a65de,_0x2c30c6){if(_0x5a65de)return console[a0_0x281c('0x18')](_0x5a65de);var _0x3a0423=Math['min'](_0x2c30c6[_0xde2773[a0_0x281c('0x12')]][_0xde2773['partition']]);console[a0_0x281c('0x17')](_0x28aea4),_0x28aea4[a0_0x281c('0xb')][a0_0x281c('0x24')](_0xde2773[a0_0x281c('0x12')],_0xde2773[a0_0x281c('0x23')],_0x3a0423);});});}[a0_0x281c('0x1b')](_0x2c0587){this[a0_0x281c('0x20')][a0_0x281c('0x4')]([{'topic':this[a0_0x281c('0x12')],'messages':_0x2c0587}],function(_0x16320f,_0x511ecb){console[a0_0x281c('0x17')]('Publish\x20to\x20Kafka:\x20(err)',_0x16320f,a0_0x281c('0x8'),_0x511ecb);});}}module[a0_0x281c('0xe')]=KafkaNodeBroker;