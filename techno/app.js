const vm = new Vue({
    el: "#app",
   data: {
    produtos: [],
    carrinho: [],
    produto: false,
    mensagemAlerta: 'Item adicionado',
    alertaAtivo: false,
    carrinhoAtivo: false,  
   },
   filters: {
    numeroPreco(value){
        return value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    }
   },
   computed: {
        carrinhoTotal(){
            let total = 0;
            if(this.carrinho.length){
                this.carrinho.forEach(item =>{
                    total += item.preco
                })
            }
            return total;
        }
   },
   methods: {
    fetchProdutos(){
        fetch("./api/produtos.json")
            .then(r => r.json())
            .then(r => {
                this.produtos = r;
            })
    },
    fetchProduto(id){
        fetch(`./api/produtos/${id}/dados.json`)
            .then(r => r.json())
            .then(r => {
                this.produto = r;
            })
    },
    abriModal(id){
        this.fetchProduto(id);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    },
    fecharModal(event){
        //verifica se o target é igual o local que chama a função
        if(event.target === event.currentTarget)
        {
            this.produto = false;
        }
    }, 
    clickForaCarrinho(event){
        //verifica se o target é igual o local que chama a função
        if(event.target === event.currentTarget)
        {
            this.carrinhoAtivo = false;
        }
    },
    adicionarItem(){
        if(this.produto.estoque > 0)
        this.produto.estoque--
        const {id, nome, preco} = this.produto;
        this.carrinho.push({id, nome, preco});
        this.alerta(`${nome} foi adicionado ao carrinho` );
    },
    removerItem(index){
        this.carrinho.splice(index,1);
        this.alerta(`foi removido` );

    },
    checarLocalStorage(){
        //verificando o localStorage
        if(window.localStorage.carrinho){
            //convertendo o localStorage de string para um objeto
            this.carrinho = JSON.parse(window.localStorage.carrinho)
        }
    },
    compararEstoque(){
        const items = this.carrinho.filter(({ id }) => id === this.produto.id);
        this.produto.estoque -= items.length;
    },
    alerta(mensagem){
        this.mensagemAlerta = mensagem;
        this.alertaAtivo = true;
        setTimeout(() => {
            this.alertaAtivo = false
        },1500)
    },
    rounter(){
        const hash = document.location.hash
        if(hash)
            this.fetchProduto(hash.replace("#",''));
    }
   },
   watch: {
    carrinho(){
        //salvando o carrinho no localStorage
        window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
    produto(){
        document.title = this.produto.id || 'Techno';
        const hash = this.produto.id || "";
        history.pushState(null,null,`#${hash}`);
        this.compararEstoque();
    }
   },
   created(){
    this.fetchProdutos();
    this.checarLocalStorage();
    this.rounter();
   },
   
})