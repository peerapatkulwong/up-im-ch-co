var image_input = document.querySelector("#image_input");
var up_image = "";

image_input.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        up_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = up_image;
    });
    reader.readAsDataURL(this.files[0]);
});

clear.addEventListener('click',function(event){
    document.getElementById('put').value = '';
    document.querySelector('.out').innerHTML = '';
});