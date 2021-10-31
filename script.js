send.addEventListener("click",fnc);
function fnc()
{
    let val_srednie = srednie.value;
    let val_vypushenno = vypushenno.value;
    let val_skorost = skorost.value;
    let val_result;
    
    val_result = val_srednie*val_vypushenno/val_skorost;
    
    result.innerHTML = val_result;
}