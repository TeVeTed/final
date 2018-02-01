
document.addEventListener('scroll', headerFix);

function headerFix() {

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("head").className = "col-xs-12 header activeHeader";

    }else {
        document.getElementById("head").className = "col-xs-12 header";
    }
}