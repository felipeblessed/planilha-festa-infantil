import React, { useState } from 'react';
import { DollarSign, Calendar, Users, Cake, Gift } from 'lucide-react';

export default function App() {
  const [dados, setDados] = useState({
    nomeAniversariante: '',
    idade: '',
    dataFesta: '',
    numeroConvidados: 30,
    baloes: 15,
    papelCrepom: 10,
    barbante: 5,
    papelColorido: 8,
    fitaDupla: 5,
    tnt: 12,
    toalhaMesa: 8,
    bandeirolas: 12,
    letrasParabens: 10,
    enfeitesExtras: 15,
    salgadoTipo: 'comprado',
    quantidadeSalgados: 150,
    brigadeiro: 15,
    beijinho: 15,
    bolo: 25,
    refrigerantes: 20,
    sucos: 10,
    gelo: 9,
    copos: 8,
    melancia: 8,
    bananas: 6,
    uvas: 6,
    pipoca: 3,
    balas: 7,
    pratos: 10,
    garfos: 5,
    guardanapos: 5,
    toalhasDescartaveis: 8,
    papelAluminio: 5,
    saquinhos: 7,
    tipoLembrancinha: 'doces',
    quantidadeLembrancinhas: 30,
  });

  const calcularOrcamento = () => {
    const totalDecoracao = dados.baloes + dados.papelCrepom + dados.barbante + dados.papelColorido + dados.fitaDupla + dados.tnt + dados.toalhaMesa + dados.bandeirolas + dados.letrasParabens + dados.enfeitesExtras;
    const custoUnitarioSalgado = dados.salgadoTipo === 'comprado' ? 0.80 : 0.60;
    const totalSalgados = dados.quantidadeSalgados * custoUnitarioSalgado;
    const totalDoces = dados.brigadeiro + dados.beijinho + dados.bolo;
    const totalBebidas = dados.refrigerantes + dados.sucos + dados.gelo + dados.copos;
    const totalFrutas = dados.melancia + dados.bananas + dados.uvas + dados.pipoca + dados.balas;
    const totalDescartaveis = dados.pratos + dados.garfos + dados.guardanapos + dados.toalhasDescartaveis + dados.papelAluminio + dados.saquinhos;
    let custoLembranca = 1.00;
    if (dados.tipoLembrancinha === 'planta') custoLembranca = 0.80;
    if (dados.tipoLembrancinha === 'massinha') custoLembranca = 1.30;
    if (dados.tipoLembrancinha === 'bolhas') custoLembranca = 0.85;
    const totalLembrancinhas = dados.quantidadeLembrancinhas * custoLembranca;
    const totalGeral = totalDecoracao + totalSalgados + totalDoces + totalBebidas + totalFrutas + totalDescartaveis + totalLembrancinhas;
    return {
      decoracao: totalDecoracao,
      salgados: totalSalgados,
      doces: totalDoces,
      bebidas: totalBebidas,
      frutas: totalFrutas,
      descartaveis: totalDescartaveis,
      lembrancinhas: totalLembrancinhas,
      total: totalGeral,
      economia: 3500 - totalGeral,
    };
  };

  const orcamento = calcularOrcamento();
  const porcentagem = (orcamento.total / 500) * 100;
  const handleChange = (campo, valor) => {
    setDados(prev => ({ ...prev, [campo]: valor }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Cake className="w-10 h-10 text-pink-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Planejador de Festa Infantil</h1>
              <p className="text-gray-600">Organize sua festa por R$ 500 ou menos!</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 text-white">
              <div className="text-xs opacity-90">Total Gasto</div>
              <div className="text-2xl font-bold">R$ {orcamento.total.toFixed(2)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 text-white">
              <div className="text-xs opacity-90">Orçamento</div>
              <div className="text-2xl font-bold">R$ 500,00</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-4 text-white">
              <div className="text-xs opacity-90">Disponível</div>
              <div className="text-2xl font-bold">R$ {(500 - orcamento.total).toFixed(2)}</div>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-4 text-white">
              <div className="text-xs opacity-90">Economia</div>
              <div className="text-2xl font-bold">R$ {orcamento.economia.toFixed(0)}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold">Progresso do Orçamento</span>
              <span className={porcentagem > 100 ? 'text-red-600 font-bold' : 'text-green-600'}>{porcentagem.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className={'h-3 rounded-full transition-all ' + (porcentagem > 100 ? 'bg-red-500' : porcentagem > 90 ? 'bg-yellow-500' : 'bg-green-500')} style={{ width: Math.min(porcentagem, 100) + '%' }} />
            </div>
            {porcentagem > 100 && <p className="text-red-600 text-sm mt-2 font-semibold">Atenção! Você ultrapassou o orçamento de R$ 500</p>}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-pink-500" />Informações da Festa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold mb-2">Nome do Aniversariante</label><input type="text" value={dados.nomeAniversariante} onChange={(e) => handleChange('nomeAniversariante', e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none" placeholder="Ex: Maria" /></div>
            <div><label className="block text-sm font-semibold mb-2">Idade</label><input type="number" value={dados.idade} onChange={(e) => handleChange('idade', e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none" placeholder="Ex: 5" /></div>
            <div><label className="block text-sm font-semibold mb-2">Data da Festa</label><input type="date" value={dados.dataFesta} onChange={(e) => handleChange('dataFesta', e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold mb-2">Número de Convidados: {dados.numeroConvidados}</label><input type="range" min="10" max="50" value={dados.numeroConvidados} onChange={(e) => handleChange('numeroConvidados', parseInt(e.target.value))} className="w-full" /></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ItemCategoria titulo="Decoração" cor="text-purple-600" valor={orcamento.decoracao} icone={<Gift className="w-5 h-5" />}>
            <ItemOrcamento label="Balões" valor={dados.baloes} onChange={(v) => handleChange('baloes', v)} />
            <ItemOrcamento label="Papel Crepom" valor={dados.papelCrepom} onChange={(v) => handleChange('papelCrepom', v)} />
            <ItemOrcamento label="Barbante" valor={dados.barbante} onChange={(v) => handleChange('barbante', v)} />
            <ItemOrcamento label="Papel Colorido" valor={dados.papelColorido} onChange={(v) => handleChange('papelColorido', v)} />
            <ItemOrcamento label="Fita Dupla Face" valor={dados.fitaDupla} onChange={(v) => handleChange('fitaDupla', v)} />
            <ItemOrcamento label="TNT" valor={dados.tnt} onChange={(v) => handleChange('tnt', v)} />
            <ItemOrcamento label="Toalha Mesa" valor={dados.toalhaMesa} onChange={(v) => handleChange('toalhaMesa', v)} />
            <ItemOrcamento label="Bandeirolas" valor={dados.bandeirolas} onChange={(v) => handleChange('bandeirolas', v)} />
            <ItemOrcamento label="Letras Parabéns" valor={dados.letrasParabens} onChange={(v) => handleChange('letrasParabens', v)} />
            <ItemOrcamento label="Enfeites Extras" valor={dados.enfeitesExtras} onChange={(v) => handleChange('enfeitesExtras', v)} />
          </ItemCategoria>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-bold mb-4 text-orange-600">Comida Salgada - R$ {orcamento.salgados.toFixed(2)}</h3>
            <div className="space-y-4">
              <div><label className="block text-sm font-semibold mb-2">Tipo</label><select value={dados.salgadoTipo} onChange={(e) => handleChange('salgadoTipo', e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"><option value="comprado">Comprado (R$ 0,80/un)</option><option value="caseiro">Caseiro (R$ 0,60/un)</option></select></div>
              <div><label className="block text-sm font-semibold mb-2">Quantidade: {dados.quantidadeSalgados} unidades</label><input type="range" min="50" max="300" value={dados.quantidadeSalgados} onChange={(e) => handleChange('quantidadeSalgados', parseInt(e.target.value))} className="w-full" /><div className="text-xs text-gray-600 mt-1">Média: {(dados.quantidadeSalgados / dados.numeroConvidados).toFixed(1)} por pessoa</div></div>
            </div>
          </div>
          <ItemCategoria titulo="Doces e Bolo" cor="text-pink-600" valor={orcamento.doces}>
            <ItemOrcamento label="Brigadeiro (30un)" valor={dados.brigadeiro} onChange={(v) => handleChange('brigadeiro', v)} />
            <ItemOrcamento label="Beijinho (30un)" valor={dados.beijinho} onChange={(v) => handleChange('beijinho', v)} />
            <ItemOrcamento label="Bolo" valor={dados.bolo} onChange={(v) => handleChange('bolo', v)} />
          </ItemCategoria>
          <ItemCategoria titulo="Bebidas" cor="text-blue-600" valor={orcamento.bebidas}>
            <ItemOrcamento label="Refrigerantes" valor={dados.refrigerantes} onChange={(v) => handleChange('refrigerantes', v)} />
            <ItemOrcamento label="Sucos" valor={dados.sucos} onChange={(v) => handleChange('sucos', v)} />
            <ItemOrcamento label="Gelo" valor={dados.gelo} onChange={(v) => handleChange('gelo', v)} />
            <ItemOrcamento label="Copos" valor={dados.copos} onChange={(v) => handleChange('copos', v)} />
          </ItemCategoria>
          <ItemCategoria titulo="Frutas e Petiscos" cor="text-green-600" valor={orcamento.frutas}>
            <ItemOrcamento label="Melancia" valor={dados.melancia} onChange={(v) => handleChange('melancia', v)} />
            <ItemOrcamento label="Bananas" valor={dados.bananas} onChange={(v) => handleChange('bananas', v)} />
            <ItemOrcamento label="Uvas" valor={dados.uvas} onChange={(v) => handleChange('uvas', v)} />
            <ItemOrcamento label="Pipoca" valor={dados.pipoca} onChange={(v) => handleChange('pipoca', v)} />
            <ItemOrcamento label="Balas" valor={dados.balas} onChange={(v) => handleChange('balas', v)} />
          </ItemCategoria>
          <ItemCategoria titulo="Descartáveis" cor="text-gray-600" valor={orcamento.descartaveis}>
            <ItemOrcamento label="Pratos" valor={dados.pratos} onChange={(v) => handleChange('pratos', v)} />
            <ItemOrcamento label="Garfos" valor={dados.garfos} onChange={(v) => handleChange('garfos', v)} />
            <ItemOrcamento label="Guardanapos" valor={dados.guardanapos} onChange={(v) => handleChange('guardanapos', v)} />
            <ItemOrcamento label="Toalhas" valor={dados.toalhasDescartaveis} onChange={(v) => handleChange('toalhasDescartaveis', v)} />
            <ItemOrcamento label="Papel Alumínio" valor={dados.papelAluminio} onChange={(v) => handleChange('papelAluminio', v)} />
            <ItemOrcamento label="Saquinhos" valor={dados.saquinhos} onChange={(v) => handleChange('saquinhos', v)} />
          </ItemCategoria>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
          <h3 className="text-lg font-bold mb-4 text-indigo-600">Lembrancinhas - R$ {orcamento.lembrancinhas.toFixed(2)}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold mb-2">Tipo</label><select value={dados.tipoLembrancinha} onChange={(e) => handleChange('tipoLembrancinha', e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"><option value="doces">Saquinho Doces (R$ 1,00)</option><option value="planta">Vasinho Planta (R$ 0,80)</option><option value="massinha">Massinha (R$ 1,30)</option><option value="bolhas">Bolhas Sabão (R$ 0,85)</option></select></div>
            <div><label className="block text-sm font-semibold mb-2">Quantidade: {dados.quantidadeLembrancinhas}</label><input type="range" min="10" max="50" value={dados.quantidadeLembrancinhas} onChange={(e) => handleChange('quantidadeLembrancinhas', parseInt(e.target.value))} className="w-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemCategoria({ titulo, cor, valor, icone, children }) {
  return <div className="bg-white rounded-2xl shadow-xl p-6"><h3 className={'text-lg font-bold mb-4 flex items-center gap-2 ' + cor}>{icone}{titulo} - R$ {valor.toFixed(2)}</h3><div className="space-y-3">{children}</div></div>;
}

function ItemOrcamento({ label, valor, onChange }) {
  return <div className="flex justify-between items-center"><label className="text-sm">{label}</label><input type="number" value={valor} onChange={(e) => onChange(parseFloat(e.target.value) || 0)} className="w-20 p-2 border-2 border-gray-300 rounded-lg text-right focus:border-pink-500 focus:outline-none" step="0.50" /></div>;
}
```

## **PASSO 4: Colar**

**Ctrl+V** (é grande mesmo, vai até o fim!)

## **PASSO 5: Salvar**

**"Commit changes"** (2x)

🎉 **TODOS OS 4 ARQUIVOS CRIADOS!**

---

# ✅ CHECKLIST FINAL:

Seu repositório agora deve ter:
```
✅ package.json
✅ public/index.html
✅ src/index.js
✅ src/App.js
✅ README.md (já tinha)
