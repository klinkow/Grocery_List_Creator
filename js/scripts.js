var orglist = ["item1", "item2", "item3", "item4"];






$(function() {
  $("#input form").submit(function(event) {
    orglist.toUpperCase();
    orglist.sort();

    $("#list").show();
    // orglist.toUpperCase.sort()

    event.preventDefault();

  });
});
