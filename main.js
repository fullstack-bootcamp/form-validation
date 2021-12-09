const fullName=document.querySelector('#name')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const confirmPassword=document.querySelector('#confirm-password')
const form=document.querySelector('form')

const checkEmpty=(elements)=>{
    elements.forEach(element => {

        function showError(element,message){
            const parentElement= element.parentElement
            const successIcon=parentElement.querySelectorAll('span')[1]
           const errorIcon=parentElement.querySelectorAll('span')[0]
            errorIcon.className='font-bold text-red-600 text-xl absolute  z-50 top-4 right-1 ';
            successIcon.className='hidden'
            const messageHolder=parentElement.querySelectorAll('span')[2]
            messageHolder.innerText=message
            messageHolder.className="text-red-600 lowercase"


            
           
        }
        
        function showSuccess(element){
           const parentElement= element.parentElement
           const successIcon=parentElement.querySelectorAll('span')[1]
            successIcon.className='font-bold text-green-600 text-xl absolute  z-50 top-4 right-1';
            const errorIcon=parentElement.querySelectorAll('span')[0]
            errorIcon.className="hidden"
            const messageHolder=parentElement.querySelectorAll('span')[2]
            messageHolder.className="text-red-600 hidden"
           
        }

     
        // function showSuccess(element){
        //     element.className="ring-1 ring-green-300  w-full  px-2 py-1 mt-4 rounded"
        //     const successIcon=document.createElement('span')
        //     successIcon.innerHTML='&check';
        //     const parentElement=element.parentElement
        //     successIcon.className="font-bold text-green-600 text-xl absolute pt-4 right-4"
        //     parentElement.append(successIcon)
        //     errorIcon.className="hidden"
        // }
        if(element.value===''){
 
           showError(element,'Please Enter input')
            
            
        }else{
            showSuccess(element)
            

        }
        
    });
    

}

form.addEventListener('submit',(event)=>{
   event.preventDefault();
  
   checkEmpty([fullName,email,password,confirmPassword])
   checkEmpty([fullName,email,password,confirmPassword])
})
