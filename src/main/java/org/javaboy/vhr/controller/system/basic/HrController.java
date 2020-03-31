package org.javaboy.vhr.controller.system.basic;

import org.javaboy.vhr.model.Hr;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.model.Role;
import org.javaboy.vhr.service.HrService;
import org.javaboy.vhr.service.RoleService;
import org.javaboy.vhr.utils.HrUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/hr")
public class HrController {
    @Autowired
    HrService hrService;
    @Autowired
    RoleService roleService;

    @GetMapping("/")
    public List<Hr> getAllHrs(  String keywords)
    {
        return  hrService.getAllHrs(keywords);
    }
    @PutMapping("/")
    public RespBean updateHr(@RequestBody Hr hr){
        if (hrService.updateHr(hr)==1) {
            return RespBean.ok("修改成功！");
        }
        return RespBean.error("修改失败！");
    }
    @GetMapping("/roles")
    public List<Role> getAllRoles(){
        return  roleService.getAllRoles();
    }
    @PutMapping("/role")
    public RespBean updateHrRole(Integer hrid,Integer[] rids){
        if (hrService.updateHrRole(hrid,rids)) {
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");
    }

}
