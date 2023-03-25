document.querySelector("#sameAddress").addEventListener("click", function(){
    let bill = document.querySelector("#bill")
    let home = document.querySelector("#home")
    if(this.checked){
        address.value=bill.value
        address.disabled=true
    }
    else{
        address.value=""
        address.disabled=false
    }
})