console.log('true')

const container_all = document.querySelector('.container-all'),
    items = container_all.querySelectorAll('.container'),
    Resreshe = container_all.querySelector('.Resreshe'),
    article = container_all.querySelectorAll('article:not(.footer)'),
    tim = container_all.querySelector('.time'),
    flips = container_all.querySelector('.flips'),
    Allimg_png = container_all.querySelectorAll('.img-png')



console.log(article)
for (let i = 0; i < article.length; i++) {
    article[i].classList.add('disabl')
}

let srcimg = ''

function timeeeo() {
    for (let i = 0; i < article.length; i++) {
        article[i].classList.remove('disabl')
    }
    let i = setInterval(daba, 900);
    function daba() {
        let time = parseInt(tim.textContent.replace('s', ''))
        console.log(time--)

        tim.innerHTML = `${time}`
        if (time == 0) {
            clearInterval(i)
            for (let i = 0; i < items.length; i++) {
                console.log(items[i].classList.remove('Rotate'))
                console.log(items[i].classList.remove('test'))
                for (let i = 0; i < article.length; i++) {
                    article[i].classList.add('disabl')
                }
            }
        }

    }


}


Resreshe.addEventListener('click', timeeeo)

let conter = 0
items.forEach((element, index) => {
    element.addEventListener('click', e => {
        conter++
        flips.innerHTML = conter
        element.classList.add('Rotate')
        element.classList.add('test')

        if (srcimg != '') {
            console.log('noempty')
            if (element.classList.contains('test')) {
                const img = element.querySelector('.img-png')
                console.log(srcimg)
                if (img.src == srcimg.src) {
                    console.log('vrai')
                    element.classList.add('disable')
                    srcimg.parentElement.parentElement.classList.add('disable')
                    setTimeout(() => {
                        srcimg = ''
                    }, 200);



                } else {
                    console.log(element)
                    console.log(srcimg.parentElement.parentElement)
                    for (let i = 0; i < items.length; i++) {
                        if (!items[i].classList.contains('test')) {
                            items[i].classList.add('disabled')
                            setTimeout(() => {

                                items[i].classList.remove('test')
                                items[i].classList.remove('disabled')

                            }, 1400);
                        }
                        else {
                            items[i].classList.remove('test')
                        }
                    }
                    setTimeout(() => {
                        element.classList.remove('Rotate')
                        srcimg.parentElement.parentElement.classList.remove('Rotate')

                    }, 900);
                    setTimeout(() => {
                        srcimg = ''
                    }, 1100);

                }
            }
        }
        else {
            console.log('empty')
            srcimg = element.querySelector('.img-png')
            console.log(srcimg)
        }


    })
});





