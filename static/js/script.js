$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "Margherita":
                switch (size) {
                    case size = "Small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Ananas (v)":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Tonno":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Salame":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Prosciutto":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Pomodoro":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Pollo":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "Parma":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        } 
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour="Ortolana":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;  
                }
                break;
            case flavour="Napoletana":
                switch (size) {
                    case size = "small":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 1100;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            }          
        switch (topping) {
            case topping = "chilli":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mozzarella":
                totalPrice = totalPrice + 100;
                break;
            case topping = "cooked ham":
                totalPrice = totalPrice + 80;
                break;
            case topping = "parma ham":
                totalPrice = totalPrice + 90;
                break;
            case topping = "tuna":
                totalPrice = totalPrice + 150;
                break;
            case topping = "italian salami":
                totalPrice = totalPrice + 90;
                break;
            case topping = "smoked salmon":
                totalPrice = totalPrice + 160;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 130;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 100;
                break;
            case topping = "minced beef":
                totalPrice = totalPrice + 110;
                break;
            case topping = "beef ham":
                totalPrice = totalPrice + 80;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});