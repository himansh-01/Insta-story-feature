var arr =[
    {
     dp: "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
     story:"https://images.unsplash.com/photo-1725085815038-279c8139c8a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"   
    },
    {
     dp:"https://plus.unsplash.com/premium_photo-1683935023655-3827e4274749?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     story:"https://plus.unsplash.com/premium_photo-1667192723221-8d1dfe7bedca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"  
    },
    {
     dp: "https://images.unsplash.com/photo-1725714871742-bfb5a4817d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
     story:"https://images.unsplash.com/photo-1688982926690-8a45622a4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"   
    },
    {
     dp: "https://images.unsplash.com/photo-1725867253101-a78ead1ce5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1725119114900-71f5f72abed3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"   
    }
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem, idx){
    clutter +=`<div class="story">
               <img id ="${idx}" src="${elem.dp}">
               </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function() {
        document.querySelector("#full-screen").style.display = "none"
    },3000)
})