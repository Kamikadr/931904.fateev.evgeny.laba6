var cat = document.querySelector(".cat_column")
var dog = document.querySelector(".dog_column")

function increaseRightColumn()
{
    if(!cat.classList.contains('active'))
    {
        dog.classList.remove('active')
        cat.classList.add('active')
    }
    
}

function increaseLeftColumn()
{
    if(!dog.classList.contains('active'))
    {
        cat.classList.remove('active')
        dog.classList.add('active')
    }
    
}

function getBothColumn()
{
    cat.classList.remove('active')
    dog.classList.remove('active')
    
}