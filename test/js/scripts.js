$(document).ready(function() {

    $(function(){
        setInterval(function(){
            	$('.ice-cream').attr("src", "img/ice-cream1.png");
            	setTimeout(function(){
            		$('.ice-cream').attr("src", "img/ice-cream2.png");
            		setTimeout(function(){
            			$('.ice-cream').attr("src", "img/ice-cream3.png");
           				setTimeout(function(){
            				$('.ice-cream').attr("src", "img/ice-cream4.png");
            			}, 1250);
            		}, 1250);
            	}, 1250);
        }, 5000);
    });

    $('.log-in a').click(function(){
        $('.log-cont').slideToggle(100);
        $('.log-in span').fadeToggle(100);
    })

    $('#help-conv img').click(function(){
        $('.chat-box').slideToggle(10);
        
    })

    $('.filters-icons button').click(function(){
        var color = $(this).css('backgroundColor');
        console.log(color);
        if (color == 'rgb(231, 60, 84)') {
            $(this).css({backgroundColor: 'transparent'});    
        } else {
            $(this).css({backgroundColor: '#e73c54'});
        }
    })

    var w = $('.photo-lab').width();
    var l = $('.photo').lenght;
   

    var pw = $('.photo').width();

    function slider() {
    	$('.photo:first-child').animate({
    		marginLeft: - pw,
    	}, 3000, function(){
    		$(this).appendTo($(this).parent()).css({marginLeft: '0'})
    	});
    }

    var timer = setInterval(slider, 2500);

    $('.photos .photo').hover(function(){
    	clearInterval(timer);
    	$('.photos .photo img:hover').css({opacity: '0.4'});
    	$('.photo:hover .photo-hov').css({display: 'inline-flex'});
    }, function(){
    	$('.photos .photo img').css({opacity: '1'});
    	$('.photo .photo-hov').css({display: 'none'});
    	timer = setInterval(slider, 2500);
    });

    var empty = "";
    var full = "-full";

    $(".photo-htxt .like").click(function(){
    	var likes = parseInt($(this).siblings('.like-count').text());
    	if ( $(this).attr("src") == ("img/heart.png") ) {
    		$(this).attr("src", "img/heart" + full + ".png");
    		$(this).siblings('.like-count').text(likes + 1);
    	}
    	else {
    		$(this).siblings('.like-count').text(likes - 1);
    		$(this).attr("src", "img/heart.png")
    	}
	});

    $(window).scroll(function () {
        var currentScrollPosition = $(window).scrollTop();
        if (currentScrollPosition <= 800) {
            $("#help-conv .chat-box").css({backgroundColor: '#e74b4b'})
        }
        else if (currentScrollPosition <= 1600) {
            $("#help-conv .chat-box").css({backgroundColor: '#c14be7'})
        }
        else if (currentScrollPosition <= 2300) {
            $("#help-conv .chat-box").css({backgroundColor: '#4bd9e7'})
        }
        else if (currentScrollPosition <= 3500) {
            $("#help-conv .chat-box").css({backgroundColor: '#6ae74b'})
        }
        else {
            $("#help-conv .chat-box").css({backgroundColor: '#e7a94b'})
        }
    })
    
    $('.enter').click(function(){
        var userTxt = $('.user-txt').val();
        $( '.chat-win' ).append("<br><div class=\"QU\">" + userTxt + " :U</div>");
        $('.user-txt').val('');
        setTimeout(function(){
            $( '.chat-win' ).append("<br><p class=\"QS\">Davison's: Yes, Of course!</p>");
            $('.chat-win').scrollTop($('.chat-win')[0].scrollHeight);
        }, 500)
    })

    $('.user-txt').on("keypress", function(e){
        if (e.which == 13) {
            var userTxt = $('.user-txt').val();
            $( '.chat-win' ).append("<br><div class=\"QU\">" + userTxt + " :U</div>");
            $('.user-txt').val('');
            setTimeout(function(){
                $( '.chat-win' ).append("<br><p class=\"QS\">Davison's: Yes, Of course!</p>");
                $('.chat-win').scrollTop($('.chat-win')[0].scrollHeight);
            }, 500)
        }
    })

    var src = ['img/ball1.png', 'img/ball2.png', 'img/ball3.png', 'img/ball4.png', 'img/ball5.png', 'img/ball6.png', 'img/ball7.png', 'img/ball8.png'];
    var n = 1;

    function balls(){
        $('.ball1').fadeOut(100, function() {
            $(this).attr('src', src[n]);
            $(this).fadeIn(100, function() {
                $('.ball3').fadeOut(100, function() {
                    $(this).attr('src', src[n+3]);
                    $(this).fadeIn(100, function() {
                        $('.ball2').fadeOut(100, function() {
                            $(this).attr('src', src[n+2]);
                            $(this).fadeIn(100, function() {
                                $('.ball4').fadeOut(100, function() {
                                    $(this).attr('src', src[n+1]);
                                    $(this).fadeIn(100, function() {
                                        if (n == src.length-4) { n = 0; }
                                        else { n++; }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    
    setInterval (balls, 4000);
    
    $('.ball1, .ball2, .ball3, .ball4').hover(function(){
        if ($(this).attr('src') == (src[0])) {
            $(this).attr("src", "img/ball1-fav.png");
        } else if ($(this).attr('src') == (src[1])) {
            $(this).attr("src", "img/ball2-fav.png");
        } else if ($(this).attr('src') == (src[2])) {
            $(this).attr("src", "img/ball3-fav.png");
        } else if ($(this).attr('src') == (src[3])) {
            $(this).attr("src", "img/ball4-fav.png");
        } else if ($(this).attr('src') == (src[4])) {
            $(this).attr("src", "img/ball5-fav.png");
        } else if ($(this).attr('src') == (src[5])) {
            $(this).attr("src", "img/ball6-fav.png");
        } else if ($(this).attr('src') == (src[6])) {
            $(this).attr("src", "img/ball7-fav.png");
        } else {
            $(this).attr("src", "img/ball8-fav.png");
        }
    }, function(){
        if ($(this).attr('src') == ("img/ball1-fav.png")) {
            $(this).attr("src", src[0]);
        } else if ($(this).attr('src') == ("img/ball2-fav.png")) {
            $(this).attr("src", src[1]);
        } else if ($(this).attr('src') == ("img/ball3-fav.png")) {
            $(this).attr("src", src[2]);
        } else if ($(this).attr('src') == ("img/ball4-fav.png")) {
            $(this).attr("src", src[3]);
        } else if ($(this).attr('src') == ("img/ball5-fav.png")) {
            $(this).attr("src", src[4]);
        } else if ($(this).attr('src') == ("img/ball6-fav.png")) {
            $(this).attr("src", src[5]);
        } else if ($(this).attr('src') == ("img/ball7-fav.png")) {
            $(this).attr("src", src[6]);
        } else if ($(this).attr('src') == ("img/ball8-fav.png")) {
            $(this).attr("src", src[7]);
        } else {
            // $(this).attr();
        }  
    });

    $('.event-section1').mouseover(function() {
        $(this).addClass('swing');
        $(this).css({transform: "rotate(0deg)"})
    });
    $('.event-section1').mouseout(function(){
        $(this).removeClass('swing');
    });

    $('#myModal').modal('handleUpdate');

    var shoppingCart = (function(){
        
        var cartPList = [];

        function Item(productName, productPrice, productImage, productCount) {
            this.productName = productName;
            this.productImage = productImage;
            this.productPrice = productPrice;
            this.productCount = productCount;
        }

        function saveCart() {
            sessionStorage.setItem('shoppingCart', JSON.stringify(cartPList));
        }

        function loadCart() {
            cartPList = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
            loadCart();
        }

        var obj = {};

        obj.addItemToCart = function(productName, productPrice, productImage, productCount) {
            for (var item in cartPList) {
                if (cartPList[item].productName === productName) {
                    cartPList[item].productCount ++;
                    saveCart();
                    return;
                }
            }
            var item = new Item(productName, productPrice, productImage, productCount);
            cartPList.push(item);
            saveCart();
        }
        obj.setCountForItem = function(productName, productCount) {
            for(var i in cartPList) {
                if (cartPList[i].productName === productName) {
                    cartPList[i].productCount = productCount;
                    break;
                }
            }
            saveCart();
        }
        obj.removeItemFromCart = function(productName) {
            for (var item in cartPList) {
                if (cartPList[item].productName === productName) {
                    cartPList[item].productCount --;
                    if (cartPList[item].productCount === 0) {
                        cartPList.splice(item, 1);
                    }
                    break;
                }
            }
            saveCart();
        }
        obj.removeItemFromCartAll = function(productName) {
            for (var item in cartPList) {
                if (cartPList[item].productName === productName) {
                    cartPList.splice(item, 1);
                    break;
                }
            }
            saveCart();
        }
        obj.clearCart = function() {
            cartPList = [];
            saveCart();
        }
        obj.totalCount = function() {
            var totalCount = 0;
            for (var item in cartPList) {
                totalCount += cartPList[item].productCount;
            }
            return totalCount;
        }
        obj.totalCart = function() {
            var totalCart = 0;
            for (var item in cartPList) {
                totalCart += cartPList[item].productPrice * cartPList[item].productCount;
            }
            return Number(totalCart.toFixed(2));
        }
        obj.listCart = function() {
            var cartCopy = [];
            for (i in cartPList) {
                item = cartPList[i];
                itemCopy = {};
                for (p in item) {
                    itemCopy[p] = item[p];

                }
                itemCopy.total = Number(item.productPrice * item.productCount).toFixed(2);
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        }

        return obj;
    })();

    $('.favs button').click(function(event) {
        event.preventDefault();
        var productImage = $(this).parent().siblings('.favs img').attr('src');
        var productName = $(this).siblings('.favs h2').text();
        var productPrice = +($(this).siblings('.favs span').text());
        shoppingCart.addItemToCart(productName, productPrice, productImage, 1);
        displayCart();
    });

    $('.clear-cart').click(function() {
        var txt;
        var r = confirm("Do NOT do this!");
        if (r == true) {
          txt = "You pressed OK!";
            shoppingCart.clearCart();
            displayCart();
        } else {
          txt = "You pressed Cancel!";
          displayCart();
        }
    })

    function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for (var i in cartArray) {
            output += "<li class=\"" + i + " product col-md-6 \">"
            + "<div class=\"cart-fav-img\">"
            + "<img src=\"" + cartArray[i].productImage + "\"></div>"
            + "<div class=\"cart-cont\">"
            + "<div class=\"cart-fav-info\">"
            + "<span class=\"cart-fav-name\">" + cartArray[i].productName + "</span>"
            + "<span class=\"cart-fav-price\">" + cartArray[i].productPrice + "</span>"
            + "<input class=\"item-count form-control\" data-name=\"" + cartArray[i].productName + "\" type=\"number\" min=\"1\" value=\"" + cartArray[i].productCount + "\">"
            + "<span class=\"cart-fav-total\">" + cartArray[i].total + "</span>"
            + "<button class=\"btn-remove\" data-name=\"" + cartArray[i].productName + "\">x</button></div>"
            + "</div></li>";

        }
        $('.cart-list').html(output);
        $('.cart-total').html(shoppingCart.totalCart());
        $('.total-count').html(shoppingCart.totalCount());
    }

    $('.cart-list').on("click", ".btn-remove", 
        function(event) {
            var productName = $(this).data('name')
            shoppingCart.removeItemFromCartAll(productName);
            displayCart();
    })

    $('.cart-list').on("click", ".minus-item",
        function(event) {
            var productName = $(this).data('name')
            shoppingCart.removeItemFromCart(productName);
            displayCart();
    })

    $('.cart-list').on("click", ".plus-item",
        function(event) {
            var productName = $(this).data('name')
            shoppingCart.addItemToCart(productName);
            displayCart();
    })

    $('.cart-list').on("change", ".item-count",
        function(event) {
            var productName = $(this).data('name');
            var productCount = +($(this).val());
            shoppingCart.setCountForItem(productName, productCount);
            displayCart();
    });

    displayCart(); 

});


    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);




