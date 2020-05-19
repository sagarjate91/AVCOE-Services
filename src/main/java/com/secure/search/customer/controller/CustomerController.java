package com.secure.search.customer.controller;

import com.secure.search.customer.common.UserModel;
import com.secure.search.customer.model.Customer;
import com.secure.search.customer.repository.CustomerRepository;
import com.secure.search.customer.service.ConstantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository repo;

    @PostMapping("/signup-add")
    public String user(@Valid @ModelAttribute("command") Customer customer, Model model){
        if(repo.findByEmail(customer.getEmail())!=null){
            model.addAttribute("message","User Already added,Please try new one..!");
        }else{
            customer.setStatus(0);
            repo.save(customer);
            model.addAttribute("message","User added successfully....!!!");
        }
         return "redirect:/customer/registerPanel.htm";
    }

    @GetMapping({"/login","/user.htm"})
    public String loginUser(Model model){
        model.addAttribute("projectName", ConstantService.TITLE);
        model.addAttribute("userClickUser",true);
        model.addAttribute("action","customer/login-validate");
        model.addAttribute("command",new UserModel());
        return "page";
    }

    @PostMapping("/login-validate")
    public String loginValidate(@Valid @ModelAttribute("command")UserModel userModel,Model model,HttpSession session){
        Customer customer=repo.findByEmail(userModel.getEmail());
        if(customer==null){
            model.addAttribute("message","User does not exist");
            model.addAttribute("projectName", ConstantService.TITLE);
            model.addAttribute("userClickUser",true);
            model.addAttribute("action","customer/login-validate");
            model.addAttribute("command",new UserModel());
            return "redirect:/customer/user.htm";
        }

        if(!customer.getPassword().equals(userModel.getPassword())){
            model.addAttribute("message","Password mismatch");
            model.addAttribute("projectName", ConstantService.TITLE);
            model.addAttribute("userClickUser",true);
            model.addAttribute("action","customer/login-validate");
            model.addAttribute("command",new UserModel());
            return "redirect:/customer/user.htm";
        }
        if(customer.getStatus()!=1){
            model.addAttribute("message","Your Account not activated");
            model.addAttribute("projectName", ConstantService.TITLE);
            model.addAttribute("userClickUser",true);
            model.addAttribute("action","customer/login-validate");
            model.addAttribute("command",new UserModel());
            return "redirect:/customer/user.htm";
        }
        addUserInSession(session,customer.getEmail(),ConstantService.USER_ROLE);
        model.addAttribute("userClickUserHome",true);
        return "redirect:/customer/user-home.htm";
    }

    @GetMapping(value = {"/userHome.htm","user-home.htm"})
    public String userHome(Model model){
        model.addAttribute("userClickUserHome",true);
        return "page";
    }

    @GetMapping("/view-profile.htm")
    public String viewProfile(Model model){
        model.addAttribute("userClickUserViewProfile",true);
        return "page";
    }

    @GetMapping("/purchase-product.htm")
    public String purchaseProduct(Model model){
        model.addAttribute("userClickUserPurchaseProduct",true);
        return "page";
    }

    @GetMapping("/my-order.htm")
    public String myOrderProduct(Model model){
        model.addAttribute("userClickUserMyOrder",true);
        return "page";
    }

    public void addUserInSession(HttpSession session, String email, String role) {
        try{
            session.setAttribute("email", email);
            session.setAttribute("role", role);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session,Model model){
        session.invalidate();
        model.addAttribute("message","Logout Successfully done...!!");
        return "redirect:/customer/";
    }
}
