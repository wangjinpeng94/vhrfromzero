package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.MenuMapper;
import org.javaboy.vhr.model.Hr;
import org.javaboy.vhr.model.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    MenuMapper menuMapper;
    public List<Menu> getMenusByHrId(){ //getMenusByHrId(Integer hrid)  这个客户端穿过来的id不要用 要用登录信息里的
        return menuMapper.getMenusByHrId(((Hr) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId());
    }

    public List<Menu> getAllMenusWithRoles() {
        return menuMapper.getAllMenusWithRole();
    }

    public List<Menu> getAllMenus() {
        return  menuMapper.getAllMenus();
    }
}
