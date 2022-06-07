document.querySelector('.btn-danger').addEventListener('click', function(e) {
    Swal.fire({
        title: 'Você Tem Certeza Excluir Esse Cliente?',    
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
        if (result.isConfirmed) {

            // chamar função de deletar

            Swal.fire(
            'Delatado!'
            )
        }
    })
})

