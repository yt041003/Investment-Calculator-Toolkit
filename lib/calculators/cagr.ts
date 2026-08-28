import {assertFinite} from './shared';
export function calculateCagr(input:{beginning:number;ending:number;years:number}){assertFinite(input);if(input.beginning<=0||input.ending<0||input.years<=0)throw new Error('Beginning value and years must be positive');const multiple=input.ending/input.beginning,cagr=(Math.pow(multiple,1/input.years)-1)*100;return{cagr,totalReturn:(multiple-1)*100,multiple}}
