package org.javaboy.vhr.controller.system.basic;

import org.apache.ibatis.annotations.Param;
import org.javaboy.vhr.model.Menu;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.model.Role;
import org.javaboy.vhr.service.MenuRoleService;
import org.javaboy.vhr.service.MenuService;
import org.javaboy.vhr.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/basic/permiss")
public class PermissController {
    @Autowired
    RoleService roleService;
    @Autowired
    MenuService menuService;
    @Autowired
    MenuRoleService menuRoleService;

    @GetMapping("/")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @GetMapping("/menus")
    public List<Menu> getAllMenus() {

        return menuService.getAllMenus();
    }

    @GetMapping("/mids/{rid}")
    public List<Integer> getMidsByRid(@PathVariable Integer rid) {
        List<Integer> list = menuService.getMidsByRid(rid);
        System.out.println("list:" + list.toArray().toString());
        return menuService.getMidsByRid(rid);
    }

    @PutMapping("/")
    public RespBean updateMenuRole(@Param("rid") Integer rid, @Param("mids") Integer[] mids) {
        if (menuRoleService.updateMenuRole(rid, mids) == mids.length) {
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");

    }

    @PostMapping("/role")
    public RespBean addRole(@RequestBody Role role) {
        if (!role.getName().startsWith("ROLE_")) {
            role.setName("ROLE_" + role.getName());
        }
        if (roleService.addRole(role) == 1) {
            return RespBean.ok("添加成功！");
        }
        return RespBean.error("添加失败！");

    }

    @DeleteMapping("/role/{rid}")
    public RespBean deleteRole(@PathVariable("rid") Integer rid) {
        if (roleService.deleteRole(rid) == 1) {
            return RespBean.ok("删除成功！");

        }
        return RespBean.error("删除失败！");
    }

}
