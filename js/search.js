$(document).ready(function(){var e=[],t=[],n=!1,i=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var s=n[i];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}("cookies_search_index");function s(){if(!(e.length>0)){for(let t=0;t<i.length;t++){let n={};if(n.id="search-page-checker"+t,n.exists=null,n.name=i[t].trim(),n.content="",n.excerpt="",n.title="Untitled Page",""!=n.name)a()==n.name?(n.title=$("title").text().trim(),""==n.title&&(n.title="Untitled Page"),n.content=c($("html").html()),""==n.content&&(n.content=l($("html").html(),"body")),n.exists=!0):$.ajax({type:"GET",url:n.name,dataType:"text",success:function(e){n.exists=!0,n.title=l(e,"title"),""==n.title&&(n.title="Untitled Page"),n.content=c(e),""==n.content&&(n.content=l(e,"body"))},error:function(e){n.exists=!1}}),e.push(n)}!function t(){for(let n=0;n<e.length;n++)if(null===e[n].exists)return void setTimeout(function(){t()},300);n=!0}()}}function r(i){n||setTimeout(function(){r(i)},500);let s=i.trim().toLowerCase();t=[];for(let n=0;n<e.length;n++){let i=e[n],r=i.content;if(""!=r)r.toLowerCase().includes(s)&&(i.excerpt=r.replace(new RegExp(s,"ig"),'<span class="js-search-found-text">'+s+"</span>"),t.push(i))}$("#dialog-js-search div.loading").hide(),$("#dialog-js-search div.message").show(),function(){let e=t.length,n="<h3>Search found:  "+e+" results</h3>";for(let i=0;i<e;i++){let e=t[i];n+=`<div class='js-search-result-block'><a href='${e.name}'>${e.title} (${e.name})</a>: ${e.excerpt}</div>`}$("#dialog-js-search div.message").html(n)}()}function a(){var e=document.location.href;return e=(e=(e=e.substring(0,-1==e.indexOf("#")?e.length:e.indexOf("#"))).substring(0,-1==e.indexOf("?")?e.length:e.indexOf("?"))).substring(e.lastIndexOf("/")+1,e.length)}function l(e,t){let n=e.search(new RegExp("<"+t+"[^>]*>","im"));if(n<0)return"";let i=e.search(new RegExp("</"+t+"[^>]*>","im")),s=e.substring(n,i)+"</"+t+">";return(s=(s=s.replace(new RegExp("\r?\n|\r","g")," ")).replace(new RegExp("\x3c!--NO-JS-SEARCH-BEGIN--\x3e(.*?)\x3c!--NO-JS-SEARCH-END--\x3e","ig"),"")).replace(/(<([^>]+)>)/gi," ").trim()}function c(e){let t="\x3c!--JS-SEARCH-CONTENT-BEGIN--\x3e",n=e.search(new RegExp(t,"im"));if(n<0)return"";n+=t.length;let i=e.search(new RegExp("\x3c!--JS-SEARCH-CONTENT-END--\x3e","im")),s=e.substring(n,i);return s=(s=(s=s.replace(new RegExp("\r?\n|\r","g")," ")).replace(new RegExp("\x3c!--NO-JS-SEARCH-BEGIN--\x3e(.*?)\x3c!--NO-JS-SEARCH-END--\x3e","ig"),"")).replace(/<(?:.|\n)*?>/gm,"").trim()}""==i?$.ajax({type:"GET",url:"search_index.txt",dataType:"text",success:function(e){i=e.split("\n"),function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s=0==n?"":";expires="+i.toUTCString();document.cookie=e+"="+t+s+";path=/"}("cookies_search_index",JSON.stringify(i),0),s()},error:function(e){}}):(i=JSON.parse(i),s()),$("#dialog-js-search").dialog({autoOpen:!1,modal:!0,resizable:!1,width:"auto",buttons:{Ok:function(){$(this).dialog("close")}}}),$(".js-search-now").click(function(){$(".js-search-text").length;if(0==$(".js-search-text").length)return void alert("Your search form needs to have an input element with class name 'js-search-text'");let e=$(".js-search-text").val().trim();""!=e?($("#dialog-js-search div.message").html(""),$("#dialog-js-search div.message").hide(),$("#dialog-js-search div.loading").show(),$("#dialog-js-search").dialog("open"),r(e)):alert("please enter a text to search")})});