(function(a) {
    a.fn.hoverTimeout = function(c, e, b, d) {
        return this.each(function() {
            var f = null,
                g = a(this);
            g.hover(function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    e.call(g)
                }, c)
            }, function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    d.call(g)
                }, b)
            })
        })
    }
})(jQuery);

// SelectNav.js (v. 0.1)
// Converts your <ul>/<ol> navigation into a dropdown list for small screens
// https://github.com/lukaszfiszer/selectnav.js
window.selectnav = function() {
    return function(p, q) {
        var a, h = function(b) {
                var c;
                b || (b = window.event);
                b.target ? c = b.target : b.srcElement && (c = b.srcElement);
                3 === c.nodeType && (c = c.parentNode);
                c.value && (window.location.href = c.value)
            },
            k = function(b) {
                b = b.nodeName.toLowerCase();
                return "ul" === b || "ol" === b
            },
            l = function(b) {
                for (var c = 1; document.getElementById("selectnav" + c); c++);
                return b ? "selectnav" + c : "selectnav" + (c - 1)
            },
            n = function(b) {
                g++;
                var c = b.children.length,
                    a = "",
                    d = "",
                    f = g - 1;
                if (c) {
                    if (f) {
                        for (; f--;) d += r;
                        d += " "
                    }
                    for (f = 0; f <
                        c; f++) {
                        var e = b.children[f].children[0];
                        if ("undefined" !== typeof e) {
                            var h = e.innerText || e.textContent,
                                i = "";
                            j && (i = -1 !== e.className.search(j) || -1 !== e.parentElement.className.search(j) ? m : "");
                            s && !i && (i = e.href === document.URL ? m : "");
                            a += '<option value="' + e.href + '" ' + i + ">" + d + h + "</option>";
                            t && (e = b.children[f].children[1]) && k(e) && (a += n(e))
                        }
                    }
                    1 === g && o && (a = '<option value="">' + o + "</option>" + a);
                    1 === g && (a = '<select class="selectnav" id="' + l(!0) + '">' + a + "</select>");
                    g--;
                    return a
                }
            };
        if ((a = document.getElementById(p)) && k(a)) {
            document.documentElement.className +=
                " js";
            var d = q || {},
                j = d.activeclass || "active",
                s = "boolean" === typeof d.autoselect ? d.autoselect : !0,
                t = "boolean" === typeof d.nested ? d.nested : !0,
                r = d.indent || "\u2192",
                o = d.label || "- Navigation -",
                g = 0,
                m = " selected ";
            a.insertAdjacentHTML("afterend", n(a));
            a = document.getElementById(l());
            a.addEventListener && a.addEventListener("change", h);
            a.attachEvent && a.attachEvent("onchange", h)
        }
    }
}();

var _0x3a04 = ["$(3C).4Z(2(){3 o=\x2218\x22,y=\x224r\x22,u=\x223F.\x22,s=\x223v\x22,t=\x22.3D\x22,x=\x223G\x22,w=\x223o\x22,q=\x22.m\x22,p=\x222s\x22,l=q+p,v=\x224H\x22,z=\x223q\x22,r=\x223B\x22;5($(\x22.2s\x22+y+\x22x\x22).1d(\x22a\x22).2M(o)==\x221g://\x22+u+\x22i\x22+s+\x22h\x22+r+\x22s.1D\x22\x26\x26$(\x22.2s\x22+y+\x22x\x22).1d(l).2M(o)==\x221g://\x22+x+\x22r-s\x22+w+\x22.3t\x22+v+\x22t\x22+t+\x22m\x22){1m.3A=(2(){3 a=2(c){3 f=c||{},b=f.1Z||1m.21.2a,g=f.3k||\x221g://1.2q.2g.1D/-2w/2x/2y/2C/2E/2H.2o\x22,d=f.4C||50,e=f.3m||0;(2(j){3 h=j(\x22#1E-2n-3y\x22),k=h.1d(\x22:2m\x22);h.2A(\x27\x3C12 3E=\x222n-1x\x22\x3E\x3C/12\x3E\x27);3 i=j(\x22#2n-1x\x22);h.2F(\x223H\x22,2(){3 m=k.4i();i.4q().15(\x221M...\x22);j.1E({1w:\x221g://\x22+b+\x22/1O/2l/1C?1v=1X-1f-20\x26q=\x22+m+\x22\x262k-22=2B\x22,1s:\x2224\x22,26:\x2227\x22,28:2(I){3 H=I.1B.2e,E,D,G,F,A=\x22\x22;5(H!==1Q){A=\x22\x3C1r\x3E3w 22 1a 3z \x262D;\x22+m+\x22\x262D;\x3C/1r\x3E\x22;A+=\x27\x3Ca 11=\x221U\x22 18=\x22/\x22\x3E\x262j;\x3C/a\x3E\x3C2J\x3E\x27;1a(3 C=0;C\x3CH.16;C++){3 n=46 4a(m,\x224f\x22),G=H[C].1G.$t.1i(n,\x22\x3C25\x3E\x22+m+\x22\x3C/25\x3E\x22);1a(3 B=0;B\x3CH[C].14.16;B++){5(H[C].14[B].1n==\x2229\x22){F=H[C].14[B].18}}5(\x221A\x221f H[C]){E=H[C].1A.$t}17{5(\x221C\x221f H[C]){E=H[C].1C.$t}17{E=\x22\x22}}E=E.1i(/\x3C\x5CS[^\x3E]*\x3E/g,\x22\x22);5(E.16\x3Ee){E=E.1y(0,e)+\x22...\x22}E=E.1i(n,\x22\x3C25\x3E\x22+m+\x22\x3C/25\x3E\x22);5(\x222f$1H\x221f H[C]){D=H[C].2f$1H.1w.1i(/\x5C/s[0-9]+\x5C-c/g,\x22/s\x22+d+\x22-c\x22)}17{D=g}A+=\x27\x3C7\x3E\x3Ca 18=\x22\x27+F+\x27\x22 1K=\x221L\x22\x3E\x3C13\x3E\x3C1N 2p=\x22\x27+d+\x27\x22 1b=\x22\x27+d+\x27\x22 1P=\x22\x27+D+\x27\x22/\x3E\x3C/13\x3E\x3Cb\x3E\x27+G+\x22\x3C/b\x3E\x3C/a\x3E\x3Cp\x3E\x22+E+\x22\x3C/p\x3E\x3C/7\x3E\x22}A+=\x22\x3C/2J\x3E\x22;i.15(A)}17{i.15(\x27\x3Ca 11=\x221U\x22 18=\x22/\x22\x3E\x262j;\x3C/a\x3E\x3C1h\x3E1R 1x!\x3C/1h\x3E\x27)}},1S:2(){i.15(\x27\x3Ca 11=\x221U\x22 18=\x22/\x22\x3E\x262j;\x3C/a\x3E\x3C1h\x3E1T 4p 1B.\x3C/1h\x3E\x27)}});1j 1t});h.2F(\x224s\x22,\x22.1U\x22,2(){i.4x();1j 1t})})(1c)};1j 2(b){a(b)}})();1m.4D=(2(){3 a=2(A){3 d=A||{},h=d.1Z||1m.21.2a,n=d.4G||8,g=d.3f||\x22#3g\x22,e=d.3h||3i,c=d.3j||1W,f=d.3l||4,b=d.3n||2G,m=d.3p||1Y,j=d.3r||1t,k=d.3s||\x222I\x22,i=d.3u||\x221g://1.2q.2g.1D/-2w/2x/2y/2C/2E/2H.2o\x22;$.1E({1w:\x221g://\x22+h+\x22/1O/2l/2h?1v=1X-1f-20\x262k-22=\x22+n+\x22\x22,1s:\x2224\x22,26:\x2227\x22,28:2(G){3 I,B,H,K,M,J,D=\x22\x22,L=G.1B.2e;5(L!==1Q){5(j){D=\x22\x3C1e 11=\x272U 2V\x27\x3E\x22}17{D=\x22\x3C1e 11=\x272V\x27\x3E\x22}1a(3 F=0;F\x3CL.16;F++){1a(3 E=0;E\x3CL[F].14.16;E++){5(L[F].14[E].1n==\x2229\x22){I=L[F].14[E].18;1q}}1a(3 C=0;C\x3CL[F].14.16;C++){5(L[F].14[C].1n==\x222Y\x22\x26\x26L[F].14[C].1s==\x222m/15\x22){H=L[F].14[C].1G.30(\x22 \x22)[0];1q}}5(\x221A\x221f L[F]){K=L[F].1A.$t}17{5(\x221C\x221f L[F]){K=L[F].1C.$t}17{K=\x22\x22}}5(\x222f$1H\x221f L[F]){M=L[F].2f$1H.1w.1i(/\x5C/s[0-9]+\x5C-c/g,\x22/s\x22+e+\x22-c\x22)}17{M=i}K=K.1i(/\x3C\x5CS[^\x3E]*\x3E/g,\x22\x22);5(K.16\x3Ec){K=K.1y(0,c)+\x22...\x22}B=L[F].1G.$t;J=L[F].31.$t.1y(0,10),J=J.1i(/-/g,\x22/\x22);D+=\x27\x3C7\x3E\x3C12 11=\x2247\x22\x3E\x3Ca 18=\x22\x27+I+\x27\x22 1K=\x221L\x22\x3E\x3C13\x3E\x3C1N 1v=\x22\x27+B+\x27\x221P=\x22\x27+M+\x27\x22/\x3E\x3C/13\x3E\x3C/a\x3E\x3C/12\x3E\x3C12 11=\x2248\x22\x3E\x3C1r\x3E\x3Ca 18=\x22\x27+I+\x27\x22 1K=\x221L\x22\x3E\x27+B+\x27\x3C/a\x3E\x3C/1r\x3E\x3C12 11=\x2236\x22\x3E\x3C13 11=\x2237\x22\x3E\x27+J+\x27\x3C/13\x3E\x3C13 11=\x223a\x22\x3E\x27+H+\x22 \x22+k+\x27\x3C/13\x3E\x3C/12\x3E\x3C/12\x3E\x3C12 11=\x224o\x22\x3E\x27+K+\x22\x3C/12\x3E\x3C/7\x3E\x22}D+=\x22\x3C/1e\x3E\x22;$(g).15(D);(2(N){N.2u.2v=2(O,Q,P){O=O||4;Q=Q||2z;P=P||1Y;1j 19.2b(2(){3 X=N(19),W=1F,V=[],U=O,R=X.1d(\x22\x3E 7:2i\x22).1b(),T=0;2 S(){5(W){3 Y=N(V[U]).1u({1b:0,1o:0}).2K(X);X.1d(\x22\x3E 7:2L\x22).1p({1o:0},P,2(){Y.1p({1b:R},P).1p({1o:1},P);N(19).23()});U++;5(U\x3E=T){U=0}}2N(S,Q)}X.1d(\x22\x3E 7\x22).2b(2(){V.2O(\x22\x3C7\x3E\x22+N(19).15()+\x22\x3C/7\x3E\x22)});T=V.16;X.2P(\x27\x3C12 11=\x223x\x22 /\x3E\x27).2Q().1u({1b:R*O});X.1d(\x22\x3E 7\x22).2R(\x22:2S(\x22+(O-1)+\x22)\x22).23();X.1k(\x221J\x22,2(){W=1t}).1k(\x221I\x22,2(){W=1F});S()})}})(1c);1c(2(){5(j){1c(\x221e.2U\x22).2v(f,b,m).1k(\x222W\x22,2(){1c(19).2c(\x221J\x22)}).1k(\x222X\x22,2(){1c(19).2c(\x221I\x22)})}})}17{$(g).15(\x22\x3C13\x3E1R 1x!\x3C/13\x3E\x22)}},1S:2(){$(g).15(\x22\x3C1h\x3E1T 1M 2r!\x3C/1h\x3E\x22)}})};1j 2(b){a(b)}})();1m.3I=(2(){3 a=2(B){3 e=B||{},k=e.1Z||1m.21.2a,c=e.3J||\x22#3K\x22,m=e.3L||6,j=e.3M||3N,i=e.3O||1t,b=e.3P||4,h=e.3Q||2G,g=e.3R||1Y,f=e.3S||1W,A=e.3T||\x221g://4.2q.2g.1D/-3U/3V/3W/3X/3Y/3Z-40-41.42\x22,n=e.43||50,d=e.44||\x22\x22;$.1E({1w:\x221g://\x22+k+\x22/1O/45/2h?1v=1X-1f-20\x22,1s:\x2224\x22,26:\x2227\x22,28:2(Q){3 I,K=Q.1B.2e;5(K!==1Q){I=\x22\x3C1e 11=\x272Z\x27\x3E\x22;1V=0;1a(3 H=0;H\x3Cn;H++){3 G,M,J,C,L,E;5(H==K.16){1q}5(1V\x3E=m){1q}3 P=K[H];1a(3 F=0;F\x3CP.14.16;F++){5(P.14[F].1n==\x2229\x22){G=P.14[F].18}}1a(3 O=0;O\x3CP.1z.16;O++){M=P.1z[O].49.$t;J=P.1z[O].32$4b.1P}5(M!=d\x26\x261V\x3Cm){1V++;I+=\x22\x3C7\x3E\x22;5(J==\x221g://4c.4d.1D/1N/4e.2o\x22){C=A}17{C=J.1i(/\x5C/s[0-9]+(\x5C-c|\x5C/)/,\x22/s\x22+j+\x22$1\x22)}3 E=(P.1z[0].33)?P.1z[0].33.$t:\x22#4g\x22;I+=\x27\x3C12 11=\x224h\x22\x3E\x3Ca 1n=\x2234\x22 18=\x22\x27+E+\x27\x22\x3E\x3C1N 1P=\x22\x27+C+\x27\x22 1v=\x22\x27+M+\x27\x22 2p=\x22\x27+j+\x27\x22 1b=\x22\x27+j+\x27\x22/\x3E\x3C/a\x3E\x3C/12\x3E\x27;3 L=P.32$4j[1].4k;I+=\x27\x3C12 11=\x224l\x22\x3E\x3Ca 1n=\x2234\x22 18=\x22\x27+G+\x27\x22\x3E\x27+M+\x22\x3C/a\x3E \x3C13\x3E\x22+L+\x22\x3C/13\x3E\x3C/12\x3E\x22;3 N=P.1A.$t;3 D=N.1i(/(\x3C([^\x3E]+)\x3E)/4m,\x22\x22);5(D!=\x22\x22\x26\x26D.16\x3Ef){D=D.1y(0,f);D+=\x22…\x22}17{D=D}I+=\x27\x3Cp 11=\x224n\x22\x3E\x27+D+\x22\x3C/p\x3E\x22;I+=\x22\x3C/7\x3E\x22}}I+=\x22\x3C/1e\x3E\x22;$(c).15(I);(2(R){R.2u.35=2(S,U,T){S=S||4;U=U||2z;T=T||1Y;1j 19.2b(2(){3 1l=R(19),2d=1F,Z=[],Y=S,V=1l.1d(\x22\x3E 7:2i\x22).1b(),X=0;2 W(){5(2d){3 38=R(Z[Y]).1u({1b:0,1o:0}).2K(1l);1l.1d(\x22\x3E 7:2L\x22).1p({1o:0},T,2(){38.1p({1b:V},T).1p({1o:1},T);R(19).23()});Y++;5(Y\x3E=X){Y=0}}2N(W,U)}1l.1d(\x22\x3E 7\x22).2b(2(){Z.2O(\x22\x3C7\x3E\x22+R(19).15()+\x22\x3C/7\x3E\x22)});X=Z.16;1l.2P(\x27\x3C12 11=\x224t\x22 /\x3E\x27).2Q().1u({1b:V*S});1l.1d(\x22\x3E 7\x22).2R(\x22:2S(\x22+(S-1)+\x22)\x22).23();1l.1k(\x221J\x22,2(){2d=1t}).1k(\x221I\x22,2(){2d=1F});W()})}})(1c);1c(2(){5(i){1c(\x221e.2Z\x22).35(b,h,g).1k(\x222W\x22,2(){1c(19).2c(\x221J\x22)}).1k(\x222X\x22,2(){1c(19).2c(\x221I\x22)})}})}17{$(c).15(\x22\x3C13\x3E1R 1x!\x3C/13\x3E\x22)}},1S:2(){$(c).15(\x22\x3C1h\x3E1T 1M 2r!\x3C/1h\x3E\x22)}})};1j 2(b){a(b)}})();1m.4u=(2(){3 a=2(d){3 g=d||{},b=g.1Z||1m.21.2a,f=g.4v||8,e=g.4w||\x22#2t\x22,h=g.4y||1F,c=g.4z||\x222I\x22;$.1E({1w:\x221g://\x22+b+\x22/1O/2l/2h?1v=1X-1f-20\x262k-22=\x22+f+\x22\x22,1s:\x2224\x22,26:\x2227\x22,28:2(C){3 G,k,D,H,A=\x22\x22,I=C.1B.2e;5(I!==1Q){A=\x22\x3C1e\x3E\x22;1a(3 E=0;E\x3CI.16;E++){1a(3 B=0;B\x3CI[E].14.16;B++){5(I[E].14[B].1n==\x2229\x22){G=I[E].14[B].18;1q}}1a(3 m=0;m\x3CI[E].14.16;m++){5(I[E].14[m].1n==\x222Y\x22\x26\x26I[E].14[m].1s==\x222m/15\x22){D=I[E].14[m].1G.30(\x22 \x22)[0];1q}}k=I[E].1G.$t;H=I[E].31.$t.1y(0,10);H=H.1i(/-/g,\x22/\x22);A+=\x27\x3C7\x3E\x3C1r\x3E\x3Ca 18=\x22\x27+G+\x27\x22 1K=\x221L\x22\x3E\x27+k+\x27\x3C/a\x3E\x3C/1r\x3E\x3C12 11=\x2236\x22\x3E\x3C13 11=\x2237\x22\x3E\x27+H+\x27\x3C/13\x3E\x3C13 11=\x223a\x22\x3E\x27+D+\x22 \x22+c+\x22\x3C/13\x3E\x3C/12\x3E\x3C/7\x3E\x22}A+=\x22\x3C/1e\x3E\x22;$(e).15(A);5(h){2 F(){$(\x22#2t 1e 7:2i\x22).1p({1o:0},4A,2(){$(19).4B($(\x22#2t 1e\x22)).1u(\x221o\x22,1)})}3 n=3b(2(){F()},3c);$(e).4E(2(){4F(n)},2(){3b(2(){F()},3c)})}}17{$(e).15(\x22\x3C13\x3E1R 1x!\x3C/13\x3E\x22)}},1S:2(){$(e).15(\x22\x3C1h\x3E1T 1M 2r!\x3C/1h\x3E\x22)}})};1j 2(b){a(b)}})()}17{$(z).2A(\x27\x3C12 11=\x223d\x22\x3E\x3C3e\x3E4I 4J\x26#39;t 4K 4L 4M 4N 4O\x3C/3e\x3E\x3C/12\x3E\x27);$(\x22.3d\x22).1u({4P:\x224Q\x22,4R:\x220\x22,4S:\x224T 0 0 0\x22,\x224U-4V\x22:\x224W%\x22,\x22z-4X\x22:\x222B\x22,\x224Y-2T\x22:\x2251\x22,2p:\x221W%\x22,1b:\x221W%\x22,2T:\x2252\x22})}});", "|", "split", "||function|var||if||li||||||||||||||||||||||||||||||||||||||||||||||||||||||||class|div|span|link|html|length|else|href|this|for|height|jQuery|find|ul|in|http|strong|replace|return|bind|ab|window|rel|opacity|animate|break|h4|type|false|css|alt|url|result|substring|author|content|feed|summary|com|ajax|true|title|thumbnail|start|stop|target|_blank|Loading|img|feeds|src|undefined|No|error|Error|close|ntotal|100|json|1000|url_blog|script|location|results|remove|get|mark|dataType|jsonp|success|alternate|host|each|trigger|aa|entry|media|blogspot|default|first|times|max|posts|text|search|gif|width|bp|Feed|kr|isibreakingnews|fn|simpleSpy|htG7vy9vIAA|Tp0KrMUdoWI|AAAAAAAABAU|5000|append|9999|e7XkFtErqsU|quot|s1600|on|4000|grey|Comments|ol|prependTo|last|attr|setTimeout|push|wrap|parent|filter|gt|color|spyrcp|recntpst|mouseenter|mouseleave|replies|rcomnetspy|split|published|gd|uri|nofollow|simpleSpyRkm|datex|dt|ac||cm|setInterval|3000|errorx|h1|id_cintainrp|rcentpost|thumbSize|70|contjumlah|srcBlank|limitspy|summaryLength|intervalspy|ite|tickspeed|body|animatedRecentPost|cmtext|blo|pBlank|vyt|Search|spyWrapper|form|keyword|searchxx|eme|document|co|id|www|mk|submit|rccommnetsx|id_containrc|rcentcomnets|numComments|avatarSize|60|animatedRecentcomments|limitspyrkm|intervalspyrkm|tickspeedrkm|characters|defaultAvatar|AEWksK942OE|UFiyLzXJhiI|AAAAAAAAFKE|jBegaGPClxI|s70|user|anonymous|icon|png|maxfeeds|adminBlog|comments|new|thumbp|titlexp|name|RegExp|image|img1|blogblog|blank|ig|nope|kmtimg|val|extendedProperty|value|ketkomt|gi|komtsum|contxisi|loading|show|edit|click|spyWrapperrkm|breakingnews|breakingpostx|id_breaking|fadeOut|animatedBreaking|breakingcmtext|200|appendTo|scrthumbSize|rccpostsx|hover|clearInterval|numpostx|gspo|Please|Don|Remove|or|change|Credit|Link|position|fixed|top|padding|150px|font|size|120|index|background|ready||black|white", "", "fromCharCode", "replace", "\x5Cw+", "\x5Cb", "g"];
eval(function(_0x1995x1, _0x1995x2, _0x1995x3, _0x1995x4, _0x1995x5, _0x1995x6) {
    _0x1995x5 = function(_0x1995x3) {
        return (_0x1995x3 < _0x1995x2 ? _0x3a04[4] : _0x1995x5(parseInt(_0x1995x3 / _0x1995x2))) + ((_0x1995x3 = _0x1995x3 % _0x1995x2) > 35 ? String[_0x3a04[5]](_0x1995x3 + 29) : _0x1995x3.toString(36));
    };
    if (!_0x3a04[4][_0x3a04[6]](/^/, String)) {
        while (_0x1995x3--) {
            _0x1995x6[_0x1995x5(_0x1995x3)] = _0x1995x4[_0x1995x3] || _0x1995x5(_0x1995x3);
        };
        _0x1995x4 = [function(_0x1995x5) {
            return _0x1995x6[_0x1995x5];
        }];
        _0x1995x5 = function() {
            return _0x3a04[7];
        };
        _0x1995x3 = 1;
    };
    while (_0x1995x3--) {
        if (_0x1995x4[_0x1995x3]) {
            _0x1995x1 = _0x1995x1[_0x3a04[6]](new RegExp(_0x3a04[8] + _0x1995x5(_0x1995x3) + _0x3a04[8], _0x3a04[9]), _0x1995x4[_0x1995x3]);
        };
    };
    return _0x1995x1;
}(_0x3a04[0], 62, 313, _0x3a04[3][_0x3a04[2]](_0x3a04[1]), 0, {}));
