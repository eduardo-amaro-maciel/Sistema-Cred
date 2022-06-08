/** ---------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------
 */

document.querySelector('#tableExcluir')
    .addEventListener('click', function(e) {

        Swal.fire({
            title: 'Você Tem Certeza Excluir Esse Cliente?',    
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#BB2D3B',
            cancelButtonColor: '#0B5ED7',
            confirmButtonText: 'Sim, deletar!'
        }).then((result) => {
            if (result.isConfirmed) {

                // chamar função de deletar

                Swal.fire(
                    'Delatado!'
                )
            }
        })
    } 
) 

/** ---------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------
 */

const getCamposCliente = (id) => document.querySelector(id).value

document.querySelector('#btnSalvarNovoCliente')
    .addEventListener('click', function(e) {

        const objCamposCliente = {

            nome_cliente: getCamposCliente('#inputNomeCliente'),
            cpf: getCamposCliente('#inputCpf'),
            rg: getCamposCliente('#inputRg'),
            data_nascimento: getCamposCliente('#inputDataNascimento'),
            sexo: getCamposCliente('#inputSexo'),
            endereco: getCamposCliente('#inputEndereco'),
            bairro: getCamposCliente('#inputBairro'),
            cidade: getCamposCliente('#inputCidade'),
            cep: getCamposCliente('#inputCep'),
            num_casa: getCamposCliente('#inputNumeroCasa'),
            estado: getCamposCliente('#inputEstado'),
            complemento: getCamposCliente('#inputComplemento'),
            contato_1: getCamposCliente('#inputContato1'),
            contato_2: getCamposCliente('#inputContato2'),
            contato_3: getCamposCliente('#inputContato3'),
            contato_4: getCamposCliente('#inputContato4'),
            nome_mae: getCamposCliente('#inputNomeMae'),
            spc_presente: getCamposCliente('#inputSpcPresente'),
            data_abertura_crediario: getCamposCliente('#inputDataAbertura'),
            local_trabalho: getCamposCliente('#inputTrabalho'),
            salario: getCamposCliente('#inputSalario'),
            observacao: getCamposCliente('#inputObs')
        }

        console.log(objCamposCliente)

        // salvar no banco 
    }
)

/** ---------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------
 */

 const limparCamposCliente = (id) => document.querySelector(id).value = ''

 document.querySelector('#btnLimparCamposNovoCliente')
    .addEventListener('click', function(e) {

        limparCamposCliente('#inputNomeCliente')
        limparCamposCliente('#inputCpf')
        limparCamposCliente('#inputRg')
        limparCamposCliente('#inputDataNascimento')
        limparCamposCliente('#inputSexo')
        limparCamposCliente('#inputEndereco')
        limparCamposCliente('#inputBairro')
        limparCamposCliente('#inputCidade')
        limparCamposCliente('#inputCep')
        limparCamposCliente('#inputNumeroCasa')
        limparCamposCliente('#inputEstado')
        limparCamposCliente('#inputComplemento')
        limparCamposCliente('#inputContato1')
        limparCamposCliente('#inputContato2')
        limparCamposCliente('#inputContato3')
        limparCamposCliente('#inputContato4')
        limparCamposCliente('#inputNomeMae')
        limparCamposCliente('#inputSpcPresente')
        limparCamposCliente('#inputDataAbertura')
        limparCamposCliente('#inputTrabalho')
        limparCamposCliente('#inputSalario')
        limparCamposCliente('#inputObs')

    }
)

/** ---------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------
 */