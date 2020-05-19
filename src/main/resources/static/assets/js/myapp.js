$(function() {
	
	// for adding a loader
	$(window).load(function(){
		setTimeout(function() {
			$(".se-pre-con").fadeOut("slow");
		},500);
	});	
	
	/* for fading out the alert message after 2 seconds */
	$alert = $('.alert');
	if($alert.length) {
		setTimeout(function() {
	    	$alert.fadeOut('slow');
		   }, 1000
		);		
	}

	// solving the active menu problem
    	switch (menu) {
    	case 'Home':
    		$('#home').addClass('active');
    		break;
    	case 'User':
    		$('#user').addClass('active');
    		break;
    	case 'Admin':
    		$('#admin').addClass('active');
    		break;
    	case 'Signup':
    		$('#signup').addClass('active');
    		break;
    	default:
    		if (menu == "Home")
    			break;
    		$('#adminproductlist').addClass('active');
    		$('#a_'+ menu).addClass('active');
    		break;
    	}

  /* ................................................*/

    var $table = $('#productListTable');

    if ($table.length) {

        var jsonUrl = '';
        if (window.category == '') {
        	jsonUrl = window.contextRoot + '/admin/json/data/all/products';
        } else {
        	jsonUrl = window.contextRoot + '/admin/json/data/category/'+ window.category+ '/products';
        }

        $table
            .DataTable({
                lengthMenu : [ [ 3, 5, 10, -1 ],
                    [ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
                pageLength : 5,
                ajax : {
                    url : jsonUrl,
                    dataSrc : ''
                },
                columns : [
                    {
                        data:'productId'
                    },
                    {
                        data : 'fileName',
                        bSortable : false,
                        mRender : function(data, type, row) {
                            return '<img src="' + window.contextRoot
                                + '/assets/images/' + data +'" width="100" height="80"/>';
                        }
                    },
                    {
                        data : 'postName',
                        mRender : function(data, type, row) {
                        if (data==null) {
                           return '<span style="color:red">Post Name is changed!</span>';
                        }
                           return data;
                        }
                    },
                    {
                        data : 'category',
                        mRender : function(data, type, row) {
                        if (data==null) {
                              return '<span style="color:red">Category is changed!</span>';
                        }
                        return data;
                        }
                    },
                    {
                        data : 'modelNo',
                        mRender : function(data, type, row) {
                        if (data==null) {
                            return '<span style="color:red">Model No is changed!</span>';
                        }
                        return data;
                        }
                    },
                    {
                        data : 'price',
                        mRender : function(data, type, row) {
                            return '&#8377; ' + data
                        }
                    },
                    {
                        data : 'quantity',
                        mRender : function(data, type, row) {
                            if (data < 1) {
                                return '<span style="color:red">Out of Stock!</span>';
                            }
                            return data;
                        }
                    },
                    {
                        data : 'description',
                        mRender : function(data, type, row) {
                        if (data==null) {
                            return '<span style="color:red">Description is changed!</span>';
                        }
                            return data;
                        }
                    },
                    {
                        data : 'active',
                        bSortable : false,
                        mRender : function(data, type, row) {
                        var str = '';
                        if(data) {
                            str += '<label class="switch"> <input type="checkbox" value="'+row.productId+'" checked="checked">  <div class="slider round"> </div></label>';

                        }else {
                            str += '<label class="switch"> <input type="checkbox" value="'+row.productId+'">  <div class="slider round"> </div></label>';
                    }

                    return str;
                    }
                },
                {
                      data : 'productId',
                      bSortable : false,
                      mRender : function(data, type, row) {

                      var str = '';

                       str += '<a href="'
                       + window.contextRoot
                       + '/admin/show/'
                       + data
                       + '/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';

                      return str;
                      }

                 },
                 {
                                        data : 'productId',
                                        bSortable : false,
                                        mRender : function(data, type, row) {

                                        var str = '';
                                        str += '<a href="'
                                        + window.contextRoot
                                        + '/admin/manage/'
                                        + data
                                        + '/product" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></a> &#160;';

                                        return str;

                                    }

                 }

          ],
                initComplete: function () {
                    var api = this.api();
                    api.$('.switch input[type="checkbox"]').on('change' , function() {
                        var dText = (this.checked)? 'You want to activate the Product?': 'You want to de-activate the Product?';
                        var checked = this.checked;
                        var checkbox = $(this);
                        debugger;
                        bootbox.confirm({
                            size: 'medium',
                            title: 'Product Activation/Deactivation',
                            message: dText,
                            callback: function (confirmed) {
                                if (confirmed) {
                                    $.ajax({
                                        type: 'PUT',
                                        url: window.contextRoot + '/admin/manage/product/'+checkbox.prop('value')+'/activation',
                                        timeout : 100000,
                                        success : function(data) {
                                            bootbox.alert(data);
                                        },
                                        error : function(e) {
                                            bootbox.alert('ERROR: '+ e);
                                            //display(e);
                                        }
                                    });
                                }
                                else {
                                    checkbox.prop('checked', !checked);
                                }
                            }
                        });
                    });

                }

            });
    }

    /* User  */


    var $productListTable1 = $('#productListTable1');

    if ($productListTable1.length) {

        var jsonUrl = window.contextRoot + '/admin/json/data/all/products';
        $productListTable1
            .DataTable({
                lengthMenu : [ [ 3, 5, 10, -1 ],
                    [ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
                pageLength : 5,
                ajax : {
                    url : jsonUrl,
                    dataSrc : ''
                },
                columns : [
                    {
                        data:'productId'
                    },
                    {
                        data : 'fileName',
                        bSortable : false,
                        mRender : function(data, type, row) {
                            return '<img src="' + window.contextRoot
                                + '/assets/images/' + data +'" width="100" height="80"/>';
                        }
                    },
                    {
                        data : 'postName',
                        mRender : function(data, type, row) {
                           if (data==null) {
                               return '<span style="color:red">Malicious data!</span>';
                           }
                           return data;
                        }
                    },
                    {
                        data : 'category',
                        mRender : function(data, type, row) {
                          if (data==null) {
                             return '<span style="color:red">Malicious data!</span>';
                          }
                          return data;
                        }
                    },
                    {
                       data : 'modelNo',
                       mRender : function(data, type, row) {
                          if (data==null) {
                            return '<span style="color:red">Malicious data!</span>';
                          }
                          return data;
                       }
                    },
                    {
                       data : 'price',
                       mRender : function(data, type, row) {
                          return '&#8377; ' + data
                       }
                    },
                    {
                       data : 'quantity',
                       mRender : function(data, type, row) {
                            if (data < 1) {
                                return '<span style="color:red">Out of Stock!</span>';
                            }
                            return data;
                         }
                    },
                    {
                        data : 'description',
                        mRender : function(data, type, row) {
                            if (data==null) {
                                return '<span style="color:red">Malicious data!</span>';
                            }
                            return data;
                        }
                    }
                ]

            });
    }


    /*User DataTable Plugin*/

    var $tableUser = $('#userListTable');

    if($tableUser.length){

        var jsonurl='';
        jsonurl=window.contextRoot+'/admin/all/Users';

        $tableUser.DataTable({

            ajax:{
                lengthMenu:[[5,10,20,-1],['5 Records','10 Records','20 Records','All']],
                pageLength:5,

                url:jsonurl,
                dataSrc:''
            },
            columns:[

                {
                    data:'id'
                },
                {
                    data:'firstname'
                },
                {
                    data:'lastname'
                },
                {
                    data:'email'
                },
                {
                    data:'mobile_number'
                },
                {
                    data:'pincode'
                },
                {
                    data:'address'
                },
                {
                    data:'status',
                    bSortable : false,
                    mRender : function(data, type, row) {
                        var str = '';
                        if(data=='0') {
                            str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
                        }else {
                            str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
                        }
                        return str;
                    }
                }
            ],

            initComplete: function () {
                var api = this.api();
                api.$('.switch input[type="checkbox"]').on('change' , function() {
                    var dText = (this.checked)? 'You want to activate the User?': 'You want to de-activate the User?';
                    var checked = this.checked;
                    var checkbox = $(this);
                    debugger;
                    bootbox.confirm({
                        size: 'medium',
                        title: 'User Activation/Deactivation',
                        message: dText,
                        callback: function (confirmed) {
                            if (confirmed) {
                                $.ajax({
                                    type: 'PUT',
                                    url: window.contextRoot + '/admin/manage/'+checkbox.prop('value')+'/activation',
                                    timeout : 100000,
                                    success : function(data) {
                                        bootbox.alert(data);
                                    },
                                    error : function(e) {
                                        bootbox.alert('ERROR: '+ e);
                                    }
                                });
                            }
                            else {
                                checkbox.prop('checked', !checked);
                            }
                        }
                    });
                });
            }
        });
    }


//.....................................................................................



    /*validating the loginform*/

	var $userForm = $('#userForm');
	
	if($userForm.length) {
		
		$userForm.validate({			
				rules: {
					
					firstname: {
						required: true,
					},
					lastname: {
						required: true,	
					},
					email: {
						required: true,
						email: true
					},
					password: {
						required: true
					},
					mobile_number: {
						required: true
					},
					pincode: {
						required: true
					},
					address: {
						required: true
					}
				},
				messages: {					
					firstname: {
						required: 'Please enter your firstname!'
					},
					lastname: {
						required: 'Please enter your lastname!'
					},
					email: {
						required: 'Please enter your email!',
						email: 'Please enter a valid email address!'
					},
					password: {
						required: 'Please enter your password!'
					},
					mobile_number: {
						required: 'Please enter your mobile number!',
					},
					pincode: {
						required: 'Please enter your pincode!'
					},
					address: {
						required: 'Please enter your address!'
					}
				},
				errorElement : "em",
				errorPlacement : function(error, element) {
					// Add the 'help-block' class to the error element
					error.addClass("help-block");
					
					// add the error label after the input element
					error.insertAfter(element);
				}				
			}
		
		);
		
	}	
	
//.....................................................................................	


    /*validating the loginform*/

    var $productForm = $('#productForm');

    if($productForm.length) {

        $productForm.validate({
                rules: {

                    postName: {
                        required: true,
                    },
                    category: {
                        required: true,
                    },
                    modelNo: {
                        required: true,
                    },
                    price: {
                        required: true,
                        number:true
                    },
                    quantity: {
                        required: true,
                        number:true
                    },
                    description: {
                        required: true,
                    }
                },
                messages: {
                    postName: {
                        required: 'Please enter your product name!'
                    },
                    category: {
                        required: 'Please enter your category!'
                    },
                    modelNo: {
                        required: 'Please enter your model no!',
                    },
                    price: {
                        required: 'Please enter your price!',
                    },
                    quantity: {
                        required: 'Please enter at least one quantity!',
                    },
                    description: {
                        required: 'Please enter your description!'
                    }
                },
                errorElement : "em",
                errorPlacement : function(error, element) {
                    // Add the 'help-block' class to the error element
                    error.addClass("help-block");

                    // add the error label after the input element
                    error.insertAfter(element);
                }
            }

        );

    }



    var $loginForm = $('#loginForm');

    if($loginForm.length) {

        $loginForm.validate({
                rules: {

                    email: {
                        required: true,
                        email:true
                    },
                    password: {
                        required: true,
                    }
                },
                messages: {
                    email: {
                        required: 'Please enter your email id!',
                        email:'Please enter valid email id!'
                    },
                    password: {
                        required: 'Please enter your password!'
                    }
                },
                errorElement : "em",
                errorPlacement : function(error, element) {
                    // Add the 'help-block' class to the error element
                    error.addClass("help-block");

                    // add the error label after the input element
                    error.insertAfter(element);
                }
            }

        );

    }


});