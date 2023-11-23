function addTask(nomeTarefa) {
    const listItem = $("<li>").text(nomeTarefa);
    $("#lista").append(listItem);
}

function toggleTaskCompletion() {
    $(this).toggleClass("completed");
}

$(document).ready(function() {

    $("#Form").submit(function(event) {
        event.preventDefault();
        const nomeTarefa = $("#Tarefa").val().trim();

        if (nomeTarefa !== "") {
            addTask(nomeTarefa);
            $("#Tarefa").val("");
        }
    });

    $(document).on("click", "#lista li", toggleTaskCompletion);
});