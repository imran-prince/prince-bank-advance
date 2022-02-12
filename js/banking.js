// for  input field
function getinput(inputId)
{
    const inputField=document.getElementById(inputId);
    const inputvaluetxt=inputField.value;
    const inputvalueNumber=parseFloat(inputvaluetxt)
    inputField.value=''
    return inputvalueNumber
}
function tataltextField(textId,upblance)
{
    const txt=document.getElementById(textId);
    const txtvalue=txt.innerText;
    const txtnumer=parseFloat(txtvalue)
    const totalUpdate=txtnumer+upblance
     txt.innerText=totalUpdate
}
// update balcance 
function bl(blwidraw)
{
    const w=document.getElementById('blance');
    const wt=w.innerText;
    const wv=parseFloat(wt)
    if(blwidraw>wv  )
    {
        alert('sory bro your widraw smount cross your total balance')
    }
    else{
        const t=wv-blwidraw
       w.innerText=t
    }   
} 
document.getElementById('deposit-btn').addEventListener('click',function(){
        const deposit=getinput('deposit-field')
        if(deposit>0)
        {
            tataltextField('curentdeposit',deposit)
            tataltextField('blance',deposit) 
        }   
        else
        {
            alert('enter a positive number')
        }           
})
// new  blance add using javascript
document.getElementById('widraw-btn').addEventListener('click',function()
{
    const widraw=getinput('widraw-field')
    const w=document.getElementById('blance');
    const wt=w.innerText;
    const wv=parseFloat(wt)
    if(widraw<0) 
    {
        alert('enter a positive number')
    }
     
    if(widraw>0 && widraw<wv)
    {
        tataltextField('widraw',widraw)
        bl(widraw)
    } 
    
    else
    {
        alert('sorry bro your limit does not exist')

    }
})
