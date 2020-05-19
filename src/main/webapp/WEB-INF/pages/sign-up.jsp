   <%@taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>			
   
    <div class="row">
     
     <div class="col-md-offset-3 col-md-6">
      
      <div class="panel panel-primary">
       
       <div class="panel-heading">
        <h4>Register</h4>
       </div>
       
       <div class="panel-body">
       
         <sf:form action="${contextRoot}/${action}" modelAttribute="command" method="POST" enctype="multipart/form-data" class="form-horizontal" id="userForm">
       
          <div class="form-group">
          <label for="firstname" class="col-md-4 control-label">FirstName: </label>
          <div class="col-md-8">
           <sf:input path="firstname" id="firstname" class="form-control" placeholder="Enter the firstname"/>
           <sf:errors path="firstname" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <label for="lastname" class="col-md-4 control-label">LastName: </label>
          <div class="col-md-8">
           <sf:input path="lastname" id="lastname" class="form-control" placeholder="Enter the lastname"/>
           <sf:errors path="lastname" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <label for="email" class="col-md-4 control-label">Email: </label>
          <div class="col-md-8">
           <sf:input path="email" id="email" class="form-control" placeholder="Enter the email"/>
           <sf:errors path="email" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <label for="password" class="col-md-4 control-label">Password: </label>
          <div class="col-md-8">
           <sf:input type="password" path="password" id="password" class="form-control" placeholder="Enter the password"/>
           <sf:errors path="password" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <label for="mobile_number" class="col-md-4 control-label">Mobile: </label>
          <div class="col-md-8">
           <sf:input path="mobile_number" id="mobile_number" class="form-control" placeholder="xxxxxxxxxx"/>
           <sf:errors path="mobile_number" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <label for="pincode" class="col-md-4 control-label">Pincode: </label>
          <div class="col-md-8">
           <sf:input path="pincode" id="pincode" class="form-control" placeholder="Enter the pincode"/>
           <sf:errors path="pincode" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
          
         <div class="form-group">
          <label for="address" class="col-md-4 control-label">Address: </label>
          <div class="col-md-8">
           <sf:textarea path="address" id="address" class="form-control" placeholder="Enter the address"></sf:textarea>
           <sf:errors path="address" cssClass="help-block" element="em"/> 
          </div>
         </div>
         
         <div class="form-group">
          <div class="col-md-offset-4 col-md-8">
           <input type="submit" value="Register" class="btn btn-primary"/>
          </div>
         </div>
        </sf:form>	
       
       </div>
      
      
       <div class="panel-footer">
       	<div class="text-right">
     	      New User - <a href="${contextRoot}/customer/user.htm">Login Here</a>
       	</div>
        </div>
      
      </div> 
    
     </div>
     
    </div>    
   
