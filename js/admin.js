document.getElementById('log-btn').addEventListener('click',function(){
    const userfield=document.getElementById('usermail')
    const uemail=userfield.value;
        const usepassrfield=document.getElementById('userpass')
        if(uemail=='prince@ceo.com' && usepassrfield.value=='imran')
        {
            window.location.href='banking.html'
            
        }
        else
        {
            alert('pleae correct password and email')
        }
    userfield.value=''
    
})