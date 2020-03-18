package org.javaboy.vhr.controller.system.basic;

import org.javaboy.vhr.model.Role;
import org.javaboy.vhr.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/system/basic/permiss")
public class PermissController {
    @Autowired
    RoleService roleService;
    @GetMapping("/")
    public List<Role> getAllRoles(){
        return  roleService.getAllRoles();
    }
}
