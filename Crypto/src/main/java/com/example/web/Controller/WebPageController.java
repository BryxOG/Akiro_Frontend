package com.example.web.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebPageController {

    @GetMapping("/")
    public String getLoginPage()
    {
       return "forward:/LoginPage/LoginIndex.html";
    }

    @GetMapping("/cabinet")

        public String getCabinetPage()
    {
        return "forward:/CabinetPage/CabinetIndex.html";
    }


}
