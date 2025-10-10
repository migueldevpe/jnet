export default function useMessage(): string {
  const horas: number = Number(new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    hour12: false
  }));

  let horário = "";

  if (horas >= 6 && horas < 12) {
    horário = "bom dia";
  } else if (horas >= 12 && horas < 18) {
    horário = "boa tarde";
  } else {
    horário = "boa noite";
  }

  return horário;
}
