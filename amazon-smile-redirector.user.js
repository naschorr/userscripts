// ==UserScript==
// @name         Amazon Smile Redirector
// @namespace    https://github.com/naschorr/userscripts
// @version      0.4
// @description  Redirects regular Amazon URLs to their equivalent Amazon Smile domain
// @author       You
// @include      https://amazon.com/*
// @include      https://www.amazon.com/*
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get a useful URL object, versus the USVString returned by location.href
    const url = new URL(location.href);

    // Update the hostname
    url.hostname = 'smile.amazon.com';

    // Perform a redirection, but without updating the history tree
    location.replace(url);
})();
