export const currency=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
export const percent=(n:number)=>`${n.toFixed(2)}%`;
export const number=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});
