$(document).ready(function () {
  $(document).on("click", "li", function () {
    $(this).css("textDecorationLine", "line-through");
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const container = $("input").val();
    const newItem = $(`<li>${container}</li>`);
    $(newItem).appendTo("ul");
    $("input").val("");
  });
});
