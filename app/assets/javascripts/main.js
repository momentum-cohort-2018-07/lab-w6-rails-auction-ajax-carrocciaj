$(document).load(function() { 
  setInterval(function() {
      $("#refresh").load('<%= @bid.amount %>');
  },1000);
});