$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#nova-tarefa').val();
        const list = $(".lista");
        const item = `<li>${inputTarefa}</li>`;
        $(item).appendTo(list);
        
    
        //alternativa:$('lu').on('click', 'li', function(){})
        $('li').click(function(){
            
            $(this).addClass('finalizado')
        });
        
    })
})