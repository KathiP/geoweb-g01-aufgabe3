/* eslint-disable no-undef */
/* eslint-disable no-console */
let weitermachen = true;
let x = 2;

function multiplikation(a, b) {
  const neuerWert = a * b;
  return (neuerWert);
}
while (weitermachen) {
  const ergebnis = multiplikation(42, x);
  // eslint-disable-next-line no-console
  console.log(ergebnis); // 13524
  x *= x;
  // eslint-disable-next-line no-console
  //console.log(x);
  if (x > 1000000000000) {
    weitermachen = false;
  }
}

const tiere = ['Hund', 'Katzen', 'Maus', 'Pferd'];
for (let i = 0; i < tiere.length - 1; i++) {
  const diesesTier = tiere[i];
  // eslint-disable-next-line no-console
  console.log(diesesTier);
}

const Katze = {
  name: 'Grumpy',
  alter: 7,
  gechipt: false
};

let chipi = 'gechipt!';
if (Katze.gechipt !== true) {
  chipi = 'nicht gechipt!';
}
console.log(Katze.name + ' ist ' + Katze.alter + ' Jahre alt und ' + chipi);
console.log(Katze['name'] + ' ist ' + Katze['alter'] + ' Jahre alt');

