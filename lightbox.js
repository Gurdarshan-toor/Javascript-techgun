// function to include html popup code

function includePopupHTML(){
    let html = '<div id="vis-popup"><span id="close"><img id="npop" src="https://cdn.shopify.com/s/files/1/0757/1767/3264/files/close.png?v=1718091873" alt="close-batn"></span><img id="left-arrow" src="https://cdn.shopify.com/s/files/1/0757/1767/3264/files/arrow-left.png?v=1718091017" alt="left_arr"><img id="right-arrow" src="https://cdn.shopify.com/s/files/1/0757/1767/3264/files/arrow-right.png?v=1718091017" alt="right_arr"><img id="main-pop-img" src="https://cdn.shopify.com/s/files/1/0757/1767/3264/files/portfolio-img1.jpg?v=1713960910" alt="main-pop-img"></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)
}
includePopupHTML();