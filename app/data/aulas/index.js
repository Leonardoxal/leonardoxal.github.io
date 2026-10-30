// Registro das aulas com conteúdo completo. Aulas ausentes daqui aparecem como "em preparação".
import { AULAS_M1A } from './m1a.js';
import { AULAS_M1B } from './m1b.js';
import { AULAS_M3 } from './m3.js';
import { AVANCADO } from './avancado.js';
import { AULAS as M1C } from './m1c.js';
import { AULAS as M2A } from './m2a.js';
import { AULAS as M2B } from './m2b.js';
import { AULAS as M3B } from './m3b.js';
import { AULAS as M3C } from './m3c.js';
import { AULAS as M4A } from './m4a.js';
import { AULAS as M4B } from './m4b.js';
import { AULAS as M5A } from './m5a.js';
import { AULAS as M5B } from './m5b.js';
import { AULAS as M6 } from './m6.js';
import { AULAS as M7A } from './m7a.js';
import { AULAS as M7B } from './m7b.js';
import { AULAS as M8A } from './m8a.js';
import { AULAS as M8B } from './m8b.js';
import { AULAS as M9 } from './m9.js';
import { AULAS as M10A } from './m10a.js';
import { AULAS as M10B } from './m10b.js';
import { AULAS as M11A } from './m11a.js';
import { AULAS as M11B } from './m11b.js';
import { AULAS as M12A } from './m12a.js';
import { AULAS as M12B } from './m12b.js';
import { AULAS as M13 } from './m13.js';
import { AULAS as M14 } from './m14.js';
import { AULAS as M15 } from './m15.js';
import { AULAS as M16 } from './m16.js';
import { AULAS as H1 } from './h1.js';
import { AULAS as H2 } from './h2.js';
import { AULAS as H3 } from './h3.js';
import { AULAS as H4 } from './h4.js';
import { AULAS as H5 } from './h5.js';
import { AULAS as G1 } from './g1.js';
import { AULAS as G2 } from './g2.js';
import { AULAS as G3 } from './g3.js';
import { AULAS as G4 } from './g4.js';
import { AULAS as G5 } from './g5.js';
import { AULAS as SB1 } from './sb1.js';
import { AULAS as SB2 } from './sb2.js';
import { AULAS as SB3 } from './sb3.js';
import { AULAS as SO1 } from './so1.js';
import { AULAS as SO2 } from './so2.js';
import { AULAS as SO3 } from './so3.js';
import { AULAS as SO4 } from './so4.js';
import { AULAS as SO5 } from './so5.js';
import { AULAS as AN1 } from './an1.js';
import { AULAS as AN2 } from './an2.js';
import { AULAS as AN3 } from './an3.js';
import { AULAS as AN4 } from './an4.js';
import { AULAS as AN5 } from './an5.js';
import { AULAS as AS1 } from './as1.js';
import { AULAS as AS2 } from './as2.js';
import { AULAS as AS3 } from './as3.js';
import { AULAS as AS4 } from './as4.js';
import { AULAS as E1 } from './e1.js';
import { AULAS as E2 } from './e2.js';
import { AULAS as E3 } from './e3.js';
import { AULAS as E4 } from './e4.js';
import { AULAS as E5 } from './e5.js';

// As aulas novas trazem o aprofundamento no próprio objeto; as antigas o recebem de avancado.js.
export const AULAS_COMPLETAS = [
  ...AULAS_M1A, ...AULAS_M1B, ...M1C, ...M2A, ...M2B, ...AULAS_M3, ...M3B, ...M3C, ...M4A, ...M4B,
  ...M5A, ...M5B, ...M6, ...M7A, ...M7B, ...M8A, ...M8B, ...M9, ...M10A, ...M10B,
  ...M11A, ...M11B, ...M12A, ...M12B, ...M13, ...M14, ...M15, ...M16, ...H1, ...H2, ...H3, ...H4, ...H5, ...G1, ...G2, ...G3, ...G4, ...G5, ...SB1, ...SB2, ...SB3, ...SO1, ...SO2, ...SO3, ...SO4, ...SO5, ...AN1, ...AN2, ...AN3, ...AN4, ...AN5, ...AS1, ...AS2, ...AS3, ...AS4, ...E1, ...E2, ...E3, ...E4, ...E5,
].map((a) => ({ ...a, avancado: a.avancado || AVANCADO[a.id] || null }));
export const aulaPorId = Object.fromEntries(AULAS_COMPLETAS.map((a) => [a.id, a]));
