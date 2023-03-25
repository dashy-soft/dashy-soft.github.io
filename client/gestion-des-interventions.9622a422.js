import{S as e,i as s,s as t,e as r,t as i,a,c as n,b as o,d as l,f as c,g as d,h as u,j as p,k as m,l as f,m as v,n as h}from"./client.106d1efd.js";var g="/client/a124d8e80e464755.png",b="/client/0240c2415a60151e.png",E="/client/1702b6a0b5553ffb.png",x="/client/43912e77760ed8b1.png",_="/client/37dfbeb4a43b4439.png";function I(e){let s,t,I,q,y,L,P,U,C,D,G,A,M,j,S,V,H,N,z,O,T,w,F,B,k,R,J,K,Q,W,X,Y,Z,$,ee,se,te,re,ie,ae,ne,oe,le,ce,de,ue,pe,me,fe,ve,he,ge,be,Ee,xe,_e,Ie,qe,ye,Le,Pe,Ue,Ce,De,Ge,Ae,Me,je,Se,Ve,He,Ne,ze,Oe,Te,we,Fe,Be,ke,Re,Je,Ke,Qe,We,Xe,Ye,Ze,$e,es,ss,ts,rs,is,as,ns,os,ls,cs,ds,us,ps,ms,fs,vs,hs,gs,bs,Es,xs,_s,Is,qs,ys,Ls,Ps,Us,Cs,Ds,Gs,As,Ms,js,Ss,Vs,Hs,Ns,zs,Os,Ts,ws,Fs,Bs,ks,Rs,Js,Ks,Qs,Ws,Xs,Ys,Zs,$s,et;return{c(){s=r("section"),t=r("div"),I=r("h2"),q=i("Gestion des interventions avec Dashy"),y=a(),L=r("h2"),P=i("Contexte"),U=a(),C=r("p"),D=i("Une entreprise du domaine de l'énergie réalise de nombreux travaux sur certains sites. Chaque intervention doit être répertoriée, ainsi que de nombreux détails correspondant à chaque tâche."),G=a(),A=r("section"),M=r("div"),j=r("h2"),S=i("Bacs à ordres d'intervention"),V=a(),H=r("p"),N=i("Les employés s'occupant de la gestion de travaux remplissent différentes vues en fonction du contrat associé à l'intervention (contrat du prestataire). Les ordres d'intervention ont certains champs similaires, mais aussi des champs spécifiques, en fonction du type d'intervention (robinetterie, calorifuge...)."),z=a(),O=r("span"),T=i("Chaque ordre d'intervention à donc :\n      "),w=r("ul"),F=r("li"),B=i("Un numéro d'identifiant (généré par la solution)"),k=a(),R=r("li"),J=i("Une description"),K=a(),Q=r("li"),W=i("Un responsable"),X=a(),Y=r("li"),Z=i("Une date d'exécution"),$=a(),ee=r("li"),se=i("Un statut"),te=a(),re=r("li"),ie=i("..."),ae=a(),ne=r("a"),oe=r("img"),ce=a(),de=r("a"),ue=r("img"),me=a(),fe=r("p"),ve=i("En cliquant sur un ordre d'intervention, un formulaire apparait, permettant de modifier celui-ci.\n      Les formulaires sont assez volumineux, étant donné le nombre de champs différents à renseigner sur les enregistrements."),he=r("br"),ge=i("\n      Certains champs ont été implémentés spécifiquement pour répondre au besoin. D'autres disposent de règles de validation permettant d'accompagner les utilisateurs dans la modification des données. Par exemple, des règles de validation spécifiques apparaissent lorsque le code de la salle a une certaine valeur."),be=a(),Ee=r("a"),xe=r("img"),Ie=a(),qe=r("a"),ye=r("img"),Pe=a(),Ue=r("p"),Ce=i("Il est également possible de voir l'historique des modifications d'un enregistrement, pour pouvoir garder une trace du cycle de vie de l'intervention."),De=a(),Ge=r("section"),Ae=r("div"),Me=r("h2"),je=i("Import/Export Excel"),Se=a(),Ve=r("p"),He=i("Cette fonctionnalité est essentielle au client : utilisant de nombreux logiciels pour récupérer des fragments de données, excel est l'outil principal qui permet aux employer de traiter les données en masse, et de faire transiter l'information d'une base à une autre."),Ne=a(),ze=r("p"),Oe=i("A tout moment, il est possible d'exporter l'intégralité des données présentes dans une vue au format Excel"),Te=a(),we=r("p"),Fe=i("Les fichiers sont ensuite modifiés par les employés et réimportés dans le logiciel. L'import de données vérifie la cohérence des fichiers importés. Si un utilisateur ou une date est mal écrite dans le tableur, un message d'erreur est affiché, et il est possible d'effectuer la correction."),Be=a(),ke=r("div"),Re=r("div"),Je=r("a"),Ke=r("img"),We=a(),Xe=r("a"),Ye=r("img"),$e=a(),es=r("div"),ss=r("a"),ts=r("img"),is=a(),as=r("a"),ns=r("img"),ls=a(),cs=r("p"),ds=i("L'import de données prend en charge des tableurs contenant un nombre de ligne assez important."),us=a(),ps=r("section"),ms=r("div"),fs=r("h2"),vs=i("Fiches imprimables"),hs=a(),gs=r("p"),bs=i('Les intervenants peuvent cliquer à tout moment sur un bouton "impression" depuis un bac à intervention pour imprimer des fiches correspondant aux interventions.'),Es=a(),xs=r("section"),_s=r("div"),Is=r("h2"),qs=i("Mode hors ligne"),ys=a(),Ls=r("p"),Ps=i("Certaines salles des chantiers sont blindées et disposent d'une connectivité réduite. Il est important pour les intervenants de pouvoir tout de même se rendre sur place et modifier les ordres d'intervention."),Us=a(),Cs=r("p"),Ds=i('Un add-on spécifique a été développé, leur permettant de mettre dans "leur panier" certains enregistrements, sur leurs tablettes. Une fois l\'opération effectuée, ils peuvent se rendre sur place et modifier les enregistrements à leur convenance.'),Gs=a(),As=r("p"),Ms=i('Les intervenants peuvent également générer des rapports en PDF et les attacher à une intervention. Ces rapports sont éditables par le client. Il s\'agit par exemple de listes de vérifications à faire, avec des cases à cocher "conforme/non conforme".'),js=a(),Ss=r("p"),Vs=i("Une fois de retour en salle de pilotage, les tablettes sont synchronisées avec la base de données, et les pièces jointes générées envoyées."),Hs=a(),Ns=r("section"),zs=r("div"),Os=r("h2"),Ts=i("Gestion des utilisateurs et droits"),ws=a(),Fs=r("p"),Bs=i("Plus de 100 utilisateurs se connectent quotidiennement (nombre en augmentation) pour ajouter/modifier des enregistrements, sur des dizaines de vues différentes."),ks=a(),Rs=r("p"),Js=i("Dans un soucis de sécurité de l'information, mais aussi de concision, il est important de présenter à chaque utilisateur uniquement le périmètre sur lequel il opère. Une gestion des droits avancés a été mise en place, ainsi qu'une vue dédiée à la gestion des matrices de droits utilisateurs."),Ks=a(),Qs=r("a"),Ws=r("img"),Ys=a(),Zs=r("a"),$s=r("img"),this.h()},l(e){s=n(e,"SECTION",{class:!0,id:!0});var r=o(s);t=n(r,"DIV",{class:!0});var i=o(t);I=n(i,"H2",{});var a=o(I);q=l(a,"Gestion des interventions avec Dashy"),a.forEach(c),y=d(i),L=n(i,"H2",{class:!0});var u=o(L);P=l(u,"Contexte"),u.forEach(c),U=d(i),C=n(i,"P",{class:!0});var p=o(C);D=l(p,"Une entreprise du domaine de l'énergie réalise de nombreux travaux sur certains sites. Chaque intervention doit être répertoriée, ainsi que de nombreux détails correspondant à chaque tâche."),p.forEach(c),i.forEach(c),r.forEach(c),G=d(e),A=n(e,"SECTION",{class:!0,id:!0});var m=o(A);M=n(m,"DIV",{class:!0});var f=o(M);j=n(f,"H2",{class:!0});var v=o(j);S=l(v,"Bacs à ordres d'intervention"),v.forEach(c),V=d(f),H=n(f,"P",{class:!0});var h=o(H);N=l(h,"Les employés s'occupant de la gestion de travaux remplissent différentes vues en fonction du contrat associé à l'intervention (contrat du prestataire). Les ordres d'intervention ont certains champs similaires, mais aussi des champs spécifiques, en fonction du type d'intervention (robinetterie, calorifuge...)."),h.forEach(c),z=d(f),O=n(f,"SPAN",{});var g=o(O);T=l(g,"Chaque ordre d'intervention à donc :\n      "),w=n(g,"UL",{});var b=o(w);F=n(b,"LI",{});var E=o(F);B=l(E,"Un numéro d'identifiant (généré par la solution)"),E.forEach(c),k=d(b),R=n(b,"LI",{});var x=o(R);J=l(x,"Une description"),x.forEach(c),K=d(b),Q=n(b,"LI",{});var _=o(Q);W=l(_,"Un responsable"),_.forEach(c),X=d(b),Y=n(b,"LI",{});var le=o(Y);Z=l(le,"Une date d'exécution"),le.forEach(c),$=d(b),ee=n(b,"LI",{});var pe=o(ee);se=l(pe,"Un statut"),pe.forEach(c),te=d(b),re=n(b,"LI",{});var _e=o(re);ie=l(_e,"..."),_e.forEach(c),b.forEach(c),g.forEach(c),ae=d(f),ne=n(f,"A",{href:!0});var Le=o(ne);oe=n(Le,"IMG",{src:!0,alt:!0}),Le.forEach(c),ce=d(f),de=n(f,"A",{href:!0,class:!0,id:!0});var Qe=o(de);ue=n(Qe,"IMG",{src:!0,alt:!0}),Qe.forEach(c),me=d(f),fe=n(f,"P",{class:!0});var Ze=o(fe);ve=l(Ze,"En cliquant sur un ordre d'intervention, un formulaire apparait, permettant de modifier celui-ci.\n      Les formulaires sont assez volumineux, étant donné le nombre de champs différents à renseigner sur les enregistrements."),he=n(Ze,"BR",{}),ge=l(Ze,"\n      Certains champs ont été implémentés spécifiquement pour répondre au besoin. D'autres disposent de règles de validation permettant d'accompagner les utilisateurs dans la modification des données. Par exemple, des règles de validation spécifiques apparaissent lorsque le code de la salle a une certaine valeur."),Ze.forEach(c),be=d(f),Ee=n(f,"A",{href:!0});var rs=o(Ee);xe=n(rs,"IMG",{src:!0,alt:!0}),rs.forEach(c),Ie=d(f),qe=n(f,"A",{href:!0,class:!0,id:!0});var os=o(qe);ye=n(os,"IMG",{src:!0,alt:!0}),os.forEach(c),Pe=d(f),Ue=n(f,"P",{class:!0});var Xs=o(Ue);Ce=l(Xs,"Il est également possible de voir l'historique des modifications d'un enregistrement, pour pouvoir garder une trace du cycle de vie de l'intervention."),Xs.forEach(c),f.forEach(c),m.forEach(c),De=d(e),Ge=n(e,"SECTION",{class:!0,id:!0});var et=o(Ge);Ae=n(et,"DIV",{class:!0});var st=o(Ae);Me=n(st,"H2",{class:!0});var tt=o(Me);je=l(tt,"Import/Export Excel"),tt.forEach(c),Se=d(st),Ve=n(st,"P",{class:!0});var rt=o(Ve);He=l(rt,"Cette fonctionnalité est essentielle au client : utilisant de nombreux logiciels pour récupérer des fragments de données, excel est l'outil principal qui permet aux employer de traiter les données en masse, et de faire transiter l'information d'une base à une autre."),rt.forEach(c),Ne=d(st),ze=n(st,"P",{class:!0});var it=o(ze);Oe=l(it,"A tout moment, il est possible d'exporter l'intégralité des données présentes dans une vue au format Excel"),it.forEach(c),Te=d(st),we=n(st,"P",{class:!0});var at=o(we);Fe=l(at,"Les fichiers sont ensuite modifiés par les employés et réimportés dans le logiciel. L'import de données vérifie la cohérence des fichiers importés. Si un utilisateur ou une date est mal écrite dans le tableur, un message d'erreur est affiché, et il est possible d'effectuer la correction."),at.forEach(c),Be=d(st),ke=n(st,"DIV",{style:!0});var nt=o(ke);Re=n(nt,"DIV",{style:!0});var ot=o(Re);Je=n(ot,"A",{href:!0});var lt=o(Je);Ke=n(lt,"IMG",{src:!0,alt:!0,style:!0}),lt.forEach(c),We=d(ot),Xe=n(ot,"A",{href:!0,class:!0,id:!0});var ct=o(Xe);Ye=n(ct,"IMG",{src:!0,alt:!0}),ct.forEach(c),ot.forEach(c),$e=d(nt),es=n(nt,"DIV",{style:!0});var dt=o(es);ss=n(dt,"A",{href:!0});var ut=o(ss);ts=n(ut,"IMG",{src:!0,alt:!0,style:!0}),ut.forEach(c),is=d(dt),as=n(dt,"A",{href:!0,class:!0,id:!0});var pt=o(as);ns=n(pt,"IMG",{src:!0,alt:!0}),pt.forEach(c),dt.forEach(c),nt.forEach(c),ls=d(st),cs=n(st,"P",{class:!0});var mt=o(cs);ds=l(mt,"L'import de données prend en charge des tableurs contenant un nombre de ligne assez important."),mt.forEach(c),st.forEach(c),et.forEach(c),us=d(e),ps=n(e,"SECTION",{class:!0,id:!0});var ft=o(ps);ms=n(ft,"DIV",{class:!0});var vt=o(ms);fs=n(vt,"H2",{class:!0});var ht=o(fs);vs=l(ht,"Fiches imprimables"),ht.forEach(c),hs=d(vt),gs=n(vt,"P",{class:!0});var gt=o(gs);bs=l(gt,'Les intervenants peuvent cliquer à tout moment sur un bouton "impression" depuis un bac à intervention pour imprimer des fiches correspondant aux interventions.'),gt.forEach(c),vt.forEach(c),ft.forEach(c),Es=d(e),xs=n(e,"SECTION",{class:!0,id:!0});var bt=o(xs);_s=n(bt,"DIV",{class:!0});var Et=o(_s);Is=n(Et,"H2",{class:!0});var xt=o(Is);qs=l(xt,"Mode hors ligne"),xt.forEach(c),ys=d(Et),Ls=n(Et,"P",{class:!0});var _t=o(Ls);Ps=l(_t,"Certaines salles des chantiers sont blindées et disposent d'une connectivité réduite. Il est important pour les intervenants de pouvoir tout de même se rendre sur place et modifier les ordres d'intervention."),_t.forEach(c),Us=d(Et),Cs=n(Et,"P",{class:!0});var It=o(Cs);Ds=l(It,'Un add-on spécifique a été développé, leur permettant de mettre dans "leur panier" certains enregistrements, sur leurs tablettes. Une fois l\'opération effectuée, ils peuvent se rendre sur place et modifier les enregistrements à leur convenance.'),It.forEach(c),Gs=d(Et),As=n(Et,"P",{class:!0});var qt=o(As);Ms=l(qt,'Les intervenants peuvent également générer des rapports en PDF et les attacher à une intervention. Ces rapports sont éditables par le client. Il s\'agit par exemple de listes de vérifications à faire, avec des cases à cocher "conforme/non conforme".'),qt.forEach(c),js=d(Et),Ss=n(Et,"P",{class:!0});var yt=o(Ss);Vs=l(yt,"Une fois de retour en salle de pilotage, les tablettes sont synchronisées avec la base de données, et les pièces jointes générées envoyées."),yt.forEach(c),Et.forEach(c),bt.forEach(c),Hs=d(e),Ns=n(e,"SECTION",{class:!0,id:!0});var Lt=o(Ns);zs=n(Lt,"DIV",{class:!0});var Pt=o(zs);Os=n(Pt,"H2",{class:!0});var Ut=o(Os);Ts=l(Ut,"Gestion des utilisateurs et droits"),Ut.forEach(c),ws=d(Pt),Fs=n(Pt,"P",{class:!0});var Ct=o(Fs);Bs=l(Ct,"Plus de 100 utilisateurs se connectent quotidiennement (nombre en augmentation) pour ajouter/modifier des enregistrements, sur des dizaines de vues différentes."),Ct.forEach(c),ks=d(Pt),Rs=n(Pt,"P",{class:!0});var Dt=o(Rs);Js=l(Dt,"Dans un soucis de sécurité de l'information, mais aussi de concision, il est important de présenter à chaque utilisateur uniquement le périmètre sur lequel il opère. Une gestion des droits avancés a été mise en place, ainsi qu'une vue dédiée à la gestion des matrices de droits utilisateurs."),Dt.forEach(c),Ks=d(Pt),Qs=n(Pt,"A",{href:!0});var Gt=o(Qs);Ws=n(Gt,"IMG",{src:!0,alt:!0,style:!0}),Gt.forEach(c),Ys=d(Pt),Zs=n(Pt,"A",{href:!0,class:!0,id:!0});var At=o(Zs);$s=n(At,"IMG",{src:!0,alt:!0}),At.forEach(c),Pt.forEach(c),Lt.forEach(c),this.h()},h(){u(L,"class","light"),u(C,"class","svelte-1lfnchl"),u(t,"class","container"),u(s,"class","context"),u(s,"id","context"),u(j,"class","light"),u(H,"class","svelte-1lfnchl"),p(oe.src,le=g)||u(oe,"src",le),u(oe,"alt","bac_a_ois"),u(ne,"href","use-cases/gestion-des-interventions#bac_a_ois_image"),p(ue.src,pe=g)||u(ue,"src",pe),u(ue,"alt","bac_a_ois"),u(de,"href","use-cases/gestion-des-interventions#title"),u(de,"class","lightbox-item"),u(de,"id","bac_a_ois_image"),u(fe,"class","svelte-1lfnchl"),p(xe.src,_e=b)||u(xe,"src",_e),u(xe,"alt","ajout d'oi"),u(Ee,"href","use-cases/gestion-des-interventions#ajout_oi"),p(ye.src,Le=b)||u(ye,"src",Le),u(ye,"alt","ajout d'oi"),u(qe,"href","use-cases/gestion-des-interventions#title"),u(qe,"class","lightbox-item"),u(qe,"id","ajout_oi"),u(Ue,"class","svelte-1lfnchl"),u(M,"class","container"),u(A,"class","bac_a_ois"),u(A,"id","bac_a_ois"),u(Me,"class","light"),u(Ve,"class","svelte-1lfnchl"),u(ze,"class","svelte-1lfnchl"),u(we,"class","svelte-1lfnchl"),p(Ke.src,Qe=E)||u(Ke,"src",Qe),u(Ke,"alt","import error"),m(Ke,"width","100%"),u(Je,"href","use-cases/gestion-des-interventions#import_error_image"),p(Ye.src,Ze=E)||u(Ye,"src",Ze),u(Ye,"alt","import error"),u(Xe,"href","use-cases/gestion-des-interventions#title"),u(Xe,"class","lightbox-item"),u(Xe,"id","import_error_image"),m(Re,"width","50%"),p(ts.src,rs=x)||u(ts,"src",rs),u(ts,"alt","import success"),m(ts,"width","100%"),u(ss,"href","use-cases/gestion-des-interventions#import_success_image"),p(ns.src,os=x)||u(ns,"src",os),u(ns,"alt","import success"),u(as,"href","use-cases/gestion-des-interventions#title"),u(as,"class","lightbox-item"),u(as,"id","import_success_image"),m(es,"width","50%"),m(ke,"display","flex"),u(cs,"class","svelte-1lfnchl"),u(Ae,"class","container"),u(Ge,"class","bac_a_ois"),u(Ge,"id","bac_a_ois"),u(fs,"class","light"),u(gs,"class","svelte-1lfnchl"),u(ms,"class","container"),u(ps,"class","bac_a_ois"),u(ps,"id","bac_a_ois"),u(Is,"class","light"),u(Ls,"class","svelte-1lfnchl"),u(Cs,"class","svelte-1lfnchl"),u(As,"class","svelte-1lfnchl"),u(Ss,"class","svelte-1lfnchl"),u(_s,"class","container"),u(xs,"class","bac_a_ois"),u(xs,"id","bac_a_ois"),u(Os,"class","light"),u(Fs,"class","svelte-1lfnchl"),u(Rs,"class","svelte-1lfnchl"),p(Ws.src,Xs=_)||u(Ws,"src",Xs),u(Ws,"alt","matrice utilisateurs"),m(Ws,"width","100%"),u(Qs,"href","use-cases/gestion-des-interventions#userlist_image"),p($s.src,et=_)||u($s,"src",et),u($s,"alt","matrice utilisateurs"),u(Zs,"href","use-cases/gestion-des-interventions#title"),u(Zs,"class","lightbox-item"),u(Zs,"id","userlist_image"),u(zs,"class","container"),u(Ns,"class","bac_a_ois"),u(Ns,"id","bac_a_ois")},m(e,r){f(e,s,r),v(s,t),v(t,I),v(I,q),v(t,y),v(t,L),v(L,P),v(t,U),v(t,C),v(C,D),f(e,G,r),f(e,A,r),v(A,M),v(M,j),v(j,S),v(M,V),v(M,H),v(H,N),v(M,z),v(M,O),v(O,T),v(O,w),v(w,F),v(F,B),v(w,k),v(w,R),v(R,J),v(w,K),v(w,Q),v(Q,W),v(w,X),v(w,Y),v(Y,Z),v(w,$),v(w,ee),v(ee,se),v(w,te),v(w,re),v(re,ie),v(M,ae),v(M,ne),v(ne,oe),v(M,ce),v(M,de),v(de,ue),v(M,me),v(M,fe),v(fe,ve),v(fe,he),v(fe,ge),v(M,be),v(M,Ee),v(Ee,xe),v(M,Ie),v(M,qe),v(qe,ye),v(M,Pe),v(M,Ue),v(Ue,Ce),f(e,De,r),f(e,Ge,r),v(Ge,Ae),v(Ae,Me),v(Me,je),v(Ae,Se),v(Ae,Ve),v(Ve,He),v(Ae,Ne),v(Ae,ze),v(ze,Oe),v(Ae,Te),v(Ae,we),v(we,Fe),v(Ae,Be),v(Ae,ke),v(ke,Re),v(Re,Je),v(Je,Ke),v(Re,We),v(Re,Xe),v(Xe,Ye),v(ke,$e),v(ke,es),v(es,ss),v(ss,ts),v(es,is),v(es,as),v(as,ns),v(Ae,ls),v(Ae,cs),v(cs,ds),f(e,us,r),f(e,ps,r),v(ps,ms),v(ms,fs),v(fs,vs),v(ms,hs),v(ms,gs),v(gs,bs),f(e,Es,r),f(e,xs,r),v(xs,_s),v(_s,Is),v(Is,qs),v(_s,ys),v(_s,Ls),v(Ls,Ps),v(_s,Us),v(_s,Cs),v(Cs,Ds),v(_s,Gs),v(_s,As),v(As,Ms),v(_s,js),v(_s,Ss),v(Ss,Vs),f(e,Hs,r),f(e,Ns,r),v(Ns,zs),v(zs,Os),v(Os,Ts),v(zs,ws),v(zs,Fs),v(Fs,Bs),v(zs,ks),v(zs,Rs),v(Rs,Js),v(zs,Ks),v(zs,Qs),v(Qs,Ws),v(zs,Ys),v(zs,Zs),v(Zs,$s)},p:h,i:h,o:h,d(e){e&&c(s),e&&c(G),e&&c(A),e&&c(De),e&&c(Ge),e&&c(us),e&&c(ps),e&&c(Es),e&&c(xs),e&&c(Hs),e&&c(Ns)}}}class q extends e{constructor(e){super(),s(this,e,null,I,t,{})}}export{q as default};