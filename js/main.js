// function Hello() { 
//     alert("================\n== Hello Midooo! ==\n================")
//     alert("5 + 5 = ?")
//     let n = prompt("Enter Right Answer: ")
//     if (n == 10) {
//         alert("================\n==== Good Job! ====\n================")
//     }
//     else {
//         alert("Noo It Is Wrong Answer :(")
//     }
//     while (n != 10) {
//         let n = prompt("Enter Right Answer: ")
//         if (n == 10) {
//             alert("================\n==== Good Job! ====\n================")
//             break
//         }
//         else {
//             alert("Noo It Is Wrong Answer :(")

//         }
        
//     }
// }

// let imgs = document.querySelectorAll(".activity div img");
// for(let i = 0; i < imgs.length; i++){
//     imgs[i].style = 'margin-right: 0px; width: 50px;'
// }
// window.alert('')
let dropDown= document.querySelector('.toggle-menu');
let ul= document.querySelector(' .navbar ul');
dropDown.addEventListener('click', ()=>{
        if(ul.style.top !== '100%'){
            ul.style.top='100%';
        }
        else{
            ul.style.top='-100px';
        }
})