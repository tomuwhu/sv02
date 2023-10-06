<script>
  import { onMount } from "svelte";
  var appdata = {
    mounted: false,
    top: 70,
    left: 0,
    orak: [],
    msg: `Pozícionálás...`,
  };
  onMount(() => {
    onresize = () => {
      setTimeout(() => {
        appdata.left = -100;
        appdata.top = 0;
        if (appdata.left > -100 && appdata.top > 20)
          (appdata.mounted = true), (appdata.msg = "Pozícionálás...");
      }, 1000);
    };
    fetch("input.json")
      .then((x) => x.json())
      .then((data) => {
        appdata.orak = data;
        appdata.left = -100;
        appdata.top = 0;
        appdata.mounted = true;
      });
  });
  const style = (ora) => `
  top: ${appdata.top + 20 + (ora.ok[0] - 7) * 60 + ora.ok[1]}px; 
  left:${
    appdata.left + 140 + { H: 0, K: 1, Sz: 2, Cs: 3, P: 4 }[ora.n] * 100
  }px; 
  height: ${ora.it}px`;
  const snn = (n, i) =>
    `left:${appdata.left + 137 + i * 100}px; top: ${appdata.top + 17}px`;
  const hrs = (i, a) =>
    `top: ${appdata.top + 45 + i * 15}px; left: ${appdata.left + a}px;`;
  const hrs2 = (i) =>
    `top: ${appdata.top + 50 + i * 15}px; left: ${appdata.left + 111}px;`;
  function opp(i) {
    let perc = 30 + i * 15;
    let ora = 7 + Math.trunc(perc / 60);
    perc = perc % 60;
    return `${ora}:${perc < 10 ? "0" + perc : perc}`;
  }
  const g = ora => {
    console.log(ora)
  }
</script>

{#if appdata.mounted == true}
  {#each ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"] as nap, i}
    <div class="nn" style={snn(nap, i)}><div>{nap}</div></div>
  {/each}
  {#each Array(41).fill(0) as _, i}
    <div style={hrs2(i)} class="hr" />
    <div style={hrs(i, 107)} class="ip">{opp(i)}</div>
    <div style={hrs(i, 636)} class="ip">{opp(i)}</div>
  {/each}
  {#each appdata.orak as ora}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cont {ora.type}" style={style(ora)} on:click={()=>g(ora)}>
      <div class="text">{ora.text}</div>
      <div class="csh">
        <span class="csop">{ora.csop}</span> ---
        <span class="hsz">{ora.helysz}</span>
      </div>
      {#if ora.it > 45}
        <div class="hsz">&lt {(ora.it / 45).toFixed(0)}<span>x45 <span id="i">{ora.it % 45 ? `+ ${ora.it % 45}`  : ``}</span> perc</span> &gt</div>
      {/if}
    </div>
  {/each}
  <div
    class="orr"
    style="left: {appdata.left + 107}px; top: {appdata.top - 50}px;"
  >
    <span>Órarend</span>
  </div>
{:else}
  <div class="orr">{appdata.msg}</div>
{/if}

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
  div.hsz {
    font-size: 12px;
  }
  div.hsz span {
    font-size: 7px;
  }
  div.cont {
    position: absolute;
    border: solid 1px rgb(9, 9, 9);
    text-align: center;
    border-radius: 1px;
    user-select: none;
    cursor: pointer;
  }
  div.text {
    margin-top: 4px;
    font-size: 10px;
    color: rgb(0, 0, 0);
  }
  div.csh {
    font-size: 11px;
    margin-top: 3px;
    color: rgb(0, 0, 0);
  }
  div.E {
    background-color: rgb(255, 255, 255);
    width: 87px;
    border: dotted 2px black;
  }
  div.S {
    background-color: rgb(255, 255, 255);
    border: double 4px black;
    width: 84px;
  }
  div.K {
    background-color: rgb(160, 160, 160);
    width: 90px;
  }
  div.M {
    background-color: rgb(201, 201, 201);
    width: 90px;
  }
  div.nn {
    border: solid 0.5px rgb(0, 0, 0);
    text-align: center;
    font-size: 15px;
    color: rgb(0, 0, 0);
    background-color: rgb(245, 245, 245);
    border-radius: 7px;
    position: absolute;
    width: 96px;
    height: 637px;
  }
  div.nn div {
    font-family: "Dancing Script", cursive;
    color: rgb(18, 18, 18);
    user-select: none;
    padding-top: 1px;
    padding-bottom: 2px;
    background-color: rgb(255, 255, 255);
    border: solid 1px black;
    border-radius: 7px;
  }
  .csh .csop {
    color: rgb(40, 40, 40);
    font-style: oblique;
  }
  .csh .hsz {
    color: rgb(0, 0, 0);
    font-style: italic;
  }
  div.ip {
    color: rgb(1, 1, 1);
    background-color: rgba(244, 244, 244);
    width: 23px;
    border: solid 0.5px black;
    border-radius: 4px;
    padding-right: 4px;
    text-align: right;
    font-size: 9px;
    position: absolute;
    user-select: none;
  }
  div.hr {
    position: absolute;
    height: 0px;
    border: solid 0.5px black;
    width: 550px;
  }
  div.orr {
    position: absolute;
    width: 557px;
    height: 40px;
    font-size: 35px;
    font-family: "Dancing Script", cursive;
    color: rgb(74, 74, 74);
  }
  div.orr span {
    color: rgb(98, 98, 98);
    user-select: none;
  }
</style>
