function alterarEstado(elemento,numeroImagem,imagem=window.document.querySelectorAll(".dashboard__item__img")){
	if(elemento.classList.contains("dashboard__item__button--return")){
		if(window.confirm("Você deseja devolver o jogo?")){
			elemento.classList.remove("dashboard__item__button--return");
			elemento.innerText="Alugar";
			imagem[numeroImagem].classList.remove("dashboard__item__img--rented");
		}
	}else{
		if(window.confirm("Você deseja alugar o jogo?")){
			elemento.classList.add("dashboard__item__button--return");
			elemento.innerText="Devolver";
			imagem[numeroImagem].classList.add("dashboard__item__img--rented");
		}
	}
}