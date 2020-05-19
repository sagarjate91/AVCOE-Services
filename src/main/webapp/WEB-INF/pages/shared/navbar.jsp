<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="${contextRoot}/customer/">Secure Search Engine for shopping</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
					<c:if test="${sessionScope.role==null}">

						<li id="home"><a href="${contextRoot}/customer/home.htm">Home</a></li>
						<li id="user"><a href="${contextRoot}/customer/user.htm">User</a></li>
						<li id="admin"><a href="${contextRoot}/admin/adminPanel.htm">Admin</a></li>
						<li id="signup"><a href="${contextRoot}/customer/registerPanel.htm">Signup</a></li>

					</c:if>

					<c:if test="${sessionScope.role=='USER'}">

						<li id="userhome"><a href="${contextRoot}/customer/user-home.htm">Home</a></li>
						<li id="userviewprofile"><a href="${contextRoot}/customer/view-profile.htm">view Profile</a></li>
						<li><a href="${contextRoot}/customer/logout">Logout</a></li>

					</c:if>

					<c:if test="${sessionScope.role=='ADMIN'}">

						<li id="adminhome"><a href="${contextRoot}/admin/adminHome.htm">Home</a></li>
						<li id="adminproduct"><a href="${contextRoot}/admin/Product.htm">Product</a></li>
						<li id="adminproductlist"><a href="${contextRoot}/admin/ProductList.htm">Product List</a></li>
						<li><a href="${contextRoot}/admin/logout">Logout</a></li>

					</c:if>

				</ul>
			    

                
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

