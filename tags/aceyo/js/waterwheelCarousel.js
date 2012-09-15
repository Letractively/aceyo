/*
 * Waterwheel Carousel
 * Version 1.3
 * http://www.bkosborne.com
 *
 * Copyright 2011 Brian Osborne
 * Licensed under GPL version 3
 * http://www.gnu.org/licenses/gpl.txt
 * 
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 *
 */
 eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(c($){$.1B.1w=c(6){6=$.2j({},$.1B.1w.2a,6||{});r $(f).1n(c(){d 3={K:$(f).q(".E-1i"),X:$(f).q(".E-1i t").L,1P:$(f).s(),1Q:$(f).u(),V:15,l:[],T:[],W:[],O:[],N:[],Q:[],16:0,1b:g,14:0,G:6.17,2u:15};29();2b(c(){1E();1U();1O()});c v(1k){1H(3.1u);9(!1k&&6.v!==0){3.1u=2q(c(){9(6.v>0){J(g)}j{J(n)}},o.p(6.v))}}c 2k(U){d 1a=(U===1)?15:U-1;r 1a}c 2l(U){d 1a=(U===3.X)?15:U+1;r 1a}c 29(){3.K.q(\'t\').2t()}c 2b(1K){d $1q=3.K.q(\'t\'),1r=0,1X=$1q.L;$1q.1n(c(){$(f).1D(c(){1r+=1;9(1r===1X){1K()}});9(f.2i||$.2s.2r){$(f).2o(\'1D\')}})}c 1E(){3.T[0]=6.2c;3.W[0]=6.2h;3.O[0]=3.K.q(\'t:1G\').s();3.N[0]=3.K.q(\'t:1G\').u();3.Q[0]=(1*6.1v);d i;D(i=1;i<6.x+1;i++){3.T[i]=3.T[i-1]*6.2f;3.W[i]=3.W[i-1]*6.1Y;3.O[i]=3.O[i-1]*6.10;3.N[i]=3.N[i-1]*6.10;3.Q[i]=3.Q[i-1]*6.1v;9(i===6.x){3.O[i+1]=3.O[i]*6.10;3.N[i+1]=3.N[i]*6.10}}3.Q[3.Q.L-1]=0}c 1U(){3.l=3.K.q(\'t\');d i;D(i=0;i<3.l.L;i++){3.l[i]=$(3.l[i])}3.K.1s(\'1R\',\'2n\').q(\'t\').1n(c(i){d y,B;9(6.12==="Y"){y=(3.1P/2)-($(f).s()/2);B=6.1x}j{y=6.1x;B=(3.1Q/2)-($(f).u()/2)}$(f).1s({\'F\':y,\'I\':B,\'2m\':\'2p\',\'1R\':\'2A\',\'z-19\':6.x+2,\'Z\':1}).3({m:0,h:0,s:$(f).s(),1N:$(f).s(),u:$(f).u(),2M:$(f).u(),I:B,F:y,Z:1,19:i}).2L()})}c 1O(){6.w=(6.w===0)?o.2K(3.X/2):6.w;3.16=1;3.l[6.w-1].2g(6.18);6.1C(3.l[6.w-1]);3.V=3.l[6.w-1];d M,A,i;M=1;D(A=6.w-2;A>=0;A--){D(i=0;i<M;i++){1j(3.l[A],g)}M++}M=1;D(A=6.w;A<3.l.L;A++){D(i=0;i<M;i++){1j(3.l[A],n)}M++}}c 1L($7,b){d h=$7.3().m;d 1c=o.p(b);d 1o=3.O[1c];d 1p=3.N[1c];d 1m=o.p($7.3().s-1o);d 1l=o.p($7.3().u-1p);d P=0,13;9(6.12==="Y"){13=1l/2}j{13=1m/2}9((b>-1&&(b<h))||(b<1&&(b>h))){P-=13;P+=3.W[o.p(b)]}j 9((b>-1&&(b>h))||(b<1&&(b<h))){P+=13;P-=3.W[o.p(b)-1]}d C=0;9(o.p(b)<o.p(h)){C=3.T[o.p(b)]}j{C=3.T[o.p(b)-1]}9(b>0||(b===0&&h===1)){9(6.12==="Y"){C+=1m}j{C+=1l}}9(b<h){C=C*-1}d 1d;9(b===0){1d=1}j{1d=3.Q[o.p(b)-1]}d B=$7.3().I;d y=$7.3().F;9(6.12==="Y"){B=$7.3().I+P;y=$7.3().F+C}j{B=$7.3().I+C;y=$7.3().F+P}d 1I=6.x+2-1c;$7.3(\'s\',1o);$7.3(\'u\',1p);$7.3(\'I\',B);$7.3(\'F\',y);$7.3(\'h\',h);$7.3(\'m\',b);$7.3(\'1J\',1I);$7.3(\'Z\',1d)}c 1j($7,k){d h=$7.3(\'m\'),b;9(k===g){b=h-1}j{b=h+1}9(o.p(b)<=6.x+1){3.14++;1L($7,b);9(b===0){6.1V($7)}9(h===0){6.28($7);$7.2I(6.18)}$7.1s(\'z-19\',$7.3().1J);$7.2z({F:$7.3().F,s:$7.3().s,u:$7.3().u,I:$7.3().I,Z:$7.3().Z},3.G,6.1F,c(){2d($7,b,k)})}j 9(o.p(b)>6.x){$7.3(\'h\',h);$7.3(\'m\',b)}}c 2d($7,b,k){9(b===0){3.V=$7;$7.2g(6.18)}9($7.3().h===0){6.27($7)}3.14--;9(3.14===0){3.16-=1;3.1b=g;9(3.16>0){S(k,0)}j{3.G=6.17;9(3.V!==15){6.1C(3.V)}v()}}}c 2x(){d i;D(i=0;i<3.l.L;i++){3.l[i].1k()}}c 22(k){9(3.1b===n){r g}9(k===n&&3.l[0].3().m===0){r g}9(k===g&&3.l[3.X-1].3().m===0){r g}r n}c S(k,R){9(22(k)){3.1b=n;3.14=0;3.16+=R;9(6.1M===n){9(R>1){3.G=6.17/R}3.G=(3.G<20)?20:3.G}j{3.G=6.17}d i;D(i=0;i<3.l.L;i++){d $7=$(3.l[i]);d m=$7.3().m;9(m>=((6.x*-1)-1)&&m<=(6.x)+1){1j($7,k)}j{$7.3(\'h\',m);9(k===n){$7.3(\'m\',m+1)}j{$7.3(\'m\',m-1)}}}}}c J(k){d 1t=3.V.3().19;9((1t===0&&k===n)||(1t===(3.X-1)&&k===g)){1H(3.1u);9(6.1z===\'1S\'){S(!k,3.X-1)}j 9(6.1z===\'2D\'&&6.v!==0){S(!k,1);6.v*=-1}}j{S(k,1)}}$(f).q(\'.E-1i t\').1g("1h",c(){v(n);6.v=0;d 1f=$(f).3().m;d R=o.p(1f);9(1f<0){S(n,R)}j 9(1f>0){S(g,R)}j{6.2e($(f))}});$(f).q(\'.E-1i a\').1g("1h",c(21){d 23=($(f).q(\'t\').s()===$(f).q(\'t\').3().1N)?n:g;9(6.1A===1||(6.1A===2&&!23)){21.1e();r g}});$(f).q(\'.E-26 .E-2F\').1g(\'1h\',c(e){J(n);e.1e();r g});$(f).q(\'.E-26 .E-2G\').1g(\'1h\',c(e){J(g);e.1e();r g});9(6.1W){$(2C).2B(c(e){9(e.H===25||e.H===24){J(n)}j 9(e.H===1Z||e.H===1y){J(g)}9(6.1T&&(e.H===25||e.H===24||e.H===1Z||e.H===1y)){e.1e();r g}})}})};$.1B.1w.2a={w:0,2c:2w,2f:0.5,2h:2y,1Y:0.2H,10:0.8,1v:0.5,1x:1y,x:4,17:2v,1F:\'2J\',1M:n,1A:2,v:0,12:\'Y\',18:\'2N\',1W:g,1T:n,1z:\'1S\',1V:$.11,1C:$.11,2e:$.11,28:$.11,27:$.11}})(2E);',62,174,'|||data|||options|item||if||newPosition|function|var||this|false|oldPosition||else|direction|items|currentPosition|true|Math|abs|find|return|width|img|height|autoPlay|startingItem|flankingItems|newLeft||itemNum|newTop|itemSeparation|for|carousel|left|currentSpeed|which|top|moveOnce|itemsContainer|length|counter|itemHeights|itemWidths|waveSeparation|itemOpacities|rotations|rotateCarousel|itemDistances|num|currentCenterItem|waveDistances|totalItems|horizontal|opacity|itemDecreaseFactor|noop|orientation|centeringNumber|itemsAnimating|null|carouselRotationsLeft|speed|activeClassName|index|newNum|currentlyMoving|newDistanceFromCenter|newOpacity|preventDefault|itemPosition|live|click|images|moveItem|stop|heightDifference|widthDifference|each|newWidth|newHeight|imageElements|loadedImages|css|currentCenterIndex|autoPlayTimer|opacityDecreaseFactor|waterwheelCarousel|centerOffset|40|edgeReaction|linkHandling|fn|movedToCenter|load|setupDistanceArrays|animationEasing|first|clearTimeout|newDepth|depth|callback|performCalculations|quickerForFurther|owidth|setupStarterRotation|containerWidth|containerHeight|position|reset|keyboardNavOverride|setupCarousel|movingToCenter|keyboardNav|totalImages|waveSeparationFactor|39|100|event|rotationAllowed|isCenter|38|37|controls|movedFromCenter|movingFromCenter|beforeLoaded|defaults|preload|startingItemSeparation|itemAnimationComplete|clickedCenter|itemSeparationFactor|addClass|startingWaveSeparation|complete|extend|getPreviousNum|getNextNum|visibility|relative|trigger|visible|setTimeout|msie|browser|hide|intervalTimer|300|150|stopAnimations|30|animate|absolute|keydown|document|reverse|jQuery|prev|next|75|removeClass|linear|round|show|oheight|active'.split('|'),0,{}))