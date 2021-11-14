const pedidos = [
    { id: 1, prato: "x-bacon", status: "entregue", mensagem: "Pedido entregue"},
    { id: 2, prato: "sundae", status: "em preparo", mensagem: "Seu pedido está sendo preparado" },
    { id: 3, prato: "fritas média", status: "a caminho", mensagem: "Entregador a caminho, fique atento!"},
    { id: 4, prato: "nuggets", status: "entregue", mensagem: "Pedido entregue" },
    { id: 5, prato: "x-tudo", status: "a caminho", mensagem: "Entregador a caminho, fique atento!"},
  ];

  console.log("Status do pedido")
  console.log("-------------------------")
   pedidos.forEach(function (pedido) {
    console.log("Pedido " + pedido.id + " | " + pedido.prato)
    console.log("Status " + pedido.mensagem)
    console.log("============================================")
  })

 

  
  
  
