import"./Layout.astro_astro_type_script_index_0_lang.a657d0a3.js";const t=document.getElementById("input_container"),e=document.getElementById("password_input"),o=document.getElementById("submit");e.onkeydown=async n=>{n.key==="Enter"&&s()};o.onclick=s;async function s(){const n=e.value;(await(await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:n})})).json()).code===0?(localStorage.setItem("pass",n),window.location.href="/"):(t.classList.add("invalid"),setTimeout(()=>{t.classList.remove("invalid")},300))}
