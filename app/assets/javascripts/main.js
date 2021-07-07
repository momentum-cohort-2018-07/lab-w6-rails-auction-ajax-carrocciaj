console.log("items index javascript")
 
 $(document).on("load", update_bid());

function update_bid() {
  setInterval(() => {
    console.log("check")
    $.ajax({type: "GET", url: "/items/update_changes"});
    
  }, 15000)
} 