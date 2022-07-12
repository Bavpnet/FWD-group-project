import React from "react";
export default function handlerror(erro: string) {
  return erro
    .slice(22, erro.length - 2)
    .split("-")
    .join(" ");
}
