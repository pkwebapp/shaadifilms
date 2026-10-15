/* Shaadi Films prototype behaviour. Vanilla JS, no dependencies.
   Every feature degrades: content is readable with JS off. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Desktop dropdowns: click/Enter/Space toggles, Esc closes, outside click closes ---- */
  $$(".navbtn").forEach(function (btn) {
    var menu = document.getElementById(btn.getAttribute("aria-controls"));
    if (!menu) return;
    function set(open) { btn.setAttribute("aria-expanded", open ? "true" : "false"); menu.classList.toggle("open", open); }
    btn.addEventListener("click", function (e) { e.stopPropagation(); set(btn.getAttribute("aria-expanded") !== "true"); });
    btn.parentElement.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); btn.focus(); } });
    document.addEventListener("click", function (e) { if (!btn.parentElement.contains(e.target)) set(false); });
    btn.parentElement.addEventListener("focusout", function (e) { if (!btn.parentElement.contains(e.relatedTarget)) set(false); });
  });

  /* ---- Mobile sheet with focus trap ---- */
  var sheet = $("#menu-sheet"), burger = $(".burger");
  if (sheet && burger) {
    var lastFocus;
    function openSheet(open) {
      sheet.classList.toggle("open", open);
      sheet.setAttribute("aria-hidden", open ? "false" : "true");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) { lastFocus = burger; setTimeout(function () { $(".sheet-close", sheet).focus(); }, 30); }
      else if (lastFocus) { $$("main, .site-header, .site-footer, .dock").forEach(function (el) { el.inert = false; }); lastFocus.focus(); }
    }
    burger.addEventListener("click", function () { openSheet(true); });
    $(".sheet-close", sheet).addEventListener("click", function () { openSheet(false); });
    sheet.addEventListener("keydown", function (e) {
      if (e.key === "Escape") openSheet(false);
      if (e.key !== "Tab") return;
      var f = $$("a, button", sheet).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  }

  /* ---- Reveals: only hide content when motion is allowed and IO exists ---- */
  if (!reduce && "IntersectionObserver" in window) {
    var rio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.remove("pre"); e.target.classList.add("in");
        rio.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });
    $$(".rv, .reveal-img").forEach(function (el, i) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) { el.classList.add("in"); return; } /* above the fold: stays visible */
      if (el.classList.contains("rv")) { el.classList.add("pre"); el.style.transitionDelay = ((i % 3) * 60) + "ms"; }
      rio.observe(el);
    });
  } else {
    $$(".reveal-img").forEach(function (el) { el.classList.add("in"); });
  }

  /* Load the hero reel only on request on mobile; desktop can play after load. */
  var hv = $(".hero video");
  if (hv) {
    var toggle = $("#hero-toggle"), source = $("source", hv);
    function heroLabel(playing) { toggle.setAttribute("aria-pressed", String(playing)); $("span",toggle).textContent=playing ? "Pause film" : "Play film"; }
    function loadHero() { if (source && source.dataset.src && !source.src) { source.src=source.dataset.src; hv.load(); } }
    function playHero() { loadHero(); hv.play().then(function(){heroLabel(true);}).catch(function(){heroLabel(false);}); }
    toggle.addEventListener("click",function(){if(hv.paused)playHero();else {hv.pause();heroLabel(false);}});
    var saveData=navigator.connection && navigator.connection.saveData;
    if (!reduce && !saveData && matchMedia("(min-width: 900px)").matches) {
      if(document.readyState==="complete")playHero();else window.addEventListener("load",playHero,{once:true});
    }
    if("IntersectionObserver" in window)new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting){hv.pause();heroLabel(false);}});}).observe(hv);
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",function(e){reduce=e.matches;if(reduce){hv.pause();heroLabel(false);}});
    document.addEventListener("visibilitychange",function(){if(document.hidden){hv.pause();heroLabel(false);}});
  }

  /* ---- Film modal: loads the film only when asked ---- */
  var modal = $("#film-modal");
  if (modal) {
    var mv = $("video", modal), mcap = $(".cap-title", modal), opener;
    function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); mv.pause(); mv.removeAttribute("src"); mv.load(); document.body.style.overflow = ""; if (opener) { $$("main, .site-header, .site-footer, .dock").forEach(function (el) { el.inert = false; }); opener.focus(); } }
    $$("[data-film]").forEach(function (b) {
      b.addEventListener("click", function () {
        opener = b; mv.src = b.getAttribute("data-film"); mv.poster = b.getAttribute("data-poster") || "";
        mcap.textContent = b.getAttribute("data-title") || "Film";
        modal.inert=false; modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
        $(".close", modal).focus(); mv.play().catch(function () {});
      });
    });
    $(".close", modal).addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });
  }

  /* Accessible photograph viewer, with real image links when JavaScript is off. */
  var lb = $("#lightbox");
  if (lb) {
    var items=$$("[data-full]"), activeItems=[],idx=0,img=$("img",lb),cap=$(".lb-cap",lb),lbOpener;
    function show(i){idx=(i+activeItems.length)%activeItems.length;var it=activeItems[idx];img.src=it.dataset.full;var original=$("img",it);img.alt=original?original.alt:(it.dataset.caption||"Wedding photograph");cap.textContent=(idx+1)+" / "+activeItems.length+" · "+img.alt;$("#photo-original").href=it.dataset.full;}
    function close(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";if(lbOpener){$$("main,.site-header,.site-footer,.dock").forEach(function(el){el.inert=false;});lbOpener.focus();}}
    items.forEach(function(it){it.addEventListener("click",function(e){if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();lbOpener=it;activeItems=items.filter(function(el){return !el.hidden&&!el.closest("[hidden]");});show(activeItems.indexOf(it));lb.inert=false;lb.classList.add("open");lb.setAttribute("aria-hidden","false");$(".prev",lb).hidden=activeItems.length<2;$(".next",lb).hidden=activeItems.length<2;document.body.style.overflow="hidden";$(".close",lb).focus();});});
    $(".close",lb).addEventListener("click",close);$(".prev",lb).addEventListener("click",function(){show(idx-1);});$(".next",lb).addEventListener("click",function(){show(idx+1);});
    lb.addEventListener("click",function(e){if(e.target===lb)close();});
    lb.addEventListener("keydown",function(e){if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(idx-1);if(e.key==="ArrowRight")show(idx+1);});
    var startX=null;lb.addEventListener("touchstart",function(e){startX=e.touches[0].clientX;},{passive:true});lb.addEventListener("touchend",function(e){if(startX===null)return;var distance=e.changedTouches[0].clientX-startX;if(Math.abs(distance)>50)show(idx+(distance<0?1:-1));startX=null;},{passive:true});
  }

  /* ---- Story filters (tradition, event type, film/photo) ---- */
  var grid = $("#story-grid");
  if (grid) {
    var state = {};
    var cards = $$(".story-card", grid), countEl = $("#story-count"), empty = $("#story-empty");
    function apply() {
      var n = 0;
      cards.forEach(function (c) {
        var ok = Object.keys(state).every(function (k) { return state[k] === "all" || (c.getAttribute("data-" + k) || "").split(" ").indexOf(state[k]) > -1; });
        c.hidden = !ok; if (ok) n++;
      });
      countEl.textContent = n + (n === 1 ? " photograph" : " photographs");
      var query=new URLSearchParams(location.search);Object.keys(state).forEach(function(k){if(state[k]==="all")query.delete(k);else query.set(k,state[k]);});
      var queryString=query.toString();history.replaceState(null,"",location.pathname+(queryString?"?"+queryString:"")+location.hash);
      empty.hidden = n > 0;
    }
    $$(".filters[data-key]").forEach(function (group) {
      var key = group.getAttribute("data-key"); state[key] = new URLSearchParams(location.search).get(key) || "all"; if (!$$(".chip",group).some(function(c){return c.dataset.val===state[key];}))state[key]="all";
      $$(".chip", group).forEach(function (chip) {
        chip.addEventListener("click", function () {
          $$(".chip", group).forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
          chip.setAttribute("aria-pressed", "true"); state[key] = chip.getAttribute("data-val"); apply();
        });
      });
    });
    var reset = $("#story-reset");
    if (reset) reset.addEventListener("click", function () { $$(".filters[data-key]").forEach(function (g) { $$(".chip", g).forEach(function (c, i) { c.setAttribute("aria-pressed", i === 0 ? "true" : "false"); }); state[g.getAttribute("data-key")] = "all"; }); apply(); });
    $$(".filters[data-key]").forEach(function(g){$$(".chip",g).forEach(function(c){c.setAttribute("aria-pressed",String(c.dataset.val===state[g.dataset.key]));});});
    apply();
    /* Deep links from other pages: wedding-stories.html#muslim, #film, #prewedding */
    var h = location.hash.replace("#", "");
    if (h === "film") { location.replace("/wedding-films-mumbai/"); }
    else if (h) { var chip = $$(".filters[data-key] .chip").find(function (el) { return el.getAttribute("data-val") === h; }); if (chip) { chip.click(); history.replaceState(null,"",location.pathname+location.search); } }
  }

  /* ---- Journal category filter ---- */
  var posts = $("#posts");
  if (posts) {
    $$("#post-filters .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        $$("#post-filters .chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        var v = chip.getAttribute("data-val");
        $$(".post", posts).forEach(function (p) { p.hidden = v !== "all" && p.getAttribute("data-cat") !== v; });
      });
    });
  }

  /* ---- Copy buttons ---- */
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var t = b.getAttribute("data-copy"), orig = b.textContent;
      function done(msg) { b.textContent = msg; setTimeout(function () { b.textContent = orig; }, 1600); }
      try { navigator.clipboard.writeText(t).then(function () { done("Copied"); }, function () { done("Select and copy"); }); } catch (e) { done("Select and copy"); }
    });
  });

  /* ---- Enquiry: three short steps, adapts to event type ---- */
  // Trap keyboard focus inside visible overlays and make the background inert.
  $$(".modal, .sheet").forEach(function (dialog) {
    function sync() {
      var open = dialog.classList.contains("open");
      dialog.inert = !open;
      $$("main, .site-header, .site-footer, .dock").forEach(function (el) { el.inert = $$(".modal.open, .sheet.open").length > 0; });
    }
    new MutationObserver(sync).observe(dialog, { attributes: true, attributeFilter: ["class"] });
    dialog.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || !dialog.classList.contains("open")) return;
      var f = $$("a[href], button, video[controls], [tabindex='0']", dialog).filter(function (el) { return !el.disabled && el.getClientRects().length; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    sync();
  });
  var form = $("#enquiry");
  if (form) {
    var stepEls = $$("fieldset[data-step]", form), stepper = $$(".steps li"), cur = 0;
    var back = $("#f-back"), next = $("#f-next"), submit = $("#f-submit");
    var CONFIG = {
      wedding:   { label: "Wedding", date: "Wedding date", venue: "Venue or area", core: ["Candid photography", "Traditional photography", "Cinematic film", "Traditional video"], adds: ["Drone cinematography", "Same-day edit", "Album and keepsakes", "QR booth", "Face-scan photo delivery (PIK Connect)", "Live streaming", "LED wall"], events: true },
      prewedding:{ label: "Pre-wedding", date: "Preferred shoot date", venue: "Places you have in mind", core: ["Pre-wedding photography", "Pre-wedding film"], adds: ["Drone cinematography", "Mini album", "Photo calendar"], events: false },
      family:    { label: "Family event", date: "Event date", venue: "Venue or area", core: ["Event photography", "Event video"], adds: ["Same-day edit", "QR booth", "Face-scan photo delivery (PIK Connect)", "Live streaming", "LED wall", "Mini album", "Photo calendar"], events: false },
      corporate: { label: "Corporate event", date: "Event date", venue: "Venue or city", core: ["Event photography", "Event video"], adds: ["Same-day edit", "Live streaming", "LED wall", "QR booth", "Face-scan photo delivery (PIK Connect)"], events: false }
    };
    function chipHTML(name, list) { return list.map(function (s, i) { var id = name + "-" + i; return '<div class="check"><input type="checkbox" id="' + id + '" name="' + name + '" value="' + s + '"><label for="' + id + '">' + s + "</label></div>"; }).join(""); }
    function typeVal() { var t = form.querySelector('input[name="type"]:checked'); return t ? t.value : null; }
    function adapt() {
      var t = typeVal(); if (!t) return; var c = CONFIG[t];
      $("#core-list").innerHTML = chipHTML("core", c.core);
      $("#add-list").innerHTML = chipHTML("adds", c.adds);
      $("#date-label").firstChild.textContent = c.date + " ";
      $("#venue-label").firstChild.textContent = c.venue + " ";
      $("#events-field").hidden = !c.events;
      $("#company-field").hidden = t !== "corporate";
      $("#step2-title").textContent = c.label + ": what would you like covered?";
      try { localStorage.setItem("sf-enq-type", t); } catch (e) {}
    }
    function setErr(field, msg) { var f = form.querySelector('[data-field="' + field + '"]'); if (!f) return; f.classList.toggle("invalid", !!msg); var e = f.querySelector(".err"); if (e) e.textContent = msg || ""; var inp = f.querySelector("input, select, textarea"); if (inp) inp.setAttribute("aria-invalid", msg ? "true" : "false"); }
    function validate(step) {
      var ok = true, first = null;
      if (step === 0) { var e = $("#type-err"); if (!typeVal()) { e.textContent = "Choose what you are planning so we can show the right options."; ok = false; first = form.querySelector('input[name="type"]'); } else e.textContent = ""; }
      if (step === 1) {
        var d = $("#f-date"); setErr("date", ""); if (d.value && !$("#f-date-tbc").checked && d.value < new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})) {setErr("date","Choose today or a future date, or mark the date as not fixed.");ok=false;first=first||d;} if (!d.value && !$("#f-date-tbc").checked) { setErr("date", "Add a date, or tick “date not fixed yet”."); ok = false; first = first || d; }
        var v = $("#f-venue"); setErr("venue", ""); if (!v.value.trim()) { setErr("venue", "Tell us the venue, area or city. A rough idea is fine."); ok = false; first = first || v; }
      }
      if (step === 2) {
        var n = $("#f-name"); setErr("name", ""); if (n.value.trim().length < 2) { setErr("name", "Add your name."); ok = false; first = first || n; }
        var p = $("#f-phone"); setErr("phone", ""); var digits = p.value.replace(/\D/g, ""); if (digits.length < 10 || digits.length > 15 || !/^\+?[\d\s().-]{10,30}$/.test(p.value)) { setErr("phone", "Add a phone number with 10 to 15 digits, including the country code where needed."); ok = false; first = first || p; }
        var m = $("#f-email"); setErr("email", ""); if ($("#f-pref").value === "Email" && !m.value.trim()) { setErr("email", "Add an email address for your chosen reply method."); ok = false; first = first || m; }
        if (m.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value)) { setErr("email", "Check the email address, or leave it blank."); ok = false; first = first || m; }
      }
      if (first) first.focus();
      return ok;
    }
    function go(i, initial) {
      cur = i;
      stepEls.forEach(function (s, k) { s.hidden = k !== i; });
      stepper.forEach(function (li, k) { li.classList.toggle("done", k < i); if (k === i) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current"); });
      back.hidden = i === 0; next.hidden = i === stepEls.length - 1; submit.hidden = i !== stepEls.length - 1;
      if (initial) return;
      var h = stepEls[i].querySelector("legend, h2"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
      var top = form.getBoundingClientRect().top;
      if (top < 0) form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    $$('input[name="type"]', form).forEach(function (r) { r.addEventListener("change", function () { adapt(); $("#type-err").textContent = ""; }); });
    next.addEventListener("click", function () { if (validate(cur)) go(cur + 1); });
    back.addEventListener("click", function () { go(cur - 1); });
    $("#f-date-tbc").addEventListener("change", function () { $("#f-date").disabled = this.checked; $("#f-date").setAttribute("aria-required",String(!this.checked)); if (this.checked) setErr("date", ""); });
    var review=$("#enq-success"), deliveryMode=document.body.dataset.enquiryMode;
    $("#f-date").min=new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"});
    var payload, summaryText;
    $("#f-pref").addEventListener("change",function(){var required=this.value==="Email";$("#f-email").required=required;$("#f-email").setAttribute("aria-required",String(required));$("label[for=\"f-email\"] .opt").textContent=required?"(required for email replies)":"(optional)";});
    ["name","phone","email","venue","notes","company","budget"].forEach(function(name){var input=form.elements[name];if(input)input.maxLength=name==="notes"?2000:name==="email"?254:name==="phone"?30:name==="venue"?500:120;});
    form.addEventListener("submit",function(e){
      e.preventDefault();for(var step=0;step<3;step++){if(!validate(step)){go(step);return;}}
      var fd=new FormData(form);payload=Object.fromEntries(fd);payload.core=fd.getAll("core");payload.adds=fd.getAll("adds");payload.dateFlexible=$("#f-date-tbc").checked;
      var entries=[["Occasion",CONFIG[payload.type].label],["Date",payload.dateFlexible?"Not fixed yet":payload.date],["Venue / area",payload.venue],["Coverage",payload.core.join(", ")||"Please advise"],["Additions",payload.adds.join(", ")||"None selected"],["Name",payload.name],["Phone",payload.phone]];
      if(payload.email)entries.push(["Email",payload.email]);if(payload.company)entries.push(["Company",payload.company]);if(payload.events)entries.push(["Events",payload.events]);if(payload.budget)entries.push(["Budget",payload.budget]);if(payload.notes)entries.push(["Notes",payload.notes]);entries.push(["Preferred reply",payload.pref]);
      var details=$("#review-details");details.replaceChildren();entries.forEach(function(pair){var row=document.createElement("div"),dt=document.createElement("dt"),dd=document.createElement("dd");dt.textContent=pair[0];dd.textContent=pair[1];row.append(dt,dd);details.append(row);});
      summaryText="Hello Shaadi Films, I would like to enquire.\n\n"+entries.map(function(pair){return pair[0]+": "+pair[1];}).join("\n");
      $("#review-whatsapp").href="https://wa.me/"+document.body.dataset.contactPhone+"?text="+encodeURIComponent(summaryText);
      var webhook=deliveryMode==="webhook";$("#review-whatsapp").hidden=webhook;$("#review-submit").hidden=!webhook;
      if(webhook){$("#review-help").textContent="Check your details, then send your enquiry to the team.";$("#review-note").textContent="Your enquiry is sent only after you press Send enquiry.";}
      form.hidden=true;$(".steps").hidden=true;review.hidden=false;$("h2",review).focus();
    });
    $("#review-edit").addEventListener("click",function(){review.hidden=true;form.hidden=false;$(".steps").hidden=false;go(2);});
    $("#review-submit").addEventListener("click",async function(){
      var button=this;button.disabled=true;button.textContent="Sending…";
      try {var response=await fetch("/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});var result=await response.json();if(!response.ok||!result.ok)throw new Error(result.error||"Please try again, or use WhatsApp.");$("h2",review).textContent="Your enquiry has reached us.";$("#review-help").textContent="Thank you. The team will reply using your contact details.";button.hidden=true;$("#review-note").textContent="Your date is confirmed after availability and your proposal are agreed.";$("h2",review).focus();}
      catch(error){$("#review-help").textContent="We could not complete delivery. Your details are still here. You can try again or send the prepared enquiry on WhatsApp.";$("#review-whatsapp").hidden=false;}
      finally{button.disabled=false;button.textContent="Send enquiry";}
    });
    /* Preselect from ?type= link or remembered choice */
    var pre = (location.search.match(/type=(\w+)/) || [])[1] || (location.hash.replace("#", "")) || null;
    if (!pre) { try { pre = localStorage.getItem("sf-enq-type"); } catch (e) {} }
    if (pre && CONFIG[pre]) { var r = form.querySelector('input[name="type"][value="' + pre + '"]'); if (r) { r.checked = true; adapt(); } }
    go(0, true);
  }
})();
