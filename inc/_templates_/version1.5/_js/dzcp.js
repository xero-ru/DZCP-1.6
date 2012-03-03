// GLOBAL VARS
  var doc = document, ie4 = document.all, opera = window.opera;
  var innerLayer, layer, x, y, doWheel = false, offsetX = 15, offsetY = 5;
  var tickerc = 0, mTimer = new Array(), tickerTo = new Array(), tickerSpeed = new Array();
  var shoutInterval = 15000; // refresh interval of the shoutbox in ms
  var teamspeakInterval = 15000; // refresh interval of the teamspeak viewer in ms

// DZCP JAVASCRIPT LIBARY
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 t={2W:9(){k.1w.C=\'2X-2Y-1.5\';$(\'1w\').2Z(\'<H C="21"></H>\');o=$(\'#21\')[0];k.1w.30=t.22;j($(\'#1x\')[0])B.1y("$(\'#1x\').R(\'../p/K.D?i=23\');",31);j($(\'#24\')[0])B.1y("$(\'#24\').R(\'../p/K.D?i=25\');",33);t.1z()},1z:9(){$(\'a[26^=W]\').35({36:S,37:\'#38\',39:0.8,3a:\'../p/E/W/27.T\',3b:\'../p/E/W/3c.T\',3d:\'../p/E/W/3e.T\',3f:\'../p/E/W/3g.T\',3h:3i,3j:(28==\'29\'?\'3k\':\'3l\'),3m:(28==\'29\'?\'3n\':\'3o\')})},3p:9(a,b,c){j(a.2a){a.2a(b,c,L);u S}F j(a.2b){7 r=a.2b(\'3q\'+b,c);u r}F u L},22:9(e){X=$(\'#2c\')[0];j(1A(o)==\'16\'){7 a=k.2d;7 b=k.3r&&!k.2d;7 c=5;7 d=-15;x=(b)?e.3s-c:B.2e.3t+k.Y.2f-c;y=(b)?e.3u-d:B.2e.3v+k.Y.2g-d;j(X){7 f=((a)?X.1f:X.1B)-3;7 g=(a)?X.1g:X.1C}F{7 f=((a)?o.1B:o.1f)-3;7 g=(a)?o.1C:o.1g}7 h=(b)?(B.3w)+B.3x-12:k.Y.1B+k.Y.2f;7 i=(b)?(B.3y)+B.3z:k.Y.1C+k.Y.2g;o.l.18=((x+1h+f>=h-1h)?x-(f+1h):x+1h)+\'19\';o.l.1a=(y+3A)+\'19\'}u S},Z:9(a,x,y){a=(a.3B(\'1i=\')==-1)?a:\'../Z.D?\'+a;x=M(x);y=M(y)+50;Z=B.2h(a,\'3C\',"N=1,U=1,1D=0,3D=0,3E=1,3F=0");Z.3G(x,y);Z.3H((2i.N-x)/2,(2i.U-y)/2);Z.3I()},3J:9(a){$(9(){$(\'#3K\'+a).R(\'../p/K.D?i=3L&3M=\'+a)})},3N:9(){$(9(){$(\'#3O\').R(\'../p/K.D?i=25\')})},3P:9(){$.1j(\'../3Q/1k.D?K\',$(\'#3R\').1l(),9(a){j(a)3S(a.1E(/  /g,\' \'));$(\'#1x\').R(\'../p/K.D?i=23\');j(!a)$(\'#3T\').I(\'w\',\'\')});u L},3U:9(){7 a=k.2j.2k.2l[k.2j.2k.2m].w;B.1D.1F=a},1G:9(){7 a=k.2n.1G.2l[k.2n.1G.2m].w;j(a!=\'3V\')t.2o(a)},2o:9(a,n){j(n==1)B.2h(a);F B.1D.1F=a},3W:9(a,b,c){j(a.w.O>c)a.w=a.w.3X(0,c);F b.w=c-a.w.O},2p:9(a){j(1A(o)==\'16\'){o.1m=\'<H C="1H">\'+\'  <11 1b="2q" 1I="0" l="U:2r%">\'+\'    <1n>\'+\'      <1o l="3Y-2s:3Z">\'+\'        <H C="2c">\'+\'          <11 1b="2q" 1I="0">\'+a+\'</11>\'+\'        </H>\'+\'      </1o>\'+\'    </1n>\'+\'  </11>\'+\'</H>\';j(40&&!41){o.1m+=\'<2t C="42" 43="0" N="\'+$(\'#1H\')[0].1f+\'" U="\'+$(\'#1H\')[0].1g+\'"></2t>\';o.l.13=\'2u\'}F o.l.13=\'2u\'}},1J:9(){j(1A(o)==\'16\'){o.1m=\'\';o.l.13=\'1K\'}},44:9(a){j(a==0)u;F{j($(\'#1L\'+a).1c(\'13\')==\'1K\'){$(\'#1L\'+a).1c(\'13\',\'\');$(\'#1i\'+a).I(\'1p\',\'../p/E/45.T\')}F{$(\'#1L\'+a).1c(\'13\',\'1K\');$(\'#1i\'+a).I(\'1p\',\'../p/E/46.T\')}}},47:9(){J(7 i=0;i<k.E.O;i++){7 d=k.E[i];j(d.2v==\'48\'){7 a=d.N;7 b=d.U;j(1q!=0&&a>1q){d.N=1q;d.U=2w.49(b*(1q/a));j(!t.2x(d)){7 c=k.1M("4a");7 e=k.1M("a");c.1r(k.1M("4b"));c.1N(\'1b\',\'2y\');c.1r(k.4c(\'4d 2y 4e \'+d.N+\'x\'+d.U+\' 19\'));e.1N(\'1F\',d.1p);e.1N(\'26\',\'W\');e.1r(d.4f(S));d.1s.1r(c);d.1s.4g(e,d);t.1z()}}}}},2x:9(a){1O{a=a.1s;j(a.1P==\'A\')u S}4h(a.1P!=\'4i\'&&a.1P!=\'4j\');u L},4k:9(m,y){$(\'#4l\').R(\'../p/K.D?i=4m&4n=\'+m+\'&4o=\'+y)},4p:9(a){2z(1Q[1]);$(\'#4q\').R(\'../p/K.D?i=2A&4r=\'+a,t.2B(\'2A\',\'h\',60))},4s:9(b){t.1R(\'4t\');$.1j(\'../2C/1k.D?2D=1O&K=1&2E=4u&C=\'+b,$(\'#4v\').1l(),9(a){$(\'#4w\').14(a)});u L},4x:9(b){t.1R(\'4y\');$.1j(\'../2C/1k.D?2D=1O&4z=1&2E=4A&C=\'+b,$(\'#4B\').1l(),9(a){$(\'#4C\').14(a)});u L},4D:9(b){7 c=k.4E("4F");J(7 i=0;i<c.O;i++){7 d=c[i].2v;7 e=c[i].C;j(d=="4G"||d=="4H"||d=="4I"){7 f=4J.4K(e);$(\'#\'+e).I(\'w\',f.4L().1m)}}$(\'#2F\').14(\'<H l="N:2r%;4M-2s:4N">\'+\' <1i 1p="../p/E/4O/27.T" 4P="" />\'+\'</H>\');7 g=4Q;7 h=(b==\'4R\')?\'&4S=\'+$(\'#4T\').I(\'w\')+\'&4U=\'+$(\'#4V\').I(\'w\')+\'&4W=\'+$(\'#4X\').I(\'w\')+\'&4Y=\'+$(\'#4Z\').I(\'w\'):\'\';$.1j(g,$(\'#\'+b).1l()+h,9(a){$(\'#2F\').14(a)})},52:9(a){a=a.1E(/\\+/g,\' \');a=a.1E(/53/g,\'�\');u 54(a+\'?\')},55:9(){$(\'#56\').I(\'2G\',L)},57:9(){J(7 i=0;i<k.2H[\'2I\'].2J.O;i++){7 a=k.2H[\'2I\'].2J[i];j(a.C.58(/59/g))a.2G=L}},5a:9(f){G=q 5b($("#5c")[0]);G.1S(q 5d());G.1S(q 2K());9 5e(a,b,c){7 d=q 5f();j(c==1)d.2L=\'../p/E/5g.2M\';F d.2L=\'../p/E/5h.2M\';d.5i=q 5j(20,34);d.5k=q 2N(10,32);d.5l=q 2N(10,2);7 e=q 5m(a,d);1T.1U(e,"5n",9(){t.2p(b)});1T.1U(e,"5o",9(){t.1J()});1T.1U(e,"5p",9(){t.1J();G.5q(e.5r(),5)});G.5s(e)}9 5t(a){7 s=\'\';j(a<0)s+="2O";F s+="2P";j(s=="2O")G.5u();j(s=="2P")G.5v()}7 g=G.5w();J(7 i=0;i<g.O;i++){g[i].5x=9(){u 4};g[i].5y=9(){u 17}}G.5z(q 5A(51.5B,12.5C),6);q 5D(G);G.1S(q 2K());5E(f)},1R:9(a){1t=(a)?a:\'5F\';$(\'#\'+1t).I("5G",S);$(\'#\'+1t).1c(\'5H\',\'#5I\');$(\'#\'+1t).1c(\'5J\',\'5K\');u S},2B:9(a,b,c){1V[P]=(b==\'h\'||b==\'v\')?b:\'v\';2Q[P]=(M(c)<=10)?10:M(c);7 d=$(\'#\'+a).14();7 e=\'  <H C="2R\'+P+\'" 1b="2R" l="5L:5M;18:0;z-1k:1">\';e+=\'    <11 C="2S\'+P+\'" 1b="5N"  5O="0" 1I="0">\';e+=\'      <1n>\';e+=\'        <1o 5P="2z(1Q[\'+P+\'])" 5Q="t.1W(\'+P+\')">\';J(7 i=0;i<10;i++)e+=d;e+=\'        </1o>\';e+=\'      </1n>\';e+=\'    </11>\';e+=\'  </H>\';$(\'#\'+a).14(e);B.5R("t.1W("+P+");",5S);P++},1W:9(a){1u=$(\'#2S\'+a)[0];1X=1u.1s;2T=(1V[a]==\'h\')?1u.1f:1u.1g;1Y=(2w.5T(2T/2)*2)+2;1X.l.N=1Y;1Q[a]=1y("t.2U(\'"+1X.C+"\', "+1Y+", "+a+");",2Q[a])},2U:9(a,b,c){7 d=$(\'#\'+a)[0];j(1V[c]==\'h\')d.l.18=(M(d.l.18)<=(0-(b/2)+2))?0:M(d.l.18)-1+\'19\';F d.l.1a=(d.l.1a==\'\'||(M(d.l.1a)<(0-(b/2)+6)))?0:M(d.l.1a)-1+\'19\'},5U:9(){7 a=q 1v();a.1d=q 1v();a.V=q 1v();a.1e=q 1v();7 b=q 5V(\'5W|L\',\'5X|5Y\',\'5Z|61\',\'62|63:64-65-66-67-68\',\'69|6a/x-6b-6c\');J(7 i=0;i<Q.O;i=i+2){a.1e[Q[i]]=Q[i+1];a.1d[Q[i]]=a.V[Q[i]]=Q[i+1];a.V[Q[i]]=Q[i+1]}J(7 i=0;i<b.O;i++){7 s=b[i].6d(\'|\');j(!a.V[s[0]]){a.1e[s[0]]=s[1];a.1d[s[0]]=s[1];a.V[s[0]]=s[1]}}7 c=\'<16 \';J(7 i 1Z a.1e)c+=i+\'="\'+a.1e[i]+\'" \';c+=\'>\';J(7 i 1Z a.V)c+=\'<6e 6f="\'+i+\'" w="\'+a.V[i]+\'" /> \';c+=\'<2V \';J(7 i 1Z a.1d)c+=i+\'="\'+a.1d[i]+\'" \';c+=\' ></2V></16>\';k.6g(c)}}',62,389,'|||||||var||function||||||||||if|doc|style|||layer|inc|new|||DZCP|return||value|||||window|id|php|images|else|map|div|attr|for|ajax|false|parseInt|width|length|tickerc|arguments|load|true|gif|height|params|lightbox|innerLayer|documentElement|popup||table||display|html||object||left|px|top|class|css|embedAttrs|objAttrs|offsetWidth|offsetHeight|offsetX|img|post|index|serialize|innerHTML|tr|td|src|maxW|appendChild|parentNode|submitID|tableObj|Object|body|navShout|setInterval|initLightbox|typeof|clientWidth|clientHeight|location|replace|href|tempswitch|hDiv|cellspacing|hideInfo|none|more|createElement|setAttribute|do|nodeName|mTimer|submitButton|addControl|GEvent|addListener|tickerTo|startTickerDiv|obj|newWidth|in||infoDiv|trackMouse|shoutbox|navTeamspeakContent|teamspeak|rel|loading|lng|de|addEventListener|attachEvent|infoInnerLayer|all|event|scrollLeft|scrollTop|open|screen|formChange|changeme|options|selectedIndex|form|goTo|showInfo|hperc|100|align|iframe|block|className|Math|linkedImage|resized|clearTimeout|teams|initTicker|votes|action|what|previewDIV|checked|forms|search|elements|GMapTypeControl|image|png|GPoint|down|up|tickerSpeed|scrollDiv|scrollTable|objWidth|moveDiv|embed|init|dzcp|engine|append|onmousemove|shoutInterval||teamspeakInterval||lightBox|fixedNavigation|overlayBgColor|000|overlayOpacity|imageLoading|imageBtnClose|close|imageBtnPrev|prevlabel|imageBtnNext|nextlabel|containerResizeSpeed|350|txtImage|Bild|Image|txtOf|von|of|addEvent|on|getElementById|pageX|clientX|pageY|clientY|innerWidth|pageXOffset|innerHeight|pageYOffset|offsetY|indexOf|Popup|scrollbars|resizable|status|resizeTo|moveTo|focus|initGameServer|navGameServer_|server|serverID|initTeamspeakServer|navTeamspeakServer|shoutSubmit|shout|shoutForm|alert|shouteintrag|switchuser|lazy|maxlength|substring|vertical|middle|ie4|opera|ieFix|frameborder|toggle|collapse|expand|resizeImages|content|round|span|br|createTextNode|auto|to|cloneNode|replaceChild|while|TD|BODY|calSwitch|navKalender|kalender|month|year|teamSwitch|navTeam|tID|ajaxVote|contentSubmitVote|vote|navAjaxVote|navVote|ajaxFVote|contentSubmitFVote|fajax|fvote|navAjaxFVote|navFVote|ajaxPreview|getElementsByTagName|textarea|editorStyle|editorStyleWord|editorStyleNewsletter|tinyMCE|getInstanceById|getBody|text|center|admin|alt|prevURL|cwForm|s1|screen1|s2|screen2|s3|screen3|s4|screen4|||del|oe|confirm|hideForumFirst|allkat|hideForumAll|match|k_|googleAPI|GMap2|memberMap|GLargeMapControl|initMember|GIcon|mappin_team|mappin|iconSize|GSize|iconAnchor|infoWindowAnchor|GMarker|mouseover|mouseout|click|showMapBlowup|getPoint|addOverlay|handle|zoomOut|zoomIn|getMapTypes|getMinimumResolution|getMaximumResolution|setCenter|GLatLng|200000|50000|GKeyboardHandler|eval|contentSubmit|disabled|color|909090|cursor|default|position|relative|scrolltable|cellpadding|onmouseover|onmouseout|setTimeout|1500|floor|addFlash|Array|menu|quality|high|wmode||transparent|classid|clsid|d27cdb6e|ae6d|11cf|96b8|444553540000|type|application|shockwave|flash|split|param|name|write'.split('|'),0,{}))

// load global events
  $(document).ready(function() {
    DZCP.init();
    DZCP.resizeImages();
  });