var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

$(document).ready(function() {
    $(SmallImg[0]).click(function() {
        ProductImg.src = SmallImg[0].src
    });
    $(SmallImg[1]).click(function() {
        ProductImg.src = SmallImg[1].src
    });
    $(SmallImg[2]).click(function() {
        ProductImg.src = SmallImg[2].src
    });
    $(SmallImg[3]).click(function() {
        ProductImg.src = SmallImg[3].src
    });
    $('.product-inf a').click(function() {
    
        $('.product-inf li').removeClass('active');
        $(this).parent().addClass('active');
    
        let currentTab = $(this).attr('href');
        $('.tabs-content div').hide();
        $(currentTab).show();
    
        return false;
    });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));