package com.secure.search.customer.controller;

import com.secure.search.customer.common.UserModel;
import com.secure.search.customer.service.ConstantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class IndexController {

    @GetMapping({"/","/home.htm"})
    public String index(Model model){
        model.addAttribute("projectName", ConstantService.TITLE);
        model.addAttribute("userClickHome",true);
        return "page";
    }

    @GetMapping({"/signup","/registerPanel.htm"})
    public String signup(Model model){
        model.addAttribute("projectName", ConstantService.TITLE);
        model.addAttribute("userClickRegister",true);
        model.addAttribute("action","customer/signup-add");
        model.addAttribute("command",new UserModel());
        return "page";
    }
}
