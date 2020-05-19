<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

  <div class="list-group">

    <c:if test="${sessionScope.role=='ADMIN'}">

   	<c:forEach items="${categories}" var="category">
   		<a href="${contextRoot}/admin/show/category/${category.name}/products" class="list-group-item" id="a_${category.name}">${category.name}</a>
   	</c:forEach>

   	</c:if>


      <!--  User Panel -->
      <c:if test="${sessionScope.role =='USER'}">

          <div class="list-group">
                <a href="${contextRoot}/customer/user-home.htm" class="list-group-item" id="a_${title}">All Products</a>
                <a href="${contextRoot}/customer/my-order.htm" class="list-group-item" id="a_${title}">My Order</a>
                <a href="${contextRoot}/customer/purchase-product.htm" class="list-group-item" id="a_${title}">Purchase Order</a>
          </div>

      </c:if>

  </div>