export default function useMessage() {

  const g = new Date();
  const hora = g.getHours();
  let horário = "";

  if (hora >= 6 && hora < 12) {
    horário = "bom dia";
  } else if (hora >= 12 && hora < 18) {
    horário = "boa tarde";
  } else {
    horário = "boa noite";
  }

  return horário;
}
