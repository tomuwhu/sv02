<script>
  import { onMount } from "svelte";
  var appdata = {
    mounted: false,
    top: 70,
    left: 0,
    orak: [],
    msg: `Pozícionálás...`,
    dow: 'Sz',
    time: [8, 0]
  };
  onMount(() => {
    onresize = () => {
      if (appdata.mounted || appdata.msg == "Túl kicsi ablakméret...")
        setTimeout(() => {
          appdata.left = (window.innerWidth - 772) / 2;
          appdata.top = (window.innerHeight - 712) / 2;
          if (appdata.left > -100 && appdata.top > 20)
            (appdata.mounted = true), (appdata.msg = "Pozícionálás...");
          else appdata.msg = "Túl kicsi ablakméret...";
        }, 1000);
      appdata.mounted = false;
    };
    fetch("input.json")
      .then((x) => x.json())
      .then((data) => {
        appdata.orak = data;
        appdata.left = (window.innerWidth - 772) / 2;
        appdata.top = (window.innerHeight - 712) / 2;
        if (appdata.left > -100 && appdata.top > 20) appdata.mounted = true;
        else {
          appdata.left = -100
          appdata.top = -10
          appdata.mounted = true;
        }
      });
    function getcurrdt() {
      var d = new Date()
      var ds = d.toString().split(" ")
      appdata.dow = d.getDay()
      appdata.time = ds[4].split(":")
    }
    setInterval(getcurrdt,60000)
    getcurrdt()
  });
  const ips = (d, t) => t[0] * 60 + t[1] * 1 > 7 * 60 + 30 && t[0] * 60 + t[1] * 1 < 17 * 60 + 30 ? `
    top: ${appdata.top + 20 + (t[0] - 7) * 60 + t[1]*1}px;
    left: ${appdata.left + 140 + 100 * (d-1)}px;
  ` : `display: none;`
  const style = (ora) => `
  top: ${appdata.top + 20 + (ora.ok[0] - 7) * 60 + ora.ok[1]}px; 
  left:${
    appdata.left + 140 + { H: 0, K: 1, Sz: 2, Cs: 3, P: 4 }[ora.n] * 100
  }px; width: 90px; 
  height: ${ora.it}px`;
  const snn = (n, i) =>
    `left:${appdata.left + 137 + i * 100}px; top: ${appdata.top + 17}px`;
  const hrs = (i, a) =>
    `top: ${appdata.top + 45 + i * 15}px; left: ${appdata.left + a}px;`;
  const hrs2 = (i) =>
    `top: ${appdata.top + 50 + i * 15}px; left: ${appdata.left + 107}px;`;
  function opp(i) {
    let perc = 30 + i * 15;
    let ora = 7 + Math.trunc(perc / 60);
    perc = perc % 60;
    return `${ora}:${perc < 10 ? "0" + perc : perc}`;
  }
</script>

{#if appdata.mounted == true}
  {#each ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"] as nap, i}
    <div class="nn" style={snn(nap, i)}><div>{nap}</div></div>
  {/each}
  {#each Array(42).fill(0) as _, i}
    <div style={hrs2(i)} class="hr" />
    <div style={hrs(i, 107)} class="ip">{opp(i)}</div>
    <div style={hrs(i, 638)} class="ip">{opp(i)}</div>
  {/each}
  {#each appdata.orak as ora}
    <div class="cont {ora.type}" style={style(ora)}>
      <div class="text">{ora.text}</div>
      <div class="csh">
        <span class="csop">{ora.csop}</span> -
        <span class="hsz">{ora.helysz}</span>
      </div>
      {#if ora.it > 45}
        <div class="hsz">&lt <i>{(ora.it / 45).toFixed(0)}</i><span>x45 <span id="i">{ora.it % 45 ? `+ ${ora.it % 45}`  : ``}</span> perc</span> &gt</div>
      {/if}
    </div>
  {/each}
  <div
    class="orr"
    style="left: {appdata.left + 107}px; top: {appdata.top - 50}px;"
  >
    <div class="ora"><b>Órarend:</b> {["Vasárnap", "Hétfő","Kedd","Szerda", "Csütörtök", "Péntek", "Szombat"][appdata.dow]}, <u>{appdata.time[0]}:{appdata.time[1]}</u>  
</div>
  </div>
  {#if appdata.dow > 0 && appdata.dow < 6}
    <div class="ips" style={ips(appdata.dow, appdata.time)}></div>
  {/if}
{:else}
  <div class="orr">{appdata.msg}</div>
{/if}
<style>
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
  .ora b {
    color: red;
  }
  span#i {
    color: red;
  }
  div.ora {
    font-family: "Dancing Script", cursive;
    color: rgb(21, 62, 75);
    font-size: 19px;
    text-shadow: 1px 1px 3px gray;
  }
  u {
    all: unset;
    color: rgb(100, 100, 39);
    font-size: 16px;
  }
  div.ips {
    position: fixed;
    width: 90px;
    height: 1px;
    background-color: rgb(134, 25, 25);
    box-shadow: 1px 1px 3px black;
  }
  div.hsz {
    font-size: 12px;
    margin: 3px;
    color: rgb(153, 156, 0);
  }
  div.hsz i {
    margin: 3px;
    color: rgb(22, 37, 68);
  }
  div.hsz span {
    color: rgb(128, 84, 84);
    font-size: 9px;
  }
  div.cont {
    opacity: 0.75;
    position: absolute;
    border: solid 1px rgb(108, 80, 80);
    text-align: center;
    border-radius: 5px;
    box-shadow: 1px 1px 2px inset rgb(143, 141, 141);
  }
  div.text {
    margin-top: 4px;
    font-size: 10px;
    color: rgb(47, 90, 97);
  }
  div.csh {
    font-size: 11px;
    margin-top: 3px;
    color: rgb(123, 50, 50);
  }
  div.E {
    background-color: rgba(88, 124, 113, 0.434);
  }
  div.S {
    background-color: pink;
  }
  div.K {
    background-color: rgb(192, 225, 255);
  }
  div.M {
    background-color: rgb(218, 224, 185);
  }
  div.nn {
    border: solid 0.5px rgb(64, 69, 52);
    text-align: center;
    font-size: 15px;
    color: rgb(28, 58, 84);
    background-color: rgb(208, 235, 215);
    box-shadow: 1px 1px 5px rgb(102, 85, 85);
    border-radius: 7px;
    position: absolute;
    width: 96px;
    height: 653px;
  }
  div.nn div {
    font-family: "Dancing Script", cursive;
    color: rgb(228, 241, 242);
    text-shadow: 1px 1px 2px rgb(132, 114, 114);
    user-select: none;
    padding-top: 1px;
    padding-bottom: 2px;
    background-color: rgb(100, 78, 71);
    border: solid 1px white;
    box-shadow: 0px 2px 3px rgb(161, 151, 151);
    border-radius: 7px;
  }
  .csh .csop {
    color: rgb(135, 28, 28);
  }
  .csh .hsz {
    color: rgb(6, 72, 129);
  }
  div.ip {
    color: rgb(197, 90, 60);
    background-color: rgba(202, 180, 150, 0.4);
    width: 23px;
    border-radius: 4px;
    padding-right: 4px;
    text-align: right;
    font-size: 9px;
    position: absolute;
    box-shadow: 1px 1px 2px inset rgb(162, 148, 148);
    user-select: none;
  }
  div.hr {
    position: absolute;
    height: 1px;
    opacity: 0.2;
    background-color: red;
    width: 558px;
  }
  div.orr {
    position: absolute;
    width: 557px;
    height: 40px;
    font-size: 35px;
    font-family: "Dancing Script", cursive;
    color: rgb(33, 64, 67);
    text-shadow: 1px 1px 2px rgb(132, 114, 114);
    margin-top: 30px;
  }
  div.orr span {
    color: rgb(96, 65, 24);
    user-select: none;
  }
</style>
