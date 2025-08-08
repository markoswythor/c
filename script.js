const data = new Date();
const options = { day: '2-digit', month: '2-digit'};
const dataFormatada = data.toLocaleDateString('pt-BR', options);


const botao = document.querySelector("#meuBotao");
botao.addEventListener("click", () => {
  const senha = prompt("Digite a senha:");
auths = ["carajas23", "carajas23 ", "mk", "mw"]
  if (senha === "mk") {
    const estac0 = parseInt(document.querySelector('#quantity').value);
    const maq_total = parseInt(document.querySelector('#quantity4').value);
    const estac = parseInt(document.querySelector('#quantity2').value);
    const maq = parseInt(document.querySelector('#quantity4').value);
    const troco = parseInt(document.querySelector('#quantity5').value);
    const pix = parseInt(document.querySelector('#quantity6').value);
    const note100 = parseInt(document.querySelector('#note-100').value);
    const note50 = parseInt(document.querySelector('#note-50').value);
    const note20 = parseInt(document.querySelector('#note-20').value);
    const note10 = parseInt(document.querySelector('#note-10').value);
    const note5 = parseInt(document.querySelector('#note-5').value);
    const note2 = parseInt(document.querySelector('#note-2').value);
    const note1 = parseInt(document.querySelector('#note-1').value);

  
    dia = "```DIA```"
    const pct_maq_total = (maq_total) / estac0;
    const pct_din_total = document.querySelector('#total22');
    const din_tot = estac * estac0;
    const total = (note100 *100) + (note50 * 50) + (note20 * 20) + (note10 *10) + (note5 * 5) + (note2 * 2) + (note1 * 1);
   
    
        if (note1 === "0" || (Number(note1) === 0)) {
  note1x = "";
} else {
  note1x = `> ${note1} moedas de R$1\n`;
}
if (note2 === "0" || (Number(note2) === 0)) {
  note2x = "";
} else {
  note2x = `> ${note2} notas de R$2\n`;
}
if (note5 === "0" || (Number(note5) === 0)) {
  note5x = "";
} else {
  note5x = `> ${note5} notas de R$5\n`;
}
if (note10 === "0" || (Number(note10) === 0)) {
  note10x = "";
} else {
  note10x = `> ${note10} notas de R$10\n`;
}
if (note20 === "0" || (Number(note20) === 0)) {
  note20x = "";
} else {
  note20x = `> ${note20} notas de R$20\n`;
}
if (note50 === "0" || (Number(note50) === 0)) {
  note50x = "";
} else {
  note50x = `> ${note50} notas de R$50\n`;
}
if (note100 === "0" || (Number(note100) === 0)) {
  note100x = "";
} else {
  note100x = `> ${note100} notas de R$100\n`;
}

const obs =  document.getElementById("obsv").value;
if (obs.trim() === "") {
  obsx = "";
} else {
  obsx = `\n✍ Obs.: ${obs}.`;
}

const clipboardContent2 = `━━| 📋 ${dataFormatada} |━━
═══════════\n\n№ DE TICKETS : ${estac}\n\nDINHEIRO : ${pct_din_total.innerHTML}\n(+${troco},00 de troco)\n\nTOTAL DA MÁQUINA: R$${maq},00 / ${pct_maq_total}\n\nPIX : R$${pix},00\n\nDINHEIRO TOTAL : R$${din_tot},00\n\n━━━━━━━━━━━━━\n\n💵 NOTAS :\n\n${note1x}${note2x}${note5x}${note10x}${note20x}${note50x}${note100x}\nTotal: R$${total},00${obsx}`;
const url = 'https://api.telegram.org/bot6042147821:AAF-U1qvtGVgsezwXcq06jnj0pvq_rEFk_Y/sendMessage?chat_id=-1001531388739&text=';
const texto = clipboardContent2;

    fetch(url + encodeURIComponent(texto))
    alert("✅ correto, publiquei neste link o fechamento de hoje: t.me/+ks4euezRaY0wYWUx");
  } else {
    alert("⚠ Senha incorreta. Tente novamente.");
  }
});
function increment(noteId) {
    const noteInput = document.querySelector(`#${noteId}`);
    const currentValue = parseInt(noteInput.value);
    noteInput.value = currentValue + 1;
    updateTotal();
  }


  function decrement(noteId) {
    const noteInput = document.querySelector(`#${noteId}`);
    const currentValue = parseInt(noteInput.value);
    noteInput.value = currentValue - 1 >= 0 ? currentValue - 1 : 0;
    updateTotal();
  }
  
  function reset() {
    const note100Input = document.querySelector('#note-100');
    const note50Input = document.querySelector('#note-50');
    const note20Input = document.querySelector('#note-20');
    const note10Input = document.querySelector('#note-10');
    const note5Input = document.querySelector('#note-5');
    const note2Input = document.querySelector('#note-2');
    const note1Input = document.querySelector('#note-1');
    note100Input.value = 0;
    note50Input.value = 0;
    note20Input.value = 0;
    note10Input.value = 0;
    note5Input.value = 0;
    note2Input.value = 0;
    note1Input.value = 0;
    updateTotal();
  }
  
  function updateTotal() {
    const note100 = parseInt(document.querySelector('#note-100').value);
    const note50 = parseInt(document.querySelector('#note-50').value);
    const note20 = parseInt(document.querySelector('#note-20').value);
    const note10 = parseInt(document.querySelector('#note-10').value);
    const note5 = parseInt(document.querySelector('#note-5').value);
    const note2 = parseInt(document.querySelector('#note-2').value);
    const note1 = parseInt(document.querySelector('#note-1').value);
    const troco = parseInt(document.querySelector('#quantity5').value);
    const total = (note100 *100) + (note50 * 50) + (note20 * 20) + (note10 *10) + (note5 * 5) + (note2 * 2) + (note1 * 1);
    document.querySelector('#total').textContent = `R$${total},00`;
    const total2 = total - troco

    const estac = parseInt(document.querySelector('#quantity').value);
    const total3 = (total2) / estac;
    if (total3 % 1 === 0) {
        document.querySelector('#total22').textContent = `R$${total2},00 / ${parseInt(total3)}`;
      } else {
        document.querySelector('#total22').textContent = `R$${total2},00 / ${total3.toFixed(2)}`;
      }  
  
  }


    function updatePix() {
    const note100 = parseInt(document.querySelector('#quantity6').value);
    const estac = parseInt(document.querySelector('#quantity').value);
    const total = (note100) / estac;
    if (total % 1 === 0) {
        document.querySelector('#total4').textContent = `${parseInt(total)}`;
      } else {
        document.querySelector('#total4').textContent = `${total.toFixed(2)}`;
      }  
  }

  

  function updateMaq() {
    const note100 = parseInt(document.querySelector('#quantity4').value);
    const estac = parseInt(document.querySelector('#quantity').value);
    const total = (note100) / estac;
    if (total % 1 === 0) {
        document.querySelector('#total3').textContent = `${parseInt(total)}`;
      } else {
        document.querySelector('#total3').textContent = `${total.toFixed(2)}`;
      }  
  }

function compartilharzap() {
  const estac0 = parseInt(document.querySelector('#quantity').value);
  const maq_total = parseInt(document.querySelector('#quantity4').value);
  const estac = parseInt(document.querySelector('#quantity2').value);
  const maq = parseInt(document.querySelector('#quantity4').value);
  const troco = parseInt(document.querySelector('#quantity5').value);
  const pix = parseInt(document.querySelector('#quantity6').value);
  const note100 = parseInt(document.querySelector('#note-100').value);
  const note50 = parseInt(document.querySelector('#note-50').value);
  const note20 = parseInt(document.querySelector('#note-20').value);
  const note10 = parseInt(document.querySelector('#note-10').value);
  const note5 = parseInt(document.querySelector('#note-5').value);
  const note2 = parseInt(document.querySelector('#note-2').value);
  const note1 = parseInt(document.querySelector('#note-1').value);


  dia = "```DIA```"
  const pct_maq_total = (maq_total) / estac0;
  const pct_din_total = document.querySelector('#total22');
  const din_tot = estac * estac0;
  const total = (note100 *100) + (note50 * 50) + (note20 * 20) + (note10 *10) + (note5 * 5) + (note2 * 2) + (note1 * 1);
 
  
      if (note1 === "0" || (Number(note1) === 0)) {
note1x = "";
} else {
note1x = `> ${note1} moedas de R$1\n`;
}
if (note2 === "0" || (Number(note2) === 0)) {
note2x = "";
} else {
note2x = `> ${note2} notas de R$2\n`;
}
if (note5 === "0" || (Number(note5) === 0)) {
note5x = "";
} else {
note5x = `> ${note5} notas de R$5\n`;
}
if (note10 === "0" || (Number(note10) === 0)) {
note10x = "";
} else {
note10x = `> ${note10} notas de R$10\n`;
}
if (note20 === "0" || (Number(note20) === 0)) {
note20x = "";
} else {
note20x = `> ${note20} notas de R$20\n`;
}
if (note50 === "0" || (Number(note50) === 0)) {
note50x = "";
} else {
note50x = `> ${note50} notas de R$50\n`;
}
if (note100 === "0" || (Number(note100) === 0)) {
note100x = "";
} else {
note100x = `> ${note100} notas de R$100\n`;
}
 
const obs =  document.getElementById("obsv").value;
if (obs.trim() === "") {
  obsx = "";
} else {
  obsx = `\n✍ Obs.: *${obs}.*`;
}
  const clipboardContent = `━━| 📋 ${dataFormatada} |━━
═══════════\n\n*№ DE TICKETS* : ${estac}\n\n*DINHEIRO* : ${pct_din_total.innerHTML}\n(+${troco},00 de troco)\n\n*TOTAL DA MÁQUINA*: R$${maq},00 / ${pct_maq_total}\n\n*PIX* : R$${pix},00\n\n*DINHEIRO TOTAL* : R$${din_tot},00\n\n━━━━━━━━━━━━━\n\n💵 *NOTAS* :\n\n${note1x}${note2x}${note5x}${note10x}${note20x}${note50x}${note100x}\nTotal: R$${total},00${obsx}`;
        
return clipboardContent
  }

// Impede que a página seja recarregada
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});



  function copyResult() {
    const estac0 = parseInt(document.querySelector('#quantity').value);
    const maq_total = parseInt(document.querySelector('#quantity4').value);
    const estac = parseInt(document.querySelector('#quantity2').value);
    const maq = parseInt(document.querySelector('#quantity4').value);
    const troco = parseInt(document.querySelector('#quantity5').value);
    const pix = parseInt(document.querySelector('#quantity6').value);
    const note100 = parseInt(document.querySelector('#note-100').value);
    const note50 = parseInt(document.querySelector('#note-50').value);
    const note20 = parseInt(document.querySelector('#note-20').value);
    const note10 = parseInt(document.querySelector('#note-10').value);
    const note5 = parseInt(document.querySelector('#note-5').value);
    const note2 = parseInt(document.querySelector('#note-2').value);
    const note1 = parseInt(document.querySelector('#note-1').value);

  
    dia = "```DIA```"
    const pct_maq_total = (maq_total) / estac0;
    const pct_din_total = document.querySelector('#total22');
    const din_tot = estac * estac0;
    const total = (note100 *100) + (note50 * 50) + (note20 * 20) + (note10 *10) + (note5 * 5) + (note2 * 2) + (note1 * 1);
   
    
        if (note1 === "0" || (Number(note1) === 0)) {
  note1x = "";
} else {
  note1x = `> ${note1} moedas de R$1\n`;
}
if (note2 === "0" || (Number(note2) === 0)) {
  note2x = "";
} else {
  note2x = `> ${note2} notas de R$2\n`;
}
if (note5 === "0" || (Number(note5) === 0)) {
  note5x = "";
} else {
  note5x = `> ${note5} notas de R$5\n`;
}
if (note10 === "0" || (Number(note10) === 0)) {
  note10x = "";
} else {
  note10x = `> ${note10} notas de R$10\n`;
}
if (note20 === "0" || (Number(note20) === 0)) {
  note20x = "";
} else {
  note20x = `> ${note20} notas de R$20\n`;
}
if (note50 === "0" || (Number(note50) === 0)) {
  note50x = "";
} else {
  note50x = `> ${note50} notas de R$50\n`;
}
if (note100 === "0" || (Number(note100) === 0)) {
  note100x = "";
} else {
  note100x = `> ${note100} notas de R$100\n`;
}
   
const obs =  document.getElementById("obsv").value;
if (obs.trim() === "") {
  obsx = "";
} else {
  obsx = `\n✍ Obs.: *${obs}.*`;
}
    const clipboardContent = `━━| 📋 ${dataFormatada} |━━\n═══════════\n\n*№ DE TICKETS* : ${estac}\n\n*DINHEIRO* : ${pct_din_total.innerHTML}\n(+${troco},00 de troco)\n\n*TOTAL DA MÁQUINA*: R$${maq},00 / ${pct_maq_total}\n\n*PIX* : R$${pix},00\n\n*DINHEIRO TOTAL* : R$${din_tot},00\n\n━━━━━━━━━━━━━\n\n💵 *NOTAS* :\n\n${note1x}${note2x}${note5x}${note10x}${note20x}${note50x}${note100x}\nTotal: R$${total}${obsx}`;
    
    navigator.clipboard.writeText(clipboardContent)
      .then(() => {
        alert('O resultado foi copiado para a área de transferência!');
      })
      .catch((error) => {
        console.error(`Ocorreu um erro ao copiar o resultado: ${error}`);
      });
  }
    