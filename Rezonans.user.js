// ==UserScript==
// @name         TJ Rezonanser
// @namespace    https://tjournal.ru/
// @version      0.1
// @description  Make TJ rezonans again!
// @author       Kolyanok
// @match        https://tjournal.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arttitle=document.getElementsByTagName('h1')[0];
    var prefixes= ['СМИ', 'Мнение', 'Лайфхак', 'Мем'];

    function checkPrefixes(p_val) 
    {
        for(var i = 0, l = prefixes.length; i < l; i++)	
        {
            if(prefixes[i] == p_val) 
            {
                return true;
            }
        }
        return false;
    }

    function isAlreadyRezonansed()
    {
        return arttitle.innerHTML.search( /Резонанс:/i )>-1;
    }

    function isRezonans()
    {
        return document.getElementsByClassName('b-article__infoline__author')[0].innerHTML.search( /Вадим Елистратов/i )>-1&&!isAlreadyRezonansed();
    }

    function makeRezonans()
    {
        var newtitle='';
        if( checkPrefixes(arttitle.innerHTML.split(':')[0]))
            newtitle="Резонанс"+arttitle.innerHTML.replace(arttitle.innerHTML.split(':')[0],'');
        else
            newtitle="Резонанс: "+arttitle.innerHTML;
        document.title=newtitle;
        arttitle.innerHTML=newtitle;   
    }
    //rezonans
    if(isRezonans())
        makeRezonans();
})();