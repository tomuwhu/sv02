<script>
const orak = [{
    type: "E",
    text: "Számítástechnikai alapismeretek",
    csop: "Bio",
    helysz: "IR-227",
    n: "H",
    ok: [8, 0],
    it: 90
  },{
    type: "E",
    text: "Számítástechnikai alapismeretek",
    csop: "IT",
    helysz: "IR-226",
    n: "K",
    ok: [9, 0],
    it: 45
  },{
    type: "E",
    text: "Programozási versenyek feladatainak megoldása",
    csop: "IT",
    helysz: "IR-227",
    n: "K",
    ok: [16, 0],
    it: 90
  },{
    type: "E",
    text: "Informatikai alapismeretek",
    csop: "IT",
    helysz: "IR-227",
    n: "Cs",
    ok: [14, 0],
    it: 45
  },{
    type: "E",
    text: "Számítógépes rendszerek",
    csop: "IT",
    helysz: "IR-227",
    n: "Cs",
    ok: [15, 0],
    it: 135
  }
]
const style = ora => `
    position: absolute; 
    top: ${20+(ora.ok[0]-7)*60 + ora.ok[1]}px; 
    left:${140 + {"H": 0, "K": 1, "Sz": 2, "Cs": 3, "P": 4}[ora.n] * 100}px; width: 90px; 
    height: ${ora.it}px`
const snn = (n, i) => `
    position: absolute; 
    top: 20px; 
    left:${137 + i*100}px; 
    width: 96px; 
    height: 635px`
</script>
  {#each ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"] as nap, i}
  <div class="nn" style={snn(nap, i)}><div>{nap}</div></div>
  {/each}
  {#each orak as ora}
  <div 
    class="cont {ora.type}"
    style={style(ora)}>
    <div class="text">{ora.text}</div>
    <div class="csh">{ora.csop} - {ora.helysz}</div>
  </div>
{/each}
<style>
  div.cont {
    border: solid 1px rgb(108, 80, 80);
    text-align: center;
    border-radius: 5px;
    box-shadow: 1px 1px 2px inset rgb(143, 141, 141);
  }
  div.text {
    margin-top: 5px;
    font-size: 10px;
    color: rgb(47, 90, 97);
  }
  div.csh {
    font-size: 12px;
    color: rgb(123, 50, 50);
  }
  div.E {
    background-color: rgb(165, 213, 197);
  }
  div.nn {
    border: solid 0.5px rgb(64, 69, 52);
    text-align: center;
    font-size: 15px;
    color: rgb(28, 58, 84);
    background-color: rgb(208, 235, 215);
    box-shadow: 1px 1px 5px rgb(102, 85, 85);
  }
  div.nn div {
    user-select: none;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: beige;border-bottom: solid 2px rgb(175, 175, 141);
  }
</style>