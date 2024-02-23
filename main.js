(function (){
    const inputGroup1 = document.getElementById("input-group-1")
    const inputGroup2 = document.getElementById("input-group-2")
    const inputGroup3 = document.getElementById("input-group-3")
    const previousBtn = document.getElementById("previous-btn")
    const submitBtn = document.getElementById("submit-btn");

    let currentInputGroup = 1;
    inputGroup2.style.display = "none";
    inputGroup3.style.display = "none";
    previousBtn.style.display = "none";

    function updateInputGroups(){
        if(currentInputGroup === 1){
            inputGroup1.style.display = "flex";
            inputGroup2.style.display = "none";
            inputGroup3.style.display = "none";
            previousBtn.style.display = "none";
            submitBtn.innerText = "Next";
            submitBtn.setAttribute("type", "button");
        } else if(currentInputGroup === 2){
            inputGroup1.style.display = "none";
            inputGroup2.style.display = "flex";
            inputGroup3.style.display = "none";
            previousBtn.style.display = "block";
            submitBtn.innerText = "Next";
            submitBtn.setAttribute("type", "button");
        } else if(currentInputGroup === 3){
            inputGroup1.style.display = "none";
            inputGroup2.style.display = "none";
            inputGroup3.style.display = "flex";
            previousBtn.style.display = "block";
            submitBtn.innerText = "Submit";
            submitBtn.setAttribute("type", "submit");
        }
    }

    previousBtn.addEventListener("click", function(){
        if(currentInputGroup > 1){
            currentInputGroup--;
            updateInputGroups();
        }
    })

    submitBtn.addEventListener("click", function(event){
        if(currentInputGroup < 3){
            currentInputGroup++;
            updateInputGroups();
            event.preventDefault();
        }
    })

})()