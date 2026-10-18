// ==UserScript==
// @name         old reddit
// @namespace    leroy.oldreddit
// @version      0.7.0
// @description  today's reddit, features included, rebuilt as old reddit. pair with the old reddit userstyle
// @author       leroy
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @match        https://new.reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  const ICON = "data:image/x-icon;base64,AAABAAIAEBAAAAAAAABoBQAAJgAAACAgAAAAAAAAqAgAAI4FAAAoAAAAEAAAACAAAAABAAgAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wBBRP4Aq5qHAFNOSgCkpv4A4Mu0AA8Q/gCAc2cAzM7+ADYvKQCys7QA/urQAGVo/gCGh4kA1NbYAMWvmgBjZWYA5efoAJucngD//+MAwcPFACIk/gCbinkAycGtADo8PgDz2sIAal5RADAy/gBvcHEA9PbzALijkACMfm8AqqmoALCy/gCAgHsAc2piAMnMzwDBw/4AXVxcAJGUlwDOuKMAR0dHANfDrABLTv4Aubu+ADIzNQBbVlEA++HJAP/23ACho6UAa2RdAJOEdQD3+P4A2tzeAO7UvACEeW4AjY2KALCfjgBsa2oArq6uAM/R0wB2cGwA//DWAKOYiACCg4MAemxfAPDw8ABOSkYA4+PjAMm7pgBeWlYAgHt3AGZhWwBtamQA+t7EAGVbUgB7b2QAoaGgAP7kzADdyLEA9Pf6AP774ACwnIoAZ15VAJiHdwBbXWAAy8vLAIh8cAC0oY0AZ2VkALy+vwD+7dMA9t3FAHJwbgB/f38Aqq2vAP//5wB4bWMA7ta/AHVqXwCCfXsAmYp8AIJ1aQDS0tIApKSkAP7jyQDOuaYA/vjeAH1xZQCBgYEArp2MAJ2enwD5+v4A//LYAH5zaQD13MMAd2xhAJWFdgD+69IA/ujPAGxsbABycXAAtqOPAN/IsQDLu6YA/v7+AP/84QD/+t8A/vfbAP7v1QD64MgA1dfZAH5+fgD//uIA/v7jAP/43QD+990AZVxTAP/x1wD+8tcA/u7UAOTk4wCYiHgA///kAP/+4wD++t8A/vneAP743QD/79UA/u3SAP7s0gD+69EA/unQAPXcxACrra8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AD8/Pz8/Pz8/Pz8/Pz8/Pz8/XV1dKY8IYgiPKV1dXV0/P11QVDubPYQ9mztUUF1dP4krRC1+V26Fbld+LUQrXT+UiiV+fiFoQ2ghfn4lil0/P15+fn5+fn5+fn5+fl5dPx8qfn4iHAl+CRwifn4qHz9IHTx+BQcmfiYHBX48HUg/PjYZDh5+fn5+fh4OGTY+P0YzOCBKOTILcCNJIDgzRj8/XV1dfFkXClUQGl1qXV0/P11dXTB4XWdrXV1YRzpdPz9dXV1dXV1vZBhCVlEEXT8/XV1dXV2DY0xtQCRaZl0/P11dXV1dXV1dXV1dXV1dPz8/Pz8/Pz8/Pz8/Pz8/Pz8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAIAAAAAACABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AJSr/AJmJegCIjf4AREZIANzFsADGy/4AUFb/ACgjHwBpamsAAAD/AP/mzQCmp6cA2dnaAL29vgDl6P4AYllPAMWzoAAQEhQAMjQ2AHp7fQCxtv4AlZaWAP784AASFv4A7NfAALGgjwCCdGYAy8vLAPPz9ACJiosARz83AFZNRAB1aV0A1Nj+AFJTVQCzs7MAjX9yAFtdXwDi4uIAqJaGALyplgDRvagAMiwnABkbHQB9g/4ACgoKAOLPuQD+8dcA6+vrAGphVwCdnp4A9t3GAD43LwB0dHQAgYOEADw8PAAdIf8A0tLSAPf5/wC5vv4AxcXGAJ+QgAAbFxMA3eH/AGJjZACtra0A9+rSAE9HQADs7/4AIyQmAHl1aQAsLzEATE5QAEpP/wAhHRoAXFJIAI+PjwAeICIAAwUHAD9BQgBWWFoAwa6bAMm8qAATEA0A///nAOnSuwAVFxgA3d3dAHltYACJe20AlIV2APj4+AA4My4A/vfcAP7s0gDUwa0AuaSSAPviyQA4ODgAt7e3AKGiogAODg8AKyssAMvP/gCBh/4ALiklAIR3awDOzs8A38u2AH9wYwAIBgQAb2NYADYwKgD7+/sA8PDwAPPbxABJS00AwcLCABke/gDY2/8ADgwJAAUDAgAjIB0A+eXMAF9gYgCbm5sAkpOUABQSEQBEPDUAUVFRAIWFhQAZGRkAIyMjAPP1/gDp7P4AtaORAAYHBwAfGxgA39/gAC8xMwDv2cIASUE4AK+vsADmz7kAAQMFABAQEAD+6dAAMSokAEE4MQBVS0EAyLWhAGVlZQCai30AjIyMAP7+4wAUFBQA/vneAP7z2gD+7tUALy8vADs1LgComYgA/f39APb29gAbHR8A/ePLAPngyADb29sAQkRGAEZISgDWw68A07+qAFpQRgBkW1EAvquYAHZ2dgCWh3gADw0MACAiJAD8584ANTc5ADc5OwDZxrEAV1dXAAMCAgDiy7UAjI2PAAwLCwDb3/4Aw7CcAJ+foACDdmgAoZGCABIUFgAjHxoAJSUlAPbcxADIzf4A79fAAOzZwgC3vP4A59G7AOLNtwBdXV0Av62aAAQEBAAGBQQACQgHABYWFgD09PUAFxocADAzNQDDw8MAWE5FAMOynwBaXF0AbmJWAGBiYwC3opAAAgEBABISEgD+6M8A/OXNADAqJgAyLSkANi8oADQ1NgDTvakAtba3AMGwnQBkWk8Aq6ytAG1jWQBjZWYAnY+AAP//5QD+9dsA+N7GAODNtwDRv6oAw66bAAcICQD+/v4A+vr6ABQRDgD5+fkAFhgZAP/43QAaGhoA8fHxAP/w1gD/7dMA6urqAP///wAAVvz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8VgD8NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX8AKA1NTU1NTU1NagM/fz8oKCg/KDfqDU1NTU1NTU1NaAAoDU1NTU1NQz8p63CWq4gIJciA5g1oJQ1NTU1NTU1oACgNTU1Naf8uCKLz8NJq9knStX4z/ZNEmDfNTU1NTWgAPw1NTX9Gq/dRzhtXQEBAQEBAaQOF7cAgmH8NTU1NfwAoDU1oNhVtJD09PT09PSlHqT09PT09B1RAOwx7zU1oACgNaDOAEL19PT09CWDhtKd+mSbXfT09PROACb8NTWgAKDgy3sK9PT09PTNALl/D9ZDsdLF+/T09PRmAM5gNaAA/PyuRwEBAQEBAU4dAQEBAQEBdIR0AQEBAQFSxLWo/ADuV93p9PT09PT09PT09PT09PT09PT09PT09IwA8pSgABgqijL09PT09PT09PT09PT09PT09PT09PT09EccoKAAnLBn0/T09PT09COH9PT09PT09GlG9PT09PT0jRxfoADtcQBZAQEBATwICwJBAQEBATxLCzp5AQEBAQFY48n5AIlQkzf09PT0BwsLC2r09PT0xwsLCy709PT0Zc9HLJ8AlhVlADv09PQQGQsLyvT09PSIeAsLPfT09PfSmR5Q3ACVvPSDZ6n09PQjLhb09PT09PS+BD309PTTOYX79NXBAG/UdAG53g0BAQEBAQEBAQEBAQEBAQEBPmihdAH+kmIARGsT23YAALaQXfT09PT09PT09PT0PiTdAKrmNC1y7gD5dVuC186sIdDDJIAPWf4yjB3Afk/doufxIHpV6I5fAKBjoKCglN+gzLKPQNGK82cv0FU2wa1glN+UyHWgY6AA/DU1NTU1NTWnoKBjkSspAD8wdf2gDDU1DJQMqDU1/ACgNTU1NTU1NTU1NainlPx8bPmoNTU1Y5Tlv3XfxjWgAKA1NTU1NTU1NTU1NTU1MeprlDU1NajgEbqKTGHfNaAAoDU1NTU1NTU1NTU1NTWUsLq7pzVjnlySdygFCX2ooAD8NTU1NTU1NTU1NTU1NWN1vcLt/Y5UxOsBAQ4ABgz8AKA1NTU1NTU1NTU1NTU1NfxF4kheky+z5HP0H3DIY6AAoDU1NTU1NTU1NTU1NTU1YBuB4TOj8G6LphQAmmA1oACgNTU1NTU1NTU1NTU1NTU1qMiU/GCnlMvB2lNgNTWgAPw1NTU1NTU1NTU1NTU1NTXvY+81NTU1p6D8lDU1NfwAVvz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAP////8K";
  try { for (const k of Object.keys(localStorage)) if (k.startsWith("reddit2009-")) { localStorage.setItem("oldreddit-" + k.slice(11), localStorage.getItem(k)); localStorage.removeItem(k); } } catch (e) {}
  const DEFAULTS = ["AskReddit", "pics", "funny", "movies", "gaming", "worldnews", "news", "todayilearned", "nottheonion", "explainlikeimfive", "mildlyinteresting", "DIY", "videos", "OldSchoolCool", "TwoXChromosomes", "tifu", "Music", "books", "LifeProTips", "dataisbeautiful", "aww", "science", "space", "Showerthoughts", "askscience", "Jokes", "Art", "IAmA", "Futurology", "sports", "UpliftingNews", "food", "nosleep", "creepy", "history", "gifs", "InternetIsBeautiful", "GetMotivated", "gadgets", "WritingPrompts", "philosophy", "Documentaries", "EarthPorn", "photoshopbattles", "listentothis", "blog"];
  const BAR = ["pics", "politics", "worldnews", "funny", "WTF", "programming", "science", "atheism", "gaming", "technology", "AskReddit", "entertainment", "comics", "videos", "offbeat", "music", "business", "economics", "geek", "linux", "environment", "sports", "movies"];
  const USER_TABS = ["overview", "comments", "submitted", "gilded", "upvoted", "downvoted", "hidden", "saved"], OWN_TABS = ["upvoted", "downvoted", "hidden", "saved"];

  const path = location.pathname.replace(/\/+$/, "") || "/";
  const qs = new URLSearchParams(location.search);
  function route(path = location.pathname.replace(/\/+$/, "") || "/", qs = new URLSearchParams(location.search)) {
    let m;
    if (qs.has("modern") || sessionStorage.getItem("oldreddit-off")) return null;
    if (path === "/media" && qs.get("url")) return { kind: "media" };
    if ((m = path.match(/^(?:\/r\/([^/]+))?\/comments\/([a-z0-9]+)(?:\/[^/]*)?(?:\/([a-z0-9]+))?$/i))) return { kind: "comments", sr: m[1], id: m[2], focus: m[3] };
    if ((m = path.match(/^\/r\/([^/]+)\/search$/i))) return { kind: "search", sr: m[1] };
    if (path === "/search") return { kind: "search" };
    if ((m = path.match(/^\/r\/([^/]+)(?:\/(hot|new|rising|controversial|top|best))?$/i))) return { kind: "listing", sr: m[1], sort: m[2] || "hot" };
    if ((m = path.match(/^\/(hot|new|rising|controversial|top|best)$/i))) return { kind: "listing", sort: m[1] };
    if (path === "/") return { kind: "listing", sort: "hot" };
    if ((m = path.match(/^\/domain\/([^/]+)(?:\/(hot|new|rising|controversial|top))?$/i))) return { kind: "listing", domain: m[1], sort: m[2] || "hot" };
    if ((m = path.match(new RegExp(`^/u(?:ser)?/([^/]+)(?:/(${USER_TABS.join("|")}))?$`, "i")))) return { kind: "user", user: m[1], tab: (m[2] || "overview").toLowerCase() };
    return null;
  }
  const R = route();
  if (!R) {
    if (sessionStorage.getItem("oldreddit-off")) return;
    const mine = (u) => { try { const x = new URL(u, location.href); return x.origin === location.origin && !!route(x.pathname.replace(/\/+$/, "") || "/", x.searchParams); } catch (e) { return false; } };
    const push = history.pushState;
    history.pushState = function (st, t, u) { const r = push.apply(this, arguments); if (u != null && mine(u)) location.reload(); return r; };
    window.addEventListener("popstate", () => { if (mine(location.href)) location.reload(); });
    document.addEventListener("click", (ev) => {
      if (ev.button || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
      const a = ev.composedPath().find((n) => n.localName === "a" && n.href);
      if (a && !a.target && mine(a.href)) { ev.preventDefault(); ev.stopPropagation(); location.href = a.href; }
    }, true);
    return;
  }
  for (const k of [...qs.keys()]) if (/^(solution|js_challenge|jsc_.*)$/.test(k)) qs.delete(k);

  const PASS = "oldreddit-pass", TRIED = "oldreddit-tried:" + path;
  if (sessionStorage.getItem(PASS)) {
    sessionStorage.removeItem(PASS);
    const hide = document.createElement("style"); hide.textContent = "html{visibility:hidden!important}"; document.documentElement.appendChild(hide);
    window.addEventListener("load", () => setTimeout(() => location.replace(location.pathname + (qs.toString() ? "?" + qs : "")), 600));
    return;
  }
  const letThrough = () => { const last = +sessionStorage.getItem(TRIED) || 0; if (Date.now() - last < 60000) return false; sessionStorage.setItem(TRIED, Date.now()); sessionStorage.setItem(PASS, "1"); location.reload(); return true; };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const get = async (url) => { const r = await fetch(url, { credentials: "include", headers: { Accept: "application/json" } }); if (!r.ok) { const e = new Error(r.status + " " + url.split("?")[0]); e.status = r.status; e.wait = Math.ceil(+r.headers.get("retry-after") || +r.headers.get("x-ratelimit-reset") || 60); throw e; } return r.json(); };
  const CACHE = "r9c:";
  const PAGES = "r9p:";
  const forgetPages = () => { try { for (const k of Object.keys(sessionStorage)) if (k.startsWith(PAGES)) sessionStorage.removeItem(k); } catch (e) {} };
  const page = async (url) => { const k = PAGES + url, reload = (performance.getEntriesByType("navigation")[0] || {}).type === "reload";
    try { const c = JSON.parse(sessionStorage.getItem(k) || "null"); if (c && !reload && Date.now() - c.t < 90000) return c.d; } catch (e) {}
    const d = await get(url); try { const str = JSON.stringify({ t: Date.now(), d }); if (str.length < 1500000) { try { sessionStorage.setItem(k, str); } catch (e) { forgetPages(); sessionStorage.setItem(k, str); } } } catch (e) {} return d; };
  const uncache = (re) => { try { for (const k of Object.keys(localStorage)) if (k.startsWith(CACHE) && (!re || re.test(k))) localStorage.removeItem(k); } catch (e) {} };
  const cached = async (url, minutes) => { const k = CACHE + url;
    try { const c = JSON.parse(localStorage.getItem(k) || "null"); if (c && Date.now() - c.t < minutes * 60000) { if (c.e) { const e = new Error(c.e + " " + url.split("?")[0]); e.status = c.e; throw e; } return c.d; } } catch (e) { if (e.status) throw e; }
    const put = (v) => { const str = JSON.stringify({ t: Date.now(), ...v }); try { localStorage.setItem(k, str); } catch (e) { uncache(); try { localStorage.setItem(k, str); } catch (e2) {} } };
    try { const d = await get(url); put({ d }); return d; } catch (e) { if ([403, 404].includes(e.status)) put({ e: e.status }); throw e; } };
  const plural = (n, w, ws) => n + " " + (n === 1 ? w : ws || w + "s");
  function ago(utc) {
    const s = Math.max(1, Math.floor(Date.now() / 1000 - utc));
    for (const [n, w] of [[31536000, "year"], [2592000, "month"], [86400, "day"], [3600, "hour"], [60, "minute"]]) if (s >= n) return plural(Math.floor(s / n), w);
    return plural(s, "second");
  }
  const base = R.sr ? "/r/" + R.sr : R.domain ? "/domain/" + R.domain : "";
  const me = { name: "", modhash: "" };
  async function api(endpoint, params) {
    forgetPages();
    if (!me.name) { location.href = "/login/?modern"; throw new Error("login"); }
    const r = await fetch("/api/" + endpoint, { method: "POST", credentials: "include", headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Modhash": me.modhash }, body: new URLSearchParams({ api_type: "json", raw_json: "1", uh: me.modhash, ...params }) });
    if (!r.ok) throw new Error(r.status + " " + endpoint);
    return r.json().catch(() => ({}));
  }

  try { window.stop(); } catch (e) {}
  const root = document.documentElement;
  root.className = "oldreddit"; root.removeAttribute("style");
  const userTabs = (own) => USER_TABS.filter((t) => own || !OWN_TABS.includes(t)).map((t) => [`/user/${R.user}/${t === "overview" ? "" : t + "/"}`, t, R.tab === t]);
  const listTabs = () => [["hot", "what's hot"], ["new", "new"], ["rising", "rising"], ["controversial", "controversial"], ["top", "top"]].map(([t, l]) => [`${base}/${t === "hot" ? "" : t + "/"}`, l, R.kind === "listing" && (R.sort === t || (t === "hot" && R.sort === "best"))]);
  const tabHtml = (tabs) => tabs.map(([h, l, sel]) => `<li${sel ? ' class="selected"' : ""}><a href="${esc(h)}">${l}</a></li>`).join("");
  const tabs = R.kind === "media" ? [] : R.kind === "user" ? userTabs(true) : R.kind === "comments" ? [[location.pathname, "comments", true]] : listTabs();
  const pageName = R.sr ? `<span class="hover pagename redditname"><a href="/r/${esc(R.sr)}/">${esc(R.sr)}</a></span>` : R.kind === "user" ? `<span class="hover pagename redditname"><a href="/user/${esc(R.user)}/">${esc(R.user)}</a></span>` : R.kind === "search" ? `<span class="hover pagename redditname">search</span>` : "";
  root.innerHTML = `<head><meta charset="utf-8"><title>reddit.com: what's new online!</title><link rel="shortcut icon" href="${ICON}"></head>
<body class="${R.kind === "comments" ? "comments-page" : R.kind === "user" ? "profile-page" : R.kind === "search" ? "search-page" : "listing-page " + (R.sort || "hot") + "-page"}"><div id="header" role="banner"><div id="sr-header-area"><div class="dropdown srdrop"><span class="selected title">my reddits</span></div><div class="drop-choices srdrop" id="r9-mine">${BAR.slice(0, 10).map((s) => `<a href="/r/${s}/" class="choice">${s}</a>`).join("")}<a href="/subreddits/?modern" class="choice bottom-option">edit</a></div>
<ul class="flat-list hover" id="sr-bar"><li><a href="/r/popular/">popular</a></li><li><span class="separator">-</span><a href="/r/all/">all</a></li>${BAR.map((s) => `<li><span class="separator">-</span><a href="/r/${s}/">${s}</a></li>`).join("")}</ul><a id="sr-more-link" href="/subreddits/?modern">more &raquo;</a></div>
<div id="header-bottom-left"><a href="/" id="header-img-a"><span id="header-img" role="img" aria-label="reddit.com"></span></a>&nbsp;${pageName}<ul class="tabmenu">${tabHtml(tabs)}</ul></div>
<div id="header-bottom-right"><span class="user">want to join? <a href="/register/?modern">register</a> in seconds</span><span class="separator">|</span><ul class="flat-list hover"><li><a href="#" class="pref-lang">English</a></li></ul></div></div>
<div class="side"><div class="spacer"><form action="${R.sr ? `/r/${esc(R.sr)}/search` : "/search"}" id="search" role="search"><input type="text" name="q" value="${esc(qs.get("q") || "search reddit")}" class="gray">${R.sr ? '<input type="hidden" name="restrict_sr" value="on">' : ""}</form></div>
<div class="spacer" id="r9-info"></div>
<div class="spacer" id="r9-login"><form class="login-form-side" action="/login/" method="get"><input type="hidden" name="modern" value="1"><input name="user" type="text" maxlength="20"><input name="passwd" type="password" maxlength="20"><div id="remember-me"><button class="btn" type="submit">login</button><input type="checkbox" id="rem-login-main"><label for="rem-login-main">remember me</label><a href="/password/?modern">recover password</a><div class="clear"></div></div></form></div>
<div class="spacer"><div class="sidebox submit submit-link"><a href="${R.sr ? `/r/${esc(R.sr)}/submit?modern` : "/submit?modern"}" class="morelink">Submit a link</a><div class="spacer"><div class="subtitle">to anything interesting: news article, blog entry, video, picture...</div></div></div></div>
<div class="spacer"><div class="sidebox create"><a href="/subreddits/create?modern" class="morelink">Create your own reddit</a><div class="spacer"><div class="subtitle">...for your WoW guild.</div><div class="subtitle">...for your Quake 2 clan.</div></div></div></div></div>
<div class="content" id="r9-content" role="main"><p class="r9-loading">loading...</p></div>
<div class="footer-parent"><div class="footer rounded">
<div class="col"><ul class="flat-vert hover"><li class="flat-vert title">site links</li><li><a href="/top/">top links</a></li><li><a href="/.rss">rss</a></li><li><a href="/r/random/">random</a></li><li><a href="${esc(location.pathname)}?modern">new reddit</a></li><li><a href="#" id="r9-skin">${localStorage.getItem("oldreddit-skin") === "2009" ? "old reddit skin" : "2009 skin"}</a></li></ul></div>
<div class="col"><ul class="flat-vert hover"><li class="flat-vert title">help</li><li><a href="https://support.reddithelp.com/">help</a></li><li><a href="https://support.reddithelp.com/hc/en-us/articles/205926439">reddiquette</a></li></ul></div>
<div class="col"><ul class="flat-vert hover"><li class="flat-vert title">reddit tools</li><li><a href="https://www.reddit.com/dev/api">api</a></li><li><a href="https://github.com/reddit-archive/reddit">source code</a></li></ul></div>
<div class="col"><ul class="flat-vert hover"><li class="flat-vert title">about us</li><li><a href="https://www.redditinc.com/">about</a></li><li><a href="https://www.redditinc.com/blog">blog</a></li></ul></div></div>
<p class="bottommenu">Use of this site constitutes acceptance of our <a href="https://www.redditinc.com/policies/user-agreement">User Agreement</a> and <a href="https://www.reddit.com/policies/privacy-policy">Privacy Policy</a>. (c) 2009 Conde Nast Digital. All rights reserved.</p></div></body>`;

  const $ = (s, n = document) => n.querySelector(s);
  const content = $("#r9-content");
  document.addEventListener("click", (ev) => { if (ev.target.id !== "r9-skin") return; ev.preventDefault(); if (localStorage.getItem(SKIN) === "2009") localStorage.removeItem(SKIN); else localStorage.setItem(SKIN, "2009"); location.reload(); });
  function keepIcon(ICON, id) {
    const SEL = 'link[rel~="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="apple-touch-icon-precomposed"], link[rel="mask-icon"], link[rel="fluid-icon"]';
    let busy = false, obs = null, watched = null, spent = [], off = false;
    const allowed = () => { const now = Date.now(); spent = spent.filter((t) => now - t < 10000); if (spent.length >= 12) { off = true; if (obs) obs.disconnect(); return false; } spent.push(now); return true; };
    const apply = (fresh) => {
      if (busy || off) return; const head = document.head; if (!head) return; busy = true;
      try {
        const others = [...head.querySelectorAll(SEL)].filter((l) => l.id !== id); let mine = document.getElementById(id);
        const wrong = !mine || mine.parentNode !== head || mine.getAttribute("href") !== ICON || mine.rel !== "icon" || mine !== head.lastElementChild && others.length;
        if (!others.length && !wrong && fresh !== true) return;
        if ((others.length || wrong) && !allowed()) return;
        for (const l of others) l.remove();
        if (wrong || fresh === true) { if (mine) mine.remove(); mine = document.createElement("link"); mine.id = id; mine.rel = "icon"; mine.type = "image/x-icon"; mine.href = ICON; head.appendChild(mine); }
      } finally { busy = false; if (obs) obs.takeRecords(); }
    };
    const watch = () => { if (off) return; const head = document.head; if (!head) { setTimeout(watch, 25); return; } if (head === watched) return; watched = head;
      if (obs) obs.disconnect(); obs = new MutationObserver(() => apply()); obs.observe(head, { childList: true, subtree: true, attributes: true, attributeFilter: ["href", "rel"] }); apply(); };
    watch();
    for (const ev of ["DOMContentLoaded", "load", "pageshow"]) window.addEventListener(ev, () => { watch(); apply(true); }, true);
    for (const ms of [250, 1500, 5000]) setTimeout(() => { watch(); apply(true); }, ms);
  }
  keepIcon(ICON, "r9icon");
  const OLD_BASE = ["https://www.redditstatic.com/reddit.1whdVBhnLxM.css", "https://www.redditstatic.com/expando.gMzRK16vwrQ.css"];
  const SKIN = "oldreddit-skin";
  let OLD = localStorage.getItem(SKIN) !== "2009";
  const md = (h) => (/^\s*(?:<!--[^>]*-->)?\s*<div class="md"/.test(h || "") ? h : `<div class="md">${h || ""}</div>`);
  function oldBase() {
    root.classList.add("r9-old");
    for (const href of OLD_BASE) { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = href; document.head.appendChild(l); }
    oldShell();
  }
  async function subredditStyle(sr) {
    if (!OLD || !sr || /^(all|popular)$/i.test(sr) || localStorage.getItem("oldreddit-nostyle:" + sr.toLowerCase())) return;
    try { const d = (await cached(`/r/${sr}/about/stylesheet.json?raw_json=1`, 360)).data; let css = d.stylesheet || ""; if (!css.trim()) return;
      for (const im of d.images || []) css = css.split(`%%${im.name}%%`).join(`"${im.url}"`);
      root.classList.add("r9-themed");
      const st = document.createElement("style"); st.id = "r9-srstyle"; st.textContent = css.replace(/%%[\w-]+%%/g, '""').replace(/http:\/\/([\w.-]+\.(?:redditmedia\.com|redd\.it|redditstatic\.com))/g, "https://$1"); document.head.appendChild(st);
    } catch (e) {}
  }
  function oldShell() {
    const f = $("#search"); if (f) f.innerHTML = `<input type="text" name="q" placeholder="search" value="${esc(qs.get("q") || "")}"><input type="submit" value="">${R.sr ? `<div id="searchexpando" class="infobar"><label><input type="checkbox" name="restrict_sr" checked>limit my search to r/${esc(R.sr)}</label></div>` : ""}`;
    const img = $("#header-img"); if (img && img.localName === "span") img.outerHTML = '<span id="header-img" class="default-header" title="">reddit.com</span>';
    if (R.kind === "search") { const t0 = $(".tabmenu"); if (t0) t0.innerHTML = ""; }
    const tm = $(".tabmenu"); if (tm && R.kind === "listing") { tm.querySelectorAll("a").forEach((a) => { a.classList.add("choice"); if (a.textContent === "what's hot") a.textContent = "hot"; }); if (R.sr) tm.insertAdjacentHTML("beforeend", `<li><a class="choice" href="/r/${esc(R.sr)}/wiki/?modern">wiki</a></li>`); }
    const area = $("#sr-header-area"), front = R.kind === "listing" && !R.sr && !R.domain, cur = (R.sr || "").toLowerCase();
    const li = (h, l, first, sel) => `<li${sel ? ' class="selected"' : ""}>${first ? "" : '<span class="separator">-</span>'}<a href="${esc(h)}" class="choice">${esc(l)}</a></li>`;
    if (area) area.innerHTML = `<div class="width-clip"><div class="dropdown srdrop"><span class="selected title">my subreddits</span></div><div class="drop-choices srdrop" id="r9-mine"><a href="/subreddits/?modern" class="bottom-option choice">edit subscriptions</a></div>`
      + `<div class="sr-list"><ul class="flat-list sr-bar hover">${li("/", "home", true, front)}${li("/r/popular/", "popular", false, cur === "popular")}${li("/r/all/", "all", false, cur === "all")}${li("/users/?modern", "users")}</ul><span class="separator r9-subsep" style="display:none">&nbsp;|&nbsp;</span><ul class="flat-list sr-bar hover" id="r9-subbar"></ul><span class="separator">&nbsp;|&nbsp;</span><ul class="flat-list sr-bar hover" id="sr-bar">${DEFAULTS.map((n, i) => li(`/r/${n}/`, n, !i, cur === n.toLowerCase())).join("")}</ul></div><a href="/subreddits/?modern" id="sr-more-link">edit &raquo;</a></div>`;
    if (front) { if (path === "/") { R.sort = "best"; document.body.classList.replace("hot-page", "best-page"); } const tm0 = $(".tabmenu"); if (tm0) tm0.innerHTML = ["best", "hot", "new", "rising", "controversial", "top"].map((t) => `<li${R.sort === t ? ' class="selected"' : ""}><a href="/${t === "best" ? "" : t + "/"}" class="choice">${t}</a></li>`).join("") + '<li><a href="/wiki/?modern" class="choice">wiki</a></li>'; }
    const sub = $(".side .sidebox.submit"); if (sub) sub.closest(".spacer").outerHTML = `<div class="spacer"><div class="sidebox submit submit-link"><div class="morelink"><a href="${R.sr ? "/r/" + esc(R.sr) : ""}/submit?modern">Submit a new link</a><div class="nub"></div></div></div></div><div class="spacer"><div class="sidebox submit submit-text"><div class="morelink"><a href="${R.sr ? "/r/" + esc(R.sr) : ""}/submit?selftext=true&modern">Submit a new text post</a><div class="nub"></div></div></div></div>`;
    document.querySelectorAll(".side .sidebox.create").forEach((n) => { n.closest(".spacer").outerHTML = '<div class="spacer"><div class="sidebox create"><div class="morelink"><a href="/subreddits/create?modern">Create your own subreddit</a><div class="nub"></div></div><div class="spacer"><a href="/subreddits/create?modern"></a><div class="subtitle">...for your favorite hobby.</div><div class="subtitle">...for your town.</div></div></div></div>'; });
  }
  if (OLD) oldBase();
  const themeReady = subredditStyle(R.sr);
  const NOTHING = '<p id="noresults" class="error">there doesn\'t seem to be anything here</p>';

  function expandoHtml(d) {
    const src = d.crosspost_parent_list && d.crosspost_parent_list[0] ? d.crosspost_parent_list[0] : d, out = [];
    if (src !== d) out.push(`<p class="tagline">crossposted from <a href="${esc(src.permalink)}">/r/${esc(src.subreddit)}</a></p>`);
    if (src.selftext_html) out.push(OLD ? `<form class="usertext"><div class="usertext-body may-blank-within md-container">${md(src.selftext_html)}</div></form>` : `<div class="usertext-body">${md(src.selftext_html)}</div>`);
    const vid = (src.secure_media && src.secure_media.reddit_video) || (src.preview && src.preview.reddit_video_preview);
    if (vid && vid.fallback_url) out.push(`<video class="r9-media" controls preload="metadata" src="${esc(vid.fallback_url)}"></video>`);
    else if (src.is_gallery && src.media_metadata) {
      const ids = src.gallery_data ? src.gallery_data.items.map((i) => i.media_id) : Object.keys(src.media_metadata);
      out.push(`<div class="r9-gallery">${ids.map((id, i) => { const m = src.media_metadata[id]; const u = m && m.s && (m.s.u || m.s.gif); return u ? `<a href="${esc(u)}"><img class="r9-media" loading="lazy" src="${esc(u)}" alt=""></a><p class="tagline">${i + 1} of ${ids.length}</p>` : ""; }).join("")}</div>`);
    } else {
      const u = src.url_overridden_by_dest || src.url || "";
      if (src.post_hint === "image" || /\.(jpe?g|png|gif|webp)(\?.*)?$/i.test(u)) out.push(`<a href="${esc(u)}"><img class="r9-media" loading="lazy" src="${esc(u)}" alt=""></a>`);
    }
    if (src.poll_data) out.push(`<table class="r9-poll">${src.poll_data.options.map((o) => `<tr><td>${esc(o.text)}</td><td>${o.vote_count == null ? "" : o.vote_count}</td></tr>`).join("")}</table><p class="tagline">${plural(src.poll_data.total_vote_count || 0, "vote")} &middot; <a href="${esc(d.permalink)}?modern">vote in new reddit</a></p>`);
    return out.join("");
  }
  const hasExpando = (d) => !!(d.selftext_html || d.is_gallery || d.poll_data || d.post_hint === "image" || (d.secure_media && d.secure_media.reddit_video) || d.crosspost_parent_list || /\.(jpe?g|png|gif|webp)(\?.*)?$/i.test(d.url || ""));
  const posts = new Map();

  const voteCls = (d) => (d.likes === true ? "likes" : d.likes === false ? "dislikes" : "unvoted");
  const flairHtml = (d, pre, cls) => { const text = d[pre + "_flair_text"], css = d[pre + "_flair_css_class"], raw = d[pre + "_flair_richtext"] || [], isRich = d[pre + "_flair_type"] === "richtext" && (raw.some((r) => r.e === "emoji") || (d[pre + "_flair_background_color"] || "transparent") !== "transparent") && !(css && root.classList.contains("r9-themed")), plain = (d[pre + "_flair_richtext"] || []).filter((r) => r.e === "text").map((r) => r.t).join("").trim(), bg = isRich ? d[pre + "_flair_background_color"] : "", rich = (isRich && d[pre + "_flair_richtext"]) || []; if (!text && !css && !rich.length) return "";
    const colored = bg && bg !== "transparent", inner = rich.length ? rich.map((r) => (r.e === "emoji" ? `<span class="flairemoji" title="${esc(r.a || "")}" style="background-image: url(${esc(r.u)})"></span>` : `<span>${esc(r.t || "")}</span>`)).join("") : esc((!isRich && plain) || text || "");
    return `<span class="${isRich ? "flairrichtext " + (d[pre + "_flair_text_color"] === "light" ? "flaircolorlight " : "flaircolordark ") : ""}${cls}${css && cls === "flair" ? " flair-" + esc(String(css).trim().split(/\s+/).join(" flair-")) : ""}" title="${esc(text || "")}"${colored ? ` style="background-color: ${esc(bg)}; border-color: ${esc(bg)};"` : ""}>${inner}</span>`; };
  const authorHtml = (d) => `<a href="/user/${esc(d.author)}/" class="author may-blank${d.is_submitter ? " submitter" : ""}${d.distinguished ? " " + esc(d.distinguished) : ""}">${esc(d.author)}</a>${flairHtml(d, "author", "flair")}${d.distinguished ? ` <span class="userattrs">[${d.distinguished === "moderator" ? "M" : "A"}]</span>` : ""}`;
  function link(d, rank, opts = {}) {
    posts.set(d.name, d);
    const self = d.is_self, href = self ? d.permalink : d.url_overridden_by_dest || d.url, dom = self ? "self." + d.subreddit : d.domain, vote = voteCls(d);
    const thumb = /^https?:/.test(d.thumbnail || "") && !d.over_18 && !d.spoiler ? d.thumbnail : null;
    const stamps = [d.over_18 && ["nsfw-stamp", "NSFW"], d.spoiler && ["spoiler-stamp", "SPOILER"], d.locked && ["locked-stamp", "LOCKED"], !OLD && d.archived && ["locked-stamp", "ARCHIVED"]].filter(Boolean).map(([c, t]) => ` <span class="${c} stamp"><acronym>${t}</acronym></span>`).join("");
    const exp = hasExpando(d);
    const etype = d.is_self ? "selftext" : "video";
    const flairCls = d.link_flair_css_class || d.link_flair_text ? ` linkflair${d.link_flair_css_class ? " linkflair-" + esc(String(d.link_flair_css_class).trim().split(/\s+/).join(" linkflair-")) : ""}` : "";
    const tcls = thumb ? "" : d.over_18 ? "nsfw" : d.spoiler ? "spoiler" : self ? "self" : "default";
    const oldThumb = OLD && (thumb || !opts.full) ? `<a class="thumbnail invisible-when-pinned may-blank ${tcls}" href="${esc(href)}">${thumb ? `<img src="${esc(thumb)}" width="70" alt="">` : ""}</a>` : "";
    return `<div class="thing id-${esc(d.name)}${flairCls} ${rank % 2 ? "odd" : "even"}${d.locked ? " locked" : ""}${d.stickied ? " stickied" : ""}${d.saved ? " saved" : ""} link${self ? " self" : ""}" id="thing_${esc(d.name)}" data-name="${esc(d.name)}" data-fullname="${esc(d.name)}" data-type="link" data-author="${esc(d.author)}" data-subreddit="${esc(d.subreddit)}" data-domain="${esc(dom)}" data-rank="${opts.norank ? "" : rank}" data-score="${d.score}" data-nsfw="${!!d.over_18}" data-spoiler="${!!d.spoiler}"><p class="parent"></p><span class="rank"${OLD ? "" : ` style="width:${opts.rankw || "2.20ex"};"`}>${opts.norank ? "" : rank}</span>
<div class="midcol ${vote}"${OLD ? "" : ` style="width:${opts.midw || "4ex"};"`}><div class="arrow up${vote === "likes" ? "mod" : ""}" data-dir="1"></div><div class="score dislikes">${d.score - 1}</div><div class="score unvoted">${d.hide_score ? "&bull;" : d.score}</div><div class="score likes">${d.score + 1}</div><div class="arrow down${vote === "dislikes" ? "mod" : ""}" data-dir="-1"></div></div>
${OLD ? oldThumb : thumb ? `<a class="thumbnail" href="${esc(href)}"><img src="${esc(thumb)}" alt=""></a>` : ""}
<div class="entry ${vote}"><div class="top-matter"><p class="title">${OLD ? "" : flairHtml(d, "link", "linkflairlabel")}<a class="title may-blank${self ? "" : " outbound"}" href="${esc(href)}"${self ? "" : ' rel="nofollow"'} tabindex="1">${esc(d.title)}</a>${OLD ? flairHtml(d, "link", "linkflairlabel") : ""} <span class="domain">(<a href="${self ? `/r/${esc(d.subreddit)}/` : `/domain/${esc(d.domain)}/`}">${esc(dom)}</a>)</span>${stamps}</p>
${exp && (!opts.full || opts.collapse) ? `<a href="#" class="expando-button collapsed hide-when-pinned ${etype}" title="expand"></a>` : ""}<p class="tagline">submitted <time class="live-timestamp" datetime="${new Date(d.created_utc * 1000).toISOString()}">${ago(d.created_utc)} ago</time>${d.edited ? ' <time class="edited-timestamp">*</time>' : ""} by ${authorHtml(d)}${d.stickied && OLD ? ' - <span class="stickied-tagline">announcement</span>' : ""}${opts.showSr === false ? "" : ` to <a href="/r/${esc(d.subreddit)}/" class="subreddit hover">${OLD ? "r/" : ""}${esc(d.subreddit)}</a>`}${d.total_awards_received ? ` <span class="r9-awards" title="awards">&#9733;${d.total_awards_received}</span>` : ""}</p>
<ul class="flat-list buttons"><li class="first"><a class="bylink comments may-blank" href="${esc(d.permalink)}">${d.num_comments ? plural(d.num_comments, "comment") : "comment"}</a></li><li class="share"><a href="${esc(d.permalink)}" class="post-sharing-button r9-act" data-act="share">share</a></li><li class="link-save-button save-button"><a href="#" class="r9-act" data-act="${d.saved ? "unsave" : "save"}">${d.saved ? "unsave" : "save"}</a></li><li><span class="state-button hide-button"><a href="#" class="r9-act" data-act="${d.hidden ? "unhide" : "hide"}">${d.hidden ? "unhide" : "hide"}</a></span></li><li class="report-button"><a href="${esc(d.permalink)}?modern" class="reportbtn r9-report">report</a></li>${OLD ? `<li class="crosspost-button"><a class="post-crosspost-button" href="/submit?source_id=${esc(d.name)}">crosspost</a></li>` : d.num_crossposts ? `<li><a href="${esc(d.permalink.replace("/comments/", "/duplicates/"))}?modern">${plural(d.num_crossposts, "crosspost")}</a></li>` : ""}</ul></div>
<div class="expando"${opts.full && !opts.collapse ? "" : ' style="display:none"'}>${opts.full && !opts.collapse ? expandoHtml(d) : ""}</div></div><div class="child"></div><div class="clearleft"></div></div><div class="clearleft"></div>`;
  }
  const kidsOf = (d) => (d.replies && d.replies.data ? d.replies.data.children : []);
  const countKids = (list) => list.reduce((a, k) => a + (k.kind === "t1" ? 1 + countKids(kidsOf(k.data)) : 0), 0);
  function more(d) {
    if (!d.count && !(d.children || []).length) return "";
    const parent = (d.parent_id || "").replace(/^t\d_/, "");
    if (!d.count) return `<div class="thing morechildren"><div class="entry"><span class="deepthread"><a href="${esc(R.permalink || location.pathname)}${esc(parent)}/">continue this thread</a></span></div></div>`;
    return `<div class="thing morechildren" data-children="${esc((d.children || []).join(","))}" data-parent="${esc(d.parent_id || "")}"><div class="entry"><span class="morecomments"><a href="#" class="r9-more">load more comments</a> <span class="gray">(${plural(d.count, "reply", "replies")})</span></span></div></div>`;
  }
  function comment(c, depth, n) {
    if (c.kind === "more") return more(c.data);
    if (c.kind !== "t1") return "";
    const d = c.data, vote = voteCls(d), kids = kidsOf(d), pts = d.score_hidden ? "[score hidden]" : plural(d.score, "point");
    const head = `${authorHtml(d)} <span class="score unvoted">${pts}</span> ${ago(d.created_utc)} ago${d.edited ? "*" : ""}${d.stickied ? ' <span class="stickied-tagline">stickied comment</span>' : ""}`;
    const buttons = OLD ? `<ul class="flat-list buttons"><li class="first"><a href="${esc(d.permalink)}" class="bylink" rel="nofollow">permalink</a></li><li><a href="https://www.reddit.com${esc(d.permalink)}?modern" class="embed-comment">embed</a></li><li class="comment-save-button save-button"><a href="#" class="r9-act" data-act="${d.saved ? "unsave" : "save"}">${d.saved ? "unsave" : "save"}</a></li>${depth ? `<li><a href="#${esc((d.parent_id || "").replace(/^t1_/, ""))}" class="bylink" rel="nofollow">parent</a></li>` : ""}<li class="report-button"><a href="${esc(d.permalink)}?modern" class="reportbtn r9-report">report</a></li><li class="reply-button"><a href="#" class="r9-reply">reply</a></li></ul>`
      : `<ul class="flat-list buttons"><li class="first"><a href="${esc(d.permalink)}" class="bylink" rel="nofollow">permalink</a></li>${depth ? `<li><a href="#${esc((d.parent_id || "").replace(/^t1_/, ""))}" class="bylink">parent</a></li>` : ""}<li class="comment-save-button save-button"><a href="#" class="r9-act" data-act="${d.saved ? "unsave" : "save"}">${d.saved ? "unsave" : "save"}</a></li><li class="reply-button"><a href="#" class="r9-reply">reply</a></li></ul>`;
    if (OLD) return `<div class="thing id-${esc(d.name)} noncollapsed comment${d.stickied ? " stickied" : ""}" id="thing_${esc(d.name)}" data-name="${esc(d.name)}" data-fullname="${esc(d.name)}" data-type="comment" data-author="${esc(d.author)}"><p class="parent"><a name="${esc(d.id)}"></a></p>
<div class="midcol ${vote}"><div class="arrow up${vote === "likes" ? "mod" : ""}" data-dir="1"></div><div class="arrow down${vote === "dislikes" ? "mod" : ""}" data-dir="-1"></div></div>
<div class="entry ${vote}"><p class="tagline"><a href="#" class="expand">[&ndash;]</a>${authorHtml(d)}<span class="userattrs"></span> <span class="score dislikes">${plural(d.score - 1, "point")}</span><span class="score unvoted">${pts}</span><span class="score likes">${plural(d.score + 1, "point")}</span> <time class="live-timestamp" title="${esc(new Date(d.created_utc * 1000).toUTCString())}">${ago(d.created_utc)} ago</time>${d.edited ? '<time class="edited-timestamp">*</time>' : ""}${d.stickied ? ' <span class="stickied-tagline">stickied comment</span>' : ""}&nbsp;<span class="numchildren">(${plural(countKids(kids), "child", "children")})</span></p>
<form class="usertext"><div class="usertext-body may-blank-within md-container">${md(d.body_html)}</div></form>${buttons}</div>
<div class="child">${kids.length ? `<div class="sitetable listing">${kids.map((k, i) => comment(k, depth + 1, i)).join("")}</div>` : ""}</div><div class="clearleft"></div></div><div class="clearleft"></div>`;
    return `<div class="thing id-${esc(d.name)} ${n % 2 ? "even" : "odd"} comment${d.stickied ? " stickied" : ""}" data-name="${esc(d.name)}"><p class="parent"><a name="${esc(d.id)}"></a></p>
<div class="midcol ${vote}"><div class="arrow up${vote === "likes" ? "mod" : ""}" data-dir="1"></div><div class="arrow down${vote === "dislikes" ? "mod" : ""}" data-dir="-1"></div></div>
<div class="entry ${vote}"><div class="collapsed" style="display:none">${head.replace('class="author', 'class="author gray')} <a href="#" class="expand">[+] (${plural(countKids(kids), "child", "children")})</a></div>
<div class="noncollapsed"><p class="tagline">${head} <a href="#" class="expand">[-]</a></p><div class="commentbody usertext-body">${md(d.body_html)}</div>
${buttons}</div></div>
<div class="child">${kids.length ? `<div class="sitetable listing">${kids.map((k, i) => comment(k, depth + 1, i)).join("")}</div>` : ""}</div><div class="clearleft"></div></div><div class="clearleft"></div>`;
  }
  function commentAsResult(d, n) {
    const vote = voteCls(d);
    if (OLD) return `<div class="thing id-${esc(d.name)} noncollapsed comment" id="thing_${esc(d.name)}" data-name="${esc(d.name)}" data-fullname="${esc(d.name)}" data-type="comment" data-author="${esc(d.author)}" data-subreddit="${esc(d.subreddit)}"><p class="parent"><a href="${esc(d.link_permalink || "#")}" class="title">${esc(d.link_title || "")}</a> by <a href="/user/${esc(d.link_author || "")}/" class="author may-blank">${esc(d.link_author || "")}</a> in <a href="/r/${esc(d.subreddit)}/" class="subreddit hover">${esc(d.subreddit)}</a></p>
<div class="midcol ${vote}"><div class="arrow up${vote === "likes" ? "mod" : ""}" data-dir="1"></div><div class="arrow down${vote === "dislikes" ? "mod" : ""}" data-dir="-1"></div></div><div class="entry ${vote}"><p class="tagline">${authorHtml(d)} <span class="score unvoted">${plural(d.score, "point")}</span> <time class="live-timestamp">${ago(d.created_utc)} ago</time></p>
<form class="usertext"><div class="usertext-body may-blank-within md-container">${md(d.body_html)}</div></form><ul class="flat-list buttons"><li class="first"><a href="${esc(d.permalink)}" class="bylink">permalink</a></li><li><a href="#" class="r9-act" data-act="${d.saved ? "unsave" : "save"}">${d.saved ? "unsave" : "save"}</a></li><li><a href="${esc(d.permalink)}?context=3" class="bylink">context</a></li><li><a href="${esc(d.link_permalink || "#")}" class="bylink">full comments${d.num_comments ? ` (${d.num_comments})` : ""}</a></li></ul></div><div class="child"></div><div class="clearleft"></div></div>`;
    return `<div class="thing id-${esc(d.name)} ${n % 2 ? "even" : "odd"} comment" data-name="${esc(d.name)}"><p class="parent"><a href="${esc(d.link_permalink || "#")}" class="title">${esc(d.link_title || "")}</a> by <a href="/user/${esc(d.link_author || "")}/" class="author">${esc(d.link_author || "")}</a> in <a href="/r/${esc(d.subreddit)}/" class="subreddit hover">${esc(d.subreddit)}</a></p>
<div class="midcol ${vote}"><div class="arrow up${vote === "likes" ? "mod" : ""}" data-dir="1"></div><div class="arrow down${vote === "dislikes" ? "mod" : ""}" data-dir="-1"></div></div><div class="entry ${vote}"><div class="noncollapsed"><p class="tagline">${authorHtml(d)} <span class="score unvoted">${plural(d.score, "point")}</span> ${ago(d.created_utc)} ago</p>
<div class="commentbody">${md(d.body_html)}</div><ul class="flat-list buttons"><li class="first"><a href="${esc(d.permalink)}" class="bylink">permalink</a></li><li><a href="${esc(d.permalink)}?context=3" class="bylink">context</a></li><li><a href="${esc(d.link_permalink || "#")}" class="bylink">full comments${d.num_comments ? ` (${d.num_comments})` : ""}</a></li><li><a href="#" class="r9-act" data-act="${d.saved ? "unsave" : "save"}">${d.saved ? "unsave" : "save"}</a></li></ul></div></div><div class="child"></div><div class="clearleft"></div></div><div class="clearleft"></div>`;
  }
  function nextprev(listing, count, n) {
    const mk = (k, v, c) => { const p = new URLSearchParams(qs); p.delete("after"); p.delete("before"); p.set("count", c); p.set(k, v); return location.pathname + "?" + p; };
    const prev = listing.before ? `<a href="${esc(mk("before", listing.before, count + 1))}" rel="nofollow prev">prev</a>` : "";
    const next = listing.after ? `<a href="${esc(mk("after", listing.after, count + n))}" rel="nofollow next">next</a>` : "";
    if (OLD) return prev || next ? `<div class="nav-buttons"><span class="nextprev">view more: ${prev ? `<span class="prev-button">${prev.replace(">prev<", ">&lsaquo; prev<")}</span>` : ""}${prev && next ? '<span class="separator"></span>' : ""}${next ? `<span class="next-button">${next.replace(">next<", ">next &rsaquo;<")}</span>` : ""}</span></div>` : "";
    return prev || next ? `<p class="nextprev">view more: ${[prev, next].filter(Boolean).join(' <span class="separator">|</span> ')}</p>` : "";
  }
  function menu(title, param, cur, names) {
    const url = (v) => { const p = new URLSearchParams(qs); p.set(param, v); ["after", "before", "count"].forEach((k) => p.delete(k)); return location.pathname + "?" + p; };
    return `<div class="spacer"><span class="dropdown-title lightdrop">${title}: </span><div class="dropdown lightdrop"><span class="selected">${names[cur] || esc(cur)}</span></div><div class="drop-choices lightdrop">${Object.entries(names).filter(([k]) => k !== cur).map(([k, l]) => `<a href="${esc(url(k))}" class="choice">${l}</a>`).join("")}</div></div>`;
  }
  const TIMES = { hour: "this hour", day: "today", week: "this week", month: "this month", year: "this year", all: "all time" };

  async function listing() {
    await themeReady;
    const p = new URLSearchParams(qs); p.set("raw_json", "1"); if (!p.has("limit")) p.set("limit", "25");
    const src = R.kind === "search" ? `${R.sr ? "/r/" + R.sr : ""}/search.json` : `${base}/${R.sort}.json`;
    const j = await page(src + "?" + p), count = parseInt(qs.get("count") || "0", 10) || 0, kids = j.data.children;
    if (R.kind === "search" && !kids.length && !qs.has("after") && letThrough()) return;
    const start = qs.has("before") ? Math.max(0, count - kids.length - 1) : count;
    const rankw = (String(start + kids.length).length * 1.1).toFixed(2) + "ex";
    const midw = (Math.max(3, ...kids.map((k) => String(k.data.score ?? 0).length)) * 1.1 + 1).toFixed(1) + "ex";
    document.title = R.kind === "search" ? "reddit.com: search results" : R.sr ? `${R.sr}: what's new online!` : "reddit.com: what's new online!";
    const menus = (R.kind === "search" ? menu("sorted by", "sort", qs.get("sort") || "relevance", { relevance: "relevance", hot: "hot", top: "top", new: "new", comments: "comments" }) : "")
      + (["top", "controversial"].includes(R.sort) || R.kind === "search" ? menu("links from", "t", qs.get("t") || (R.kind === "search" ? "all" : "day"), TIMES) : "");
    if (OLD) { const w = document.createElement("style"); w.textContent = `body >.content .link .rank, .rank-spacer { width: ${(String(start + kids.length).length * 1.1).toFixed(1)}ex } body >.content .link .midcol, .midcol-spacer { width: ${(Math.max(1, ...kids.map((k) => String(k.data.score ?? 0).length)) + 1.1).toFixed(1)}ex }`; document.head.insertBefore(w, $("#r9-srstyle")); }
    content.innerHTML = (R.kind === "search" ? `<div class="searchpane raisedbox"><form action="${esc(location.pathname)}" id="searchexpando-form"><input type="text" name="q" value="${esc(qs.get("q") || "")}"><input type="submit" value="search">${R.sr ? `<label><input type="checkbox" name="restrict_sr" ${qs.get("restrict_sr") ? "checked" : ""}> limit my search to ${esc(R.sr)}</label>` : ""}</form></div>` : "")
      + (menus ? `<div class="menuarea">${menus}</div>` : "") + `<div id="siteTable" class="sitetable linklisting">${kids.length ? kids.map((k, i) => (k.kind === "t1" ? commentAsResult(k.data, i) : k.kind === "t3" ? link(k.data, start + i + 1, { rankw, midw, showSr: !R.sr }) : "")).join("") : NOTHING}</div>` + nextprev(j.data, start, kids.length);
  }
  async function searchOld() {
    await themeReady;
    const q = qs.get("q") || "", srOnly = qs.get("type") === "sr", restrict = R.sr && qs.get("restrict_sr") !== "";
    const pn = $("#header-bottom-left .pagename"); if (pn) { pn.className = "pagename selected"; pn.textContent = "search results - " + q.toLowerCase(); }
    document.title = "reddit.com: search results - " + q;
    document.body.classList.add("combined-search-page");
    const sf = $(".side #search"); if (sf) sf.closest(".spacer").remove();
    const p = new URLSearchParams(qs); p.set("raw_json", "1"); if (!p.has("limit")) p.set("limit", "25");
    const srq = new URLSearchParams({ q, type: "sr", limit: "3", raw_json: "1" });
    const [j, srs] = await Promise.all([page(`${R.sr ? "/r/" + R.sr : ""}/search.json?${p}`), srOnly || R.sr || !q || qs.has("after") || qs.has("before") ? null : page(`/search.json?${srq}`).catch(() => null)]);
    const kids = j.data.children; if (!kids.length && q && !qs.has("after") && letThrough()) return;
    const count = parseInt(qs.get("count") || "0", 10) || 0;
    const words = q.split(/\s+/).filter((w) => w.length > 1 && !w.includes(":")).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const re = words.length ? new RegExp("(" + words.join("|") + ")", "gi") : null;
    const mark = (s) => (re ? String(s ?? "").split(re).map((x, i) => (i % 2 ? `<mark>${esc(x)}</mark>` : esc(x))).join("") : esc(s));
    const srResult = (d) => {
      const user = d.subreddit_type === "user" || /^u_/i.test(d.display_name), short = d.display_name.replace(/^u_/i, ""), name = (user ? "u/" : "r/") + short, href = user ? `/user/${short}/` : `/r/${d.display_name}/`;
      const sub = d.user_is_subscriber, label = sub ? (user ? "unfollow" : "leave") : user ? "follow" : "join";
      return `<div class=" search-result search-result-subreddit "><header class="search-result-header"><a href="${esc(href)}" class="search-title may-blank">${mark(d.title || "")}</a></header><div class="search-result-meta"><span class="fancy-toggle-button search-subscribe-button toggle"><a class="option active ${sub ? "remove" : "add"}" href="${esc(href)}">${label}</a></span><a href="${esc(href)}" class="search-subreddit-link may-blank">${mark(name)}</a> <span class="search-time">a community for ${ago(d.created_utc)}</span> </div><div class="search-result-footer"><span class="search-result-icon search-result-icon-filter"></span><a href="/r/${esc(d.display_name)}/search?q=${encodeURIComponent(q)}&amp;restrict_sr=on" class="search-link" title="search in ${esc(name)}">search within ${mark(name)}</a></div></div>`;
    };
    const postResult = (d) => {
      posts.set(d.name, d);
      const href = d.is_self ? d.permalink : d.url_overridden_by_dest || d.url, thumb = /^https?:/.test(d.thumbnail || "") && !d.over_18 && !d.spoiler ? d.thumbnail : null;
      const h = thumb && d.thumbnail_width ? Math.round(70 * (d.thumbnail_height || 70) / d.thumbnail_width) : 70, when = new Date(d.created_utc * 1000);
      const flair = flairHtml(d, "link", "linkflairlabel"), snip = (d.selftext || "").length > 600 ? d.selftext.slice(0, 600) + "..." : d.selftext || "";
      const stamps = [d.over_18 && ["nsfw-stamp", "NSFW"], d.spoiler && ["spoiler-stamp", "SPOILER"]].filter(Boolean).map(([c, t]) => ` <span class="${c} stamp"><acronym>${t}</acronym></span>`).join("");
      return `<div class=" search-result search-result-link${thumb ? " has-thumbnail" : ""} ${flair ? "has-linkflair" : "no-linkflair"} " data-fullname="${esc(d.name)}">${thumb ? `<a href="${esc(d.permalink)}" class="may-blank thumbnail "><img src="${esc(thumb)}" width="70" height="${h}" alt=""></a>` : ""}<div><header class="search-result-header"><a href="${esc(d.permalink)}" class="search-title may-blank">${mark(d.title)}</a>${flair}${stamps}</header>`
        + `<div class="search-result-meta"><span class="search-result-icon search-result-icon-score"></span><span class="search-score">${plural(d.score, "point").replace(/^\d+/, d.score.toLocaleString("en-US"))}</span> <a href="${esc(d.permalink)}" class="search-comments may-blank">${plural(d.num_comments, "comment").replace(/^\d+/, d.num_comments.toLocaleString("en-US"))}</a> <span class="search-time">submitted <time title="${esc(when.toUTCString())}" datetime="${when.toISOString()}">${ago(d.created_utc)} ago</time></span> <span class="search-author">by <a href="/user/${esc(d.author)}/" class="author may-blank">${esc(d.author)}</a><span class="userattrs"></span></span> <span>to <a href="/r/${esc(d.subreddit)}/" class="search-subreddit-link may-blank">r/${esc(d.subreddit)}</a></span></div>`
        + (d.is_self ? (snip ? `<div class="search-result-body"><div class="md"><p>${mark(snip)}</p></div></div>` : "") : `<div class="search-result-footer"><span class="search-result-icon search-result-icon-external"></span><a href="${esc(href)}" class="search-link may-blank">${esc(href)}</a></div>`) + "</div></div>";
    };
    const times = { hour: "past hour", day: "past 24 hours", week: "past week", month: "past month", year: "past year", all: "all time" };
    const smenu = (...a) => menu(...a).replace('<div class="spacer">', '<div class="search-menu">');
    const more = (srs && srs.data.children.length && srs.data.after) ? `<footer><div class="nav-buttons"><span class="nextprev">view more: <a href="/search?q=${encodeURIComponent(q)}&amp;type=sr&amp;count=3&amp;after=${esc(srs.data.after)}" rel="nofollow next">next &rsaquo;</a></span></div></footer>` : "";
    content.innerHTML = `<div class="searchpane raisedbox"><h4 style="color:gray">search</h4><div id="previoussearch"><form action="${R.sr ? `/r/${esc(R.sr)}/search` : "/search"}" id="search" role="search"><input type="text" value="${esc(q)}" style="color:black" name="q" placeholder="search" tabindex="20"><button class="search-submit-button c-btn c-btn-primary" type="submit" aria-label="Search"><span class="search-icon"></span></button>`
      + (R.sr ? `<label><input type="checkbox" name="restrict_sr" tabindex="21"${restrict ? " checked" : ""}>limit my search to r/${esc(R.sr)}</label>` : '<input type="hidden" name="restrict_sr">')
      + `<label><input type="checkbox" name="include_over_18" tabindex="21"${qs.get("include_over_18") === "on" ? " checked" : ""}>include NSFW results</label><p><a href="/wiki/search?modern" id="search_showmore">advanced search: by author, subreddit...</a></p>${srOnly ? '<input type="hidden" name="type" value="sr">' : `<input type="hidden" name="sort" value="${esc(qs.get("sort") || "relevance")}"><input type="hidden" name="t" value="${esc(qs.get("t") || "all")}">`}</form></div></div>`
      + (srs && srs.data.children.length ? `<div class="listing search-result-listing"><div class="search-result-group"><div class="contents">${srs.data.children.map((k) => srResult(k.data)).join("")}</div>${more}</div></div>` : "")
      + (srOnly ? `<div class="listing search-result-listing"><div class="search-result-group"><header class="search-result-group-header"><span class="search-header-label">subreddits</span></header><div class="contents">${kids.map((k) => (k.kind === "t5" ? srResult(k.data) : "")).join("") || NOTHING}</div><footer>${nextprev(j.data, count, kids.length)}</footer></div></div>`
        : `<div class="listing search-result-listing"><div class="search-result-group"><header class="search-result-group-header"><span class="search-header-label">posts</span><div class="search-header-menus">${smenu("sorted by", "sort", qs.get("sort") || "relevance", { relevance: "relevance", hot: "hot", top: "top", new: "new", comments: "comments" })}${smenu("links from", "t", qs.get("t") || "all", times)}</div></header><div class="contents">${kids.map((k) => (k.kind === "t3" ? postResult(k.data) : "")).join("") || NOTHING}</div><footer>${nextprev(j.data, count, kids.length)}</footer></div></div>`);
  }
  async function media() {
    const u = qs.get("url"); let ok = false; try { const x = new URL(u); ok = x.protocol === "https:" && /(^|\.)(redd\.it|redditmedia\.com|redditstatic\.com|imgur\.com)$/.test(x.hostname); } catch (e) {}
    document.title = "reddit.com: " + (u || "").split("/").pop();
    const vid = /\.(mp4|webm)(\?|$)/i.test(u || "");
    content.innerHTML = ok ? `<div class="r9-media">${vid ? `<video src="${esc(u)}" controls autoplay loop></video>` : `<a href="${esc(u)}"><img src="${esc(u)}" alt=""></a>`}<p><a href="${esc(u)}">${esc(u)}</a></p></div>` : `<p class="error">can't show this file here. <a href="${esc(u || "/")}" rel="nofollow">open it</a></p>`;
  }
  async function comments() {
    const p = new URLSearchParams(); p.set("raw_json", "1"); p.set("limit", qs.get("limit") || "200"); for (const k of ["sort", "context", "depth"]) if (qs.get(k)) p.set(k, qs.get(k));
    const j = await page(`/comments/${R.id}${R.focus ? "/_/" + R.focus : ""}.json?${p}`), d = j[0].data.children[0].data, kids = j[1].data.children;
    R.permalink = d.permalink; R.link = d.name;
    if (!R.sr) { R.sr = d.subreddit; await subredditStyle(R.sr); } else await themeReady;
    document.title = `${d.title} : ${d.subreddit}`;
    const sorts = { confidence: "best", top: "top", new: "new", controversial: "controversial", old: "old", qa: "q&a" }, cur = qs.get("sort") || d.suggested_sort || "confidence";
    const head = $("#header-bottom-left .tabmenu"); if (!$("#header-bottom-left .pagename")) head.insertAdjacentHTML("beforebegin", `<span class="hover pagename redditname"><a href="/r/${esc(d.subreddit)}/">${esc(d.subreddit)}</a></span>`);
    head.innerHTML = `<li class="selected"><a href="${esc(d.permalink)}">comments</a></li><li><a href="${esc(d.permalink.replace("/comments/", "/duplicates/"))}?modern">other discussions${d.num_crossposts ? ` (${d.num_crossposts})` : ""}</a></li>`;
    const ratio = d.upvote_ratio || 1, ups = Math.round(d.score * ratio / Math.max(0.01, 2 * ratio - 1)) || d.score;
    $("#r9-info").innerHTML = `<div class="raisedbox linkinfo"><table class="details"><tr><th>submitted on</th><td>${new Date(d.created_utc * 1000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td></tr><tr><th>points</th><td class="score">${d.score}</td></tr><tr><th>up votes</th><td class="upvotes">${ups} (${Math.round(ratio * 100)}%)</td></tr><tr><th>down votes</th><td class="downvotes">${Math.max(0, ups - d.score)}</td></tr></table></div>`;
    if (OLD) $("#r9-info").innerHTML = `<div class="linkinfo"><div class="date"><span>this post was submitted on &nbsp;</span><time>${new Date(d.created_utc * 1000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</time></div><div class="score"><span class="number">${d.score.toLocaleString("en-US")}</span> <span class="word">points</span> (${Math.round(ratio * 100)}% upvoted)</div><div class="shortlink">shortlink: <input type="text" value="https://redd.it/${esc(d.id)}" readonly></div></div>`;
    content.innerHTML = `<div id="siteTable" class="sitetable linklisting">${link(d, 1, { norank: true, rankw: "0px", midw: (String(d.score).length * 1.1 + 1).toFixed(1) + "ex", full: true, showSr: OLD ? false : undefined, collapse: OLD && !d.is_self })}</div>
${OLD ? `<div class="commentarea"><div class="panestack-title">${d.num_comments > 200 && !qs.get("limit") ? `<span class="title">top 200 comments</span><a href="${esc(d.permalink)}?limit=500" class="title-button ">show all ${d.num_comments.toLocaleString("en-US")}</a>` : `<span class="title">all ${plural(d.num_comments, "comment")}</span>`}</div>` : ""}
<div class="menuarea">${menu(OLD ? "sorted by" : "sort by", "sort", cur, sorts)}</div>
${R.focus ? `<div class="infobar"><p>you are viewing a single comment's thread. <a href="${esc(d.permalink)}">view the rest of the comments</a></p></div>` : ""}
${d.locked || d.archived ? "" : `<div class="r9-newcomment" data-name="${esc(d.name)}"></div>`}
<div class="sitetable nestedlisting" id="r9-comments">${kids.map((k, i) => comment(k, 0, i)).join("") || NOTHING}</div>${OLD ? "</div>" : ""}`;
    subredditBox(d.subreddit);
  }
  async function user() {
    const p = new URLSearchParams(qs); p.set("raw_json", "1"); if (!p.has("limit")) p.set("limit", "25");
    let j; try { j = await page(`/user/${R.user}/${R.tab}.json?${p}`); } catch (e) { if (/^40[13]/.test(e.message) && OWN_TABS.includes(R.tab)) { content.innerHTML = `<p class="error">${esc(R.tab)} is only visible to ${esc(R.user)}. <a href="/login/?modern">log in</a> if that is you.</p>`; return; } throw e; }
    const kids = j.data.children, count = parseInt(qs.get("count") || "0", 10) || 0;
    document.title = `${R.tab} for ${R.user}`;
    const menus = menu("sorted by", "sort", qs.get("sort") || "new", { new: "new", hot: "hot", top: "top", controversial: "controversial" }) + (["top", "controversial"].includes(qs.get("sort")) ? menu("links from", "t", qs.get("t") || "all", TIMES) : "");
    content.innerHTML = `<div class="menuarea">${menus}</div><div id="siteTable" class="sitetable linklisting">${kids.map((k, i) => (k.kind === "t1" ? commentAsResult(k.data, i) : link(k.data, count + i + 1, { norank: true, rankw: "0px" }))).join("") || NOTHING}</div>` + nextprev(j.data, count, kids.length);
    try { const a = (await cached(`/user/${R.user}/about.json?raw_json=1`, 30)).data;
      if (OLD) $("#r9-info").innerHTML = `<div class="titlebox"><h1>${esc(a.name)}</h1><span class="karma">${(a.link_karma || 0).toLocaleString("en-US")}</span> post karma<br><span class="karma comment-karma">${(a.comment_karma || 0).toLocaleString("en-US")}</span> comment karma<br><a href="/message/compose/?to=${esc(a.name)}&modern">send a private message</a><div class="bottom"><span class="age">redditor for <time>${ago(a.created_utc)}</time></span></div></div>`;
      else $("#r9-info").innerHTML = `<div class="raisedbox"><h3>${esc(a.name)}</h3><table class="details"><tr><th>link karma</th><td>${a.link_karma}</td></tr><tr><th>comment karma</th><td>${a.comment_karma}</td></tr>${a.total_karma != null ? `<tr><th>total karma</th><td>${a.total_karma}</td></tr>` : ""}</table><p class="tagline">redditor for ${ago(a.created_utc)}${a.is_gold ? " &middot; premium" : ""}${a.is_mod ? " &middot; moderator" : ""}</p><p class="tagline"><a href="/message/compose/?to=${esc(a.name)}&modern">send a message</a> &middot; <a href="/user/${esc(a.name)}/?modern">follow / chat in new reddit</a></p></div>`; } catch (e) {}
  }
  async function moderatorsBox(sr, after, left) {
    try { const mods = (await cached(`/r/${sr}/about/moderators.json?raw_json=1`, 1440)).data.children || []; if (!mods.length) return;
      const box = document.createElement("div"); box.className = "spacer";
      box.innerHTML = `<div class="sidecontentbox"><div class="title"><h1>MODERATORS</h1></div><ul class="content"><li class="message-button centered"><a class="c-btn c-btn-primary" href="/message/compose/?to=/r/${esc(sr)}&modern">message the mods</a></li>${mods.slice(0, 10).map((m) => `<li>${left ? flairHtml(m, "author", "flair") : ""}<a href="/user/${esc(m.name)}/" class="author may-blank id-${esc(m.id || "")}">${esc(m.name)}</a>${left ? "" : flairHtml(m, "author", "flair")}<span class="userattrs"></span></li>`).join("")}${mods.length > 10 ? `<li class="more"><a href="/r/${esc(sr)}/about/moderators?modern">...and ${mods.length - 10} more &raquo;</a></li>` : ""}</ul></div>`;
      const create = $(".side .sidebox.create"); (create ? create.closest(".spacer") : after).after(box);
    } catch (e) {}
  }
  async function subredditBox(sr) {
    if (!sr || /^(all|popular)$/i.test(sr)) return;
    try { const a = (await cached(`/r/${sr}/about.json?raw_json=1`, 30)).data, box = document.createElement("div"); box.className = "spacer";
      const styleToggle = `<label class="r9-usestyle"><input type="checkbox" ${localStorage.getItem("oldreddit-nostyle:" + sr.toLowerCase()) ? "" : "checked"}> use subreddit style</label>`;
      const sidebar = a.description_html || a.public_description_html ? `<div class="usertext-body may-blank-within md-container">${md(a.description_html || a.public_description_html)}</div>` : "";
      box.innerHTML = OLD
        ? `<div class="titlebox" data-name="${esc(a.name)}"><h1 class="hover redditname"><a href="/r/${esc(a.display_name)}/" class="hover">${esc(a.display_name)}</a></h1><span class="fancy-toggle-button subscribe-button toggle"><a class="option active r9-sub ${a.user_is_subscriber ? "remove" : "add"}" href="#">${a.user_is_subscriber ? "leave" : "join"}</a></span><span class="subscribers"><span class="number">${(a.subscribers || 0).toLocaleString("en-US")}</span> <span class="word">readers</span></span>${a.accounts_active ? `<p class="users-online" title="users viewing this subreddit"><span class="number">${a.accounts_active.toLocaleString("en-US")}</span> <span class="word">users here now</span></p>` : ""}${sidebar}<div class="bottom"><span class="age">a community for <time>${ago(a.created_utc)}</time></span> &middot; ${styleToggle} &middot; <a href="/r/${esc(a.display_name)}/about/?modern">mods, wiki</a></div></div>`
        : `<div class="titlebox raisedbox subreddit-info" data-name="${esc(a.name)}"><h1 class="hover redditname"><a class="hover" href="/r/${esc(a.display_name)}/">${esc(a.display_name)}</a></h1><a href="#" class="r9-sub subscribe-button ${a.user_is_subscriber ? "remove" : "add"}">${a.user_is_subscriber ? "unsubscribe" : "subscribe"}</a><span class="subscribers label"><span class="number">${(a.subscribers || 0).toLocaleString("en-US")}</span> <span class="word">readers</span></span>${a.accounts_active ? `<p class="users-online"><span class="number">${a.accounts_active.toLocaleString("en-US")}</span> <span class="word">users here now</span></p>` : ""}${sidebar}<div class="bottom"><span class="age">a community for ${ago(a.created_utc)}</span></div><p class="tagline">${styleToggle} &middot; <a href="/r/${esc(a.display_name)}/about/?modern">rules, mods, wiki in new reddit</a></p></div>`;
      ($("#r9-login") || $("#r9-info")).after(box);
      if (OLD) { document.querySelectorAll(".side .sidebox.submit").forEach((n) => n.closest(".spacer").remove()); box.insertAdjacentHTML("beforebegin", (a.submission_type === "self" ? "" : `<div class="spacer"><div class="sidebox submit submit-link"><div class="morelink"><a href="/r/${esc(a.display_name)}/submit?modern">${esc(a.submit_link_label || "Submit a new link")}</a><div class="nub"></div></div></div></div>`) + (a.submission_type === "link" ? "" : `<div class="spacer"><div class="sidebox submit submit-text"><div class="morelink"><a href="/r/${esc(a.display_name)}/submit?selftext=true&modern">${esc(a.submit_text_label || "Submit a new text post")}</a><div class="nub"></div></div></div></div>`));
        if (a.user_is_subscriber) document.body.classList.add("subscriber"); }
      moderatorsBox(a.display_name, box, a.user_flair_position === "left");
      if (a.header_img && !localStorage.getItem("oldreddit-nostyle:" + sr.toLowerCase())) { const h = $("#header-img"); if (h) h.outerHTML = `<img id="header-img" src="${esc(a.header_img)}" alt="${esc(a.display_name)}"${a.header_size ? ` width="${+a.header_size[0]}" height="${+a.header_size[1]}"` : ""}>`; }
    } catch (e) {}
  }
  async function whoami() {
    try { const j = await cached("/api/me.json?raw_json=1", 3), d = j.data || j; if (!d || !d.name) return;
      me.name = d.name; me.modhash = d.modhash || ""; document.body.classList.add("loggedin");
      if (OLD) $("#header-bottom-right").innerHTML = `<span class="user"><a href="/user/${esc(d.name)}/">${esc(d.name)}</a>&nbsp;(<span class="userkarma" title="post karma">${(d.link_karma || 0).toLocaleString("en-US")}</span>)</span><span class="separator">|</span><a title="${d.has_mail || d.inbox_count ? "new mail!" : "no new mail"}" href="/message/unread/?modern" class="${d.has_mail || d.inbox_count ? "havemail" : "nohavemail"}" id="mail">messages</a>${d.inbox_count ? `<a href="/message/unread/?modern" class="message-count">${d.inbox_count}</a>` : ""}<span class="separator">|</span><a title="notifications" href="/notifications/?modern" id="notifications">notifications</a><span class="separator">|</span><a href="https://chat.reddit.com" target="chat-app" id="chat">chat messages</a><span class="separator">|</span><ul class="flat-list hover"><li><a href="/settings/?modern" class="pref-lang choice">preferences</a></li></ul><span class="separator">|</span><form method="post" action="https://old.reddit.com/logout" class="logout hover"><input type="hidden" name="uh" value="${esc(me.modhash)}"><input type="hidden" name="top" value="off"><input type="hidden" name="dest" value="https://www.reddit.com/"><a href="javascript:void(0)" onclick="this.parentNode.submit()">logout</a></form>`;
      else $("#header-bottom-right").innerHTML = `<span class="user"><a href="/user/${esc(d.name)}/">${esc(d.name)}</a>&nbsp;(<span class="userkarma" title="post karma">${d.link_karma || 0}</span> &middot; <span title="comment karma">${d.comment_karma || 0}</span>)</span><span class="separator">|</span><a href="/message/inbox/?modern" id="mail" class="${d.has_mail || d.inbox_count ? "havemail" : "nohavemail"}" title="messages">messages</a>${d.inbox_count ? `<a href="/message/unread/?modern" class="message-count">${d.inbox_count}</a>` : ""}<span class="separator">|</span><a href="/chat/?modern" id="chat">chat</a><span class="separator">|</span><ul class="flat-list hover"><li><a href="/settings/?modern" class="pref-lang">preferences</a></li></ul><span class="separator">|</span><a href="${esc(location.pathname)}?modern">new reddit</a>`;
      const login = $("#r9-login"); if (login) login.remove();
      if (OLD && R.kind === "listing" && !$(".listing-chooser")) {
        const open = localStorage.getItem("oldreddit-lc") === "open", front = !R.sr && !R.domain;
        document.body.classList.add("with-listing-chooser"); if (!open) document.body.classList.add("listing-chooser-collapsed");
        content.insertAdjacentHTML("beforebegin", `<div class="listing-chooser initialized"><div class="grippy"></div><div class="contents"><ul class="global"><li${front ? ' class="selected"' : ""}><a href="/">home<br><span class="description">the home feed</span></a></li></ul><h3>multireddits</h3><ul class="multis"><li><a href="/r/multihub/?modern">explore multis<br><span class="description"></span></a></li></ul><ul class="other"><li${(R.sr || "").toLowerCase() === "all" ? ' class="selected"' : ""}><a href="/r/all/">everything<br><span class="description">from all subreddits</span></a></li><li><a href="/user/${esc(d.name)}/saved/">saved<br><span class="description"></span></a></li></ul></div></div>`);
        $(".listing-chooser .grippy").addEventListener("click", () => { const c = document.body.classList.toggle("listing-chooser-collapsed"); try { localStorage.setItem("oldreddit-lc", c ? "closed" : "open"); } catch (e) {} });
      }
      if (!OLD && R.kind === "listing" && !R.sr && !R.domain) $(".tabmenu").insertAdjacentHTML("beforeend", `<li><a href="/user/${esc(d.name)}/saved/">saved</a></li>`);
      try { const subs = (await cached("/subreddits/mine/subscriber.json?limit=100&raw_json=1", 60)).data.children.map((c) => c.data.display_name).sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
        if (subs.length && OLD) { const order = (await cached("/subreddits/mine/subscriber.json?limit=100&raw_json=1", 60)).data.children.map((c) => c.data.display_name), cur = (R.sr || "").toLowerCase();
          $("#r9-mine").innerHTML = subs.map((s) => `<a href="/r/${esc(s)}/" class="choice">${esc(s)}</a>`).join("") + '<a href="/subreddits/?modern" class="bottom-option choice">edit subscriptions</a>';
          $("#r9-subbar").innerHTML = order.map((s, i) => `<li${cur === s.toLowerCase() ? ' class="selected"' : ""}>${i ? '<span class="separator">-</span>' : ""}<a href="/r/${esc(s)}/" class="choice">${esc(s)}</a></li>`).join(""); $(".r9-subsep").style.display = ""; }
        else if (subs.length) { $("#r9-mine").innerHTML = subs.map((s) => `<a href="/r/${esc(s)}/" class="choice">${esc(s)}</a>`).join("") + '<a href="/subreddits/?modern" class="choice bottom-option">edit</a>';
          $("#sr-bar").innerHTML = '<li><a href="/r/popular/">popular</a></li><li><span class="separator">-</span><a href="/r/all/">all</a></li>' + subs.slice(0, 40).map((s) => `<li><span class="separator">-</span><a href="/r/${esc(s)}/">${esc(s)}</a></li>`).join(""); } } catch (e) {}
    } catch (e) {}
  }
  const replyForm = (label, top) => OLD ? `<form class="usertext cloneable r9-form"><div class="usertext-edit md-container"><div class="md"><textarea rows="1" cols="1" name="text"></textarea></div><div class="bottom-area"><span class="help-toggle toggle"><a class="option active" href="/wiki/markdown?modern" target="_blank">formatting help</a></span><a href="/help/contentpolicy" class="reddiquette" target="_blank">content policy</a><div class="usertext-buttons"><button type="submit" class="save">${label}</button><button type="button" class="cancel"${top ? ' style="display:none"' : ""}>cancel</button><span class="status error"></span></div></div></div></form>`
    : `<form class="usertext r9-form"><div class="usertext-edit"><textarea rows="5" cols="60" name="text"></textarea><div class="bottom-area"><button type="submit" class="save">${label}</button> <button type="button" class="cancel">cancel</button> <span class="status error"></span></div></div></form>`;

  document.addEventListener("click", async (ev) => {
    const t = ev.target, thing = t.closest && t.closest(".thing");
    if (t.closest(".dropdown")) { ev.preventDefault(); const c = t.closest(".dropdown").nextElementSibling, open = c.classList.contains("inuse"); document.querySelectorAll(".drop-choices.inuse").forEach((n) => n.classList.remove("inuse")); if (!open) c.classList.add("inuse"); return; }
    document.querySelectorAll(".drop-choices.inuse").forEach((n) => n.classList.remove("inuse"));
    if (t.classList.contains("expand") && OLD) { ev.preventDefault(); const c = thing.classList.toggle("collapsed"); thing.classList.toggle("noncollapsed", !c); t.innerHTML = c ? "[+]" : "[&ndash;]"; return; }
    if (t.classList.contains("expand")) { ev.preventDefault(); const e = t.closest(".entry"), hide = !!t.closest(".noncollapsed");
      $(".collapsed", e).style.display = hide ? "" : "none"; $(".noncollapsed", e).style.display = hide ? "none" : ""; $(":scope > .child", thing).style.display = hide ? "none" : ""; $(":scope > .midcol", thing).style.visibility = hide ? "hidden" : ""; return; }
    if (t.classList.contains("expando-button")) { ev.preventDefault(); const box = $(".expando", thing), open = t.classList.toggle("expanded"); t.classList.toggle("collapsed", !open);
      if (open && !box.innerHTML) box.innerHTML = expandoHtml(posts.get(thing.dataset.name) || {}); box.style.display = open ? "" : "none"; if (!open) box.querySelectorAll("video").forEach((v) => v.pause()); return; }
    if (t.classList.contains("arrow")) {
      if (!me.name) { location.href = "/login/?modern"; return; }
      const mid = t.closest(".midcol"), entry = $(":scope > .entry", thing), dir = +t.dataset.dir;
      const was = mid.classList.contains("likes") ? 1 : mid.classList.contains("dislikes") ? -1 : 0, now = was === dir ? 0 : dir, cls = now === 1 ? "likes" : now === -1 ? "dislikes" : "unvoted";
      for (const n of [mid, entry]) { n.classList.remove("likes", "dislikes", "unvoted"); n.classList.add(cls); }
      $(".arrow[data-dir='1']", mid).className = "arrow " + (now === 1 ? "upmod" : "up"); $(".arrow[data-dir='-1']", mid).className = "arrow " + (now === -1 ? "downmod" : "down");
      api("vote", { id: thing.dataset.name, dir: String(now) }).catch(() => {}); return;
    }
    if (t.classList.contains("r9-act")) { ev.preventDefault(); const act = t.dataset.act;
      if (act === "share") { try { await navigator.clipboard.writeText(new URL(t.getAttribute("href"), location.origin).href); t.textContent = "link copied"; } catch (e) { location.href = t.href; } return; }
      try { await api(act, { id: thing.dataset.name }); const flip = { save: "unsave", unsave: "save", hide: "unhide", unhide: "hide" }[act]; t.dataset.act = flip; t.textContent = flip; if (act === "hide") thing.style.display = "none"; } catch (e) {} return; }
    if (t.classList.contains("r9-sub")) { ev.preventDefault(); const box = t.closest(".titlebox"), sub = t.classList.contains("add");
      try { uncache(/subreddits\/mine|\/about\.json/); await api("subscribe", { action: sub ? "sub" : "unsub", sr: box.dataset.name }); t.classList.toggle("add", !sub); t.classList.toggle("remove", sub); t.textContent = OLD ? (sub ? "leave" : "join") : sub ? "unsubscribe" : "subscribe"; document.body.classList.toggle("subscriber", sub); } catch (e) {} return; }
    if (t.classList.contains("r9-reply")) { ev.preventDefault(); if (!me.name) { location.href = "/login/?modern"; return; }
      const child = $(":scope > .child", thing); if (!$(":scope > .r9-form", child)) child.insertAdjacentHTML("afterbegin", replyForm("save")); $(":scope > .r9-form textarea", child).focus(); return; }
    if (t.classList.contains("cancel") && t.closest(".r9-form")) { const f = t.closest(".r9-form"); if (f.parentNode.classList.contains("r9-newcomment")) f.reset(); else f.remove(); return; }
    if (t.classList.contains("r9-more")) { ev.preventDefault(); const m = t.closest(".morechildren"), ids = m.dataset.children.split(",").filter(Boolean); t.textContent = "loading...";
      try { const j = await get(`/api/morechildren.json?api_type=json&raw_json=1&link_id=${R.link}&children=${ids.slice(0, 100).join(",")}${qs.get("sort") ? "&sort=" + qs.get("sort") : ""}`), things = (j.json && j.json.data && j.json.data.things) || [];
        const holder = m.parentNode, rest = ids.slice(100); let n = 0;
        for (const c of things) { const pid = c.data.parent_id, parent = pid && pid.startsWith("t1_") ? $(`.thing.id-${pid}`) : null; let table = holder;
          if (parent && parent !== m.closest(".thing.comment")) { const ch = $(":scope > .child", parent); table = $(":scope > .sitetable", ch) || ch.appendChild(Object.assign(document.createElement("div"), { className: "sitetable listing" })); }
          const html = comment(c, parent ? 1 : 0, n++); if (table === holder) m.insertAdjacentHTML("beforebegin", html); else table.insertAdjacentHTML("beforeend", html); }
        if (rest.length) { m.dataset.children = rest.join(","); t.textContent = "load more comments"; } else m.remove();
      } catch (e) { t.textContent = "load more comments (failed, try again)"; } return; }
    if (t.classList.contains("pref-lang") && t.getAttribute("href") === "#") ev.preventDefault();
  });
  document.addEventListener("change", (ev) => { const l = ev.target.closest && ev.target.closest(".r9-usestyle"); if (!l || !R.sr) return; const k = "oldreddit-nostyle:" + R.sr.toLowerCase(); if (ev.target.checked) localStorage.removeItem(k); else localStorage.setItem(k, "1"); location.reload(); });
  document.addEventListener("submit", async (ev) => {
    const f = ev.target; if (!f.classList.contains("r9-form")) return; ev.preventDefault();
    const text = f.text.value.trim(), status = $(".status", f); if (!text) return;
    const top = f.parentNode.classList.contains("r9-newcomment"), parentName = top ? f.parentNode.dataset.name : f.closest(".thing").dataset.name;
    try { const j = await api("comment", { thing_id: parentName, text }), errs = j.json && j.json.errors; if (errs && errs.length) throw new Error(errs[0][1] || errs[0][0]);
      const c = j.json.data.things[0], html = comment(c, top ? 0 : 1, 0);
      if (top) { $("#r9-comments").insertAdjacentHTML("afterbegin", html); f.reset(); }
      else { const child = f.parentNode; f.remove(); const table = $(":scope > .sitetable", child) || child.appendChild(Object.assign(document.createElement("div"), { className: "sitetable listing" })); table.insertAdjacentHTML("afterbegin", html); }
    } catch (e) { status.textContent = e.message; }
  });
  document.addEventListener("focusin", (ev) => { const i = ev.target; if (i.matches && i.matches("#search input[name=q]") && i.value === "search reddit") { i.value = ""; i.classList.remove("gray"); } });

  (async () => {
    const who = whoami();
    try { await ({ listing, search: OLD ? searchOld : listing, comments, user, media }[R.kind])(); if (R.kind !== "comments") subredditBox(R.sr); }
    catch (e) {
      if (e.status === 429) { let n = Math.min(Math.max(e.wait || 60, 5), 600); const tick = () => { content.innerHTML = `<p class="error">reddit is rate limiting this browser. trying again in ${n} s. <a href="${esc(location.pathname)}?modern">open it in new reddit</a></p>`; if (n-- <= 0) location.reload(); else setTimeout(tick, 1000); }; tick(); return; }
      if (letThrough()) return; content.innerHTML = `<p class="error">old reddit could not load this page (${esc(e.message)}). <a href="${esc(location.pathname)}?modern">open it in new reddit</a></p>`; }
    await who; const box = $(".r9-newcomment"); if (box && me.name && !box.innerHTML) box.innerHTML = replyForm("save", true);
    if (location.hash) { const a = document.getElementsByName(location.hash.slice(1))[0]; if (a) a.scrollIntoView(); }
  })();
})();
