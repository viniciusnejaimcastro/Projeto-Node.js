const assert = require('assert');

// Função que você quer testar
function soma(a, b) {
  return a + b;
}

// Teste
try {
  assert.strictEqual(soma(2, 3), 5);
  assert.strictEqual(soma(-1, 1), 0);
  console.log('Todos os testes passaram!');
} catch (err) {
  console.error('Teste falhou:', err.message);
  process.exit(1); // encerra com erro para falha no Jenkins
}
